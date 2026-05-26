
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
              <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="primaryTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#008a94"/>
                    <stop offset="100%" stopColor="#006c75"/>
                  </linearGradient>
                  
                  <linearGradient id="secondaryTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#114b51"/>
                    <stop offset="100%" stopColor="#0a2a2d"/>
                  </linearGradient>

                  <linearGradient id="warningOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b"/>
                    <stop offset="100%" stopColor="#d97706"/>
                  </linearGradient>

                  <linearGradient id="successGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>

                  <linearGradient id="accentBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#1d4ed8"/>
                  </linearGradient>

                  <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.90"/>
                  </linearGradient>

                  <linearGradient id="dataLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#006c75" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#006c75" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#006c75" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>

                <g opacity="0.6">
                  <path d="M 120 220 Q 210 270 310 220" fill="none" stroke="url(#dataLineGrad)" strokeWidth="3" strokeDasharray="6 6">
                    <animate attributeName="stroke-dashoffset" values="100;0" dur="4s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 310 220 Q 410 170 500 220" fill="none" stroke="url(#dataLineGrad)" strokeWidth="3" strokeDasharray="6 6">
                    <animate attributeName="stroke-dashoffset" values="0;100" dur="4s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 120 220 C 200 350, 420 350, 500 220" fill="none" stroke="url(#dataLineGrad)" strokeWidth="2" strokeDasharray="8 8">
                    <animate attributeName="stroke-dashoffset" values="120;0" dur="6s" repeatCount="indefinite"/>
                  </path>
                </g>

                <circle r="4" fill="#006c75">
                  <animateMotion path="M 120 220 Q 210 270 310 220" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle r="4" fill="#10b981">
                  <animateMotion path="M 310 220 Q 410 170 500 220" dur="3s" repeatCount="indefinite"/>
                </circle>

                <g transform="translate(40, 60)">
                  <rect x="0" y="0" width="130" height="260" rx="20" fill="#0a1a1c" stroke="#006c75" strokeWidth="3" />
                  <rect x="5" y="5" width="120" height="250" rx="16" fill="#f8fafc" />
                  <rect x="40" y="5" width="50" height="12" rx="6" fill="#0a1a1c" />
                  
                  <text x="65" y="32" textAnchor="middle" fill="#114b51" fontSize="10" fontWeight="900" letterSpacing="1">my365</text>
                  <circle cx="100" cy="28" r="2" fill="#10b981" />
                  <line x1="15" y1="40" x2="115" y2="40" stroke="#e2e8f0" strokeWidth="1" />

                  <g transform="translate(12, 50)">
                    <rect x="0" y="0" width="106" height="60" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="18" cy="18" r="8" fill="#006c75" fillOpacity="0.1" />
                    <path d="M 14 16 L 22 20 M 16 14 L 20 22" stroke="#006c75" strokeWidth="1.5" strokeLinecap="round" />
                    
                    <text x="32" y="18" fill="#114b51" fontSize="8" fontWeight="800">Prescription</text>
                    <text x="32" y="27" fill="#64748b" fontSize="6">Order #4802</text>
                    <rect x="8" y="38" width="90" height="14" rx="4" fill="#10b981" fillOpacity="0.1" />
                    <text x="53" y="48" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="800">DISPATCHED</text>
                  </g>

                  <g transform="translate(12, 120)">
                    <rect x="0" y="0" width="106" height="75" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="18" cy="18" r="8" fill="#3b82f6" fillOpacity="0.1" />
                    <path d="M 18 12 C 16 12 14 14 14 16 C 14 20 18 24 18 24 C 18 24 22 20 22 16 C 22 14 20 12 18 12 Z M 18 18 C 17 18 16 17 16 16 C 16 15 17 14 18 14 C 19 14 20 15 20 16 C 20 17 19 18 18 18 Z" fill="#3b82f6" transform="scale(0.85) translate(3, 3)"/>
                    
                    <text x="32" y="18" fill="#114b51" fontSize="8" fontWeight="800">Pharmacy Finder</text>
                    <text x="32" y="27" fill="#64748b" fontSize="6">Locating verified stocks</text>
                    
                    <circle cx="20" cy="52" r="3" fill="#10b981" />
                    <line x1="23" y1="52" x2="50" y2="52" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="53" cy="52" r="3" fill="#10b981" />
                    <line x1="56" y1="52" x2="83" y2="52" stroke="#e2e8f0" strokeWidth="1.5" />
                    <circle cx="86" cy="52" r="3" fill="#e2e8f0" />
                    
                    <text x="20" y="65" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="700">Order</text>
                    <text x="53" y="65" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="700">Stock OK</text>
                    <text x="86" y="65" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="700">Delivery</text>
                  </g>

                  <rect x="40" y="246" width="50" height="4" rx="2" fill="#cbd5e1" />
                </g>

                <g transform="translate(195, 30)">
                  <rect x="0" y="0" width="210" height="320" rx="12" fill="#ffffff" stroke="#006c75" strokeWidth="2.5" />
                  
                  <path d="M 0 12 Q 0 0 12 0 L 198 0 Q 210 0 210 12 L 210 32 L 0 32 Z" fill="#f1f5f9" />
                  <circle cx="15" cy="16" r="3.5" fill="#f43f5e" />
                  <circle cx="26" cy="16" r="3.5" fill="#eab308" />
                  <circle cx="37" cy="16" r="3.5" fill="#10b981" />
                  <rect x="55" y="8" width="140" height="16" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="125" y="19" textAnchor="middle" fill="#94a3b8" fontSize="7">pharmacore.365health.online</text>
                  <line x1="0" y1="32" x2="210" y2="32" stroke="#e2e8f0" strokeWidth="1.5" />

                  <rect x="4" y="36" width="202" height="280" rx="8" fill="#f8fafc" />

                  <rect x="8" y="44" width="40" height="264" rx="6" fill="#114b51" />
                  <circle cx="28" cy="64" r="4" fill="#ffffff" fillOpacity="0.9" />
                  <circle cx="28" cy="94" r="4" fill="#ffffff" fillOpacity="0.4" />
                  <circle cx="28" cy="124" r="4" fill="#ffffff" fillOpacity="0.4" />
                  <circle cx="28" cy="154" r="4" fill="#ffffff" fillOpacity="0.4" />
                  <circle cx="28" cy="184" r="5" fill="#10b981" />
                  <path d="M 25 184 L 31 184 M 28 181 L 28 187" stroke="#ffffff" strokeWidth="1" />

                  <g transform="translate(56, 44)">
                    <rect x="0" y="0" width="146" height="85" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="8" y="14" fill="#114b51" fontSize="8" fontWeight="900">Inventory Expiry Monitor</text>
                    <line x1="8" y1="18" x2="138" y2="18" stroke="#f1f5f9" strokeWidth="1" />
                    
                    <rect x="6" y="24" width="134" height="24" rx="4" fill="#ef4444" fillOpacity="0.08" stroke="#f87171" strokeWidth="0.5" />
                    <circle cx="16" cy="36" r="3" fill="#ef4444" />
                    <text x="24" y="38" fill="#1e293b" fontSize="7" fontWeight="700">Metformin 500mg</text>
                    <rect x="94" y="28" width="42" height="12" rx="3" fill="#ef4444" />
                    <text x="115" y="36" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900">EXPIRING (12d)</text>
                    
                    <rect x="6" y="52" width="134" height="24" rx="4" fill="#10b981" fillOpacity="0.05" stroke="#34d399" strokeWidth="0.5" />
                    <circle cx="16" cy="64" r="3" fill="#10b981" />
                    <text x="24" y="66" fill="#1e293b" fontSize="7" fontWeight="700">Amoxicillin 250mg</text>
                    <rect x="106" y="56" width="30" height="12" rx="3" fill="#10b981" />
                    <text x="121" y="64" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900">Stock OK</text>
                  </g>

                  <g transform="translate(56, 137)">
                    <rect x="0" y="0" width="146" height="55" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="8" y="14" fill="#114b51" fontSize="8" fontWeight="900">POS Terminal</text>
                    
                    <g transform="translate(8, 22)">
                      <circle cx="14" cy="14" r="12" fill="#10b981" />
                      <path d="M 8 14 L 12 18 L 20 10" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      
                      <text x="32" y="12" fill="#1e293b" fontSize="7.5" fontWeight="800">Invoice #9201</text>
                      <text x="32" y="21" fill="#10b981" fontSize="7" fontWeight="900">PAID: $45.00</text>
                    </g>
                  </g>

                  <g transform="translate(56, 200)">
                    <rect x="0" y="0" width="146" height="98" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="14" cy="14" r="6" fill="#006c75" />
                    <text x="24" y="17" fill="#006c75" fontSize="7.5" fontWeight="900">365Health AI Consult</text>
                    
                    <path d="M 10 32 L 132 32 A 4 4 0 0 1 136 36 L 136 44 A 4 4 0 0 1 132 48 L 18 48 A 4 4 0 0 1 14 44 L 14 36 A 4 4 0 0 1 18 32 Z" fill="#e2e8f0" />
                    <text x="20" y="42" fill="#1e293b" fontSize="6.5">Warfarin + Aspirin interaction?</text>
                    
                    <path d="M 22 56 L 132 56 A 4 4 0 0 1 136 60 L 136 86 A 4 4 0 0 1 132 90 L 18 90 A 4 4 0 0 1 14 86 L 14 64 A 8 8 0 0 1 22 56 Z" fill="#006c75" />
                    <text x="20" y="67" fill="#ffffff" fontSize="6.5" fontWeight="900">AI SAFETY ALERT:</text>
                    <text x="20" y="76" fill="#ffffff" fontSize="6">High interaction risk - increased bleeding.</text>
                    <text x="20" y="84" fill="#f87171" fontSize="6" fontWeight="800">Dosage caution advised.</text>
                  </g>
                </g>

                <g transform="translate(420, 60)">
                  <rect x="0" y="0" width="140" height="260" rx="12" fill="#ffffff" stroke="#006c75" strokeWidth="2" />
                  
                  <path d="M 0 8 Q 0 0 8 0 L 132 0 Q 140 0 140 8 L 140 28 L 0 28 Z" fill="#114b51" />
                  <text x="12" y="17" fill="#ffffff" fontSize="9" fontWeight="900">365Insight</text>
                  <path d="M 115 11 L 120 18 L 125 14 L 130 20" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

                  <g transform="translate(10, 36)">
                    <rect x="0" y="0" width="120" height="85" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="8" y="14" fill="#114b51" fontSize="8" fontWeight="900">Multi-Branch Sales</text>
                    
                    <line x1="8" y1="35" x2="112" y2="35" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="8" y1="55" x2="112" y2="55" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="8" y1="75" x2="112" y2="75" stroke="#cbd5e1" strokeWidth="1" />
                    
                    <rect x="22" y="30" width="12" height="45" rx="2" fill="#006c75">
                      <animate attributeName="height" values="20;45;45" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="y" values="55;30;30" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="52" y="45" width="12" height="30" rx="2" fill="#10b981">
                      <animate attributeName="height" values="10;30;30" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="y" values="65;45;45" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="82" y="20" width="12" height="55" rx="2" fill="#3b82f6">
                      <animate attributeName="height" values="30;55;55" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="y" values="45;20;20" dur="3s" repeatCount="indefinite" />
                    </rect>
                    
                    <text x="28" y="83" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="800">HQ</text>
                    <text x="58" y="83" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="800">North</text>
                    <text x="88" y="83" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="800">East</text>
                  </g>

                  <g transform="translate(10, 128)">
                    <rect x="0" y="0" width="120" height="58" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="8" y="14" fill="#114b51" fontSize="8" fontWeight="900">Ecosystem Sync</text>
                    
                    <circle cx="28" cy="36" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                    <circle cx="28" cy="36" r="14" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="88 88" strokeDashoffset="10" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="28" y="39" textAnchor="middle" fill="#114b51" fontSize="7" fontWeight="900">99%</text>

                    <text x="52" y="32" fill="#64748b" fontSize="6.5">Sync Status:</text>
                    <text x="52" y="42" fill="#10b981" fontSize="7" fontWeight="900">ACTIVE (OK)</text>
                  </g>

                  <g transform="translate(10, 193)">
                    <rect x="0" y="0" width="120" height="58" rx="8" fill="url(#cardBg)" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="8" y="14" fill="#114b51" fontSize="8" fontWeight="900">Revenue Growth</text>
                    
                    <path d="M 12 44 Q 32 30 52 40 T 92 20 T 108 16" fill="none" stroke="#006c75" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 12 44 Q 32 30 52 40 T 92 20 T 108 16 L 108 50 L 12 50 Z" fill="url(#primaryTeal)" fillOpacity="0.08" />
                    <circle cx="108" cy="16" r="3" fill="#006c75" />
                    <circle cx="108" cy="16" r="6" fill="none" stroke="#006c75" strokeWidth="1" opacity="0.5">
                      <animate attributeName="r" values="3;9;3" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </g>
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
