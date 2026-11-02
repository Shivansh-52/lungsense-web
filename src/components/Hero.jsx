import React from 'react';
import { 
  DownloadCloud, 
  Activity, 
  CheckCircle, 
  Smartphone, 
  ShieldCheck, 
  Stethoscope,
  ChevronRight
} from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: '108px', paddingBottom: '4.5rem', background: 'linear-gradient(180deg, #ffffff 0%, #f4f8fb 100%)' }}>
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headlines & Call to Actions */}
          <div>
            <div className="badge-clean" style={{ marginBottom: '1.2rem' }}>
              <span className="badge-dot" />
              <span>Clinical Respiratory AI • Version 1.0.0</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', marginBottom: '1.2rem', color: 'var(--text-heading)', lineHeight: 1.18 }}>
              Clinical-Grade <br />
              <span style={{ 
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--teal-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Respiratory AI
              </span> for Early COPD Screening
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', maxWidth: '540px', lineHeight: 1.6 }}>
              Screen for Chronic Obstructive Pulmonary Disease (COPD) and adventitious lung sounds directly from your smartphone's microphone. Fast, 100% offline, and patient-first.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a
                href="/LungSenseAI-latest.apk"
                download="LungSenseAI-latest.apk"
                className="btn btn-primary"
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.8rem' }}
              >
                <DownloadCloud size={18} />
                <span>Download Android APK</span>
              </a>

              <a
                href="#app-walkthrough"
                className="btn btn-secondary"
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.6rem' }}
              >
                <Smartphone size={17} color="var(--teal-primary)" />
                <span>How to Use the App</span>
              </a>
            </div>

            {/* Key Clinical Trust Indicators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                <CheckCircle size={17} color="var(--teal-primary)" />
                <span><strong>ICBHI 2017 Validated:</strong> Trained on standard clinical respiratory database</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                <CheckCircle size={17} color="var(--teal-primary)" />
                <span><strong>Privacy-First:</strong> On-device processing with zero third-party audio transmission</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                <CheckCircle size={17} color="var(--teal-primary)" />
                <span><strong>Neural Architecture:</strong> Frozen CNN-BiLSTM dual classification models</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Doctor Clinical Auscultation Photograph */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              className="clean-card"
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '8px',
                maxWidth: '480px',
                width: '100%',
                overflow: 'hidden',
                border: '2px solid var(--teal-light)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img
                src="/images/doctor_auscultation.jpg"
                alt="Doctor performing lung sound auscultation with smartphone mobile app in clinical examination room"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '14px',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Clean Clinical Floating Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  left: '22px',
                  right: '22px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '12px',
                  padding: '0.85rem 1.1rem',
                  border: '1px solid var(--border-teal)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stethoscope size={19} color="var(--teal-hover)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Clinical Diagnostic Benchmark</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-heading)' }}>94.2% Diagnostic Sensitivity</div>
                  </div>
                </div>

                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal-hover)', background: 'var(--teal-light)', border: '1px solid var(--border-teal)', padding: '3px 8px', borderRadius: '6px' }}>
                  ICBHI VERIFIED
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Professional Clinical Metric Cards */}
        <div
          style={{
            marginTop: '3.8rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem'
          }}
        >
          {[
            { metric: '94.2%', label: 'Diagnostic Sensitivity', desc: 'Evaluated against the ICBHI 2017 clinical respiratory audio benchmark.', border: 'var(--teal-primary)' },
            { metric: '15 sec', label: 'Audio Examination Window', desc: 'Short auscultation window easy for any patient to complete.', border: 'var(--primary)' },
            { metric: '4 Classes', label: 'Sound Pattern Detection', desc: 'Distinguishes normal airflow, crackles, wheezes, and combined patterns.', border: 'var(--teal-primary)' },
            { metric: '100%', label: 'On-Device Privacy', desc: 'Neural network inference runs locally on the phone in guest mode.', border: 'var(--primary)' }
          ].map((item, i) => (
            <div
              key={i}
              className="clean-card"
              style={{
                padding: '1.4rem 1.6rem',
                borderLeft: `4px solid ${item.border}`,
                background: '#ffffff'
              }}
            >
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: item.border, fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                {item.metric}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', margin: '0.4rem 0 0.2rem 0' }}>
                {item.label}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
