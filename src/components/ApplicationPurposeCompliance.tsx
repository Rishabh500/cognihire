import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, UserCheck, CheckCircle2, FileCheck2, Globe, HeartHandshake } from 'lucide-react';

export const ApplicationPurposeCompliance: React.FC = () => {
  return (
    <section
      id="application-purpose"
      className="py-16 md:py-24 bg-white border-b border-border relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mist border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-3 shadow-subtle">
            <ShieldCheck className="w-4 h-4 text-forest" />
            <span>Application Purpose & Compliance Policy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-deep tracking-tight">
            Application Purpose & Responsible Use Governance
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
            CogniHire is built strictly for professional recruitment screening, resume evaluation, and consensual candidate interviews. Review our core application purpose and mandatory ethical usage standards below.
          </p>
        </div>

        {/* 3 Main Compliance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Application Purpose */}
          <div className="p-6 sm:p-7 rounded-3xl bg-mist border border-border flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-forest shadow-xs">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest-deep">
                1. Application Purpose & Authorized Scope
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                <strong>CogniHire</strong> is an enterprise software platform designed exclusively for recruitment agencies, corporate talent acquisition teams, and staffing professionals.
              </p>
              <ul className="space-y-2 text-xs text-ink-muted pt-2 border-t border-border/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span><strong>Resume Matching:</strong> Semantic parsing of candidate CVs against employer job requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span><strong>Google API Integration:</strong> Google Sign-In and Google Calendar APIs are used strictly to authenticate recruiters and coordinate candidate interview schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span><strong>Assistive Scoring:</strong> Delivers objective candidate scorecards to human recruiters; no automated rejections.</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-forest bg-white p-2.5 rounded-xl border border-border/80">
              Authorized Use: Professional B2B Talent Acquisition Only
            </div>
          </div>

          {/* Card 2: CRITICAL - Strict Prohibition of AI NCII */}
          <div className="p-6 sm:p-7 rounded-3xl bg-forest-dark text-white border-2 border-mint/40 shadow-xl flex flex-col justify-between space-y-4 relative">
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                Zero Tolerance Policy
              </span>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-forest-surface border border-forest-border flex items-center justify-center text-mint shadow-xs">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                2. Prohibition of AI Non-Consensual Intimate Imagery (NCII)
              </h3>
              <p className="text-xs sm:text-sm text-sage-light leading-relaxed">
                CogniHire and all associated Google API integrations strictly prohibit the generation, processing, hosting, distribution, or facilitation of <strong>Non-Consensual Intimate Imagery (NCII)</strong>, synthetic sexually explicit media, deepfakes, or unauthorized biometric impersonation.
              </p>
              
              <div className="p-3.5 rounded-2xl bg-white/5 border border-forest-border space-y-2 text-xs text-sage-light">
                <div className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>No Image or Media Generation:</strong> CogniHire does not provide, integrate, or facilitate tools for creating, editing, or generating intimate, personal, or synthetic sexual imagery.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Google API Safeguards:</strong> Google APIs and user credentials are restricted solely to identity verification and interview calendaring, and are never utilized for media synthesis or deepfake creation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Immediate Termination & Reporting:</strong> Any violation of this policy results in immediate, permanent account termination and referral to law enforcement authorities.</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-mint bg-forest-surface p-2.5 rounded-xl border border-forest-border">
              Strict Policy: Anti-NCII & Anti-Abuse Compliant
            </div>
          </div>

          {/* Card 3: Consensual AI Voice Screening */}
          <div className="p-6 sm:p-7 rounded-3xl bg-mist border border-border flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-forest shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest-deep">
                3. Consensual Voice Screening & Candidate Rights
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                All AI telephone screening interviews are conducted with upfront, transparent candidate disclosure and explicit consent prior to call commencement.
              </p>
              <ul className="space-y-2 text-xs text-ink-muted pt-2 border-t border-border/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span><strong>Pre-Call Disclosure:</strong> Candidates receive clear notice that the interview is conducted by an AI interviewer on behalf of the hiring employer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span><strong>Strict Professional Context:</strong> Voice prompts are limited strictly to role qualifications, past project experience, and schedule availability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span><strong>No Synthetic Voice Cloning:</strong> The application does not clone candidate voices or create synthetic likenesses.</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-forest bg-white p-2.5 rounded-xl border border-border/80">
              Candidate Consent: Upfront Notification & Universal Opt-Out
            </div>
          </div>
        </div>

        {/* Google API & Trust Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted shadow-subtle">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-forest shrink-0" />
            <span>
              <strong>Google API Limited Use Certified:</strong> CogniHire adheres to the Google API Services User Data Policy and does not use Google user data to train generalized AI/ML models.
            </span>
          </div>
          <a
            href="/privacy"
            className="text-forest font-bold hover:underline whitespace-nowrap inline-flex items-center gap-1"
          >
            <span>Read full Privacy & Google API Policy</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
