import React from 'react';

const Navbar: React.FC = () => {
  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
=======
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100">
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-baseline">
            <span className="text-xl font-black text-primary tracking-tight">365Health</span>
<<<<<<< HEAD
            <span className="text-xl font-medium text-dark-text ml-1 hidden sm:inline">Systems</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 ml-auto mr-10">
          <a href="#products" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Products</a>
          <a href="#solutions" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Solutions</a>
          <a href="#about" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">About Us</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#cta" className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 inline-block text-center">
            Get Started
          </a>
=======
            <span className="text-xl font-medium text-dark-text ml-1">Systems</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#products" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Products</a>
          <a href="#solutions" className="text-sm font-semibold text-dark-text/70 hover:text-primary transition-colors">Solutions</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-dark-text hover:text-primary transition-colors">
            Request Demo
          </button>
          <button className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95">
            Get Started
          </button>
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
        </div>
      </div>
    </nav>
  );
};

export default Navbar;