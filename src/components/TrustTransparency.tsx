import React from 'react';
import {
  ShieldCheck,
  Eye,
  FileKey,
  Scale,
  UserCheck2,
  Trash2,
  CheckCircle2,
} from 'lucide-react';

export const TrustTransparency: React.FC = () => {
  const principles = [
    {
      title: 'Full AI Disclosure',
      desc: 'Candidates are explicitly informed prior to engaging in voice screening that they are interacting with an AI conversational system.',
      icon: Eye,
    },
    {
      title: 'Affirmative Consent Verification',
      desc: 'Screening calls only initiate after explicit, verifiable candidate opt-in for audio recording, transcription, and processing.',
      icon: FileKey,
    },
    {
      title: 'Job-Relevant Evaluation Only',
      desc: 'Scoring models are bound to recruiter-defined rubrics and job competencies. Demographic or extraneous data is strictly omitted.',
      icon: Scale,
    },
    {
      title: 'Evidence-Backed With Uncertainty Flags',
      desc: 'Every qualification claim is paired with direct citations. Where evidence is ambiguous or missing, the system explicitly flags uncertainty.',
      icon: ShieldCheck,
    },
    {
      title: 'Human Recruiter Responsibility',
      desc: 'AI provides structured intelligence, never unilateral decisions. The human recruiter retains total authority for shortlisting or rejection.',
      icon: UserCheck2,
    },
    {
      title: 'Data Retention & Deletion Controls',
      desc: 'Recruitment teams configure automated retention horizons and candidate right-to-be-forgotten deletion workflows.',
      icon: Trash2,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-mist border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical Standards & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            Structured Screening. Human Decisions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            Responsible recruitment automation begins with candidate dignity, transparent disclosures,
            and uncompromising recruiter accountability.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl border border-border shadow-subtle hover:border-forest/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-mist text-forest flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-forest-deep mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] text-sage-dark font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                  <span>Configured by recruitment policy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
