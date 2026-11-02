import React, { useState } from 'react';
import { 
  Wind, 
  AlertTriangle, 
  HeartPulse, 
  CheckCircle2, 
  Info, 
  Stethoscope
} from 'lucide-react';

const AboutCOPD = () => {
  const [activeTab, setActiveTab] = useState('pathology');

  const symptoms = [
    { name: 'Chronic Shortness of Breath (Dyspnea)', detail: 'Progressive breathing difficulty during regular daily activity or physical exertion.' },
    { name: 'Persistent Productive Cough', detail: 'Frequent mucus or phlegm clearance, often referred to as a chronic bronchitis cough.' },
    { name: 'Audible Wheezing & Chest Tightness', detail: 'Musical whistling sounds caused by turbulent airflow through constricted bronchi.' },
    { name: 'Acoustic Crackles (Rales)', detail: 'Discontinuous popping sounds produced when collapsed small airways pop open during inhalation.' }
  ];

  return (
    <section id="copd" style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-clean" style={{ marginBottom: '1rem', background: 'var(--medical-warning-light)', borderColor: '#fde68a', color: 'var(--medical-warning)' }}>
            <AlertTriangle size={14} color="var(--medical-warning)" />
            <span>Pathology & Clinical Urgency</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Understanding <span style={{ color: 'var(--primary)' }}>COPD</span> & Acoustic Biomarkers
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Chronic Obstructive Pulmonary Disease (COPD) is the 3rd leading cause of mortality globally. Early detection through acoustic sound screening helps patients receive interventions before irreversible airway damage occurs.
          </p>
        </div>

        {/* Anatomical Comparison Showcase */}
        <div
          className="clean-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left: 3D Anatomical Cross-Section Diagram */}
            <div>
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '2px solid var(--teal-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <img
                  src="/images/copd_anatomy.jpg"
                  alt="Healthy Bronchial Airway vs COPD Airway with Mucus Obstruction"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: '0.8rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  justifyContent: 'center'
                }}
              >
                <Info size={14} color="var(--teal-primary)" />
                <span>Clinical Illustration: Clear Open Lumen vs. Obstructed Bronchial Airway in COPD</span>
              </div>
            </div>

            {/* Right: Interactive Clinical Insights */}
            <div>
              {/* Tab Selector */}
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.4rem' }}>
                <button
                  onClick={() => setActiveTab('pathology')}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: activeTab === 'pathology' ? 'linear-gradient(135deg, var(--primary) 0%, var(--teal-primary) 100%)' : 'var(--bg-subtle)',
                    color: activeTab === 'pathology' ? '#fff' : 'var(--text-heading)',
                    border: '1px solid',
                    borderColor: activeTab === 'pathology' ? 'var(--primary)' : 'var(--border-light)',
                    transition: 'all 0.2s',
                    boxShadow: activeTab === 'pathology' ? '0 2px 6px rgba(2, 132, 199, 0.25)' : 'none'
                  }}
                >
                  Bronchial Changes
                </button>
                <button
                  onClick={() => setActiveTab('acoustics')}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: activeTab === 'acoustics' ? 'linear-gradient(135deg, var(--primary) 0%, var(--teal-primary) 100%)' : 'var(--bg-subtle)',
                    color: activeTab === 'acoustics' ? '#fff' : 'var(--text-heading)',
                    border: '1px solid',
                    borderColor: activeTab === 'acoustics' ? 'var(--primary)' : 'var(--border-light)',
                    transition: 'all 0.2s',
                    boxShadow: activeTab === 'acoustics' ? '0 2px 6px rgba(2, 132, 199, 0.25)' : 'none'
                  }}
                >
                  Acoustic Signatures
                </button>
              </div>

              {activeTab === 'pathology' ? (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--text-heading)' }}>
                    Airway Remodeling in Chronic Bronchitis
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                    In healthy airways, bronchial tubes are flexible, clear, and open. In patients with COPD, repeated irritation triggers a pathological cascade:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--teal-light)', color: 'var(--teal-hover)', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        1
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', margin: 0 }}>Excessive Mucus Secretion</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.15rem 0 0 0' }}>
                          Hyperactive mucous glands generate thick secretions that physically block bronchial passages.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--teal-light)', color: 'var(--teal-hover)', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        2
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', margin: 0 }}>Chronic Mucosal Inflammation</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.15rem 0 0 0' }}>
                          Swelling and fibrosis thicken airway walls, significantly narrowing the effective airflow channel.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--teal-light)', color: 'var(--teal-hover)', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        3
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', margin: 0 }}>Ciliary Dysfunction & Trapped Air</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.15rem 0 0 0' }}>
                          Paralyzed cilia fail to clear secretions, trapping air during exhalation and reducing oxygen uptake.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--text-heading)' }}>
                    Why AI Analyzes Respiratory Audio
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                    Narrowed, fluid-filled airways alter the acoustic turbulence of breathing, producing distinct adventitious sound signatures:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div style={{ background: 'var(--teal-surface)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid var(--teal-primary)' }}>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--teal-hover)', margin: 0 }}>Crackles (Discontinuous Explosive Sounds)</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', margin: '0.3rem 0 0 0' }}>
                        Brief popping sounds created when previously collapsed small airways pop open during inhalation.
                      </p>
                    </div>

                    <div style={{ background: 'var(--medical-warning-light)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid var(--medical-warning)' }}>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', margin: 0 }}>Wheezes (Continuous Musical Frequencies)</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', margin: '0.3rem 0 0 0' }}>
                        High-pitched whistling tones generated by gas moving rapidly through tightly constricted airway walls.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Symptoms Cards */}
        <div>
          <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.8rem', color: 'var(--text-heading)' }}>
            Key Symptoms & Screening Indicators
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
            {symptoms.map((item, idx) => (
              <div
                key={idx}
                className="clean-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  borderTop: '3px solid var(--teal-primary)'
                }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Stethoscope size={18} color="var(--teal-hover)" />
                </div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', margin: 0 }}>{item.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCOPD;
