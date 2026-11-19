import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Users, HeartPulse, Award } from 'lucide-react';
import { STATS } from '../data/portfolioData';

export const ProfessionalImpact: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter values
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    exp: 0,
    customers: 0,
    families: 0,
    team: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly
          STATS.forEach((stat) => {
            const duration = 2000;
            const startTime = performance.now();
            const target = stat.value;

            const updateCount = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out expo
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentVal = Math.floor(easeProgress * target);

              setCounts((prev) => ({
                ...prev,
                [stat.id]: currentVal,
              }));

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };

            requestAnimationFrame(updateCount);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-corporate" />;
      case 'Users':
        return <Users className="w-7 h-7 text-corporate" />;
      case 'HeartPulse':
        return <HeartPulse className="w-7 h-7 text-corporate" />;
      case 'Award':
        return <Award className="w-7 h-7 text-corporate" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-corporate" />;
    }
  };

  return (
    <section 
      id="impact" 
      ref={sectionRef}
      className="py-16 md:py-20 bg-surface-soft border-b border-slate-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold text-corporate uppercase tracking-widest mb-2">
            Measurable Trust & Proven Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Professional Impact in Numbers
          </h2>
          <p className="mt-3 text-base text-body-secondary">
            Twelve years of unwavering dedication to family financial health, healthcare liquidity, and building high-integrity insurance advisory networks.
          </p>
        </div>

        {/* 4 Impact Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft-sm card-hover-effect flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-13 h-13 p-3 rounded-xl bg-corporate-light flex items-center justify-center">
                  {getIcon(stat.iconName)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Verified Metric
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-navy-900 font-display tracking-tight">
                    {counts[stat.id] ? counts[stat.id].toLocaleString() : stat.value.toLocaleString()}
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-corporate">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-navy-800">
                  {stat.label}
                </h3>
                <p className="mt-1 text-sm text-body-secondary leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>

              {/* Progress bar line decoration */}
              <div className="mt-5 w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-navy-800 to-corporate h-full transition-all duration-1000 ease-out"
                  style={{ width: hasAnimated ? '100%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Micro reassurance disclaimer */}
        <div className="mt-8 text-center text-xs text-slate-500">
          * Illustrative milestones reflecting 12+ years of career contributions in health insurance advisory, agency development, and Star Health Insurance branch operations in Hyderabad.
        </div>

      </div>
    </section>
  );
};
