import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

const soundCategories = [
  {
    id: 'normal',
    name: 'Normal Vesicular Breath',
    type: 'Healthy / Non-Pathological',
    badgeColor: '#059669',
    badgeBg: '#ecfdf5',
    badgeBorder: '#a7f3d0',
    description: 'Soft, gentle rustling sounds heard throughout inspiration and early expiration. Represents laminar airflow through unobstructed healthy bronchial airways and open alveoli.',
    frequency: '100 - 400 Hz (Low Frequency Spectrum)',
    spectrogramPattern: 'Even, continuous acoustic energy distribution across lower bands without abrupt vertical spikes.',
    clinicalSignificance: 'Normal baseline respiratory function.'
  },
  {
    id: 'crackles',
    name: 'Crackles (Rales)',
    type: 'Adventitious Discontinuous',
    badgeColor: '#d97706',
    badgeBg: '#fffbeb',
    badgeBorder: '#fde68a',
    description: 'Brief, intermittent, explosive popping sounds predominantly heard during inspiration. Produced when collapsed small airways pop open during inhalation.',
    frequency: '100 - 1,000 Hz (Transient Burst Spikes)',
    spectrogramPattern: 'Sharp, discontinuous vertical spikes on the Mel-spectrogram representing acoustic micro-transients.',
    clinicalSignificance: 'Characteristic marker of COPD, chronic bronchitis, pneumonia, and pulmonary fibrosis.'
  },
  {
    id: 'wheezes',
    name: 'Wheezes (Rhonchi)',
    type: 'Adventitious Continuous',
    badgeColor: '#e11d48',
    badgeBg: '#fff1f2',
    badgeBorder: '#fecdd3',
    description: 'Continuous, high-pitched musical whistling or squeaking sounds lasting longer than 80-100 ms. Caused by rapid airflow through severely narrowed or compressed airway lumens.',
    frequency: '200 - 1,800 Hz (Harmonic Resonance)',
    spectrogramPattern: 'Prominent horizontal sinusoidal harmonic energy bands indicating sustained mucosal oscillation.',
    clinicalSignificance: 'Hallmark of bronchoconstriction in asthma, severe COPD, and bronchial inflammation.'
  },
  {
    id: 'both',
    name: 'Mixed Crackles & Wheezes',
    type: 'Complex Adventitious Sound',
    badgeColor: '#be123c',
    badgeBg: '#fff1f2',
    badgeBorder: '#fda4af',
    description: 'Simultaneous presence of both discontinuous popping crackles and sustained musical wheezing harmonics within the same respiratory cycle.',
    frequency: '100 - 2,000 Hz (Broadband Dispersion)',
    spectrogramPattern: 'Superimposed vertical burst spikes intersected by sustained horizontal harmonic bands.',
    clinicalSignificance: 'Severe COPD exacerbation, active bronchial infection, or chronic pulmonary obstruction.'
  }
];

const AcousticLab = () => {
  const [selectedSound, setSelectedSound] = useState(soundCategories[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const startAudio = (type) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      stopAudio();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'normal') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
      } else if (type === 'crackles') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
      } else if (type === 'wheezes') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(420, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      setIsPlaying(true);
    } catch (e) {
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (err) {}
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const handleSelect = (sound) => {
    stopAudio();
    setSelectedSound(sound);
  };

  return (
    <section id="acoustic-lab" style={{ background: '#ffffff', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem' }}>
            <Waves size={14} color="var(--teal-primary)" />
            <span>Acoustic Frequency Explorer</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Respiratory <span style={{ color: 'var(--teal-primary)' }}>Lung Sound</span> Signatures
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Listen to and explore how LungSense AI distinguishes normal vesicular airflow from adventitious crackles and wheezes.
          </p>
        </div>

        {/* Sound Selection Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {soundCategories.map((sound) => {
            const isSelected = selectedSound.id === sound.id;
            return (
              <div
                key={sound.id}
                onClick={() => handleSelect(sound)}
                className="clean-card"
                style={{
                  padding: '1.2rem',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid var(--teal-primary)' : '1px solid var(--border-light)',
                  background: isSelected ? 'var(--teal-surface)' : 'var(--bg-subtle)',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: sound.badgeColor,
                      background: sound.badgeBg,
                      border: `1px solid ${sound.badgeBorder}`,
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {sound.type}
                  </span>
                  {isSelected && <Activity size={15} color="var(--teal-primary)" />}
                </div>

                <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', margin: '0 0 0.3rem 0' }}>{sound.name}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
                  {sound.frequency}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Sound Deep Dive Card */}
        <div
          className="clean-card"
          style={{
            padding: '2.2rem',
            border: '1px solid var(--border-teal)',
            boxShadow: 'var(--shadow-md)'
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
            {/* Left: Waveform & Audio Tone Simulator */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: selectedSound.badgeColor, fontWeight: 700, textTransform: 'uppercase' }}>
                    {selectedSound.type}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', margin: '0.2rem 0 0 0' }}>
                    {selectedSound.name}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    if (isPlaying) stopAudio();
                    else startAudio(selectedSound.id);
                  }}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.82rem',
                    color: isPlaying ? 'var(--medical-danger)' : 'var(--teal-hover)',
                    borderColor: 'var(--border-teal)'
                  }}
                >
                  {isPlaying ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  <span>{isPlaying ? 'Mute' : 'Play Tone'}</span>
                </button>
              </div>

              {/* Clean Waveform Visualizer */}
              <div
                style={{
                  background: 'var(--teal-surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-teal)',
                  padding: '1.5rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <span>Simulated Acoustic Waveform</span>
                  <span style={{ color: 'var(--teal-hover)', fontWeight: 700 }}>16.0 kHz Clinical Resampling</span>
                </div>

                <div className="clean-wave-bars" style={{ height: '65px', gap: '4px' }}>
                  {[12, 36, 50, 26, 58, 42, 16, 48, 60, 28, 44, 52, 22, 64, 32, 46, 54, 20, 40, 50, 28].map((height, idx) => (
                    <div
                      key={idx}
                      className="clean-wave-bar"
                      style={{
                        height: isPlaying ? `${height}px` : `${Math.max(8, height * 0.35)}px`,
                        background: 'linear-gradient(180deg, var(--primary) 0%, var(--teal-primary) 100%)',
                        animationDuration: isPlaying ? '0.9s' : '2.2s',
                        animationDelay: `${idx * 0.05}s`,
                        opacity: isPlaying ? 1 : 0.45
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '0.6rem' }}>
                  <span>Frequency Bandwidth: 100 Hz - 2,000 Hz</span>
                  <span>128 Mel Filterbanks</span>
                </div>
              </div>
            </div>

            {/* Right: Medical Description & Clinical Meaning */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem', fontWeight: 700 }}>
                  Clinical Description
                </h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {selectedSound.description}
                </p>
              </div>

              <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.88rem', color: 'var(--teal-hover)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                  <Activity size={15} />
                  <span>Mel-Spectrogram Signature</span>
                </h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                  {selectedSound.spectrogramPattern}
                </p>
              </div>

              <div style={{ background: selectedSound.badgeBg, padding: '1rem', borderRadius: '8px', borderLeft: `3px solid ${selectedSound.badgeColor}` }}>
                <h4 style={{ fontSize: '0.88rem', color: selectedSound.badgeColor, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                  <AlertCircle size={15} />
                  <span>Clinical Indication</span>
                </h4>
                <p style={{ color: 'var(--text-heading)', fontSize: '0.85rem', margin: 0 }}>
                  {selectedSound.clinicalSignificance}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AcousticLab;
