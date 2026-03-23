import React from 'react';
import CountUp from 'react-countup';

const TestimonialStatsSection = () => {
  const testimonials = [
    {
      quote: "Pehle CA ko call karta tha har cheez ke liye. Ab khud dekh leta hoon — 2 minute mein.",
      name: "Rajesh Agarwal",
      title: "Kirana Store Owner, Jaipur"
    },
    {
      quote: "Mujhe lagta tha yeh sirf bade logon ke liye hai. Par iska use karna WhatsApp se bhi aasaan hai.",
      name: "Suresh Verma",
      title: "Hardware Shop, Indore"
    },
    {
      quote: "Month end report jo 3 ghante mein banti thi, ab 3 minute mein aa jaati hai.",
      name: "Priya Mehta",
      title: "Textile Business, Surat"
    }
  ];

  const stats = [
    { num: 500, suffix: "+", label: "Business Owners Waitlist Mein" },
    { num: 3, suffix: " Min", label: "Mein Koi Bhi Jawab" },
    { valText: "Zero", label: "Training Ki Zaroorat" }
  ];

  return (
    <section className="bg-[#1A0A0A] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-16">
          Inhoone try kiya, ab aap karo
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((testi, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-[#2a0f0f] border border-[#E8251A33] rounded-2xl p-8 flex flex-col justify-between group hover:border-[#E8251A] transition-colors duration-300"
            >
              <div>
                <div className="text-[#E8251A] flex flex-col leading-none font-serif text-6xl mb-4 h-8 overflow-hidden inline-block opacity-80 group-hover:opacity-100 transition-opacity">"</div>
                <p className="text-gray-200 text-lg leading-relaxed italic mb-8 mt-4 relative z-10">
                  {testi.quote}
                </p>
              </div>
              <div className="mt-auto">
                <div className="font-bold text-white text-lg">{testi.name}</div>
                <div className="text-[#E8251A] text-sm mt-1 font-medium">{testi.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-16">
          {stats.map((stat, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="text-5xl md:text-6xl font-extrabold text-[#E8251A] mb-4 font-heading tracking-tight">
                {stat.valText ? (
                  <span>{stat.valText}</span>
                ) : (
                  <CountUp enableScrollSpy scrollSpyOnce end={stat.num} duration={2.5} separator="," suffix={stat.suffix} />
                )}
              </div>
              <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialStatsSection;
