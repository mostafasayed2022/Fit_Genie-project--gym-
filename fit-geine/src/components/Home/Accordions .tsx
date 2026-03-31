import React, { useState } from 'react';
import { FAQS } from '../../data/constants';
import { FaChevronDown } from 'react-icons/fa';

const ControlledAccordions: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="space-y-4">
                {FAQS.slice(0, 3).map((faq, index) => (
                    <div 
                        key={index} 
                        className="glass-card !p-0 overflow-hidden border border-white/5 hover:border-primary/20 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <button 
                            onClick={() => toggleAccordion(index)}
                            className="w-full p-6 text-left flex justify-between items-center group transition-all"
                        >
                            <span className={`font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-white/80 group-hover:text-white'}`}>
                                {faq.question}
                            </span>
                            <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-white/20'}`}>
                                <FaChevronDown />
                            </div>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-6 pt-0 text-white/50 text-sm leading-relaxed border-t border-white/5">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
                {FAQS.slice(3).map((faq, index) => {
                    const actualIndex = index + 3;
                    return (
                        <div 
                            key={actualIndex} 
                            className="glass-card !p-0 overflow-hidden border border-white/5 hover:border-primary/20 transition-colors"
                            data-aos="fade-up"
                            data-aos-delay={actualIndex * 100}
                        >
                            <button 
                                onClick={() => toggleAccordion(actualIndex)}
                                className="w-full p-6 text-left flex justify-between items-center group transition-all"
                            >
                                <span className={`font-bold transition-colors ${openIndex === actualIndex ? 'text-primary' : 'text-white/80 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === actualIndex ? 'rotate-180 text-primary' : 'text-white/20'}`}>
                                    <FaChevronDown />
                                </div>
                            </button>
                            <div 
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openIndex === actualIndex ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 pt-0 text-white/50 text-sm leading-relaxed border-t border-white/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ControlledAccordions;
