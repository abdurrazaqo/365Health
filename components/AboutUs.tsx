import React, { useState, useEffect, useRef } from 'react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && count < 40) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text leading-tight">About <span className="text-primary">365Health Systems</span></h2>
          <p className="text-dark-text/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Building the future of healthcare infrastructure, one system at a time.
          </p>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-dark-text">Our Mission</h3>
            <p className="text-dark-text/60 text-base leading-relaxed">
              We're on a mission to revolutionize healthcare operations through cutting-edge technology. 
              By providing comprehensive management systems, advanced analytics, and seamless digital infrastructure, 
              we empower healthcare providers to focus on what matters most—delivering exceptional patient care.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-dark-text">Why Choose Us</h3>
            <p className="text-dark-text/60 text-base leading-relaxed">
              365Health Systems combines healthcare expertise with modern technology to create 
              solutions that are both powerful and intuitive. Our platform is designed to streamline operations, 
              reduce administrative overhead, and improve patient outcomes through intelligent automation and real-time insights.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-2xl overflow-hidden pt-8">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-dark-text/40 mb-3">Founded</p>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">2026</div>
                <p className="text-sm text-dark-text/60">Building next-gen healthcare tech</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-dark-text/40 mb-3">Efficiency Gain</p>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">{count}%+</div>
                <p className="text-sm text-dark-text/60">Average operational improvement</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-dark-text/40 mb-3">Support</p>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">24/7</div>
                <p className="text-sm text-dark-text/60">Always available for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
