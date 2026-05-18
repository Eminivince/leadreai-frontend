import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/marketing/LegalPageShell';

export const metadata: Metadata = {
  title: 'Security — LeadreAI',
  description: 'How LeadreAI protects your account, your data, and your customers.',
};

export default function SecurityPage() {
  return (
    <LegalPageShell
      eyebrow="Security"
      title="Security at LeadreAI."
      effective="May 18, 2026"
    >
      <p>
        Agencies trust LeadreAI with the people they are about to email. That is
        sensitive — both the contact data and the campaign content. Here is
        what we do to protect it.
      </p>

      <h2>Data in transit</h2>
      <p>
        Every connection to LeadreAI uses TLS 1.2 or higher. HTTP traffic is
        permanently redirected to HTTPS. We use HSTS with a one-year max-age
        directive so browsers refuse to downgrade.
      </p>

      <h2>Data at rest</h2>
      <p>
        Database storage is encrypted at rest by MongoDB Atlas (AES-256). File
        uploads live on object storage with encryption at rest. Backups are
        encrypted and held for 30 days; we test restores monthly.
      </p>

      <h2>Authentication</h2>
      <ul>
        <li>Passwords hashed with bcrypt (work factor 12).</li>
        <li>JWT access tokens (15-minute lifetime) + refresh tokens (30 days).</li>
        <li>Google / Microsoft single sign-on.</li>
        <li>SAML 2.0 single sign-on available on Agency and Enterprise plans.</li>
        <li>Magic-link sign-in as an alternative to passwords.</li>
      </ul>

      <h2>Authorization</h2>
      <p>
        Every API endpoint enforces workspace scoping. A request can only read
        or modify data inside the workspace the authenticated user belongs to.
        Role-based access controls (owner, admin, member) gate destructive
        actions. Audit logs record every billing event, every member change,
        every API key creation.
      </p>

      <h2>Secrets management</h2>
      <p>
        Third-party API keys (Hunter, OpenRouter, Resend, Stripe, etc.) are
        stored encrypted in our database. They never appear in logs or error
        traces. Workspace-level secrets (e.g., a user&rsquo;s connected Gmail
        OAuth refresh token) are encrypted with a per-workspace key derived
        from a master KMS-held secret.
      </p>

      <h2>Application security</h2>
      <ul>
        <li>Strict input validation via Zod schemas on every API boundary.</li>
        <li>Rate limiting per IP, per user, and per workspace.</li>
        <li>Content Security Policy headers, HSTS, X-Content-Type-Options.</li>
        <li>No inline scripts; all client JavaScript is bundled and SRI-checked.</li>
        <li>Dependency scanning via GitHub Dependabot; critical CVEs patched within 7 days.</li>
      </ul>

      <h2>Operational security</h2>
      <ul>
        <li>Production access is limited to two engineers; access is reviewed quarterly.</li>
        <li>All production changes go through code review and pass automated tests.</li>
        <li>Incidents are tracked in a private postmortem log. Material incidents are reported to affected customers within 72 hours.</li>
        <li>An on-call engineer is reachable 24/7 for production-critical issues.</li>
      </ul>

      <h2>Outbound deliverability</h2>
      <p>
        Outbound from LeadreAI on your behalf uses your own connected Gmail
        account or your own verified Resend domain. We never mix tenant
        sending — your reputation is your own. We refuse to send into addresses
        in your suppression list; suppression is enforced at the worker layer
        before any SMTP call.
      </p>

      <h2>Compliance posture</h2>
      <p>
        We are designed to be GDPR- and NDPR-compatible. We sign Data Processing
        Agreements on request. We are not yet SOC 2 certified — that&rsquo;s on
        the roadmap and we&rsquo;re happy to share our current control matrix
        with prospective enterprise customers under NDA.
      </p>

      <h2>Reporting a vulnerability</h2>
      <p>
        Found something? Please email{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a>.
        We acknowledge reports within 48 hours, work in good faith with
        researchers, and credit those who help us — provided you give us a
        reasonable window to fix before public disclosure.
      </p>
    </LegalPageShell>
  );
}
