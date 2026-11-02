import React from 'react';
import { Activity, Download, Mail, ShieldAlert } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#f0f5fa', borderTop: '1px solid var(--border-light)', paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        
        {/* Medical Regulatory & Safety Advisory Banner */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #fed7aa',
            borderLeft: '4px solid var(--medical-warning)',
            borderRadius: '12px',
            padding: '1.2rem 1.6rem',
            marginBottom: '3rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--medical-warning-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
            <ShieldAlert size={18} color="var(--medical-warning)" />
          </div>
          <div>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-heading)', margin: '0 0 0.2rem 0', fontWeight: 700 }}>
              Clinical & Regulatory Advisory
            </h4>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong>Important Notice:</strong> LungSense AI is an investigational software prototype designed for respiratory sound research, acoustic education, and early screening. It is not an FDA or CE-cleared diagnostic medical device. It is not intended to replace professional medical diagnosis, formal pulmonary function tests (spirometry), or clinical consultations. If you or someone around you is experiencing acute shortness of breath, severe chest pain, or respiratory distress, please contact emergency medical services immediately.
            </p>
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--teal-primary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={17} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                LungSense <span style={{ color: 'var(--teal-primary)' }}>AI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              On-device acoustic respiratory sound classification and COPD screening powered by CNN-BiLSTM neural networks.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'var(--teal-surface)', border: '1px solid var(--border-teal)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', color: 'var(--teal-hover)', fontWeight: 700 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal-primary)' }} />
              <span>Version 1.0.0 Verified</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-heading)', marginBottom: '1rem', fontWeight: 700 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><a href="#hero" style={{ color: 'var(--text-body)' }}>Overview</a></li>
              <li><a href="#copd" style={{ color: 'var(--text-body)' }}>What is COPD?</a></li>
              <li><a href="#app-walkthrough" style={{ color: 'var(--teal-hover)', fontWeight: 700 }}>How to Use the App</a></li>
              <li><a href="#acoustic-lab" style={{ color: 'var(--text-body)' }}>Acoustic Sound Lab</a></li>
              <li><a href="#clinical-ai" style={{ color: 'var(--text-body)' }}>Clinical AI Architecture</a></li>
              <li><a href="#features" style={{ color: 'var(--text-body)' }}>Platform Features</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-body)' }}>FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Technical Specifications */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-heading)', marginBottom: '1rem', fontWeight: 700 }}>
              Technical Specs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <li>Model: CNN + BiLSTM (PyTorch)</li>
              <li>Training Benchmark: ICBHI 2017</li>
              <li>Audio Input: 16 kHz Mono</li>
              <li>Report Format: Clinical PDF (ReportLab)</li>
              <li>Target OS: Android 8.0+ (API 26+)</li>
              <li>Data Mode: 100% On-Device Offline</li>
            </ul>
          </div>

          {/* Col 4: APK Download Action */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-heading)', marginBottom: '1rem', fontWeight: 700 }}>
              Android Client
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.8rem', lineHeight: 1.5 }}>
              Download the verified APK for Android smartphones directly.
            </p>
            <a
              href="/LungSenseAI-latest.apk"
              download="LungSenseAI-latest.apk"
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.65rem 1rem',
                fontSize: '0.85rem'
              }}
            >
              <Download size={15} />
              <span>Download APK (35.8 MB)</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Profiles */}
        <div
          style={{
            paddingTop: '1.8rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.2rem'
          }}
        >
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} LungSense AI. Created by Shivansh. Open-source healthcare innovation.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/Shivansh-52"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shivansh43/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:shivansh0962@gmail.com"
              style={{ color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
            >
              <Mail size={16} />
              <span>shivansh0962@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
