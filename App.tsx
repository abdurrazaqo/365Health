
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
    title: '365Health Systems | Infrastructure for Modern Healthcare',
    description: 'Revolutionizing healthcare with advanced analytics, and scalable digital infrastructure for the modern era.',
  },
  {
    path: '/products/pharmacore',
    component: PharmaCore,
    title: 'PharmaCore | Complete Pharmacy Management System | 365Health',
    description: 'Cloud-based pharmacy management system with inventory tracking, POS billing, multi-branch support, and role-based access control.',
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
