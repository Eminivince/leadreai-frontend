import type { Metadata } from 'next';
import { LegalPageShell } from '@/components/marketing/LegalPageShell';

export const metadata: Metadata = {
  title: 'Terms of Use — LeadreAI',
  description: 'The agreement between LeadreAI and the people who use it.',
};

export default function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Terms of Use."
      effective="May 18, 2026"
    >
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of LeadreAI
        (&ldquo;LeadreAI&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).
        By creating an account or otherwise using LeadreAI, you agree to these
        Terms. If you do not agree, do not use LeadreAI.
      </p>

      <h2>1. The service</h2>
      <p>
        LeadreAI is a research and outreach platform that helps agencies and
        sales teams discover B2B contacts and run outbound campaigns. We aggregate
        information from publicly accessible sources, structured directories,
        and licensed third-party APIs, and present it through an interface and
        API designed to make outbound easier and more transparent.
      </p>

      <h2>2. Your account</h2>
      <p>
        You are responsible for keeping your account credentials secure and for
        all activity that occurs under your account. You agree to provide accurate
        information and to update it if it changes. You must be at least 18 years
        old or the age of majority in your jurisdiction.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree not to use LeadreAI to:</p>
      <ul>
        <li>Send spam, deceptive emails, or messages that violate applicable anti-spam laws (CAN-SPAM, CASL, GDPR, etc.).</li>
        <li>Harass, stalk, or target individuals in their non-professional capacity.</li>
        <li>Build derivative datasets for resale that compete directly with LeadreAI.</li>
        <li>Reverse-engineer, scrape at scale beyond documented API limits, or interfere with platform security.</li>
        <li>Process special categories of personal data (health, biometrics, sexuality, etc.) absent a separate written agreement.</li>
      </ul>

      <h2>4. Data and privacy</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> explains what we collect, why,
        and how long we keep it. Personal data about <strong>your contacts</strong> is
        held by you as the controller; LeadreAI processes it on your behalf
        under instructions consistent with these Terms and the Privacy Policy.
      </p>

      <h2>5. Subscriptions and credits</h2>
      <p>
        Paid plans renew automatically until cancelled. Credits expire at the
        end of each billing cycle unless your plan explicitly carries them over.
        Refunds are available within the first 14 days of a paid subscription,
        prorated against any credits already consumed.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        LeadreAI, our trademarks, and the platform itself are our property. You
        retain ownership of content you upload (uploaded files, sender templates,
        custom prompts). You grant us a limited license to process that content
        so we can provide the service.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        LeadreAI integrates with services such as HubSpot, Resend, Stripe, and
        AI model providers. Your use of those integrations is subject to their
        own terms; we are not responsible for their actions or failures.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may cancel at any time from your workspace settings. We may suspend
        or terminate accounts that materially breach these Terms — typically
        with notice and an opportunity to cure, except for clear abuse. On
        termination we retain limited records for legal and accounting reasons;
        see the Privacy Policy for retention windows.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        LeadreAI is provided <strong>&ldquo;as is.&rdquo;</strong> Lead data is sourced
        from third parties and from inference; it can be incomplete or out of
        date. You are responsible for verifying any lead before contacting them
        and for complying with the laws that apply to your outbound activity.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, LeadreAI&rsquo;s aggregate
        liability for any claim arising out of these Terms or your use of the
        service is limited to the amount you paid us in the twelve (12) months
        preceding the event giving rise to the claim. We are not liable for
        indirect, consequential, or punitive damages.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        announced via email or in-app at least 14 days before they take effect.
        Continued use after the effective date counts as acceptance.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria,
        without regard to conflict-of-laws principles. Any dispute will be
        brought exclusively in the courts of Lagos State.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms?{' '}
        <a href="mailto:hello@leadreai.app">hello@leadreai.app</a>
      </p>
    </LegalPageShell>
  );
}
