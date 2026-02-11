
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-16 hero-gradient overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest w-fit border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next-Gen Healthcare Infrastructure
          </div>
          
          <h1 className="text-[2rem] leading-[0.95] md:text-3xl lg:text-4xl xl:text-5xl md:leading-[0.95] font-black tracking-tight text-dark-text">
            Infrastructure for modern <span className="text-primary">healthcare</span> operations
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-dark-text/60 leading-relaxed max-w-xl">
            Revolutionizing healthcare with advanced analytics, and scalable digital infrastructure for the modern era.
          </p>
          
          <div className="flex flex-row gap-3 pt-2 md:pt-4">
            <a href="#cta" className="flex-1 sm:flex-initial sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-primary text-white rounded-full font-semibold text-sm md:text-base hover:bg-secondary transition-all flex items-center justify-center gap-2 no-underline">
              Get Started
              <span className="material-symbols-outlined text-base md:text-lg">arrow_forward</span>
            </a>
            <a href="#about" className="flex-1 sm:flex-initial sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-transparent border border-gray-300 text-dark-text rounded-full font-semibold text-sm md:text-base hover:bg-gray-50 transition-all no-underline text-center">
              About Us
            </a>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-6 md:-inset-10 bg-primary/20 rounded-full blur-[100px] opacity-40"></div>
          <div className="relative p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-[2.5rem] transition-transform hover:-translate-y-2 duration-700" style={{background: 'radial-gradient(circle, rgba(0,108,117,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
            <div className="w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center p-6 md:p-8 lg:p-12 relative">
              {/* Clean Healthcare Infrastructure Illustration */}
              <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#006c75" stopOpacity="0.2"/>
                    <stop offset="50%" stopColor="#006c75" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#006c75" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
                
                {/* Horizontal flowing lines representing data streams */}
                <g opacity="0.4">
                  <line x1="50" y1="120" x2="550" y2="120" stroke="url(#lineGradient)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="x1" values="50;100;50" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="550;600;550" dur="4s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50" y1="160" x2="550" y2="160" stroke="url(#lineGradient)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="x1" values="50;0;50" dur="5s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="550;500;550" dur="5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50" y1="200" x2="550" y2="200" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="x1" values="50;100;50" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="550;600;550" dur="3.5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50" y1="240" x2="550" y2="240" stroke="url(#lineGradient)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="x1" values="50;0;50" dur="4.5s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="550;500;550" dur="4.5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50" y1="280" x2="550" y2="280" stroke="url(#lineGradient)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="x1" values="50;100;50" dur="5.5s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="550;600;550" dur="5.5s" repeatCount="indefinite"/>
                  </line>
                </g>
                
                {/* Left side - Input/Source */}
                <g transform="translate(80, 200)">
                  <rect x="-40" y="-60" width="80" height="120" rx="12" fill="none" stroke="#006c75" strokeWidth="2.5"/>
                  <circle cy="-30" r="8" fill="#006c75"/>
                  <circle cy="0" r="8" fill="#006c75"/>
                  <circle cy="30" r="8" fill="#006c75"/>
                  <text x="0" y="80" textAnchor="middle" fill="#006c75" fontSize="13" fontWeight="600">Data Sources</text>
                </g>
                
                {/* Center - Processing Hub */}
                <g transform="translate(300, 200)">
                  <circle r="70" fill="none" stroke="#006c75" strokeWidth="2.5"/>
                  <circle r="50" fill="none" stroke="#006c75" strokeWidth="1.5" opacity="0.5"/>
                  
                  {/* Medical cross */}
                  <rect x="-4" y="-20" width="8" height="40" rx="4" fill="#006c75"/>
                  <rect x="-20" y="-4" width="40" height="8" rx="4" fill="#006c75"/>
                  
                  {/* Rotating ring */}
                  <circle r="60" fill="none" stroke="#006c75" strokeWidth="1" strokeDasharray="10 10" opacity="0.3">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
                  </circle>
                  
                  <text x="0" y="95" textAnchor="middle" fill="#006c75" fontSize="13" fontWeight="600">365Health</text>
                </g>
                
                {/* Right side - Output/Services */}
                <g transform="translate(520, 200)">
                  <rect x="-40" y="-60" width="80" height="120" rx="12" fill="none" stroke="#006c75" strokeWidth="2.5"/>
                  
                  {/* Pharmacy icon */}
                  <g transform="translate(0, -30)">
                    <path d="M -6 -6 L -6 6 M -6 0 L 6 0" stroke="#006c75" strokeWidth="2.5" strokeLinecap="round"/>
                  </g>
                  
                  {/* Analytics icon */}
                  <g transform="translate(0, 0)">
                    <path d="M -8 4 L -4 -2 L 0 2 L 4 -4 L 8 0" stroke="#006c75" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  
                  {/* Patient icon */}
                  <g transform="translate(0, 30)">
                    <circle r="4" fill="none" stroke="#006c75" strokeWidth="2"/>
                    <path d="M -6 12 Q -6 8 0 8 Q 6 8 6 12" stroke="#006c75" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </g>
                  
                  <text x="0" y="80" textAnchor="middle" fill="#006c75" fontSize="13" fontWeight="600">Services</text>
                </g>
                
                {/* Connecting arrows */}
                <g stroke="#006c75" strokeWidth="2" fill="none" opacity="0.5">
                  <path d="M 120 200 L 230 200" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 110;110 0" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <polygon points="225,195 235,200 225,205" fill="#006c75"/>
                  
                  <path d="M 370 200 L 480 200" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 110;110 0" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <polygon points="475,195 485,200 475,205" fill="#006c75"/>
                </g>
                
                {/* Flowing particles */}
                <circle r="5" fill="#006c75" opacity="0.8">
                  <animateMotion path="M 120 200 L 230 200" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle r="5" fill="#006c75" opacity="0.8">
                  <animateMotion path="M 370 200 L 480 200" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            {/* Floating indicator */}
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 bg-white p-2.5 md:p-3 lg:p-4 rounded-lg md:rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-base md:text-lg lg:text-xl">analytics</span>
              </div>
              <div>
                <p className="text-[8px] md:text-[9px] lg:text-[10px] font-bold text-dark-text/40 uppercase tracking-widest">Growth</p>
                <p className="text-[11px] md:text-xs lg:text-sm font-black text-dark-text">+40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
