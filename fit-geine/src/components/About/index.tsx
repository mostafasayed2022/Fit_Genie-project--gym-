import React from "react";
import TrainerCard from "../Home/TrainerCard ";
import ImagesClasses from "./ImagesClasses";
import { TRAINERS } from "../../data/constants";
import bgVideo from "../../images/bgVideo.mp4";
import services from "../../images/services.jpg";
import sports from "../../images/sports.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="h-[400px] flex items-center justify-center bg-cover bg-fixed bg-center relative" 
        style={{ backgroundImage: `url(${sports})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="text-5xl md:text-8xl text-white relative z-10 tracking-tighter" data-aos="zoom-in">
          ABOUT <span className="text-primary italic font-['Outfit']">US</span>
        </h1>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
            WHO WE <span className="text-primary italic font-['Outfit']">ARE?</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Fit Genie has the best personal training program. Our certified personal trainers 
            are experts in their craft. We create the perfect programs to help you reach your goals. 
            Everything begins with our energy and figuring out how to evolve that, then the journey begins.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="glass-card">
              <h4 className="text-primary font-bold text-xl mb-1 italic">Our Mission</h4>
              <p className="text-white/50 text-sm">To empower every individual to reach their peak physical potential through science-backed training.</p>
            </div>
            <div className="glass-card">
              <h4 className="text-primary font-bold text-xl mb-1 italic">Our Vision</h4>
              <p className="text-white/50 text-sm">To be the global leader in personalized fitness and holistic health management.</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/5" data-aos="fade-left">
          <video autoPlay loop muted className="w-full h-full object-cover aspect-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
      </div>

      {/* Trainers Section */}
      <section className="py-24 bg-dark-lighter">
        <div 
          className="h-[250px] flex items-center justify-center bg-cover bg-center mb-16 relative" 
          style={{ backgroundImage: `url(${services})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <h2 className="text-4xl md:text-6xl text-white relative z-10 uppercase tracking-tighter italic">Our Expert Trainers</h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-6xl uppercase tracking-tighter">Our Premium Classes</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <ImagesClasses />
      </section>
    </div>
  );
}

export default AboutPage;
