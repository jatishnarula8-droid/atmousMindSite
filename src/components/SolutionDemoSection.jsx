import React from 'react';
import { Link } from 'react-router-dom';

const SolutionDemoSection = () => {
  return (
    <section className="bg-[#1A0A0A] py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-bold text-[#E8251A] uppercase tracking-wider mb-4 block">
          Ab aisa hoga
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Poochho, aur jawab lo — bas itna
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Koi training nahi. Koi manual nahi. Sirf baat karo.
        </p>

        <div 
          data-aos="fade-in"
          style={{
            display: 'flex',
            gap: '32px',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <div style={{
            background: '#2a0f0f',
            border: '1px solid #E8251A44',
            borderRadius: '20px',
            padding: '24px',
            width: '340px',
            fontFamily: "'Noto Sans', sans-serif"
          }}>
            <div style={{ color: '#E8251A', fontSize: '13px', marginBottom: '16px', fontWeight: '600', textAlign: 'left' }}>
              EXAMPLE 1 — GST Check
            </div>
            <div style={{ color: '#FAF7F5', fontSize: '14px', background: '#ffffff11', padding: '10px 14px', borderRadius: '10px', marginBottom: '10px', textAlign: 'left' }}>
              🧑 "Is mahine GST kitna banta hai?"
            </div>
            <div style={{ color: '#FAF7F5', fontSize: '14px', background: '#E8251A22', padding: '10px 14px', borderRadius: '10px', textAlign: 'left' }}>
              🤖 Aapka is mahine ka GST liability hai <strong className="text-white">₹18,240</strong>.<br/>CGST: ₹9,120 | SGST: ₹9,120<br/>Last date: 20 tarikh tak bharna hai. ✅
            </div>
          </div>

          <div style={{
            background: '#2a0f0f',
            border: '1px solid #E8251A44',
            borderRadius: '20px',
            padding: '24px',
            width: '340px',
            fontFamily: "'Noto Sans', sans-serif"
          }}>
            <div style={{ color: '#E8251A', fontSize: '13px', marginBottom: '16px', fontWeight: '600', textAlign: 'left' }}>
              EXAMPLE 2 — Udhaar Check
            </div>
            <div style={{ color: '#FAF7F5', fontSize: '14px', background: '#ffffff11', padding: '10px 14px', borderRadius: '10px', marginBottom: '10px', textAlign: 'left' }}>
              🧑 "Kiska udhaar sabse zyada baaki hai?"
            </div>
            <div style={{ color: '#FAF7F5', fontSize: '14px', background: '#E8251A22', padding: '10px 14px', borderRadius: '10px', textAlign: 'left' }}>
              🤖 Top 3 outstanding:<br/>1. Ramesh Traders — ₹45,000<br/>2. Gupta & Sons — ₹32,500<br/>3. Sharma Stores — ₹18,200 📋
            </div>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#E8251A] font-bold text-lg hover:underline transition-all">
            Poora process dekhein →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionDemoSection;
