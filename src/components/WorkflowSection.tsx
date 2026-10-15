import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Send,
  Mic,
  UserCheck,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  AlertTriangle,
  GitBranch,
  X,
  FileText,
  Sliders,
  Check,
} from 'lucide-react';

interface SimpleStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  summary: string;
  keyPoints: string[];
  aiRole: string;
  recruiterRole: string;
  example: string;
}

const FOUR_STEPS: SimpleStep[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    title: 'Match Resumes',
    subtitle: 'From Job Description to Scored Profiles',
    badge: 'Resume Intelligence',
    icon: Sparkles,
    summary: 'Recruiter adds job requirements. CogniHire extracts candidate qualifications and scores semantic alignment out of 10 with verified line citations.',
    keyPoints: [
      'Parse PDF & Word resumes automatically',
      'Explainable 0–10 resume match score',
      'Pinpoints missing or unverified criteria'
    ],
    aiRole: 'Extracts skills, measures semantic alignment against job rubric, and flags missing requirements.',
    recruiterRole: 'Sets mandatory skills, scoring weights, and minimum qualification thresholds.',
    example: 'Alex Morgan matched 8.4/10 for Senior Frontend: verified React & TypeScript, unverified GraphQL production scale.'
  },
  {
    id: 'step-2',
    stepNumber: '02',
    title: 'Engage Candidates',
    subtitle: 'Automated Multi-Channel Outreach',
    badge: 'Automated Outreach',
    icon: Send,
    summary: 'Personalized invitations delivered via Email or WhatsApp. Candidates review transparent AI screening details and choose a convenient time slot.',
    keyPoints: [
      'WhatsApp & Email invitation delivery',
      'Candidate choices: Interested, Decline, or Human',
      'Self-service 1-click scheduling portal'
    ],
    aiRole: 'Dispatches personalized invitations, manages polite follow-up reminders, and syncs calendar slots.',
    recruiterRole: 'Customizes message tone, delivery channels, reminder frequency, and human contact routing.',
    example: 'Candidate received WhatsApp invitation, opted in, and booked an initial 12-minute screening for Thursday 4:00 PM.'
  },
  {
    id: 'step-3',
    stepNumber: '03',
    title: 'AI Voice Screening',
    subtitle: 'Consented Conversational Audio Calls',
    badge: 'Voice AI Telephony',
    icon: Mic,
    summary: 'A natural, conversational voice agent conducts a 10–15 min screening call with affirmative candidate consent, asking job-relevant questions with dynamic follow-ups.',
    keyPoints: [
      'Natural voice dialogue tailored to the job',
      'Explicit recording and transcription consent',
      'Graceful fallbacks for disconnects or reschedule'
    ],
    aiRole: 'Conducts audio dialogue, asks probing follow-ups for depth, and transcribes responses in real time.',
    recruiterRole: 'Configures screening rubric, interview questions, speech pace, and live human escalation triggers.',
    example: 'Completed 11m 42s interview covering system performance, debugging workflows, and architectural trade-offs.'
  },
  {
    id: 'step-4',
    stepNumber: '04',
    title: 'Recruiter Shortlist',
    subtitle: 'Independent Evidence & Human Final Call',
    badge: 'Human Oversight',
    icon: UserCheck,
    summary: 'Recruiters review side-by-side Resume and Interview scores, audio excerpts, and rubric summaries. Hiring decisions remain 100% in human recruiter hands.',
    keyPoints: [
      'Separate Resume (8.4) & Interview (7.8) scores',
      'Verbatim audio clips & question deep-dives',
      'One-click outcomes: Shortlist, Follow Up, or Reject'
    ],
    aiRole: 'Structures candidate evidence, highlights key interview quotes, and flags topics for round 2.',
    recruiterRole: 'Makes 100% of final shortlisting decisions. AI never auto-rejects candidates without recruiter review.',
    example: 'Recruiter verified technical quotes, added note on team leadership, and shortlisted candidate for Hiring Manager round.'
  }
];

export const WorkflowSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedStepModal, setSelectedStepModal] = useState<SimpleStep | null>(null);
  const [showBranches, setShowBranches] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= FOUR_STEPS.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handlePlayToggle = () => {
    if (activeStepIndex >= FOUR_STEPS.length - 1 && !isPlaying) {
      setActiveStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStepIndex(0);
  };

  return (
    <section id="workflow" className="py-20 md:py-28 bg-mist border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            One Clear Flow. From Resume to Shortlist.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            Four streamlined steps connecting resume matching, candidate outreach, voice screening,
            and evidence-backed recruiter decisions.
          </p>

          {/* Controls Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handlePlayToggle}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                isPlaying
                  ? 'bg-amber-100 text-amber-950 border border-amber-300'
                  : 'bg-forest text-white hover:bg-forest-hover'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause Demo</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-mint" />
                  <span>
                    {activeStepIndex > 0 && activeStepIndex < FOUR_STEPS.length - 1
                      ? 'Resume Walkthrough'
                      : 'Play Walkthrough'}
                  </span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-ink-muted hover:text-forest-deep bg-mist border border-border transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={() => setShowBranches(!showBranches)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-forest-deep bg-mist hover:bg-white border border-border transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5 text-sage" />
              <span>{showBranches ? 'Hide Branching & Exceptions' : 'View Branching & Exceptions'}</span>
            </button>
          </div>
        </div>

        {/* 4 Clean Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={step.id}
                onClick={() => {
                  setActiveStepIndex(idx);
                  setSelectedStepModal(step);
                }}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? 'bg-white border-forest shadow-elevated ring-2 ring-forest/20 -translate-y-1'
                    : 'bg-white border-border hover:border-forest/30 shadow-subtle'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-border text-forest">
                      Step {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-semibold text-sage-dark uppercase tracking-wider">
                      {step.badge}
                    </span>
                  </div>

                  {/* Step Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-forest text-mint shadow-sm'
                          : 'bg-white text-forest border border-border group-hover:bg-forest group-hover:text-mint'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-forest-deep text-lg leading-tight">
                        {step.title}
                      </h3>
                      <span className="text-[11px] text-sage-dark font-medium block">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-ink-muted leading-relaxed mb-4">
                    {step.summary}
                  </p>

                  {/* Key Points */}
                  <ul className="space-y-2 pt-3 border-t border-border/70 text-xs text-ink-primary">
                    {step.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-forest flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inspect Footer Link */}
                <div className="mt-5 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-forest group-hover:text-forest-deep">
                  <span>Inspect details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Clean Branching & Exception Strip */}
        {showBranches && (
          <div className="mt-8 p-6 rounded-2xl bg-mist border border-border animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-forest" />
                <h4 className="font-bold text-sm text-forest-deep">
                  Built-in Response Branches & Call Exception Handlers
                </h4>
              </div>
              <button
                onClick={() => setShowBranches(false)}
                className="text-xs text-ink-muted hover:text-forest"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Candidate Response Branches */}
              <div className="bg-white p-4 rounded-xl border border-border space-y-2">
                <span className="font-bold text-forest-deep block text-[11px] uppercase tracking-wider text-sage-dark">
                  Candidate Outreach Branches (Step 2)
                </span>
                <div className="space-y-1.5 text-ink-muted">
                  <div className="flex items-center justify-between p-1.5 rounded bg-mist">
                    <span className="font-semibold text-forest-deep">✓ Interested:</span>
                    <span>Self-schedule screening slot</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-mist">
                    <span className="font-semibold text-forest-deep">✕ Declined:</span>
                    <span>Polite exit with reason recorded</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-mist">
                    <span className="font-semibold text-forest-deep">⏳ No Response:</span>
                    <span>24h/48h reminders, not rejected</span>
                  </div>
                </div>
              </div>

              {/* Call Exception Fallbacks */}
              <div className="bg-white p-4 rounded-xl border border-border space-y-2">
                <span className="font-bold text-forest-deep block text-[11px] uppercase tracking-wider text-sage-dark">
                  Voice Call Fallbacks (Step 3)
                </span>
                <div className="space-y-1.5 text-ink-muted">
                  <div className="flex items-center justify-between p-1.5 rounded bg-mist">
                    <span className="font-semibold text-forest-deep">📵 No Answer:</span>
                    <span>Auto-reschedule link dispatched</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-mist">
                    <span className="font-semibold text-forest-deep">⚡ Tech Failure:</span>
                    <span>Controlled audio retry or phone dial-in</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-mist">
                    <span className="font-semibold text-forest-deep">👤 Human Request:</span>
                    <span>Immediately halts AI & alerts recruiter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Human Oversight Note */}
        <div className="mt-8 text-center text-xs text-ink-muted">
          <span>AI structures candidate evidence and scores alignment. Final shortlist and hiring decisions remain strictly with the human recruiter.</span>
        </div>
      </div>

      {/* Step Details Modal */}
      {selectedStepModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-xl bg-white border border-border rounded-2xl shadow-deep overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-forest px-6 py-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-forest-surface text-mint border border-forest-border">
                  Step {selectedStepModal.stepNumber}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedStepModal.title}</h3>
                  <p className="text-xs text-sage-light">{selectedStepModal.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStepModal(null)}
                className="p-1 rounded-lg text-sage-light hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 text-xs">
              <p className="text-sm font-medium text-ink-primary leading-relaxed bg-mist p-3.5 rounded-xl border border-border">
                {selectedStepModal.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-subtle">
                  <span className="font-bold text-forest-deep block mb-1">What the AI Does</span>
                  <p className="text-ink-muted leading-relaxed">{selectedStepModal.aiRole}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-subtle">
                  <span className="font-bold text-forest-deep block mb-1">What Recruiter Controls</span>
                  <p className="text-ink-muted leading-relaxed">{selectedStepModal.recruiterRole}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-border">
                <span className="font-bold text-sage-dark block uppercase tracking-wider text-[10px] mb-1">
                  Example In Practice
                </span>
                <p className="font-mono text-ink-primary bg-mist p-2 rounded border border-border">
                  {selectedStepModal.example}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedStepModal(null)}
                  className="px-4 py-2 bg-forest text-white rounded-lg font-semibold hover:bg-forest-hover"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
