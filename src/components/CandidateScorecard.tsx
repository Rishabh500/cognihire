import React, { useState } from 'react';
import {
  FileText,
  User,
  Play,
  Pause,
  Volume2,
  Check,
  X,
  MessageSquare,
  ThumbsUp,
  Sparkles,
} from 'lucide-react';

export const CandidateScorecard: React.FC = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<
    'shortlist' | 'followup' | 'interview' | 'reject'
  >('shortlist');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  return (
    <section id="scorecard" className="py-20 md:py-28 bg-white border-b border-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Candidate Dossier Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-deep tracking-tight">
            Evidence Over Guesswork.
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Resume credentials and conversational voice responses evaluated as two separate, transparent measures.
          </p>
        </div>

        {/* Clean Dossier Card */}
        <div className="bg-white rounded-3xl border border-border shadow-elevated overflow-hidden">
          {/* Header Banner */}
          <div className="bg-forest px-6 sm:px-8 py-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-surface border border-forest-border flex items-center justify-center text-mint font-bold text-lg">
                AM
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">Alex Morgan</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-mint/20 text-mint border border-mint/30">
                    Voice Screened
                  </span>
                </div>
                <p className="text-xs text-sage-light mt-0.5">
                  Senior Frontend Engineer • 7.5 Yrs Exp • San Francisco, CA (Hybrid)
                </p>
              </div>
            </div>

            {/* Separate Independent Scores */}
            <div className="flex items-center gap-2.5">
              <div className="bg-forest-surface px-4 py-2 rounded-xl border border-forest-border text-center">
                <span className="text-[10px] font-semibold text-sage-light uppercase tracking-wider block">
                  Resume Match
                </span>
                <span className="text-xl font-extrabold font-mono text-mint">8.4<span className="text-xs text-sage-light font-normal">/10</span></span>
              </div>
              <div className="bg-forest-surface px-4 py-2 rounded-xl border border-forest-border text-center">
                <span className="text-[10px] font-semibold text-sage-light uppercase tracking-wider block">
                  Voice Interview
                </span>
                <span className="text-xl font-extrabold font-mono text-white">7.8<span className="text-xs text-sage-light font-normal">/10</span></span>
              </div>
            </div>
          </div>

          {/* Dossier Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* 1. Verified Competencies */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-deep block mb-3">
                1. Resume Evidence Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-mist border border-border">
                  <div className="flex items-center gap-1.5 text-forest font-semibold mb-1">
                    <Check className="w-3.5 h-3.5 text-forest" />
                    <span>React 18 & TypeScript</span>
                  </div>
                  <p className="text-ink-muted text-[11px] leading-relaxed">
                    Verified: 5+ yrs leadership, migrated enterprise dashboard cutting INP by 38%.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-mist border border-border">
                  <div className="flex items-center gap-1.5 text-forest font-semibold mb-1">
                    <Check className="w-3.5 h-3.5 text-forest" />
                    <span>Web Performance</span>
                  </div>
                  <p className="text-ink-muted text-[11px] leading-relaxed">
                    Verified: Route-level code splitting & bundle reduction for design system.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-mist border border-border">
                  <div className="flex items-center gap-1.5 text-amber-800 font-semibold mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Production GraphQL</span>
                  </div>
                  <p className="text-ink-muted text-[11px] leading-relaxed">
                    Partially verified: Listed skill, recommended for verbal follow-up.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Interactive Voice Clip & Quote */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-deep">
                  2. Voice Screening Telemetry (11m 42s Audio)
                </span>
                <span className="text-[11px] text-sage-dark font-mono">Consented & Transcribed</span>
              </div>

              <div className="p-4 rounded-2xl bg-mist border border-border space-y-3">
                <div className="bg-white p-3 rounded-xl border border-border flex items-center justify-between gap-3">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-8 h-8 rounded-lg bg-forest text-mint flex items-center justify-center hover:bg-forest-hover transition-colors flex-shrink-0"
                    aria-label="Play audio sample"
                  >
                    {isPlayingAudio ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                  </button>
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] text-ink-muted mb-1">
                      <span className="font-medium text-forest-deep">Candidate on Performance Debugging</span>
                      <span>0:42 / 1:18</span>
                    </div>
                    {/* Simulated Waveform */}
                    <div className="flex items-center gap-1 h-3">
                      {[40, 75, 30, 90, 60, 45, 80, 100, 70, 50, 85, 40, 65, 95, 30, 50, 80, 60, 40, 70].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1 rounded-full transition-all ${
                            i < 8 ? 'bg-forest' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <Volume2 className="w-4 h-4 text-ink-muted flex-shrink-0" />
                </div>

                <p className="text-xs text-ink-muted italic bg-white p-3 rounded-xl border border-border">
                  "When diagnosing client bottlenecks, I start with Chrome DevTools Performance panel flamecharts to pinpoint main thread task spikes before refactoring state selectors."
                </p>
              </div>
            </div>

            {/* 3. Recruiter Decision Action Bar */}
            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-forest-deep uppercase tracking-wider">
                  3. Recruiter Final Decision
                </span>
                <span className="text-[11px] text-sage-dark font-medium">
                  Human recruiter authority confirmed
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={() => setSelectedOutcome('shortlist')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    selectedOutcome === 'shortlist'
                      ? 'bg-forest text-white border-forest shadow-sm ring-1 ring-mint'
                      : 'bg-white text-forest-deep border-border hover:border-forest/40'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-mint" />
                  <span>Shortlist</span>
                </button>

                <button
                  onClick={() => setSelectedOutcome('followup')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    selectedOutcome === 'followup'
                      ? 'bg-forest text-white border-forest shadow-sm ring-1 ring-mint'
                      : 'bg-white text-forest-deep border-border hover:border-forest/40'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                  <span>Follow Up</span>
                </button>

                <button
                  onClick={() => setSelectedOutcome('interview')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    selectedOutcome === 'interview'
                      ? 'bg-forest text-white border-forest shadow-sm ring-1 ring-mint'
                      : 'bg-white text-forest-deep border-border hover:border-forest/40'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-sage-light" />
                  <span>Human Interview</span>
                </button>

                <button
                  onClick={() => setSelectedOutcome('reject')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                    selectedOutcome === 'reject'
                      ? 'bg-forest text-white border-forest shadow-sm ring-1 ring-amber-400'
                      : 'bg-white text-forest-deep border-border hover:border-forest/40'
                  }`}
                >
                  <X className="w-3.5 h-3.5 text-amber-400" />
                  <span>Respectful Exit</span>
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-center text-ink-muted">
              AI-generated assessments support recruiter judgment. They do not replace human review or determine hiring outcomes automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
