import React from 'react';
import { 
  BrainCircuit, 
  WifiOff, 
  Lock, 
  FileText, 
  HeartPulse, 
  Stethoscope
} from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      icon: <BrainCircuit size={24} color="var(--teal-primary)" />,
      badge: 'Deep Learning',
      title: 'CNN-BiLSTM Architecture',
      desc: 'Dual-branch neural network designed specifically for extracting spectral energy and acoustic temporal dynamics from breath sound spectrograms.'
    },
    {
      icon: <WifiOff size={24} color="var(--primary)" />,
      badge: 'Autonomous',
      title: '100% Offline Screening Mode',
      desc: 'Perform full audio auscultation and disease screening without an active internet connection. Designed for field checks and remote clinics.'
    },
    {
      icon: <Lock size={24} color="var(--teal-primary)" />,
      badge: 'Privacy-First',
      title: 'Zero Audio Retention',
      desc: 'Recorded lung acoustics are processed immediately in memory and are never shared, sold, or retained on third-party servers.'
    },
    {
      icon: <FileText size={24} color="var(--primary)" />,
      badge: 'Clinical Utility',
      title: 'Doctor-Ready PDF Reports',
      desc: 'Generate exportable ReportLab clinical summary PDFs containing spectrogram metadata, confidence scores, and safe medical disclaimers.'
    },
    {
      icon: <HeartPulse size={24} color="var(--teal-primary)" />,
      badge: 'Wellness',
      title: 'Integrated Health Tracking',
      desc: 'Monitor daily respiratory wellness, water hydration, step counts, sleep duration, and customized inhaler/medication reminders.'
    },
    {
      icon: <Stethoscope size={24} color="var(--primary)" />,
      badge: 'Clinician Directory',
      title: 'Specialist Connect',
      desc: 'Access a directory of pulmonologists and respiratory specialists to review examination trends and receive timely medical advice.'
    }
  ];

  return (
    <section id="features" style={{ background: '#ffffff', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem' }}>
            <BrainCircuit size={14} color="var(--teal-primary)" />
            <span>Platform Capabilities</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Engineered for <span style={{ color: 'var(--teal-primary)' }}>Clinical Precision</span> & Simplicity
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            LungSense AI bridges the gap between isolated stethoscope auscultation and accessible continuous pulmonary monitoring.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {featureList.map((f, i) => (
            <div
              key={i}
              className="clean-card"
              style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: i % 2 === 0 ? '3px solid var(--teal-primary)' : '3px solid var(--primary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'var(--teal-surface)',
                      border: '1px solid var(--border-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--teal-hover)',
                      background: 'var(--teal-surface)',
                      border: '1px solid var(--border-teal)',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {f.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                  {f.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.2rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--teal-primary)', fontWeight: 700 }}>
                Learn more in documentation &rarr;
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
