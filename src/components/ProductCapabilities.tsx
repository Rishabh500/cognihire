import React from 'react';
import {
  FileSearch,
  MessageSquareShare,
  Mic2,
  CheckCircle,
  FileCheck2,
  Sparkles,
} from 'lucide-react';

export const ProductCapabilities: React.FC = () => {
  const capabilities = [
    {
      id: 'cap-1',
      title: 'Evidence-Backed Resume Matching',
      tagline: 'Semantic qualification analysis beyond keywords',
      description:
        'Compare unstructured resumes with precise, job-specific requirements. Extracts verified competencies, flags unverified claims, and calculates an explainable match score backed by specific resume line citations.',
      bullets: [
        'Semantic parsing of career chronologies and seniority',
        'Direct citation links from score to candidate experience',
        'Transparent identification of missing or unverified criteria',
      ],
      icon: FileSearch,
      badge: 'Resume Intelligence',
    },
    {
      id: 'cap-2',
      title: 'Candidate Engagement Automation',
      tagline: 'Multi-touch candidate follow-ups without manual overhead',
      description:
        'Deliver personalized invitations across configured Email and WhatsApp channels. Tracks real-time delivery and response status, automated polite reminders, and self-serve screening setup.',
      bullets: [
        'Configured Email & WhatsApp communication channels',
        'Transparent 2-touch polite reminder cadences',
        'Self-service screening time selection or on-demand start',
      ],
      icon: MessageSquareShare,
      badge: 'Engagement & Logistics',
    },
    {
      id: 'cap-3',
      title: 'Structured AI Voice Screening',
      tagline: 'Natural conversational screening with full consent',
      description:
        'Conduct consistent, 10–15 minute first-round conversational audio interviews. Guided by dynamic, role-relevant rubrics with candidate disclosure and affirmative consent recorded prior to every session.',
      bullets: [
        'Conversational, context-aware screening dialogues',
        'Verifiable consent & audio disclosure audit trails',
        'Graceful exception handling with live human escalation option',
      ],
      icon: Mic2,
      badge: 'Voice AI Telephony',
    },
    {
      id: 'cap-4',
      title: 'Recruiter-Ready Shortlists',
      tagline: 'Structured candidate dossiers built for swift decisions',
      description:
        'Organize screening findings into clean, client-ready dossiers. Displays separate resume match and interview evaluation scores, audio quote highlights, and recruiter collaborative review controls.',
      bullets: [
        'Strict separation of resume score and interview evaluation',
        'Audio quote snippets and full searchable transcript',
        'Shortlist, Follow-Up, Human Interview, or Reject outcomes',
      ],
      icon: FileCheck2,
      badge: 'Evaluation Dossier',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            Designed for Structured, Evidence-Backed Hiring.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            Four interconnected functional modules that turn incoming candidate flow into
            standardized, verifiable shortlists.
          </p>
        </div>

        {/* 4 Feature Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="bg-white rounded-3xl p-8 border border-border shadow-subtle hover:border-forest/30 hover:shadow-elevated transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-mist text-forest group-hover:bg-forest group-hover:text-mint flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sage-dark bg-mist px-3 py-1 rounded-full border border-border">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-forest-deep mb-1 group-hover:text-forest transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-semibold text-sage-dark mb-3">
                    {cap.tagline}
                  </p>

                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border space-y-2.5">
                  {cap.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink-primary">
                      <CheckCircle className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
