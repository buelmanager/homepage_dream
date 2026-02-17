export default function AcceptableUsePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">Acceptable Use Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-base font-semibold text-foreground">1. Purpose</h2>
          <p className="mt-2">
            This Acceptable Use Policy (&quot;AUP&quot;) governs your use of the HomeDream Service and any Content obtained through it. This policy is designed to protect HomeDream, its users, and the broader internet community. Violation of this AUP may result in suspension or termination of your account.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Acceptable Use</h2>
          <p className="mt-2">You may use HomeDream and its Content for:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Building your own websites, web applications, and digital products</li>
            <li>Creating websites for clients as part of freelance or agency work</li>
            <li>Learning, education, and personal development</li>
            <li>Internal business tools and applications</li>
            <li>Any lawful commercial project where the Content serves as a foundation (not the end product for resale)</li>
          </ul>
        </section>

        <section className="rounded-xl border-2 border-red-300 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
          <h2 className="text-base font-bold text-red-700 dark:text-red-300">3. Prohibited Activities</h2>
          <p className="mt-2 text-red-800 dark:text-red-200">The following activities are strictly prohibited:</p>

          <h3 className="mt-4 font-bold text-red-700 dark:text-red-300">3.1 Content Misuse</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-red-700 dark:text-red-300">
            <li>Reselling, redistributing, or sublicensing templates or source code</li>
            <li>Sharing account credentials or downloaded Content with unauthorized parties</li>
            <li>Uploading Content to any marketplace, repository, or sharing platform</li>
            <li>Creating a competing template marketplace using our Content</li>
            <li>Removing or altering copyright notices, watermarks, or attribution</li>
          </ul>

          <h3 className="mt-4 font-bold text-red-700 dark:text-red-300">3.2 Technical Abuse</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-red-700 dark:text-red-300">
            <li>Automated scraping, crawling, or bulk downloading of Content</li>
            <li>Using bots, scripts, or other automated means to access the Service</li>
            <li>Attempting to bypass authentication, rate limiting, or access controls</li>
            <li>Reverse-engineering the Service or its security measures</li>
            <li>Overloading, flooding, or performing denial-of-service attacks</li>
            <li>Exploiting vulnerabilities or security weaknesses</li>
          </ul>

          <h3 className="mt-4 font-bold text-red-700 dark:text-red-300">3.3 Harmful Activities</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-red-700 dark:text-red-300">
            <li>Using the Service for any illegal activity</li>
            <li>Distributing malware, viruses, or harmful code</li>
            <li>Phishing, fraud, or deceptive practices</li>
            <li>Harassment, abuse, or threatening behavior toward other users or staff</li>
            <li>Using Content in connection with hate speech, discrimination, or violence</li>
            <li>Impersonating HomeDream, its employees, or other users</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Account Sharing</h2>
          <p className="mt-2">
            Each HomeDream account is for <span className="font-semibold text-foreground">individual use only</span>. You may not share your account credentials with others or allow multiple individuals to use a single account. Organizations requiring multiple users should contact us for team licensing options.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. Monitoring &amp; Enforcement</h2>
          <p className="mt-2">
            HomeDream reserves the right to monitor usage patterns to ensure compliance with this AUP. We may investigate suspected violations and take appropriate action, including:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Issuing warnings</li>
            <li>Temporarily suspending account access</li>
            <li>Permanently terminating accounts</li>
            <li>Reporting illegal activities to law enforcement</li>
            <li>Pursuing legal action for damages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Reporting Violations</h2>
          <p className="mt-2">
            If you become aware of any violation of this AUP, please report it to <span className="font-medium text-foreground">support@homedream.dev</span>. All reports are treated confidentially and investigated promptly.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">7. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this AUP at any time. Changes will be posted on this page. Continued use of the Service after changes constitutes acceptance of the updated policy.
          </p>
        </section>
      </div>
    </div>
  );
}
