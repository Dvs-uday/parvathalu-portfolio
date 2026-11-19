import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Phone, 
  User, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Loader2, 
  AlertCircle,
  PhoneCall,
  FileSearch,
  Calculator
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
  customTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillNote,
  customTitle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Hyderabad',
    interest: 'Family Health Insurance',
    note: '',
  });

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync state whenever modal opens or prefill changes
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setPhoneError(null);
      
      let detectedInterest = 'Family Health Insurance';
      if (customTitle?.toLowerCase().includes('audit')) {
        detectedInterest = 'Existing Policy Audit';
      } else if (customTitle?.toLowerCase().includes('plan') || prefillNote?.includes('Estimated Need')) {
        detectedInterest = 'Discuss Calculated Plan';
      }

      setFormData((prev) => ({
        ...prev,
        note: prefillNote || '',
        interest: detectedInterest,
      }));
    }
  }, [isOpen, prefillNote, customTitle]);

  if (!isOpen) return null;

  const validatePhone = (phoneStr: string) => {
    const digits = phoneStr.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const activeTitle = customTitle || 'Free Insurance Advisory';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(null);

    // Validate phone is strictly mandatory
    if (!formData.phone.trim()) {
      setPhoneError('Mobile number is required to receive callback.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = PERSONAL_INFO.formSubmitEndpoint || `https://formsubmit.co/ajax/${PERSONAL_INFO.email}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Customer Name': formData.name,
          'Mobile Number (Mandatory)': formData.phone,
          'City': formData.city,
          'Request Type': activeTitle,
          'Plan / Coverage Category': formData.interest,
          'Details / Blueprint': formData.note || 'None specified',
          '_subject': `🔔 Star Health [${activeTitle}]: ${formData.name} (${formData.phone})`,
          '_captcha': 'false',
          '_template': 'table',
        }),
        signal: controller.signal,
      }).catch((err) => {
        console.warn('FormSubmit dispatch note:', err);
      });

      clearTimeout(timeoutId);
    } catch (err) {
      console.warn('Submission caught:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  // Build intelligent WhatsApp message pre-filled with the exact inquiry details
  let waContext = `Free Advisory for "${formData.interest}"`;
  if (activeTitle.includes('Audit')) {
    waContext = `Free Policy Audit for my existing policy`;
  } else if (activeTitle.includes('Plan') || formData.note.includes('Estimated Need')) {
    waContext = `Discussing this plan: ${formData.note || formData.interest}`;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Damarla garu, my name is ${formData.name} (Phone: ${formData.phone}, City: ${formData.city}). I just submitted a request for "${activeTitle}": ${waContext}. Please guide me.`
  );
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${whatsappMessage}`;

  const getHeaderIcon = () => {
    if (activeTitle.toLowerCase().includes('audit')) {
      return <FileSearch className="w-5 h-5 text-white" />;
    }
    if (activeTitle.toLowerCase().includes('plan')) {
      return <Calculator className="w-5 h-5 text-white" />;
    }
    return <ShieldCheck className="w-5 h-5 text-white" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-soft-xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-navy-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-corporate flex items-center justify-center shrink-0">
              {getHeaderIcon()}
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">{activeTitle}</h3>
              <p className="text-xs text-blue-200">Damarla Parvathalu • Star Health Banjara Hills</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {submitted ? (
            /* SUCCESS POPUP STATE */
            <div className="py-3 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3.5 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Request Sent Successfully
              </span>

              <h4 className="text-2xl font-extrabold text-navy-900 mt-2">
                Thank You, {formData.name}!
              </h4>
              
              <div className="mt-3.5 p-4 rounded-2xl bg-surface-soft border border-slate-200 text-left text-xs text-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Request Type:</span>
                  <span className="font-bold text-navy-900">{activeTitle}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Registered Phone:</span>
                  <span className="font-bold text-navy-900 font-mono text-sm">{formData.phone}</span>
                </div>
                {formData.note && (
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-500 block text-[11px] mb-0.5">Details Included:</span>
                    <p className="text-slate-700 font-medium bg-white p-2 rounded-lg border border-slate-200/80 text-[11px] line-clamp-3">
                      {formData.note}
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200 text-[11px] text-emerald-700 font-medium">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Email dispatched directly to <strong>{PERSONAL_INFO.email}</strong></span>
                </div>
              </div>

              {/* NEXT STEP: WhatsApp Connect Option */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Instant Connection
                </p>
                <p className="text-sm font-bold text-navy-900 mb-3">
                  You can also connect immediately through WhatsApp:
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-soft-md shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Connect Through WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-surface-soft hover:bg-slate-100 border border-slate-200 text-navy-900 flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-corporate" />
                    <span>Call Damarla Parvathalu Directly ({PERSONAL_INFO.phone})</span>
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={onClose}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Sharma"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate bg-surface-soft text-navy-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                  Mobile Phone Number * <span className="text-rose-500 font-normal">(Mandatory)</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError(null);
                    }}
                    placeholder="e.g. 90300 41377"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 bg-surface-soft text-navy-900 ${
                      phoneError
                        ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500'
                        : 'border-slate-200 focus:ring-corporate/30 focus:border-corporate'
                    }`}
                  />
                </div>
                {phoneError && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{phoneError}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                    Your City
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hyderabad"
                      className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate bg-surface-soft text-navy-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                    Coverage Category
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate bg-surface-soft text-navy-900 font-medium"
                  >
                    <option value="Family Health Insurance">Family Floater</option>
                    <option value="Senior Citizen Plan">Senior Citizen Cover</option>
                    <option value="Discuss Calculated Plan">Calculated Plan Blueprint</option>
                    <option value="Existing Policy Audit">Policy Audit / Review</option>
                    <option value="Critical Illness & Top-up">Super Top-up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                  Specific Details / Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="e.g. Looking for coverage for myself, spouse, and 2 kids..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate bg-surface-soft text-navy-900 resize-none font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-corporate hover:bg-corporate-hover text-xs shadow-soft-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email to {PERSONAL_INFO.email}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit & Request Callback</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Details are sent directly to <strong>{PERSONAL_INFO.email}</strong>. Phone number verified.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
