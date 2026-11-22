import React from 'react';
import { Phone, Mail, MapPin, ChevronUp, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-24 md:pb-16 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-900">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white p-2 rounded-xl">
                <img
                  src={PERSONAL_INFO.officialLogo}
                  alt="Star Health and Allied Insurance"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Senior Sales Manager • Banjara Hills
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              "Building Trust. Protecting Lives. Growing Together." Providing dependable, transparent healthcare risk advisory with 12+ years of professional commitment.
            </p>

            <div className="text-xs text-slate-400 space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-corporate shrink-0" />
                <span className="font-mono text-slate-300">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-corporate shrink-0" />
                <span className="text-slate-300">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  <span className="font-semibold text-slate-200">Star Health Office in Banjara Hills:</span>
                  <p>{PERSONAL_INFO.buildingName}, 10-5-2/7/F/301, Road No.1, Banjara Hills, Hyderabad - 500034.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-corporate" />
                  <span>About Damarla Parvathalu</span>
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-corporate" />
                  <span>Insurance Advisory Expertise</span>
                </a>
              </li>
              <li>
                <a href="#branch" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-corporate" />
                  <span>Star Health Banjara Hills Branch</span>
                </a>
              </li>
              <li>
                <a href="#awareness" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-corporate" />
                  <span>Health Insurance Awareness</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-corporate" />
                  <span>Coverage Need Calculator</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-corporate" />
                  <span>Contact & Consultation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Insurance Products & Services */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Star Health Solutions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              <span className="p-2 rounded-lg bg-navy-900 border border-navy-800">Family Health Optima</span>
              <span className="p-2 rounded-lg bg-navy-900 border border-navy-800">Star Comprehensive</span>
              <span className="p-2 rounded-lg bg-navy-900 border border-navy-800">Senior Citizens Red Carpet</span>
              <span className="p-2 rounded-lg bg-navy-900 border border-navy-800">Young Star Policy</span>
              <span className="p-2 rounded-lg bg-navy-900 border border-navy-800">Star Super Surplus (Top-up)</span>
              <span className="p-2 rounded-lg bg-navy-900 border border-navy-800">Star Cardiac Care</span>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-[11px] text-slate-400 leading-relaxed">
              <span className="font-bold text-slate-300">Need immediate emergency cashless hospitalization?</span>
              <p className="mt-1">
                Reach out to Damarla Parvathalu directly for priority escalation with network hospital desks in Hyderabad.
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left text-[11px] max-w-2xl leading-relaxed">
            <strong>Disclaimer:</strong> This is the professional personal portfolio website of Damarla Parvathalu, Senior Sales Manager. Star Health and Allied Insurance Co. Ltd. is an IRDAI-registered insurance company. Insurance is the subject matter of solicitation. Policy terms and conditions apply as prescribed by Star Health.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-4 h-4 text-corporate" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} Damarla Parvathalu • All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
