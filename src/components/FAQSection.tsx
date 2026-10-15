import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category: 'Product' | 'Screening & AI' | 'Agencies & ROI' | 'Ethics & Privacy';
}

export const FAQSection: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      q: 'What is CogniHire?',
      a: 'CogniHire is an AI-powered recruitment screening and candidate intelligence platform designed for staffing firms, recruitment agencies, and growing companies. It connects job setup, resume matching, automated candidate outreach, conversational voice screening, and evidence-backed evaluation into a unified, transparent workflow.',
      category: 'Product',
    },
    {
      q: 'How does AI resume matching work?',
      a: 'CogniHire parses resumes to evaluate how candidate experience aligns semantically with your configured job rubric. Rather than simple keyword counting, it measures context, career depth, and verified skills, producing an explainable match score out of 10 backed by specific resume citations and highlighting any unverified requirements.',
      category: 'Screening & AI',
    },
    {
      q: 'Can CogniHire conduct initial voice screening?',
      a: 'Yes. After candidate disclosure and affirmative recording consent, CogniHire can conduct an interactive 10–15 minute conversational audio call. The AI interviewer follows your role-specific screening rubric, asks dynamic follow-up questions, and records a timestamped transcript for recruiter audit.',
      category: 'Screening & AI',
    },
    {
      q: 'How is the interview score calculated?',
      a: 'The interview score (out of 10) is evaluated independently from the resume match score. It analyzes verbatim candidate responses against predefined rubric benchmarks. Every strength, deficiency, or follow-up recommendation is linked directly to transcript quotes, with explicit flags where information was incomplete.',
      category: 'Screening & AI',
    },
    {
      q: 'Can candidates request human contact?',
      a: 'Absolutely. Candidates can opt out of automated screening at any point—during initial outreach, before scheduling, or during the voice interview itself. Selecting "Request Human Contact" immediately pauses automated flows and alerts the recruiter to initiate personal outreach.',
      category: 'Ethics & Privacy',
    },
    {
      q: 'How does CogniHire help recruitment agencies?',
      a: 'Agencies use CogniHire to manage candidate screening across multiple client mandates simultaneously. It provides standardized, client-ready candidate scorecards with audio snippets, response tracking across channels, and campaign-level operational metrics.',
      category: 'Agencies & ROI',
    },
    {
      q: 'How is potential time saved estimated?',
      a: 'Time savings are estimated by comparing the hours spent on manual resume review and phone screening against an AI-assisted baseline. The formula calculates (Resumes × Review Time + Coordination Overhead) × Automation Rate. You can customize these variables in our interactive ROI calculator.',
      category: 'Agencies & ROI',
    },
    {
      q: 'Does the ROI calculator guarantee savings?',
      a: 'No. The ROI calculator is a planning model based on user-supplied parameters and illustrative default figures. Time saved does not automatically equal cash saved; it represents recruiter capacity that can be redirected toward high-value client relationships and candidate closing.',
      category: 'Agencies & ROI',
    },
    {
      q: 'Does CogniHire automatically reject candidates?',
      a: 'No. CogniHire is designed around the core principle of human oversight. The system organizes evidence and scores candidate alignment, but all shortlisting, follow-up, and rejection decisions remain strictly with the human recruiter.',
      category: 'Ethics & Privacy',
    },
    {
      q: 'Which communication channels are supported?',
      a: 'Candidate invitations and status notifications are supported across Email and WhatsApp. Supported channels depend on your organization’s configured deployment, business messaging credentials, and regional telecommunication compliance.',
      category: 'Product',
    },
    {
      q: 'How can I book a demo?',
      a: 'You can click any "Book a Demo" button on this page to schedule a 20-minute tailored walkthrough. We will review your current candidate volume, demonstrate the voice screening engine, and configure a custom job rubric.',
      category: 'Product',
    },
  ];

  const categories = ['All', 'Product', 'Screening & AI', 'Agencies & ROI', 'Ethics & Privacy'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            Transparent Answers to Common Questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            Everything you need to know about how CogniHire operates, our AI voice screening,
            and our commitment to human recruiter authority.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. voice interview, ROI, consent)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white pl-11 pr-4 py-3 rounded-2xl border border-border text-sm text-forest-deep placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-forest text-white shadow-sm'
                    : 'bg-white text-ink-muted hover:text-forest-deep border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-border shadow-subtle overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-forest-deep text-sm sm:text-base group-hover:text-forest transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-forest/10 text-forest' : 'text-ink-muted bg-mist'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-border/50 bg-mist/60">
                    <p>{faq.a}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-sage-dark">
                      <span>Category: {faq.category}</span>
                      {faq.q.includes('demo') && (
                        <button
                          onClick={onOpenDemo}
                          className="font-bold text-forest hover:underline"
                        >
                          Book demo now →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-border text-ink-muted text-sm">
              No questions found matching your search term.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
