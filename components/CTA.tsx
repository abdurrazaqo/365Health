
import React from 'react';

const CTA: React.FC = () => {
<<<<<<< HEAD
  // Cache bust: 2026-02-10-18:30
  return (
    <section id="cta" className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-4 md:space-y-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
            Build the future of healthcare with 365Health Systems
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-lg mx-auto">
            Join other healthcare providers modernizing their operations with our high-performance infrastructure.
          </p>
          <div className="pt-2 md:pt-3">
            <a href="mailto:hello@365health.online" className="bg-white text-primary px-7 md:px-10 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-all shadow-lg active:scale-95 inline-flex items-center gap-2">
              Get Started
              <span className="material-symbols-outlined text-base md:text-lg">arrow_forward</span>
            </a>
=======
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
        
        {/* Horizontal Line as seen in screenshot */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
        
        <div className="relative z-10 space-y-10">
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight max-w-4xl mx-auto">
            Build the future of healthcare with 365Health
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
            Join over 5,000 providers modernizing their operations with our high-performance infrastructure.
          </p>
          <div className="pt-6">
            <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl active:scale-95">
              Get Started for Free
            </button>
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
