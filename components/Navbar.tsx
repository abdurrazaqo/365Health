import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="flex items-baseline">
            <span className="text-base font-black tracking-tight"><span className="text-primary">365</span><span className="text-dark-text">Health</span></span>
            <span className="text-base font-medium text-dark-text ml-1">Systems</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-10 ml-auto mr-10">
          <a href="#products" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Products</a>
          <a href="#solutions" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Solutions</a>
          <a href="#about" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">About Us</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#cta" className="bg-primary hover:bg-secondary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-block text-center">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;