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
  Mail,
  Calendar,
  Globe,
  AlertCircle,
  ExternalLink,
  Database,
  EyeOff,
  UserCheck,
  FileCheck,
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
              <span>Google API & Regulatory Compliance Verified</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
              CogniHire Privacy Policy
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-muted border-b border-border pb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sage" />
                Last Updated: October 20, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sage" />
                Application: <strong>CogniHire (www.cognihire.io)</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sage" />
                Contact: <strong>contact@cognire.io</strong>
              </span>
            </div>
          </div>

          {/* Legal Body */}
          <div className="space-y-10 text-sm text-ink-primary leading-relaxed">
            {/* 1. Introduction and Scope */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">1. Introduction and Application Scope</h2>
              <p className="text-ink-muted leading-relaxed">
                This Privacy Policy (&quot;Policy&quot;) governs the data processing practices of <strong>CogniHire Technologies Inc.</strong> (&quot;CogniHire&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operating the recruitment screening and candidate intelligence platform accessible at <strong>https://www.cognihire.io</strong> and <strong>https://cognihire.io</strong> (the &quot;Application&quot; or &quot;Service&quot;).
              </p>
              <p className="text-ink-muted leading-relaxed">
                CogniHire provides an assistive software platform for recruitment agencies, staffing firms, and corporate talent teams to match candidate resumes against job descriptions, coordinate candidate communications, conduct structured AI voice screening phone calls with explicit candidate consent, and generate interview scorecards for human review.
              </p>
              <p className="text-ink-muted leading-relaxed">
                This document explains in transparent detail what data we collect, how that data is utilized, how it is stored and protected, user rights regarding their data, and our strict adherence to international privacy frameworks and <strong>Google API Services User Data Policies</strong>.
              </p>
            </section>

            {/* 2. CRITICAL SECTION: Google API Services User Data Policy Compliance */}
            <section className="p-6 sm:p-8 rounded-3xl bg-forest-dark text-white space-y-5 border border-forest-border shadow-elevated">
              <div className="flex items-center gap-2 text-mint font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>2. Google API Services & User Data Disclosure</span>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Compliance with Google API Services User Data Policy
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-sage-light leading-relaxed">
                  When you access or authenticate with CogniHire using your Google Account, or connect Google Workspace services (such as Google Sign-In, Google Calendar, or Google Drive), our collection, usage, and handling of Google user data strictly adheres to Google Cloud platform standards.
                </p>
              </div>

              {/* 2.1 Google Data Collected */}
              <div className="p-4 rounded-2xl bg-white/5 border border-forest-border space-y-2">
                <h4 className="font-bold text-mint text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mint shrink-0" />
                  2.1 Specific Google User Data Accessed & Requested
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-sage-light">
                  <li>
                    <strong className="text-white">Google Identity & Profile Data (via Google Sign-In):</strong> Primary email address, full name, profile picture URL, and verified Google unique user ID.
                  </li>
                  <li>
                    <strong className="text-white">Google Calendar Data (if authorized):</strong> Calendar event metadata solely to check recruiter availability, schedule candidate voice interviews, and create calendar invites for verified candidate shortlists.
                  </li>
                  <li>
                    <strong className="text-white">Google Drive / Documents Data (if authorized):</strong> Candidate resumes or job specifications that the recruiter explicitly selects and imports into CogniHire for matching.
                  </li>
                </ul>
              </div>

              {/* 2.2 How Google Data is Used */}
              <div className="space-y-2 text-xs sm:text-sm text-sage-light">
                <h4 className="font-bold text-white text-sm">2.2 Specific Purpose and Use of Google User Data</h4>
                <p>CogniHire uses Google user data strictly to provide user-facing features within the Application:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-sage-light">
                  <li>Authenticating your account and maintaining secure login sessions.</li>
                  <li>Synchronizing recruiter interview slots to avoid double-booking during voice screening schedules.</li>
                  <li>Importing recruiter-selected resume documents for automated skill parsing.</li>
                </ul>
              </div>

              {/* 2.3 Strict No-Sharing & No-Advertising Declaration */}
              <div className="space-y-2 text-xs sm:text-sm text-sage-light">
                <h4 className="font-bold text-white text-sm">2.3 No Selling or Transfer of Google User Data</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-sage-light">
                  <li><strong className="text-white">Never Sold:</strong> We do not sell, rent, lease, or monetize Google user data to any third party under any circumstances.</li>
                  <li><strong className="text-white">No Advertising:</strong> Google user data is never used or transferred to serve targeted advertisements, retargeting ads, personalized ads, or interest-based profiling.</li>
                  <li><strong className="text-white">No Data Brokers:</strong> We do not disclose Google user data to data brokers or information resellers.</li>
                </ul>
              </div>

              {/* 2.4 Prohibition of AI Training on Google Data */}
              <div className="p-4 rounded-2xl bg-forest-surface border border-forest-border space-y-2">
                <h4 className="font-bold text-mint text-sm flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-mint shrink-0" />
                  2.4 Prohibition on AI & Machine Learning Model Training
                </h4>
                <p className="text-xs text-sage-light leading-relaxed">
                  <strong>CogniHire does not use Google user data to develop, train, fine-tune, or improve generalized artificial intelligence (AI) or machine learning (ML) models.</strong> No Google user data or candidate data imported from Google APIs is retained to train foundational AI algorithms.
                </p>
              </div>

              {/* 2.5 MANDATORY GOOGLE LIMITED USE STATEMENT */}
              <div className="p-4 rounded-2xl bg-white/10 border-2 border-mint/40 space-y-2">
                <h4 className="font-bold text-mint text-sm uppercase tracking-wide">
                  2.5 Google API Limited Use Compliance Statement
                </h4>
                <p className="text-xs text-white leading-relaxed font-medium">
                  CogniHire&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{' '}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mint underline inline-flex items-center gap-1 font-bold hover:text-white"
                  >
                    Google API Services User Data Policy
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  , including the Limited Use requirements.
                </p>
              </div>

              {/* 2.6 Revoking Access */}
              <div className="space-y-2 text-xs sm:text-sm text-sage-light">
                <h4 className="font-bold text-white text-sm">2.6 How to Revoke Access to Google Data</h4>
                <p>
                  You can revoke CogniHire&apos;s access to your Google account at any time:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-xs text-sage-light">
                  <li>
                    Visit your Google Account Security Settings at{' '}
                    <a
                      href="https://myaccount.google.com/permissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mint underline font-semibold"
                    >
                      https://myaccount.google.com/permissions
                    </a>.
                  </li>
                  <li>Locate <strong>CogniHire</strong> under Third-party apps with account access.</li>
                  <li>Click <strong>Remove Access</strong>. Upon revocation, our platform tokens are immediately invalidated.</li>
                </ol>
              </div>

              {/* 2.7 Prohibition of AI Non-Consensual Intimate Imagery (NCII) */}
              <div className="p-4 rounded-2xl bg-white/5 border border-forest-border space-y-2 text-xs sm:text-sm text-sage-light">
                <h4 className="font-bold text-mint text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-mint shrink-0" />
                  2.7 Strict Prohibition of AI Non-Consensual Intimate Imagery (NCII)
                </h4>
                <p className="leading-relaxed">
                  In strict accordance with Google Trust & Safety Policies, CogniHire and its underlying Google API integrations maintain a zero-tolerance prohibition against the generation, uploading, hosting, processing, or distribution of <strong>Non-Consensual Intimate Imagery (NCII)</strong>, synthetic sexually explicit media, unauthorized biometric/voice cloning, or deceptive deepfakes.
                </p>
                <p className="leading-relaxed">
                  CogniHire does not possess, provide, or connect to image generation or synthetic video tools for intimate imagery. Google APIs and user credentials are used solely for professional recruitment identity verification and interview calendaring.
                </p>
              </div>
            </section>

            {/* 3. General Information We Collect */}
            <section className="space-y-4 p-6 rounded-3xl bg-mist border border-border">
              <h2 className="text-lg font-bold text-forest-deep flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-forest" />
                3. Categories of Information We Collect
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5">
                  <strong className="text-forest-deep block font-bold">A. Recruiter Account Data</strong>
                  <p className="text-ink-muted">
                    Full name, corporate email address, password hash, company organization name, job requisition criteria, and team member management settings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5">
                  <strong className="text-forest-deep block font-bold">B. Candidate Application Materials</strong>
                  <p className="text-ink-muted">
                    Resumes, CVs, portfolio links, employment history, education, certifications, and candidate contact numbers/emails ingested directly or through ATS integrations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5">
                  <strong className="text-forest-deep block font-bold">C. Consensual Voice Screening Audio & Transcripts</strong>
                  <p className="text-ink-muted">
                    High-fidelity audio recordings of screening phone calls, speech-to-text transcripts, timestamp logs, and synthesized evaluation scorecards generated during phone screens.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5">
                  <strong className="text-forest-deep block font-bold">D. Technical & Session Data</strong>
                  <p className="text-ink-muted">
                    IP address, device operating system, browser type, referral URLs, access timestamps, and session tokens necessary to maintain security and prevent automated abuse.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Purpose and Legal Basis for Processing */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">4. Purpose and Legal Bases for Data Processing</h2>
              <p className="text-ink-muted">
                Under the European Union General Data Protection Regulation (GDPR) and similar international statutes, CogniHire processes personal data under the following lawful bases:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ink-muted text-xs sm:text-sm">
                <li>
                  <strong className="text-forest-deep">Performance of a Contract:</strong> Providing platform functionality, managing recruiter accounts, and processing customer subscriptions.
                </li>
                <li>
                  <strong className="text-forest-deep">Consent:</strong> In conducting telephone voice screening interviews, candidate consent is explicitly requested and confirmed prior to call commencement and recording.
                </li>
                <li>
                  <strong className="text-forest-deep">Legitimate Interests:</strong> Preventing unauthorized access, debugging application telemetry, ensuring platform stability, and protecting against security threats.
                </li>
                <li>
                  <strong className="text-forest-deep">Legal Compliance:</strong> Fulfilling tax, employment reporting, and law enforcement requests when strictly mandated by legal statute.
                </li>
              </ul>
            </section>

            {/* 5. Human-in-the-Loop & Ethical AI Governance */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">5. Human-in-the-Loop & Ethical AI Governance</h2>
              <p className="text-ink-muted leading-relaxed">
                CogniHire is built upon the fundamental principle of <strong>Human Oversight</strong>:
              </p>
              <div className="p-5 rounded-2xl bg-mist border border-border space-y-2 text-xs sm:text-sm text-ink-muted">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span><strong>No Automated Rejection Decisions:</strong> The platform does not make autonomous adverse employment determinations. CogniHire generates explainable qualification scorecards; all shortlisting, interview invitations, and final rejection decisions are executed solely by human recruitment professionals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span><strong>Anti-Bias Architecture:</strong> Algorithmic matching focuses exclusively on verified skills, relevant experience, and role qualifications. Models actively disregard candidate race, gender, age, marital status, or disability.</span>
                </div>
              </div>
            </section>

            {/* 6. Third-Party Sub-Processors & Data Sharing */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">6. Third-Party Service Providers and Sub-Processors</h2>
              <p className="text-ink-muted">
                We share data with verified third-party vendors strictly to deliver core platform services under confidentiality and data protection agreements:
              </p>
              <div className="border border-border rounded-2xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-mist text-forest-deep font-bold border-b border-border">
                    <tr>
                      <th className="p-3">Vendor / Sub-processor</th>
                      <th className="p-3">Function</th>
                      <th className="p-3">Location & Safeguards</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-ink-muted">
                    <tr>
                      <td className="p-3 font-semibold text-forest-deep">Google Cloud Platform</td>
                      <td className="p-3">Cloud hosting, secure database & container infrastructure</td>
                      <td className="p-3">United States (SOC 2 Type II, ISO 27001)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-forest-deep">Twilio / Telephony Carriers</td>
                      <td className="p-3">Consensual telephony routing for AI voice calls</td>
                      <td className="p-3">Global carrier networks (TLS encrypted voice)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-forest-deep">Stripe</td>
                      <td className="p-3">PCI-DSS compliant payment processing</td>
                      <td className="p-3">United States (PCI Level 1 Certified)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Data Storage, Retention & Deletion Schedule */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">7. Data Storage, Retention and Deletion Schedule</h2>
              <p className="text-ink-muted leading-relaxed">
                All data is stored within encrypted cloud databases in the United States. We adhere to structured data lifecycles:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-ink-muted">
                <li><strong className="text-forest-deep">Recruiter Account Data:</strong> Retained for the duration of the active subscription plus 30 days following account termination.</li>
                <li><strong className="text-forest-deep">Voice Audio & Transcripts:</strong> Automatically purged after <strong>90 days</strong> (or the custom duration designated by your enterprise account settings).</li>
                <li><strong className="text-forest-deep">Google User Data:</strong> Purged immediately upon account deletion or within 30 days of a verified deletion request.</li>
              </ul>
            </section>

            {/* 8. Worldwide User Rights */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-forest-deep">8. Your Privacy Rights (GDPR, CCPA, CPRA, DPDP)</h2>
              <p className="text-ink-muted">
                Regardless of your geographic location, CogniHire grants you comprehensive rights over your personal data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Access & Portability</strong>
                  <p className="text-ink-muted">Request a machine-readable export of all candidate resumes, voice audio, and scorecards associated with your profile.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Erasure (&quot;Right to be Forgotten&quot;)</strong>
                  <p className="text-ink-muted">Request the immediate and permanent deletion of your data from our active databases and backup systems.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Rectification</strong>
                  <p className="text-ink-muted">Request the correction of inaccurate transcriptions, misspelled names, or outdated employment records.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Right to Withdraw Consent</strong>
                  <p className="text-ink-muted">Withdraw consent to telephone screening calls at any time without penalty or prejudice.</p>
                </div>
              </div>
            </section>

            {/* 9. Security Safeguards */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">9. Technical and Organizational Security Safeguards</h2>
              <p className="text-ink-muted leading-relaxed">
                CogniHire implements multi-layered security controls to protect information against unauthorized disclosure, alteration, or destruction:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-ink-muted">
                <li><strong>Encryption in Transit:</strong> All HTTP and WebSocket connections utilize Transport Layer Security (TLS 1.3).</li>
                <li><strong>Encryption at Rest:</strong> Customer databases, file storage, and audio logs are encrypted using Advanced Encryption Standard (AES-256).</li>
                <li><strong>Role-Based Access Control (RBAC):</strong> Access to production databases is restricted to authorized personnel under least-privilege principles and multi-factor authentication (MFA).</li>
                <li><strong>Regular Security Reviews:</strong> Continual vulnerability assessments, penetration testing, and dependency audits.</li>
              </ul>
            </section>

            {/* 10. Children's Privacy */}
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-forest-deep">10. Children&apos;s Privacy (COPPA Compliance)</h2>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">
                CogniHire is designed exclusively for adult commercial recruitment and adult job applicants. We do not knowingly collect, solicit, or maintain personal information from individuals under the age of 18. If we learn that an individual under 18 has submitted information to the platform, we will delete that data immediately.
              </p>
            </section>

            {/* 11. Contact Information */}
            <section className="p-6 sm:p-8 rounded-3xl bg-mist border border-border space-y-4">
              <h2 className="text-lg font-bold text-forest-deep flex items-center gap-2">
                <Mail className="w-5 h-5 text-forest" />
                11. Contact Our Privacy & Compliance Office
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                To exercise any of your privacy rights, submit a data deletion request, inquire regarding Google API user data compliance, or request our Data Processing Addendum (DPA), please contact our Data Protection Officer:
              </p>
              
              <div className="p-4 rounded-2xl bg-white border border-border text-xs sm:text-sm font-mono text-forest-deep space-y-1.5">
                <div><strong>Entity:</strong> CogniHire Technologies Inc.</div>
                <div><strong>Application:</strong> CogniHire (https://www.cognihire.io)</div>
                <div><strong>Official Privacy Email:</strong> <a href="mailto:contact@cognire.io" className="text-forest font-bold underline">contact@cognire.io</a></div>
                <div><strong>Data Protection Officer:</strong> Privacy & Compliance Team</div>
                <div><strong>Response Timeline:</strong> All data deletion and access inquiries are processed within 30 days.</div>
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
