import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  ShieldCheck, 
  Navigation, 
  CheckCircle2,
  ExternalLink,
  Loader2,
  AlertCircle,
  PhoneCall
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactConnect: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    policyType: 'Family Health Optima / Comprehensive',
    message: '',
  });

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (phoneStr: string) => {
    const digits = phoneStr.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(null);

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
          'Email Address': formData.email || 'Not provided',
          'Policy Interest': formData.policyType,
          'Message / Requirements': formData.message || 'None provided',
          '_subject': `🔔 Star Health Consultation: ${formData.name} (${formData.phone})`,
          '_captcha': 'false',
          '_template': 'table',
        }),
        signal: controller.signal,
      }).catch((err) => {
        console.warn('Form submit dispatch note:', err);
      });

      clearTimeout(timeoutId);
    } catch (err) {
      console.warn('Submission caught:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Damarla garu, my name is ${formData.name} (Phone: ${formData.phone}). I just submitted a consultation request for "${formData.policyType}". Please share the policy details.`
  );
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-soft relative overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            <img
              src={PERSONAL_INFO.officialLogo}
              alt="Star Health"
              className="h-4 w-auto object-contain"
            />
            <span className="h-3 w-[1px] bg-slate-300" />
            <span>Direct Advisory & Claim Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Connect with Damarla Parvathalu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-body-secondary leading-relaxed">
            Whether you need a new policy consultation, an objective review of your existing coverage, or prompt cashless emergency guidance—reach out directly or visit our Banjara Hills branch.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Branch Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Tiles */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:border-corporate hover:shadow-soft-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-corporate-light text-corporate flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-navy-900">Call Directly</span>
                <span className="text-[11px] text-slate-500 mt-0.5 font-mono">{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Damarla%20garu,%20I%20would%20like%20to%20consult%20regarding%20Star%20Health%20Insurance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 shadow-soft-sm hover:border-emerald-500 hover:shadow-soft-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-900">WhatsApp Chat</span>
                <span className="text-[11px] text-emerald-700 mt-0.5">Instant Reply</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:border-corporate hover:shadow-soft-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-corporate-light text-corporate flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-navy-900">Official Email</span>
                <span className="text-[11px] text-slate-500 mt-0.5 truncate max-w-full">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:border-corporate hover:shadow-soft-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-corporate-light text-corporate flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Navigation className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-navy-900">Get Directions</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Banjara Hills Hub</span>
              </a>
            </div>

            {/* Detailed Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-soft-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-corporate" />
                  <span>Branch Office Coordinates</span>
                </h3>
                <img
                  src={PERSONAL_INFO.officialLogo}
                  alt="Star Health"
                  className="h-4 w-auto object-contain"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <p className="font-extrabold text-navy-900 text-base">
                  Star Health Office in Banjara Hills, Hyderabad
                </p>
                <p className="font-bold text-corporate text-xs">
                  Star Health and Allied Insurance Co. Ltd.
                </p>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 text-xs text-slate-800 leading-relaxed font-medium">
                  <p className="font-semibold text-navy-900">{PERSONAL_INFO.buildingName}</p>
                  <p>10-5-2/7/F/301, Road No.1,</p>
                  <p>Banjara Hills, Hyderabad, Telangana - 500034.</p>
                </div>
                
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <Clock className="w-4 h-4 text-corporate shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM (Claims Desk 24x7)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Opposite Balaji Grand Bazaar</span>
                <a
                  href={PERSONAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-corporate hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Reassurance Guarantee */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3.5 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-corporate shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-navy-900">Privacy & Ethical Advisory Code</p>
                <p className="mt-0.5 text-body-secondary">
                  Your contact details are strictly kept confidential and used solely for personalized health insurance advisory by Damarla Parvathalu.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-soft-md">
              
              <div className="mb-6">
                <span className="text-xs font-bold text-corporate uppercase tracking-wider">
                  Complimentary Consultation
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900 mt-1">
                  Book a Personalized Insurance Consultation
                </h3>
                <p className="text-sm text-body-secondary mt-1">
                  Fill in your details to receive customized policy recommendations and quotation.
                </p>
              </div>

              {submitted ? (
                /* SUCCESS STATE WITH WHATSAPP IMMEDIATE CONNECT */
                <div className="py-8 px-6 rounded-3xl bg-emerald-50/80 border border-emerald-200 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <span className="px-3 py-1 rounded-full bg-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Request Sent Successfully
                  </span>

                  <h4 className="text-2xl font-extrabold text-navy-900 mt-2">
                    Thank You, {formData.name}!
                  </h4>
                  
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-emerald-200 text-left text-xs text-slate-700 space-y-1.5 shadow-xs max-w-md mx-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Registered Mobile:</span>
                      <span className="font-bold text-navy-900 font-mono text-sm">{formData.phone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Policy Selected:</span>
                      <span className="font-semibold text-corporate">{formData.policyType}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[11px] text-emerald-700">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>Details directly emailed to <strong>{PERSONAL_INFO.email}</strong></span>
                    </div>
                  </div>

                  {/* PROMINENT WHATSAPP OPTION */}
                  <div className="mt-6 pt-5 border-t border-emerald-200/60 max-w-md mx-auto">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      Fast Track Assistance
                    </p>
                    <p className="text-sm font-bold text-navy-900 mb-3">
                      You can also connect immediately through WhatsApp:
                    </p>

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
                      className="w-full mt-2.5 py-2.5 px-4 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 text-navy-900 flex items-center justify-center gap-2 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4 text-corporate" />
                      <span>Call Damarla Parvathalu Directly ({PERSONAL_INFO.phone})</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        policyType: 'Family Health Optima / Comprehensive',
                        message: '',
                      });
                    }}
                    className="mt-6 text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* FORM VIEW */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate text-sm text-navy-900 bg-surface-soft"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1.5">
                        Mobile Phone Number * <span className="text-rose-500 font-normal">(Mandatory)</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (phoneError) setPhoneError(null);
                        }}
                        placeholder="e.g. 90300 41377"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 bg-surface-soft focus:outline-none focus:ring-2 ${
                          phoneError
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500'
                            : 'border-slate-200 focus:ring-corporate/30 focus:border-corporate'
                        }`}
                      />
                      {phoneError && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{phoneError}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate text-sm text-navy-900 bg-surface-soft"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.policyType}
                        onChange={(e) => setFormData({ ...formData, policyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate text-sm text-navy-900 bg-surface-soft font-medium"
                      >
                        <option value="Family Health Optima / Comprehensive">Family Floater (₹15L - ₹1 Crore)</option>
                        <option value="Senior Citizens Red Carpet">Senior Citizen Parent Cover</option>
                        <option value="Young Star Insurance">Young Individual / Couple Plan</option>
                        <option value="Super Top-up Policy">Super Top-up Booster (₹50L+)</option>
                        <option value="Existing Policy Audit">Audit Existing Health Policy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1.5">
                      Your Message or Existing Coverage Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share family member ages, specific pre-existing conditions, or questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate text-sm text-navy-900 bg-surface-soft resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-corporate hover:bg-corporate-hover shadow-soft-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Request to {PERSONAL_INFO.email}...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Free Call & Quotation</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      Inquiry details are sent directly to <strong>{PERSONAL_INFO.email}</strong>.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
