import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Mail, CheckCircle2, UserCheck, Gamepad2, ArrowLeft, RefreshCw, Lock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us, Editorial Standards & Trust Center | Roblox Wiki Hub',
  description: 'Publisher details for Roblox Wiki Hub. Meet the site owner lianlele168, see how we check codes against public sources, and review our COPPA child safety pledge.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 selection:bg-indigo-500 selection:text-white pb-20">
      {/* Top Bar */}
      <header className="border-b border-slate-800/80 bg-[#070a14]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>Back to Portal Home</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED PUBLISHER ENTITY</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Hero Section */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-bold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>EDITORIAL POLICY & TRUST CENTER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            About Roblox Wiki Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Roblox Wiki Hub is an independent player-first knowledge network dedicated to publishing 100% verified redeem codes, mathematically accurate probability calculators, and comprehensive meta strategy guides for top Roblox experiences.
          </p>
        </section>

        {/* Lead Webmaster & Entity Card */}
        <section className="rounded-2xl border border-slate-800 bg-[#0b0f19] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-indigo-500/20">
                LL
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">lianlele168</h2>
                  <span className="text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                    Lead Webmaster & Data Architect
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Founder & Senior Editor of Roblox Wiki Hub • Active Community Analyst
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:lianlele168@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>lianlele168@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 space-y-1">
              <p className="text-xs font-bold text-slate-400">Direct Inquiries</p>
              <p className="text-sm font-semibold text-white">lianlele168@gmail.com</p>
              <p className="text-[11px] text-slate-500">48h verified response SLA</p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 space-y-1">
              <p className="text-xs font-bold text-slate-400">Editorial Scope</p>
              <p className="text-sm font-semibold text-white">30+ Roblox Game Guides</p>
              <p className="text-[11px] text-slate-500">Codes, tier lists, calculators</p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 space-y-1">
              <p className="text-xs font-bold text-slate-400">Child Safety</p>
              <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% COPPA Compliant
              </p>
              <p className="text-[11px] text-slate-500">Zero data collection under 13</p>
            </div>
          </div>
        </section>

        {/* Verification Methodology */}
        <section id="methodology" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <span>Editorial Testing & Fact-Checking Methodology</span>
            </h2>
            <p className="text-sm text-slate-400">
              How our editorial team ensures every code, stat, and formula published across our network is 100% accurate and trustworthy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0b0f19] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">1. Live Server Code Testing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not republish codes from unverified aggregators. Every code we list is cross-checked against the developer's official channels and at least two independent public sources. Codes that stop working are moved to the expired list rather than quietly deleted.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0b0f19] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">2. Mathematical Simulator Calibration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our custom reroll, pity, and fuel calculators are derived directly from verified game patch notes, data-table dumps, and thousands of match test simulations. Formulas run 100% client-side in your web browser with zero server roundtrips.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0b0f19] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">3. Patch-Bound Tier Lists</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rankings are never static. Whenever a game developer pushes a balance update or weapon nerf, our analysts revise unit placements, add patch changelog notes, and display the exact verified patch version in the author stamp.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy & Safety Pledge */}
        <section className="rounded-2xl border border-slate-800 bg-[#0b0f19] p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Lock className="w-6 h-6 text-amber-400" />
              <span>Player Trust & COPPA Compliance Pledge</span>
            </h2>
            <p className="text-sm text-slate-400">
              Our safety principles for Roblox players, parents, and community members:
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              • <strong className="text-white">Zero Account Credentials</strong>: We will NEVER ask you for your Roblox username, password, 2FA code, cookie token, or payment credentials. All calculators are free and anonymous.
            </p>
            <p>
              • <strong className="text-white">COPPA Child Privacy Compliance</strong>: We recognize Roblox is loved by younger players. We strictly comply with the Children&apos;s Online Privacy Protection Act. We do not knowingly harvest or profile any personal identification from players under 13.
            </p>
            <p>
              • <strong className="text-white">Fair Use & Intellectual Property</strong>: Roblox is a registered trademark of Roblox Corporation. All game titles, character names, and original assets belong to their respective developers. Roblox Wiki Hub is an independent commentary and strategy network operating under Fair Use.
            </p>
          </div>
        </section>

        {/* Community Feedback & Corrections */}
        <section className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-[#0b0f19] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg font-bold text-white">Found an Expired Code or Outdated Stat?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Help us keep the wiki network pristine for all players. If a developer recently pushed a ninja patch or a code expired ahead of schedule, send our editorial team an email directly.
            </p>
          </div>
          <a
            href="mailto:lianlele168@gmail.com?subject=[RobloxWikiHub%20Correction%20Submission]"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-3 transition-colors shadow-lg shadow-indigo-600/30"
          >
            <Mail className="w-4 h-4" />
            <span>Submit Correction (lianlele168@gmail.com)</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Roblox Wiki Hub. Lead Webmaster: lianlele168.</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-indigo-400 transition-colors">Portal Home</Link>
          <a href="mailto:lianlele168@gmail.com" className="hover:text-indigo-400 transition-colors">Contact (lianlele168@gmail.com)</a>
        </div>
      </footer>
    </div>
  );
}
