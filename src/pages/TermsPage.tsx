import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import {
  Scale,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Mail,
  Calendar,
  Globe,
  AlertCircle,
} from 'lucide-react';

export const TermsPage: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = 'Terms & Conditions — CogniHire';
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
              <span className="text-forest-deep font-semibold">Terms and Conditions</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist border border-border text-forest text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5 text-sage" />
              <span>Commercial Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
              Terms & Conditions
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-muted border-b border-border pb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sage" />
                Last Updated: October 2026
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
            {/* 1. Acceptance */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">1. Acceptance of Terms</h2>
              <p className="text-ink-muted leading-relaxed">
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you or the entity you represent (&quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;) and CogniHire Technologies Inc. (&quot;CogniHire&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of our recruitment intelligence software, website located at <strong>cognihire.io</strong>, APIs, and automated voice telephony services (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-ink-muted leading-relaxed">
                By creating an account, signing an order form, or accessing any part of the Service, you confirm that you have read, understood, and agreed to be bound by these Terms.
              </p>
            </section>

            {/* 2. Platform Scope */}
            <section className="space-y-3 p-6 rounded-3xl bg-mist border border-border">
              <h2 className="text-lg font-bold text-forest-deep flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-forest" />
                2. Service Description and Permitted Use
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                CogniHire provides a B2B SaaS candidate intelligence platform designed for recruitment agencies, search firms, and enterprise hiring organizations. Key capabilities include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-ink-muted">
                <li>Automated resume parsing and semantic job description matching.</li>
                <li>Candidate outreach workflow triggers via email, SMS, and WhatsApp.</li>
                <li>Consensual AI conversational telephone voice screenings based on customer rubric questions.</li>
                <li>Synthesis of candidate responses into structured qualification scorecards.</li>
              </ul>
            </section>

            {/* 3. Candidate Outreach & Consent Warranties */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">3. Customer Obligations & Communications Consent</h2>
              <p className="text-ink-muted">When initiating candidate communications or automated voice telephony through CogniHire, Customer covenants and warrants that:</p>
              <ul className="list-disc pl-5 space-y-2 text-ink-muted text-xs sm:text-sm">
                <li>Customer has acquired lawful consent or possess valid recruitment interest to contact each candidate via phone, email, or messaging.</li>
                <li>Outreach activities comply with all applicable local, national, and international telecommunications regulations (including the US Telephone Consumer Protection Act [TCPA], CAN-SPAM, and regional telecom guidelines).</li>
                <li>Customer will not use the Service to transmit unsolicited spam, unlawful materials, or deceptive communications.</li>
              </ul>
            </section>

            {/* 4. Assistive AI Disclaimer */}
            <section className="p-6 rounded-3xl bg-forest-dark text-white space-y-3 border border-forest-border shadow-elevated">
              <div className="flex items-center gap-2 text-mint font-bold text-sm uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>4. Assistive Intelligence & Hiring Decisions Disclaimer</span>
              </div>
              <h3 className="text-xl font-bold text-white">Human-in-the-Loop Requirement</h3>
              <p className="text-xs sm:text-sm text-sage-light leading-relaxed">
                CogniHire provides algorithmic ratings, skill extractions, and structured transcript summaries solely as an assistive evaluation tool.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-sage-light">
                <li className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Sole Customer Responsibility:</strong> Customer retains full and sole responsibility for all employment, interview scheduling, qualification determinations, and hiring decisions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>No Outcome Guarantees:</strong> CogniHire does not guarantee that screened candidates will accept offers, match subjective culture criteria, or remain employed for any duration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mint font-bold">•</span>
                  <span><strong>Non-Discrimination:</strong> Customer warrants that job criteria, question rubrics, and selection processes do not discriminate against candidates based on race, gender, age, religion, disability, or other protected classes.</span>
                </li>
              </ul>
            </section>

            {/* 5. Intellectual Property */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">5. Proprietary Rights & Customer Data Ownership</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mt-3">
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">Customer Data (100% Owned by You)</strong>
                  <p className="text-ink-muted">Customer retains all rights, title, and ownership in all uploaded resumes, candidate contact details, job descriptions, and custom rubric parameters.</p>
                </div>
                <div className="p-4 rounded-2xl bg-mist border border-border">
                  <strong className="text-forest-deep block mb-1">CogniHire Intellectual Property</strong>
                  <p className="text-ink-muted">CogniHire retains exclusive ownership of the software, algorithm models, user interfaces, documentation, trademarks, and system architecture.</p>
                </div>
              </div>
            </section>

            {/* 6. Subscription & Billing */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">6. Subscription, Telephony Usage & Payment Terms</h2>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">
                Platform access is provided on a subscription basis (monthly or annual billing) with allocated resume parsing and voice screening minute allowances. Telephony minutes consumed in excess of plan allotments are billed at stated per-minute rates. Fees are non-refundable except as expressly provided in written enterprise service agreements.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">7. Limitation of Liability</h2>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">
                To the fullest extent permitted by applicable law, in no event shall CogniHire Technologies Inc. or its affiliates be liable for indirect, punitive, special, incidental, or consequential damages (including loss of profits, hiring delays, business interruption, or candidate disputes) arising out of or in connection with the Service. CogniHire&apos;s aggregate liability shall not exceed the total fees paid by Customer during the twelve (12) months preceding the incident.
              </p>
            </section>

            {/* 8. Governing Law */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-forest-deep">8. Governing Law and Jurisdiction</h2>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles. Any legal suit or proceeding shall be instituted exclusively in the competent courts situated in Delaware.
              </p>
            </section>

            {/* 9. Contact */}
            <section className="p-6 rounded-3xl bg-mist border border-border space-y-3">
              <h2 className="text-lg font-bold text-forest-deep flex items-center gap-2">
                <Mail className="w-5 h-5 text-forest" />
                9. Commercial and Legal Contacts
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                For contract inquiries, enterprise master service agreements (MSAs), or legal notices under these Terms, please contact:
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
