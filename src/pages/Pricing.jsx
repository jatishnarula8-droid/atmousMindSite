import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: "STARTER",
      price: "₹999",
      period: "/mahina",
      features: [
        "1 Tally company",
        "500 sawaal/month",
        "GST, sales, purchase reports",
        "Hindi + Hinglish support",
        "Email support"
      ]
    },
    {
      name: "GROWTH",
      price: "₹2,499",
      period: "/mahina",
      highlighted: true,
      badge: "Sabse Zyada Pasand",
      freeTrialBadge: "14 din free trial",
      features: [
        "3 Tally companies",
        "Unlimited sawaal",
        "All reports + custom reports",
        "Priority support",
        "3 users + WhatsApp integration"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "API access + on-site setup"
      ]
    }
  ];

  const genericFeatures = [
    { title: "100% Data Safety", desc: "Aapka data bank-level encryption se secure hai." },
    { title: "No Tally Lag", desc: "Tally ki speed par koi asar nahi padega." },
    { title: "Mobile Friendly", desc: "Phone pe WhatsApp jaisa easy experience." },
    { title: "Auto Updates", desc: "Naye features bina kisi extra cost ke." }
  ];

  const faqs = [
    { q: "Kya main beech mein cancel kar sakta hoon?", a: "Haan, bilkul. Koi locked-in contract contract nahi hai." },
    { q: "Payment kaise karna hai?", a: "Aap UPI, credit card, ya bank transfer se pay kar sakte hain." },
    { q: "Free trial mein credit card chahiye?", a: "Nahi, 14 din ka trial bina card ke shuru hota hai." },
    { q: "Kya support ke extra paise lagenge?", a: "Bilkul nahi. Support har plan ka hissa hai." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-bg-light font-body">
      {/* 1. Page Hero */}
      <section className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A0A0A] mb-4">
          Simple pricing. Koi chhupa hua charge nahi.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Jo dikha, wahi dena hai. Bas itna.
        </p>
      </section>

      {/* 2. Pricing Cards */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className={`relative bg-white rounded-3xl p-8 border ${plan.highlighted ? 'border-[#E8251A] shadow-2xl shadow-[#E8251A]/20 scale-105 z-10' : 'border-gray-200 shadow-sm'}`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8251A] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              {plan.freeTrialBadge && (
                <div className="absolute -right-3 -top-3 bg-yellow-400 text-[#1A0A0A] text-xs font-extrabold px-3 py-1 rounded-full shadow-md transform rotate-12">
                  {plan.freeTrialBadge}
                </div>
              )}
              <h3 className={`font-bold uppercase tracking-wider mb-2 ${plan.highlighted ? 'text-[#E8251A]' : 'text-gray-500'}`}>{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-[#1A0A0A]">{plan.price}</span>
                {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                    <Check className="text-[#25D366] mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#book-demo" className={`w-full py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 flex items-center justify-center ${plan.highlighted ? 'bg-[#E8251A] text-white shadow-lg shadow-[#E8251A]/30' : 'bg-[#FAF7F5] text-[#1A0A0A] hover:bg-gray-200'}`}>
                Plan Select Karo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Har plan mein yeh milega */}
      <section className="bg-[#FAF7F5] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-[#1A0A0A] mb-12">Har plan mein yeh milega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {genericFeatures.map((feat, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-bold text-lg text-[#1A0A0A] mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Risk? Zero. */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-green-50 rounded-3xl p-10 border border-green-200 shadow-inner" data-aos="zoom-in">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800 mb-4">Risk? Zero.</h2>
          <p className="text-lg lg:text-xl text-green-700 font-medium">14 din ki money-back guarantee. Agar aapko pasand nahi aaya, bina sawal kiye refund. 🤝</p>
        </div>
      </section>

      {/* 5. Pricing FAQs */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1A0A0A] mb-10 text-center">Pricing Sawaal</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:border-[#E8251A]/30">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[#1A0A0A] text-lg">{faq.q}</span>
                <ChevronDown className={`text-[#E8251A] transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} size={24} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Pricing;
