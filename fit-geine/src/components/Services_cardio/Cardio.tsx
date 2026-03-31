import React from "react";
import { SERVICE_DETAILS } from "../../data/constants";
import services from "../../images/services.jpg";

const Cardio: React.FC = () => {
    const data = SERVICE_DETAILS.cardio;

    return (
        <div className="pt-20 bg-dark text-white overflow-x-hidden">
            {/* Header */}
            <div 
                className='h-[200px] md:h-[300px] flex items-center justify-center bg-cover bg-fixed bg-center relative overflow-hidden' 
                style={{ backgroundImage: `url(${services})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="text-4xl sm:text-5xl md:text-8xl relative z-10 tracking-tighter uppercase font-black italic px-6 text-center leading-none" data-aos="zoom-in">
                    {data.title}
                </h1>
            </div>

            {/* Intro */}
            <div className="container mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div data-aos="fade-right">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Endurance & Heart</span>
                    <h2 className="text-3xl md:text-5xl mb-8 leading-[0.95] font-black uppercase tracking-tighter italic text-left">
                        WHAT IS <span className="text-primary italic font-['Outfit']">CARDIO?</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl italic text-left">
                        {data.intro}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary !px-10 !py-4 text-[10px] tracking-widest font-black uppercase">GET STARTED</button>
                        <button className="btn-outline !px-10 !py-4 text-[10px] tracking-widest font-black uppercase border-white/10 hover:border-primary">LEARN MORE</button>
                    </div>
                </div>
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/5 group" data-aos="fade-left">
                    <img src={data.gif} alt="cardio" className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                </div>
            </div>

            {/* Advantages */}
            <section className="py-20 lg:py-32 bg-dark-lighter">
                <div className="container mx-auto px-6 text-center mb-16 px-4">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Vitality Boost</span>
                    <h2 className="text-3xl md:text-6xl uppercase tracking-tighter font-black italic mt-4">Cardio <span className="text-primary">Advantages</span></h2>
                </div>
                
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {data.advantages.map((adv, index) => (
                        <div 
                            key={index} 
                            className="glass-card group hover:border-primary/20 transition-all duration-700 hover:-translate-y-2 border border-white/5 text-left"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-black text-2xl mb-8 group-hover:bg-primary group-hover:text-black transition-all shadow-xl italic tracking-tighter">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter italic leading-tight">{adv.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-medium line-clamp-4">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 lg:py-32 bg-dark relative overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-16 px-4">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] px-4">Stamina Showcase</span>
                    <h2 className="text-3xl md:text-6xl uppercase tracking-tighter font-black italic mt-4 text-center">Cardio <span className="text-primary">Gallery</span></h2>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    {data.gallery.map((img, index) => (
                        <div 
                            key={index} 
                            className="group relative aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                            data-aos="zoom-in"
                        >
                            <img src={img} alt="gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
            </section>
        </div>
    );
}

export default Cardio;
