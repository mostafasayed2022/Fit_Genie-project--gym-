import React from "react";
import { useContactForm } from "../../hooks/useContactForm";
import sports from "../../images/sports.jpg";

const ContactFormSection: React.FC = () => {
    const { formData, handleChange, handleSubmit, loading, submitted } = useContactForm();

    return (
        <section className="bg-dark text-white overflow-x-hidden">
            <div 
                className='h-[200px] md:h-[300px] flex items-center justify-center bg-cover bg-fixed bg-center relative overflow-hidden' 
                style={{ backgroundImage: `url(${sports})` }}
            >
                <div className="absolute inset-0 bg-black/70" />
                <h1 className="text-3xl sm:text-5xl md:text-8xl relative z-10 tracking-tighter uppercase font-black italic px-6 text-center leading-none" data-aos="zoom-in">Contact <span className="text-primary italic font-['Outfit']">Us</span></h1>
            </div>

            <div className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Info */}
                    <div data-aos="fade-right">
                        <div className="mb-12">
                            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Get In Touch</span>
                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-8 leading-[0.95] uppercase tracking-tighter italic">Convey Your <br className="hidden md:block"/> Ideas to Us</h3>
                            <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-md italic font-medium">
                                Contact us for questions, technical assistance, or collaboration
                                opportunities via the contact information provided.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                                    📞
                                </div>
                                <div>
                                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-black mb-1">Phone Number</p>
                                    <p className="text-lg md:text-xl font-black italic tracking-tight">+20 111 145 3894</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-black mb-1">Email Address</p>
                                    <p className="text-lg md:text-xl font-black italic tracking-tight">hello@fitgenie.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                                    📍
                                </div>
                                <div>
                                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-black mb-1">Our Location</p>
                                    <p className="text-lg md:text-xl font-black italic tracking-tight">123 Fitness St, Muscle City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass-card !p-8 md:!p-16 border border-white/5 shadow-2xl relative overflow-hidden bg-white/[0.02]" data-aos="fade-left">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary text-5xl shadow-inner shadow-primary/20">✓</div>
                                <h3 className="text-3xl font-black italic uppercase tracking-tighter">Message Sent!</h3>
                                <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">We'll get back to you within 24 hours.</p>
                                <button onClick={() => window.location.reload()} className="btn-primary !px-12 !py-4 text-[10px] uppercase font-black tracking-widest mt-6">Reload</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 text-left">
                                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-1">Full Name</label>
                                        <input 
                                            type="text" id="name" required value={formData.name} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all placeholder-white/5 italic text-sm" 
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-1">Email Address</label>
                                        <input 
                                            type="email" id="email" required value={formData.email} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all placeholder-white/5 italic text-sm" 
                                            placeholder="john@example.com" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-1">Phone Number</label>
                                    <input 
                                        type="tel" id="phone" value={formData.phone} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all placeholder-white/5 italic text-sm" 
                                        placeholder="+20 123 456 789" 
                                    />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-1">Your Message</label>
                                    <textarea 
                                        id="message" rows={4} required value={formData.message} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all placeholder-white/5 italic text-sm resize-none" 
                                        placeholder="How can we help you reach your peak?"
                                    />
                                </div>
                                <button 
                                    type="submit" disabled={loading}
                                    className="w-full btn-primary !rounded-xl py-5 text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 group/btn shadow-xl"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                    ) : (
                                        <>SEND MESSAGE NOW <span className="text-xl group-hover/btn:translate-x-2 transition-transform">&rarr;</span></>
                                    )}
                                </button>
                            </form>
                        )}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactFormSection;
