import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Lock, CheckCircle2, Scale } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type LegalDocType = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  initialDoc?: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialDoc = 'privacy',
  onClose,
}) => {
  const [activeDoc, setActiveDoc] = useState<LegalDocType>(initialDoc);

  useEffect(() => {
    if (initialDoc) {
      setActiveDoc(initialDoc);
    }
  }, [initialDoc]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-forest px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo variant="light" symbolOnly={true} />
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-mint" />
                <span>Legal & Compliance Center</span>
              </h3>
              <p className="text-xs text-sage-light">CogniHire Trust, Privacy & Service Governance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sage-light hover:text-white hover:bg-forest-surface transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-border bg-mist px-6 pt-3 gap-2 shrink-0">
          <button
            onClick={() => setActiveDoc('privacy')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeDoc === 'privacy'
                ? 'border-forest text-forest bg-white rounded-t-xl shadow-xs'
                : 'border-transparent text-ink-muted hover:text-forest-deep'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveDoc('terms')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeDoc === 'terms'
                ? 'border-forest text-forest bg-white rounded-t-xl shadow-xs'
                : 'border-transparent text-ink-muted hover:text-forest-deep'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-ink-primary leading-relaxed">
          {activeDoc === 'privacy' ? (
            /* PRIVACY POLICY CONTENT */
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sage block mb-1">
                  Effective Date: October 2026 • Version 2.1
                </span>
                <h4 className="text-xl font-extrabold text-forest-deep">
                  CogniHire Privacy Policy
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  CogniHire Technologies (&quot;CogniHire&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, accessible at <strong>cognihire.io</strong>) is committed to protecting the privacy of recruitment professionals, client organizations, and job applicants. This Privacy Policy outlines how we collect, process, store, and safeguard candidate and enterprise information through our AI-assisted resume matching and voice screening platform.
                </p>
              </div>

              {/* Section 1 */}
              <div className="p-4 rounded-2xl bg-mist border border-border space-y-2">
                <h5 className="font-bold text-forest-deep flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  1. Information We Collect
                </h5>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-ink-muted">
                  <li>
                    <strong className="text-forest-deep">Enterprise Account Information:</strong> Names, corporate email addresses, phone numbers, billing credentials, and company preferences provided when registering for CogniHire.
                  </li>
                  <li>
                    <strong className="text-forest-deep">Candidate Application Data:</strong> Resumes, CVs, portfolios, employment histories, educational credentials, and LinkedIn profile URLs submitted by recruiters or ingested through ATS integrations.
                  </li>
                  <li>
                    <strong className="text-forest-deep">Voice Screening Recordings & Transcripts:</strong> Audio recordings, phonetic transcripts, and response durations captured during consensual conversational AI phone screenings.
                  </li>
                  <li>
                    <strong className="text-forest-deep">Technical Telemetry:</strong> Log data, IP addresses, browser types, and interaction telemetry necessary to ensure system performance and security.
                  </li>
                </ul>
              </div>

              {/* Section 2: Google User Data */}
              <div className="p-4 rounded-2xl bg-forest-dark text-white space-y-3 border border-forest-border">
                <h5 className="font-bold text-mint flex items-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-mint" />
                  2. Google API Services User Data Policy Compliance
                </h5>
                <p className="text-xs text-sage-light leading-relaxed">
                  When you sign in with Google or link Google Workspace features, CogniHire accesses only your verified Google profile (name, email, profile photo) and, if authorized, calendar availability to schedule interviews.
                </p>
                <div className="p-3 rounded-xl bg-white/10 border border-mint/30 text-xs text-white leading-relaxed">
                  <strong className="text-mint block mb-1">Google API Limited Use Disclosure:</strong>
                  CogniHire&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{' '}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mint underline font-bold"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements. We never sell Google user data, never transfer it to advertising networks, and never use it to train generalized AI/ML models. CogniHire strictly prohibits the use of Google APIs or platform features for AI-generated Non-Consensual Intimate Imagery (NCII), deepfakes, or unauthorized biometric impersonation.
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  3. How We Use Collected Data
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  We process candidate and enterprise information strictly to provide recruitment intelligence services:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-ink-muted">
                  <li>Parsing and matching candidate resumes against client-defined job descriptions.</li>
                  <li>Automating candidate outreach via SMS, email, or WhatsApp with explicit screening invitations.</li>
                  <li>Conducting structured, question-by-question voice screening calls based on job criteria.</li>
                  <li>Generating structured scorecard dossiers, rubric assessments, and interview evidence for human recruiters.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="p-4 rounded-2xl bg-mist border border-border space-y-2">
                <h5 className="font-bold text-forest-deep flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-forest" />
                  4. Responsible AI & Model Governance Safeguards
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  CogniHire strictly adheres to ethical AI principles:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-sage-light">
                  <li><strong>Zero Public Model Training:</strong> Your company data and candidate resumes are never used to train public foundational AI models.</li>
                  <li><strong>Human-in-the-Loop Oversight:</strong> CogniHire does not issue automated disqualifications or hiring rejections. The platform delivers explainable scorecards so human recruiters make all ultimate decisions.</li>
                  <li><strong>Bias Minimization:</strong> Matching models focus strictly on verifiable skills, experience, and role qualifications, avoiding demographic, gender, or age-based scoring.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  5. Candidate Consent & Regional Rights (GDPR, CCPA & DPDP)
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  Candidates invited to voice screening receive upfront notification that the call is conducted by an AI interviewer and recorded for recruiter evaluation. Candidates retain the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-ink-muted">
                  <li>Access their audio recordings, transcripts, and evaluation scorecards.</li>
                  <li>Request rectification of incorrect resume data or transcription errors.</li>
                  <li>Request prompt deletion of their personal information (&quot;Right to be Forgotten&quot;).</li>
                  <li>Opt-out of automated screening in favor of traditional manual recruiter interviews.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  6. Data Security, Retention & Deletion
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  All data is encrypted in transit using TLS 1.3 and at rest using AES-256 bit encryption within SOC 2 Type II compliant cloud data centers. Candidate audio and transcripts are retained for 90 days by default (or the custom duration configured by your organization) and permanently purged thereafter.
                </p>
              </div>

              {/* Section 7 */}
              <div className="pt-2 border-t border-border text-xs text-ink-muted">
                <p>
                  Questions about our privacy practices or candidate data requests? Contact our Data Protection Officer at{' '}
                  <a href="mailto:contact@cognire.io" className="text-forest font-semibold underline">
                    contact@cognire.io
                  </a>.
                </p>
              </div>
            </div>
          ) : (
            /* TERMS AND CONDITIONS CONTENT */
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sage block mb-1">
                  Last Updated: October 2026 • Commercial Terms
                </span>
                <h4 className="text-xl font-extrabold text-forest-deep">
                  CogniHire Terms of Service & Conditions
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern access to and use of the CogniHire recruitment intelligence software (accessible at <strong>cognihire.io</strong>), telephony voice screening infrastructure, and related APIs provided by CogniHire Technologies. By subscribing, accessing, or integrating CogniHire, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Section 1 */}
              <div className="p-4 rounded-2xl bg-mist border border-border space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  1. Service Overview & Intended Use
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  CogniHire is an assistive software-as-a-service (SaaS) platform built for staffing agencies, headhunters, and corporate talent acquisition teams. The platform automates resume ingestion, candidate matching, WhatsApp/SMS/email outreach, conversational voice screening, and scorecard generation.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  2. Customer Obligations & Candidate Communications Consent
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  By utilizing CogniHire telephony and automated outreach features, the customer represents and warrants that:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-ink-muted">
                  <li>All candidate contact data uploaded was collected lawfully with legitimate recruitment interest or explicit consent.</li>
                  <li>Outreach complies with telecommunications standards (including TCPA in the US and regional telecom rules).</li>
                  <li>Job descriptions and hiring rubrics do not contain discriminatory criteria violating applicable labor laws.</li>
                  <li>The customer maintains primary responsibility for all hiring, promotion, and employment determinations.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="p-4 rounded-2xl bg-mist border border-border space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  3. Assistive Intelligence & Hiring Disclaimers
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  CogniHire provides objective, algorithmic candidate match ratings and structured interview analysis based on customer-supplied rubrics. CogniHire does not guarantee specific hiring outcomes, candidate performance, or candidate tenure. Recruiter teams must independently verify candidate credentials and certifications prior to employment offers.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  4. Intellectual Property & Customer Ownership
                </h5>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-ink-muted">
                  <li>
                    <strong className="text-forest-deep">Customer Data:</strong> Customers retain sole ownership and title to all uploaded resumes, job criteria, organizational branding, and proprietary candidate notes.
                  </li>
                  <li>
                    <strong className="text-forest-deep">CogniHire Platform:</strong> CogniHire retains all intellectual property rights, algorithms, software interfaces, documentation, and underlying models powering the service.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  5. Subscription Billing, Usage & Cancellation
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  Platform subscriptions are billed on a monthly or annual cadence as agreed in customer service orders. Additional conversational voice minutes exceeding tier quotas are billed at stated per-minute telephony rates. Subscriptions may be cancelled anytime prior to renewal via the billing portal.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-2">
                <h5 className="font-bold text-forest-deep text-sm">
                  6. Limitation of Liability
                </h5>
                <p className="text-xs sm:text-sm text-ink-muted">
                  To the maximum extent permitted by law, CogniHire Technologies shall not be liable for indirect, incidental, or consequential damages resulting from recruitment decisions, candidate conduct, or temporary telephony carrier outages. Total liability shall not exceed the fees paid by customer in the preceding 12 months.
                </p>
              </div>

              {/* Section 7 */}
              <div className="pt-2 border-t border-border text-xs text-ink-muted">
                <p>
                  For commercial or legal inquiries regarding these Terms, contact our legal counsel team at{' '}
                  <a href="mailto:contact@cognire.io" className="text-forest font-semibold underline">
                    contact@cognire.io
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="bg-mist px-6 py-4 border-t border-border flex items-center justify-between shrink-0">
          <span className="text-[11px] text-ink-muted font-medium">
            CogniHire Technologies (cognihire.io) • Trusted AI Candidate Intelligence
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-forest hover:bg-forest-hover rounded-xl shadow-xs transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
