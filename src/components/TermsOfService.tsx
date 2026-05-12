import { useEffect } from 'react'

const EFFECTIVE_DATE = 'May 12, 2026'
const CONTACT_EMAIL = 'support@flipside.app'

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'description', title: '2. Description of Service' },
  { id: 'account', title: '3. Account Registration' },
  { id: 'subscriptions', title: '4. Subscription Terms' },
  { id: 'ai-disclaimer', title: '5. AI Disclaimer' },
  { id: 'user-content', title: '6. User Content & Conduct' },
  { id: 'content-moderation', title: '7. Content Moderation' },
  { id: 'intellectual-property', title: '8. Intellectual Property' },
  { id: 'termination', title: '9. Account Termination' },
  { id: 'liability', title: '10. Limitation of Liability' },
  { id: 'indemnification', title: '11. Indemnification' },
  { id: 'dispute-resolution', title: '12. Dispute Resolution' },
  { id: 'governing-law', title: '13. Governing Law' },
  { id: 'changes', title: '14. Changes to Terms' },
  { id: 'contact', title: '15. Contact Information' },
]

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-flipside-bg">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-flipside-text-secondary hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to FlipSide
          </a>
          <a
            href="/privacy"
            className="text-flipside-accent hover:text-flipside-accent/80 transition-colors text-sm"
          >
            Privacy Policy
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="gradient-duality">Terms of Service</span>
          </h1>
          <p className="text-flipside-text-secondary text-sm">
            Effective Date: {EFFECTIVE_DATE} &middot; Illium Studio
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 rounded-xl bg-flipside-surface border border-white/5">
          <h2 className="text-sm font-semibold text-flipside-chrome uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-flipside-text-secondary hover:text-flipside-accent transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-10 text-[15px] leading-relaxed text-gray-300">
          {/* 1. Acceptance of Terms */}
          <section id="acceptance">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              1. Acceptance of Terms
            </h2>
            <p className="mb-3">
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement
              between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and Illium Studio
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to
              and use of the FlipSide mobile application and related services (collectively, the
              &ldquo;Service&rdquo;).
            </p>
            <p className="mb-3">
              By downloading, installing, creating an account, or otherwise accessing or using the
              Service, you acknowledge that you have read, understood, and agree to be bound by these
              Terms and our{' '}
              <a href="/privacy" className="text-flipside-accent hover:underline">
                Privacy Policy
              </a>
              , which is incorporated by reference.
            </p>
            <p>
              If you do not agree to these Terms, you must not access or use the Service. You must be
              at least 13 years of age to use the Service. If you are between 13 and 18, you
              represent that your parent or legal guardian has reviewed and agrees to these Terms on
              your behalf.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section id="description">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              2. Description of Service
            </h2>
            <p className="mb-3">
              FlipSide is a real-time AI-powered fact-checking application for live debates. The
              Service provides the following core functionality:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-white">Live transcription:</strong> Real-time
                speech-to-text conversion of debate audio captured through your device&rsquo;s
                microphone.
              </li>
              <li>
                <strong className="text-white">Claim detection:</strong> AI-powered identification
                and extraction of verifiable claims from debate transcripts.
              </li>
              <li>
                <strong className="text-white">Fact verification:</strong> Automated fact-checking
                of detected claims against authoritative web sources with source citations.
              </li>
              <li>
                <strong className="text-white">Debate analytics:</strong> Post-debate summaries,
                accuracy scores, and performance insights.
              </li>
              <li>
                <strong className="text-white">Debate history:</strong> Storage and retrieval of
                past debate transcripts and fact-check results (subject to subscription tier).
              </li>
            </ul>
          </section>

          {/* 3. Account Registration */}
          <section id="account">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              3. Account Registration
            </h2>
            <p className="mb-3">
              To access certain features of the Service, you must create an account. When creating an
              account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>
                Provide accurate, current, and complete information during registration.
              </li>
              <li>
                Maintain and promptly update your account information to keep it accurate and
                complete.
              </li>
              <li>
                Maintain the security and confidentiality of your login credentials and not share
                your account with others.
              </li>
              <li>
                Accept responsibility for all activities that occur under your account.
              </li>
              <li>
                Immediately notify us of any unauthorized use of your account or any other breach of
                security.
              </li>
            </ul>
            <p>
              You may create an account using your email address or through Sign in with Apple. We
              reserve the right to suspend or terminate accounts that violate these Terms or that we
              reasonably believe are being used fraudulently.
            </p>
          </section>

          {/* 4. Subscription Terms */}
          <section id="subscriptions">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              4. Subscription Terms
            </h2>

            <h3 className="text-white font-medium mb-3 mt-4">4.1 Available Plans</h3>
            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h4 className="text-white font-medium mb-1">Free</h4>
                <p className="text-sm text-gray-400">
                  Access to 2 debates with full fact-checking functionality. No payment required.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-flipside-surface border border-flipside-accent/20">
                <h4 className="text-flipside-accent font-medium mb-1">
                  Premium &mdash; $14.99/month or $99.99/year
                </h4>
                <p className="text-sm text-gray-400">
                  Unlimited debates, full debate history, advanced analytics, priority processing,
                  and all premium features.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h4 className="text-flipside-purple font-medium mb-1">
                  Creator &mdash; $29.99/month (coming soon)
                </h4>
                <p className="text-sm text-gray-400">
                  Everything in Premium plus creator tools, export capabilities, and API access.
                </p>
              </div>
            </div>

            <h3 className="text-white font-medium mb-2">4.2 Payment &amp; Billing</h3>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>
                Payment is charged to your Apple ID account at the time of purchase confirmation.
              </li>
              <li>
                All payments are processed by Apple through the App Store. We do not directly collect
                or store your payment information.
              </li>
              <li>
                Prices are in US Dollars and may vary by region according to Apple&rsquo;s pricing
                matrix.
              </li>
            </ul>

            <h3 className="text-white font-medium mb-2">4.3 Auto-Renewal</h3>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>
                Subscriptions automatically renew unless auto-renewal is turned off at least{' '}
                <strong className="text-white">24 hours before the end</strong> of the current
                billing period.
              </li>
              <li>
                Your account will be charged for renewal within 24 hours prior to the end of the
                current period at the same rate.
              </li>
              <li>
                You can manage and cancel your subscription at any time through your Apple ID
                account settings or the App Store subscription management page.
              </li>
            </ul>

            <h3 className="text-white font-medium mb-2">4.4 Free Trial</h3>
            <p className="mb-4">
              New users receive 2 free debates with full fact-checking functionality. No credit card
              or payment method is required for the free tier. If you subscribe and then cancel, you
              will retain access to premium features until the end of your current billing period.
            </p>

            <h3 className="text-white font-medium mb-2">4.5 Refunds</h3>
            <p>
              All purchases are processed through Apple&rsquo;s App Store. Refund requests must be
              directed to Apple in accordance with Apple&rsquo;s refund policies. We do not have the
              ability to issue refunds for App Store purchases.
            </p>
          </section>

          {/* 5. AI Disclaimer */}
          <section id="ai-disclaimer">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              5. AI Disclaimer
            </h2>
            <div className="p-5 rounded-xl bg-flipside-surface border border-yellow-500/20 mb-4">
              <h3 className="text-yellow-400 font-medium mb-3">Important Notice</h3>
              <p className="mb-3">
                FlipSide uses artificial intelligence and machine learning technologies provided by
                third-party services (including Google Gemini, Groq, and Deepgram) to generate
                fact-check results. You acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
                <li>
                  <strong className="text-white">
                    Fact-checking results are informational only
                  </strong>{' '}
                  and are provided as a reference tool to assist your understanding of claims made
                  during debates.
                </li>
                <li>
                  <strong className="text-white">
                    Results are not guaranteed to be 100% accurate.
                  </strong>{' '}
                  AI systems may produce errors, hallucinations, outdated information, or incomplete
                  analyses.
                </li>
                <li>
                  Results{' '}
                  <strong className="text-white">
                    do not constitute professional, legal, medical, financial, or expert advice
                  </strong>{' '}
                  of any kind.
                </li>
                <li>
                  <strong className="text-white">
                    Users should independently verify
                  </strong>{' '}
                  any critical information, claims, or facts before relying on them for important
                  decisions.
                </li>
                <li>
                  Source citations provided by the AI may not always be current, accessible, or
                  fully representative of the topic.
                </li>
              </ul>
            </div>
            <p>
              Illium Studio expressly disclaims all liability for any actions taken or decisions made
              based on the fact-checking results provided by the Service.
            </p>
          </section>

          {/* 6. User Content & Conduct */}
          <section id="user-content">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              6. User Content &amp; Conduct
            </h2>

            <h3 className="text-white font-medium mb-2 mt-4">6.1 Ownership</h3>
            <p className="mb-4">
              You retain ownership of all content you create, record, or submit through the Service,
              including debate audio, transcripts generated from your debates, and any annotations or
              notes you add (&ldquo;User Content&rdquo;).
            </p>

            <h3 className="text-white font-medium mb-2">6.2 License Grant</h3>
            <p className="mb-4">
              By using the Service, you grant Illium Studio a limited, non-exclusive, worldwide,
              royalty-free license to process, transmit, store, and display your User Content solely
              for the purpose of providing, maintaining, and improving the Service. This license
              terminates when you delete your content or account, except for anonymized data that
              cannot be linked back to you (such as aggregated fact-check results in the RAG cache).
            </p>

            <h3 className="text-white font-medium mb-2">6.3 Prohibited Content &amp; Conduct</h3>
            <p className="mb-3">
              You agree not to use the Service to create, upload, transmit, or share content that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Contains hate speech, slurs, or content that promotes discrimination based on race,
                ethnicity, national origin, religion, gender, sexual orientation, disability, or any
                other protected characteristic.
              </li>
              <li>
                Contains threats of violence, intimidation, or harassment directed at any individual
                or group.
              </li>
              <li>
                Constitutes harassment, bullying, stalking, or doxxing of any person.
              </li>
              <li>
                Contains or promotes illegal activity, including but not limited to fraud,
                trafficking, or incitement to violence.
              </li>
              <li>
                Constitutes misinformation intentionally created or disseminated to cause harm,
                manipulate public opinion, or undermine democratic processes.
              </li>
              <li>
                Infringes on the intellectual property rights, privacy rights, or other rights of
                any third party.
              </li>
              <li>
                Contains sexually explicit material, child exploitation material, or content that
                sexualizes minors.
              </li>
              <li>
                Attempts to reverse-engineer, exploit, or circumvent the Service&rsquo;s security
                measures or AI systems.
              </li>
            </ul>
          </section>

          {/* 7. Content Moderation */}
          <section id="content-moderation">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              7. Content Moderation
            </h2>

            <h3 className="text-white font-medium mb-2 mt-4">7.1 Reporting</h3>
            <p className="mb-4">
              If you encounter content that violates these Terms, you may report it through the
              in-app reporting feature or by contacting us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-flipside-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We encourage all users to help maintain a safe and respectful community.
            </p>

            <h3 className="text-white font-medium mb-2">7.2 Review Process</h3>
            <p className="mb-4">
              We review reported content in a timely manner. Our moderation process includes
              automated screening and human review where appropriate. We aim to respond to reports
              within 48 hours.
            </p>

            <h3 className="text-white font-medium mb-2">7.3 Consequences</h3>
            <p className="mb-3">
              Violations of these Terms may result in one or more of the following actions, at our
              sole discretion:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Warning notification</li>
              <li>Content removal</li>
              <li>Temporary account suspension</li>
              <li>Permanent account termination</li>
              <li>Reporting to law enforcement where required by law</li>
            </ul>
          </section>

          {/* 8. Intellectual Property */}
          <section id="intellectual-property">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              8. Intellectual Property
            </h2>
            <p className="mb-3">
              The Service, including its original content (excluding User Content), features,
              functionality, design, graphics, user interface, and underlying technology, is and
              remains the exclusive property of Illium Studio and is protected by copyright,
              trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-3">
              The FlipSide name, logo, and all related names, logos, product and service names,
              designs, and slogans are trademarks of Illium Studio. You may not use these marks
              without our prior written permission.
            </p>
            <p>
              The AI models and technologies used by the Service (including but not limited to Google
              Gemini, Groq, and Deepgram) are the property of their respective owners and are used
              by FlipSide under license or API agreements. FlipSide does not claim ownership of these
              third-party technologies.
            </p>
          </section>

          {/* 9. Account Termination */}
          <section id="termination">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              9. Account Termination
            </h2>

            <h3 className="text-white font-medium mb-2 mt-4">9.1 Termination by You</h3>
            <p className="mb-4">
              You may terminate your account at any time by deleting it through the in-app settings
              (Settings &gt; Account &gt; Delete Account) or by contacting us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-flipside-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . Upon termination, your data will be purged in accordance with our Privacy Policy.
            </p>

            <h3 className="text-white font-medium mb-2">9.2 Termination by FlipSide</h3>
            <p className="mb-4">
              We reserve the right to suspend or terminate your account, without prior notice or
              liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
              <li>Violation of these Terms or our Privacy Policy.</li>
              <li>Engaging in prohibited content or conduct as described in Section 6.</li>
              <li>Fraudulent, abusive, or illegal activity.</li>
              <li>Extended periods of inactivity (12 months or more).</li>
              <li>At our discretion, for any reason with 30 days&rsquo; notice via email.</li>
            </ul>

            <h3 className="text-white font-medium mb-2">9.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Service will immediately cease. Provisions of
              these Terms that by their nature should survive termination shall survive, including
              but not limited to ownership provisions, warranty disclaimers, indemnity, and
              limitations of liability.
            </p>
          </section>

          {/* 10. Limitation of Liability */}
          <section id="liability">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              10. Limitation of Liability
            </h2>
            <p className="mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ILLIUM STUDIO,
              ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
              LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
              RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4 text-sm">
              <li>Your access to or use of (or inability to access or use) the Service.</li>
              <li>Any conduct or content of any third party on the Service.</li>
              <li>Any content obtained from the Service, including AI-generated fact-check results.</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or content.
              </li>
              <li>
                Errors, inaccuracies, or omissions in AI-generated fact-check results or source
                citations.
              </li>
            </ul>
            <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
              <p className="text-sm">
                <strong className="text-white">Liability Cap:</strong> Our total aggregate liability
                to you for all claims arising out of or relating to the use of or inability to use
                the Service shall not exceed the greater of (a) the total amount you have paid to
                FlipSide in the{' '}
                <strong className="text-white">12 months preceding the claim</strong>, or (b){' '}
                <strong className="text-white">one hundred US dollars ($100.00)</strong>.
              </p>
            </div>
          </section>

          {/* 11. Indemnification */}
          <section id="indemnification">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              11. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless Illium Studio, its officers,
              directors, employees, agents, licensors, and service providers from and against any
              claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees
              (including reasonable attorneys&rsquo; fees) arising out of or relating to: (a) your
              violation of these Terms; (b) your use of the Service; (c) your User Content; (d)
              your violation of any third-party rights, including intellectual property, privacy, or
              publicity rights; or (e) any claim that your User Content caused damage to a third
              party.
            </p>
          </section>

          {/* 12. Dispute Resolution */}
          <section id="dispute-resolution">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              12. Dispute Resolution
            </h2>

            <h3 className="text-white font-medium mb-2 mt-4">12.1 Informal Resolution</h3>
            <p className="mb-4">
              Before filing any formal dispute, you agree to first contact us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-flipside-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              and attempt to resolve the dispute informally for at least 30 days.
            </p>

            <h3 className="text-white font-medium mb-2">12.2 Binding Arbitration</h3>
            <p className="mb-4">
              If we cannot resolve a dispute informally, any dispute, controversy, or claim arising
              out of or relating to these Terms or the Service shall be resolved by binding
              arbitration administered by the American Arbitration Association (&ldquo;AAA&rdquo;)
              under its Consumer Arbitration Rules. The arbitration shall be conducted in the State
              of California, United States. The arbitrator&rsquo;s decision shall be final and
              binding and may be entered as a judgment in any court of competent jurisdiction.
            </p>

            <h3 className="text-white font-medium mb-2">12.3 Class Action Waiver</h3>
            <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
              <p className="text-sm">
                <strong className="text-white">
                  YOU AND ILLIUM STUDIO AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER
                  ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN
                  ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.
                </strong>{' '}
                The arbitrator may not consolidate more than one person&rsquo;s claims and may not
                preside over any form of class or representative proceeding.
              </p>
            </div>

            <h3 className="text-white font-medium mb-2 mt-4">12.4 Exceptions</h3>
            <p>
              Notwithstanding the above, either party may seek injunctive or other equitable relief
              in any court of competent jurisdiction to prevent the actual or threatened infringement,
              misappropriation, or violation of intellectual property rights. Claims eligible for
              small claims court in your jurisdiction may also be brought there.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section id="governing-law">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              13. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State
              of California, United States, without regard to its conflict of law provisions. To the
              extent that any lawsuit or court proceeding is permitted hereunder, you and Illium
              Studio agree to submit to the personal and exclusive jurisdiction of the state and
              federal courts located in Los Angeles County, California.
            </p>
          </section>

          {/* 14. Changes to Terms */}
          <section id="changes">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              14. Changes to Terms
            </h2>
            <p className="mb-3">
              We reserve the right to modify or replace these Terms at any time at our sole
              discretion. When we make material changes, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
              <li>
                Update the &ldquo;Effective Date&rdquo; at the top of these Terms.
              </li>
              <li>
                Provide at least 30 days&rsquo; notice before material changes take effect, via
                email or in-app notification.
              </li>
              <li>
                Post the updated Terms on our website and within the app.
              </li>
            </ul>
            <p>
              By continuing to access or use the Service after the revised Terms become effective,
              you agree to be bound by the updated Terms. If you do not agree to the new Terms, you
              must stop using the Service and delete your account.
            </p>
          </section>

          {/* 15. Contact Information */}
          <section id="contact">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              15. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="p-5 rounded-xl bg-flipside-surface border border-white/5">
              <p className="mb-2">
                <strong className="text-white">Illium Studio</strong>
              </p>
              <p className="mb-1">
                App:{' '}
                <span className="text-white">
                  FlipSide (com.illiumstudio.FlipSide)
                </span>
              </p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-flipside-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer divider */}
        <div className="chrome-line mt-16 mb-8" />
        <p className="text-center text-flipside-text-secondary text-xs">
          &copy; {new Date().getFullYear()} Illium Studio. All rights reserved.
        </p>
      </main>
    </div>
  )
}
