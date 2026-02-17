export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-base font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-2">
            HomeDream (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the HomeDream website and services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our Service, in compliance with the Republic of Korea&apos;s Personal Information Protection Act (PIPA), the EU General Data Protection Regulation (GDPR), and other applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Information We Collect</h2>

          <h3 className="mt-3 font-medium text-foreground">2.1 Information You Provide</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><span className="font-medium text-foreground">Account Information:</span> Name, email address, and profile picture (when registering via email or OAuth providers such as Google or GitHub)</li>
            <li><span className="font-medium text-foreground">Payment Information:</span> Billing details processed securely by our third-party payment processors (Lemon Squeezy / Stripe). We do not store your credit card numbers.</li>
            <li><span className="font-medium text-foreground">Communications:</span> Information you provide when contacting support</li>
          </ul>

          <h3 className="mt-3 font-medium text-foreground">2.2 Information Collected Automatically</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><span className="font-medium text-foreground">Usage Data:</span> Pages visited, features used, download history, and interaction patterns</li>
            <li><span className="font-medium text-foreground">Device Information:</span> Browser type, operating system, device identifiers, and screen resolution</li>
            <li><span className="font-medium text-foreground">Log Data:</span> IP address, access times, referring URLs, and server logs</li>
            <li><span className="font-medium text-foreground">Cookies:</span> See our <a href="/cookies" className="font-medium text-foreground underline underline-offset-2">Cookie Policy</a> for details</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">3. How We Use Your Information</h2>
          <p className="mt-2">We use your personal information for the following purposes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To provide, maintain, and improve the Service</li>
            <li>To process subscriptions, payments, and transactions</li>
            <li>To send transactional emails (account confirmation, payment receipts, subscription updates)</li>
            <li>To respond to your support inquiries</li>
            <li>To detect, prevent, and address fraud, abuse, or security issues</li>
            <li>To enforce our Terms of Service and License Agreement</li>
            <li>To analyze usage patterns and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Legal Basis for Processing (GDPR)</h2>
          <p className="mt-2">For users in the EEA/UK, we process personal data based on:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><span className="font-medium text-foreground">Contract Performance:</span> Processing necessary to provide the Service you subscribed to</li>
            <li><span className="font-medium text-foreground">Legitimate Interests:</span> Fraud prevention, security, analytics, and service improvement</li>
            <li><span className="font-medium text-foreground">Consent:</span> Where you have given explicit consent (e.g., marketing communications)</li>
            <li><span className="font-medium text-foreground">Legal Obligation:</span> Compliance with applicable laws and regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. Sharing Your Information</h2>
          <p className="mt-2">We share your information only with:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li><span className="font-medium text-foreground">Payment Processors:</span> Lemon Squeezy and Stripe for payment processing</li>
            <li><span className="font-medium text-foreground">Cloud Infrastructure:</span> Vercel (hosting), Supabase (database and storage)</li>
            <li><span className="font-medium text-foreground">Authentication Providers:</span> NextAuth.js with Google and GitHub OAuth</li>
            <li><span className="font-medium text-foreground">Analytics:</span> Anonymous usage analytics to improve the Service</li>
            <li><span className="font-medium text-foreground">Legal Requirements:</span> When required by law, court order, or to protect our rights</li>
          </ul>
          <p className="mt-2">
            We do <span className="font-semibold text-foreground">not</span> sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. International Data Transfers</h2>
          <p className="mt-2">
            Your data may be transferred to and processed in countries outside of your residence. We use cloud services hosted globally (primarily in the United States and Asia-Pacific). For transfers from the EEA/UK, we rely on Standard Contractual Clauses or other lawful transfer mechanisms. For Korean users, we obtain consent for overseas transfers as required by PIPA.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">7. Data Retention</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><span className="font-medium text-foreground">Account Data:</span> Retained for the duration of your account, plus 30 days after deletion request</li>
            <li><span className="font-medium text-foreground">Transaction Records:</span> Retained for 5 years for tax and legal compliance</li>
            <li><span className="font-medium text-foreground">Server Logs:</span> Retained for 90 days</li>
            <li><span className="font-medium text-foreground">Analytics Data:</span> Retained in anonymized form indefinitely</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">8. Your Rights</h2>
          <p className="mt-2">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><span className="font-medium text-foreground">Access</span> your personal data we hold</li>
            <li><span className="font-medium text-foreground">Rectify</span> inaccurate or incomplete data</li>
            <li><span className="font-medium text-foreground">Delete</span> your personal data (&quot;right to be forgotten&quot;)</li>
            <li><span className="font-medium text-foreground">Restrict</span> processing of your data</li>
            <li><span className="font-medium text-foreground">Data Portability</span> &mdash; receive your data in a structured, machine-readable format</li>
            <li><span className="font-medium text-foreground">Object</span> to processing based on legitimate interests</li>
            <li><span className="font-medium text-foreground">Withdraw Consent</span> at any time where processing is based on consent</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at <span className="font-medium text-foreground">support@homedream.dev</span>. We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">9. Security</h2>
          <p className="mt-2">
            We implement appropriate technical and organizational measures to protect your personal information, including encryption in transit (TLS/SSL), secure authentication, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">10. Children&apos;s Privacy</h2>
          <p className="mt-2">
            Our Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">11. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Material changes will be notified via email or a prominent notice on the Service at least 14 days before taking effect. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">12. Contact Us</h2>
          <p className="mt-2">
            For privacy-related inquiries, data requests, or complaints, please contact us at:
          </p>
          <p className="mt-2 font-medium text-foreground">
            HomeDream Privacy Team<br />
            Email: support@homedream.dev
          </p>
          <p className="mt-2">
            EEA/UK users may also lodge a complaint with your local data protection authority.
          </p>
        </section>
      </div>
    </div>
  );
}
