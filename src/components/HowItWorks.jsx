import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Cpu, FileCheck, Smartphone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      icon: <Smartphone size={40} color="var(--primary)" />,
      title: "Position Your Phone",
      desc: "Place your phone's microphone approximately 5-10 cm away from your mouth. Ensure you are in a quiet room for best results."
    },
    {
      num: "02",
      icon: <Mic size={40} color="var(--accent)" />,
      title: "Record Audio",
      desc: "Take a deep breath and cough or breathe deeply as instructed by the app for the required duration."
    },
    {
      num: "03",
      icon: <Cpu size={40} color="var(--secondary)" />,
      title: "AI Analysis",
      desc: "Our on-device CNN-LSTM model analyzes the acoustic patterns of your breathing in real-time."
    },
    {
      num: "04",
      icon: <FileCheck size={40} color="#00ffcc" />,
      title: "Get Results",
      desc: "Receive instant, offline feedback on potential COPD indicators directly on your screen."
    }
  ];

  return (
    <section id="how-it-works">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '2.8rem' }}>How It <span className="text-gradient">Works</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>A simple, step-by-step guide to using LungSense AI for respiratory health monitoring.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel"
              style={{ 
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{ 
                fontSize: '6rem', 
                fontWeight: 800, 
                color: 'rgba(255,255,255,0.03)',
                position: 'absolute',
                right: '10px',
                top: '-10px',
                lineHeight: 1,
                zIndex: 0
              }}>
                {step.num}
              </div>
              
              <div style={{ 
                background: 'rgba(0,0,0,0.3)', 
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                zIndex: 1,
                marginBottom: '1rem'
              }}>
                {step.icon}
              </div>
              
              <div style={{ zIndex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
