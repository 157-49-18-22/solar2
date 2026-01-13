import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolarSolutions from './components/SolarSolutions';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SolarSolutions />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
