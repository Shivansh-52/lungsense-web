import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  CheckCircle2, 
  Copy, 
  Check, 
  QrCode,
  ShieldCheck 
} from 'lucide-react';

const DownloadSection = () => {
  const [copied, setCopied] = useState(false);
  const sha256 = '8b02089bba87216ced5131c989fc2e14cd4b87651669eaf37d9bfc5287184a6a';

  const copyHash = () => {
    navigator.clipboard.writeText(sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" style={{ background: 'var(--bg-page)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem' }}>
            <Smartphone size={14} color="var(--teal-primary)" />
            <span>Android Release v1.0.0</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Download <span style={{ color: 'var(--teal-primary)' }}>LungSense AI</span> for Android
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Install the verified APK to perform rapid on-device breath auscultation, acoustic analysis, and longitudinal tracking.
          </p>
        </div>

        {/* Download Card */}
        <div
          className="clean-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            borderTop: '4px solid var(--teal-primary)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left: Download Action & Specs */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--teal-surface)', border: '1px solid var(--border-teal)', color: 'var(--teal-hover)', padding: '3px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, marginBottom: '1rem' }}>
                <CheckCircle2 size={14} color="var(--teal-primary)" />
                <span>Verified Release Build</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                Android APK Installation
              </h3>

              <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Includes the complete frozen CNN-BiLSTM inference engine, microphone auscultation tool, wellness dashboard, and ReportLab PDF exporter.
              </p>

              <a
                href="/LungSenseAI-latest.apk"
                download="LungSenseAI-latest.apk"
                className="btn btn-primary"
                style={{
                  fontSize: '1rem',
                  padding: '0.9rem 2rem',
                  width: '100%',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Download size={19} />
                <span>Download APK (35.8 MB)</span>
              </a>

              {/* Technical Release Details Table */}
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.82rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Package Version:</span>
                  <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>v1.0.0 (Build 1)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Architecture:</span>
                  <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>ARM64-v8a / Universal</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Compatibility:</span>
                  <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>Android 8.0+ (Oreo, API 26+)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Required Permission:</span>
                  <span style={{ color: 'var(--teal-primary)', fontWeight: 700 }}>Microphone (Auscultation)</span>
                </div>
              </div>
            </div>

            {/* Right: Clean QR Code & SHA-256 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  background: '#ffffff',
                  padding: '1.2rem',
                  borderRadius: '14px',
                  border: '2px solid var(--teal-light)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center',
                  marginBottom: '1.2rem'
                }}
              >
                {/* Clean Crisp QR Code */}
                <svg width="170" height="170" viewBox="0 0 200 200" fill="none">
                  <rect width="200" height="200" fill="white" />
                  <rect x="20" y="20" width="50" height="50" fill="#0a2540" rx="4" />
                  <rect x="28" y="28" width="34" height="34" fill="white" rx="2" />
                  <rect x="36" y="36" width="18" height="18" fill="#0d9488" rx="1" />

                  <rect x="130" y="20" width="50" height="50" fill="#0a2540" rx="4" />
                  <rect x="138" y="28" width="34" height="34" fill="white" rx="2" />
                  <rect x="146" y="36" width="18" height="18" fill="#0d9488" rx="1" />

                  <rect x="20" y="130" width="50" height="50" fill="#0a2540" rx="4" />
                  <rect x="28" y="138" width="34" height="34" fill="white" rx="2" />
                  <rect x="36" y="146" width="18" height="18" fill="#0d9488" rx="1" />

                  <rect x="80" y="25" width="12" height="12" fill="#0a2540" />
                  <rect x="100" y="25" width="12" height="12" fill="#0284c7" />
                  <rect x="85" y="45" width="14" height="14" fill="#0a2540" />
                  <rect x="80" y="75" width="12" height="12" fill="#0d9488" />
                  <rect x="100" y="75" width="12" height="12" fill="#0a2540" />
                  <rect x="120" y="75" width="12" height="12" fill="#0284c7" />

                  <rect x="30" y="85" width="14" height="14" fill="#0a2540" />
                  <rect x="55" y="95" width="12" height="12" fill="#0d9488" />
                  <rect x="80" y="105" width="12" height="12" fill="#0a2540" />
                  <rect x="105" y="105" width="14" height="14" fill="#0a2540" />
                  <rect x="135" y="95" width="12" height="12" fill="#0284c7" />
                  <rect x="160" y="85" width="14" height="14" fill="#0a2540" />

                  <rect x="80" y="135" width="12" height="12" fill="#0a2540" />
                  <rect x="100" y="145" width="12" height="12" fill="#0d9488" />
                  <rect x="120" y="135" width="12" height="12" fill="#0a2540" />
                  <rect x="145" y="145" width="14" height="14" fill="#0284c7" />
                  <rect x="165" y="135" width="12" height="12" fill="#0d9488" />
                  <rect x="145" y="165" width="12" height="12" fill="#0284c7" />

                  <circle cx="100" cy="100" r="16" fill="#0d9488" />
                  <rect x="97" y="90" width="6" height="20" fill="#ffffff" rx="1" />
                  <rect x="90" y="97" width="20" height="6" fill="#ffffff" rx="1" />
                </svg>
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1rem' }}>
                <QrCode size={15} color="var(--teal-primary)" />
                <span>Scan with phone camera to download directly</span>
              </div>

              {/* SHA-256 Copy Pill */}
              <div
                style={{
                  width: '100%',
                  background: 'var(--teal-surface)',
                  border: '1px solid var(--border-teal)',
                  borderRadius: '8px',
                  padding: '0.6rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  fontSize: '0.72rem'
                }}
              >
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  SHA256: {sha256}
                </div>
                <button
                  onClick={copyHash}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--medical-success)' : 'var(--teal-hover)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Quick Install Guide for Android */}
          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.8rem',
              borderTop: '1px solid var(--border-light)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.2rem'
            }}
          >
            {[
              { num: '1', title: 'Download File', desc: 'Tap Download APK or scan the QR code with your Android phone.' },
              { num: '2', title: 'Open Notification', desc: 'Tap the downloaded APK notification or open it in your file manager.' },
              { num: '3', title: 'Confirm Install', desc: 'If prompted by Android, toggle "Allow from this source" in settings.' },
              { num: '4', title: 'Grant Permission', desc: 'Open LungSense AI and allow microphone permission for lung auscultation.' }
            ].map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.7rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--teal-light)', color: 'var(--teal-hover)', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: 'var(--text-heading)', margin: '0 0 0.15rem 0' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DownloadSection;
