import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import {
  Shield,
  ArrowLeft,
  Lock,
  CheckCircle2,
  FileText,
  Mail,
  Scale,
  Calendar,
  Globe,
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = 'Privacy Policy — CogniHire';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-primary font-sans selection:bg-mint selection:text-forest-dark">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" aria-label="CogniHire Home">
            <BrandLogo variant="dark" showTagline={false} />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-forest-deep bg-mist hover:bg-white border border-border rounded-lg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-forest hover:bg-forest-hover rounded-lg shadow-sm transition-all"
            >
              <span>Book Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Document Metadata */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>/</span>
              <span className="text-forest-deep font-semibold">Privacy Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist border border-border text-forest text-xs font-semibold mb-4">
              <Shield className="w-3.5 h-3.5 text-sage" />
              <span>Official Compliance Document</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
              Privacy Policy
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-muted border-b border-border pb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sage" />
                Effective Date: October 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sage" />
                Domain: <strong>cognihire.io</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sage" />
                Contact: <strong>contact@cognire.io</strong>
              </span>
            </div>
          </div>

          {/* Legal Body */}
          <div className="space-y-8 text-sm text-ink-primary leading-relaxed">
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">1. Overview and Scope</h2>
              <p className="text-ink-muted leading-relaxed">
                CogniHire Technologies (&quot;CogniHire&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible via <strong>cognihire.io</strong>, provides an AI-assisted recruitment screening, resume matching, and voice telephony interview platform for staffing agencies, headhunters, and corporate talent acquisition teams.
              </p>
              <p className="text-ink-muted leading-relaxed">
                This Privacy Policy explains how we collect, process, store, and safeguard personal information when recruitment professionals use our platform and when candidates participate in automated voice evaluations.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4 p-6 rounded-3xl bg-mist border border-border">
              <h2 className="text-lg font-bold text-forest-deep flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-forest" />
                2. Information We Collect
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-ink-muted">
                <div>
                  <strong className="text-forest-deep block mb-1">A. Enterprise & Recruiter Data</strong>
                  <p>Corporate account names, business email addresses, billing contact information, user roles, job descriptions, and custom rubric criteria provided by subscribing recruitment teams.</p>
                </div>
                <div>
                  <strong className="text-forest-deep block mb-1">B. Candidate Inbound Application Data</strong>
                  <p>Resumes, curriculum vitae (CVs), portfolio links, work histories, educational qualifications, self-reported skills, and contact details (email addresses and phone numbers) imported via ATS integrations or direct file uploads.</p>
                </div>
                <div>
                  <strong className="text-forest-deep block mb-1">C. AI Voice Telephony Recordings & Transcripts</strong>
                  <p>Audio recordings of screening phone calls, phonetic speech-to-text transcripts, call duration, timestamp metadata, and structured scorecards derived from candidate responses during consensual AI voice calls.</p>
                </div>
                <div>
                  <strong className="text-forest-deep block mb-1">D. Platform Technical Telemetry</strong>
                  <p>IP addresses, browser types, session tokens, operating systems, and access timestamps collected automatically to maintain system security and availability.</p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">3. How We Use Information</h2>
              <p className="text-ink-muted">We use the collected information solely for legitimate recruitment facilitation purposes:</p>
              <ul className="list-disc pl-5 space-y-2 text-ink-muted text-xs sm:text-sm">
                <li>Parsing and indexing candidate resumes against customer-defined job requirements.</li>
                <li>Dispatching candidate invitations and reminders via SMS, WhatsApp, or email.</li>
                <li>Conducting structured, conversational voice telephone interviews based strictly on job qualifications.</li>
                <li>Generating objective, evidence-backed candidate shortlists and scorecards for human recruiter review.</li>
                <li>Preventing platform abuse, detecting fraud, and ensuring infrastructure reliability.</li>
              </ul>
            </section>

            {/* Responsible AI Box */}
            <section className="p-6 rounded-3xl bg-forest-dark text-white space-y-3 border border-forest-border shadow-elevated">
              <div className="flex items-center gap-2 text-mint font-bold text-sm uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>4. Responsible AI & Model Governance Safeguards</span>
              </div>
              <h3 className="text-xl font-bold text-white">Our Commitments to Ethical AI</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sage-light">
                <li className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Zero Public Foundational Model Training:</strong> Proprietary client job descriptions, candidate resumes, voice audio, and transcripts are never fed into or used to train public generative AI foundation models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Human-in-the-Loop Decision Making:</strong> CogniHire does not issue autonomous hiring or rejection decisions. The platform functions strictly as an assistive intelligence tool to organize data; human recruiters make all ultimate employment determinations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Anti-Bias Algorithms:</strong> Rubrics evaluate demonstrated competencies, technical capabilities, and verifiable work history. Candidate evaluations disregard protected demographic attributes.</span>
                </li>
              </ul>
            </section>

            {/* Candidate Rights */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">5. Candidate Consent & Privacy Rights (GDPR, CCPA & Regional Regulations)</h2>
              <p className="text-ink-muted">
                Candidates are provided transparent notice prior to initiating an AI voice interview that the session is recorded and transcribed for recruitment evaluation. Candidates retain universal rights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm mt-3">
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Access</strong>
                  <p className="text-ink-muted">Request a copy of your audio recordings, transcripts, and evaluation scorecards.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Erasure (&quot;Right to be Forgotten&quot;)</strong>
                  <p className="text-ink-muted">Request permanent deletion of your resume and interview telemetry from our servers.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Rectification</strong>
                  <p className="text-ink-muted">Request correction of transcribed text or outdated profile information.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Opt-Out</strong>
                  <p className="text-ink-muted">Opt out of AI telephony screening and request human-conducted interviews directly.</p>
                </div>
              </div>
            </section>

            {/* Data Retention & Security */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">6. Data Security and Retention</h2>
              <p className="text-ink-muted">
                All data in transit is protected using TLS 1.3 encryption, and data at rest is encrypted with AES-256 bit encryption within SOC 2 Type II certified cloud infrastructure. Candidate audio and transcripts are retained for 90 days by default (or the custom duration configured by your enterprise account) and automatically purged thereafter.
              </p>
            </section>

            {/* Contact Information */}
            <section className="p-6 rounded-3xl bg-mist border border-border space-y-3">
              <h2 className="text-lg font-bold text-forest-deep flex items-center gap-2">
                <Mail className="w-5 h-5 text-forest" />
                7. Contact Our Privacy & Compliance Team
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                If you have questions regarding this Privacy Policy, wish to exercise candidate data rights, or require our Data Processing Addendum (DPA), please reach out to:
              </p>
              <div className="pt-2 text-xs sm:text-sm font-mono text-forest-deep space-y-1">
                <div>Email: <a href="mailto:contact@cognire.io" className="text-forest font-bold underline">contact@cognire.io</a></div>
                <div>Web: <a href="https://cognihire.io" className="text-forest font-bold underline">https://cognihire.io</a></div>
                <div>Entity: CogniHire Technologies Inc.</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenDemo={() => setDemoModalOpen(true)}
        onScrollToCalculator={() => window.location.href = '/#calculator'}
      />

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
};
