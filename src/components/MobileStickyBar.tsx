import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom w-full">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-xl text-xs font-bold text-navy-900 bg-surface-soft border border-slate-200 active:scale-95 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-corporate shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Damarla%20garu,%20I%20would%20like%20to%20consult%20regarding%20Star%20Health%20Insurance.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all text-center shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5 text-white shrink-0 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Advisory Booking Button */}
        <button
          onClick={onOpenConsultation}
          className="flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-xl text-xs font-bold text-white bg-corporate hover:bg-corporate-hover active:scale-95 transition-all text-center shadow-xs"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-white shrink-0" />
          <span>Advisory</span>
        </button>
      </div>
    </div>
  );
};
