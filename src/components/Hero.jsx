import React from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', paddingRight: '2rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
            <Activity size={18} color="var(--primary)" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>Next-Gen AI Diagnostics</span>
          </div>
          
          <h1 style={{ marginBottom: '1.5rem' }}>
            Breathe Easier with <br/>
            <span className="text-gradient">LungSense AI</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Advanced on-device AI that detects Chronic Obstructive Pulmonary Disease (COPD) directly from your breath sounds. Fast, offline, and secure.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/LungSenseAI-latest.apk" download="LungSenseAI-latest.apk" className="btn btn-primary" style={{ gap: '0.5rem' }}>
              <DownloadCloud size={20} />
              Download APK
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
          className="floating"
        >
          <div style={{
            width: '400px', height: '400px', 
            background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}></div>
          
          {/* A glowing stylized representation of lungs/AI */}
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '50%', border: '4px solid rgba(0, 210, 255, 0.3)', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
             <Activity size={120} color="var(--primary)" style={{ filter: 'drop-shadow(0 0 20px var(--primary))' }} />
             
             {/* Orbital elements */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px dashed var(--secondary)', opacity: 0.5 }}
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
