import React, { useState } from 'react';
import { Trophy, CheckCircle, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'leadership' | 'customer' | 'sales' | 'milestone'>('all');

  const filteredAchievements = filter === 'all' 
    ? ACHIEVEMENTS 
    : ACHIEVEMENTS.filter((item) => item.category === filter);

  return (
    <section id="achievements" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-corporate text-xs font-bold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-corporate" />
            <span>Honors, Accolades & Trophies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Recognitions & Leadership Honors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-body-secondary leading-relaxed">
            Consistently celebrated for branch sales excellence, customer claim turnaround benchmarks, and ethical agency force development.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Honors' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'customer', label: 'Customer Trust' },
              { id: 'sales', label: 'Sales Benchmarks' },
              { id: 'milestone', label: 'Agency Milestones' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-navy-800 text-white shadow-soft-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Award Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg card-hover-effect flex flex-col sm:flex-row gap-6 items-center"
            >
              {/* Award Photo / Trophy Thumbnail */}
              <div className="relative w-full sm:w-44 h-48 sm:h-44 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 p-1.5 rounded-lg bg-navy-900/80 text-amber-400">
                  <Trophy className="w-4 h-4" />
                </div>
              </div>

              {/* Award Details */}
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-corporate uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-body-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Corporate Achievement</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
