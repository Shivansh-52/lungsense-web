import React from 'react';
import { Download, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-color)', padding: '4rem 0 2rem 0', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '3rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>LungSense <span className="text-gradient">AI</span></h2>
            <p style={{ maxWidth: '400px' }}>
              Revolutionizing respiratory health monitoring through advanced on-device artificial intelligence.
            </p>
          </div>
          
          <div style={{ flex: '1 1 200px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#about">What is COPD?</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#how-it-works">How it Works</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#features">Features</a></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 200px' }} id="download">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Get the App</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Download the latest APK for Android.</p>
            <a href="/LungSenseAI-latest.apk" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', width: '100%' }}>
              <Download size={18} /> Download APK
            </a>
          </div>
        </div>

        <div style={{ 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} LungSense AI. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/Shivansh-52" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span style={{ fontSize: '0.9rem' }}>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shivansh43/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span style={{ fontSize: '0.9rem' }}>LinkedIn</span>
            </a>
            <a href="mailto:shivansh0962@gmail.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} />
              <span style={{ fontSize: '0.9rem' }}>Gmail</span>
            </a>
          </div>
        </div>

        <div style={{ marginTop: '2rem', background: 'rgba(255, 75, 130, 0.1)', border: '1px solid var(--accent)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#ff8da1' }}>
            <strong>Disclaimer:</strong> LungSense AI is a screening and monitoring tool. It does not replace professional medical advice, diagnosis, or treatment. Always consult a healthcare professional for medical emergencies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
