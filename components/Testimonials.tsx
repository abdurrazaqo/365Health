
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Haidar Manga',
    role: 'CEO, Manga Health',
    initials: 'HM',
    text: '"Partnering with 365Health Systems has helped us streamline how we connect with pharmacies and healthcare providers."'
  },
  {
    name: 'Abdur-Razaq Odeleye',
    role: 'Pharmacy Director',
    initials: 'AO',
    text: '"365Health has made it much easier for our pharmacy to manage orders and reach more customers. The tools are simple to use and actually built with real pharmacy workflows in mind."'
  },
  {
    name: 'Adebayo Toluwalase',
    role: 'Patient',
    initials: 'LC',
    text: '"I have used my365Pharmacy to find nearby pharmacies and compare options quickly. It saves time and makes healthcare access less stressful."'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 md:mb-16 lg:mb-20 tracking-tight text-dark-text">Voices from the field</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 md:p-8 lg:p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs md:text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-dark-text text-sm">{t.name}</p>
                  <p className="text-[10px] text-dark-text/40 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
              <p className="text-dark-text/60 italic leading-relaxed text-sm">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
