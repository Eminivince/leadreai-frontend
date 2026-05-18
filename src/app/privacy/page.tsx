import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/marketing/LegalPageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy — LeadreAI',
  description: 'What LeadreAI collects, why, and how we handle it.',
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Privacy Policy."
      effective="May 18, 2026"
    >
      <p>
        This Privacy Policy explains how LeadreAI (&ldquo;we&rdquo;) collects,
        uses, and shares personal data. It applies to LeadreAI&rsquo;s website,
        web application, and APIs. It is written to be readable — if anything is
        unclear, email <a href="mailto:hello@leadreai.app">hello@leadreai.app</a>.
      </p>

      <h2>1. The data we hold, in plain terms</h2>
      <p>There are two very different categories of data on LeadreAI:</p>
      <h3>(a) Data about you, our customer</h3>
      <ul>
        <li><strong>Account</strong>: email, name, hashed password, OAuth identity from Google/Microsoft if you used SSO.</li>
        <li><strong>Workspace</strong>: workspace name, members, role assignments, branding settings.</li>
        <li><strong>Billing</strong>: plan, credits balance, invoices. Card details are held by our payment processor (Stripe / Paystack); we never see the full PAN.</li>
        <li><strong>Usage</strong>: search history, jobs you ran, lists you built, files you uploaded.</li>
      </ul>
      <h3>(b) Data about your contacts (B2B lead data)</h3>
      <ul>
        <li>Business names, business emails, business phone numbers, professional titles, and public business addresses.</li>
        <li>Source URLs showing where each data point came from.</li>
        <li>Verification status (was the email reachable, was the phone in service).</li>
      </ul>
      <p>
        We do not collect special-category personal data (health, biometrics,
        religion, sexuality, political affiliation). LeadreAI is designed for
        professional / business-to-business outreach.
      </p>

      <h2>2. Where the contact data comes from</h2>
      <p>
        LeadreAI aggregates from publicly accessible sources (company websites,
        business directories, professional forums, government registries) and
        from licensed third-party APIs (Hunter, SerpAPI, Brave Search, Google
        Maps, etc.). Each lead in our system carries a <code>sources</code>
        array showing the URL each fact came from — so you can verify it
        yourself.
      </p>

      <h2>3. Why we use it</h2>
      <ul>
        <li>To provide the service you signed up for: running searches, returning leads, sending outbound on your behalf.</li>
        <li>To enforce limits (credits, rate limits) and prevent abuse.</li>
        <li>To improve LeadreAI — aggregate metrics like &ldquo;average leads per query&rdquo; without exposing individual queries.</li>
        <li>To comply with legal obligations (tax records, lawful requests, anti-fraud).</li>
      </ul>
      <p>
        We do <strong>not</strong> train AI models on your account data, your
        custom prompts, or the contact lists you build. We do use third-party AI
        providers (Anthropic, OpenAI, Google, OpenRouter) for individual
        inference calls — each provider applies their own no-train policy under
        our enterprise / API terms.
      </p>

      <h2>4. Who we share it with</h2>
      <p>We share data with the minimum set of vendors required to operate the service:</p>
      <ul>
        <li><strong>Infrastructure</strong>: MongoDB Atlas (database), Render (hosting), Vercel (frontend), Cloudflare (CDN).</li>
        <li><strong>Email / outbound</strong>: Resend, Gmail API (when you connect your inbox).</li>
        <li><strong>Payments</strong>: Stripe, Paystack.</li>
        <li><strong>Analytics / errors</strong>: Sentry (error tracking), simple privacy-respecting page analytics. No third-party advertising trackers.</li>
        <li><strong>AI inference</strong>: Anthropic, OpenAI, OpenRouter, Google — each under their no-train terms.</li>
      </ul>
      <p>
        We never sell personal data. We disclose to law enforcement only when
        legally compelled, and we will tell you unless legally prohibited.
      </p>

      <h2>5. Where the data lives</h2>
      <p>
        Primary data lives in MongoDB Atlas (region: Frankfurt) and Render
        (Frankfurt). Some processing happens in the US (AI inference) or
        wherever the third-party CDN edge resolves. If you are in a region
        with cross-border restrictions, contact us — we can route around
        certain providers.
      </p>

      <h2>6. How long we keep it</h2>
      <ul>
        <li><strong>Account data</strong>: while your account is active, plus 12 months after closure for legal / accounting requirements.</li>
        <li><strong>Lead data you generated</strong>: indefinitely while you have an active workspace. Deleted on workspace deletion.</li>
        <li><strong>Billing records</strong>: 7 years (Nigerian tax / accounting law).</li>
        <li><strong>Server logs</strong>: 90 days rolling.</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>You can:</p>
      <ul>
        <li>Export everything we hold about your account (settings → data export).</li>
        <li>Delete your account, which deletes the data subject to the retention windows above.</li>
        <li>Correct any inaccurate data we hold about you.</li>
        <li>Request a copy of the data-processing agreement (DPA) we sign with our vendors.</li>
      </ul>
      <p>
        For individuals whose business data appears in LeadreAI as a lead: you
        can request removal by emailing <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>{' '}
        from the email address in question, or by using the unsubscribe link in
        any outbound LeadreAI sends. We honor requests within 14 days.
      </p>

      <h2>8. Security</h2>
      <p>
        We encrypt data in transit (TLS) and at rest (provider-managed
        encryption). Passwords are hashed with bcrypt. We never store API keys
        in plaintext. Production access is restricted to a small number of
        engineers, reviewed quarterly. We run automated dependency scanning and
        respond to disclosed vulnerabilities within 30 days.
      </p>

      <h2>9. Children</h2>
      <p>
        LeadreAI is not for children under 18. We do not knowingly collect
        their data. If you believe a child has signed up, email us and we will
        delete the account.
      </p>

      <h2>10. Changes</h2>
      <p>
        Material changes to this policy will be announced via email or in-app
        at least 14 days before they take effect. The current version is always
        at this URL.
      </p>

      <h2>11. Contact</h2>
      <p>
        Data protection questions:{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>
      </p>
    </LegalPageShell>
  );
}
