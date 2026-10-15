import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: () => void;
  onScrollToCalculator: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo, onScrollToCalculator }) => {
  return (
    <section className="py-20 md:py-28 bg-forest-dark text-white relative overflow-hidden">
      {/* Subtle decorative dark grid background */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      {/* Decorative ambient glowing ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-forest-surface/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-surface border border-forest-border text-mint text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Your Screening Workflow</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Turn Screening Work Into Shortlists That Move Hiring Forward.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-sage-light max-w-2xl mx-auto leading-relaxed">
          See how CogniHire can help your team organize candidate screening, automate repetitive
          follow-ups, and produce structured evaluations for recruiter review.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-forest-dark bg-mint hover:bg-mint-light active:bg-mint-dark transition-all duration-150 transform hover:-translate-y-0.5 shadow-elevated group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-forest-dark group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-forest-surface hover:bg-forest-surface/80 border border-forest-border transition-all duration-150 transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4 text-mint" />
            <span>Calculate Your Potential Savings</span>
          </button>
        </div>

        {/* Quick bullet guarantees */}
        <div className="mt-12 pt-8 border-t border-forest-border/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-sage-light">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-mint" />
            <span>20-minute tailored walkthrough</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-mint" />
            <span>Live voice screening audio test</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-mint" />
            <span>Custom job rubric evaluation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
