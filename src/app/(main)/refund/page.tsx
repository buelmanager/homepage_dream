export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">Refund Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <section className="rounded-xl border border-amber-300 bg-amber-50/50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
          <h2 className="text-base font-bold text-amber-800 dark:text-amber-200">Important Notice</h2>
          <p className="mt-2 text-amber-700 dark:text-amber-300">
            HomeDream provides digital products (website template source code). Due to the nature of digital goods, all sales are generally considered final once the content has been accessed or downloaded. Please review the full policy below.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">1. Subscription Cancellation</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>You may cancel your PRO subscription at any time through your account settings or by contacting support.</li>
            <li>Cancellation takes effect at the end of the current billing period.</li>
            <li>You will retain access to PRO features until the end of the paid period.</li>
            <li><span className="font-semibold text-foreground">No partial refunds</span> are provided for unused portions of a billing period.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Refund Eligibility</h2>
          <p className="mt-2">Refunds may be granted in the following circumstances:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li><span className="font-medium text-foreground">Duplicate Charges:</span> If you were charged multiple times for the same subscription period due to a technical error.</li>
            <li><span className="font-medium text-foreground">Service Unavailability:</span> If the Service was substantially unavailable for an extended period during your subscription.</li>
            <li><span className="font-medium text-foreground">Technical Defects:</span> If downloaded Content is materially defective and we are unable to provide a working replacement within 7 business days.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">3. Non-Refundable Situations</h2>
          <p className="mt-2">Refunds will <span className="font-semibold text-foreground">NOT</span> be issued for:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Change of mind after downloading or accessing Content</li>
            <li>Failure to cancel a subscription before the renewal date</li>
            <li>Incompatibility with your specific hosting environment or technology stack (templates are provided as standard HTML/CSS)</li>
            <li>Dissatisfaction with design aesthetics or subjective preferences</li>
            <li>Accounts terminated due to violation of our Terms of Service or License Agreement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. EU/UK Consumers</h2>
          <p className="mt-2">
            Under EU/UK consumer protection laws, you have a 14-day right of withdrawal for digital purchases. However, by initiating a download, you acknowledge and consent that:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>The digital content is delivered immediately upon download.</li>
            <li>You expressly consent to waive your right of withdrawal once the download begins.</li>
            <li>This is in accordance with Article 16(m) of the EU Consumer Rights Directive.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. How to Request a Refund</h2>
          <p className="mt-2">To request a refund, please contact us within <span className="font-semibold text-foreground">7 days</span> of the charge with:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Your account email address</li>
            <li>The date and amount of the charge</li>
            <li>A detailed description of the issue</li>
          </ul>
          <p className="mt-2">
            Send your request to <span className="font-medium text-foreground">support@homedream.dev</span>. We will review and respond within 5 business days.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Refund Processing</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Approved refunds will be processed to the original payment method.</li>
            <li>Processing time: 5&ndash;10 business days depending on your financial institution.</li>
            <li>Upon refund, your subscription will be cancelled and access to PRO Content will be revoked.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">7. Chargebacks</h2>
          <p className="mt-2">
            We strongly encourage you to contact us directly before initiating a chargeback with your bank or payment provider. Unauthorized chargebacks may result in account termination and may be disputed. We maintain detailed records of all transactions and content access.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">8. Contact</h2>
          <p className="mt-2">
            For refund inquiries, email us at <span className="font-medium text-foreground">support@homedream.dev</span>
          </p>
        </section>
      </div>
    </div>
  );
}
