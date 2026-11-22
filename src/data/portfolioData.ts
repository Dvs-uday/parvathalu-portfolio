import { 
  StatItem, 
  ExpertiseItem, 
  BranchHighlight, 
  AwarenessTopic, 
  Achievement 
} from '../types';

export const PERSONAL_INFO = {
  name: "Damarla Parvathalu",
  designation: "Senior Sales Manager",
  company: "Star Health and Allied Insurance Co. Ltd.",
  tagline: "Building Trust. Protecting Lives. Growing Together.",
  secondaryTagline: "Insurance Is More Than a Policy. It's a Promise of Protection.",
  badgeText: "Senior Sales Leadership | Health Insurance | Customer Trust",
  bioHeadline: "Empowering families with financial security and delivering dependable insurance guidance.",
  aboutText: `With over 12 years of dedicated experience in health insurance and financial services, I believe health insurance is fundamentally about safeguarding dreams and giving families peace of mind in moments of vulnerability.

My journey at Star Health and Allied Insurance has been grounded in building enduring relationships, promoting transparent advisory, and assisting families with prompt cashless hospitalization support when they need it most.`,
  phone: "+91 90300 41377",
  whatsappNumber: "919030041377",
  email: "damarlap2021@gmail.com",
  secondaryEmail: "dvscloud18@gmail.com",
  formSubmitEndpoint: "https://formsubmit.co/ajax/damarlap2021@gmail.com",
  branchName: "Star Health Office — Banjara Hills, Hyderabad",
  companyFull: "Star Health and Allied Insurance Co. Ltd.",
  buildingName: "Sarada Sadan, Opp: Balaji Grand Bazaar",
  branchAddress: "Sarada Sadan, Opp: Balaji Grand Bazaar, 10-5-2/7/F/301, Road No.1, Banjara Hills, Hyderabad, Telangana - 500034",
  mapsUrl: "https://maps.google.com/?q=Star+Health+Insurance+Banjara+Hills+Road+No+1+Hyderabad",
  experienceYears: 12,
  heroPortrait: "/damarla-parvathalu.jpg",
  aboutPortrait: "/damarla-parvathalu.jpg",
  branchOfficeImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  officialLogo: "/star-health-logo.svg",
  officialLogoWhite: "/star-health-logo-white.svg"
};

export const STATS: StatItem[] = [
  {
    id: 'exp',
    value: 12,
    suffix: '+',
    label: 'Years of Experience',
    sublabel: 'Dedicated health insurance advisory & sales leadership',
    iconName: 'ShieldCheck'
  },
  {
    id: 'customers',
    value: 3000,
    suffix: '+',
    label: 'Customers Guided',
    sublabel: 'Empowered with the right policy choices',
    iconName: 'Users'
  },
  {
    id: 'families',
    value: 1000,
    suffix: '+',
    label: 'Families Protected',
    sublabel: 'Comprehensive health & medical coverage',
    iconName: 'HeartPulse'
  },
  {
    id: 'team',
    value: 100,
    suffix: '+',
    label: 'Professionals Mentored',
    sublabel: 'Successful insurance advisors nurtured',
    iconName: 'Award'
  }
];

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'health-advisory',
    title: 'Health Insurance Advisory',
    description: 'Providing tailored counsel on comprehensive family floater, individual health, senior citizen, and super top-up solutions.',
    icon: 'ShieldCheck',
    highlights: ['Comprehensive Family Floaters', 'Critical Illness & Cardiac Care', 'Senior Citizen Specialized Plans']
  },
  {
    id: 'sales-leadership',
    title: 'Sales Leadership',
    description: 'Directing high-performing sales cohorts through empathetic coaching, performance metrics, and client-centric value propositions.',
    icon: 'TrendingUp',
    highlights: ['Territory Expansion', 'Target Structuring & Execution', 'High-Trust Relationship Selling']
  },
  {
    id: 'crm',
    title: 'Customer Relationship Management',
    description: 'Nurturing multi-generational client trust with proactive policy servicing, claim navigation, and lifetime renewal support.',
    icon: 'HeartHandshake',
    highlights: ['94%+ Persistency Ratio', 'Dedicated Claim Facilitation', 'Annual Coverage Checkups']
  },
  {
    id: 'team-dev',
    title: 'Team Development & Mentorship',
    description: 'Training aspiring advisors in IRDAI compliance, product knowledge, and consultative needs-based selling techniques.',
    icon: 'Users',
    highlights: ['Advisor Onboarding Guidance', 'Skill Enhancement Workshops', 'Ethical Advisory Best Practices']
  },
  {
    id: 'business-growth',
    title: 'Business Growth & Branch Strategy',
    description: 'Scaling branch retail and group portfolios while maintaining underwriting discipline and high renewal retention.',
    icon: 'Briefcase',
    highlights: ['Multi-channel Distribution', 'Corporate Group Mediclaim', 'SME Business Protection']
  },
  {
    id: 'insurance-awareness',
    title: 'Insurance Awareness & Literacy',
    description: 'Demystifying policy fine print, waiting periods, room rent sub-limits, and restoration benefits for the general public.',
    icon: 'BookOpen',
    highlights: ['Community Awareness Guidance', 'Corporate Wellness Sessions', 'Simplified Policy Explanations']
  },
  {
    id: 'claims-advocacy',
    title: 'Strategic Claims Advocacy',
    description: 'Bridging the gap between hospital desk, insurance claims department, and policyholders during medical emergencies.',
    icon: 'Activity',
    highlights: ['Cashless Authorization Aid', 'Dispute Resolution Guidance', 'Zero-Hassle Reimbursement Support']
  },
  {
    id: 'executive-leadership',
    title: 'Operational & People Leadership',
    description: 'Instilling a culture of integrity, punctuality, and pride in serving families during their moments of greatest vulnerability.',
    icon: 'Award',
    highlights: ['Ethical Advisory Governance', 'Collaborative Branch Culture', 'Customer-Centric Operations']
  }
];

export const BRANCH_HIGHLIGHTS: BranchHighlight[] = [
  {
    title: "14,000+ Network Hospitals",
    description: "Seamless cashless hospitalization across premier hospital chains nationwide.",
    icon: "Building2"
  },
  {
    title: "In-House Claims Desk",
    description: "Direct claim processing without third-party delay, supervised by medical specialists.",
    icon: "Clock"
  },
  {
    title: "Personalized Advisory Lounge",
    description: "Comfortable consultation spaces for detailed policy reviews with dedicated relationship managers.",
    icon: "Coffee"
  },
  {
    title: "Priority Senior Citizen Desk",
    description: "Compassionate, zero-wait assistance tailored specifically for elderly policyholders and parents.",
    icon: "Heart"
  }
];

export const AWARENESS_TOPICS: AwarenessTopic[] = [
  {
    id: 'medical-inflation',
    title: 'Beating Medical Inflation',
    shortDesc: 'Healthcare costs in India are rising at 14% annually. Protect your hard-earned savings.',
    content: 'A single emergency or ICU admission can deplete years of household savings. Comprehensive health insurance ensures that escalating treatment costs never force you to compromise on quality healthcare.',
    icon: 'TrendingUp',
    tips: [
      'Choose at least ₹15–25 Lakhs base coverage for metro city treatments',
      'Add Super Top-up policies to inexpensively multiply your sum insured',
      'Review your family coverage every 3 years as medical costs rise'
    ]
  },
  {
    id: 'early-entry',
    title: 'The Advantage of Early Entry',
    shortDesc: 'Insuring in your 20s and 30s guarantees lower premiums and clears waiting periods.',
    content: 'Health insurance is easiest to obtain when you are healthy. Buying early ensures all pre-existing condition waiting periods (2-3 years) expire before health complications arise.',
    icon: 'Clock',
    tips: [
      'No medical tests typically required below age 45 with clean history',
      'Lock in cumulative bonus (up to 100% or 500% increase in sum insured)',
      'Pre-existing disease coverage starts ticking when you are young'
    ]
  },
  {
    id: 'cashless-network',
    title: 'Cashless vs Reimbursement',
    shortDesc: 'How cashless hospitalization protects your immediate liquidity during medical emergencies.',
    content: 'In cashless hospitalization, the insurance company settles the approved hospital bill directly with the network facility. You only pay for non-medical expenses, preserving your cash reserves.',
    icon: 'CreditCard',
    tips: [
      'Keep your Star Health e-Card and photo ID handy on your smartphone',
      'Notify the hospital insurance desk at least 48h before planned surgeries',
      'In emergencies, notify the branch or insurer within 24 hours of admission'
    ]
  },
  {
    id: 'policy-fine-print',
    title: 'Understanding Key Policy Terms',
    shortDesc: 'Room rent sub-limits, restoration benefits, and day-care procedures explained simply.',
    content: 'Don’t let technical jargon confuse you. Clear terms like automatic restoration (which refills your sum insured if exhausted) and modern day-care treatment coverage give you complete peace of mind.',
    icon: 'CheckCircle2',
    tips: [
      'Look for policies with no proportionate room rent deductions',
      'Ensure automatic restoration of sum insured for unrelated illnesses',
      'Verify modern day-care procedures (like cataract, chemotherapy) are covered'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: "Regional Star Leader's Club Platinum Award",
    year: "2023 - 2024",
    organization: "Star Health & Allied Insurance",
    description: "Recognized for exceptional leadership in branch volume, customer retention, and superior policy persistency ratio.",
    category: "leadership",
    badge: "Platinum Tier Honor",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'ach-2',
    title: "Excellence in Cashless Claim Facilitation",
    year: "2022",
    organization: "Health Insurance Advisory Forum",
    description: "Awarded for fastest hospital claim turnaround support and highest customer satisfaction rating during emergencies.",
    category: "customer",
    badge: "Customer First Award",
    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'ach-3',
    title: "100+ Active Advisors Milestone",
    year: "2021",
    organization: "South Central Regional Operations",
    description: "Successfully built and mentored a dedicated team of over 100 insurance advisors across urban and semi-urban territories.",
    category: "milestone",
    badge: "Agency Growth Benchmark",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'ach-4',
    title: "Top Performer — Retail Health Portfolio",
    year: "2019",
    organization: "Star Health Annual Leadership Summit",
    description: "Highest retail family floater adoption and zero mis-selling complaint record in the divisional zone.",
    category: "sales",
    badge: "National Sales Honor",
    imageUrl: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=600&q=80"
  }
];
