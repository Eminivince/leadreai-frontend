import Link from 'next/link';
import SiteNav from '@/components/marketing/SiteNav';

const PRICING_TIERS = [
  {
    name: 'Reader',
    price: '$29',
    period: '/month',
    tagline: 'For solo prospectors getting started.',
    features: ['Up to 50 contacts/month', 'Email + phone enrichment', 'CSV export', 'Email support'],
    cta: 'Get started free',
    ctaHref: '/register',
    highlighted: false,
  },
  {
    name: 'Correspondent',
    price: '$99',
    period: '/month',
    tagline: 'For growing sales teams.',
    features: [
      'Up to 500 contacts/month',
      'CRM sync (HubSpot)',
      'Priority enrichment queue',
      'Outbound webhooks',
      'Live chat support',
    ],
    cta: 'Start free trial',
    ctaHref: '/register',
    highlighted: true,
  },
  {
    name: 'Bureau',
    price: '$299',
    period: '/month',
    tagline: 'For agencies and enterprise teams.',
    features: [
      'Unlimited contacts',
      'Custom pipeline integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom data sources',
    ],
    cta: 'Contact sales',
    // TODO: replace with dedicated sales/demo booking page when available
    ctaHref: 'mailto:hello@leadreai.app?subject=Enterprise%20plan',
    highlighted: false,
  },
]

const FAQS = [
  {
    q: 'How accurate are the email addresses?',
    a: 'Where the source supports it, we run MX record validation and SMTP handshake checks. Each email is delivered with a confidence badge so you can see how it was sourced and how strongly it was checked.',
  },
  {
    q: 'How long does a search take?',
    a: 'Most searches complete in 8–15 minutes. Complex multi-country searches may take up to 25 minutes.',
  },
  {
    q: 'Can I try before I subscribe?',
    a: 'Yes — start free with 5 research credits, no credit card required. Each credit covers one search job.',
  },
  {
    q: 'Do you cover markets outside Nigeria?',
    a: 'Nigeria is our primary focus and where data density is highest. Other African markets are supported on a best-effort basis — quality varies by country.',
  },
]

function Check() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-[3px]" aria-hidden>
      <path
        d="m3 8 3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <main className="bg-[color:var(--paper)] text-[color:var(--ink)] min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="px-4 sm:px-6 pt-12 sm:pt-20 pb-12 text-center">
        <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[color:var(--ember)] mb-5">
          Pricing
        </div>
        <h1 className="font-display font-normal text-[clamp(28px,7vw,52px)] leading-[1.05] tracking-[-0.01em] text-[color:var(--ink)] max-w-[640px] mx-auto">
          Simple, <em className="not-italic font-display italic text-[color:var(--ember)]">honest</em> pricing
        </h1>
        <p className="mt-5 font-sans text-[15px] text-[color:var(--ink-3)] max-w-[460px] mx-auto leading-[1.6]">
          Start free. Upgrade when you need more. No hidden fees.
        </p>
      </section>

      {/* Pricing grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="grid gap-6 max-w-[960px] mx-auto items-stretch grid-cols-1 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const featured = tier.highlighted
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col bg-white rounded-xl p-8 border ${
                  featured
                    ? 'border-[color:var(--ember)] border-2'
                    : 'border-[color:var(--rule)]'
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[color:var(--ember)] text-[color:var(--paper)] font-mono text-[9.5px] tracking-[0.18em] uppercase px-3 py-1 rounded-full whitespace-nowrap">
                    Most popular
                  </div>
                )}

                <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[color:var(--ink-4)] mb-3">
                  {tier.name}
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display font-normal text-[44px] leading-none tracking-[-0.01em] text-[color:var(--ink)]">
                    {tier.price}
                  </span>
                  <span className="font-sans text-[14px] text-[color:var(--ink-3)]">
                    {tier.period}
                  </span>
                </div>

                <p className="font-sans text-[13.5px] text-[color:var(--ink-3)] mb-6 leading-[1.55]">
                  {tier.tagline}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 font-sans text-[14px] text-[color:var(--ink-2)] leading-[1.5]"
                    >
                      <span className="text-[color:var(--success)]">
                        <Check />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  aria-label={`${tier.cta} — ${tier.name} plan`}
                  className={`mt-auto inline-flex items-center justify-center font-sans font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-all ${
                    featured
                      ? 'bg-[color:var(--ink)] text-[color:var(--paper)] hover:opacity-85'
                      : 'border border-[color:var(--rule)] bg-transparent text-[color:var(--ink-2)] hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--paper-2)] px-4 sm:px-6 py-12 sm:py-20 border-t border-[color:var(--rule)]">
        <div className="max-w-[720px] mx-auto">
          <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[color:var(--ink-4)] mb-3 text-center">
            FAQ
          </div>
          <h2 className="font-display font-normal text-[clamp(28px,3vw,36px)] tracking-[-0.01em] leading-[1.15] text-[color:var(--ink)] text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="flex flex-col divide-y divide-[color:var(--rule)]">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-sans font-semibold text-[15px] text-[color:var(--ink)] mb-2">
                  {faq.q}
                </h3>
                <p className="font-sans text-[14px] text-[color:var(--ink-3)] leading-[1.65]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingFooter />
    </main>
  )
}

function PricingFooter() {
  return (
    <footer className="px-4 sm:px-6 md:px-12 py-10 flex items-center justify-between gap-6 flex-wrap border-t border-[color:var(--rule)]">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-md bg-[color:var(--ink)] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M3 13 L3 3 L6 3 L6 10 L13 10 L13 13 Z" fill="white" />
            <circle cx="12" cy="4" r="1.8" fill="rgba(255,255,255,0.5)" />
          </svg>
        </div>
        <span className="font-sans font-bold text-[13px] text-[color:var(--ink)] tracking-[-0.02em]">
          LeadreAI
        </span>
        <span className="font-mono text-[9.5px] text-[color:var(--ink-4)] tracking-[0.18em] uppercase ml-3">
          © {new Date().getFullYear()} — built for thin markets
        </span>
      </div>
      <div className="flex items-center gap-6 flex-wrap">
        <Link href="/docs" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
          Docs
        </Link>
        <Link href="/terms" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
          Terms
        </Link>
        <Link href="/privacy" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
          Privacy
        </Link>
        <Link href="/login" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
          Sign in
        </Link>
        <Link href="/register" className="font-sans text-[12.5px] font-medium text-[color:var(--ink-2)] hover:text-[color:var(--ink)] transition-colors">
          Start for free →
        </Link>
      </div>
    </footer>
  );
}
