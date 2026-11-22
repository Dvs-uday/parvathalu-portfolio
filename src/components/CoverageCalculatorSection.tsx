import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Bed, 
  Award,
  ExternalLink,
  ChevronRight,
  Layers
} from 'lucide-react';
import { MAJOR_POLICIES, MajorPolicy } from '../data/majorPolicies';

interface CoverageCalculatorSectionProps {
  onOpenConsultation: (calcDetails?: string, title?: string) => void;
  onOpenCompareModal: () => void;
}

export const CoverageCalculatorSection: React.FC<CoverageCalculatorSectionProps> = ({
  onOpenConsultation,
  onOpenCompareModal,
}) => {
  // Calculator inputs
  const [familyType, setFamilyType] = useState<'individual' | 'young-couple' | 'women-family' | 'family-children' | 'multi-gen' | 'seniors'>('young-couple');
  const [ageGroup, setAgeGroup] = useState<'young' | 'mid' | 'senior' | 'elderly'>('young');
  const [sumInsuredTier, setSumInsuredTier] = useState<'10L' | '25L' | '50L' | '1Cr'>('25L');
  const [priority, setPriority] = useState<'freeze-age' | 'women-maternity' | 'multi-gen' | 'any-room-ped'>('freeze-age');

  // Exact matching logic based strictly on the 4 official policy brochures
  let matchedPolicyId: 'young-star-neo' | 'star-women-care' | 'star-assure' | 'super-star' = 'young-star-neo';

  if (familyType === 'women-family' || priority === 'women-maternity') {
    matchedPolicyId = 'star-women-care';
  } else if (familyType === 'multi-gen' || priority === 'multi-gen') {
    matchedPolicyId = 'star-assure';
  } else if (priority === 'any-room-ped' || ageGroup === 'elderly' || familyType === 'seniors') {
    matchedPolicyId = 'super-star';
  } else if (ageGroup === 'young' || priority === 'freeze-age') {
    matchedPolicyId = 'young-star-neo';
  } else {
    matchedPolicyId = 'super-star';
  }

  const selectedPolicy: MajorPolicy = MAJOR_POLICIES.find((p) => p.id === matchedPolicyId) || MAJOR_POLICIES[0];

  const handleDiscuss = (policy: MajorPolicy) => {
    const details = `Policy: ${policy.name} (UIN: ${policy.uin}) | Target SI: ${sumInsuredTier} | Family Profile: ${familyType} (Eldest Age: ${ageGroup}) | Key Priority: ${priority}`;
    onOpenConsultation(details, `Discuss ${policy.name}`);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-gradient-to-b from-white via-surface-soft to-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background decorative ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-corporate" />
            <span>Interactive Policy Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Find Your Ideal Health Insurance Plan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-body-secondary leading-relaxed">
            Select your family structure and priorities to instantly match with the right Star Health policy from our Banjara Hills branch portfolio.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCompareModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-corporate bg-corporate-light hover:bg-blue-100/70 border border-blue-200 transition-all shadow-xs"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Compare All 4 Top Selling Policies Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* Master Interactive Calculator Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 6-Cols: User Configuration Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Question 1: Family Type */}
              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2.5">
                  1. Who are you protecting?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'individual', label: 'Self (1 Adult)' },
                    { id: 'young-couple', label: 'Self + Spouse' },
                    { id: 'women-family', label: 'Women & Family (SWC)' },
                    { id: 'family-children', label: 'Couple + Children' },
                    { id: 'multi-gen', label: 'Multi-Gen (+ In-Laws)' },
                    { id: 'seniors', label: 'Senior Parents' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFamilyType(f.id as any)}
                      className={`p-3 rounded-xl border text-center font-bold text-[11px] sm:text-xs transition-all ${
                        familyType === f.id
                          ? 'bg-corporate text-white border-corporate shadow-xs scale-[1.02]'
                          : 'bg-surface-soft hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Eldest Member Age */}
              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2.5">
                  2. Age of Eldest Family Member
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { id: 'young', label: '18 – 40 Yrs', sub: 'Young Star' },
                    { id: 'mid', label: '41 – 60 Yrs', sub: 'Mid Career' },
                    { id: 'senior', label: '61 – 75 Yrs', sub: 'Senior Care' },
                    { id: 'elderly', label: '75+ Yrs', sub: 'No Age Cap' },
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setAgeGroup(a.id as any)}
                      className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                        ageGroup === a.id
                          ? 'bg-corporate text-white border-corporate shadow-xs scale-[1.02]'
                          : 'bg-surface-soft hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="block text-xs">{a.label}</span>
                      <span className={`block text-[10px] font-medium mt-0.5 ${ageGroup === a.id ? 'text-blue-100' : 'text-slate-500'}`}>
                        {a.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Sum Insured */}
              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2.5">
                  3. Recommended Base Sum Insured
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { id: '10L', label: '₹10 Lakhs' },
                    { id: '25L', label: '₹25 Lakhs (Popular)' },
                    { id: '50L', label: '₹50 Lakhs' },
                    { id: '1Cr', label: '₹1 Crore+' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSumInsuredTier(s.id as any)}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                        sumInsuredTier === s.id
                          ? 'bg-corporate text-white border-corporate shadow-xs scale-[1.02]'
                          : 'bg-surface-soft border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Top Priority */}
              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2.5">
                  4. Specific Healthcare Priority
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'freeze-age', title: 'Freeze Entry Age', desc: 'Lock in lowest rate until 1st claim' },
                    { id: 'women-maternity', title: 'Women & Maternity Care', desc: 'Maternity, Scan, New Born & 2-Yr PED' },
                    { id: 'multi-gen', title: 'Multi-Gen Family', desc: 'Up to 6 Adults + In-Laws & Health Checkup' },
                    { id: 'any-room-ped', title: 'Any Room Category', desc: 'No room rent limits & 31-day Quick Shield' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPriority(p.id as any)}
                      className={`p-3 rounded-xl border font-bold text-left transition-all ${
                        priority === p.id
                          ? 'bg-corporate text-white border-corporate shadow-xs scale-[1.02]'
                          : 'bg-surface-soft border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="block text-xs">{p.title}</span>
                      <span className={`block text-[10px] font-normal mt-0.5 ${priority === p.id ? 'text-blue-100' : 'text-slate-500'}`}>
                        {p.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 6-Cols: Live Matching Policy Card (Highlighted Result) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border-2 border-corporate/30 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-6 sm:p-8 shadow-soft-lg">
                
                {/* Result Top Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-extrabold text-corporate uppercase tracking-wider">
                      Optimal Plan Match
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    UIN: {selectedPolicy.uin}
                  </span>
                </div>

                {/* Policy Name & Tagline */}
                <h4 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
                  {selectedPolicy.name}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 italic mt-1 mb-3">
                  "{selectedPolicy.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-body-secondary leading-relaxed mb-6">
                  {selectedPolicy.bestFor}
                </p>

                {/* 4 Key Verified Specs */}
                <div className="grid grid-cols-2 gap-2.5 text-xs mb-5">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <Bed className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Room Rent</span>
                    </div>
                    <p className="font-bold text-navy-900 leading-snug">{selectedPolicy.roomRent}</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <Clock className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Pre / Post Hosp</span>
                    </div>
                    <p className="font-bold text-navy-900 leading-snug">{selectedPolicy.prePostHospitalization}</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Restoration</span>
                    </div>
                    <p className="font-bold text-navy-900 leading-snug">{selectedPolicy.restoration}</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <Award className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Bonus</span>
                    </div>
                    <p className="font-bold text-navy-900 leading-snug">{selectedPolicy.cumulativeBonus}</p>
                  </div>
                </div>

                {/* Brochure Highlights */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 mb-6">
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-corporate" />
                    <span>Verified Policy Highlights from Official Brochure</span>
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {selectedPolicy.keyUSPs.slice(0, 4).map((usp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{usp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => handleDiscuss(selectedPolicy)}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-corporate hover:bg-corporate-hover text-xs sm:text-sm shadow-soft-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Discuss This Plan with Damarla Parvathalu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-xs pt-1 px-1">
                    <a
                      href={selectedPolicy.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-corporate hover:underline font-bold flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Official PDF Brochure</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={onOpenCompareModal}
                      className="text-slate-600 hover:text-navy-900 font-semibold flex items-center gap-1"
                    >
                      <span>Compare all 4 policies</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
