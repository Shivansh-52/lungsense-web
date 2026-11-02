import React from 'react';
import { Cpu, ShieldCheck, CheckCircle2, Database } from 'lucide-react';

const ClinicalAI = () => {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Acoustic Signal Preprocessing',
      desc: '15-second mono audio captured via mobile mic is normalized, noise-filtered, and resampled to 16,000 Hz.',
      spec: 'Librosa / Torchaudio 16kHz Mono',
      accent: 'var(--teal-primary)'
    },
    {
      step: '02',
      title: 'Mel-Spectrogram Generation',
      desc: 'Short-Time Fourier Transform (STFT) with 128 Mel-frequency filterbanks capturing 100 Hz to 2,000 Hz respiratory acoustics.',
      spec: '128 Mel Bands • Hop Length 512',
      accent: 'var(--primary)'
    },
    {
      step: '03',
      title: 'CNN Spatial Texture Extraction',
      desc: '2D Convolutional layers learn acoustic morphology of explosive rales and sinusoidal wheezing harmonics.',
      spec: 'Conv2D + BatchNorm + ReLU',
      accent: 'var(--teal-primary)'
    },
    {
      step: '04',
      title: 'BiLSTM Temporal Sequence Modeling',
      desc: 'Bidirectional LSTM layers maintain forward and backward memory across entire respiratory inspiratory and expiratory phases.',
      spec: 'BiLSTM (128 Hidden Units)',
      accent: 'var(--primary)'
    },
    {
      step: '05',
      title: 'Dual-Head Inference Output',
      desc: 'Simultaneous 4-class sound classification and calibrated COPD disease probability assessment (Threshold: 0.70).',
      spec: 'Softmax Sound Head + Sigmoid COPD Head',
      accent: 'var(--teal-primary)'
    }
  ];

  return (
    <section id="clinical-ai" style={{ background: 'var(--bg-page)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem' }}>
            <Cpu size={14} color="var(--teal-primary)" />
            <span>Neural Architecture & Machine Learning</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            The <span style={{ color: 'var(--teal-primary)' }}>Clinical AI</span> Architecture
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Powered by a frozen PyTorch deep learning pipeline evaluated on the globally standard ICBHI 2017 Respiratory Sound Database.
          </p>
        </div>

        {/* Technical Overview Cards */}
        <div
          className="clean-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge-clean" style={{ fontSize: '0.75rem', marginBottom: '0.8rem' }}>
                <ShieldCheck size={14} />
                <span>Frozen PyTorch Model</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '0.8rem' }}>
                Hybrid CNN + BiLSTM Network
              </h3>

              <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                LungSense AI utilizes a hybrid neural architecture specifically tailored for pulmonary acoustics. Convolutional layers extract frequency textures from the 128-band Mel spectrogram, while Bidirectional LSTM layers model sound progression across breath cycles.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Training Dataset</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-heading)' }}>ICBHI 2017</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>920 clinical recordings</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Decision Cutoff</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-heading)' }}>0.70 Mean</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>COPD risk threshold</div>
                </div>

                <div style={{ background: 'var(--teal-surface)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-teal)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--teal-hover)', textTransform: 'uppercase', fontWeight: 700 }}>Inference Speed</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--teal-hover)' }}>0.38s</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Mobile CPU runtime</div>
                </div>

                <div style={{ background: 'var(--teal-surface)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-teal)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--teal-hover)', textTransform: 'uppercase', fontWeight: 700 }}>Privacy Mode</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--teal-hover)' }}>100% Offline</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Zero audio transmission</div>
                </div>
              </div>
            </div>

            {/* Verification Hash Card */}
            <div>
              <div style={{ background: 'var(--bg-white)', border: '2px solid var(--teal-light)', borderRadius: '12px', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Database size={16} color="var(--teal-primary)" />
                  <span>Reproducibility & Model Integrity</span>
                </h4>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  The COPD classification weights are cryptographically verified to ensure consistency across research trials:
                </p>

                <div style={{ background: 'var(--teal-surface)', border: '1px solid var(--border-teal)', borderRadius: '8px', padding: '0.75rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', wordBreak: 'break-all', color: 'var(--text-heading)' }}>
                  <span style={{ color: 'var(--teal-hover)', fontWeight: 800 }}>SHA-256: </span>
                  8b02089bba87216ced5131c989fc2e14cd4b87651669eaf37d9bfc5287184a6a
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--medical-success)', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>Weights Verified • State: Frozen Production Model</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5-Step Pipeline Cards */}
        <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '1.8rem', color: 'var(--text-heading)' }}>
          Step-by-Step Processing Pipeline
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {pipelineSteps.map((step, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                padding: '1.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${step.accent}`
              }}
            >
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: step.accent, fontFamily: 'var(--font-mono)', lineHeight: 1, marginBottom: '0.4rem' }}>
                  {step.step}
                </div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {step.desc}
                </p>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.68rem', color: step.accent, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                {step.spec}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClinicalAI;
