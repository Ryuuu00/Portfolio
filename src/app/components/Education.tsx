"use client";

import { GraduationCap, School } from "lucide-react";

function Education() {
  return (
    <div className="glass-card1" style={{ animationDelay: '0.6s' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <GraduationCap size={24} color="#a78bfa" />
        <h3 style={{ fontSize: '1.5rem', color: '#a78bfa', margin: 0 }}>Education</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <div style={{
            padding: '0.5rem',
            borderRadius: '10px',
            background: 'rgba(167, 139, 250, 0.12)',
            border: '1px solid rgba(167, 139, 250, 0.25)',
            color: '#c4b5fd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.15rem',
            flexShrink: 0
          }}>
            <GraduationCap size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>College</div>
            <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.98rem' }}>Visayas State University</div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Main Campus</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <div style={{
            padding: '0.5rem',
            borderRadius: '10px',
            background: 'rgba(167, 139, 250, 0.12)',
            border: '1px solid rgba(167, 139, 250, 0.25)',
            color: '#c4b5fd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.15rem',
            flexShrink: 0
          }}>
            <School size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>High School</div>
            <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.98rem' }}>EVSU</div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Main Campus</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;