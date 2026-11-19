import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'impact', 'about', 'expertise', 'branch', 'awareness', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Branch', href: '#branch' },
    { name: 'Awareness', href: '#awareness' },
    { name: 'Awards', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft-sm py-2 sm:py-2.5 border-b border-surface-border'
            : 'bg-white/95 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 sm:gap-3 group min-w-0"
            >
              {/* Official Star Health Logo */}
              <div className="h-8 sm:h-10 flex items-center shrink-0">
                <img
                  src={PERSONAL_INFO.officialLogo}
                  alt="Star Health and Allied Insurance"
                  className="h-full w-auto object-contain max-w-[90px] sm:max-w-none"
                />
              </div>

              {/* Vertical Divider */}
              <div className="h-6 w-[1px] bg-slate-300 hidden sm:block shrink-0" />

              {/* Executive Title */}
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-navy-900 text-sm sm:text-base lg:text-lg leading-tight tracking-tight truncate group-hover:text-corporate transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-corporate tracking-wide uppercase truncate">
                  Senior Sales Manager • Banjara Hills
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-corporate bg-corporate-light font-bold shadow-xs'
                        : 'text-body-secondary hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA Desktop */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-navy-800 bg-surface-soft hover:bg-navy-50 rounded-lg border border-navy-100 transition-colors"
                title="Call Directly"
              >
                <Phone className="w-3.5 h-3.5 text-corporate shrink-0" />
                <span className="hidden md:inline font-mono">{PERSONAL_INFO.phone}</span>
                <span className="md:hidden">Call</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-corporate hover:bg-corporate-hover rounded-lg shadow-soft-sm shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Free Advisory</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>

            {/* Mobile Actions Right */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-2.5 py-1.5 text-[11px] font-bold text-white bg-corporate rounded-lg shadow-xs"
              >
                Advisory
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-navy-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-surface-border px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1.5 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium ${
                      isActive
                        ? 'text-corporate bg-corporate-light font-bold'
                        : 'text-body-secondary hover:text-navy-800 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-navy-800 bg-surface-soft border border-navy-100"
              >
                <Phone className="w-3.5 h-3.5 text-corporate" />
                Call {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-corporate text-center shadow-md shadow-blue-500/20"
              >
                Book Personal Insurance Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
