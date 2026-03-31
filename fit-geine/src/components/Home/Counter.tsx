import React from "react";
import CountUp from "react-countup";
import { STATS } from "../../data/constants";
import counterBg from "../../images/counter1.jpg";

const CounterSection: React.FC = () => {
  return (
    <section 
      className="relative py-20 lg:py-32 bg-cover bg-fixed bg-center text-white overflow-hidden" 
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="text-3xl sm:text-4xl md:text-6xl font-black text-primary mb-2 italic tracking-tighter">
                <CountUp end={stat.value} duration={4} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] group-hover:text-white transition-colors">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default CounterSection;
