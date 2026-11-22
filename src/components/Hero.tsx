import React from 'react';
import { 
  ArrowRight, 
  Building2, 
  Sparkles, 
  ChevronDown, 
  CheckCircle, 
  PhoneCall, 
  Award,
  Calculator 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-14 sm:pt-32 md:pt-36 md:pb-24 overflow-hidden gradient-hero-bg border-b border-slate-100 w-full"
    >
      {/* Decorative background glows constrained inside overflow-hidden */}
      <div className="absolute top-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-blue-50/70 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Strong Typography & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0">
            
            {/* Professional Badge - Mobile-friendly and non-overflowing */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white border border-blue-200 shadow-soft-sm mb-5 max-w-full">
              <img
                src={PERSONAL_INFO.officialLogo}
                alt="Star Health"
                className="h-4 sm:h-4.5 w-auto object-contain shrink-0"
              />
              <span className="h-3 w-[1px] bg-slate-300 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold text-navy-900 tracking-wide uppercase truncate">
                Senior Sales Leadership • Health Insurance
              </span>
            </div>

            {/* Name & Title */}
            <div className="mb-4 w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15] break-words">
                {PERSONAL_INFO.name}
              </h1>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-base sm:text-lg lg:text-xl font-bold">
                <span className="text-corporate">{PERSONAL_INFO.designation}</span>
                <span className="text-slate-300">•</span>
                <span className="text-navy-800 font-semibold">Star Health & Allied Insurance</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-slate-500 font-medium text-xs sm:text-base">Banjara Hills, Hyderabad</span>
              </div>
            </div>

            {/* Compelling Headlines */}
            <div className="mb-5 w-full">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 leading-snug">
                "{PERSONAL_INFO.tagline}"
              </h2>
              <p className="mt-1 text-sm sm:text-base lg:text-lg font-medium text-slate-600 italic">
                {PERSONAL_INFO.secondaryTagline}
              </p>
            </div>

            {/* Role Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-body-secondary leading-relaxed max-w-2xl mb-6">
              Guiding 3,000+ Indian families with 12+ years of specialized health insurance advisory, safeguarding lifetime savings from medical emergencies, and delivering seamless cashless hospitalization support from our Banjara Hills branch.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-xl mb-7 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Cashless Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Mis-selling Code</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>IRDAI Certified Advisor</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('calculator')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-corporate hover:bg-corporate-hover shadow-soft-md shadow-blue-500/25 transition-all text-xs sm:text-sm active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4 shrink-0" />
                <span>Coverage Calculator</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => scrollTo('branch')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-navy-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-soft-sm text-xs sm:text-sm"
              >
                <Building2 className="w-4 h-4 text-corporate shrink-0" />
                <span>Banjara Hills Branch</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-corporate bg-corporate-light hover:bg-blue-100/70 border border-blue-200 text-xs sm:text-sm"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>Request Advisory</span>
              </button>
            </div>

          </div>

          {/* Right Column: Executive Portrait & Safe-Bounded Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center w-full px-2 sm:px-4">
            <div className="relative w-full max-w-[300px] sm:max-w-md my-4 sm:my-6">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-tr from-navy-900 via-corporate to-blue-300 shadow-soft-xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] shadow-inner">
                  <img
                    src={PERSONAL_INFO.heroPortrait}
                    alt="Damarla Parvathalu — Senior Sales Manager, Star Health Insurance"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.04]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Official Star Health Tag on Portrait */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 py-1 px-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center gap-1.5 border border-white/60">
                    <img
                      src={PERSONAL_INFO.officialLogo}
                      alt="Star Health"
                      className="h-3.5 sm:h-4 w-auto object-contain"
                    />
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-navy-900 uppercase tracking-wider">
                      Senior Leader
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Experience (Responsive bounded positioning) */}
              <div className="absolute -top-3 left-0 sm:-left-5 sm:-top-4 bg-white p-2.5 sm:p-3.5 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-2 sm:gap-3 scale-95 sm:scale-100 origin-top-left z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-corporate-light text-corporate flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Proven Track Record</p>
                  <p className="text-xs sm:text-base font-extrabold text-navy-900">12+ Years Service</p>
                </div>
              </div>

              {/* Floating Badge 2: Customers (Responsive bounded positioning) */}
              <div className="absolute -bottom-3 right-0 sm:right-auto sm:-left-4 sm:-bottom-5 bg-white p-2.5 sm:p-3.5 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-2 sm:gap-3 scale-95 sm:scale-100 origin-bottom-right z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Trusted Protection</p>
                  <p className="text-xs sm:text-base font-extrabold text-navy-900">3,000+ Customers</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-14 flex justify-center">
          <button
            onClick={() => scrollTo('impact')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-corporate transition-colors group"
            aria-label="Scroll down to professional impact"
          >
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-corporate">
              Discover Impact
            </span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-corporate" />
          </button>
        </div>

      </div>
    </section>
  );
};
