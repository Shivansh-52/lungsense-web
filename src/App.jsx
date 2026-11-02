import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCOPD from './components/AboutCOPD';
import AppWalkthrough from './components/AppWalkthrough';
import AcousticLab from './components/AcousticLab';
import ClinicalAI from './components/ClinicalAI';
import Features from './components/Features';
import DownloadSection from './components/DownloadSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Hero />
        <AboutCOPD />
        <AppWalkthrough />
        <AcousticLab />
        <ClinicalAI />
        <Features />
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
