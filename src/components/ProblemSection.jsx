import React from 'react';

const ProblemSection = () => {
  const cards = [
    {
      icon: "📞",
      title: "CA ko baar baar call",
      body: "Choti si report ke liye bhi CA ka wait karna padta hai. Time aur paisa dono jaata hai."
    },
    {
      icon: "⏳",
      title: "Report banana = din barbad",
      body: "Excel kholna, data nikalna, format karna — poora din sirf isi mein chala jaata hai."
    },
    {
      icon: "😰",
      title: "Staff Tally nahi samajhta",
      body: "Naya staff ho ya purana — Tally sikhana ek alag jhanjhat hai."
    },
    {
      icon: "📉",
      title: "Business kahan ja raha hai pata nahi",
      body: "Real time mein numbers dekhna mushkil hai — toh decision late hota hai."
    }
  ];

  return (
    <section className="bg-[#FAF7F5] py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-[#E8251A] uppercase tracking-wider">
            Ye toh aapke saath bhi hota hai na?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A0A0A] mt-4">
            Har din ki yahi pareshani hai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-[#E8251A22] rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_0_20px_#E8251A]"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-[#1A0A0A] mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
