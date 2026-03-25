import React, { useEffect, useState, useMemo } from 'react';
import { Link, navigate } from '../router';
import {
  getPlanDetails,
  callGenerateAccessToken,
  formatPhoneNumber,
  validateNigerianPhone,
  PlanDetails
} from '../services/checkoutService';
import PaystackPop from '@paystack/inline-js';

type CheckoutState = 'form' | 'loading' | 'success' | 'error';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  pharmacyName: string;
  termsAgreed: boolean;
}

const Checkout: React.FC = () => {
  const [params, setParams] = useState<{ plan: string, cycle: string, product: string }>({ plan: '', cycle: '', product: '' });
  const [checkoutState, setCheckoutState] = useState<CheckoutState>('form');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    pharmacyName: '',
    termsAgreed: false
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [paystackRef, setPaystackRef] = useState<string>('');
  const [successData, setSuccessData] = useState<{ token: string, code: string } | null>(null);
  const [showDismissibleWarning, setShowDismissibleWarning] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Initialize from search params
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const plan = searchParams.get('plan') || '';
    const cycle = searchParams.get('cycle') || 'monthly';
    const product = searchParams.get('product') || '';

    // Enterprise or missing/invalid plan redirect
    if (plan === 'enterprise' || !['basic', 'pro'].includes(plan.toLowerCase())) {
      navigate('/contact-sales');
      return;
    }

    setParams({ plan, cycle, product });
  }, []);

  const planDetails = useMemo(() => {
    if (!params.plan) return null;
    return getPlanDetails(params.plan, params.cycle);
  }, [params.plan, params.cycle]);

  // Navigation guard for success screen
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (checkoutState === 'success') {
        e.preventDefault();
        e.returnValue = "Make sure you've saved your access code before leaving this page";
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [checkoutState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors on change
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone && !validateNigerianPhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: 'Please enter a valid Nigerian phone number' }));
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const isFormValid = useMemo(() => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      validateNigerianPhone(formData.phone) &&
      formData.pharmacyName.trim() !== '' &&
      formData.termsAgreed &&
      Object.values(errors).every(err => !err)
    );
  }, [formData, errors]);

  const handleRetryEdgeFunction = async () => {
    if (!paystackRef) return;
    performEdgeFunctionCall(paystackRef);
  };

  const performEdgeFunctionCall = async (reference: string) => {
    setCheckoutState('loading');
    setApiError(null);

    try {
      const response = await callGenerateAccessToken({
        paystack_reference: reference,
        plan: params.plan,
        billing_cycle: params.cycle,
        buyer_email: formData.email,
        buyer_phone: formData.phone,
        buyer_name: formData.fullName,
        pharmacy_name: formData.pharmacyName
      });

      if (response.success) {
        setSuccessData({ token: response.token, code: response.code });
        setCheckoutState('success');
      } else {
        throw new Error('Failed to generate access token');
      }
    } catch (error: any) {
      console.error('Edge Function Error:', error);
      setApiError(error.message || 'Something went wrong while generating your access code.');
      setCheckoutState('error');
    }
  };

  const handlePay = () => {
    if (!isFormValid || !planDetails) return;

    const reference = `PHC-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setPaystackRef(reference);
    setShowDismissibleWarning(false);

    const publicKey = (import.meta as any).env.VITE_PAYSTACK_PUBLIC_KEY;

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      email: formData.email,
      amount: planDetails.amountKobo,
      currency: 'NGN',
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: "Full Name", variable_name: "full_name", value: formData.fullName },
          { display_name: "Phone Number", variable_name: "phone", value: formData.phone },
          { display_name: "Pharmacy Name", variable_name: "pharmacy_name", value: formData.pharmacyName },
          { display_name: "Plan", variable_name: "plan", value: params.plan },
          { display_name: "Billing Cycle", variable_name: "billing_cycle", value: params.cycle },
          { display_name: "Product", variable_name: "product", value: 'pharmacore' }
        ]
      },
      onSuccess: (transaction: any) => {
        performEdgeFunctionCall(transaction.reference);
      },
      onCancel: () => {
        setShowDismissibleWarning(true);
      }
    });
  };

  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(type);
    setTimeout(() => setCopyFeedback(null), 2000);
  };

  const startOnboarding = (url: string) => {
    // Remove beforeunload listener
    window.onbeforeunload = null;
    window.location.href = url;
  };

  if (checkoutState === 'success' && successData) {
    const onboardUrl = `https://pharmacore.365health.online/onboard?token=${successData.token}`;

    return (
      <section className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-teal-50 dark:border-primary/20 text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-teal-50 dark:bg-primary/20 text-primary rounded-full flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-black text-dark-text">Payment Successful! 🎉</h1>
            <p className="text-dark-text/60">Your access code has been sent to <span className="font-semibold text-dark-text">{formData.email}</span></p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-50 dark:bg-primary/5 rounded-2xl border-2 border-dashed border-teal-200 dark:border-primary/20 relative group">
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-2">Your Access Code</div>
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary tracking-wider">{successData.code}</div>
              <button
                onClick={() => copyToClipboard(successData.code, 'code')}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                {copyFeedback === 'code' ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="text-sm font-semibold text-dark-text">Direct Onboarding Link</div>
              <div className="text-xs bg-gray-50 p-3 rounded-lg text-dark-text/60 break-all border border-gray-100">
                {onboardUrl}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => copyToClipboard(onboardUrl, 'link')}
                  className="flex-1 px-6 py-3 border-2 border-gray-100 hover:border-primary/20 rounded-full text-sm font-bold text-dark-text transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  {copyFeedback === 'link' ? 'Copied!' : 'Copy Link'}
                </button>
                <button
                  onClick={() => startOnboarding(onboardUrl)}
                  className="flex-1 px-8 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-lg shadow-primary/20"
                >
                  Start Onboarding →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 text-left border border-amber-100 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <span className="material-symbols-outlined text-lg">warning</span>
              Important Notice
            </div>
            <ul className="text-amber-800/70 text-xs space-y-1 list-disc pl-4">
              <li>Save your access code somewhere safe.</li>
              <li>It expires in 14 days and can only be used once.</li>
              <li>Lost it? Contact support at <a href="mailto:hello@365health.online" className="font-bold underline">hello@365health.online</a></li>
            </ul>
          </div>

          <div className="text-left space-y-6 pt-4 border-t border-gray-100">
            <h3 className="font-bold text-dark-text">What happens next?</h3>
            <div className="space-y-4">
              {[
                { step: 1, text: "Click the onboarding link or visit PharmaCore and enter your code manually", icon: 'link' },
                { step: 2, text: "Fill in your pharmacy details (takes about 3 minutes)", icon: 'edit_note' },
                { step: 3, text: "We review and approve your application within 24 hours", icon: 'verified_user' },
                { step: 4, text: "You receive your admin setup link and start your 30-day free trial", icon: 'celebration' }
              ].map(item => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 border border-primary/10">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  <p className="text-sm text-dark-text/60 leading-relaxed"><span className="font-bold text-dark-text">{item.step}.</span> {item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 px-6 md:px-12 lg:px-16 bg-gray-50 min-h-screen">
      {/* Loading Overlay */}
      {checkoutState === 'loading' && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
          <p className="font-bold text-primary animate-pulse">Generating your access code...</p>
        </div>
      )}

      {/* Persistence Error Box */}
      {checkoutState === 'error' && (
        <div className="max-w-4xl mx-auto mb-8 animate-in slide-in-from-top duration-500">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 text-red-800">
              <span className="material-symbols-outlined text-3xl">error</span>
              <h2 className="text-lg md:text-xl font-black">Payment received but access code generation failed</h2>
            </div>
            <p className="text-red-800/70 text-sm md:text-base">
              Please contact support at <a href="mailto:hello@365health.online" className="font-bold underline">hello@365health.online</a> with your payment reference: <span className="font-mono bg-white/50 px-2 rounded">{paystackRef}</span>
            </p>
            <p className="text-red-800 font-bold text-sm">
              Do not make another payment — your payment was successful.
            </p>
            <div className="pt-2">
              <button
                onClick={handleRetryEdgeFunction}
                className="px-6 py-2.5 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">refresh</span>
                Try again
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl">365</div>
            <div>
              <h1 className="text-2xl font-black text-dark-text tracking-tight">Checkout</h1>
              <p className="text-dark-text/60 text-sm">Secure pharmacy subscription</p>
            </div>
          </div>
          <Link to="/products/pharmacore#pricing" className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Change plan
          </Link>
        </div>

        {showDismissibleWarning && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-between text-amber-800 animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-lg">info</span>
              Payment was not completed. Your details have been saved — click Pay to try again.
            </div>
            <button onClick={() => setShowDismissibleWarning(false)} className="material-symbols-outlined text-lg hover:bg-amber-200/50 rounded-full p-1 transition-colors">close</button>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6 animate-in slide-in-from-left duration-500">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex justify-between items-start mb-6 border-b border-gray-50 pb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-1">Selected Plan</div>
                  <h2 className="text-2xl font-black text-dark-text">{planDetails?.name || 'Loading...'}</h2>
                </div>
                <div className="p-2 bg-primary/5 rounded-lg">
                  <div className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-primary uppercase border border-primary/10">
                    {params.cycle}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-sm font-bold text-dark-text uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Inclusions
                </div>
                <ul className="space-y-3">
                  {planDetails?.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-dark-text/60">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center bg-teal-50/50 dark:bg-primary/10 p-3 rounded-xl border border-teal-100/50 dark:border-primary/20">
                  <span className="text-sm font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">card_giftcard</span>
                    30-day free trial included
                  </span>
                  <span className="text-[10px] font-bold text-primary/80 dark:text-primary dark:bg-primary/20 bg-white px-2 py-0.5 rounded-full uppercase border border-primary/10">Active</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-dark-text/60 text-sm">
                    <span>Plan price</span>
                    <span>₦{planDetails?.amountNaira.toLocaleString()}</span>
                  </div>
                  {params.cycle === 'annual' && planDetails?.annualSavings && (
                    <>
                      <div className="flex justify-between text-green-600 text-sm font-bold">
                        <span>Total savings</span>
                        <span>-₦{planDetails.annualSavings.toLocaleString()}</span>
                      </div>
                      <div className="text-[10px] text-dark-text/40 text-right">
                        (Equivalent to ₦{planDetails.monthlyEquivalent?.toLocaleString()}/month)
                      </div>
                    </>
                  )}
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-50">
                    <div className="text-lg font-black text-dark-text">Total due</div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-primary leading-none">₦{planDetails?.amountNaira.toLocaleString()}</div>
                      <div className="text-[10px] text-dark-text/40">VAT inclusive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-dark-text">Money-back Guarantee</div>
                <p className="text-xs text-dark-text/60 leading-relaxed">Cancel anytime during your trial. No charges will be applied to your card until the trial ends.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Form */}
          <div className="lg:col-span-7 animate-in slide-in-from-right duration-500">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-dark-text">Complete your purchase</h2>
                <p className="text-sm text-dark-text/60">Fill in your details to proceed to secure payment.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-text/60 uppercase tracking-widest pl-1">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-dark-text/30">person</span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-text/60 uppercase tracking-widest pl-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-dark-text/30">mail</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-text/60 uppercase tracking-widest pl-1 flex justify-between">
                    Phone Number
                    {errors.phone && <span className="text-[10px] text-red-500 normal-case font-medium">{errors.phone}</span>}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-dark-text/30">phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handlePhoneBlur}
                      placeholder="08123456789"
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.phone ? 'border-red-200 ring-1 ring-red-50' : 'border-gray-100'} rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none`}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-text/60 uppercase tracking-widest pl-1">Pharmacy Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-dark-text/30">store</span>
                    <input
                      type="text"
                      name="pharmacyName"
                      value={formData.pharmacyName}
                      onChange={handleInputChange}
                      placeholder="365 Pharmacy"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 group cursor-pointer">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="termsAgreed"
                      checked={formData.termsAgreed}
                      onChange={handleInputChange}
                      className="sr-only peer"
                      required
                    />
                    <div className="w-5 h-5 bg-gray-100 border border-gray-200 rounded peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white scale-0 peer-checked:scale-100 transition-transform material-symbols-outlined text-sm">check</span>
                  </div>
                  <span className="text-sm text-dark-text/60 leading-relaxed group-hover:text-dark-text transition-colors">
                    I agree to the <Link to="/terms" className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>
                  </span>
                </label>
              </div>

              <div className="space-y-6">
                <button
                  onClick={handlePay}
                  disabled={!isFormValid || checkoutState === 'loading'}
                  className={`w-full py-4 rounded-xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${isFormValid && checkoutState !== 'loading'
                      ? 'bg-primary text-white hover:bg-secondary hover:-translate-y-1 shadow-primary/20'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                    }`}
                >
                  <span className="material-symbols-outlined text-2xl">lock</span>
                  Pay ₦{planDetails?.amountNaira.toLocaleString()} Securely
                </button>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                    <img src="/paystack-logo.svg" alt="Paystack" className="h-4" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-dark-text">
                      <span className="material-symbols-outlined text-sm">enhanced_encryption</span>
                      Secured by Paystack
                    </div>
                  </div>
                  <div className="flex items-center gap-3 opacity-30">
                    <span className="material-symbols-outlined text-2xl">credit_card</span>
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
