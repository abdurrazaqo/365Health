import React, { useState, useEffect } from 'react';
import { Link } from '../router';

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);
    
    // Also listen for custom navigation events
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath) {
        setCurrentPath(window.location.pathname);
      }
    });

    return () => {
      window.removeEventListener('popstate', handlePathChange);
      observer.disconnect();
    };
  }, [currentPath]);

  const isPharmaCoreRoute = currentPath === '/products/pharmacore';
  const isCheckoutRoute = currentPath === '/checkout';
  const isContactSalesRoute = currentPath === '/contact-sales';
  const isProductRelatedRoute = isPharmaCoreRoute || isCheckoutRoute || isContactSalesRoute;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-baseline">
            <span className="text-base font-black tracking-tight"><span className="text-primary">365</span><span className="text-dark-text">Health</span></span>
          </div>
        </Link>
        
        {isProductRelatedRoute ? (
          // PharmaCore page navigation
          <div className="hidden md:flex items-center gap-10 ml-auto mr-10">
            <button onClick={() => scrollToSection('overview')} className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Overview</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">FAQ</button>
          </div>
        ) : (
          // Homepage navigation
          <div className="hidden md:flex items-center gap-10 ml-auto mr-10">
            <a href="/#products" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Products</a>
            <a href="/#solutions" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Solutions</a>
            <a href="/#about" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">About Us</a>
          </div>
        )}
        
        <div className="flex items-center gap-4">
          {isPharmaCoreRoute ? (
            <Link
              to="/contact-sales"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-block text-center no-underline"
            >
              Contact Us
            </Link>
          ) : isCheckoutRoute ? (
            <Link
              to="/products/pharmacore"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-block text-center no-underline"
            >
              Back to Product
            </Link>
          ) : isContactSalesRoute ? (
            <Link
              to="/products/pharmacore"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-block text-center no-underline"
            >
              Back to Product
            </Link>
          ) : (
            <a href="/#cta" className="bg-primary hover:bg-secondary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-block text-center">
              Get Started
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;