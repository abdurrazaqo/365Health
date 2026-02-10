
import React from 'react';

const partners = [
<<<<<<< HEAD
  { name: 'Manga Health', icon: 'local_pharmacy' },
  { name: 'Muri Surgicals', icon: 'emergency' },
=======
  { name: 'HealthPlus', icon: 'local_pharmacy' },
  { name: 'CityClinic', icon: 'emergency' },
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
  { name: 'Metropital', icon: 'domain' },
  { name: 'PharmaDirect', icon: 'vaccines' },
  { name: 'GlobalCare', icon: 'medication' },
];

const TrustedBy: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className="py-12 md:py-16 border-y border-primary/5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#101818]/40 mb-8 md:mb-10">
          Trusted by industry-leading providers
        </p>
        <div className="relative">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex items-center gap-2 text-lg md:text-xl font-bold cursor-default hover:text-primary transition-colors opacity-50 grayscale hover:grayscale-0 hover:opacity-100 flex-shrink-0 mx-8 md:mx-10 lg:mx-16"
              >
                <span className="material-symbols-outlined text-primary">{partner.icon}</span> 
                {partner.name}
              </div>
            ))}
          </div>
=======
    <section className="py-16 border-y border-primary/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#101818]/40 mb-10">
          Trusted by industry-leading providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-2 text-xl font-bold cursor-default hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-primary">{partner.icon}</span> 
              {partner.name}
            </div>
          ))}
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
