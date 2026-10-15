export interface WorkflowNodeData {
  id: string;
  stageNumber: number;
  title: string;
  category: 'recruiter' | 'ai' | 'candidate' | 'decision' | 'exception';
  categoryLabel: string;
  shortDescription: string;
  bullets: string[];
  icon: string;
  details: {
    description: string;
    whatAiDoes: string;
    whatRecruiterControls: string;
    inputs: string[];
    outputs: string[];
    exampleResult: string;
  };
  branches?: {
    id: string;
    label: string;
    type: 'success' | 'warning' | 'neutral';
    description: string;
    nextStep?: string;
  }[];
  exceptionNotes?: string[];
}

export interface RoiInputs {
  resumesPerMonth: number;
  reviewMinutesPerResume: number;
  requiresHandlingPercent: number; // as percentage, e.g. 35
  additionalHandlingMinutes: number;
  recruiterHourlyCost: number;
  automationRatePercent: number; // as percentage, e.g. 65
  platformCostMonthly: number;
  aiCommCostMonthly: number;
  additionalHumanReviewCostMonthly: number;
}

export interface RoiResults {
  currentMonthlyHours: number;
  monthlyHoursSaved: number;
  monthlyLaborSavings: number;
  totalMonthlyIncrementalCost: number;
  netMonthlySavings: number;
  netAnnualSavings: number;
  netRoiPercent: number | null;
}

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  exchangeRateMultiplier: number; // relative to INR base defaults
  defaultHourlyCost: number;
  defaultPlatformCost: number;
  defaultAiCommCost: number;
  defaultAdditionalReviewCost: number;
}

export interface CandidateScorecardData {
  candidateName: string;
  role: string;
  experienceYears: number;
  location: string;
  resumeScore: number;
  interviewScore: number;
  screeningDate: string;
  skillsEvidence: {
    skill: string;
    match: 'verified' | 'partial' | 'unverified';
    source: string;
    quoteOrFact: string;
  }[];
  interviewStrengths: string[];
  areasToExplore: string[];
  interviewSummary: string;
  recruiterNotes: string;
  audioSampleLength: string;
}
