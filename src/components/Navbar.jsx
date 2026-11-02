import React, { useState, useEffect } from 'react';
import { Activity, Download, Menu, X, Smartphone, ChevronRight, Stethoscope } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'What is COPD', href: '#copd' },
    { name: 'How to Use App', href: '#app-walkthrough', highlight: true },
    { name: 'Sound Lab', href: '#acoustic-lab' },
    { name: 'Clinical AI', href: '#clinical-ai' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: scrolled ? '0 3px 14px rgba(10, 37, 64, 0.06)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Healthcare Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--teal-primary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 8px rgba(2, 132, 199, 0.25)'
            }}
          >
            <Activity size={22} color="#ffffff" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>
                LungSense
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  background: 'var(--teal-light)',
                  color: 'var(--teal-hover)',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '5px',
                  border: '1px solid var(--border-teal)'
                }}
              >
                AI
              </span>
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--teal-primary)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Respiratory Health Platform
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: link.highlight ? 700 : 500,
                color: link.highlight ? 'var(--teal-hover)' : 'var(--text-body)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: link.highlight ? '0.35rem 0.8rem' : '0.35rem 0',
                background: link.highlight ? 'var(--teal-surface)' : 'transparent',
                borderRadius: link.highlight ? '6px' : '0',
                border: link.highlight ? '1px solid var(--border-teal)' : 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = link.highlight ? 'var(--teal-hover)' : 'var(--text-body)';
              }}
            >
              {link.highlight && <Smartphone size={14} color="var(--teal-primary)" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <a
            href="/LungSenseAI-latest.apk"
            download="LungSenseAI-latest.apk"
            className="btn btn-primary"
            style={{
              padding: '0.55rem 1.3rem',
              fontSize: '0.88rem',
              display: 'none'
            }}
            id="nav-download-cta"
          >
            <Download size={15} />
            <span>Download APK</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: 'var(--text-heading)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle menu"
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-white)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: link.highlight ? 'var(--teal-hover)' : 'var(--text-heading)',
                padding: '0.7rem 0.9rem',
                borderRadius: '8px',
                background: link.highlight ? 'var(--teal-surface)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {link.highlight && <Smartphone size={15} color="var(--teal-primary)" />}
                {link.name}
              </span>
              <ChevronRight size={15} color="var(--text-muted)" />
            </a>
          ))}

          <a
            href="/LungSenseAI-latest.apk"
            download="LungSenseAI-latest.apk"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '0.4rem', width: '100%', justifyContent: 'center' }}
          >
            <Download size={16} />
            <span>Download APK (v1.0.0)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          #nav-download-cta { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
