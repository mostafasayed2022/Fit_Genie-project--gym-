import React, { useState } from "react";
import contactBG from "../../images/contactBg.jpg";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">
                        GET IN <span className="text-primary italic">TOUCH</span>
                    </h2>
                    <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">We are here to support your journey</p>
                </div>

                <div 
                    className="glass-card !p-0 border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    data-aos="zoom-in"
                >
                    {/* Visual side */}
                    <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                        <img src={contactBG} alt="contact" className="w-full h-full object-cover grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 duration-1000" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        <div className="absolute inset-x-0 bottom-8 px-8 text-center hidden md:block">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 italic">Fit Genie Support</p>
                        </div>
                    </div>

                    {/* Form side */}
                    <form onSubmit={handleSubmit} className="md:w-2/3 p-8 md:p-12 space-y-6 bg-white/[0.02]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1 text-left">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Your Name</label>
                                <input
                                    type="text" name="name" value={formData.name} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-1 text-left">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1 text-left">
                            <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Subject</label>
                            <input
                                type="text" name="subject" value={formData.subject} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 text-sm"
                                placeholder="Membership Inquiry"
                            />
                        </div>
                        <div className="space-y-1 text-left">
                            <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Your Message</label>
                            <textarea
                                name="message" value={formData.message} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 h-32 resize-none text-sm"
                                placeholder="Tell us how we can help..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary !rounded-xl text-[11px] font-black uppercase tracking-[0.4em] py-4">
                            SEND MESSAGE NOW
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
