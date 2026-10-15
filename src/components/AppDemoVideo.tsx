import React, { useRef, useState } from 'react';
import { Play, Sparkles, CheckCircle2, Shield, PhoneCall, FileText } from 'lucide-react';

interface AppDemoVideoProps {
  onOpenDemo?: () => void;
}

export const AppDemoVideo: React.FC<AppDemoVideoProps> = ({ onOpenDemo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <section id="demo-video" className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-mint/10 via-sage/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mist border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-sage" />
            <span>Interactive Product Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            See the Screening Workflow in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Watch how incoming resumes are parsed, matched against job requirements, and screened through natural AI voice conversations—delivering interview-ready shortlists in hours, not weeks.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-border bg-forest-dark shadow-2xl p-2 sm:p-3">
          {/* Subtle top frame bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-forest-dark/90 border-b border-forest-border/60 text-xs text-sage-light">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-mint/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-sage-light/70 hidden sm:inline">cognihire-screening-workflow.mp4</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="font-semibold text-mint">HD Demo Session</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-forest-dark flex items-center justify-center overflow-hidden rounded-2xl group">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/egrg9gtv/video/upload/v1792059063/screening_workflow_video.mp4"
              controls
              playsInline
              preload="metadata"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              className="w-full h-full object-contain bg-black rounded-2xl"
            />

            {/* Custom Play Overlay if paused */}
            {!isPlaying && (
              <div
                onClick={handlePlayToggle}
                className="absolute inset-0 bg-forest-dark/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-forest-dark/30 group/btn"
              >
                <div className="w-20 h-20 rounded-full bg-white text-forest-deep flex items-center justify-center shadow-elevated transform group-hover/btn:scale-110 transition-transform duration-200">
                  <Play className="w-8 h-8 fill-forest-deep ml-1" />
                </div>
                <span className="mt-4 text-sm font-bold text-white bg-forest-deep/80 px-4 py-1.5 rounded-full border border-forest-border/50">
                  Click to Watch Demo
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 3 Highlights Underneath */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-mist border border-border flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-white border border-border text-forest">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-forest-deep">1. Batch Resume Matching</h4>
              <p className="text-xs text-ink-muted mt-0.5">
                Evaluates hundreds of incoming resumes against weighted job criteria with zero keyword gaming.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-mist border border-border flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-white border border-border text-forest">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-forest-deep">2. Conversational Voice Screening</h4>
              <p className="text-xs text-ink-muted mt-0.5">
                Automated phone interview asks relevant clarifying questions and probes candidate depth.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-mist border border-border flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-white border border-border text-forest">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-forest-deep">3. Structured Shortlist Dossier</h4>
              <p className="text-xs text-ink-muted mt-0.5">
                Recruiter receives verifiable ratings, audio snippets, and explainable recommendations.
              </p>
            </div>
          </div>
        </div>

        {onOpenDemo && (
          <div className="mt-8 text-center">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-deep transition-colors"
            >
              <span>Want to test this workflow on your open roles?</span>
              <span className="underline underline-offset-4 decoration-mint font-bold">Book a personalized 1-on-1 walkthrough &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
