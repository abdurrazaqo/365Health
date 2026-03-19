
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { Router, Route } from './router';
import HomePage from './pages/HomePage';
import PharmaCore from './pages/PharmaCore';
import ContactSales from './pages/ContactSales';
import Checkout from './pages/Checkout';

const routes: Route[] = [
  {
    path: '/',
    component: HomePage,
    title: '365Health - Building the Infrastructure for Modern Healthcare',
    description: 'Digital infrastructure for healthcare. Systems, analytics and platforms that power modern healthcare operations.',
    image: '/images/homepage.png',
  },
  {
    path: '/products/pharmacore',
    component: PharmaCore,
    title: 'PharmaCore - The Operating System for Modern Pharmacies',
    description: 'Run your entire pharmacy from one system. Manage inventory, sales, and analytics with PharmaCore.',
    image: '/images/pharmacore.png',
  },
  {
    path: '/contact-sales',
    component: ContactSales,
    title: 'Contact Sales | 365Health Systems',
    description: 'Get in touch with our sales team to discuss Enterprise solutions for your pharmacy.',
  },
  {
    path: '/checkout',
    component: Checkout,
    title: 'Checkout | 365Health Systems',
    description: 'Complete your subscription to 365Health products.',
  },
];

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Router routes={routes} />
      </main>

      <Footer />
      
      <AIAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      <Analytics />
    </div>
  );
};

export default App;
