import React, { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const tabs = [
    "Product Ke Baare Mein",
    "Setup Aur Technical",
    "Pricing Aur Payment",
    "Data Safety",
    "Demo Aur Support"
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const productFaqs = [
    {
      q: "Kya mujhe computer chalana aana chahiye?",
      a: "Bilkul nahi. Agar aap WhatsApp use kar sakte hain, toh yeh bhi kar sakte hain. Isse zyada simple nahi ho sakta."
    },
    {
      q: "Kya Hindi mein baat kar sakte hain?",
      a: "Bilkul. Hindi, Hinglish — jo comfortable lage. English compulsory nahi hai."
    }
  ];

  const setupFaqs = [
    {
      q: "Kya naya software install karna padega?",
      a: "Nahi. Jo Tally aap abhi use kar rahe hain, wahi chalega. Koi change nahi."
    }
  ];

  const dataFaqs = [
    {
      q: "Mera Tally data safe rahega?",
      a: "Haan, 100%. Aapka data fully encrypted hai. Koi bhi nahi dekh sakta — na humari team, na koi aur."
    }
  ];

  const demoFaqs = [
    {
      q: "Demo mein kya hoga?",
      a: "20 minute ki simple call. Hum live dikhayenge — aapke khud ke data pe — kaise kaam karta hai. Koi pressure nahi, koi commitment nahi."
    }
  ];

  const pricingFaqs = [
    { q: "Free trial available hai?", a: "Haan, 14 din ka trial har plan ke saath aata hai." }
  ];

  const allFaqs = [productFaqs, setupFaqs, pricingFaqs, dataFaqs, demoFaqs];

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="pt-24 min-h-screen bg-bg-light">
      <section className="bg-[#FAF7F5] py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A0A0A] text-center mb-12">
            Aapke Saare Sawaal, Yahaan Solved Hain
          </h1>
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => { setActiveTab(idx); setOpenIndex(null); }}
                className={`px-5 py-3 rounded-xl font-bold transition-all ${
                  activeTab === idx 
                  ? 'bg-[#E8251A] text-white shadow-md shadow-[#E8251A]/20' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4 max-w-3xl mx-auto min-h-[400px]">
            {allFaqs[activeTab].map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-[#E8251A22] bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-[#E8251A]/40"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-bold text-lg text-[#1A0A0A] pr-4">{faq.q}</span>
                    <div className={`flex-shrink-0 text-[#E8251A] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[#1A0A0A] text-[16px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
            
            {allFaqs[activeTab].length === 0 && (
              <p className="text-center text-gray-500 py-8 italic">Is category mein abhi koi sawaal nahi hai.</p>
            )}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1A0A0A] mb-8">Phir bhi kuch clear nahi hua?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <MessageSquare size={22} /> WhatsApp Pe Poochhein
            </a>
            <a href="#book-demo" className="flex items-center justify-center gap-3 bg-[#1A0A0A] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <PhoneCall size={22} /> Demo Book Karein
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
