
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarSection from './components/CarSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <CarSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
