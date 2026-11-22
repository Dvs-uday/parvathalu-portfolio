export interface MajorPolicy {
  id: 'young-star-neo' | 'star-assure' | 'super-star' | 'star-women-care';
  name: string;
  tagline: string;
  uin: string;
  pdfUrl: string;
  entryAge: {
    individual: string;
    floaterAdults: string;
    floaterChildren: string;
  };
  sumInsuredOptions: string[];
  maxFamilySize: string;
  roomRent: string;
  prePostHospitalization: string;
  restoration: string;
  cumulativeBonus: string;
  waitingPeriods: {
    initial: string;
    specificDiseases: string;
    ped: string;
  };
  keyUSPs: string[];
  bestFor: string;
  coPay: string;
}

export const MAJOR_POLICIES: MajorPolicy[] = [
  {
    id: 'young-star-neo',
    name: 'Star Young Star Neo',
    tagline: 'Future-ready from day one',
    uin: 'SHAHLIP27049V022627 / SHAHLIA27050V022627',
    pdfUrl: '/policies/young-star-neo.pdf',
    entryAge: {
      individual: '18 to 40 Years',
      floaterAdults: '18 to 40 Years',
      floaterChildren: '91 Days to 25 Years',
    },
    sumInsuredOptions: ['₹10 Lakhs', '₹25 Lakhs', '₹50 Lakhs', '₹1 Crore', 'Unlimited'],
    maxFamilySize: '2 Adults + Dependent Children (up to 25 yrs)',
    roomRent: 'Single Private A/C Room (Up to Sum Insured)',
    prePostHospitalization: '90 Days Pre / 180 Days Post Hospitalization (Up to Sum Insured)',
    restoration: '100% of Sum Insured, Unlimited times for any illness',
    cumulativeBonus: '50% of Sum Insured per claim-free year (Max up to 100%)',
    waitingPeriods: {
      initial: '30 Days',
      specificDiseases: '24 Months',
      ped: '36 Months',
    },
    coPay: 'Zero mandatory co-payment (Optional voluntary 10% or 20% co-pay available)',
    keyUSPs: [
      'Freeze Your Age: Pay premium as per entry age until you make your first claim',
      'Time Travel: Renewal premium calculated using entry age + 1 yr instead of actual age',
      'Star THRIVE: Earn rewards for healthy habits to redeem up to 100% renewal premium',
      'Unlimited 100% Restoration for any illness',
      'Air Ambulance covered up to ₹5 Lakhs per policy year',
      'Limitless Loyalty Bonus option: 100% additional base SI on every renewal without cap',
    ],
    bestFor: 'Young individuals, newlyweds, and young families aged 18 to 40 seeking locked-in entry premiums and high-sum coverage.',
  },
  {
    id: 'star-women-care',
    name: 'Star Women Care Insurance Policy',
    tagline: 'Dedicated protection for Women and her family',
    uin: 'SHAHLIP27051V032627',
    pdfUrl: '/policies/star-women-care.pdf',
    entryAge: {
      individual: '18 to 75 Years (Females only)',
      floaterAdults: '18 to 75 Years (At least 1 adult female + spouse)',
      floaterChildren: '91 Days to 25 Years (Unmarried daughter up to 30 yrs)',
    },
    sumInsuredOptions: [
      '₹5 Lakhs', '₹10 Lakhs', '₹15 Lakhs', '₹20 Lakhs', 
      '₹25 Lakhs', '₹50 Lakhs', '₹1 Crore'
    ],
    maxFamilySize: 'At least 1 adult female along with spouse and dependent children (daughters covered up to 30 yrs)',
    roomRent: '5L SI: 1% of SI | 10L–25L SI: Any Room (except suite) | 50L & 100L SI: Any Room',
    prePostHospitalization: '60 Days Pre / 90 Days Post Hospitalization',
    restoration: '100% of basic Sum Insured, once, immediately upon partial / full utilization',
    cumulativeBonus: '20% of expiring SI per claim-free year (from 2nd year), up to 100%',
    waitingPeriods: {
      initial: '30 Days',
      specificDiseases: '2 Years',
      ped: '2 Years (24 Months - Faster than typical 36 months)',
    },
    coPay: 'Zero mandatory co-payment',
    keyUSPs: [
      'Special Pregnancy Purchase: Pregnant women can buy policy by submitting 12th & 20th week scan reports',
      'Delivery Expenses (Normal & C-Section) covered; Waiting period only 1 year for SI ≥ ₹15 Lakhs',
      'Assisted Reproduction Treatment (ART / IVF) covered up to ₹50,000 to ₹3 Lakhs',
      'New Born Baby covered from Day 1 (up to 25% of SI in year of birth, incl. congenital defects)',
      'Star Mother Cover: Single Private AC room for mother if child < 12 yrs in ICU (or ₹2,500/day hotel)',
      'Unmarried or unemployed daughters can continue as dependent children up to 30 years',
      'Optional Lump Sum Cancer Cover for females: ₹5L to ₹25L on first diagnosis',
    ],
    bestFor: 'Women, expectant mothers, families planning for children, and households seeking comprehensive maternity, new born care, and faster 2-year PED coverage.',
  },
  {
    id: 'star-assure',
    name: 'Star Health Assure Insurance Policy',
    tagline: 'Comprehensive multi-generational family protection',
    uin: 'SHAHLIP23131V022223',
    pdfUrl: '/policies/star-health-assure.pdf',
    entryAge: {
      individual: '91 Days to 75 Years',
      floaterAdults: '18 to 75 Years',
      floaterChildren: '16 Days to 25 Years',
    },
    sumInsuredOptions: [
      '₹5 Lakhs', '₹10 Lakhs', '₹15 Lakhs', '₹20 Lakhs', 
      '₹25 Lakhs', '₹50 Lakhs', '₹75 Lakhs', '₹1 Crore', '₹2 Crore'
    ],
    maxFamilySize: 'Up to 6 Adults + 3 Children (Self, Spouse, Children, Parents & Parents-in-law: 2A + 3C + 4P)',
    roomRent: 'Single Private A/C Room',
    prePostHospitalization: '60 Days Pre / 180 Days Post Hospitalization',
    restoration: '100% Automatic Restoration, up to 3 times in a policy year',
    cumulativeBonus: '25% of Sum Insured per claim-free year (Max up to 100%)',
    waitingPeriods: {
      initial: '30 Days',
      specificDiseases: '24 Months',
      ped: '36 Months (can reduce to 12 or 24 months via buyback)',
    },
    coPay: 'Zero co-pay below 61 yrs. 10% co-pay applies only if entry age is 61 years or above.',
    keyUSPs: [
      'Covers up to 6 Adults + 3 Children under a single family umbrella (including in-laws)',
      'Annual Health Checkup included every policy year (irrespective of claims, up to ₹15,000 for floater)',
      'Maternity & Normal/C-section Delivery covered up to 10% of Sum Insured (after 2 yrs)',
      'Assisted Reproduction Treatment (ART / IVF) covered up to ₹1L – ₹4L',
      'Treatment for New Born Baby covered from day 1 (₹2L – ₹4L)',
      'In Utero Fetal Surgery covered up to Sum Insured',
      'Chronic Severe Refractory Asthma payable up to 10% of SI (max ₹5L)',
    ],
    bestFor: 'Families with children, expectant parents, and large multi-generational households covering parents and parents-in-law.',
  },
  {
    id: 'super-star',
    name: 'Star Super Star Insurance Policy',
    tagline: 'Future ke har move, covered! (with Star Flexi Add-on)',
    uin: 'SHAHLIP25036V012425 / SHAHLIA26040V012526',
    pdfUrl: '/policies/star-super-star.pdf',
    entryAge: {
      individual: '18 Years to Any Age (No upper limit)',
      floaterAdults: '18 Years to Any Age (No upper limit)',
      floaterChildren: '91 Days to 25 Years',
    },
    sumInsuredOptions: [
      '₹7.5 Lakhs', '₹10 Lakhs', '₹15 Lakhs', '₹20 Lakhs', 
      '₹25 Lakhs', '₹50 Lakhs', '₹1 Crore'
    ],
    maxFamilySize: '2 Adults + 4 Children (Self, Spouse & Dependent Children)',
    roomRent: 'Any Room (No room rent capping or proportionate deduction)',
    prePostHospitalization: '90 Days Pre / 180 Days Post Hospitalization',
    restoration: '100% of Sum Insured, unlimited times for related and unrelated illness',
    cumulativeBonus: '50% of Sum Insured per claim-free year (Max up to 100%)',
    waitingPeriods: {
      initial: '30 Days',
      specificDiseases: '24 Months',
      ped: '36 Months (Quick Shield reduces waiting to 30 days for specified conditions)',
    },
    coPay: 'Zero mandatory co-pay (Voluntary 10% or 20% co-pay options available for premium discount)',
    keyUSPs: [
      'Any Room Category: Absolute freedom to choose suite, deluxe, or private room without penalty',
      'Quick Shield: Diabetes II, Hypertension, Hyperlipidemia, Asthma & CAD covered from 31st Day!',
      'Limitless Loyalty Bonus: 100% additional Sum Insured on EVERY renewal without any upper ceiling',
      'Limitless Care: One unlimited claim cover in a lifetime of base policy (available from ₹10L SI)',
      'Premium Return: 1st year base premium refunded if no in-patient claim for 5 consecutive years',
      'Freeze Your Age: Lock entry-age premium rate until the first claim (available up to 50 yrs entry)',
      'Durable Medical Equipment Cover: Up to ₹1 Lakh/year (wheelchairs, oxygen concentrators)',
    ],
    bestFor: 'Clients wanting zero room-rent restrictions, immediate 31-day coverage for BP/Sugar/Cholesterol via Quick Shield, and uncapped loyalty bonuses.',
  },
];
