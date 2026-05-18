import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/marketing/LegalPageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy — LeadreAI',
  description: 'What LeadreAI collects, why, and how we handle personal data.',
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Privacy Policy."
      effective="May 18, 2026"
    >
      <p>
        This Privacy Policy (the &ldquo;<strong>Policy</strong>&rdquo;)
        explains how <strong>LeadreAI</strong> (&ldquo;LeadreAI,&rdquo;
        &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects,
        uses, discloses, and otherwise processes personal data in connection
        with the LeadreAI website, applications, APIs, and related services
        (the &ldquo;<strong>Service</strong>&rdquo;).
      </p>
      <p>
        This Policy applies to <strong>(i) Customers</strong> — the
        individuals and organizations that subscribe to the Service —
        and <strong>(ii) Leads</strong> — the natural persons (in their
        professional capacity) whose business-contact information is
        aggregated and surfaced by the Service.
      </p>
      <p>
        If you have questions, contact our Data Protection contact at{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>.
      </p>

      <h2>1. Roles and Responsibilities</h2>
      <p>For the purposes of EU/UK GDPR, Nigeria&rsquo;s NDPR/NDP Act, and similar laws:</p>
      <ul>
        <li>
          <strong>Customer-account data</strong> (Customer registration,
          billing, workspace usage, support tickets): LeadreAI is the{' '}
          <strong>controller</strong>.
        </li>
        <li>
          <strong>Customer Content</strong> (data Customers upload, store, or
          generate inside the Service — including their suppression lists,
          uploaded files, sender templates, and outbound campaign records):
          the Customer is the <strong>controller</strong>; LeadreAI is the{' '}
          <strong>processor</strong> acting on the Customer&rsquo;s
          documented instructions, including under our Data Processing
          Agreement.
        </li>
        <li>
          <strong>Lead Data</strong> (business-contact data aggregated from
          public sources and licensed providers): LeadreAI is the{' '}
          <strong>controller</strong> at the point of aggregation; when a
          Customer adds a Lead to their workspace and contacts them, the
          Customer becomes an <strong>independent controller</strong> of that
          data thereafter.
        </li>
      </ul>

      <h2>2. Categories of Personal Data We Collect</h2>
      <h3>(a) Account &amp; identity data</h3>
      <ul>
        <li>Name, work email address, hashed password (bcrypt, work factor 12), phone number (optional).</li>
        <li>SSO / OAuth identifiers from Google or Microsoft if you sign in via a third-party provider.</li>
        <li>Profile photo, role within your workspace, locale and time-zone preferences.</li>
      </ul>
      <h3>(b) Workspace &amp; billing data</h3>
      <ul>
        <li>Workspace name, members, role assignments, branding settings, API keys (encrypted at rest).</li>
        <li>Subscription plan, credit balance, billing history, invoices.</li>
        <li>Last four digits of payment card and card brand (full PAN is held by Stripe / Paystack; we never see or store it).</li>
        <li>VAT or tax-ID numbers if you provide them.</li>
      </ul>
      <h3>(c) Lead Data</h3>
      <ul>
        <li>Business names, business email addresses, business phone numbers, professional titles, employer information.</li>
        <li>Public business addresses, websites, social media URLs (LinkedIn, Twitter/X) in a professional capacity.</li>
        <li>Source attribution (the URLs and provider names that supplied each data point).</li>
        <li>Verification status (deliverability, in-service phone, etc.) and timestamps.</li>
        <li>Funding, headcount, industry, and similar firmographic attributes.</li>
      </ul>
      <h3>(d) Usage &amp; technical data</h3>
      <ul>
        <li>IP address, device type, browser, operating system, language preference.</li>
        <li>Pages visited, features used, click-through and scroll patterns, in-app errors.</li>
        <li>Search queries, jobs you run, lists you build, files you upload.</li>
        <li>Cookie identifiers and similar technologies (see Section&nbsp;13).</li>
      </ul>
      <h3>(e) Communications</h3>
      <ul>
        <li>Support tickets, chat transcripts with our team, email correspondence.</li>
        <li>Marketing preferences (which transactional and promotional emails you receive).</li>
      </ul>
      <p>
        <strong>We do not knowingly collect special categories of personal
        data</strong> (data revealing racial or ethnic origin, political
        opinions, religious or philosophical beliefs, trade-union membership,
        genetic or biometric data, health data, or data concerning sex life or
        sexual orientation). Do not submit such data to the Service.
      </p>

      <h2>3. Sources of Personal Data</h2>
      <ul>
        <li>Directly from you (registration, billing, support, in-app actions).</li>
        <li>Automatically from your device (technical and usage data).</li>
        <li>From third-party authentication providers (Google, Microsoft) when you sign in via SSO.</li>
        <li>From public web sources and structured business directories (for Lead Data: company websites, registries, professional directories, public-facing forums).</li>
        <li>From licensed third-party data providers (Hunter, SerpAPI, Brave Search, Google Maps Platform, and similar). Each provider is contractually bound to source data lawfully.</li>
      </ul>

      <h2>4. Why We Process Personal Data, and Legal Bases</h2>
      <p>Under GDPR/NDPR, each processing activity below has at least one lawful basis:</p>
      <h3>(a) To provide the Service (contract)</h3>
      <p>
        Authenticate users, fulfill subscriptions, run jobs you request,
        deliver leads, enable outbound, store your data so you can retrieve it
        later. Legal basis: <strong>performance of a contract</strong>
        (Art.&nbsp;6(1)(b) GDPR).
      </p>
      <h3>(b) To bill, prevent fraud, and meet financial-records obligations (legal obligation &amp; legitimate interests)</h3>
      <p>
        Process payments, issue invoices, retain tax records, screen for
        fraud or sanctioned parties. Legal basis: <strong>legal obligation</strong>{' '}
        (Art.&nbsp;6(1)(c)) for tax-record retention;{' '}
        <strong>legitimate interests</strong> (Art.&nbsp;6(1)(f)) for fraud
        prevention.
      </p>
      <h3>(c) To secure and improve the Service (legitimate interests)</h3>
      <p>
        Detect abuse, monitor for security incidents, measure feature usage in
        aggregate, debug errors, improve reliability. Legal basis:{' '}
        <strong>legitimate interests</strong>. We balance this against your
        rights; you can object at any time (see Section&nbsp;10).
      </p>
      <h3>(d) To aggregate and serve Lead Data (legitimate interests)</h3>
      <p>
        Aggregate business-contact data from public and licensed sources so
        that our Customers can contact organizations in a B2B context. Legal
        basis: <strong>legitimate interests</strong>. We have conducted a
        legitimate-interests balancing test concluding that (i) business
        contacts have a reasonable expectation of being approached in their
        professional capacity, (ii) the data is sourced from publicly available
        professional contexts, (iii) we provide easy opt-out (Section&nbsp;10),
        and (iv) the processing does not infringe on fundamental rights or
        freedoms in the B2B context.
      </p>
      <h3>(e) To send transactional and marketing communications (contract &amp; consent)</h3>
      <p>
        Transactional emails (billing receipts, security alerts, product
        announcements) are sent on the basis of <strong>contract performance</strong>.
        Promotional emails are sent only with <strong>consent</strong>{' '}
        (Art.&nbsp;6(1)(a)) or on the basis of <strong>legitimate
        interests</strong> where soft-opt-in rules permit, and always include
        an unsubscribe link.
      </p>
      <h3>(f) To comply with legal process (legal obligation)</h3>
      <p>
        Respond to lawful requests from authorities, courts, and regulators.
        Legal basis: <strong>legal obligation</strong>.
      </p>

      <h2>5. Automated Decision-Making and AI</h2>
      <p>
        We use machine-learning and AI systems — both proprietary and from
        third-party providers — to power features such as query parsing,
        clarification questions, lead qualification, reply classification,
        and content generation.
      </p>
      <p>
        These systems produce suggestions and outputs that <strong>require
        human review before any consequential decision</strong>. We do not
        use automated decision-making that produces legal or similarly
        significant effects on data subjects in the sense of Art.&nbsp;22 GDPR.
      </p>
      <p>
        Customer Content and Lead Data are sent to AI subprocessors only as
        necessary to provide the Service, under contractual terms that
        (a) restrict the subprocessor to processing for our benefit only and
        (b) prohibit them from using your data to train their own models,
        where commercially available. See Section&nbsp;7 for the subprocessor
        list.
      </p>
      <p>
        <strong>We do not use Customer Content, Customer prompts, or the
        contact lists you build to train any LeadreAI machine-learning
        model.</strong>
      </p>

      <h2>6. How We Share Personal Data</h2>
      <p>We share personal data only as described below:</p>
      <h3>(a) Subprocessors</h3>
      <p>
        We share with third-party service providers (&ldquo;subprocessors&rdquo;)
        strictly necessary to operate the Service. Each is bound by a data-
        processing agreement requiring at least equivalent protection to this
        Policy. See Section&nbsp;7 for the current list.
      </p>
      <h3>(b) Your authorized integrations</h3>
      <p>
        When you connect a third-party integration (HubSpot, Salesforce,
        Slack, Gmail, etc.), we share data with that integration only as you
        direct. Their use of your data is governed by their own privacy terms.
      </p>
      <h3>(c) Corporate transactions</h3>
      <p>
        If we are involved in a merger, acquisition, financing, or sale of
        assets, personal data may be transferred as part of that transaction,
        subject to standard confidentiality protections. We will notify you of
        any such change of control before personal data becomes subject to a
        materially different privacy policy.
      </p>
      <h3>(d) Legal process and protection</h3>
      <p>
        We may disclose personal data when we have a good-faith belief that
        disclosure is necessary to (i) comply with applicable law or legal
        process, (ii) enforce these terms, (iii) protect the rights, property,
        or safety of LeadreAI, our Customers, or the public, or (iv) detect or
        prevent fraud or security issues. Where lawful, we will notify the
        affected user before complying.
      </p>
      <h3>(e) Aggregated and de-identified data</h3>
      <p>
        We may share aggregated or de-identified data (information that
        cannot reasonably be used to identify an individual) for research,
        benchmarking, marketing, or product-improvement purposes.
      </p>
      <p>
        <strong>We do not sell personal data, and we do not share personal
        data for cross-context behavioral advertising as those terms are
        defined under California, Colorado, Virginia, or analogous laws.</strong>
      </p>

      <h2>7. Subprocessors</h2>
      <p>The following subprocessors are currently engaged in providing the Service. We will give you advance notice of any new subprocessor before they begin processing your personal data, and you may object on reasonable grounds.</p>
      <ul>
        <li><strong>MongoDB Atlas</strong> — database hosting (Frankfurt region).</li>
        <li><strong>Render</strong> — application hosting and compute (Frankfurt region).</li>
        <li><strong>Vercel</strong> — frontend hosting and CDN (global edge).</li>
        <li><strong>Upstash / Render Key Value</strong> — Redis hosting for job queues and pub/sub.</li>
        <li><strong>Cloudflare</strong> — DDoS protection and DNS (global edge).</li>
        <li><strong>Stripe</strong>, <strong>Paystack</strong> — payment processing.</li>
        <li><strong>Resend</strong> — transactional and outbound email delivery.</li>
        <li><strong>Google Workspace</strong> (Gmail API, Google Maps Platform).</li>
        <li><strong>Anthropic</strong>, <strong>OpenAI</strong>, <strong>OpenRouter</strong>, <strong>Google AI</strong> — AI inference (each under contractual no-training terms for API tier).</li>
        <li><strong>Hunter</strong>, <strong>SerpAPI</strong>, <strong>Serper</strong>, <strong>Brave Search</strong> — data and search APIs for Lead Data aggregation.</li>
        <li><strong>Sentry</strong> — error monitoring (EU region).</li>
        <li><strong>Slack</strong> — internal team communication (used incidentally where customer support escalates an issue).</li>
      </ul>

      <h2>8. International Data Transfers</h2>
      <p>
        Primary data storage is located in Frankfurt, Germany (EU). Some
        subprocessors operate in jurisdictions outside the EEA, the UK, or
        Nigeria, including the United States.
      </p>
      <p>
        For transfers of personal data subject to EU or UK GDPR to countries
        without an adequacy decision, we rely on the European Commission&rsquo;s
        Standard Contractual Clauses (SCCs) and, where applicable, the UK
        International Data Transfer Addendum. We supplement SCCs with
        appropriate technical and organizational measures (encryption,
        pseudonymization, access controls) as required following Schrems II.
      </p>
      <p>
        For transfers subject to Nigeria&rsquo;s NDPR/NDP Act, we ensure
        recipients are bound by contractual obligations providing protections
        substantially equivalent to those required under Nigerian law and have
        notified the Nigerian Data Protection Commission (NDPC) where
        required.
      </p>
      <p>
        Copies of the relevant transfer mechanisms are available on request to{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>.
      </p>

      <h2>9. Data Retention</h2>
      <p>We retain personal data only as long as necessary for the purposes for which it was collected, plus any period required by law:</p>
      <ul>
        <li><strong>Account data</strong>: for the life of your Account, plus twelve (12) months after closure (for accidental-deletion recovery, compliance, and dispute defense).</li>
        <li><strong>Customer Content</strong>: for the life of your workspace; deleted within thirty (30) days of workspace deletion, except where legal hold applies.</li>
        <li><strong>Lead Data</strong>: retained indefinitely as part of our research database; individual records may be re-verified, updated, or removed at any time per Section&nbsp;10.</li>
        <li><strong>Billing and tax records</strong>: seven (7) years (consistent with Nigerian tax and accounting requirements; longer where local law requires).</li>
        <li><strong>Communications data</strong> (support tickets, chat logs): three (3) years from last interaction.</li>
        <li><strong>Server and security logs</strong>: ninety (90) days rolling, except where retained for active incident investigation.</li>
        <li><strong>Backups</strong>: thirty (30) day rolling retention; on deletion, data in backups is overwritten in the ordinary course of backup rotation.</li>
      </ul>

      <h2>10. Your Rights</h2>
      <p>Subject to applicable law (including GDPR, UK GDPR, NDPR/NDP Act, CCPA, and similar regimes), you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
        <li><strong>Rectification / correction</strong> — correct inaccurate or incomplete data.</li>
        <li><strong>Erasure / deletion</strong> — request deletion, subject to retention obligations.</li>
        <li><strong>Restriction</strong> — restrict processing while we verify or contest a claim.</li>
        <li><strong>Portability</strong> — receive an export of your data in a structured, commonly used, machine-readable format.</li>
        <li><strong>Objection</strong> — object to processing based on legitimate interests, including direct marketing.</li>
        <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time (without affecting prior processing).</li>
        <li><strong>Lodge a complaint</strong> — with your local supervisory authority. For Nigeria, that is the Nigeria Data Protection Commission (NDPC). For the EU, your local data-protection authority. For the UK, the Information Commissioner&rsquo;s Office (ICO).</li>
        <li><strong>Right against automated decision-making</strong> — not be subject to a decision producing legal or similarly significant effects based solely on automated processing.</li>
      </ul>
      <p>
        <strong>How to exercise:</strong> Customers can use the in-app data
        export and account deletion tools, or email{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>. Leads
        (data subjects whose business-contact data appears in LeadreAI) may
        request removal by emailing the same address from the email in
        question, or by using the unsubscribe link in any outbound LeadreAI
        sends. We respond within thirty (30) days, extendable by sixty (60)
        days for complex requests with notice.
      </p>
      <p>
        We do not charge a fee for these requests unless they are manifestly
        unfounded, excessive, or repetitive, in which case we may charge a
        reasonable fee or refuse, as permitted by law.
      </p>

      <h2>11. Security</h2>
      <p>
        We implement industry-standard technical and organizational measures
        appropriate to the risk, including:
      </p>
      <ul>
        <li>TLS 1.2+ in transit, AES-256 encryption at rest;</li>
        <li>passwords hashed with bcrypt (work factor 12);</li>
        <li>encrypted secret-store for API keys and OAuth tokens;</li>
        <li>workspace-scoped authorization on every API endpoint;</li>
        <li>least-privilege internal access with quarterly review;</li>
        <li>automated dependency scanning, SAST in CI, and patch SLAs for high-severity CVEs;</li>
        <li>logging, monitoring, and on-call incident response;</li>
        <li>encrypted backups with monthly restoration tests.</li>
      </ul>
      <p>
        See our <a href="/security">Security page</a> for additional
        operational detail.
      </p>

      <h2>12. Data-Breach Notification</h2>
      <p>
        We maintain an incident-response process. In the event of a personal-
        data breach likely to result in a risk to the rights and freedoms of
        affected individuals:
      </p>
      <ul>
        <li>We will notify the relevant supervisory authority (e.g., NDPC, EU/UK DPA) without undue delay and, where feasible, within seventy-two (72) hours of becoming aware.</li>
        <li>We will notify affected Customers without undue delay and, where the breach is likely to result in a high risk, directly to data subjects where required.</li>
        <li>Notifications will describe the nature of the breach, categories and approximate number of records affected, likely consequences, and measures taken or proposed.</li>
      </ul>

      <h2>13. Cookies and Similar Technologies</h2>
      <p>We use a minimal cookie set:</p>
      <ul>
        <li><strong>Strictly necessary</strong> — authentication, session state, CSRF protection, theme preference. These cannot be turned off without breaking the Service.</li>
        <li><strong>Functional</strong> — local-storage entries for in-app preferences (sidebar state, filter selections, &ldquo;verified emails only&rdquo; toggle).</li>
        <li><strong>Analytics</strong> — privacy-respecting analytics (no third-party advertising cookies, no cross-site tracking, no fingerprinting). We use first-party analytics where possible.</li>
      </ul>
      <p>
        We do not use third-party advertising cookies, retargeting pixels, or
        cross-site tracking. Where local law requires a consent banner (e.g.,
        e-Privacy Directive in the EU), we present one and respect your
        choices.
      </p>

      <h2>14. Children</h2>
      <p>
        The Service is not directed to children under sixteen (16) years of
        age (or the equivalent threshold in your jurisdiction), and we do not
        knowingly collect personal data from children. If you believe a child
        has provided us with personal data, contact{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a> and we
        will delete the account.
      </p>

      <h2>15. Marketing Communications</h2>
      <p>
        You can opt out of marketing emails at any time using the unsubscribe
        link in those emails or by emailing{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>.
        Transactional and security-related messages cannot be opted out of
        while you maintain an active Account, as they are necessary to provide
        the Service.
      </p>

      <h2>16. Jurisdiction-Specific Disclosures</h2>
      <h3>(a) For Nigerian residents (NDPR / NDP Act)</h3>
      <p>
        LeadreAI processes personal data in accordance with the Nigeria Data
        Protection Act 2023 (NDP Act) and Nigeria Data Protection Regulation
        (NDPR) 2019. You may lodge a complaint with the Nigeria Data
        Protection Commission (NDPC) at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener">ndpc.gov.ng</a>.
      </p>
      <h3>(b) For EU/EEA and UK residents (GDPR / UK GDPR)</h3>
      <p>
        Lawful bases for each processing activity are described in Section&nbsp;4.
        You have all rights described in Section&nbsp;10. Cross-border
        transfers rely on the EU Standard Contractual Clauses and the UK IDTA
        where applicable. EU/EEA residents may lodge a complaint with their
        local supervisory authority; UK residents with the Information
        Commissioner&rsquo;s Office (ICO).
      </p>
      <h3>(c) For California residents (CCPA / CPRA)</h3>
      <p>
        In the preceding twelve months, we have collected the categories of
        personal information described in Section&nbsp;2, for the purposes in
        Section&nbsp;4, from the sources in Section&nbsp;3, and shared with
        the recipients in Sections&nbsp;6 and&nbsp;7. We do <strong>not sell or
        share</strong> personal information (as those terms are defined under
        the CCPA), and we have not done so in the preceding twelve months. We
        do not use sensitive personal information for purposes beyond those
        permitted by CCPA§7027(m). California residents may exercise the
        rights to know, delete, correct, and limit sensitive-data use by
        emailing <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>.
      </p>
      <h3>(d) For Brazilian residents (LGPD)</h3>
      <p>
        We process personal data in compliance with Lei Geral de Proteção de
        Dados (LGPD). Brazilian residents may exercise the rights enumerated in
        Article&nbsp;18 of the LGPD by emailing{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>.
      </p>

      <h2>17. Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time. Material changes will be
        announced via email or in-app notice at least <strong>thirty (30)
        days</strong> before they take effect, except for changes required to
        address a legal, regulatory, or security concern. The &ldquo;Effective&rdquo;
        date above reflects the most recent update.
      </p>

      <h2>18. Contact</h2>
      <p>
        Data protection / privacy questions:{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>
        <br />
        General support:{' '}
        <a href="mailto:support@leadreai.app">support@leadreai.app</a>
        <br />
        Legal notices:{' '}
        <a href="mailto:legal@leadreai.app">legal@leadreai.app</a>
        <br />
        Security disclosures:{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a>
      </p>
      <p>
        EU / UK Representative: on request. LeadreAI does not currently maintain
        an EU establishment; we will appoint an Article&nbsp;27 representative
        if and when our processing meets the thresholds requiring one.
      </p>
    </LegalPageShell>
  );
}
