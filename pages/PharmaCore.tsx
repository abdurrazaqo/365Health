import React, { useState, useEffect, useRef } from 'react';

// Hero Section Component
const PharmaCoreHero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-16 hero-gradient overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Multi-Tenant Pharmacy SaaS
        </div>
        
        <h1 className="text-[2rem] leading-[0.95] md:text-3xl lg:text-4xl xl:text-5xl md:leading-[0.95] font-black tracking-tight text-dark-text mb-6">
          Complete Pharmacy Management <span className="text-primary">Simplified</span>
        </h1>
        
        <p className="text-sm md:text-base lg:text-lg text-dark-text/60 leading-relaxed max-w-2xl mx-auto mb-8">
          Cloud-based pharmacy management system with inventory tracking, POS billing, multi-branch support, and role-based access control. Everything you need to run a modern pharmacy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 md:pt-4">
          <a href="#pricing" className="px-6 md:px-8 py-3 md:py-3.5 bg-primary text-white rounded-full font-semibold text-sm md:text-base hover:bg-secondary transition-all flex items-center justify-center gap-2 no-underline">
            View Pricing
            <span className="material-symbols-outlined text-base md:text-lg">arrow_forward</span>
          </a>
          <a href="#pricing" className="px-6 md:px-8 py-3 md:py-3.5 bg-transparent border border-gray-300 text-dark-text rounded-full font-semibold text-sm md:text-base hover:bg-gray-50 transition-all no-underline text-center">
            Start Subscription
          </a>
        </div>
      </div>
    </section>
  );
};

// Product Overview Section
const ProductOverview: React.FC = () => {
  const features = [
    { icon: 'cloud', title: 'Cloud-Based', description: 'Access your pharmacy data securely from anywhere, anytime' },
    { icon: 'inventory_2', title: 'Inventory Management', description: 'Real-time stock tracking with automated reorder alerts' },
    { icon: 'point_of_sale', title: 'POS & Billing', description: 'Fast, accurate billing with multiple payment methods' },
    { icon: 'admin_panel_settings', title: 'Role-Based Access', description: 'Secure user permissions for different staff levels' },
    { icon: 'account_tree', title: 'Multi-Branch Support', description: 'Manage multiple pharmacy locations from one dashboard' },
    { icon: 'lock', title: 'Secure Login', description: 'Enterprise-grade security with encrypted data storage' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">What is PharmaCore?</h2>
          <p className="text-dark-text/60 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive multi-tenant SaaS platform designed specifically for modern pharmacy operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-primary/5 text-primary material-symbols-outlined transition-colors group-hover:bg-primary group-hover:text-white text-2xl md:text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-dark-text">{feature.title}</h3>
              <p className="text-dark-text/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  const features = [
    { icon: 'schedule', title: 'Inventory & Expiry Tracking', description: 'Monitor stock levels in real-time with automated expiry date alerts to minimize waste' },
    { icon: 'dashboard', title: 'Real-time Sales Dashboard', description: 'Comprehensive analytics showing sales trends, top products, and revenue insights' },
    { icon: 'group', title: 'Role-Based User Management', description: 'Assign specific permissions to pharmacists, cashiers, and administrators' },
    { icon: 'history', title: 'Audit Logs', description: 'Complete transaction history and user activity tracking for compliance' },
    { icon: 'store', title: 'Branch Management', description: 'Centralized control over multiple pharmacy locations with individual reporting' },
    { icon: 'backup', title: 'Secure Cloud Backups', description: 'Automatic daily backups with 99.9% uptime guarantee and disaster recovery' },
    { icon: 'subscriptions', title: 'Subscription Control', description: 'Flexible subscription management with easy plan upgrades and downgrades' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">Powerful Features</h2>
          <p className="text-dark-text/60 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to manage your pharmacy efficiently and securely
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 md:gap-5 p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/5 text-primary material-symbols-outlined transition-colors group-hover:bg-primary group-hover:text-white text-xl md:text-2xl">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-dark-text text-base md:text-lg mb-2">{feature.title}</h4>
                <p className="text-sm md:text-base text-dark-text/60 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks: React.FC = () => {
  const steps = [
    { number: '01', title: 'Choose a Plan', description: 'Select the subscription tier that fits your pharmacy size and needs', icon: 'checklist' },
    { number: '02', title: 'Pay Securely via Paystack', description: 'Complete payment through our secure Paystack integration', icon: 'payment' },
    { number: '03', title: 'Receive Onboarding Link', description: 'Get instant access to your personalized setup portal', icon: 'mail' },
    { number: '04', title: 'Get Approved', description: 'Our team verifies your pharmacy credentials and activates your account', icon: 'verified' },
    { number: '05', title: 'Start Managing', description: 'Begin using PharmaCore to streamline your pharmacy operations', icon: 'rocket_launch' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">How It Works</h2>
          <p className="text-dark-text/60 text-base md:text-lg max-w-2xl mx-auto">
            Get started with PharmaCore in five simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/5 border-2 border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">{step.icon}</span>
                </div>
                <div className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-2">Step {step.number}</div>
                <h3 className="text-base md:text-lg font-bold text-dark-text mb-2">{step.title}</h3>
                <p className="text-xs md:text-sm text-dark-text/60 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₦15,000',
      period: '/month',
      description: 'Perfect for single pharmacy locations',
      features: [
        'Single branch support',
        'Up to 5 users',
        'Basic inventory management',
        'POS & billing',
        'Email support',
        'Daily backups',
      ],
      cta: 'Start Basic Plan',
      href: '/checkout?product=pharmacore&plan=basic',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '₦35,000',
      period: '/month',
      description: 'Ideal for growing pharmacy businesses',
      features: [
        'Up to 3 branches',
        'Up to 15 users',
        'Advanced inventory & expiry tracking',
        'Real-time analytics dashboard',
        'Role-based access control',
        'Priority support',
        'Audit logs',
      ],
      cta: 'Start Pro Plan',
      href: '/checkout?product=pharmacore&plan=pro',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large pharmacy chains',
      features: [
        'Unlimited branches',
        'Unlimited users',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom training',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      href: '/contact-sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">Simple, Transparent Pricing</h2>
          <p className="text-dark-text/60 text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your pharmacy needs. All plans include core features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-primary text-white border-primary shadow-xl scale-105' 
                  : 'bg-white text-dark-text border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  Recommended
                </div>
              )}
              
              <h3 className={`text-xl md:text-2xl font-black mb-2 ${plan.highlighted ? 'text-white' : 'text-dark-text'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-dark-text'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-dark-text/60'}`}>
                  {plan.period}
                </span>
              </div>
              
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-dark-text/60'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={`material-symbols-outlined text-lg ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                      check_circle
                    </span>
                    <span className={plan.highlighted ? 'text-white/90' : 'text-dark-text/70'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={plan.href}
                className={`block w-full px-6 py-3 rounded-full font-semibold text-sm text-center transition-all ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-secondary'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I subscribe to PharmaCore?',
      answer: 'Simply choose your preferred plan from our pricing section, complete the secure payment via Paystack, and you\'ll receive an onboarding link immediately. Our team will verify your pharmacy credentials and activate your account within 24 hours.',
    },
    {
      question: 'Can I manage multiple pharmacy branches?',
      answer: 'Yes! Our Pro plan supports up to 3 branches, while our Enterprise plan offers unlimited branch management. Each branch can have its own inventory, staff, and reporting while maintaining centralized oversight.',
    },
    {
      question: 'Is my pharmacy data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption for all data storage and transmission. Your data is backed up daily with 99.9% uptime guarantee. We comply with healthcare data protection standards and maintain strict access controls.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you\'ll get immediate access to new features. Downgrades take effect at the start of your next billing cycle.',
    },
    {
      question: 'What happens if my subscription expires?',
      answer: 'You\'ll receive email reminders before expiration. If your subscription expires, your account enters read-only mode - you can view data but not make changes. Reactivate anytime to restore full access. We retain your data for 90 days.',
    },
    {
      question: 'Do you offer training and support?',
      answer: 'Yes! All plans include email support and access to our knowledge base. Pro plans get priority support, while Enterprise customers receive dedicated account management, custom training sessions, and 24/7 phone support.',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">Frequently Asked Questions</h2>
          <p className="text-dark-text/60 text-base md:text-lg">
            Everything you need to know about PharmaCore
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 hover:bg-white transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-dark-text text-sm md:text-base pr-4">{faq.question}</span>
                <span className={`material-symbols-outlined text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-5 md:pb-6">
                  <p className="text-dark-text/60 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-4 md:space-y-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
            Ready to Digitize Your Pharmacy?
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-lg mx-auto">
            Join modern pharmacies using PharmaCore to streamline operations and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 md:pt-3">
            <a href="#pricing" className="bg-white text-primary px-7 md:px-10 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-all shadow-lg active:scale-95 inline-flex items-center justify-center gap-2">
              Subscribe Now
              <span className="material-symbols-outlined text-base md:text-lg">arrow_forward</span>
            </a>
            <a href="/contact-sales" className="bg-transparent border-2 border-white text-white px-7 md:px-10 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all inline-block text-center">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main PharmaCore Page Component
const PharmaCore: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PharmaCoreHero />
      <ProductOverview />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default PharmaCore;
