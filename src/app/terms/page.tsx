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
        These Terms of Use (the &ldquo;<strong>Terms</strong>&rdquo;) form a
        binding agreement between you and <strong>LeadreAI</strong>
        (&ldquo;LeadreAI,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
        &ldquo;us&rdquo;), and govern your access to and use of the LeadreAI
        website, applications, APIs, and related services (collectively, the
        &ldquo;<strong>Service</strong>&rdquo;).
      </p>
      <p>
        By creating an account, accessing the Service, clicking
        &ldquo;Accept,&rdquo; or otherwise using the Service, you agree to be
        bound by these Terms. If you are entering into these Terms on behalf of
        a company or other legal entity, you represent that you have the
        authority to bind that entity, and references to &ldquo;you&rdquo; or
        &ldquo;Customer&rdquo; mean that entity.
      </p>
      <p>
        <strong>If you do not agree to these Terms, do not access or use the
        Service.</strong>
      </p>

      <h2>1. Definitions</h2>
      <p>The following terms have the meanings set out below:</p>
      <ul>
        <li><strong>&ldquo;Account&rdquo;</strong> means the account you create to access the Service.</li>
        <li><strong>&ldquo;Authorized User&rdquo;</strong> means an individual you authorize to access and use the Service on your behalf under your Account.</li>
        <li><strong>&ldquo;Customer Content&rdquo;</strong> means any data, information, files, prompts, templates, branding, suppression lists, custom prompts, and other materials you submit to or generate through the Service.</li>
        <li><strong>&ldquo;Lead Data&rdquo;</strong> means business-contact information (names, business email addresses, business phone numbers, professional titles, employer information, and related professional metadata) that LeadreAI aggregates, infers, verifies, and surfaces through the Service.</li>
        <li><strong>&ldquo;Documentation&rdquo;</strong> means the user-facing documentation we publish for the Service.</li>
        <li><strong>&ldquo;DPA&rdquo;</strong> means the Data Processing Agreement, where applicable.</li>
        <li><strong>&ldquo;Order Form&rdquo;</strong> means any ordering document, online subscription form, or sales order signed or accepted by you that references these Terms.</li>
        <li><strong>&ldquo;Subscription Term&rdquo;</strong> means the period during which you are entitled to use the Service under an Order Form or paid plan.</li>
      </ul>

      <h2>2. Acceptance and Changes to These Terms</h2>
      <p>
        We may modify these Terms from time to time. If we make material
        changes, we will notify you at least <strong>thirty (30) days</strong>{' '}
        in advance via email to the address associated with your Account or via
        a prominent in-Service notice, unless the changes are required to
        address a legal, regulatory, or security concern, in which case we may
        give shorter notice. The updated Terms take effect on the stated
        effective date, and your continued use of the Service after that date
        constitutes acceptance.
      </p>
      <p>
        If you do not agree to a modification, your sole remedy is to stop
        using the Service and (for paid subscriptions) to terminate in
        accordance with Section&nbsp;14.
      </p>

      <h2>3. Eligibility and Account Registration</h2>
      <p>
        You must be at least eighteen (18) years old, or the age of majority in
        your jurisdiction (whichever is greater), and competent to enter into a
        binding contract to use the Service. The Service is intended for
        business and commercial use only; consumer use is outside its scope.
      </p>
      <p>You agree to:</p>
      <ul>
        <li>provide accurate, current, and complete information during registration and to keep it updated;</li>
        <li>maintain the confidentiality of your credentials and any API keys issued to you;</li>
        <li>notify us promptly at <a href="mailto:security@leadreai.app">security@leadreai.app</a> if you suspect unauthorized access to your Account;</li>
        <li>accept responsibility for all activity that occurs under your Account, including the acts and omissions of every Authorized User.</li>
      </ul>
      <p>
        We may refuse to create, suspend, or close any Account at our sole
        discretion, including where we reasonably believe the Account is being
        used in violation of these Terms or applicable law.
      </p>

      <h2>4. License to Use the Service</h2>
      <p>
        Subject to your continued compliance with these Terms and payment of
        any applicable fees, we grant you a limited, non-exclusive,
        non-transferable, non-sublicensable, revocable license during the
        Subscription Term to access and use the Service for your internal
        business purposes.
      </p>
      <p>
        All rights not expressly granted to you are reserved by LeadreAI and
        our licensors. Nothing in these Terms transfers ownership of the
        Service, the Documentation, or any related intellectual property to
        you.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree to use the Service only for lawful purposes and in compliance with these Terms and applicable laws, including the anti-spam, electronic-communication, data-protection, consumer-protection, export-control, and sanctions laws of every jurisdiction in which you operate or to which you direct communications.</p>
      <p>Specifically, you agree to:</p>
      <ul>
        <li>obtain and maintain any consents, registrations, or notices required to send commercial electronic messages to the recipients you contact through the Service;</li>
        <li>honor unsubscribe requests promptly (within the timeframes mandated by applicable law) and maintain accurate suppression lists;</li>
        <li>configure DKIM, SPF, and DMARC records on your sending domain to maintain industry-standard authentication;</li>
        <li>monitor outbound bounce, complaint, and unsubscribe metrics and adjust sending behavior accordingly;</li>
        <li>cooperate in good faith with any deliverability, abuse, or compliance investigation we initiate.</li>
      </ul>

      <h2>6. Prohibited Use</h2>
      <p>You will not, and will not permit any Authorized User or third party to:</p>
      <h3>(a) Outbound and content prohibitions</h3>
      <ul>
        <li>send unsolicited bulk electronic messages, spam, or any communication that violates the CAN-SPAM Act, CASL, GDPR (e-Privacy Directive), NDPR, TCPA, or any analogous law;</li>
        <li>send messages with falsified or misleading headers, sender identities, subject lines, or routing information;</li>
        <li>use the Service to send content that is defamatory, obscene, harassing, threatening, hateful, deceptive, fraudulent, or that violates any third party&rsquo;s rights, including IP, privacy, or publicity rights;</li>
        <li>impersonate any person, organization, or government body;</li>
        <li>solicit or facilitate phishing, malware distribution, financial fraud, romance scams, or any other criminal activity.</li>
      </ul>
      <h3>(b) Data prohibitions</h3>
      <ul>
        <li>target individuals in their personal (non-professional) capacity;</li>
        <li>process Special Categories of Personal Data (as defined under GDPR Article 9 or analogous Nigerian / regional law) including health, biometric, sexual, religious, racial, genetic, political, or trade-union data, except under a separate written agreement explicitly contemplating such processing;</li>
        <li>scrape, harvest, or otherwise collect Lead Data from the Service for purposes of building, training, or augmenting any competing database or product;</li>
        <li>resell, sublicense, rent, lend, or commercially exploit Lead Data except as part of providing your own contracted services to your customers;</li>
        <li>combine Lead Data with publicly available identifiers to re-identify natural persons in ways that exceed legitimate business outreach;</li>
        <li>retain Lead Data after your Subscription Term ends, except as required for documented audit, compliance, or legal-hold purposes.</li>
      </ul>
      <h3>(c) Platform prohibitions</h3>
      <ul>
        <li>reverse-engineer, decompile, disassemble, or attempt to derive the source code of the Service, except to the extent applicable law prohibits such restriction;</li>
        <li>circumvent or attempt to circumvent rate limits, quotas, paywalls, authentication, or other technical controls;</li>
        <li>copy, frame, mirror, modify, translate, or create derivative works of any part of the Service;</li>
        <li>interfere with or disrupt the integrity or performance of the Service or the data contained therein;</li>
        <li>attempt to gain unauthorized access to the Service, other accounts, computer systems, or networks;</li>
        <li>use any automated means (bots, scrapers, crawlers) to access the Service except via documented APIs and within published rate limits;</li>
        <li>use the Service to develop, train, or improve any artificial-intelligence model, large-language model, or competing service that performs functions substantially similar to the Service.</li>
      </ul>
      <p>
        Violation of this Section&nbsp;6 is a material breach and grounds for
        immediate suspension or termination under Section&nbsp;14, in addition
        to any other remedies available to us.
      </p>

      <h2>7. Customer Content</h2>
      <p>
        You retain all right, title, and interest in and to your Customer
        Content. You grant LeadreAI a worldwide, non-exclusive, royalty-free,
        sublicensable (to subprocessors only) license to host, copy, process,
        transmit, display, and otherwise use your Customer Content solely as
        necessary to provide, secure, support, and improve the Service for you.
      </p>
      <p>
        You represent and warrant that (a) you have all rights and consents
        necessary to grant the foregoing license, and (b) your Customer Content
        and its use by us in accordance with these Terms will not violate
        applicable law or infringe any third-party right.
      </p>
      <p>
        We will not use Customer Content to train AI models or as input to any
        product feature outside your Account, and we will not share Customer
        Content with third parties except (i) subprocessors strictly necessary
        to provide the Service, (ii) as you direct, or (iii) as required by
        law.
      </p>

      <h2>8. Lead Data: Source, License, and Restrictions</h2>
      <p>
        Lead Data is aggregated from publicly accessible sources, licensed
        third-party APIs, inference, and verification, and is delivered to you
        with attribution where reasonable (each Lead carries a{' '}
        <code>sources</code> array indicating where each data point came from).
        Lead Data is licensed, not sold, to you on the following terms:
      </p>
      <ul>
        <li>You receive a limited, non-exclusive, non-transferable, revocable license to use Lead Data solely for your internal sales, marketing, and research activities and for performing services for your own customers in the ordinary course of your business.</li>
        <li>You may not resell, redistribute, license, or otherwise commercialize Lead Data as a standalone product or dataset.</li>
        <li>You may not use Lead Data to build, populate, train, augment, or improve any database, dataset, model, or product that competes with the Service.</li>
        <li>You must promptly remove from your records any Lead Data record upon receipt of a documented removal request from the data subject, and you must implement reasonable processes to honor opt-out and data-subject-rights requests as they relate to data you have obtained via the Service.</li>
        <li>You are responsible for verifying the accuracy of any Lead Data record before relying on it for any consequential decision. Lead Data is provided <strong>&ldquo;as is&rdquo;</strong> and may be incomplete, outdated, or incorrect.</li>
      </ul>

      <h2>9. AI and Automated Processing</h2>
      <p>
        Portions of the Service rely on artificial-intelligence and
        machine-learning systems, including those operated by third-party
        providers (such as Anthropic, OpenAI, Google, and OpenRouter). You
        acknowledge and agree that:
      </p>
      <ul>
        <li>AI-generated outputs may contain errors, omissions, biases, or hallucinations and must be reviewed by a human before being relied upon for any consequential decision;</li>
        <li>You will not submit to the Service any Customer Content that is unlawful for us to process or that you are not authorized to share with AI subprocessors;</li>
        <li>We pass Customer Content to AI subprocessors only as necessary to provide the Service, under terms that prohibit them from using your data to train their models (where commercially available);</li>
        <li>You will independently comply with any AI-specific disclosure or labeling laws that apply to your outbound communications (for example, where the EU AI Act, Colorado AI Act, or analogous regimes require disclosure of AI-generated content to recipients).</li>
      </ul>

      <h2>10. Subscriptions, Billing, and Credits</h2>
      <h3>(a) Plans and fees</h3>
      <p>
        Fees for paid plans are described on the Service or in your Order Form.
        Unless otherwise stated, fees are stated exclusive of applicable taxes,
        levies, or duties (including VAT, sales tax, or NDPR levies), which
        you are responsible for paying. All fees are quoted and payable in the
        currency stated on the Order Form or at checkout.
      </p>
      <h3>(b) Auto-renewal</h3>
      <p>
        Paid subscriptions auto-renew at the end of each Subscription Term for
        a successive period equal to the original term, at the then-current
        rates, unless you cancel before the end of the current term. We will
        attempt to remind you of upcoming renewals; failure to deliver such
        reminders does not affect the validity of the renewal.
      </p>
      <h3>(c) Credits</h3>
      <p>
        The Service uses a credit system to meter usage. Credits are not
        currency, have no monetary value outside the Service, are non-
        refundable except as expressly stated in Section&nbsp;10(e), and expire
        at the end of each billing cycle unless your plan explicitly carries
        them over. Top-up credits (purchased in addition to plan credits)
        remain valid for twelve (12) months from purchase.
      </p>
      <h3>(d) Late payment</h3>
      <p>
        If we are unable to charge your payment method, we may suspend access
        to paid features after written notice and a reasonable cure period
        (typically seven (7) days). Past-due amounts accrue interest at the
        lower of 1.5% per month or the maximum rate permitted by law. You will
        reimburse us for reasonable collection costs.
      </p>
      <h3>(e) Refunds</h3>
      <p>
        New paid subscriptions may be cancelled within fourteen (14) days for a
        prorated refund of unused subscription fees, less the value of any
        Credits consumed at then-current rack rates. Refunds beyond this window
        are not available except where required by law or where we materially
        and uncured breach these Terms.
      </p>
      <h3>(f) Price changes</h3>
      <p>
        We may change prices for new Subscription Terms by giving notice at
        least thirty (30) days before your next renewal. Mid-term price changes
        will not apply to the current Subscription Term unless you actively
        opt in.
      </p>

      <h2>11. Free Trials and Beta Features</h2>
      <p>
        Free trials, free credits, and Beta Features are provided
        &ldquo;as is&rdquo; without any warranty or service level commitment,
        and may be modified, suspended, or discontinued at any time.
        &ldquo;Beta Feature&rdquo; means any feature designated as alpha, beta,
        preview, experimental, or otherwise pre-release. You acknowledge that
        Beta Features may be unstable, may not function as documented, and may
        produce unexpected results; you use them at your own risk.
      </p>

      <h2>12. Third-Party Services and Integrations</h2>
      <p>
        The Service integrates with third-party services (including HubSpot,
        Resend, Stripe, Paystack, Google APIs, Microsoft APIs, AI providers,
        and search APIs). Your use of those services is governed by their own
        terms, and they may charge separate fees. We are not responsible for
        the acts, omissions, content, accuracy, security, availability, or
        privacy practices of any third-party service. Disabling or losing
        access to a third-party service may impair Service functionality.
      </p>

      <h2>13. Intellectual Property</h2>
      <p>
        The Service, including all software, code, models, user interfaces,
        designs, trademarks, logos, and Documentation, is the exclusive property
        of LeadreAI and our licensors and is protected by intellectual-property
        laws. Any feedback, suggestions, or ideas you provide regarding the
        Service may be used by us without restriction or compensation; you
        grant us a perpetual, irrevocable, royalty-free license to use them.
      </p>
      <p>
        If you believe content on the Service infringes your intellectual-
        property rights, please contact{' '}
        <a href="mailto:legal@leadreai.app">legal@leadreai.app</a> with the
        details required by applicable law (e.g., DMCA notice elements where
        relevant). We will investigate and respond in good faith.
      </p>

      <h2>14. Term, Termination, and Suspension</h2>
      <h3>(a) Term</h3>
      <p>
        These Terms apply for the duration of your Subscription Term and any
        continued use of the Service thereafter.
      </p>
      <h3>(b) Termination for cause</h3>
      <p>
        Either party may terminate these Terms (and all Order Forms) for cause
        if the other party (i) materially breaches these Terms and fails to
        cure within thirty (30) days of written notice (immediately for
        non-curable breaches), or (ii) becomes insolvent, makes an assignment
        for the benefit of creditors, files for bankruptcy, or has a receiver
        appointed.
      </p>
      <h3>(c) Termination for convenience</h3>
      <p>
        You may cancel your Subscription at any time from your Account
        settings; cancellation takes effect at the end of the current billing
        cycle. We may terminate a free Account at any time without cause on
        thirty (30) days&rsquo; notice.
      </p>
      <h3>(d) Suspension</h3>
      <p>
        We may suspend your access to the Service immediately (and without
        prior notice where impracticable) if (i) we reasonably believe
        continued use poses a security risk to us, the Service, or any third
        party; (ii) you are using the Service in violation of Section&nbsp;6;
        (iii) you fail to pay any undisputed fee that remains past due more
        than seven (7) days after notice; or (iv) we are compelled by law or
        legal process. We will restore access as soon as the underlying issue
        is resolved.
      </p>
      <h3>(e) Effect of termination</h3>
      <p>
        Upon termination, your right to access the Service ends, and we may
        delete your Customer Content after a thirty (30) day grace period
        during which you may export it via the Service. Provisions that by
        their nature should survive termination (including Sections 7, 8,
        13–22) will survive.
      </p>

      <h2>15. Confidentiality</h2>
      <p>
        Each party may receive or have access to non-public information of the
        other party that is marked confidential or that a reasonable person
        would understand to be confidential (&ldquo;<strong>Confidential
        Information</strong>&rdquo;). The receiving party will (a) use
        Confidential Information only to exercise its rights or perform its
        obligations under these Terms, and (b) protect it with at least the
        same degree of care it uses for its own confidential information, and
        in no event less than a reasonable degree of care. Confidential
        Information does not include information that is or becomes publicly
        known through no breach, was lawfully known prior to disclosure, was
        independently developed, or was lawfully received from a third party
        without a duty of confidentiality.
      </p>

      <h2>16. Warranties and Disclaimers</h2>
      <p>
        We warrant that during a paid Subscription Term we will provide the
        Service in a manner consistent with general industry standards
        reasonably applicable to the provision thereof. As your exclusive
        remedy for breach of this warranty, we will use commercially reasonable
        efforts to correct the non-conformity; if we are unable to do so
        within a reasonable time, you may terminate the affected Order Form
        and receive a pro-rata refund of pre-paid fees for the unused portion
        of the Subscription Term.
      </p>
      <p>
        <strong>EXCEPT FOR THE EXPRESS WARRANTY ABOVE, THE SERVICE, LEAD DATA,
        DOCUMENTATION, AND ALL OUTPUTS ARE PROVIDED &ldquo;AS IS&rdquo; AND
        &ldquo;AS AVAILABLE,&rdquo; AND LEADREAI DISCLAIMS ALL OTHER
        WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
        NON-INFRINGEMENT, ACCURACY, AND ANY WARRANTY ARISING OUT OF COURSE OF
        DEALING OR USAGE OF TRADE. WE DO NOT WARRANT THAT THE SERVICE WILL BE
        UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT ANY
        DATA WILL BE SECURE OR NOT OTHERWISE LOST OR ALTERED.</strong>
      </p>

      <h2>17. Limitation of Liability</h2>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL EITHER
        PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
        EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE,
        DATA, GOODWILL, OR ANTICIPATED SAVINGS, ARISING OUT OF OR RELATING TO
        THESE TERMS OR THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
        DAMAGES.</strong>
      </p>
      <p>
        <strong>EACH PARTY&rsquo;S AGGREGATE LIABILITY ARISING OUT OF OR
        RELATING TO THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE FEES
        PAID OR PAYABLE BY YOU TO LEADREAI IN THE TWELVE (12) MONTHS
        IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE
        HUNDRED U.S. DOLLARS (US$100).</strong>
      </p>
      <p>
        The limitations in this Section&nbsp;17 do not apply to (i) breach of
        confidentiality, (ii) a party&rsquo;s indemnification obligations,
        (iii) your payment obligations, (iv) gross negligence or willful
        misconduct, or (v) any liability that cannot be excluded or limited by
        applicable law.
      </p>

      <h2>18. Indemnification</h2>
      <h3>(a) By you</h3>
      <p>
        You will defend, indemnify, and hold harmless LeadreAI and our
        affiliates, officers, directors, employees, and agents from and against
        any third-party claim, action, or proceeding (a &ldquo;<strong>Claim
        </strong>&rdquo;), and pay any damages, settlement amounts, or
        reasonable attorneys&rsquo; fees finally awarded, arising out of or
        related to (i) your Customer Content, (ii) your use of the Service in
        violation of these Terms or applicable law, (iii) your outbound
        communications, or (iv) your violation of any third-party right,
        including any privacy, publicity, or intellectual-property right of a
        natural person whose data appears in your outbound activity.
      </p>
      <h3>(b) By us</h3>
      <p>
        We will defend you against any Claim alleging that the Service, as
        provided by us and used by you in accordance with these Terms,
        infringes a third party&rsquo;s issued patent, registered copyright,
        or registered trademark, and we will pay any damages or settlement
        amounts finally awarded against you in that Claim. This obligation
        does not apply to Claims arising from (i) Customer Content,
        (ii) modifications to the Service not made by us, (iii) combinations of
        the Service with materials not provided by us, or (iv) use of Beta
        Features.
      </p>
      <h3>(c) Procedure</h3>
      <p>
        The indemnified party will (i) give prompt written notice of the
        Claim, (ii) provide reasonable cooperation at the indemnifier&rsquo;s
        expense, and (iii) grant sole control of defense and settlement to the
        indemnifier, except that no settlement requiring admission of fault or
        payment from the indemnified party may be entered without consent.
      </p>

      <h2>19. Compliance: Sanctions, Anti-Corruption, Export Control</h2>
      <p>
        You represent and warrant that you, your Authorized Users, and any
        entity controlled by you are not (a) located in, organized under the
        laws of, or ordinarily resident in any jurisdiction subject to
        comprehensive sanctions administered by the U.S. Treasury Office of
        Foreign Assets Control (OFAC), the U.K. HM Treasury, the European
        Union, or the United Nations, and (b) are not listed on any
        government-administered restricted-party or denied-party list. You
        will not access or use the Service in violation of any applicable
        anti-corruption law (including the Foreign Corrupt Practices Act and
        the U.K. Bribery Act) or export-control law.
      </p>

      <h2>20. Force Majeure</h2>
      <p>
        Neither party will be liable for any failure or delay in performance
        (other than payment obligations) caused by events beyond its reasonable
        control, including acts of God, war, terrorism, civil unrest,
        labor strikes, pandemics, governmental orders, internet outages,
        utility failures, or the acts or omissions of third-party providers
        (including subprocessors and cloud infrastructure providers).
      </p>

      <h2>21. Governing Law and Dispute Resolution</h2>
      <h3>(a) Governing law</h3>
      <p>
        These Terms are governed by the laws of the Federal Republic of
        Nigeria, without regard to conflict-of-laws principles. The United
        Nations Convention on Contracts for the International Sale of Goods
        does not apply.
      </p>
      <h3>(b) Informal resolution</h3>
      <p>
        Before filing any formal claim, the parties will attempt in good faith
        to resolve the dispute informally for a period of at least sixty (60)
        days from the date one party notifies the other in writing of the
        dispute. Notices must be sent to{' '}
        <a href="mailto:legal@leadreai.app">legal@leadreai.app</a>.
      </p>
      <h3>(c) Venue</h3>
      <p>
        Any unresolved dispute will be brought exclusively in the courts of
        Lagos State, Nigeria, and each party irrevocably consents to the
        personal jurisdiction and venue of those courts. Nothing in this
        Section prevents either party from seeking injunctive or equitable
        relief in any court of competent jurisdiction to protect intellectual-
        property rights or Confidential Information.
      </p>
      <h3>(d) Class-action waiver</h3>
      <p>
        To the maximum extent permitted by law, each party waives any right to
        participate in a class, collective, or representative action against
        the other. All disputes must be brought in an individual capacity.
      </p>

      <h2>22. General</h2>
      <h3>(a) Notices</h3>
      <p>
        Notices to us must be sent to{' '}
        <a href="mailto:legal@leadreai.app">legal@leadreai.app</a>. Notices to
        you will be sent to the email address associated with your Account or
        posted in the Service. Notices are effective on the day sent (for
        email) or the day posted (for in-Service notices).
      </p>
      <h3>(b) Assignment</h3>
      <p>
        You may not assign or transfer these Terms, in whole or in part, by
        operation of law or otherwise, without our prior written consent. Any
        attempted assignment in violation of this provision is void. We may
        assign these Terms in connection with a merger, acquisition, corporate
        reorganization, or sale of all or substantially all of our assets.
      </p>
      <h3>(c) Independent contractors</h3>
      <p>
        The parties are independent contractors. These Terms do not create a
        partnership, joint venture, agency, franchise, or employment
        relationship.
      </p>
      <h3>(d) No third-party beneficiaries</h3>
      <p>
        These Terms confer no rights, benefits, or causes of action on any
        third party.
      </p>
      <h3>(e) Severability and waiver</h3>
      <p>
        If any provision of these Terms is held unenforceable, the remaining
        provisions remain in full force, and the unenforceable provision will
        be reformed to the minimum extent necessary. A waiver is effective
        only if in writing signed by an authorized representative; failure to
        enforce any right is not a waiver.
      </p>
      <h3>(f) Entire agreement</h3>
      <p>
        These Terms, together with any Order Form, DPA, and our{' '}
        <a href="/privacy">Privacy Policy</a>, constitute the entire agreement
        between you and LeadreAI regarding the Service and supersede all prior
        agreements and understandings on the same subject matter. Any
        purchase-order terms or other terms you submit are expressly rejected
        and have no effect.
      </p>

      <h2>23. Contact</h2>
      <p>
        General contact:{' '}
        <a href="mailto:support@leadreai.app">support@leadreai.app</a>
        <br />
        Legal notices and disputes:{' '}
        <a href="mailto:legal@leadreai.app">legal@leadreai.app</a>
        <br />
        Security disclosures:{' '}
        <a href="mailto:security@leadreai.app">security@leadreai.app</a>
        <br />
        Data protection / privacy:{' '}
        <a href="mailto:privacy@leadreai.app">privacy@leadreai.app</a>
      </p>
    </LegalPageShell>
  );
}
