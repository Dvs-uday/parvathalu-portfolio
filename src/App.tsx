import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalImpact } from './components/ProfessionalImpact';
import { AboutMe } from './components/AboutMe';
import { Expertise } from './components/Expertise';
import { CoverageCalculatorSection } from './components/CoverageCalculatorSection';
import { BranchShowcase } from './components/BranchShowcase';
import { InsuranceAwareness } from './components/InsuranceAwareness';
import { ContactConnect } from './components/ContactConnect';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';
import { CoverageCalculatorModal } from './components/CoverageCalculatorModal';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState<string | undefined>(undefined);
  const [consultationTitle, setConsultationTitle] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (prefill?: string, title?: string) => {
    setConsultationPrefill(prefill);
    setConsultationTitle(title);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationPrefill(undefined);
    setConsultationTitle(undefined);
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  const handleCloseCalculator = () => {
    setIsCalculatorOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-body-primary font-sans overflow-x-hidden w-full max-w-full pb-16 sm:pb-0">
      {/* Top Navbar */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation(undefined, 'Free Insurance Advisory')} 
      />

      {/* Main Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero 
          onOpenConsultation={() => handleOpenConsultation(undefined, 'Free Insurance Advisory')} 
        />

        {/* 2. Professional Impact (Animated Stats: 12+ Yrs, 3,000+ Customers) */}
        <ProfessionalImpact />

        {/* 3. About Me */}
        <AboutMe 
          onOpenConsultation={() => handleOpenConsultation('Requesting a comprehensive Family Health Coverage Review.', 'Schedule Coverage Review')} 
        />

        {/* 4. Specialized Insurance & Leadership Expertise */}
        <Expertise />

        {/* 5. HIGHLIGHTED IN MIDDLE: Interactive Coverage Calculator & Policy Matcher */}
        <CoverageCalculatorSection
          onOpenConsultation={(details, title) => handleOpenConsultation(details, title || 'Discuss Recommended Plan')}
          onOpenCompareModal={handleOpenCalculator}
        />

        {/* 6. Star Health Insurance — Banjara Hills Branch Hub */}
        <BranchShowcase 
          onOpenConsultation={() => handleOpenConsultation(undefined, 'Contact Banjara Hills Branch')} 
        />

        {/* 7. Health Insurance Awareness & Consumer Literacy */}
        <InsuranceAwareness 
          onOpenCalculator={handleOpenCalculator}
          onOpenConsultation={() => handleOpenConsultation('Inquiry from Health Insurance Awareness Guide', 'Free Insurance Advisory')}
          onOpenAudit={() => handleOpenConsultation('Requesting a comprehensive audit of existing health policy (room rent sub-limits, exclusions, restoration benefits review).', 'Request Free Policy Audit')}
        />

        {/* 8. Contact & Connect (Banjara Hills Office) */}
        <ContactConnect />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyBar onOpenConsultation={() => handleOpenConsultation(undefined, 'Free Insurance Advisory')} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        prefillNote={consultationPrefill}
        customTitle={consultationTitle}
      />

      {/* Interactive Coverage Need Estimator / Comparison Modal */}
      <CoverageCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={handleCloseCalculator}
        onOpenConsultation={(details, title) => handleOpenConsultation(details, title || 'Discuss Recommended Plan')}
      />
    </div>
  );
};

export default App;
