export default function LicensePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">License Agreement</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">

        {/* CRITICAL WARNING */}
        <section className="rounded-xl border-2 border-red-400 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/40">
          <h2 className="flex items-center gap-2 text-lg font-bold text-red-700 dark:text-red-300">
            RESALE &amp; REDISTRIBUTION STRICTLY PROHIBITED
          </h2>
          <p className="mt-3 text-sm font-semibold text-red-800 dark:text-red-200">
            Any form of resale, redistribution, sublicensing, or sharing of the source code obtained from HomeDream is strictly prohibited. This includes, but is not limited to: selling on marketplaces, sharing in repositories, uploading to file-sharing services, bundling in other products for sale, or providing access to third parties in any manner. Violation of this policy will result in immediate and permanent account termination, revocation of all licenses, and aggressive legal action including claims for damages, injunctive relief, and recovery of all legal fees.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">1. Definitions</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><span className="font-medium text-foreground">&quot;Content&quot;</span> refers to all templates, designs, components, source code, assets, and any other materials available on HomeDream.</li>
            <li><span className="font-medium text-foreground">&quot;Licensee&quot;</span> refers to the individual or entity that has downloaded or accessed the Content through a valid subscription or free access.</li>
            <li><span className="font-medium text-foreground">&quot;End Product&quot;</span> refers to a final product built using the Content for your own use or for a client.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Permitted Use (What You CAN Do)</h2>
          <p className="mt-2">As a licensed user of HomeDream, you are permitted to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Use the Content to build <span className="font-semibold text-foreground">your own commercial websites and applications</span></li>
            <li>Use the Content for <span className="font-semibold text-foreground">client projects</span> (freelance/agency work) where the End Product is a unique implementation</li>
            <li>Modify, customize, and adapt the Content for your End Products</li>
            <li>Use the Content in an unlimited number of your own projects</li>
            <li>Use the Content in commercial products that generate revenue (SaaS, e-commerce, etc.)</li>
          </ul>
        </section>

        <section className="rounded-xl border-2 border-red-300 bg-red-50/50 p-6 dark:border-red-900 dark:bg-red-950/20">
          <h2 className="text-base font-bold text-red-700 dark:text-red-300">3. Prohibited Use (What You CANNOT Do)</h2>
          <p className="mt-2 font-semibold text-red-800 dark:text-red-200">The following actions are strictly prohibited and will result in legal action:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-red-700 dark:text-red-300">
            <li>
              <span className="font-bold">RESALE</span> &mdash; Selling the Content (modified or unmodified) as templates, themes, UI kits, or any other product on any marketplace, website, or platform
            </li>
            <li>
              <span className="font-bold">REDISTRIBUTION</span> &mdash; Sharing, distributing, or making the Content available to others, whether for free or for a fee, through any channel
            </li>
            <li>
              <span className="font-bold">SUBLICENSING</span> &mdash; Granting others the right to use the Content or creating derivative licenses
            </li>
            <li>
              <span className="font-bold">PUBLIC REPOSITORIES</span> &mdash; Uploading the Content (source code, assets, or any portion thereof) to GitHub, GitLab, or any public or shared repository
            </li>
            <li>
              <span className="font-bold">FILE SHARING</span> &mdash; Uploading the Content to file-sharing services, torrent sites, or cloud storage with shared access
            </li>
            <li>
              <span className="font-bold">BUNDLING FOR SALE</span> &mdash; Including the Content as part of another product, toolkit, or package intended for distribution or sale
            </li>
            <li>
              <span className="font-bold">CLAIMING OWNERSHIP</span> &mdash; Representing the Content or substantial portions of it as your own original work for the purpose of resale or redistribution
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Intellectual Property</h2>
          <p className="mt-2">
            All Content remains the exclusive intellectual property of HomeDream and its creators. Purchasing a subscription or downloading Content grants you a <span className="font-semibold text-foreground">limited, non-exclusive, non-transferable license</span> to use the Content as described in Section 2. No ownership rights are transferred.
          </p>
        </section>

        <section className="rounded-xl border-2 border-red-300 bg-red-50/50 p-6 dark:border-red-900 dark:bg-red-950/20">
          <h2 className="text-base font-bold text-red-700 dark:text-red-300">5. Enforcement &amp; Penalties</h2>
          <p className="mt-2 text-red-800 dark:text-red-200">
            HomeDream actively monitors for unauthorized use of its Content. If you are found in violation of this Agreement:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-red-700 dark:text-red-300">
            <li><span className="font-bold">Immediate account termination</span> and revocation of all licenses</li>
            <li><span className="font-bold">Legal action</span> for copyright infringement under applicable laws (including DMCA, Korean Copyright Act, and international copyright treaties)</li>
            <li><span className="font-bold">Claim for damages</span> including actual damages, statutory damages, lost profits, and consequential damages</li>
            <li><span className="font-bold">Injunctive relief</span> to immediately cease all unauthorized use</li>
            <li><span className="font-bold">Recovery of all legal fees</span> including attorney&apos;s fees, court costs, and investigation costs</li>
          </ul>
          <p className="mt-4 font-bold text-red-900 dark:text-red-100">
            We pursue every case of resale or redistribution to the fullest extent of the law, without exception.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Reporting Violations</h2>
          <p className="mt-2">
            If you discover any unauthorized distribution or resale of HomeDream Content, please report it immediately to <span className="font-medium text-foreground">support@homedream.dev</span>. All reports are investigated and acted upon promptly.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">7. Contact</h2>
          <p className="mt-2">
            For licensing inquiries, bulk licenses, or questions about permitted use, please contact us at <span className="font-medium text-foreground">support@homedream.dev</span>
          </p>
        </section>
      </div>
    </div>
  );
}
