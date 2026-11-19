import React from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Lightbulb, 
  Users2, 
  FileText, 
  CheckCircle2, 
  Quote
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeProps {
  onOpenConsultation: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenConsultation }) => {
  const corePrinciples = [
    {
      title: "Customer-First Empathy",
      desc: "Every policy recommendation begins with listening to the family's medical history, budget, and real healthcare risks—never sales quotas.",
      icon: HeartHandshake,
    },
    {
      title: "Total Transparency",
      desc: "De-mystifying policy exclusions, room-rent limits, copayments, and waiting periods before the contract is signed.",
      icon: ShieldCheck,
    },
    {
      title: "Lifetime Claim Partnership",
      desc: "The true measure of an insurance advisor is being present at 2:00 AM when a hospital admission requires urgent cashless coordination.",
      icon: Lightbulb,
    },
    {
      title: "Ethical Team Empowerment",
      desc: "Training advisors to be trusted family advisors rather than transactional sales agents, fostering enduring trust across generations.",
      icon: Users2,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-corporate uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            About Damarla Parvathalu
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Protecting What Matters Most with 12+ Years of Dedication
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-body-secondary leading-relaxed">
            A Senior Sales Manager's philosophy on why genuine insurance advisory is a humanitarian calling before a commercial enterprise.
          </p>
        </div>

        {/* Main Grid: Photo and Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Key Attributes */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[300px] sm:max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white bg-slate-900 aspect-[4/5]">
                <img
                  src={PERSONAL_INFO.aboutPortrait}
                  alt="Damarla Parvathalu — Senior Sales Manager, Star Health Insurance"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Official Star Health Logo watermark on top right */}
                <div className="absolute top-4 right-4 py-1 px-2.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
                  <img
                    src={PERSONAL_INFO.officialLogo}
                    alt="Star Health"
                    className="h-4 w-auto object-contain"
                  />
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                  <p className="text-xs font-bold text-corporate uppercase tracking-wider">Leadership Ethos</p>
                  <p className="text-sm font-extrabold text-navy-900 mt-0.5">
                    "Trust is earned in drops and lost in buckets. That is why integrity in health insurance is non-negotiable."
                  </p>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100/60 rounded-full blur-2xl -z-10" />
            </div>

            {/* Quick credentials card */}
            <div className="mt-8 w-full max-w-md bg-surface-soft p-5 rounded-2xl border border-slate-200/70 flex flex-col gap-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate shrink-0" />
                <span className="font-semibold text-navy-800">Branch Office:</span>
                <span>Banjara Hills (Sarada Sadan, Road No. 1), Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate shrink-0" />
                <span className="font-semibold text-navy-800">Direct Helpline:</span>
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quote Block */}
            <div className="relative pl-6 sm:pl-8 border-l-4 border-corporate mb-8">
              <Quote className="w-8 h-8 text-blue-200 absolute -top-4 -left-3 -z-10 opacity-70" />
              <blockquote className="text-lg sm:text-xl font-medium text-navy-900 leading-relaxed italic">
                "{PERSONAL_INFO.aboutText}"
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-corporate" />
                <span className="text-sm font-bold text-navy-900">Damarla Parvathalu</span>
                <span className="text-xs text-slate-500">• Senior Sales Manager, Star Health Insurance</span>
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base text-body-secondary leading-relaxed">
              <p>
                In an era where medical expenses are escalating faster than inflation, lacking proper health coverage can compromise a family's financial security within days. My mission is to ensure no family has to deplete their life savings, sell property, or compromise on quality medical treatment during unexpected healthcare emergencies.
              </p>
              <p>
                Throughout my <strong>12+ years</strong> in the industry, I have had the privilege of guiding over <strong>3,000 customers</strong> and safeguarding over <strong>1,000 families</strong> with robust, high-benefit policies. Operating from our Banjara Hills regional office in Hyderabad, I am committed to transparent advisory, personalized policy structuring, and standing with our clients throughout their cashless claim journeys.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {corePrinciples.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-200 transition-all shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-corporate-light text-corporate flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-navy-900">{principle.title}</h4>
                    </div>
                    <p className="text-xs text-body-secondary leading-normal">
                      {principle.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Advisory Consultation Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-navy-800 hover:bg-navy-900 shadow-soft-sm transition-all"
              >
                <FileText className="w-4 h-4 text-blue-300" />
                <span>Schedule a Coverage Review</span>
              </button>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Damarla%20garu,%20I%20would%20like%20to%20discuss%20health%20insurance%20options.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-surface-soft hover:bg-slate-100 border border-slate-200 transition-all text-sm"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
