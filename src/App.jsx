import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolarSolutions from './components/SolarSolutions';
import Features from './components/Features';
import Difference from './components/Difference';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SolarSolutions />

      <Features />
      <Testimonials />
      <Difference />
      <Process />

      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
