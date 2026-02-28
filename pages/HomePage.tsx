import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ProductShowcase from '../components/ProductShowcase';
import Benefits from '../components/Benefits';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProductShowcase />
      <Benefits />
      <AboutUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
