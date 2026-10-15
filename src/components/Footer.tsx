import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onScrollToCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onScrollToCalculator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-evergreen text-white border-t border-forest-border/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-border">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" showTagline={false} />
            <p className="text-sm font-semibold text-mint mt-1">
              Intelligent Hiring. Stronger Shortlists.
            </p>
            <p className="text-xs text-sage-light leading-relaxed max-w-sm">
              CogniHire helps recruitment agencies and corporate talent teams turn incoming resumes
              into structured, interview-backed shortlists through AI resume matching, candidate
              engagement, voice screening, and evidence-based scorecards.
            </p>
            <div className="pt-2 text-xs text-sage-light flex items-center gap-2">
              <Mail className="w-4 h-4 text-mint" />
              <a
                href="mailto:contact@cognihire.com"
                className="hover:text-white transition-colors underline decoration-forest-border"
              >
                contact@cognihire.com
              </a>
            </div>
          </div>

          {/* Column 3: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mint">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-sage-light">
              <li>
                <a href="#demo-video" className="hover:text-white transition-colors">
                  Watch Product Demo
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Screening Workflow
                </a>
              </li>
              <li>
                <button
                  onClick={onScrollToCalculator}
                  className="hover:text-white transition-colors text-left"
                >
                  Interactive Savings Calculator
                </button>
              </li>
              <li>
                <a href="#scorecard" className="hover:text-white transition-colors">
                  Sample Candidate Scorecard
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mint">
              Key Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-sage-light">
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Resume Intake & Matching
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Candidate WhatsApp/Email Outreach
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Conversational Voice Interviews
                </a>
              </li>
              <li>
                <a href="#scorecard" className="hover:text-white transition-colors">
                  Evidence-Backed Shortlists
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Governance & Demo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mint">
              Governance & Access
            </h4>
            <ul className="space-y-2 text-xs text-sage-light">
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Human Oversight Standards
                </a>
              </li>
              <li>
                <span className="text-white/70 cursor-pointer hover:text-white" onClick={onOpenDemo}>
                  Candidate Consent Disclosures
                </span>
              </li>
              <li>
                <span className="text-white/70 cursor-pointer hover:text-white" onClick={onOpenDemo}>
                  Data Retention Protocols
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full text-center py-2 px-3 text-xs font-semibold text-forest-dark bg-mint hover:bg-mint-light rounded-lg transition-colors"
              >
                Schedule Walkthrough
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-light">
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>© 2026 CogniHire Technologies. All rights reserved.</span>
            <span className="text-forest-border">•</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-forest-border">•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="text-forest-border">•</span>
            <span className="hover:text-white cursor-pointer">Responsible AI Statement</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-forest-surface hover:bg-forest text-sage-light hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
