import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/marketing/LegalPageShell';

export const metadata: Metadata = {
  title: 'Security — LeadreAI',
  description: 'How LeadreAI protects accounts, data, and outbound campaigns.',
};

export default function SecurityPage() {
  return (
    <LegalPageShell
      eyebrow="Security"
      title="Security at LeadreAI."
      effective="May 18, 2026"
    >
      <p>
        Agencies trust LeadreAI with sensitive material: the contacts they
        are about to email, the templates they sell, and the campaigns that
        carry their clients&rsquo; reputations. This page describes how we
        protect that — the controls in place today, the ones in progress,
        and how to reach us if you find something wrong.
      </p>
      <p>
        For the formal data-protection commitments, see our{' '}
        <a href="/privacy">Privacy Policy</a> and (where applicable)
        Data Processing Agreement. Enterprise customers can request our
        current SOC&nbsp;2 readiness report and control matrix from{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a>.
      </p>

      <h2>1. Compliance Posture</h2>
      <ul>
        <li><strong>GDPR &amp; UK GDPR</strong> — designed for and operating in compliance. Data-processing addendum available on request.</li>
        <li><strong>NDPR &amp; Nigeria Data Protection Act 2023</strong> — primary data residency in Frankfurt; aligned with the cross-border transfer rules under the Act.</li>
        <li><strong>SOC 2 Type II</strong> — readiness program in progress; targeted certification window communicated to enterprise prospects under NDA.</li>
        <li><strong>ISO 27001</strong> — controls mapped; certification on the post-SOC&nbsp;2 roadmap.</li>
        <li><strong>CCPA / CPRA</strong> — we do not sell personal information and do not share for cross-context behavioral advertising.</li>
        <li><strong>PCI DSS</strong> — payment processing is performed by Stripe and Paystack (both PCI-compliant); we never store full card numbers.</li>
      </ul>

      <h2>2. Data Classification</h2>
      <p>We classify data into four tiers, each with corresponding handling rules:</p>
      <ul>
        <li><strong>Restricted</strong> — secrets, credentials, OAuth tokens, signing keys. Encrypted at application layer; access limited to two engineers; rotated on schedule.</li>
        <li><strong>Confidential</strong> — Customer Content, Lead Data, billing data. Encrypted in transit and at rest; access workspace-scoped; logged.</li>
        <li><strong>Internal</strong> — operational logs, metrics, runbooks. Access limited to team members; retained 90 days unless required longer for incident response.</li>
        <li><strong>Public</strong> — marketing site, documentation, this page. No special handling.</li>
      </ul>

      <h2>3. Data Protection</h2>
      <h3>(a) In transit</h3>
      <ul>
        <li>All client connections require TLS 1.2 or higher; TLS 1.3 is preferred.</li>
        <li>HTTP is permanently redirected to HTTPS with HSTS (max-age one year, includeSubDomains, preload).</li>
        <li>Inter-service traffic between API, workers, and database stays within Frankfurt private networking.</li>
        <li>Webhooks support HMAC-SHA256 signatures so consumers can verify origin.</li>
      </ul>
      <h3>(b) At rest</h3>
      <ul>
        <li>MongoDB Atlas: provider-managed AES-256 encryption.</li>
        <li>Object storage (file uploads): AES-256 server-side encryption.</li>
        <li>Backups: encrypted snapshots, 30-day rolling retention, monthly restoration tests.</li>
        <li>Application-layer encryption for high-sensitivity fields (OAuth refresh tokens, integration API keys) using AES-256-GCM with per-workspace derived keys.</li>
      </ul>
      <h3>(c) Key management</h3>
      <ul>
        <li>Master encryption key held outside the application database; rotated annually.</li>
        <li>JWT signing key rotated quarterly without service interruption (overlapping keys during rotation window).</li>
        <li>Customer-provided API keys for third-party integrations stored encrypted; never logged.</li>
      </ul>

      <h2>4. Identity and Access</h2>
      <h3>(a) Customer authentication</h3>
      <ul>
        <li>Passwords hashed with bcrypt at work factor 12 (re-evaluated annually).</li>
        <li>JWT access tokens with 15-minute lifetime; refresh tokens with 30-day lifetime, revocable on demand.</li>
        <li>Google and Microsoft SSO (OAuth 2.0 / OpenID Connect).</li>
        <li>SAML 2.0 SSO available on Agency and Enterprise plans, with SCIM provisioning on the roadmap.</li>
        <li>Magic-link sign-in as an alternative to passwords.</li>
        <li>Multi-factor authentication available on all plans; required on Enterprise.</li>
        <li>Brute-force protection: rate limiting per IP and per account; sliding-window lockout after repeated failures.</li>
      </ul>
      <h3>(b) Authorization</h3>
      <ul>
        <li>Every API endpoint enforces workspace scoping; a request can read or modify only data inside the workspace the authenticated user belongs to.</li>
        <li>Role-based access control with four tiers: owner, admin, member, viewer.</li>
        <li>Granular permissions on destructive actions (billing changes, member removal, workspace deletion) — owner-only by default.</li>
        <li>Audit log records every billing event, every member change, every API-key creation or revocation, and every impersonation session.</li>
      </ul>
      <h3>(c) Internal access</h3>
      <ul>
        <li>Production environment access limited to two engineers; access reviewed quarterly.</li>
        <li>Just-in-time elevation for any production database query; queries logged.</li>
        <li>Multi-factor authentication required on all engineer accounts (no exceptions).</li>
        <li>Hardware security keys (FIDO2) required for production-key access.</li>
        <li>Support tools provide an &ldquo;impersonation&rdquo; mode that surfaces a banner to the user, is fully audit-logged, and requires customer consent for tickets that involve account access.</li>
      </ul>

      <h2>5. Application Security</h2>
      <ul>
        <li><strong>Input validation</strong> — every API endpoint validates inputs via Zod schemas at the boundary; rejected requests do not reach business logic.</li>
        <li><strong>Output encoding</strong> — React&rsquo;s default escaping plus a CSP that disallows inline scripts.</li>
        <li><strong>HTTP security headers</strong> — Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.</li>
        <li><strong>CSRF</strong> — protected via SameSite=Lax cookies on session credentials, plus explicit CSRF tokens on state-changing endpoints called from the browser.</li>
        <li><strong>Rate limiting</strong> — per IP, per user, and per workspace; configurable burst and sustained ceilings.</li>
        <li><strong>Dependency security</strong> — automated dependency scanning via GitHub Dependabot and Renovate; SAST in CI; critical CVEs patched within 7 days, high within 30.</li>
        <li><strong>Secret scanning</strong> — pre-commit hooks and CI scanning prevent secrets from being committed.</li>
        <li><strong>Penetration testing</strong> — independent third-party assessment annually; remediation tracked to closure.</li>
        <li><strong>Bug bounty / responsible disclosure</strong> — see Section&nbsp;11.</li>
      </ul>

      <h2>6. Infrastructure Security</h2>
      <ul>
        <li>Primary application stack runs on Render (Frankfurt) with isolated networking per service.</li>
        <li>Database on MongoDB Atlas (Frankfurt) with VPC peering, IP allowlisting, and TLS-required connections.</li>
        <li>Frontend served from Vercel&rsquo;s global edge with Cloudflare providing DDoS protection and Bot Management at the network layer.</li>
        <li>Web Application Firewall rules block common OWASP Top-10 attack patterns.</li>
        <li>No SSH access to production hosts; all changes flow through automated deployment pipelines.</li>
        <li>Infrastructure-as-code definitions reviewed and version-controlled.</li>
      </ul>

      <h2>7. Operations and Monitoring</h2>
      <ul>
        <li><strong>Logging</strong> — structured JSON logs with correlation IDs across API, workers, and queue jobs; sensitive fields redacted at the log layer.</li>
        <li><strong>Monitoring</strong> — error tracking via Sentry (EU region); uptime monitoring with synthetic checks every 60s from multiple regions; queue depth and worker health metrics.</li>
        <li><strong>Alerting</strong> — paging on production-impacting incidents (error-rate spikes, queue stalls, sustained 5xx responses, certificate expiry).</li>
        <li><strong>On-call</strong> — an engineer is reachable 24/7 for production-critical issues.</li>
        <li><strong>Change management</strong> — every production change passes code review and automated tests; deployments are gradual with automatic rollback on health-check failures.</li>
        <li><strong>Backups</strong> — encrypted snapshots taken every 6 hours; daily off-region copy; restoration tested monthly.</li>
      </ul>

      <h2>8. Incident Response</h2>
      <p>We maintain a documented incident-response plan with the following commitments:</p>
      <ul>
        <li><strong>Triage SLA</strong> — within 1 hour of detection for production-impacting incidents.</li>
        <li><strong>Customer notification</strong> — within 24 hours for material incidents affecting your data; within 72 hours for personal-data breaches as required under GDPR Art.&nbsp;33.</li>
        <li><strong>Regulator notification</strong> — to NDPC, EU/UK supervisory authorities, or other competent authorities as required by law, typically within the 72-hour GDPR window.</li>
        <li><strong>Postmortem</strong> — every Sev-1 and Sev-2 incident produces a written postmortem with root cause, timeline, remediation, and prevention measures. Material postmortems are shared with affected customers.</li>
        <li><strong>Tabletop exercises</strong> — incident-response process exercised at least twice annually with realistic scenarios.</li>
      </ul>

      <h2>9. Business Continuity</h2>
      <ul>
        <li><strong>Recovery Time Objective (RTO)</strong> — 4 hours for full Service restoration.</li>
        <li><strong>Recovery Point Objective (RPO)</strong> — 6 hours for transactional data (driven by backup cadence; lower for replicated systems).</li>
        <li>Off-region encrypted backups so regional outages do not result in data loss.</li>
        <li>Documented runbooks for database restore, application redeploy, queue replay, and customer-side handoff scenarios.</li>
      </ul>

      <h2>10. Personnel Security</h2>
      <ul>
        <li>Background checks on all engineers with production access (where lawful in their jurisdiction).</li>
        <li>Mandatory security training at onboarding and annually thereafter, covering phishing, social engineering, secure coding, and data-handling.</li>
        <li>All staff bound by written confidentiality and acceptable-use agreements.</li>
        <li>Access revocation on the same day as departure or role change.</li>
        <li>Employee endpoints use full-disk encryption, password managers, and managed MFA.</li>
      </ul>

      <h2>11. Vulnerability Disclosure</h2>
      <p>
        If you discover a security vulnerability, please report it to{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a>.
        We commit to:
      </p>
      <ul>
        <li><strong>Acknowledge</strong> your report within 48 hours.</li>
        <li><strong>Triage</strong> and respond with an initial assessment within 5 business days.</li>
        <li><strong>Fix critical vulnerabilities</strong> within 7 days of confirmation; high within 30; medium and lower per a published remediation schedule.</li>
        <li><strong>Coordinate disclosure</strong> in good faith and credit responsible reporters in our security acknowledgments (with consent).</li>
        <li>Provide <strong>safe-harbor</strong> for good-faith security research consistent with our published research-rules document; we will not pursue legal action against researchers who comply.</li>
      </ul>
      <p>
        A formal bug bounty program is on the roadmap; in the meantime we
        consider out-of-pocket rewards for high-impact reports on a
        case-by-case basis.
      </p>

      <h2>12. Outbound Deliverability and Anti-Abuse</h2>
      <p>
        Email sending on your behalf uses your own connected Gmail account or
        your own verified Resend domain — we never co-mingle tenant sending.
        Your sender reputation is your own; ours is ours.
      </p>
      <ul>
        <li>Suppression lists are enforced at the worker layer <em>before</em> any SMTP call; an address you suppress cannot be re-sent to.</li>
        <li>Outbound is rate-limited per sending domain and per recipient domain to protect deliverability.</li>
        <li>We provide bounce, complaint, and unsubscribe webhooks so you can keep your CRM in sync.</li>
        <li>The Service refuses to send messages that violate the prohibited-use rules in our <a href="/terms">Terms</a>, and may suspend accounts producing material spam complaints.</li>
      </ul>

      <h2>13. Customer-Side Controls</h2>
      <p>Things you control and should configure for the best security posture:</p>
      <ul>
        <li>Require SSO for your workspace (Agency/Enterprise plans).</li>
        <li>Enforce MFA for all members.</li>
        <li>Use the least-privilege role for each member; review membership quarterly.</li>
        <li>Configure SPF, DKIM, and DMARC on your sending domain (DMARC with <code>p=quarantine</code> minimum).</li>
        <li>Treat API keys as secrets: rotate on departure, store in your CI&rsquo;s secret manager, never commit to source control.</li>
        <li>Subscribe to the Audit Log to forward access events into your SIEM (Enterprise plan).</li>
        <li>Set up workspace data-retention preferences to match your internal policy.</li>
      </ul>

      <h2>14. Sub-Processors and Vendor Risk</h2>
      <p>
        Our sub-processor list is published in the <a href="/privacy">Privacy
        Policy</a>. Each sub-processor is evaluated for security posture before
        engagement and re-evaluated annually. We require a written data-
        processing agreement and evidence of independent assurance (SOC&nbsp;2
        report, ISO 27001 certificate, or equivalent) for any sub-processor
        with access to Restricted or Confidential data.
      </p>

      <h2>15. Customer Audits</h2>
      <p>
        Enterprise customers may, upon reasonable advance notice and not more
        than once per twelve (12) months, audit our compliance with the
        security commitments described here. We will respond to reasonable
        audit requests with documentation, attestations, or, where genuinely
        necessary, a structured on-premises review under appropriate
        confidentiality terms.
      </p>

      <h2>16. Reporting Phishing or Impersonation</h2>
      <p>
        If you receive an email claiming to be from LeadreAI that looks
        suspicious, forward it to{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a> with
        full headers. Legitimate LeadreAI emails come from{' '}
        <code>@leadreai.app</code> only.
      </p>

      <h2>17. Contact</h2>
      <p>
        Security disclosures:{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a>
        <br />
        Data protection / privacy:{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>
        <br />
        Compliance / DPA requests:{' '}
        <a href="mailto:legal@leadreai.app">legal@leadreai.app</a>
        <br />
        General support:{' '}
        <a href="mailto:support@leadreai.app">support@leadreai.app</a>
      </p>
    </LegalPageShell>
  );
}
