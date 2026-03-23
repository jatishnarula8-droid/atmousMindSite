import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { ArrowRight } from 'lucide-react';

const ChatBox = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const boxRef = useRef(null);
  
  const messages = [
    { from: "user", text: "February mein kitna profit hua?" },
    { from: "ai", text: "February 2024 mein aapka net profit ₹1,24,500 raha. March se 18% zyada! 📈" },
    { from: "user", text: "Sabse zyada bika product kaun sa tha?" },
    { from: "ai", text: "Is mahine #1 product raha: Parachute Hair Oil — 340 units bike." },
  ];

  useEffect(() => {
    let timeouts = [];
    messages.forEach((m, idx) => {
      const t = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, m]);
      }, idx * 1800);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <div 
      style={{
        background: '#2a0f0f',
        border: '1px solid #E8251A44',
        borderRadius: '16px',
        padding: '20px',
        maxWidth: '380px',
        margin: '40px auto 0',
        fontFamily: "'Noto Sans', sans-serif",
        boxShadow: '0 0 40px #E8251A22'
      }}
    >
      <div style={{ color: '#aaa', fontSize: '12px', marginBottom: '12px', textAlign: 'left' }}>
        💬 Atmous Minds — Live Demo
      </div>
      <div 
        id="chat-box" 
        ref={boxRef} 
        style={{ maxHeight: '250px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}
      >
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            style={{
              margin: '8px 0',
              padding: '10px 14px',
              borderRadius: '12px',
              fontSize: '14px',
              maxWidth: '85%',
              animation: 'fadeUp 0.4s ease',
              ...(msg.from === 'user'
                ? { background: '#E8251A22', color: '#F0EBE8', marginLeft: 'auto', textAlign: 'right' }
                : { background: '#ffffff11', color: '#F0EBE8', textAlign: 'left' })
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Implementing the requested typewriter effect for the hero headline
    const typed = new Typed(typedRef.current, {
      strings: [
        'Tally se poochho, <br/> <span class="text-primary">jawab milega</span>'
      ],
      typeSpeed: 50,
      showCursor: false, // Hiding cursor for a cleaner look after typing
      onComplete: (self) => {
        // Keeps the text visible and stops typing
        self.cursor.remove();
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-light">
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full border border-gray-200 bg-white/60 shadow-sm backdrop-blur-md mb-8 md:mb-10"
          >
            <span>🚀</span>
            <span className="text-sm md:text-base font-body font-medium text-text-dark px-1">
              Ab Tally aur aap ke beech koi barrier nahi
            </span>
          </div>

          {/* Headline */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-bg-dark mb-6 leading-[1.15] md:leading-[1.1] min-h-[130px] sm:min-h-[150px] md:min-h-[170px]"
          >
            <span ref={typedRef}></span>
          </h1>

          {/* Subheadline (H3 style) */}
          <h3 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-lg md:text-xl lg:text-2xl font-body font-normal text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Report chahiye? Kharcha check karna hai? Udhaar dekhna hai?<br className="hidden md:block" />
            <span className="mt-2 inline-block">Bas type karo — aapki bhasha mein.</span>
          </h3>

          {/* CTA Group */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400" 
            className="flex flex-col items-center w-full"
          >
            <a 
              href="#book-demo"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body font-bold text-lg md:text-xl px-8 py-4 lg:py-5 min-h-[56px] rounded-xl hover:bg-red-700 transition-all hover:scale-[1.03] active:scale-[0.97] animate-pulse-glow w-full sm:w-auto shadow-lg shadow-primary/30"
            >
              Free Demo Book Karo <ArrowRight size={22} className="ml-1" />
            </a>
            
            {/* Tiny muted text Below Button */}
            <p className="mt-4 text-xs md:text-sm font-body text-gray-500">
              Sirf 20 minute. Koi commitment nahi.
            </p>
          </div>

          <div className="w-full relative z-20 mt-8 mb-4">
            <ChatBox />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
