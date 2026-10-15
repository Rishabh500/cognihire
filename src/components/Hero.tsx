import React from 'react';
import { ArrowRight, Calculator, ChevronRight, Play, ShieldCheck, Clock, Users } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToCalculator: () => void;
  onScrollToWorkflow: () => void;
  onScrollToVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onScrollToCalculator,
  onScrollToWorkflow,
  onScrollToVideo,
}) => {
  const processSteps = [
    { label: 'Job Description', icon: '01' },
    { label: 'Resume Matching', icon: '02' },
    { label: 'Candidate Engagement', icon: '03' },
    { label: 'AI Voice Screening', icon: '04' },
    { label: 'Recruiter Review', icon: '05' },
    { label: 'Shortlist', icon: '06', highlight: true },
  ];

  const valueStatements = [
    {
      title: 'Less repetitive screening work',
      desc: 'Free recruiters from manual resume filtering and endless follow-up phone calls.',
      icon: Clock,
    },
    {
      title: 'Structured candidate evaluations',
      desc: 'Objective, evidence-backed scoring rubrics paired with full voice interview transcripts.',
      icon: ShieldCheck,
    },
    {
      title: 'Higher capacity & massive savings',
      desc: 'Screen 1,000+ candidates without adding headcount or sacrificing candidate experience.',
      icon: Users,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-white bg-forest-grid">
      {/* Subtle geometric pattern ambient elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-mint/15 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

      {/* Decorative subtle corner geometry */}
      <div className="absolute top-16 right-8 hidden lg:block opacity-20 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="70" stroke="#102A24" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="90" cy="90" r="40" stroke="#102A24" strokeWidth="1" />
          <circle cx="90" cy="90" r="10" fill="#102A24" />
          <line x1="20" y1="90" x2="160" y2="90" stroke="#102A24" strokeWidth="1" />
          <line x1="90" y1="20" x2="90" y2="160" stroke="#102A24" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mist border border-border text-forest-deep text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
          <span>AI Recruitment Automation & Candidate Intelligence</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-forest-deep max-w-4xl mx-auto leading-[1.12]">
          Spend Less Time Screening.{' '}
          <span className="text-forest underline decoration-mint decoration-4 underline-offset-6">
            Focus on Better Shortlists.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
          CogniHire helps recruitment teams match resumes to job requirements, engage candidates,
          automate initial voice screening, and deliver structured evaluations—all in one
          streamlined workflow.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-forest hover:bg-forest-hover active:bg-forest-dark rounded-xl shadow-elevated transition-all duration-150 transform hover:-translate-y-0.5 group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-mint group-hover:translate-x-0.5 transition-transform" />
          </button>

          {onScrollToVideo && (
            <button
              onClick={onScrollToVideo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-forest-deep bg-white hover:bg-mist border border-border hover:border-forest/40 rounded-xl shadow-subtle transition-all duration-150 transform hover:-translate-y-0.5 group"
            >
              <div className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>Watch Demo Video</span>
            </button>
          )}

          <button
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-forest-deep bg-mist hover:bg-mist-light border border-border hover:border-forest/30 rounded-xl shadow-subtle transition-all duration-150 transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4 text-sage-dark" />
            <span>Calculate Potential Savings</span>
          </button>
        </div>

        {/* Honest Guardrail Note */}
        <p className="mt-4 text-xs text-ink-muted max-w-xl mx-auto">
          CogniHire does not claim guaranteed hiring outcomes. It provides consistent screening data so recruiters can make informed, human-verified shortlist decisions.
        </p>

        {/* Compact Process Visualization */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between mb-4 max-w-xl mx-auto px-2">
            <span className="text-xs font-bold tracking-wider uppercase text-forest-deep flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-forest" />
              End-to-End Pipeline
            </span>
            <button
              onClick={onScrollToWorkflow}
              className="text-xs font-semibold text-forest hover:text-forest-deep inline-flex items-center gap-1 group transition-colors"
            >
              <span>Explore interactive workflow</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Fully visible responsive process cards with high-contrast number badges */}
          <div className="w-full overflow-x-auto pb-3 pt-1 px-2 no-scrollbar">
            <div className="inline-flex sm:flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 min-w-full">
              {processSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all shrink-0 ${
                      step.highlight
                        ? 'bg-forest text-white border-forest shadow-md'
                        : 'bg-white text-forest-deep border-border shadow-subtle hover:border-forest/30'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md shrink-0 ${
                        step.highlight
                          ? 'bg-mint text-forest-dark'
                          : 'bg-forest/10 text-forest border border-forest/20'
                      }`}
                    >
                      {step.icon}
                    </span>
                    <span className="whitespace-nowrap font-medium">{step.label}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-sage shrink-0 hidden sm:inline" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Core Value Statements */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          {valueStatements.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-border shadow-subtle hover:border-forest/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-mist flex items-center justify-center text-forest mb-4 border border-border">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-forest-deep mb-2">{val.title}</h2>
                <p className="text-sm text-ink-muted leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
