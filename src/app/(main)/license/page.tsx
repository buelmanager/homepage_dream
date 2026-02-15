export default function LicensePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight">License Agreement</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 15, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">All Rights Reserved</h2>
          <p className="mt-2">
            All templates, designs, components, code snippets, and any other content available on HomeDream (&quot;the Content&quot;) are the intellectual property of HomeDream and their respective creators. <span className="font-semibold text-foreground">No part of the Content may be copied, reproduced, distributed, licensed, sold, or used for any purpose without prior written permission from HomeDream.</span>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Strictly Prohibited</h2>
          <p className="mt-2">The following actions are strictly prohibited:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-foreground">Copying</span> - Reproducing the Content in whole or in part
            </li>
            <li>
              <span className="font-medium text-foreground">Redistribution</span> - Sharing, uploading, or distributing the Content to third parties
            </li>
            <li>
              <span className="font-medium text-foreground">Reselling</span> - Selling or offering the Content as your own product
            </li>
            <li>
              <span className="font-medium text-foreground">Derivative Works</span> - Creating modified or adapted versions of the Content
            </li>
            <li>
              <span className="font-medium text-foreground">Reverse Engineering</span> - Analyzing or decompiling the Content to extract source code
            </li>
            <li>
              <span className="font-medium text-foreground">Claiming Ownership</span> - Representing the Content as your own original work
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Authorized Use</h2>
          <p className="mt-2">
            You may use the Content <span className="font-semibold text-foreground">only</span> under the following conditions:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>You have purchased a valid license from HomeDream</li>
            <li>You use the Content in accordance with the license terms specific to your purchase</li>
            <li>You provide appropriate attribution as specified in your license agreement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Violation & Enforcement</h2>
          <p className="mt-2">
            <span className="font-semibold text-foreground">Any unauthorized use is a violation of this Agreement and applicable copyright and trademark laws.</span> Violators may be subject to civil and criminal penalties, including but not limited to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Immediate termination of access</li>
            <li>Legal action for damages</li>
            <li>Injunctions to prevent further use</li>
            <li>Attorney&apos;s fees and court costs</li>
          </ul>
          <p className="mt-4">
            We actively monitor for copyright infringement and will take swift legal action against any party violating these terms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Reporting Violations</h2>
          <p className="mt-2">
            If you believe your intellectual property rights have been violated, please contact us immediately at <span className="font-medium text-foreground">support@homedream.dev</span> with detailed information about the alleged infringement.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Contact Us</h2>
          <p className="mt-2">
            For licensing inquiries, please contact us at <span className="font-medium text-foreground">support@homedream.dev</span>
          </p>
        </section>
      </div>
    </div>
  );
}
