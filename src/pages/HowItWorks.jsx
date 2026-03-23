import React from 'react';
import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';

const HowItWorks = () => {
  return (
    <div className="pt-24 min-h-screen bg-bg-light">
      {/* 1. Page Hero */}
      <section className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A0A0A] mb-4">
          Kaise kaam karta hai Atmous Minds?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Teen simple steps. Koi technical knowledge nahi chahiye.
        </p>
      </section>

      {/* 2. Three Steps Alternating */}
      <section className="flex flex-col">
        {/* Step 1 */}
        <div className="bg-[#FAF7F5] py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <span className="text-6xl font-extrabold text-[#E8251A]/20 block mb-4">01</span>
              <h2 className="text-3xl font-bold text-[#1A0A0A] mb-4">Tally Connect Karo</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Ek baar apna Tally account connect karo. 5 minute ka kaam, ek baar ki setting.</p>
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-6xl shadow-xl shadow-[#E8251A]/10 border border-gray-100">🔗</div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-left">
              <span className="text-6xl font-extrabold text-[#E8251A]/20 block mb-4">02</span>
              <h2 className="text-3xl font-bold text-[#1A0A0A] mb-4">Jo Poochna Ho, Poochho</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Hindi mein, Hinglish mein — jo aata ho. "Aaj ka sale kya raha?" — bas itna kaafi hai.</p>
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
              <div className="w-48 h-48 bg-[#FAF7F5] rounded-full flex items-center justify-center text-6xl shadow-xl shadow-[#E8251A]/10 border border-gray-100">💬</div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#FAF7F5] py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <span className="text-6xl font-extrabold text-[#E8251A]/20 block mb-4">03</span>
              <h2 className="text-3xl font-bold text-[#1A0A0A] mb-4">Jawab Aaya, Kaam Hua</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Report, number, list — sab kuch seedha aapke saamne. Koi aur kaam nahi.</p>
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-6xl shadow-xl shadow-[#E8251A]/10 border border-gray-100">✅</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Yeh sab pooch sakte hain */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#1A0A0A] mb-12">Yeh sab pooch sakte hain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#E8251A] text-white p-6 rounded-2xl rounded-bl-sm font-medium text-lg shadow-lg hover:-translate-y-1 transition-transform" data-aos="zoom-in" data-aos-delay="0">
              "Kiska kitna udhaar baaki hai?"
            </div>
            <div className="bg-[#E8251A] text-white p-6 rounded-2xl rounded-br-sm font-medium text-lg shadow-lg hover:-translate-y-1 transition-transform" data-aos="zoom-in" data-aos-delay="100">
              "Is mahine top selling product kaun sa tha?"
            </div>
            <div className="bg-[#E8251A] text-white p-6 rounded-2xl rounded-bl-sm font-medium text-lg shadow-lg hover:-translate-y-1 transition-transform" data-aos="zoom-in" data-aos-delay="200">
              "GST report nikal do March ki."
            </div>
            <div className="bg-[#E8251A] text-white p-6 rounded-2xl rounded-br-sm font-medium text-lg shadow-lg hover:-translate-y-1 transition-transform" data-aos="zoom-in" data-aos-delay="300">
              "Total expenses pichle hafte kitne the?"
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before/After Table */}
      <section className="bg-[#1A0A0A] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Pehle aur Ab mein farq</h2>
          <div className="bg-[#2a0f0f] rounded-3xl overflow-hidden border border-[#E8251A33] overflow-x-auto">
            <table className="w-full text-left text-white min-w-[600px]">
              <thead>
                <tr className="bg-[#E8251A22]">
                  <th className="p-6 font-bold text-lg border-b border-[#E8251A33] w-1/3">Kaam</th>
                  <th className="p-6 font-bold text-lg border-b border-[#E8251A33] w-1/3 text-gray-400">Pehle (Bina Atmous)</th>
                  <th className="p-6 font-bold text-lg border-b border-[#E8251A33] w-1/3 text-[#E8251A]">Ab (Atmous ke saath)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-6 border-b border-[#E8251A11]">Report Dekhna</td>
                  <td className="p-6 border-b border-[#E8251A11] text-gray-400">PC kholo, Tally chalao, format karo (30 min)</td>
                  <td className="p-6 border-b border-[#E8251A11] text-green-400 font-medium tracking-wide">WhatsApp pe text karo (2 sec)</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-[#E8251A11]">Staff Training</td>
                  <td className="p-6 border-b border-[#E8251A11] text-gray-400">Mahino lagte hain seekhne mein</td>
                  <td className="p-6 border-b border-[#E8251A11] text-green-400 font-medium tracking-wide">Zero training. Just chat.</td>
                </tr>
                <tr>
                  <td className="p-6">Accessibility</td>
                  <td className="p-6 text-gray-400">Sirf office ke PC pe</td>
                  <td className="p-6 text-green-400 font-medium tracking-wide">Kahin bhi, mobile par.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
           <h2 className="text-3xl font-extrabold text-[#1A0A0A] mb-8">Dekhna hai live?</h2>
        </div>
        <CtaSection />
      </div>
    </div>
  );
};

export default HowItWorks;
