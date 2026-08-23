import React from 'react';
import { motion } from 'framer-motion';
import { Zap, WifiOff, Lock, BrainCircuit } from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      icon: <BrainCircuit size={28} className="text-gradient" />,
      title: "Advanced CNN-LSTM",
      desc: "Powered by a state-of-the-art neural network trained on extensive respiratory datasets."
    },
    {
      icon: <WifiOff size={28} className="text-gradient" />,
      title: "100% Offline",
      desc: "All processing happens on your device. No internet required after the initial download."
    },
    {
      icon: <Lock size={28} className="text-gradient" />,
      title: "Privacy First",
      desc: "Your audio data never leaves your phone, ensuring maximum confidentiality and security."
    },
    {
      icon: <Zap size={28} className="text-gradient" />,
      title: "Lightning Fast",
      desc: "Optimized for mobile processors to deliver results in seconds without draining your battery."
    }
  ];

  return (
    <section id="features" style={{ background: 'var(--bg-color-light)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.8rem' }}>Why Choose <span className="text-gradient">LungSense AI?</span></h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {featureList.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: 'var(--bg-color)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 210, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.3rem' }}>{feature.title}</h3>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
