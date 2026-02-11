
import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  { icon: 'bolt', title: 'Faster Operations', description: 'Reduce administrative overhead by up to 40% with intelligent automation.' },
  { icon: 'trending_up', title: 'Data-driven Decisions', description: 'Access real-time intelligence to optimize every aspect of care delivery.' },
  { icon: 'hub', title: 'Scalable Infrastructure', description: 'Built on cloud-native tech that grows seamlessly with your organization.' },
  { icon: 'health_and_safety', title: 'Improved Outcomes', description: 'Enhanced coordination leads to better patient safety and faster recovery.' },
];

const Benefits: React.FC = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Engineered for Excellence</h2>
          <p className="text-white/70 text-base md:text-lg">Why 365Health is the infrastructure of choice for leading medical institutions worldwide.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white mb-4 md:mb-6 transition-transform group-hover:scale-110 block">
                {b.icon}
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{b.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
