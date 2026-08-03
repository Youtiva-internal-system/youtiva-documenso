import {
  ArrowRightIcon,
  BookOpenIcon,
  CodeIcon,
  FileTextIcon,
  GithubIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

const GUIDE_CARDS = [
  {
    href: '/docs/users',
    title: 'User Guide',
    description: 'Send documents, build templates, and run signer workflows from the app.',
    icon: UserIcon,
    accent: 'from-[#FF9076]/20 to-[#E76A4E]/10 text-[#E76A4E]',
    cta: 'Start here',
  },
  {
    href: '/docs/developers',
    title: 'Developer Guide',
    description: 'Integrate Youtiva Sign with the REST API, webhooks, and embedded flows.',
    icon: CodeIcon,
    accent: 'from-[#A26EDB]/20 to-[#7F4ABB]/10 text-[#7F4ABB]',
    cta: 'Explore the API',
  },
  {
    href: '/docs/self-hosting',
    title: 'Self-Hosting',
    description: 'Deploy and operate your own signing stack with Docker, Kubernetes, or Railway.',
    icon: ServerIcon,
    accent: 'from-[#FFB224]/20 to-[#FF9076]/10 text-[#9A5F00]',
    cta: 'Deploy your stack',
  },
];

export const metadata: Metadata = {
  title: 'Youtiva Sign Docs',
  description:
    'Documentation for Youtiva Sign. Learn the product, integrate the API, and deploy the platform with confidence.',
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 px-6 py-10 shadow-xl shadow-[#14141C]/8 backdrop-blur md:px-10 md:py-14">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#FF9076] via-[#E76A4E] to-[#A26EDB]" />
        <div className="-top-24 -right-20 absolute h-56 w-56 rounded-full bg-[#A26EDB]/18 blur-3xl" />
        <div className="-bottom-16 left-0 absolute h-52 w-52 rounded-full bg-[#FF9076]/18 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#EDECE5] bg-[#FAFAF8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7F4ABB]">
              <SparklesIcon className="size-3.5 text-[#FF9076]" />
              Youtiva Sign Docs
            </div>

            <h1 className="max-w-3xl font-bold text-4xl tracking-[-0.04em] text-[#14141C] sm:text-5xl">
              The operating manual for your document workflow.
            </h1>

            <p className="mt-5 max-w-2xl text-[#5C5C74] text-lg leading-8">
              Learn the product surface, wire up the API, and self-host the stack with the same coral-and-purple system
              used across Youtiva.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs/users"
                className="inline-flex items-center gap-2 rounded-xl bg-[#14141C] px-5 py-3 font-medium text-[#FAFAF8] shadow-sm transition hover:bg-[#2A2A38]"
              >
                Explore the guides
                <ArrowRightIcon className="size-4" />
              </Link>
              <a
                href="https://github.com/documenso/documenso"
                className="inline-flex items-center gap-2 rounded-xl border border-[#EDECE5] bg-white/80 px-5 py-3 font-medium text-[#14141C] transition hover:border-[#FF9076]/40 hover:bg-[#FFF7F4]"
              >
                <GithubIcon className="size-4" />
                View source
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#EDECE5] bg-[#FAFAF8] p-5">
              <p className="font-semibold text-[#14141C]">What’s inside</p>
              <p className="mt-2 text-[#5C5C74] text-sm leading-6">
                Product usage, embedded signing, API flows, compliance, and deployment runbooks.
              </p>
            </div>
            <div className="rounded-2xl border border-[#EDECE5] bg-gradient-to-br from-[#FFF1EB] to-[#F6F1FB] p-5">
              <p className="font-semibold text-[#14141C]">Built for operators and developers</p>
              <p className="mt-2 text-[#5C5C74] text-sm leading-6">
                Move from onboarding to production integrations without switching between disconnected docs sets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {GUIDE_CARDS.map(({ href, title, description, icon: Icon, accent, cta }) => (
          <Link
            key={href}
            href={href}
            className="group overflow-hidden rounded-[1.5rem] border border-[#EDECE5] bg-white/80 p-6 shadow-lg shadow-[#14141C]/5 transition hover:-translate-y-0.5 hover:border-[#FF9076]/30 hover:shadow-xl hover:shadow-[#14141C]/8"
          >
            <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br p-3 ${accent}`}>
              <Icon className="size-6" />
            </div>
            <h2 className="font-semibold text-[#14141C] text-xl">{title}</h2>
            <p className="mt-3 text-[#5C5C74] leading-7">{description}</p>
            <div className="mt-6 inline-flex items-center gap-2 font-medium text-[#7F4ABB]">
              {cta}
              <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-[#EDECE5] bg-white/80 p-6 shadow-lg shadow-[#14141C]/5">
          <h3 className="flex items-center gap-2 font-semibold text-[#14141C] text-lg">
            <BookOpenIcon className="size-5 text-[#E76A4E]" />
            Quick Start Paths
          </h3>
          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-[#F3E4DD] bg-[#FFF7F4] p-4">
              <p className="font-medium text-[#14141C]">Send your first document</p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <Link href="/docs/users/getting-started/create-account" className="rounded-full bg-white px-3 py-1 text-[#E76A4E]">
                  Create an account
                </Link>
                <Link
                  href="/docs/users/getting-started/send-first-document"
                  className="rounded-full bg-white px-3 py-1 text-[#E76A4E]"
                >
                  Upload and send
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DDF7] bg-[#F6F1FB] p-4">
              <p className="font-medium text-[#14141C]">Integrate the API</p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <Link
                  href="/docs/developers/getting-started/authentication"
                  className="rounded-full bg-white px-3 py-1 text-[#7F4ABB]"
                >
                  Authentication
                </Link>
                <Link
                  href="/docs/developers/getting-started/first-api-call"
                  className="rounded-full bg-white px-3 py-1 text-[#7F4ABB]"
                >
                  First API call
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[#F6E7C2] bg-[#FFF7E8] p-4">
              <p className="font-medium text-[#14141C]">Deploy self-hosted</p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <Link
                  href="/docs/self-hosting/getting-started/requirements"
                  className="rounded-full bg-white px-3 py-1 text-[#9A5F00]"
                >
                  Requirements
                </Link>
                <Link
                  href="/docs/self-hosting/getting-started/quick-start"
                  className="rounded-full bg-white px-3 py-1 text-[#9A5F00]"
                >
                  Quick start
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#EDECE5] bg-[#14141C] p-6 text-[#EDEDF2] shadow-xl shadow-[#14141C]/15">
          <h3 className="flex items-center gap-2 font-semibold text-lg">
            <ShieldCheckIcon className="size-5 text-[#FF9076]" />
            Core Areas
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/docs/concepts/document-lifecycle" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
              <p className="font-medium">Document Lifecycle</p>
              <p className="mt-2 text-[#A8A8B8] text-sm">Track every state from draft to completion.</p>
            </Link>
            <Link href="/docs/concepts/recipient-roles" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
              <p className="font-medium">Recipient Roles</p>
              <p className="mt-2 text-[#A8A8B8] text-sm">Model signers, approvers, and CC participants cleanly.</p>
            </Link>
            <Link href="/docs/compliance" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
              <p className="font-medium">Compliance & Legal</p>
              <p className="mt-2 text-[#A8A8B8] text-sm">ESIGN, UETA, eIDAS, GDPR, and trust posture guidance.</p>
            </Link>
            <Link href="/docs/policies" className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8">
              <p className="font-medium">Policies & Licensing</p>
              <p className="mt-2 text-[#A8A8B8] text-sm">Licensing, support, privacy, and operational policy docs.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-[#EDECE5] bg-gradient-to-r from-[#FFF1EB] via-white to-[#F6F1FB] p-6 shadow-lg shadow-[#14141C]/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold text-[#14141C] text-xl">Keep shipping with the same source tree</h3>
            <p className="mt-2 max-w-2xl text-[#5C5C74] leading-7">
              Youtiva Sign is still backed by the Documenso codebase, so the source link stays here for engineering
              traceability while the product surface reflects the Youtiva brand system.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/documenso/documenso"
              className="inline-flex items-center gap-2 rounded-xl border border-[#EDECE5] bg-white px-4 py-2.5 font-medium text-[#14141C] transition hover:border-[#A26EDB]/30"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <Link
              href="/docs/developers"
              className="inline-flex items-center gap-2 rounded-xl bg-[#7F4ABB] px-4 py-2.5 font-medium text-white transition hover:bg-[#6A3BA7]"
            >
              API and embeds
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
