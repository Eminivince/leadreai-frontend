/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a self-contained server bundle (.next/standalone) so the
  // production Docker image ships only the files actually traced as
  // needed, instead of the full node_modules tree.
  output: 'standalone',
  eslint: {
    // ESLint runs in CI separately; not a deploy gate.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    return [
      {
        source: '/api/v1/:path*',
        destination: `${apiUrl}/api/v1/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    // Resolve .js ESM-style imports to .ts source files (needed because
    // shared/ uses NodeNext-style explicit .js extensions to stay
    // compatible with the backend repo's runtime).
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
      '.jsx': ['.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    };
    // Silence the known noisy "Critical dependency: the request of a
    // dependency is an expression" warning emitted by
    // @opentelemetry/instrumentation (pulled in transitively via
    // @sentry/nextjs → @sentry/node → @fastify/otel). Sentry works fine;
    // the warning just adds visual noise to the dev console. Scoping to
    // these modules so we don't accidentally suppress a real issue
    // elsewhere.
    config.ignoreWarnings = [
      ...(config.ignoreWarnings ?? []),
      { module: /@opentelemetry\/instrumentation/ },
      { module: /@sentry\/(node|nextjs)/, message: /Critical dependency/ },
    ];
    return config;
  },
};

export default nextConfig;
