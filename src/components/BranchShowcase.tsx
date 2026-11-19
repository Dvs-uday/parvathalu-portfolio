import React from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Users, 
  Heart, 
  Coffee, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO, BRANCH_HIGHLIGHTS } from '../data/portfolioData';

interface BranchShowcaseProps {
  onOpenConsultation: () => void;
}

export const BranchShowcase: React.FC<BranchShowcaseProps> = ({ onOpenConsultation }) => {
  const branchServices = [
    'New Policy Advisory & Custom Quotes',
    'Family Floater & Senior Citizen Plans',
    'Pre-Hospitalization Document Verification',
    'Direct Cashless Hospital Authorization',
    'Claim Dispute Review & Support Desk',
    'Instant Policy Renewals & Endorsements',
  ];

  return (
    <section id="branch" className="py-20 md:py-28 bg-surface-soft border-b border-slate-200/60 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            <img
              src={PERSONAL_INFO.officialLogo}
              alt="Star Health"
              className="h-4 w-auto object-contain"
            />
            <span className="h-3 w-[1px] bg-slate-300" />
            <span>Banjara Hills Branch Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Our Banjara Hills Branch Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-body-secondary leading-relaxed">
            "At our branch, we believe every customer deserves the right guidance, transparent information, and dependable support when it matters most. Our team works together to make health insurance simpler, faster, and truly accessible."
          </p>
        </div>

        {/* Feature Hero Card with Large Photography & Branch Stats */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-soft-xl border border-slate-200/80 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Photography Column */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-slate-900 overflow-hidden">
              <img
                src={PERSONAL_INFO.branchOfficeImg}
                alt="Star Health Office in Banjara Hills, Hyderabad"
                className="w-full h-full object-cover object-center brightness-95 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
              
              {/* Badge on Photo */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-navy-900 text-xs font-bold shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Walk-in Consultation & Cashless Desk</span>
              </div>

              {/* Bottom Info on Photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-2">
                  <img
                    src={PERSONAL_INFO.officialLogoWhite}
                    alt="Star Health and Allied Insurance"
                    className="h-7 w-auto object-contain filter drop-shadow"
                  />
                </div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                  Official Branch Office
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                  {PERSONAL_INFO.branchName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-corporate shrink-0" />
                  <span>Road No. 1, Banjara Hills, Hyderabad (Opp: Balaji Grand Bazaar)</span>
                </p>
              </div>
            </div>

            {/* Branch Details Column */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-corporate uppercase tracking-wider">
                  Branch Information
                </span>
                <h4 className="text-2xl font-bold text-navy-900 mt-1">
                  Banjara Hills Regional Center
                </h4>
                <p className="mt-2 text-sm text-body-secondary leading-relaxed">
                  Located in the heart of Hyderabad on Road No. 1, Banjara Hills, providing dedicated, prompt support for policyholders, families, and cashless hospital coordination.
                </p>

                {/* Quick Info Grid */}
                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy-900">Official Branch Address</p>
                      <p className="text-slate-800 font-semibold text-xs mt-0.5">{PERSONAL_INFO.companyFull}</p>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{PERSONAL_INFO.branchAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy-900">Working Hours</p>
                      <p className="text-slate-600 text-xs mt-0.5">Monday – Saturday: 9:30 AM – 6:30 PM (24x7 Emergency Claim Helpline)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy-900">Senior Sales Manager Direct Contact</p>
                      <p className="text-slate-600 text-xs mt-0.5 font-mono">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Branch Services Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                    Available Services at Branch
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {branchServices.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-corporate shrink-0" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-corporate hover:bg-corporate-hover text-xs shadow-soft-sm transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-navy-800 bg-surface-soft hover:bg-slate-100 border border-slate-200 text-xs transition-all"
                >
                  <Users className="w-3.5 h-3.5 text-corporate" />
                  <span>Contact Our Team</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Pillars of Branch Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCH_HIGHLIGHTS.map((item, idx) => {
            const icons = [Building2, Clock, Coffee, Heart];
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft-sm card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-corporate-light text-corporate flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-navy-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-body-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-corporate flex items-center gap-1">
                  <span>Branch Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
