import { WorkflowNodeData } from '../types';

export const WORKFLOW_NODES: WorkflowNodeData[] = [
  {
    id: 'stage-1',
    stageNumber: 1,
    title: 'Create a Job',
    category: 'recruiter',
    categoryLabel: 'Recruiter Setup',
    shortDescription: 'Define requirements, skills, and screening criteria.',
    bullets: [
      'Define job title, core qualifications & experience targets',
      'Specify critical must-have vs nice-to-have technical skills',
      'Configure structured screening questions & evaluation rubric'
    ],
    icon: 'Briefcase',
    details: {
      description: 'The recruiter sets up a hiring campaign by uploading or pasting a job description, refining core qualifications, and setting screening guardrails.',
      whatAiDoes: 'Parses the job description to suggest standardized skill taxonomies, identifies implicit requirements, and assists in generating job-relevant screening questions.',
      whatRecruiterControls: 'Recruiters have 100% control over mandatory criteria, required years of experience, scoring weights, and whether AI voice screening is enabled.',
      inputs: ['Raw Job Description document or text', 'Hiring Manager criteria & constraints', 'Target location & seniority levels'],
      outputs: ['Normalized Job Rubric', 'Weighted Evaluation Matrix', 'Custom Candidate Question Set'],
      exampleResult: 'Senior Frontend Engineer rubric configured: 5+ yrs React/TypeScript, Web Performance, System Design screening questions.'
    }
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    title: 'Resume Intake',
    category: 'ai',
    categoryLabel: 'Document Processing',
    shortDescription: 'Process incoming resumes and extract structured profiles.',
    bullets: [
      'Bulk ingest PDF, Word, and text resumes from email or ATS',
      'Normalize candidate work history, education & credentials',
      'Anonymize non-job-relevant demographic identifiers'
    ],
    icon: 'FileUp',
    details: {
      description: 'Incoming candidate resumes from multiple sources are securely ingested, parsed, and converted into structured, standardized candidate profiles.',
      whatAiDoes: 'Extracts career timelines, project impact, tool proficiencies, and educational background while stripping unstructured formatting and noise.',
      whatRecruiterControls: 'Data retention periods, file intake limits, custom resume parsing tags, and compliance anonymization settings.',
      inputs: ['Multi-format candidate resumes (PDF, DOCX)', 'Application timestamps', 'Source channel identifiers'],
      outputs: ['Structured Candidate Profile JSON', 'Timeline breakdown', 'Normalized skill vectors'],
      exampleResult: 'Extracted 42 candidate profiles from inbound batch with verified chronology and standardized skill tags.'
    }
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    title: 'AI Resume Matching',
    category: 'ai',
    categoryLabel: 'Resume Intelligence',
    shortDescription: 'Evaluate alignment and produce evidence-backed match score.',
    bullets: [
      'Compare qualifications directly against configured job rubric',
      'Generate explainable resume match score out of 10',
      'Highlight concrete evidence and pinpoint missing requirements'
    ],
    icon: 'Sparkles',
    details: {
      description: 'Algorithms evaluate the structured candidate profile against the job rubric, measuring semantic alignment rather than simple keyword matching.',
      whatAiDoes: 'Evaluates depth of experience, tool context, project scale, and flags both matching evidence and unverified qualifications.',
      whatRecruiterControls: 'Minimum match threshold to trigger outreach, score weighting across dimensions, and custom override rules.',
      inputs: ['Structured Candidate Profile', 'Job Rubric & Evaluation Matrix'],
      outputs: ['Resume Match Score (e.g., 8.4/10)', 'Evidence excerpts linked to resume lines', 'List of unverified / missing criteria'],
      exampleResult: 'Candidate Alex Morgan matched 8.4/10: Verified TypeScript & Next.js leadership, unverified GraphQL production scale.'
    }
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    title: 'Candidate Engagement',
    category: 'candidate',
    categoryLabel: 'Multi-Channel Outreach',
    shortDescription: 'Deliver personalized invitations via Email or WhatsApp.',
    bullets: [
      'Automated dispatch across configured Email or WhatsApp channels',
      'Clear explanation of the transparent AI screening process',
      'Secure, one-click candidate portal response link'
    ],
    icon: 'Send',
    details: {
      description: 'Qualified candidates receive a respectful, personalized outreach explaining the role and inviting them to an initial conversational screening.',
      whatAiDoes: 'Drafts role-specific context, formats invitation links, and manages conversational messaging flow according to campaign settings.',
      whatRecruiterControls: 'Message templates, sending schedules, sender identity, reminder cadence (e.g. 24h/48h), and human escalation contacts.',
      inputs: ['Screened candidate contact details', 'Recruiter-approved invitation templates'],
      outputs: ['Tracked invitation dispatch logs', 'Candidate engagement receipt', 'Secure portal session token'],
      exampleResult: 'Sent personalized invitation to Alex Morgan via Email with clear explanation of a 12-minute conversational screening.'
    }
  },
  {
    id: 'stage-5',
    stageNumber: 5,
    title: 'Candidate Response',
    category: 'decision',
    categoryLabel: 'Three-Way Decision Branch',
    shortDescription: 'Candidate chooses how they wish to proceed.',
    bullets: [
      'Interested: Proceeds directly to consent & interview setup',
      'Declined: Recorded respectfully and closes workflow',
      'No Response: Follow-up reminders before polite timeout'
    ],
    icon: 'GitFork',
    details: {
      description: 'The candidate reviews the invitation and decides whether they want to proceed with the screening interview or speak directly with a human.',
      whatAiDoes: 'Listens for responses, parses opt-ins or opt-outs, and handles automated reminder triggers without human spamming.',
      whatRecruiterControls: 'Number of reminder attempts (default 2), timeout duration (default 5 days), and human contact routing.',
      inputs: ['Candidate web link interaction', 'WhatsApp / SMS quick reply actions'],
      outputs: ['Branch status: Interested, Declined, or No Response', 'Response timestamp and preferences'],
      exampleResult: 'Candidate selected "Interested" and chose their preferred weekend screening time slot.'
    },
    branches: [
      {
        id: 'branch-interested',
        label: 'Interested',
        type: 'success',
        description: 'Candidate agrees to proceed. Continues immediately to Stage 6 (Consent & Scheduling).',
        nextStep: 'Stage 6'
      },
      {
        id: 'branch-declined',
        label: 'Declined',
        type: 'neutral',
        description: 'Candidate respectfully declines or withdraws. System logs feedback and closes the campaign path.',
        nextStep: 'Closed'
      },
      {
        id: 'branch-no-response',
        label: 'No Response',
        type: 'warning',
        description: 'Automated polite reminder after 24h & 48h. If expired, status is marked "No Response" (never treated as rejection).',
        nextStep: 'Expired'
      }
    ]
  },
  {
    id: 'stage-6',
    stageNumber: 6,
    title: 'Consent & Scheduling',
    category: 'recruiter',
    categoryLabel: 'Compliance & Preferences',
    shortDescription: 'Full disclosure, recording consent & time selection.',
    bullets: [
      'Transparent disclosure that the interview is AI-conducted',
      'Explicit recording and transcription consent verification',
      'Self-serve time slot booking or immediate on-demand start'
    ],
    icon: 'ShieldCheck',
    details: {
      description: 'Candidates are fully informed about how their data and voice responses are processed, ensuring full ethical transparency and compliance.',
      whatAiDoes: 'Verifies affirmative consent checkboxes, records audit trail timestamp, and synchronizes calendar availability.',
      whatRecruiterControls: 'Consent disclosure copy, privacy policy links, option to request a live human recruiter at any point.',
      inputs: ['Candidate verified contact', 'Consent agreement confirmation', 'Candidate calendar preference'],
      outputs: ['Audited consent record', 'Scheduled call session booking ID', 'Pre-call prep checklist sent to candidate'],
      exampleResult: 'Consent logged at 14:22 UTC with opt-in for audio transcript; scheduled for 16:00 UTC.'
    }
  },
  {
    id: 'stage-7',
    stageNumber: 7,
    title: 'AI Voice Interview',
    category: 'ai',
    categoryLabel: 'Voice Screening',
    shortDescription: 'Conversational, natural screening with voice agent.',
    bullets: [
      'Natural, professional voice conversation tailored to role',
      'Dynamic follow-ups based on candidate-provided answers',
      'Robust exception handling for disconnects or rescheduling'
    ],
    icon: 'Mic',
    details: {
      description: 'A conversational AI interviewer initiates the phone or browser audio call, asking standardized yet context-aware screening questions.',
      whatAiDoes: 'Conducts a real-time voice dialogue, asks follow-up probing questions when answers are brief, and transcribes responses in real time.',
      whatRecruiterControls: 'Voice persona, speech pace, interview length (e.g. 10-15 mins), specific required technical or situational questions.',
      inputs: ['Candidate audio stream', 'Dynamic interview conversation graph', 'Job screening criteria'],
      outputs: ['Audio recording (authorized)', 'Timestamped transcript', 'Sentiment and pacing telemetry'],
      exampleResult: '12-minute screening completed covering frontend architecture, state management, and team collaboration.'
    },
    exceptionNotes: [
      'No Answer: Triggers polite SMS/Email to reschedule at candidate convenience (max 2 attempts)',
      'Technical Failure: Automatic audio session recovery or fallback phone dial-in',
      'Candidate Requests Human: Immediately halts AI screening and alerts recruiter dashboard'
    ]
  },
  {
    id: 'stage-8',
    stageNumber: 8,
    title: 'Interview Evaluation',
    category: 'ai',
    categoryLabel: 'Evidence Analysis',
    shortDescription: 'Transcript analysis against predefined rubric.',
    bullets: [
      'Independent interview score out of 10 based on rubric',
      'Direct citations linking strengths & follow-up areas to quotes',
      'Explicitly highlights uncertainties or unverified claims'
    ],
    icon: 'CheckSquare',
    details: {
      description: 'The transcript is analyzed against the predefined rubric to extract demonstrated competency, problem-solving depth, and communication clarity.',
      whatAiDoes: 'Maps transcript segments to required competencies, extracts verbatim quotes as evidence, and flags areas requiring human follow-up.',
      whatRecruiterControls: 'Scoring rubric weights, minimum qualification thresholds, and custom evaluation guidelines.',
      inputs: ['Full interview transcript', 'Evaluation rubric', 'Candidate responses'],
      outputs: ['Interview Score (e.g., 7.8/10)', 'Evidence quotes', 'Recommended follow-up questions for round 2'],
      exampleResult: 'Interview Score 7.8/10: Strong system design explanation, follow-up recommended on team mentoring scale.'
    }
  },
  {
    id: 'stage-9',
    stageNumber: 9,
    title: 'Recruiter Review',
    category: 'recruiter',
    categoryLabel: 'Human Decision',
    shortDescription: 'Unified candidate profile & final human hiring decision.',
    bullets: [
      'Side-by-side view of Resume Score (8.4) & Interview Score (7.8)',
      'Read transcript highlights or listen to verified audio snippets',
      'Final decision in recruiter hands: Shortlist, Follow Up, or Reject'
    ],
    icon: 'UserCheck',
    details: {
      description: 'The recruiter accesses an organized, evidence-backed candidate dossier with separate resume match and interview evaluation metrics.',
      whatAiDoes: 'Presents summarized evidence, suggested interview deep-dives, and candidate comparison sidebars.',
      whatRecruiterControls: 'The recruiter retains 100% authority for the final decision. AI never auto-rejects candidates without human review.',
      inputs: ['Resume Match data', 'Interview Transcript & Audio', 'Scorecard Evaluation'],
      outputs: ['Recruiter Decision: Shortlist / Follow Up / Human Interview / Reject', 'Feedback notes', 'Exportable client dossier'],
      exampleResult: 'Recruiter shortlisted Alex Morgan for Hiring Manager interview; shared 1-page structured scorecard.'
    }
  }
];
