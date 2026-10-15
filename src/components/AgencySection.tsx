import React, { useState } from 'react';
import {
  Building2,
  FolderGit2,
  FileSpreadsheet,
  Users2,
  ArrowRight,
  Briefcase,
} from 'lucide-react';

export const AgencySection: React.FC = () => {
  const [activeClient, setActiveClient] = useState<'fintech' | 'health'>('fintech');

  const clientPipelines = {
    fintech: {
      clientName: 'Apex FinTech Corp',
      mandate: 'Senior Backend Engineer (Go / Distributed Systems)',
      pipelineCount: '48 resumes ingested',
      screened: '18 voice interviews completed',
      shortlisted: '5 candidates presented to Hiring Manager',
      status: 'Active Campaign',
      avgResumeScore: '8.2/10',
      avgInterviewScore: '7.6/10',
    },
    health: {
      clientName: 'BioHealth Cloud',
      mandate: 'Lead DevOps Engineer (Kubernetes / HIPAA)',
      pipelineCount: '34 resumes ingested',
      screened: '14 voice interviews completed',
      shortlisted: '4 candidates presented to VP Engineering',
      status: 'Client Review Stage',
      avgResumeScore: '8.0/10',
      avgInterviewScore: '7.9/10',
    },
  };

  const agencyHighlights = [
    {
      title: 'Multiple Client & Job Pipelines',
      desc: 'Keep client rubrics, brand tones, and candidate pools strictly partitioned in separate workspace environments.',
      icon: FolderGit2,
    },
    {
      title: 'Standardized Candidate Scorecards',
      desc: 'Present clients with consistent, branded dossiers featuring transcript excerpts and objective qualification scores.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Real-Time Candidate Response Tracking',
      desc: 'Monitor candidate engagement across WhatsApp and email so recruiters know who is engaged without manual pinging.',
      icon: Users2,
    },
    {
      title: 'Client-Ready Shortlist Reports',
      desc: 'Generate shareable candidate summaries with audio quote excerpts and recruiter annotations for hiring managers.',
      icon: Briefcase,
    },
  ];

  const current = clientPipelines[activeClient];

  return (
    <section id="agencies" className="py-20 md:py-28 bg-mist border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Staffing & Search Partner Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            More Organized Screening Across Every Client Mandate.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            CogniHire is designed to help recruitment agencies manage candidate screening across
            roles, coordinate follow-ups, and prepare structured shortlists for their clients.
          </p>
        </div>

        {/* Agency Multi-Client Pipeline Visualization */}
        <div className="bg-forest-dark text-white rounded-3xl p-6 sm:p-10 border border-forest-border shadow-deep mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-forest-border gap-4">
            <div>
              <span className="text-[11px] font-mono text-mint uppercase tracking-wider font-semibold block mb-1">
                Multi-Tenant Agency Architecture Preview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Parallel Client Mandate Workflows
              </h3>
            </div>

            {/* Client Tab Switcher */}
            <div className="flex items-center gap-2 bg-forest-surface p-1 rounded-xl border border-forest-border">
              <button
                onClick={() => setActiveClient('fintech')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeClient === 'fintech'
                    ? 'bg-forest text-mint shadow-sm'
                    : 'text-sage-light hover:text-white'
                }`}
              >
                Client A: Apex FinTech
              </button>
              <button
                onClick={() => setActiveClient('health')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeClient === 'health'
                    ? 'bg-forest text-mint shadow-sm'
                    : 'text-sage-light hover:text-white'
                }`}
              >
                Client B: BioHealth
              </button>
            </div>
          </div>

          {/* Interactive Pipeline Card */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Client Mandate Info */}
            <div className="lg:col-span-5 bg-forest-surface p-6 rounded-2xl border border-forest-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-mint uppercase tracking-wider">
                  {current.clientName}
                </span>
                <span className="text-[10px] bg-mint/20 text-mint border border-mint/30 px-2 py-0.5 rounded-full font-medium">
                  {current.status}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {current.mandate}
              </h4>
              <p className="text-xs text-sage-light leading-relaxed mb-6">
                Custom rubric applied: Focus on concurrent processing, zero-downtime deployments, and architectural communication.
              </p>

              {/* Pipeline funnel numbers */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-forest-border/60">
                  <span className="text-sage-light">Candidate Ingestion:</span>
                  <span className="font-mono font-semibold text-white">{current.pipelineCount}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-forest-border/60">
                  <span className="text-sage-light">AI Voice Screened:</span>
                  <span className="font-mono font-semibold text-mint">{current.screened}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-sage-light">Client Shortlist Ready:</span>
                  <span className="font-mono font-bold text-forest-deep bg-mint px-2 py-0.5 rounded">
                    {current.shortlisted}
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Workflow arrow */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-10 h-10 rounded-full bg-forest-surface border border-forest-border flex items-center justify-center text-mint">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Right: Client Deliverable Preview */}
            <div className="lg:col-span-6 bg-forest-surface p-6 rounded-2xl border border-forest-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-mint uppercase tracking-wider">
                  Client Deliverable Dossier
                </span>
                <span className="text-[10px] font-mono text-sage-light">
                  Standardized Agency Output
                </span>
              </div>

              <div className="bg-forest-dark p-4 rounded-xl border border-forest-border space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">5 Verified Candidates</h5>
                    <span className="text-[11px] text-sage-light">
                      Each includes separate resume & interview scorecards
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-mint block">
                      Avg: {current.avgResumeScore} Match
                    </span>
                    <span className="text-[10px] font-mono text-sage-light">
                      {current.avgInterviewScore} Interview
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-forest-surface/70 border border-forest-border text-[11px] text-sage-light">
                  <span className="text-mint font-semibold">Recruiter Executive Note:</span> "All 5 candidates confirmed salary band alignment and demonstrated senior architectural depth during structured voice screening."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Value Props Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-border shadow-subtle hover:border-forest/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-mist text-forest flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-forest-deep mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
