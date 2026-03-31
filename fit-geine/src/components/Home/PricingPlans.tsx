import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface PlansCardProps {
    name: string;
    price: number;
    features: string[];
}

const PricingPlans: React.FC<PlansCardProps> = ({ name, price, features }) => {
  const isPremium = name.toLowerCase() === 'premium';

  return (
    <div className={`glass-card flex flex-col items-center text-center group relative overflow-hidden h-full border border-white/5 shadow-2xl p-8 lg:p-10 ${
      isPremium ? 'border-primary/40 bg-white/[0.08] lg:scale-[1.03] z-10' : ''
    }`} data-aos="fade-up">
      {isPremium && (
        <div className="absolute top-0 right-0 bg-primary text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-tighter rounded-bl-xl shadow-lg">
          Best Value
        </div>
      )}
      
      <div className="mb-8 w-full">
          <h3 className="text-xl lg:text-2xl font-black mb-2 uppercase tracking-[0.2em] italic text-white/90">{name}</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl lg:text-6xl font-black text-primary italic tracking-tight">${price}</span>
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">/month</span>
          </div>
      </div>
      
      <ul className="w-full space-y-5 mb-12 text-left flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4 text-sm text-white/50 group-hover:text-white/80 transition-colors">
            <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <FaCheck className="text-primary text-[8px]" />
            </div>
            <span className="leading-tight font-medium tracking-tight italic">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-4 lg:py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-500 ${
        isPremium ? 'bg-primary text-black hover:shadow-[0_0_40px_rgba(203,255,1,0.3)] hover:scale-[1.02]' : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 hover:text-primary'
      }`}>
        CHOOSE PLAN NOW
      </button>

      {isPremium && (
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      )}
    </div>
  );
};

export default PricingPlans;
