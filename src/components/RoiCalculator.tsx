import React, { useState, useMemo } from 'react';
import { CurrencyCode, CurrencyConfig } from '../types';
import {
  Calculator,
  ArrowRight,
  RotateCcw,
  Clock,
  Coins,
  ChevronDown,
  ChevronUp,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    exchangeRateMultiplier: 1,
    defaultHourlyCost: 45,
    defaultPlatformCost: 249,
    defaultAiCommCost: 110,
    defaultAdditionalReviewCost: 60,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    exchangeRateMultiplier: 0.92,
    defaultHourlyCost: 42,
    defaultPlatformCost: 239,
    defaultAiCommCost: 100,
    defaultAdditionalReviewCost: 55,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    exchangeRateMultiplier: 0.79,
    defaultHourlyCost: 38,
    defaultPlatformCost: 219,
    defaultAiCommCost: 90,
    defaultAdditionalReviewCost: 50,
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    exchangeRateMultiplier: 83,
    defaultHourlyCost: 850,
    defaultPlatformCost: 14999,
    defaultAiCommCost: 5500,
    defaultAdditionalReviewCost: 3500,
  },
};

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  // USD is shown first and selected by default
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Primary Inputs based on user spec:
  // Starts with 1,000 resumes (scales to 1,500, 3,000)
  // 20 hrs per week for manual screening & calls/follow-ups
  const [resumesPerMonth, setResumesPerMonth] = useState<number>(1000);
  const [weeklyScreeningHours, setWeeklyScreeningHours] = useState<number>(20);
  const [recruiterHourlyCost, setRecruiterHourlyCost] = useState<number>(45);

  // Advanced toggles
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [automationRatePercent, setAutomationRatePercent] = useState<number>(75); // 75% efficiency
  const [platformCostMonthly, setPlatformCostMonthly] = useState<number>(249);
  const [aiCommCostMonthly, setAiCommCostMonthly] = useState<number>(110);

  const handleCurrencyChange = (newCurr: CurrencyCode) => {
    setCurrency(newCurr);
    const cfg = CURRENCIES[newCurr];
    setRecruiterHourlyCost(cfg.defaultHourlyCost);
    setPlatformCostMonthly(cfg.defaultPlatformCost);
    setAiCommCostMonthly(cfg.defaultAiCommCost);
  };

  const handleResetDefaults = () => {
    const cfg = CURRENCIES[currency];
    setResumesPerMonth(1000);
    setWeeklyScreeningHours(20);
    setRecruiterHourlyCost(cfg.defaultHourlyCost);
    setAutomationRatePercent(75);
    setPlatformCostMonthly(cfg.defaultPlatformCost);
    setAiCommCostMonthly(cfg.defaultAiCommCost);
  };

  // Calculations factoring in high inbound volume scale:
  // 1,000 to 3,000+ resumes generates significant manual triage savings
  const results = useMemo(() => {
    // Baseline monthly manual screening hours
    const baseMonthlyHours = weeklyScreeningHours * 4.33;

    // Volume scaling factor: at 1,000 resumes = 1.0x, 1,500 = 1.25x, 3,000 = 1.65x
    const volumeMultiplier = Math.max(1, 1 + ((resumesPerMonth - 1000) / 3000));
    
    // Monthly hours saved with CogniHire
    const effectiveHoursSaved = Math.round(
      baseMonthlyHours * (automationRatePercent / 100) * volumeMultiplier
    );

    const grossLaborValueMonthly = effectiveHoursSaved * recruiterHourlyCost;
    const totalCosts = platformCostMonthly + aiCommCostMonthly;
    const netMonthly = Math.max(0, grossLaborValueMonthly - totalCosts);
    const annualNet = netMonthly * 12;
    const roiMultiplier = totalCosts > 0 ? (grossLaborValueMonthly / totalCosts).toFixed(1) : '5.5';

    return {
      monthlyHours: Math.round(baseMonthlyHours),
      hoursSaved: effectiveHoursSaved,
      grossLaborValueMonthly,
      totalCosts,
      netMonthly,
      annualNet,
      roiMultiplier,
    };
  }, [
    resumesPerMonth,
    weeklyScreeningHours,
    recruiterHourlyCost,
    automationRatePercent,
    platformCostMonthly,
    aiCommCostMonthly,
  ]);

  const curr = CURRENCIES[currency];
  const formatMoney = (val: number) => `${curr.symbol}${val.toLocaleString()}`;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-mist border-b border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-forest text-xs font-semibold uppercase tracking-wider mb-3 shadow-subtle">
            <Calculator className="w-3.5 h-3.5 text-sage" />
            <span>Interactive ROI & Capacity Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest-deep tracking-tight">
            See How Much You Save With CogniHire
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-ink-muted leading-relaxed">
            Eliminate repetitive resume parsing, manual outreach, and initial phone screenings. Calculate your team's reclaimed capacity and annual savings.
          </p>
        </div>

        {/* Currency Selector Bar (USD first) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-border shadow-subtle">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-ink-muted pl-2">Display Currency:</span>
            <div className="flex items-center gap-1 bg-mist p-1 rounded-xl border border-border">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
                <button
                  key={cCode}
                  onClick={() => handleCurrencyChange(cCode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currency === cCode
                      ? 'bg-forest text-white shadow-sm'
                      : 'text-ink-muted hover:text-forest-deep'
                  }`}
                >
                  {CURRENCIES[cCode].symbol} {cCode}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-sage hidden sm:inline font-medium">
              *Model based on automated resume parsing, voice screening & follow-ups
            </span>
            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-ink-muted hover:text-forest hover:bg-mist transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Input Sliders & Presets (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-subtle flex flex-col justify-between space-y-7">
            <div className="space-y-7">
              {/* Slider 1: Monthly Inbound Resumes with Presets (1000, 1500, 3000) */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="font-bold text-forest-deep text-sm block">
                      Inbound Resumes per Month
                    </label>
                    <span className="text-xs text-ink-muted">
                      Applications processed across active job openings
                    </span>
                  </div>
                  <span className="font-bold font-mono text-forest bg-mist px-3 py-1 rounded-xl border border-border text-sm">
                    {resumesPerMonth.toLocaleString()} resumes
                  </span>
                </div>

                {/* Preset Fast Selector Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] text-ink-muted font-medium">Quick Presets:</span>
                  {[1000, 1500, 3000, 5000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setResumesPerMonth(preset)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                        resumesPerMonth === preset
                          ? 'bg-forest text-white border-forest shadow-sm'
                          : 'bg-mist/70 text-forest-deep border-border hover:bg-mist'
                      }`}
                    >
                      {preset.toLocaleString()}
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="250"
                  max="5000"
                  step="50"
                  value={resumesPerMonth}
                  onChange={(e) => setResumesPerMonth(Number(e.target.value))}
                  className="w-full accent-forest cursor-pointer h-2 bg-mist rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-ink-muted font-medium">
                  <span>250</span>
                  <span className="font-semibold text-forest">1,000 (Default)</span>
                  <span>1,500</span>
                  <span>3,000</span>
                  <span>5,000+</span>
                </div>
              </div>

              {/* Slider 2: Weekly Manual Screening & Calls/Follow-ups (Default: 20 hrs/week) */}
              <div className="space-y-3 pt-2 border-t border-border/60">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="font-bold text-forest-deep text-sm block">
                      Manual Screening & Follow-Up Calls
                    </label>
                    <span className="text-xs text-ink-muted">
                      Weekly hours spent reviewing resumes, candidate outreach & phone qualification
                    </span>
                  </div>
                  <span className="font-bold font-mono text-forest bg-mist px-3 py-1 rounded-xl border border-border text-sm">
                    {weeklyScreeningHours} hrs / week
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={weeklyScreeningHours}
                  onChange={(e) => setWeeklyScreeningHours(Number(e.target.value))}
                  className="w-full accent-forest cursor-pointer h-2 bg-mist rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-ink-muted font-medium">
                  <span>5 hrs (light)</span>
                  <span className="font-semibold text-forest">20 hrs (Typical Team Default)</span>
                  <span>35 hrs</span>
                  <span>50 hrs (high volume)</span>
                </div>
              </div>

              {/* Slider 3: Recruiter Hourly Cost */}
              <div className="space-y-3 pt-2 border-t border-border/60">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="font-bold text-forest-deep text-sm block">
                      Recruiter Loaded Hourly Rate
                    </label>
                    <span className="text-xs text-ink-muted">
                      Base salary + benefits, or agency billing rate
                    </span>
                  </div>
                  <span className="font-bold font-mono text-forest bg-mist px-3 py-1 rounded-xl border border-border text-sm">
                    {formatMoney(recruiterHourlyCost)} / hr
                  </span>
                </div>

                <input
                  type="range"
                  min={currency === 'INR' ? 300 : 20}
                  max={currency === 'INR' ? 3000 : 120}
                  step={currency === 'INR' ? 50 : 5}
                  value={recruiterHourlyCost}
                  onChange={(e) => setRecruiterHourlyCost(Number(e.target.value))}
                  className="w-full accent-forest cursor-pointer h-2 bg-mist rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-ink-muted font-medium">
                  <span>{formatMoney(currency === 'INR' ? 300 : 20)}/hr</span>
                  <span className="font-semibold text-forest">
                    {formatMoney(CURRENCIES[currency].defaultHourlyCost)}/hr (Avg)
                  </span>
                  <span>{formatMoney(currency === 'INR' ? 3000 : 120)}/hr</span>
                </div>
              </div>
            </div>

            {/* Advanced Model Settings Accordion */}
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center justify-between text-xs font-semibold text-forest-deep hover:text-forest transition-colors py-1"
              >
                <span>Customize Automation & Telephony Costs</span>
                {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showAdvanced && (
                <div className="mt-4 p-4 rounded-2xl bg-mist border border-border space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-1 text-[11px] font-semibold text-forest-deep">
                      <span>Screening & Call Work Automated by CogniHire</span>
                      <span className="font-mono text-forest font-bold">{automationRatePercent}%</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="90"
                      step="5"
                      value={automationRatePercent}
                      onChange={(e) => setAutomationRatePercent(Number(e.target.value))}
                      className="w-full accent-forest cursor-pointer h-1.5"
                    />
                    <span className="text-[10px] text-ink-muted block mt-1">
                      75% is benchmarked across resumes filtered and autonomous voice phone calls completed.
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px] pt-2 border-t border-border">
                    <div>
                      <span className="text-ink-muted block mb-1">Platform Subscription</span>
                      <div className="flex items-center gap-1 font-mono font-bold bg-white p-2 rounded-lg border border-border">
                        <span>{curr.symbol}</span>
                        <input
                          type="number"
                          value={platformCostMonthly}
                          onChange={(e) => setPlatformCostMonthly(Number(e.target.value))}
                          className="w-full bg-transparent outline-none text-forest-deep"
                        />
                        <span className="text-[10px] text-ink-muted">/mo</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-ink-muted block mb-1">AI Voice Telephony</span>
                      <div className="flex items-center gap-1 font-mono font-bold bg-white p-2 rounded-lg border border-border">
                        <span>{curr.symbol}</span>
                        <input
                          type="number"
                          value={aiCommCostMonthly}
                          onChange={(e) => setAiCommCostMonthly(Number(e.target.value))}
                          className="w-full bg-transparent outline-none text-forest-deep"
                        />
                        <span className="text-[10px] text-ink-muted">/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Big Impact Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-forest-dark text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-forest-border flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-mint flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Your Estimated Savings
                </span>
                <span className="text-xs bg-mint/15 text-mint border border-mint/30 px-2.5 py-0.5 rounded-full font-bold">
                  {results.roiMultiplier}x Net ROI
                </span>
              </div>

              {/* Metric 1: Monthly Hours Saved */}
              <div className="mb-6 pb-6 border-b border-forest-border/80">
                <div className="flex items-center justify-between text-xs text-sage-light mb-1">
                  <span>Monthly Recruiter Hours Reclaimed</span>
                  <span className="text-mint font-semibold">~{Math.round(results.hoursSaved / 40 * 10) / 10} full weeks</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                    ~{results.hoursSaved} hrs
                  </span>
                  <span className="text-xs text-sage-light">/ month</span>
                </div>
                <p className="text-[11px] text-sage-light mt-2 leading-relaxed">
                  Cuts manual screening, outreach, and phone interviews by {automationRatePercent}% for {resumesPerMonth.toLocaleString()} candidate profiles.
                </p>
              </div>

              {/* Metric 2: Net Annual Value */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-sage-light mb-1">
                  <span>Estimated Net Annual Labor Savings</span>
                  <span className="text-mint font-semibold">Net of Software Fees</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-mint tracking-tight">
                    {formatMoney(results.annualNet)}
                  </span>
                  <span className="text-xs text-sage-light">/ year</span>
                </div>
                <p className="text-[11px] text-sage-light mt-2 leading-relaxed">
                  Gross monthly capacity value: <span className="text-white font-mono font-medium">{formatMoney(results.grossLaborValueMonthly)}/mo</span> less platform fees ({formatMoney(results.totalCosts)}/mo).
                </p>
              </div>

              {/* Key Value Bullets */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-forest-border text-xs space-y-2">
                <div className="flex items-center gap-2 text-sage-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint shrink-0" />
                  <span>Reach qualified applicants within <strong>15 minutes</strong> of applying</span>
                </div>
                <div className="flex items-center gap-2 text-sage-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint shrink-0" />
                  <span>Zero manual phone tags or scheduling follow-up delays</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenDemo}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-mint text-forest-dark font-bold text-sm hover:bg-mint-light transition-all shadow-md group"
              >
                <span>Book a Demo to Verify for Your Pipeline</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="mt-2.5 text-[10px] text-center text-sage-light">
                No credit card required. Full custom capacity and volume modeling on live roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
