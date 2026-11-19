import React, { useState } from 'react';
import { 
  TrendingUp, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { AWARENESS_TOPICS } from '../data/portfolioData';

interface InsuranceAwarenessProps {
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
  onOpenAudit?: () => void;
}

export const InsuranceAwareness: React.FC<InsuranceAwarenessProps> = ({ 
  onOpenCalculator, 
  onOpenConsultation,
  onOpenAudit
}) => {
  const [activeTab, setActiveTab] = useState<string>(AWARENESS_TOPICS[0].id);

  const currentTopic = AWARENESS_TOPICS.find((t) => t.id === activeTab) || AWARENESS_TOPICS[0];

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <HelpCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="awareness" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-corporate text-xs font-bold uppercase tracking-widest mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Consumer Guidance & Literacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Health Insurance Awareness & Clarity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-body-secondary leading-relaxed">
            Understanding health insurance shouldn’t feel complicated. Here are the essential fundamentals every family should know to safeguard their health and wealth.
          </p>
        </div>

        {/* Interactive Educational Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Navigation Tabs (Left on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {AWARENESS_TOPICS.map((topic) => {
              const isSelected = activeTab === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTab(topic.id)}
                  className={`text-left p-4 rounded-2xl transition-all duration-200 border flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-corporate text-white border-corporate shadow-soft-md shadow-blue-500/20'
                      : 'bg-surface-soft hover:bg-slate-100/80 border-slate-200/80 text-navy-900'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white text-corporate border border-slate-200'
                  }`}>
                    {getTopicIcon(topic.icon)}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-navy-900'}`}>
                      {topic.title}
                    </h3>
                    <p className={`text-xs mt-1 line-clamp-2 leading-relaxed ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {topic.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Quick Interactive Tool Banner */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-soft-md border border-navy-700">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4 text-blue-300" />
                <span>Interactive Tool</span>
              </div>
              <h4 className="text-base font-bold text-white">How much cover do you need?</h4>
              <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">
                Calculate the ideal sum insured for your family based on healthcare city tier and dependents.
              </p>
              <button
                onClick={onOpenCalculator}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-corporate hover:bg-corporate-hover text-white transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Launch Coverage Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Detailed Content Display Panel (Right on desktop) */}
          <div className="lg:col-span-8 bg-surface-soft rounded-3xl p-4 sm:p-9 border border-slate-200 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-blue-100 text-corporate flex items-center justify-center shadow-xs shrink-0">
                {getTopicIcon(currentTopic.icon)}
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-corporate uppercase tracking-wider block">Guide Topic</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 truncate">{currentTopic.title}</h3>
              </div>
            </div>

            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed font-medium mt-3 mb-6">
              {currentTopic.content}
            </p>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-6 sm:mb-8">
              <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-corporate" />
                <span>Actionable Advice from Damarla Parvathalu</span>
              </h4>
              <div className="space-y-3">
                {currentTopic.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm text-body-secondary font-medium leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 italic">
                Need personalized analysis for your existing policy?
              </span>
              <button
                onClick={onOpenAudit || onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-800 hover:bg-navy-900 transition-all shadow-xs"
              >
                <span>Request Free Policy Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Common Insurance Myths Busted */}
        <div className="mt-8 pt-10 border-t border-slate-100">
          <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Common Myths vs. Reality
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
              <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">Myth 1</p>
              <h5 className="text-sm font-bold text-navy-900 mt-1">"My corporate employer policy is enough."</h5>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Corporate covers lapse instantly upon job change or retirement, precisely when older age makes new retail coverage difficult to buy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">Myth 2</p>
              <h5 className="text-sm font-bold text-navy-900 mt-1">"I'm young and healthy, so I don't need insurance."</h5>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Buying young guarantees lower premiums and completes pre-existing condition waiting periods when you have zero ailments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
              <p className="text-xs font-bold text-corporate uppercase tracking-wider">Myth 3</p>
              <h5 className="text-sm font-bold text-navy-900 mt-1">"Health insurance companies reject most claims."</h5>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Over 90% of rejections occur due to non-disclosure of past medical history at the time of proposal. Absolute transparency guarantees smooth claims.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
