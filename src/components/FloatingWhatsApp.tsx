import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-18 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip prompt (desktop only to prevent mobile clutter) */}
      {showTooltip && (
        <div className="hidden sm:flex relative mb-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-soft-md animate-in fade-in slide-in-from-bottom-2 duration-300 items-center gap-2">
          <span>Chat with Damarla Parvathalu</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Damarla%20garu,%20I%20would%20like%20to%20consult%20regarding%20Star%20Health%20Insurance.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-soft-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-600"></span>
        </span>
      </a>
    </div>
  );
};
