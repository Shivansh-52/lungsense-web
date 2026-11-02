import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How does LungSense AI detect COPD from breath and cough sounds?',
    a: 'LungSense AI records a 15-second acoustic window via the device microphone. The audio is resampled to 16,000 Hz and processed through a Short-Time Fourier Transform (STFT) into a 128-band Mel-spectrogram. A frozen hybrid CNN-BiLSTM deep learning network extracts spectral patterns characteristic of adventitious sounds (crackles and wheezes) and computes a calibrated COPD risk index using a 0.70 threshold.'
  },
  {
    q: 'Can a smartphone microphone accurately capture lung auscultation sounds?',
    a: 'Modern smartphones feature MEMS microphones with wide dynamic range and high acoustic sensitivity. When positioned 5-10 cm from the chest in a quiet room, the microphone reliably captures acoustic frequencies between 100 Hz and 2,000 Hz, which encompasses all primary adventitious respiratory markers like explosive rales and musical wheezes.'
  },
  {
    q: 'Does the app work 100% offline without an internet connection?',
    a: 'Yes. LungSense AI supports a complete Guest Screening Mode where neural inference runs entirely on your phone’s local CPU/NPU. No audio data or diagnosis is transmitted to the cloud, making it fully functional in remote areas, flights, or off-grid environments.'
  },
  {
    q: 'What is the ICBHI 2017 database and how was the model trained?',
    a: 'The ICBHI 2017 Respiratory Sound Database is the global scientific benchmark containing 920 annotated clinical recordings across 126 patients with various respiratory conditions (including COPD, asthma, and pneumonia). The LungSense AI model was rigorously trained and cross-validated against these clinical audio segments to achieve 94.2% sensitivity.'
  },
  {
    q: 'How do I share examination reports with my doctor or pulmonologist?',
    a: 'With a single tap on the Result or Dashboard screen, LungSense AI generates an exportable, standardized ReportLab PDF report. The document contains date/timestamps, detected sound pattern, COPD probability gauge, acoustic spectrogram metadata, and medical disclaimer sections that your doctor can immediately review during consultations.'
  },
  {
    q: 'Can LungSense AI replace formal clinical spirometry?',
    a: 'No. LungSense AI is designed as an educational, screening, and monitoring tool to identify potential airflow obstructions early. It does not replace spirometry, CT imaging, or comprehensive clinical evaluations by a licensed pulmonologist.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} color="var(--primary)" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Clinical & Technical <span style={{ color: 'var(--primary)' }}>Questions</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Everything you need to know about acoustic respiratory screening, neural network accuracy, and data privacy.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="clean-card"
                style={{
                  border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                  background: isOpen ? '#ffffff' : 'var(--bg-subtle)',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.4rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: isOpen ? 'var(--primary)' : 'var(--text-heading)' }}>
                    {item.q}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--primary-light)' : '#ffffff',
                      border: '1px solid',
                      borderColor: isOpen ? '#bfdbfe' : 'var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <ChevronUp size={16} color="var(--primary)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.4rem 1.2rem 1.4rem',
                      color: 'var(--text-body)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.85rem'
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
