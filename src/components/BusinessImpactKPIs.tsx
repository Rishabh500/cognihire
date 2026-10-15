import React from 'react';
import { Clock, TrendingDown, CheckCircle2, UserCheck, BarChart3, Info } from 'lucide-react';

export const BusinessImpactKPIs: React.FC = () => {
  const kpis = [
    {
      id: 'kpi-1',
      title: 'Recruiter Hours Saved',
      metric: '~48 hrs',
      metricSub: 'per recruiter / month',
      category: 'Capacity Optimization',
      comparison: 'Manual: 72h vs. CogniHire: 24h',
      description:
        'Estimated monthly hours reclaimed by automating initial resume filtering, invitation chasing, and first-round screening calls.',
      note: 'Based on 200 resumes/mo with 8m manual review vs. AI screening + 5m human audit.',
      icon: Clock,
    },
    {
      id: 'kpi-2',
      title: 'Cost per Screened Candidate',
      metric: '₹340 vs ₹1,120',
      metricSub: 'estimated cost comparison',
      category: 'Unit Economics',
      comparison: '70% lower screening spend',
      description:
        'Compares manual screening labor against CogniHire platform, AI telephony minutes, and human verification sign-off.',
      note: 'Includes recruiter hourly rate prorated per screen + telephony + 5m human sign-off.',
      icon: TrendingDown,
    },
    {
      id: 'kpi-3',
      title: 'Screening Completion Rate',
      metric: '74%',
      metricSub: 'of invited candidates',
      category: 'Candidate Engagement',
      comparison: '2-touch polite outreach',
      description:
        'Percentage of invited candidates who complete the conversational voice screening within the 5-day response window.',
      note: 'Delivered invitations ÷ completed interviews. Excludes bounced contacts.',
      icon: CheckCircle2,
    },
    {
      id: 'kpi-4',
      title: 'Interview-Ready Shortlist Rate',
      metric: '22%',
      metricSub: 'of screened cohort',
      category: 'Shortlist Quality',
      comparison: 'Objective job rubric',
      description:
        'Screened candidates meeting threshold requirements on both resume match and live conversational interview.',
      note: 'Pre-qualified candidates ready for hiring manager interview round.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="business-impact" className="py-20 md:py-28 bg-white border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mist border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Screening Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-deep tracking-tight">
            Measure the Work Behind Every Shortlist.
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            CogniHire reduces repetitive screening tasks and makes screening telemetry clear and measurable.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-border rounded-full text-[11px] text-ink-muted">
            <Info className="w-3.5 h-3.5 text-sage-dark flex-shrink-0" />
            <span>Illustrative estimates modeled for standard recruitment cohorts</span>
          </div>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.id}
                className="bg-white rounded-2xl p-6 border border-border shadow-subtle hover:border-forest/30 hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sage-dark bg-mist px-2.5 py-1 rounded-md border border-border">
                      {kpi.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-mist text-forest flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-forest-deep mb-2">
                    {kpi.title}
                  </h3>

                  <div className="my-3">
                    <span className="text-3xl font-extrabold text-forest tracking-tight">
                      {kpi.metric}
                    </span>
                    <span className="block text-xs text-ink-muted font-medium mt-0.5">
                      {kpi.metricSub}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-forest-deep bg-mint/25 border border-mint/40 px-2.5 py-1 rounded-lg mb-3">
                    {kpi.comparison}
                  </div>

                  <p className="text-xs text-ink-muted leading-relaxed mb-4">
                    {kpi.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border text-[10px] text-ink-muted">
                  <span className="font-semibold text-forest-deep">Basis: </span>
                  <span>{kpi.note}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
