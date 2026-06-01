import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/_components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact - Screen Time Hero",
  description:
    "Contact Screen Time Hero support for help with Family Sharing, subscriptions, account access, and app questions.",
};

const SUPPORT_EMAIL = "support@screentimehero.com";
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Screen Time Hero" width={32} height={32} />
            <span className="text-xl font-bold text-[#1C1F26]">Screen Time Hero</span>
          </Link>
          <Link href="/support" className="text-sm text-[#3A7BFA] hover:underline">
            Support Center
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="rounded-3xl bg-[#F4F5F7] p-8 sm:p-10 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#3A7BFA] mb-3">Contact</p>
          <h1 className="text-4xl font-bold text-[#1C1F26] mb-4">Contact Screen Time Hero</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need help with setup, Family Sharing, account access, billing, or App Store review support? Email us and we&apos;ll help.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <section className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">Email support</h2>
            <p className="text-gray-600 mb-4">
              For account, subscription, Family Sharing, or technical support, contact us at:
            </p>
            <a
              href={SUPPORT_MAILTO}
              className="inline-flex items-center rounded-xl bg-[#3A7BFA] px-5 py-3 font-semibold text-white hover:bg-blue-600 transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Include your device type, iOS version, and the email address used for the parent account when relevant.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">Helpful links</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/support" className="text-[#3A7BFA] hover:underline">
                  Support and FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#3A7BFA] hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#3A7BFA] hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <section className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">For App Store reviewers</h2>
          <p className="text-gray-600 leading-relaxed">
            If you are reviewing Screen Time Hero and need help accessing a demo flow, contact us at{" "}
            <a href={SUPPORT_MAILTO} className="text-[#3A7BFA] hover:underline">
              {SUPPORT_EMAIL}
            </a>
            . We can help clarify the parent/child setup, Family Sharing requirements, and the kid-pitches-the-deal flow.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
