
import React from 'react';

const partners = [
  { name: 'Manga Health', icon: 'local_pharmacy' },
  { name: 'Muri Surgicals', icon: 'emergency' },
  { name: 'Metropital', icon: 'domain' },
  { name: 'PharmaDirect', icon: 'vaccines' },
  { name: 'GlobalCare', icon: 'medication' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 border-y border-primary/5 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
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
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
