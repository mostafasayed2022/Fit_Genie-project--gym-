import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { useWorkoutPlan } from "../../hooks/useWorkoutPlan";
import sports from "../../images/sports.jpg";

const WorkoutPlan: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const { workoutPlans, fetchWorkoutPlans, isLoading, error } = useWorkoutPlan();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchWorkoutPlans(email);
    };

    return (
        <div className="pt-20 bg-dark min-h-screen text-white overflow-x-hidden">
            <div 
              className='h-[200px] md:h-[300px] flex items-center justify-center bg-cover bg-fixed bg-center relative overflow-hidden' 
              style={{ backgroundImage: `url(${sports})` }}
            >
                <div className="absolute inset-0 bg-black/70" />
                <h1 className="text-3xl sm:text-5xl md:text-7xl relative z-10 tracking-tighter uppercase font-black italic px-6 text-center leading-none" data-aos="zoom-in">Workout <span className="text-primary italic font-['Outfit']">Plans</span></h1>
            </div>

            <div className="container mx-auto px-6 py-16 lg:py-24 max-w-4xl">
                <div className="glass-card mb-12 text-center border border-white/5 shadow-2xl p-8 lg:p-12" data-aos="fade-up">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Your personalized routine</span>
                    <h2 className="text-xl md:text-3xl font-black mb-8 uppercase tracking-tighter italic">Discover Your Transformation</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your registered email"
                            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none w-full md:w-auto md:min-w-[400px] transition-all text-white placeholder-white/10 text-sm italic"
                            required
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className={`w-full md:w-auto py-4 px-10 rounded-xl font-black transition-all duration-500 whitespace-nowrap ${
                                isLoading ? "bg-white/10 text-white/50 cursor-not-allowed" : "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(203,255,1,0.3)] shadow-lg"
                            } uppercase tracking-widest text-[10px]`}
                        >
                            {isLoading ? "FETCHING..." : "GET PLAN NOW"}
                        </button>
                    </form>
                </div>

                {isLoading && (
                    <div className="flex justify-center py-20">
                        <Loader />
                    </div>
                )}
                
                {error && (
                    <div className="p-8 lg:p-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center mb-12 italic shadow-2xl font-bold uppercase tracking-widest text-[10px] leading-relaxed" data-aos="shake">
                        <p className="opacity-70">{error}</p>
                    </div>
                )}

                {workoutPlans && (
                    <div className="glass-card !p-0 border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(203,255,1,0.05)] bg-white/[0.02]" data-aos="fade-up">
                        <div className="p-6 bg-white/[0.05] flex items-center justify-between border-b border-white/10">
                            <h3 className="font-black text-primary uppercase tracking-[0.3em] text-[10px] italic">Your Training Manifest</h3>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                                <div className="w-2 h-2 rounded-full bg-green-500/30" />
                            </div>
                        </div>
                        <div className="p-6 md:p-12">
                            <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm leading-relaxed text-white/60 bg-black/40 p-8 md:p-12 rounded-2xl border border-white/5 shadow-inner select-all italic">
                                {workoutPlans}
                            </pre>
                            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Copy and paste to your notes app</p>
                                <button className="text-primary text-[10px] font-black uppercase tracking-[0.3em] border-b border-primary/20 hover:border-primary transition-all pb-1 active:scale-95">
                                    Copy to clipboard 📋
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkoutPlan;
