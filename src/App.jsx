import React from 'react';
import Hero from './components/Hero';
import AboutCOPD from './components/AboutCOPD';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <AboutCOPD />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
