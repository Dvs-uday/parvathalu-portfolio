import React, { useState } from 'react';
import { 
  X, 
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
  Info
} from 'lucide-react';
import { MAJOR_POLICIES, MajorPolicy } from '../data/majorPolicies';

interface CoverageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: (calcDetails?: string, title?: string) => void;
}

export const CoverageCalculatorModal: React.FC<CoverageCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'compare'>('calculator');
  
  // Calculator inputs
  const [familyType, setFamilyType] = useState<'individual' | 'young-couple' | 'family-children' | 'multi-gen' | 'seniors'>('young-couple');
  const [ageGroup, setAgeGroup] = useState<'young' | 'mid' | 'senior' | 'elderly'>('young');
  const [sumInsuredTier, setSumInsuredTier] = useState<'10L' | '25L' | '50L' | '1Cr'>('25L');
  const [priority, setPriority] = useState<'freeze-age' | 'maternity-family' | 'any-room-ped'>('freeze-age');

  if (!isOpen) return null;

  // Exact matching logic based strictly on the 3 official policy brochures
  let matchedPolicyId: 'young-star-neo' | 'star-assure' | 'super-star' = 'young-star-neo';

  if (familyType === 'multi-gen' || priority === 'maternity-family' || (ageGroup === 'senior' && familyType !== 'individual')) {
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
    onClose();
    onOpenConsultation(details, `Discuss ${policy.name}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-soft-xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-navy-950 via-navy-900 to-corporate text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0 border border-white/20">
              <Calculator className="w-5 h-5 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-white">Coverage Need Calculator</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40">
                  Top 3 Selling Star Policies
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Verified terms extracted from Star Health's official policy brochures
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs (Calculator vs Compare 3 Policies) */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-6 pt-3 shrink-0">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`pb-3 px-4 text-xs font-bold transition-all relative ${
              activeTab === 'calculator'
                ? 'text-corporate border-b-2 border-corporate'
                : 'text-slate-500 hover:text-navy-900'
            }`}
          >
            1. Smart Match Calculator
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`pb-3 px-4 text-xs font-bold transition-all relative flex items-center gap-1.5 ${
              activeTab === 'compare'
                ? 'text-corporate border-b-2 border-corporate'
                : 'text-slate-500 hover:text-navy-900'
            }`}
          >
            <span>2. Compare All 3 Flagship Policies</span>
            <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-corporate-light text-corporate">
              Verified Specs
            </span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {activeTab === 'calculator' ? (
            /* =================== TAB 1: SMART MATCH CALCULATOR =================== */
            <div className="space-y-6">
              
              {/* Question 1: Family Composition */}
              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2">
                  1. Who are you protecting?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
                  {[
                    { id: 'individual', label: 'Self (1 Adult)' },
                    { id: 'young-couple', label: 'Self + Spouse' },
                    { id: 'family-children', label: 'Couple + Kids' },
                    { id: 'multi-gen', label: 'Family + Parents/In-Laws' },
                    { id: 'seniors', label: 'Senior Parents Only' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFamilyType(f.id as any)}
                      className={`p-2.5 rounded-xl border text-center font-bold text-[11px] sm:text-xs transition-all ${
                        familyType === f.id
                          ? 'bg-corporate text-white border-corporate shadow-xs'
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
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2">
                  2. Age Bracket of Eldest Member
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { id: 'young', label: '18 – 40 Years (Young Star)' },
                    { id: 'mid', label: '41 – 60 Years' },
                    { id: 'senior', label: '61 – 75 Years' },
                    { id: 'elderly', label: '75+ Years (Super Star Any Age)' },
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setAgeGroup(a.id as any)}
                      className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                        ageGroup === a.id
                          ? 'bg-corporate text-white border-corporate shadow-xs'
                          : 'bg-surface-soft hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Coverage Amount & Question 4: Specific Benefit Priorities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2">
                    3. Desired Base Sum Insured
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: '10L', label: '₹10 Lakhs' },
                      { id: '25L', label: '₹25 Lakhs (Popular)' },
                      { id: '50L', label: '₹50 Lakhs' },
                      { id: '1Cr', label: '₹1 Crore / Unlimited' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSumInsuredTier(s.id as any)}
                        className={`p-2.5 rounded-xl border font-bold text-center ${
                          sumInsuredTier === s.id
                            ? 'bg-corporate text-white border-corporate'
                            : 'bg-surface-soft border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2">
                    4. Top Healthcare Priority
                  </label>
                  <div className="flex flex-col gap-1.5 text-xs">
                    {[
                      { id: 'freeze-age', label: 'Freeze Entry Age & Lowest Long-Term Premium' },
                      { id: 'maternity-family', label: 'Maternity, IVF, New Born & Multi-Gen (Parents/In-laws)' },
                      { id: 'any-room-ped', label: 'Any Room Category & 31-Day Quick Shield for BP/Sugar' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPriority(p.id as any)}
                        className={`p-2.5 rounded-xl border font-bold text-left px-3 ${
                          priority === p.id
                            ? 'bg-corporate text-white border-corporate'
                            : 'bg-surface-soft border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RECOMMENDED POLICY BLUEPRINT CARD */}
              <div className="rounded-2xl border-2 border-corporate/30 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-5 sm:p-6 shadow-soft-md">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-extrabold text-corporate uppercase tracking-wider">
                      Recommended Flagship Policy Match
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    UIN: {selectedPolicy.uin}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-2xl font-black text-navy-900">
                    {selectedPolicy.name}
                  </h4>
                  <span className="text-xs font-semibold text-slate-600 italic">
                    "{selectedPolicy.tagline}"
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {selectedPolicy.bestFor}
                </p>

                {/* Key Verified Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs mb-5">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <Bed className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Room Rent</span>
                    </div>
                    <p className="font-bold text-navy-900">{selectedPolicy.roomRent}</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <Clock className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Pre / Post Hosp</span>
                    </div>
                    <p className="font-bold text-navy-900">{selectedPolicy.prePostHospitalization}</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Restoration</span>
                    </div>
                    <p className="font-bold text-navy-900">{selectedPolicy.restoration}</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <Award className="w-3.5 h-3.5 text-corporate" />
                      <span className="font-semibold text-[11px]">Bonus</span>
                    </div>
                    <p className="font-bold text-navy-900">{selectedPolicy.cumulativeBonus}</p>
                  </div>
                </div>

                {/* Verified USPs from PDF */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 mb-5">
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-corporate" />
                    <span>Verified Policy Highlights from Official Brochure</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedPolicy.keyUSPs.map((usp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{usp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Inside Card */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={selectedPolicy.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-corporate hover:text-navy-900 underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Official PDF Brochure</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleDiscuss(selectedPolicy)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-corporate hover:bg-corporate-hover shadow-soft-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Discuss This Plan with Damarla Parvathalu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* =================== TAB 2: SIDE-BY-SIDE COMPARISON OF 3 POLICIES =================== */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-navy-900">
                    Comparison: Star's Top 3 Selling Health Policies
                  </h4>
                  <p className="text-xs text-slate-500">
                    Precise specifications compiled directly from Star Health brochures in our Banjara Hills office.
                  </p>
                </div>
              </div>

              {/* Responsive Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MAJOR_POLICIES.map((policy) => (
                  <div
                    key={policy.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-corporate transition-all"
                  >
                    <div>
                      {/* Badge & Title */}
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-50 text-corporate border border-blue-100">
                        Top Seller
                      </span>
                      <h5 className="text-lg font-extrabold text-navy-900 mt-2">
                        {policy.name}
                      </h5>
                      <p className="text-[11px] text-slate-500 italic mb-3">
                        {policy.tagline}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400 mb-4 truncate">
                        {policy.uin}
                      </p>

                      {/* Spec List */}
                      <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-3 mb-4">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Entry Age</span>
                          <span className="font-semibold text-navy-900">{policy.entryAge.floaterAdults}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Family Size</span>
                          <span className="font-semibold text-navy-900">{policy.maxFamilySize}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Room Rent</span>
                          <span className="font-semibold text-navy-900">{policy.roomRent}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Pre / Post Hospitalization</span>
                          <span className="font-semibold text-navy-900">{policy.prePostHospitalization}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Automatic Restoration</span>
                          <span className="font-semibold text-navy-900">{policy.restoration}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Cumulative Bonus</span>
                          <span className="font-semibold text-navy-900">{policy.cumulativeBonus}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Mandatory Co-Pay</span>
                          <span className="font-semibold text-navy-900">{policy.coPay}</span>
                        </div>
                      </div>

                      {/* Standout Benefit */}
                      <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] text-navy-900 mb-4">
                        <span className="font-bold text-corporate">Signature Benefit: </span>
                        <span>{policy.keyUSPs[0]}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                      <a
                        href={policy.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 text-center text-[11px] font-bold text-slate-600 hover:text-corporate flex items-center justify-center gap-1"
                      >
                        <FileText className="w-3 h-3" />
                        <span>Official PDF</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleDiscuss(policy)}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-corporate hover:bg-corporate-hover text-center transition-colors shadow-xs"
                      >
                        Discuss {policy.name.split(' ')[1] || policy.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BOTTOM NOTICE FOR OTHER POLICIES */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5 text-slate-600">
              <Info className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-900">Want other Star Health policies?</span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Looking for Senior Citizens Red Carpet, Star Cardiac Care, Cancer Care, or Corporate Group policies? Connect with Damarla Parvathalu for personalized advisory.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation('Inquiry for other specialized Star Health policies (Cardiac, Senior Red Carpet, Corporate Top-up).', 'Inquire for Other Star Plans');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-navy-900 bg-white hover:bg-slate-100 border border-slate-300 shrink-0 transition-colors flex items-center gap-1"
            >
              <span>Inquire for Other Plans</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            Official Star Health and Allied Insurance Co. Ltd. Banjara Hills Branch
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
          >
            Close Calculator
          </button>
        </div>

      </div>
    </div>
  );
};
