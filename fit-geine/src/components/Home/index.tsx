import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import About from './About';
import CounterSection from './Counter';
import TestimonialsSlider from './TestimonialsSlider';
import PricingPlans from './PricingPlans';
import ControlledAccordions from './Accordions ';

// Constants & Data
import { SERVICES, STATS, PRICING_PLANS } from "../../data/constants";

// Images
import homeBg from "../../images/image2.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10 text-left">
          <div className="max-w-4xl" data-aos="fade-right">
            <h1 className="text-primary text-5xl sm:text-7xl md:text-9xl mb-2 tracking-tighter font-black italic leading-none uppercase">
              Fit <span className="text-white">Genie</span>
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-7xl text-white font-black mb-8 leading-[0.95] uppercase tracking-tighter">
              UNLOCK YOUR FULL <span className="text-primary italic font-['Outfit']">FITNESS</span> POTENTIAL
            </h2>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/register">
                <button className="btn-primary !px-10 !py-4 text-sm tracking-widest uppercase">Start Journey</button>
              </Link>
              <a href="#services">
                <button className="btn-outline !px-10 !py-4 text-sm tracking-widest uppercase">Explore Services</button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
           <div className="w-[1px] h-12 bg-primary" />
           <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">What we offer</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic mt-4">OUR SERVICES</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className="glass-card group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-square md:aspect-video">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-4 group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm mb-8 flex-grow leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <button className="text-primary font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all pb-1 border-b border-primary/20 hover:border-primary">
                    KNOW MORE <span className="text-lg">&rarr;</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CounterSection />

      {/* Testimonials */}
      <section className="py-24 bg-dark-lighter relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16 relative z-10">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Real results</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic mt-4">TESTIMONIALS</h2>
        </div>
        <TestimonialsSlider />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Fair Pricing</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic mt-4">PRICING PLANS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, index) => (
              <PricingPlans key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Frequently Asked Questions</h2>
          </div>
          <ControlledAccordions />
        </div>
      </section>
    </div>
  );
};

export default Home;
