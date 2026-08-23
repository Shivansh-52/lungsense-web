import React from 'react';
import { motion } from 'framer-motion';
import { Wind, AlertTriangle, HeartPulse } from 'lucide-react';

const AboutCOPD = () => {
  const cards = [
    {
      icon: <Wind size={32} color="var(--primary)" />,
      title: "Airway Obstruction",
      desc: "COPD causes the airways in your lungs to become inflamed and thicken, making it harder to breathe."
    },
    {
      icon: <AlertTriangle size={32} color="var(--accent)" />,
      title: "Silent Progression",
      desc: "Symptoms often don't appear until significant lung damage has occurred, making early detection vital."
    },
    {
      icon: <HeartPulse size={32} color="var(--secondary)" />,
      title: "Early Intervention",
      desc: "While COPD isn't curable, early diagnosis and treatment can improve quality of life and reduce risks."
    }
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-color-light)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem' }}>What is <span className="text-gradient">COPD</span>?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Chronic Obstructive Pulmonary Disease (COPD) is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. Symptoms include breathing difficulty, cough, mucus production and wheezing.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel"
              style={{ padding: '2.5rem', textAlign: 'center' }}
            >
              <div style={{ 
                background: 'rgba(255,255,255,0.05)', 
                width: '80px', height: '80px', 
                borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>{card.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCOPD;
