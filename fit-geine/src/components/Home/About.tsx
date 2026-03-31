import React from 'react';
import bgVideo from "../../images/bgVideo.mp4";
import services from "../../images/services.jpg";

const About: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-dark">
            <div 
              className="h-[150px] md:h-[300px] flex items-center justify-center bg-cover bg-center mb-16 lg:mb-24 relative overflow-hidden"
              style={{ backgroundImage: `url(${services})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h2 className="text-4xl md:text-7xl lg:text-9xl text-white relative z-10 tracking-tighter font-black uppercase italic" data-aos="zoom-in" aria-label="About Us Header">ABOUT US</h2>
            </div>
            
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div data-aos="fade-right">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Story</span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic mb-8 leading-[0.95] tracking-tighter">
                        WHO WE <span className="text-primary italic font-['Outfit']">ARE?</span>
                    </h3>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                        Fit Genie has the best personal training program. Our certified personal trainers 
                        are experts in their craft. We create the perfect programs to help you reach your goals. 
                        Everything begins with our energy and figuring out how to evolve that, then the journey begins.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 pt-6 border-t border-white/5">
                      <div className="border-l-4 border-primary pl-5">
                        <p className="text-4xl lg:text-5xl font-black text-white italic tracking-tighter">10+</p>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-1">Years Experience</p>
                      </div>
                      <div className="border-l-4 border-primary pl-5">
                        <p className="text-4xl lg:text-5xl font-black text-white italic tracking-tighter">50+</p>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-1">Expert Trainers</p>
                      </div>
                    </div>
                </div>
                
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group" data-aos="fade-left">
                    <video autoPlay loop muted className="w-full h-full object-cover aspect-video lg:aspect-square" aria-label="A cinemagraph showing a gym facility tour">
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
                        <div className="w-12 h-1 bg-primary mb-4" />
                        <p className="text-sm font-bold uppercase tracking-widest text-white/80">Real-time facility tour</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;