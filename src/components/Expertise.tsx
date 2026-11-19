import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  HeartHandshake, 
  Users, 
  Briefcase, 
  BookOpen, 
  Activity, 
  Award,
  Check
} from 'lucide-react';
import { EXPERTISE_ITEMS } from '../data/portfolioData';

export const Expertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-corporate" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-corporate" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-corporate" />;
      case 'Users':
        return <Users className="w-6 h-6 text-corporate" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-corporate" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-corporate" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-corporate" />;
      case 'Award':
        return <Award className="w-6 h-6 text-corporate" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-corporate" />;
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-corporate uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3 inline-block">
            Core Competencies & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Specialized Insurance & Leadership Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-body-secondary">
            A comprehensive blend of technical underwriting knowledge, empathetic policyholder care, and disciplined agency development.
          </p>
        </div>

        {/* 8 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {EXPERTISE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-lg hover:border-blue-300 card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-corporate-light flex items-center justify-center group-hover:bg-corporate group-hover:text-white transition-colors duration-300">
                    <span className="transition-colors group-hover:brightness-200">
                      {getIcon(item.icon)}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-corporate uppercase tracking-wider">
                    Core Pillar
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-corporate transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-body-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {item.highlights.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
