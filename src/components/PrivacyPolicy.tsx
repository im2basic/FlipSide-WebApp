import { useEffect } from 'react'

const EFFECTIVE_DATE = 'May 12, 2026'
const CONTACT_EMAIL = 'support@flipside.app'

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'third-party-services', title: '3. Third-Party Services' },
  { id: 'how-we-use', title: '4. How We Use Your Information' },
  { id: 'data-retention', title: '5. Data Retention' },
  { id: 'data-sharing', title: '6. Data Sharing' },
  { id: 'your-rights', title: '7. Your Rights' },
  { id: 'childrens-privacy', title: '8. Children\'s Privacy' },
  { id: 'security', title: '9. Security' },
  { id: 'account-deletion', title: '10. Account Deletion' },
  { id: 'ai-disclosure', title: '11. AI Disclosure' },
  { id: 'international-transfers', title: '12. International Data Transfers' },
  { id: 'changes', title: '13. Changes to This Policy' },
  { id: 'contact', title: '14. Contact Us' },
]

export default function PrivacyPolicy() {
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
            href="/terms"
            className="text-flipside-accent hover:text-flipside-accent/80 transition-colors text-sm"
          >
            Terms of Service
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="gradient-duality">Privacy Policy</span>
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
          {/* 1. Introduction */}
          <section id="introduction">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              1. Introduction
            </h2>
            <p className="mb-3">
              FlipSide (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a real-time
              AI-powered fact-checking application developed by Illium Studio. FlipSide listens to
              live debates, transcribes speech, detects claims, and verifies them against
              authoritative sources in real time.
            </p>
            <p className="mb-3">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use the FlipSide mobile application (iOS) and associated web
              services (collectively, the &ldquo;Service&rdquo;). By accessing or using the Service,
              you agree to the terms of this Privacy Policy.
            </p>
            <p>
              If you do not agree with the terms of this Privacy Policy, please do not access or use
              the Service.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="information-we-collect">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect the following categories of information to provide, maintain, and improve the
              Service:
            </p>

            <h3 className="text-white font-medium mb-2">2.1 Audio Data</h3>
            <p className="mb-4">
              When you use FlipSide&rsquo;s live fact-checking feature, the app accesses your
              device&rsquo;s microphone to capture audio of the debate. This audio is streamed in
              real time to our transcription service and is{' '}
              <strong className="text-white">not stored</strong> on our servers or on your device
              after processing. Audio data is processed ephemerally for speech-to-text transcription
              only.
            </p>

            <h3 className="text-white font-medium mb-2">2.2 Account Information</h3>
            <p className="mb-4">
              When you create an account, we collect your email address, display name, and, if you
              sign in with Apple, your Apple ID credentials (we receive only the information you
              authorize Apple to share). We do not receive or store your Apple ID password.
            </p>

            <h3 className="text-white font-medium mb-2">2.3 Debate Data</h3>
            <p className="mb-4">
              We collect and store debate transcripts, AI-generated fact-check results, claim
              analyses, source citations, and your debate history. This data is associated with your
              account and retained according to our data retention policies described below.
            </p>

            <h3 className="text-white font-medium mb-2">2.4 Onboarding Survey Responses</h3>
            <p className="mb-4">
              During account setup, we may collect responses to onboarding survey questions to
              personalize your experience. These responses are associated with your account.
            </p>

            <h3 className="text-white font-medium mb-2">2.5 Usage Analytics</h3>
            <p className="mb-4">
              We collect information about how you interact with the Service, including features
              used, screens viewed, session duration, interaction patterns, and engagement metrics.
              This data is used to understand usage patterns and improve the Service.
            </p>

            <h3 className="text-white font-medium mb-2">2.6 Purchase History</h3>
            <p className="mb-4">
              We collect information about your subscription status, plan tier, and purchase history
              through Apple&rsquo;s App Store and our subscription management partners. We do not
              have access to your full payment card details.
            </p>

            <h3 className="text-white font-medium mb-2">2.7 Device Information &amp; Diagnostics</h3>
            <p>
              We automatically collect device type, operating system version, app version, crash
              reports, error logs, and performance diagnostics. This information helps us identify
              and fix technical issues.
            </p>
          </section>

          {/* 3. Third-Party Services */}
          <section id="third-party-services">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              3. Third-Party Services
            </h2>
            <p className="mb-4">
              FlipSide uses the following third-party services to provide its functionality. Each
              service receives only the minimum data necessary for its purpose:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Deepgram</h3>
                <p className="text-sm">
                  Receives audio data streamed from your device for real-time speech-to-text
                  transcription. Deepgram processes audio ephemerally and does not retain recordings.
                  See{' '}
                  <a
                    href="https://deepgram.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Deepgram&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Google (Gemini AI)</h3>
                <p className="text-sm">
                  Receives transcript text for AI-powered fact verification with web search
                  grounding. Google may process this data according to its AI terms. See{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Google&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Groq</h3>
                <p className="text-sm">
                  Receives transcript text for real-time claim detection and extraction. Groq
                  processes data according to its privacy terms. See{' '}
                  <a
                    href="https://groq.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Groq&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Supabase</h3>
                <p className="text-sm">
                  Stores user account data, authentication credentials, debate history, transcripts,
                  and fact-check results. Supabase provides our backend database and authentication
                  infrastructure. See{' '}
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Supabase&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">RevenueCat</h3>
                <p className="text-sm">
                  Manages subscription status, processes receipt validation from Apple, and tracks
                  subscription lifecycle events. RevenueCat does not have access to your payment card
                  details. See{' '}
                  <a
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    RevenueCat&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Superwall</h3>
                <p className="text-sm">
                  Collects paywall interaction data including view events, conversion metrics, and
                  A/B test assignments to optimize the subscription experience. See{' '}
                  <a
                    href="https://superwall.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Superwall&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">PostHog</h3>
                <p className="text-sm">
                  Collects anonymized usage analytics including feature usage, session data, and
                  interaction patterns to help us understand how the Service is used and prioritize
                  improvements. See{' '}
                  <a
                    href="https://posthog.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    PostHog&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Sentry</h3>
                <p className="text-sm">
                  Collects crash reports, error diagnostics, and performance data to help us identify
                  and resolve technical issues. Sentry data includes device information, stack traces,
                  and breadcrumb events. See{' '}
                  <a
                    href="https://sentry.io/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Sentry&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="p-4 rounded-lg bg-flipside-surface border border-white/5">
                <h3 className="text-flipside-accent font-medium mb-1">Apple</h3>
                <p className="text-sm">
                  Processes in-app purchase payments, manages subscription billing through your Apple
                  ID, and delivers push notifications. Apple&rsquo;s data handling is governed by{' '}
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flipside-accent hover:underline"
                  >
                    Apple&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* 4. How We Use Your Information */}
          <section id="how-we-use">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              4. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-white">Provide the Service:</strong> Transcribe debates,
                detect claims, perform fact-checking, and display results in real time.
              </li>
              <li>
                <strong className="text-white">Manage your account:</strong> Authenticate your
                identity, manage your subscription, and maintain your debate history.
              </li>
              <li>
                <strong className="text-white">Personalize your experience:</strong> Use onboarding
                survey responses and usage patterns to tailor the Service to your interests.
              </li>
              <li>
                <strong className="text-white">Improve the Service:</strong> Analyze usage analytics,
                error reports, and feedback to fix issues, optimize performance, and develop new
                features.
              </li>
              <li>
                <strong className="text-white">Communicate with you:</strong> Send service-related
                notifications, updates, and support responses.
              </li>
              <li>
                <strong className="text-white">Ensure safety and compliance:</strong> Detect abuse,
                enforce our Terms of Service, and comply with legal obligations.
              </li>
            </ul>
          </section>

          {/* 5. Data Retention */}
          <section id="data-retention">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              5. Data Retention
            </h2>
            <p className="mb-4">
              We retain different types of data for different periods based on their purpose:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-flipside-chrome font-medium">
                      Data Type
                    </th>
                    <th className="text-left py-3 text-flipside-chrome font-medium">
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">Audio recordings</td>
                    <td className="py-3">
                      Not stored. Processed in real time and discarded immediately after
                      transcription.
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">Account data</td>
                    <td className="py-3">
                      Retained until you delete your account or request erasure.
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">Debate history &amp; transcripts</td>
                    <td className="py-3">
                      Retained according to your subscription tier. Free users: last 2 debates.
                      Premium/Creator users: full history retained until account deletion.
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">RAG cache (fact-check results)</td>
                    <td className="py-3">
                      Anonymized fact-check results may be retained to improve the accuracy and speed
                      of fact-checking for the broader community. These results are stripped of
                      personally identifiable information.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white">Usage analytics</td>
                    <td className="py-3">Retained for up to 12 months, then deleted or anonymized.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Data Sharing */}
          <section id="data-sharing">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              6. Data Sharing
            </h2>
            <p className="mb-3">
              <strong className="text-white">
                We do not sell your personal information.
              </strong>{' '}
              We do not rent, trade, or otherwise monetize your personal data.
            </p>
            <p className="mb-3">
              We share your information only with the third-party service providers named in Section
              3 above, and only to the extent necessary to provide the Service&rsquo;s functionality.
              Each third-party service receives only the minimum data required for its specific
              purpose.
            </p>
            <p className="mb-3">
              We may also disclose your information if required to do so by law, regulation, legal
              process, or governmental request, or when we believe disclosure is necessary to protect
              our rights, your safety, or the safety of others.
            </p>
            <p>
              In the event of a merger, acquisition, or sale of all or a portion of our assets, your
              personal information may be transferred as part of that transaction. We will notify you
              via email and/or a prominent notice within the Service of any change in ownership or
              uses of your personal information.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section id="your-rights">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              7. Your Rights
            </h2>

            <h3 className="text-white font-medium mb-2 mt-4">
              7.1 Rights Under the General Data Protection Regulation (GDPR) &mdash; European Union
            </h3>
            <p className="mb-3">
              If you are a resident of the European Economic Area (EEA), you have the following
              rights:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
              <li>
                <strong className="text-white">Right of access:</strong> Request a copy of the
                personal data we hold about you.
              </li>
              <li>
                <strong className="text-white">Right to rectification:</strong> Request correction of
                inaccurate or incomplete personal data.
              </li>
              <li>
                <strong className="text-white">Right to erasure:</strong> Request deletion of your
                personal data (&ldquo;right to be forgotten&rdquo;).
              </li>
              <li>
                <strong className="text-white">Right to data portability:</strong> Request a
                machine-readable copy of your data for transfer to another service.
              </li>
              <li>
                <strong className="text-white">Right to restriction:</strong> Request that we limit
                the processing of your personal data.
              </li>
              <li>
                <strong className="text-white">Right to object:</strong> Object to the processing of
                your personal data for specific purposes, including direct marketing.
              </li>
              <li>
                <strong className="text-white">Right to withdraw consent:</strong> Where processing
                is based on consent, you may withdraw consent at any time without affecting the
                lawfulness of prior processing.
              </li>
            </ul>
            <p className="mb-6">
              To exercise any of these rights, contact us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-flipside-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We will respond to your request within 30 days.
            </p>

            <h3 className="text-white font-medium mb-2">
              7.2 Rights Under the California Consumer Privacy Act (CCPA) &mdash; California
            </h3>
            <p className="mb-3">
              If you are a California resident, you have the following rights under the CCPA:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
              <li>
                <strong className="text-white">Right to know:</strong> Request disclosure of the
                categories and specific pieces of personal information we have collected about you.
              </li>
              <li>
                <strong className="text-white">Right to delete:</strong> Request deletion of personal
                information we have collected from you.
              </li>
              <li>
                <strong className="text-white">Right to opt-out:</strong> Opt out of the sale of your
                personal information.
              </li>
              <li>
                <strong className="text-white">Right to non-discrimination:</strong> You will not
                receive discriminatory treatment for exercising your CCPA rights.
              </li>
            </ul>

            <div className="p-4 rounded-lg bg-flipside-surface border border-flipside-accent/20 mb-4">
              <h4 className="text-flipside-accent font-medium mb-2">
                &ldquo;Do Not Sell My Personal Information&rdquo;
              </h4>
              <p className="text-sm">
                FlipSide does not sell, rent, or trade your personal information to third parties for
                monetary or other valuable consideration. We do not participate in data brokering or
                share personal information for cross-context behavioral advertising. If our practices
                change in the future, we will update this policy and provide you with an opt-out
                mechanism before any such sharing occurs.
              </p>
            </div>

            <p>
              To exercise any of these rights, contact us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-flipside-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We will verify your identity and respond within 45 days as required by law.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section id="childrens-privacy">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              8. Children&rsquo;s Privacy
            </h2>
            <p className="mb-3">
              FlipSide is rated 13+ and is not intended for children under the age of 13. We do not
              knowingly collect personally identifiable information from children under 13. If you
              are a parent or guardian and believe your child under 13 has provided us with personal
              information, please contact us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-flipside-accent hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              and we will promptly delete such information from our records.
            </p>
            <p>
              If we become aware that we have collected personal information from a child under the
              age of 13 without parental consent, we will take steps to remove that information as
              quickly as possible.
            </p>
          </section>

          {/* 9. Security */}
          <section id="security">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              9. Security
            </h2>
            <p className="mb-3">
              We take the security of your personal information seriously and implement
              industry-standard measures to protect it:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-white">Encryption in transit:</strong> All data transmitted
                between your device and our servers is encrypted using TLS (Transport Layer Security).
              </li>
              <li>
                <strong className="text-white">Encryption at rest:</strong> Stored personal data is
                encrypted at rest using AES-256 encryption or equivalent.
              </li>
              <li>
                <strong className="text-white">API key security:</strong> All API keys for
                third-party services are stored server-side only and are never embedded in the client
                application or transmitted to your device.
              </li>
              <li>
                <strong className="text-white">Access controls:</strong> Access to personal data is
                restricted to authorized personnel on a need-to-know basis.
              </li>
              <li>
                <strong className="text-white">Regular audits:</strong> We regularly review and
                update our security practices to address emerging threats.
              </li>
            </ul>
            <p className="mt-3 text-flipside-text-secondary text-sm">
              No method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your personal
              information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* 10. Account Deletion */}
          <section id="account-deletion">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              10. Account Deletion
            </h2>
            <p className="mb-3">
              You may delete your account at any time through the following methods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li>
                <strong className="text-white">In-app:</strong> Navigate to{' '}
                <span className="text-flipside-accent">Settings &gt; Account &gt; Delete Account</span>{' '}
                within the FlipSide app.
              </li>
              <li>
                <strong className="text-white">Email:</strong> Send a deletion request to{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-flipside-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                from the email address associated with your account.
              </li>
            </ul>
            <p className="mb-3">
              Upon account deletion, we will permanently purge your personal data, including your
              account information, debate history, transcripts, and fact-check results, within{' '}
              <strong className="text-white">14 days</strong>. Some anonymized, aggregated data (such
              as the RAG cache) may be retained as it cannot be linked back to you.
            </p>
            <p>
              Please note that deleting your account does not automatically cancel any active
              subscriptions. You must cancel your subscription through Apple&rsquo;s subscription
              management before or after deleting your account.
            </p>
          </section>

          {/* 11. AI Disclosure */}
          <section id="ai-disclosure">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              11. AI Disclosure
            </h2>
            <p className="mb-3">
              FlipSide uses artificial intelligence and machine learning technologies to provide its
              core fact-checking functionality. By using the Service, you acknowledge and understand
              that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Your debate audio is processed by <strong className="text-white">Deepgram</strong>,
                a third-party AI speech-to-text service.
              </li>
              <li>
                Your debate transcripts are processed by{' '}
                <strong className="text-white">Groq</strong>, a third-party AI service, for claim
                detection and extraction.
              </li>
              <li>
                Your debate transcripts and detected claims are processed by{' '}
                <strong className="text-white">Google Gemini</strong>, a third-party AI service, for
                fact verification with web search grounding.
              </li>
              <li>
                AI-generated outputs, including fact-check verdicts and source citations, are
                informational only and may not be 100% accurate.
              </li>
              <li>
                These third-party AI services may process your data according to their own privacy
                policies and terms of service, as linked in Section 3.
              </li>
            </ul>
          </section>

          {/* 12. International Data Transfers */}
          <section id="international-transfers">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              12. International Data Transfers
            </h2>
            <p className="mb-3">
              FlipSide is operated from the United States. If you are accessing the Service from
              outside the United States, please be aware that your information may be transferred to,
              stored, and processed in the United States and other countries where our service
              providers operate.
            </p>
            <p className="mb-3">
              These countries may have data protection laws that differ from those in your
              jurisdiction. By using the Service, you consent to the transfer of your information to
              the United States and other countries as described in this Privacy Policy.
            </p>
            <p>
              For users in the European Economic Area, we rely on Standard Contractual Clauses
              approved by the European Commission and other appropriate safeguards to ensure adequate
              protection of personal data transferred internationally.
            </p>
          </section>

          {/* 13. Changes to This Policy */}
          <section id="changes">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              13. Changes to This Policy
            </h2>
            <p className="mb-3">
              We may update this Privacy Policy from time to time. When we make changes, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
              <li>Update the &ldquo;Effective Date&rdquo; at the top of this page.</li>
              <li>
                Notify you via email or in-app notification for material changes.
              </li>
              <li>
                Post the updated Privacy Policy on our website and within the app.
              </li>
            </ul>
            <p>
              Your continued use of the Service after the updated Privacy Policy becomes effective
              constitutes your acceptance of the changes. We encourage you to review this page
              periodically.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section id="contact">
            <h2 className="text-xl font-semibold text-white mb-4 gradient-duality inline-block">
              14. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
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
