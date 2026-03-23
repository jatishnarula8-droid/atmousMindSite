import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      num: "01",
      icon: "🔗",
      title: "Tally Connect Karo",
      body: "Ek baar apna Tally account connect karo. 5 minute ka kaam, ek baar ki setting."
    },
    {
      num: "02",
      icon: "💬",
      title: "Jo Poochna Ho, Poochho",
      body: 'Hindi mein, Hinglish mein — jo aata ho. "Aaj ka sale kya raha?" — bas itna kaafi hai.'
    },
    {
      num: "03",
      icon: "✅",
      title: "Jawab Aaya, Kaam Hua",
      body: "Report, number, list — sab kuch seedha aapke saamne. Koi aur kaam nahi."
    }
  ];

  return (
    <section className="bg-[#FAF7F5] py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <span className="text-sm font-bold text-[#E8251A] uppercase tracking-wider block mb-4">
            Shuru karna kitna aasaan hai
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A0A0A]">
            Teen steps, kaam shuru
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] border-t-2 border-dashed border-[#E8251A] opacity-30 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative z-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E8251A]/10 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="text-5xl font-extrabold text-[#E8251A]/10 absolute top-4 left-6 group-hover:text-[#E8251A]/20 transition-colors">
                {step.num}
              </div>
              <div className="w-20 h-20 bg-[#FAF7F5] rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner border border-gray-50 flex-shrink-0 z-10 relative">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A0A0A] mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs relative z-10">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
