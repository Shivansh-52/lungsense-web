import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Mic, 
  Cpu, 
  FileCheck2, 
  HeartPulse, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Activity, 
  CheckCircle2, 
  FileText, 
  Battery, 
  Wifi,
  Stethoscope
} from 'lucide-react';

const stepsData = [
  {
    id: 1,
    number: '01',
    title: 'Position Smartphone Microphone',
    subtitle: 'Prepare the device for optimal lung sound capture',
    icon: Smartphone,
    color: 'var(--teal-primary)',
    guide: [
      'Sit comfortably upright in a quiet clinical or home room with minimal background noise.',
      'Place the phone’s bottom microphone 5-10 cm away from your upper chest or trachea.',
      'Breathe normally through an open mouth without speaking or moving the phone.'
    ],
    tip: 'Clinical Recommendation: Avoid covering the bottom microphone and maintain consistent distance.'
  },
  {
    id: 2,
    number: '02',
    title: '15-Second Acoustic Auscultation',
    subtitle: 'Continuous high-fidelity breath recording with live waveform',
    icon: Mic,
    color: 'var(--primary)',
    guide: [
      'Tap the record button to start the standardized 15-second acoustic recording.',
      'Take 2 to 3 slow, deep inhalations and exhalations through your mouth.',
      'Perform one gentle cough if instructed to capture airway clearance acoustics.'
    ],
    tip: 'Audio Specifications: Audio is captured at 44.1 kHz and band-pass filtered between 100 Hz and 2,000 Hz.'
  },
  {
    id: 3,
    number: '03',
    title: 'Neural AI Frequency Analysis',
    subtitle: 'On-device CNN-BiLSTM deep learning inference',
    icon: Cpu,
    color: '#0284c7',
    guide: [
      'Audio is resampled to 16,000 Hz and transformed into a 128-band Mel-spectrogram.',
      'Convolutional layers detect frequency patterns characteristic of crackles and wheezes.',
      'BiLSTM sequence layers analyze sound transitions across inspiration and expiration.'
    ],
    tip: 'Fast Processing: Inference completes in 0.38 seconds directly on device without internet.'
  },
  {
    id: 4,
    number: '04',
    title: 'Clinical Diagnostics & COPD Risk',
    subtitle: 'Instant sound classification and risk stratification',
    icon: FileCheck2,
    color: 'var(--medical-warning)',
    guide: [
      'Receive instant categorization: Normal, Crackles, Wheezes, or Crackles & Wheezes.',
      'Review calibrated COPD risk assessment with confidence percentage score.',
      'View clinical advisory notes for follow-up with your pulmonologist.'
    ],
    tip: 'Benchmark Accuracy: 94.2% sensitivity validated on the ICBHI 2017 clinical database.'
  },
  {
    id: 5,
    number: '05',
    title: 'Wellness Tracking & Doctor PDF Report',
    subtitle: 'Longitudinal respiratory monitoring and exportable summary',
    icon: HeartPulse,
    color: 'var(--medical-success)',
    guide: [
      'Track daily wellness metrics including hydration, step counts, and medicine reminders.',
      'Generate a standardized ReportLab clinical PDF report with timestamps.',
      'Share the PDF directly with your healthcare provider during check-ups.'
    ],
    tip: 'Doctor Consultation: Includes acoustic spectrogram metrics and verified model checksums.'
  }
];

const AppWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [recordingSeconds, setRecordingSeconds] = useState(15);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Recording countdown simulation
  useEffect(() => {
    if (activeStep === 1) {
      setRecordingSeconds(15);
      const timer = setInterval(() => {
        setRecordingSeconds((prev) => (prev > 1 ? prev - 1 : 15));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeStep]);

  const currentStep = stepsData[activeStep];

  return (
    <section id="app-walkthrough" style={{ background: 'var(--bg-page)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem' }}>
            <Smartphone size={14} color="var(--teal-primary)" />
            <span>Interactive Mobile Walkthrough</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            How <span style={{ color: 'var(--teal-primary)' }}>LungSense AI</span> Works on Your Phone
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Follow the 5 simple steps below to see how the mobile app captures breath sounds, performs neural analysis, and delivers clinical screening results.
          </p>

          {/* Controls Bar: Auto-play toggle & Step indicators */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'var(--bg-white)',
              border: '1px solid var(--border-teal)',
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              marginTop: '1.2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: isPlaying ? 'var(--teal-light)' : 'var(--bg-subtle)',
                border: 'none',
                color: isPlaying ? 'var(--teal-hover)' : 'var(--text-body)',
                padding: '0.35rem 0.85rem',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700
              }}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? 'Auto-Playing' : 'Paused'}</span>
            </button>

            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>
              Step {activeStep + 1} of {stepsData.length}
            </span>

            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {stepsData.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  style={{
                    width: activeStep === idx ? '22px' : '7px',
                    height: '7px',
                    borderRadius: '4px',
                    background: activeStep === idx ? 'var(--teal-primary)' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  title={s.title}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Two-Column Showcase: Smartphone Mockup (Left) + Step Guide (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          
          {/* LEFT: Clean Realistic Smartphone Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="phone-device-frame">
              
              {/* Dynamic Island */}
              <div className="phone-dynamic-island">
                <div className="phone-lens" />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#334155' }} />
              </div>

              {/* Screen Inner View */}
              <div className="phone-screen-inner">
                
                {/* Phone Status Bar */}
                <div className="phone-status-row">
                  <span>09:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Wifi size={11} color="#0a2540" />
                    <span style={{ fontSize: '0.62rem', color: '#0a2540' }}>5G</span>
                    <Battery size={13} color="#059669" />
                  </div>
                </div>

                {/* In-App Header */}
                <div
                  style={{
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border-light)',
                    background: '#ffffff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--teal-primary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Activity size={12} color="#ffffff" />
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-heading)' }}>LungSense AI</span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: 'var(--teal-light)',
                      color: 'var(--teal-hover)',
                      padding: '2px 6px',
                      borderRadius: '5px',
                      fontWeight: 700,
                      border: '1px solid var(--border-teal)'
                    }}
                  >
                    ON-DEVICE
                  </span>
                </div>

                {/* In-App Screen Content (Changes per Step) */}
                <div className="phone-app-body">
                  <AnimatePresence mode="wait">
                    
                    {/* STAGE 1: Positioning */}
                    {activeStep === 0 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                      >
                        <div>
                          <div style={{ textAlign: 'center', margin: '6px 0 10px 0' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--teal-primary)', fontWeight: 700 }}>EXAMINATION SETUP</span>
                            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-heading)', margin: '2px 0' }}>Position Phone Mic</h4>
                            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Hold mic 5-10 cm from upper chest or trachea</p>
                          </div>

                          {/* Anatomical chest target diagram */}
                          <div
                            style={{
                              position: 'relative',
                              height: '200px',
                              background: '#ffffff',
                              borderRadius: '12px',
                              border: '1px solid var(--border-teal)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              overflow: 'hidden'
                            }}
                          >
                            {/* Stylized Torso Silhouette */}
                            <svg width="130" height="170" viewBox="0 0 100 130" fill="none">
                              <path d="M50 15 C35 15, 25 25, 20 40 C15 55, 12 85, 10 120 L90 120 C88 85, 85 55, 80 40 C75 25, 65 15, 50 15 Z" stroke="#94a3b8" strokeWidth="1.5" fill="#f8fafc" />
                              <circle cx="50" cy="12" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="#f8fafc" />
                              <path d="M50 25 V65 M38 42 C38 55, 45 65, 50 65 M62 42 C62 55, 55 65, 50 65" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                            </svg>

                            {/* Auscultation target zone indicator */}
                            <div
                              style={{
                                position: 'absolute',
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                border: '2px solid var(--teal-primary)',
                                background: 'rgba(13, 148, 136, 0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--teal-primary)' }} />
                            </div>

                            <div style={{ position: 'absolute', bottom: '8px', background: 'rgba(255,255,255,0.95)', padding: '3px 8px', borderRadius: '6px', border: '1px solid var(--border-teal)', fontSize: '0.62rem', color: 'var(--teal-hover)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                              <CheckCircle2 size={10} color="var(--teal-primary)" />
                              <span>Optimal Microphone Zone</span>
                            </div>
                          </div>
                        </div>

                        {/* Status bar & next button */}
                        <div style={{ marginTop: '8px' }}>
                          <div style={{ background: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '6px 10px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Room Noise Level:</span>
                            <span style={{ color: 'var(--medical-success)', fontWeight: 700 }}>Quiet (24 dB)</span>
                          </div>
                          <button
                            onClick={() => { setActiveStep(1); setIsPlaying(false); }}
                            className="btn btn-primary"
                            style={{
                              width: '100%',
                              padding: '8px',
                              fontSize: '0.78rem',
                              justifyContent: 'center'
                            }}
                          >
                            <span>Ready to Record</span>
                            <ChevronRight size={13} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: Recording Audio */}
                    {activeStep === 1 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                      >
                        <div style={{ textAlign: 'center', marginTop: '4px' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'var(--medical-danger-light)', padding: '2px 8px', borderRadius: '12px', border: '1px solid #fecaca' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--medical-danger)' }} />
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--medical-danger)' }}>RECORDING SOUND</span>
                          </div>

                          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-mono)', margin: '8px 0 0 0' }}>
                            00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
                          </div>
                          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: '2px 0 8px 0' }}>Breathe deeply through open mouth</p>
                        </div>

                        {/* Clean Audio Waveform */}
                        <div
                          style={{
                            background: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid var(--border-teal)',
                            padding: '16px 10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                        >
                          <div className="clean-wave-bars" style={{ width: '100%', height: '60px' }}>
                            {[16, 32, 48, 22, 54, 38, 20, 42, 56, 32, 18, 45, 36, 58, 26, 40, 50, 20].map((height, i) => (
                              <div
                                key={i}
                                className="clean-wave-bar"
                                style={{
                                  animationDelay: `${i * 0.07}s`,
                                  height: `${height}px`,
                                  background: i % 2 === 0 ? 'var(--primary)' : 'var(--teal-primary)'
                                }}
                              />
                            ))}
                          </div>

                          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '6px' }}>
                            <span>Bandwidth: 100 - 2,000 Hz</span>
                            <span style={{ color: 'var(--teal-primary)', fontWeight: 700 }}>Acoustic Mic Active</span>
                          </div>
                        </div>

                        {/* Stop Button */}
                        <div style={{ textAlign: 'center', marginTop: '8px' }}>
                          <button
                            onClick={() => { setActiveStep(2); setIsPlaying(false); }}
                            style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              background: 'var(--medical-danger)',
                              border: '3px solid #fee2e2',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)'
                            }}
                          >
                            <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#fff' }} />
                          </button>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                            Tap to Stop & Analyze
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: AI Inference & Spectrogram */}
                    {activeStep === 2 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                      >
                        <div style={{ textAlign: 'center', margin: '4px 0' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'var(--teal-light)', padding: '2px 8px', borderRadius: '12px' }}>
                            <Cpu size={11} color="var(--teal-hover)" />
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--teal-hover)' }}>CNN-BiLSTM INFERENCE</span>
                          </div>
                          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', margin: '4px 0 2px 0' }}>Mel-Spectrogram Processing</h4>
                        </div>

                        {/* Clean Spectrogram Display */}
                        <div
                          style={{
                            background: '#ffffff',
                            borderRadius: '12px',
                            border: '1px solid var(--border-light)',
                            padding: '10px'
                          }}
                        >
                          <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Frequency Distribution</span>
                            <span style={{ color: 'var(--teal-primary)', fontWeight: 700 }}>128 Mel Filters</span>
                          </div>

                          <div
                            style={{
                              height: '100px',
                              borderRadius: '8px',
                              background: 'linear-gradient(180deg, #0c2340 0%, #0369a1 40%, #0d9488 75%, #ccfbf1 100%)',
                              position: 'relative',
                              overflow: 'hidden'
                            }}
                          >
                            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.35 }}>
                              <path d="M0 45 Q 30 20, 60 45 T 120 45 T 180 45 T 240 45" stroke="#fff" fill="none" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>

                        {/* Neural Layer Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', border: '1px solid var(--border-light)', padding: '6px 8px', borderRadius: '6px', fontSize: '0.65rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Conv2D Spatial Filters:</span>
                            <span style={{ color: 'var(--medical-success)', fontWeight: 700 }}>Active (32 Ch)</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', border: '1px solid var(--border-light)', padding: '6px 8px', borderRadius: '6px', fontSize: '0.65rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>BiLSTM Temporal Units:</span>
                            <span style={{ color: 'var(--medical-success)', fontWeight: 700 }}>128 Units</span>
                          </div>
                        </div>

                        <button
                          onClick={() => { setActiveStep(3); setIsPlaying(false); }}
                          className="btn btn-primary"
                          style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '0.75rem',
                            justifyContent: 'center',
                            marginTop: '6px'
                          }}
                        >
                          <span>View Screening Results</span>
                          <ChevronRight size={13} />
                        </button>
                      </motion.div>
                    )}

                    {/* STAGE 4: Clinical Results */}
                    {activeStep === 3 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                      >
                        <div>
                          <div style={{ textAlign: 'center', margin: '2px 0 8px 0' }}>
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>EXAMINATION SUMMARY</span>
                            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-heading)', margin: '1px 0' }}>Screening Report</h4>
                          </div>

                          {/* Sound Result Card */}
                          <div
                            style={{
                              background: '#ffffff',
                              border: '1px solid #fed7aa',
                              borderLeft: '4px solid var(--medical-warning)',
                              borderRadius: '10px',
                              padding: '10px',
                              marginBottom: '8px'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Detected Pattern:</span>
                              <span style={{ fontSize: '0.62rem', background: 'var(--medical-warning-light)', color: 'var(--medical-warning)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                                ADVENTITIOUS
                              </span>
                            </div>
                            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                              Crackles & Wheezes
                            </div>
                            <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                              Acoustic indicators characteristic of airflow obstruction.
                            </p>
                          </div>

                          {/* COPD Risk Meter */}
                          <div
                            style={{
                              background: '#ffffff',
                              border: '1px solid var(--border-light)',
                              borderRadius: '10px',
                              padding: '8px'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', marginBottom: '3px' }}>
                              <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>COPD Risk Index:</span>
                              <span style={{ color: 'var(--medical-warning)', fontWeight: 800 }}>82% (Elevated)</span>
                            </div>
                            <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                              <div style={{ width: '82%', height: '100%', background: 'linear-gradient(90deg, var(--teal-primary), var(--medical-warning))', borderRadius: '3px' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: '8px', fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                              <div>Wheezes: <strong style={{ color: 'var(--text-heading)' }}>48%</strong></div>
                              <div>Crackles: <strong style={{ color: 'var(--text-heading)' }}>28%</strong></div>
                              <div>Normal: <strong style={{ color: 'var(--text-heading)' }}>12%</strong></div>
                              <div>Both: <strong style={{ color: 'var(--text-heading)' }}>12%</strong></div>
                            </div>
                          </div>
                        </div>

                        <div style={{ marginTop: '8px' }}>
                          <button
                            onClick={() => { setActiveStep(4); setIsPlaying(false); }}
                            className="btn btn-primary"
                            style={{
                              width: '100%',
                              padding: '8px',
                              fontSize: '0.75rem',
                              justifyContent: 'center'
                            }}
                          >
                            Export Doctor PDF Report
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 5: Wellness Dashboard & PDF */}
                    {activeStep === 4 && (
                      <motion.div
                        key="step-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2px 0 8px 0' }}>
                            <div>
                              <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>HEALTH METRICS</span>
                              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>Daily Wellness Score</h4>
                            </div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--teal-hover)' }}>
                              86<span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>/100</span>
                            </div>
                          </div>

                          {/* Wellness Tiles */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
                            <div style={{ background: 'var(--teal-surface)', padding: '8px', borderRadius: '8px', border: '1px solid var(--border-teal)' }}>
                              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Hydration</span>
                              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)' }}>1,850 ml</div>
                              <span style={{ fontSize: '0.58rem', color: 'var(--teal-primary)', fontWeight: 700 }}>74% of goal</span>
                            </div>

                            <div style={{ background: '#ffffff', padding: '8px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Daily Steps</span>
                              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)' }}>6,420</div>
                              <span style={{ fontSize: '0.58rem', color: 'var(--medical-success)', fontWeight: 700 }}>Goal reached</span>
                            </div>
                          </div>

                          {/* PDF Summary Box */}
                          <div
                            style={{
                              background: '#ffffff',
                              border: '1px solid var(--border-teal)',
                              borderRadius: '8px',
                              padding: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <FileText size={16} color="var(--teal-hover)" />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-heading)' }}>Clinical Summary PDF</div>
                              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Formatted for Pulmonologist Review</div>
                            </div>
                          </div>
                        </div>

                        <div style={{ marginTop: '8px' }}>
                          <button
                            onClick={() => { setActiveStep(0); setIsPlaying(false); }}
                            className="btn btn-secondary"
                            style={{
                              width: '100%',
                              padding: '8px',
                              fontSize: '0.75rem',
                              justifyContent: 'center'
                            }}
                          >
                            <span>Restart Demo Walkthrough</span>
                          </button>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT: Professional Step Selector Cards */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.8rem' }}>
              {stepsData.map((step, idx) => {
                const StepIcon = step.icon;
                const isCurrent = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false);
                    }}
                    className="clean-card"
                    style={{
                      padding: '1.1rem 1.3rem',
                      cursor: 'pointer',
                      border: isCurrent ? '2px solid var(--teal-primary)' : '1px solid var(--border-light)',
                      background: isCurrent ? '#ffffff' : 'var(--bg-subtle)',
                      boxShadow: isCurrent ? 'var(--shadow-md)' : 'none',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: isCurrent ? 'var(--teal-light)' : '#ffffff',
                          border: '1px solid',
                          borderColor: isCurrent ? 'var(--border-teal)' : 'var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <StepIcon size={19} color={isCurrent ? 'var(--teal-hover)' : 'var(--text-muted)'} />
                      </div>

                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--teal-primary)', fontFamily: 'var(--font-mono)' }}>
                          STEP {step.number}
                        </div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', margin: 0 }}>
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight size={17} color={isCurrent ? 'var(--teal-primary)' : 'var(--text-muted)'} />
                  </div>
                );
              })}
            </div>

            {/* Selected Step Detail Box */}
            <div
              className="clean-card"
              style={{
                padding: '1.6rem',
                border: '1px solid var(--border-teal)',
                background: '#ffffff'
              }}
            >
              <h4 style={{ fontSize: '1.05rem', color: 'var(--teal-hover)', marginBottom: '0.8rem', fontWeight: 700 }}>
                {currentStep.subtitle}
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.2rem' }}>
                {currentStep.guide.map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                    <CheckCircle2 size={17} color="var(--teal-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  background: 'var(--teal-surface)',
                  borderLeft: '3px solid var(--teal-primary)',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '0 6px 6px 0',
                  fontSize: '0.82rem',
                  color: 'var(--text-body)'
                }}
              >
                {currentStep.tip}
              </div>

              {/* Prev / Next Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : stepsData.length - 1));
                    setIsPlaying(false);
                  }}
                  className="btn btn-secondary"
                  style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
                >
                  <ChevronLeft size={15} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % stepsData.length);
                    setIsPlaying(false);
                  }}
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
                >
                  <span>Next Step</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppWalkthrough;
