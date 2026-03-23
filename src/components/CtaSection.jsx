import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-[#E8251A] py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          Abhi decision lo
        </h1>
        
        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          20 minute ki call mein dekhein — kaise aapka business data aapki bhasha mein bolega.
        </p>
        
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block bg-white/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2">
            <span>⏳</span> Is hafte ke sirf 8 demo slots bache hain
          </span>
        </div>
        
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col items-center justify-center"
        >
          <a href="#book-demo" className="bg-white text-[#E8251A] font-bold text-xl px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10 animate-ctaPulse inline-flex">
            Free Demo Book Karo <ArrowRight size={24} />
          </a>
          
          <p className="text-white/70 text-sm mt-6 font-medium">
            Koi cost nahi. Koi commitment nahi. Sirf 20 minute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
