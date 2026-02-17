export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">Cookie Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-base font-semibold text-foreground">1. What Are Cookies</h2>
          <p className="mt-2">
            Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners usage information.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. How We Use Cookies</h2>
          <p className="mt-2">HomeDream uses the following types of cookies:</p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground">Essential Cookies</h3>
              <p className="mt-1">Required for the Service to function. These include authentication session cookies, CSRF protection tokens, and user preference cookies. These cookies cannot be disabled.</p>
              <p className="mt-1 text-xs"><span className="font-medium text-foreground">Duration:</span> Session or up to 30 days</p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground">Authentication Cookies</h3>
              <p className="mt-1">Used to identify you when you log in to HomeDream. These maintain your authenticated session and remember your login state across pages and visits.</p>
              <p className="mt-1 text-xs"><span className="font-medium text-foreground">Provider:</span> NextAuth.js</p>
              <p className="text-xs"><span className="font-medium text-foreground">Duration:</span> Session or up to 30 days</p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
              <p className="mt-1">Help us understand how visitors use our Service, which pages are most popular, and how users navigate the site. This data is collected anonymously and used to improve the Service.</p>
              <p className="mt-1 text-xs"><span className="font-medium text-foreground">Duration:</span> Up to 2 years</p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground">Preference Cookies</h3>
              <p className="mt-1">Remember your preferences such as theme (light/dark mode), language, and display settings.</p>
              <p className="mt-1 text-xs"><span className="font-medium text-foreground">Duration:</span> Up to 1 year</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">3. Third-Party Cookies</h2>
          <p className="mt-2">Our Service may use cookies from the following third-party services:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li><span className="font-medium text-foreground">Vercel Analytics:</span> Website performance and usage analytics</li>
            <li><span className="font-medium text-foreground">Lemon Squeezy / Stripe:</span> Payment processing (set during checkout)</li>
            <li><span className="font-medium text-foreground">Google / GitHub OAuth:</span> Authentication cookies during social login</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Managing Cookies</h2>
          <p className="mt-2">
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p className="mt-2">
            Please note that blocking essential cookies may prevent you from using certain features of the Service, including logging in to your account.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. Updates to This Policy</h2>
          <p className="mt-2">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices. Changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Contact</h2>
          <p className="mt-2">
            For questions about our use of cookies, please contact us at <span className="font-medium text-foreground">support@homedream.dev</span>
          </p>
        </section>
      </div>
    </div>
  );
}
