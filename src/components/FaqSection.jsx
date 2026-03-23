import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Kya mujhe computer chalana aana chahiye?",
      a: "Bilkul nahi. Agar aap WhatsApp use kar sakte hain, toh yeh bhi kar sakte hain. Isse zyada simple nahi ho sakta."
    },
    {
      q: "Mera Tally data safe rahega?",
      a: "Haan, 100%. Aapka data fully encrypted hai. Koi bhi nahi dekh sakta — na humari team, na koi aur."
    },
    {
      q: "Kya Hindi mein baat kar sakte hain?",
      a: "Bilkul. Hindi, Hinglish — jo comfortable lage. English compulsory nahi hai."
    },
    {
      q: "Kya naya software install karna padega?",
      a: "Nahi. Jo Tally aap abhi use kar rahe hain, wahi chalega. Koi change nahi."
    },
    {
      q: "Demo mein kya hoga?",
      a: "20 minute ki simple call. Hum live dikhayenge — aapke khud ke data pe — kaise kaam karta hai. Koi pressure nahi, koi commitment nahi."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF7F5] py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A0A0A] text-center mb-12">
          Mann mein sawaal hai? ✋
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="border border-[#E8251A22] bg-white rounded-2xl overflow-hidden transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
