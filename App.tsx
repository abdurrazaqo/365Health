
import React, { useState } from 'react';
<<<<<<< HEAD
import { Analytics } from '@vercel/analytics/react';
=======
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
<<<<<<< HEAD
import AboutUs from './components/AboutUs';
=======
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

<<<<<<< HEAD
// Footer updated - final
=======
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
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
<<<<<<< HEAD
        <AboutUs />
=======
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      
      <AIAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
<<<<<<< HEAD
      <Analytics />
=======
>>>>>>> d3878f6ee2b545463ed5407d8ce5f758ec9bf2e7
    </div>
  );
};

export default App;
