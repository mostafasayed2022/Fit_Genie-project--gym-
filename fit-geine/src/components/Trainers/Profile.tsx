import React, { useState } from 'react';
import { TRAINERS } from '../../data/constants';
import sports from "../../images/sports.jpg"

const TrainerProfilePage = () => {
  // Using first trainer as default for the profile page view
  const defaultTrainer = {
    name: TRAINERS[0].name,
    image: TRAINERS[0].image,
    bio: "Certified fitness trainer with over 10 years of experience in transformation and conditioning.",
    features: [TRAINERS[0].specialty, "Nutrition Advice", "Weight Training", "Competition Prep"]
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(defaultTrainer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Updated trainer data:', formData);
  };

  return (
    <div className="pt-20 bg-dark min-h-screen text-white">
      <div 
        className='h-[300px] flex items-center justify-center bg-cover bg-fixed bg-center relative' 
        style={{ backgroundImage: `url(${sports})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <h1 className="text-4xl md:text-7xl relative z-10 tracking-tighter uppercase italic" data-aos="zoom-in">
          Trainer <span className="text-primary italic font-['Outfit']">Profile</span>
        </h1>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="glass-card border border-white/5 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold uppercase tracking-tighter italic border-l-4 border-primary pl-4 mb-8">Edit Expert Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:border-primary outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Specialties (comma separated)</label>
                    <input
                      type="text"
                      name="features"
                      value={formData.features.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          features: e.target.value.split(',').map(s => s.trim()),
                        })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:border-primary outline-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Professional Bio</label>
                  <textarea
                    name="bio"
                    rows={5}
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:border-primary outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button type="submit" className="btn-primary px-8">Save Changes</button>
                <button type="button" onClick={() => setIsEditing(false)} className="btn-outline px-8">Cancel</button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col lg:flex-row" data-aos="fade-up">
              {/* Profile Image */}
              <div className="lg:w-1/3 relative h-[400px] lg:h-auto overflow-hidden">
                <img src={formData.image} alt={formData.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark lg:hidden" />
              </div>
              
              {/* Profile Content */}
              <div className="lg:w-2/3 p-8 md:p-16 relative">
                <div className="mb-8">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Master Instructor</span>
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-6">
                        {formData.name}
                    </h2>
                    <p className="text-white/50 text-lg leading-relaxed italic max-w-xl">
                        "{formData.bio}"
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/20">Field Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                        {formData.features.map((feature, index) => (
                          <span 
                            key={index} 
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:border-primary hover:text-primary"
                          >
                            {feature}
                          </span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5 flex gap-4">
                    <button className="btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
                    <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                        📧
                    </button>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerProfilePage;
