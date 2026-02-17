export default function DmcaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">DMCA &amp; Copyright Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-base font-semibold text-foreground">1. Overview</h2>
          <p className="mt-2">
            HomeDream respects the intellectual property rights of others and expects its users to do the same. We comply with the Digital Millennium Copyright Act (DMCA), the Korean Copyright Act, and other applicable intellectual property laws. We will respond promptly to notices of alleged copyright infringement that comply with applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Our Intellectual Property</h2>
          <p className="mt-2">
            All templates, source code, designs, and other content available on HomeDream are original works or properly licensed materials. Any unauthorized reproduction, distribution, or resale of our Content constitutes copyright infringement and will be pursued to the fullest extent of the law.
          </p>
        </section>

        <section className="rounded-xl border-2 border-red-300 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
          <h2 className="text-base font-bold text-red-700 dark:text-red-300">3. Reporting Unauthorized Use of Our Content</h2>
          <p className="mt-2 text-red-800 dark:text-red-200">
            If you discover HomeDream templates or source code being resold, redistributed, or shared on any website, marketplace, repository, or file-sharing service, please report it immediately. We aggressively pursue all instances of unauthorized distribution.
          </p>
          <p className="mt-2 text-red-700 dark:text-red-300">
            Report to: <span className="font-bold">support@homedream.dev</span>
          </p>
          <p className="mt-2 text-red-700 dark:text-red-300">
            Please include: the URL where the infringement was found, screenshots as evidence, and the specific HomeDream template(s) involved.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Filing a DMCA Takedown Notice</h2>
          <p className="mt-2">
            If you believe that your copyrighted work has been used on HomeDream in a way that constitutes copyright infringement, please provide our Designated Agent with the following information:
          </p>
          <ul className="mt-3 list-decimal space-y-2 pl-5">
            <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
            <li>A description of the copyrighted work that you claim has been infringed.</li>
            <li>A description of the material that you claim is infringing, with sufficient detail to locate it on our Service (including URL).</li>
            <li>Your contact information: name, address, telephone number, and email address.</li>
            <li>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement, made under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on behalf of the owner.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. Designated Agent</h2>
          <p className="mt-2">
            DMCA notices should be sent to our Designated Copyright Agent:
          </p>
          <div className="mt-3 rounded-lg border border-border bg-muted/50 p-4">
            <p className="font-medium text-foreground">HomeDream Copyright Agent</p>
            <p>Email: <span className="font-medium text-foreground">dmca@homedream.dev</span></p>
            <p>Subject Line: &quot;DMCA Takedown Notice&quot;</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Counter-Notification</h2>
          <p className="mt-2">
            If you believe that your content was removed by mistake or misidentification, you may submit a counter-notification containing:
          </p>
          <ul className="mt-2 list-decimal space-y-2 pl-5">
            <li>Your physical or electronic signature.</li>
            <li>Identification of the material that was removed and its location before removal.</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake or misidentification.</li>
            <li>Your name, address, telephone number, and a statement consenting to jurisdiction of the courts in the Republic of Korea.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">7. Repeat Infringer Policy</h2>
          <p className="mt-2">
            In accordance with the DMCA and applicable law, HomeDream maintains a policy of terminating accounts of users who are determined to be repeat infringers. We may, in our sole discretion, limit access to the Service or terminate the accounts of any users who infringe the intellectual property rights of others, whether or not there is any repeat infringement.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">8. Legal Action</h2>
          <p className="mt-2">
            HomeDream reserves the right to pursue legal action against any party that infringes our copyrights or the copyrights of our content creators. This includes seeking injunctive relief, actual damages, statutory damages, and recovery of attorney&apos;s fees.
          </p>
        </section>
      </div>
    </div>
  );
}
