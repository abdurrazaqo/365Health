
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

// Footer updated - final
const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <TrustedBy />
        <ProductShowcase />
        <Benefits />
        <AboutUs />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      
      <AIAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      <Analytics />
    </div>
  );
};

export default App;
