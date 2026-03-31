import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { useNutrition } from "../../hooks/useNutrition";
import sports from "../../images/sports.jpg";

const MealData: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const { mealData, fetchMealData, isLoading, error } = useNutrition();

    return (
        <div className="pt-20 bg-dark min-h-screen text-white overflow-x-hidden">
            <div 
              className='h-[200px] md:h-[300px] flex items-center justify-center bg-cover bg-fixed bg-center relative overflow-hidden' 
              style={{ backgroundImage: `url(${sports})` }}
            >
                <div className="absolute inset-0 bg-black/70" />
                <h1 className="text-3xl sm:text-5xl md:text-7xl relative z-10 tracking-tighter uppercase font-black italic px-6 text-center leading-none" data-aos="zoom-in">Nutrition <span className="text-primary italic font-['Outfit']">Dashboard</span></h1>
            </div>

            <div className="container mx-auto px-6 py-16 lg:py-24 max-w-4xl">
                <div className="glass-card mb-12 text-center border border-white/5 shadow-2xl p-8 lg:p-12 bg-white/[0.02]" data-aos="fade-up">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Fuel your evolution</span>
                    <h2 className="text-xl md:text-3xl font-black mb-8 uppercase tracking-tighter italic leading-tight">Your Personalized Meal Plan</h2>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your registered email"
                            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none w-full md:w-auto md:min-w-[400px] transition-all text-white placeholder-white/10 text-sm italic"
                            required
                        />
                        <button 
                            onClick={() => fetchMealData(email)} 
                            disabled={isLoading}
                            className={`w-full md:w-auto py-4 px-12 rounded-xl font-black transition-all duration-500 whitespace-nowrap ${
                                isLoading ? "bg-white/10 text-white/50 cursor-not-allowed" : "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(203,255,1,0.3)] shadow-lg"
                            } uppercase tracking-widest text-[10px]`}
                        >
                            {isLoading ? "FETCHING..." : "VIEW PLAN NOW"}
                        </button>
                    </div>
                </div>

                {isLoading && (
                    <div className="flex justify-center py-20">
                        <Loader />
                    </div>
                )}
                
                {error && (
                    <div className="p-8 lg:p-12 rounded-2xl bg-red-500/5 border border-red-500/20 text-red-400 text-center mb-12 italic shadow-2xl font-bold uppercase tracking-widest text-[10px] leading-relaxed" data-aos="shake">
                        <p className="opacity-70">{error}</p>
                    </div>
                )}

                {mealData && (
                    <div className="space-y-12 pb-24" data-aos="fade-up">
                        {/* Summary Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
                            <div className="glass-card text-center border border-white/5 !p-8 lg:!p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-black mb-4">Total Calories</p>
                                <p className="text-4xl lg:text-5xl font-black text-primary italic leading-none">{mealData.total.calories}</p>
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mb-8 -mr-8 blur-2xl" />
                            </div>
                            <div className="glass-card text-center border border-white/5 !p-8 lg:!p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-black mb-4">Total Protein</p>
                                <p className="text-4xl lg:text-5xl font-black text-blue-400 italic leading-none">{mealData.total.protein}<span className="text-sm">g</span></p>
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-400/5 rounded-full -mb-8 -mr-8 blur-2xl" />
                            </div>
                            <div className="glass-card text-center border border-white/5 !p-8 lg:!p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-black mb-4">Total Carbs</p>
                                <p className="text-4xl lg:text-5xl font-black text-orange-400 italic leading-none">{mealData.total.carbs}<span className="text-sm">g</span></p>
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-400/5 rounded-full -mb-8 -mr-8 blur-2xl" />
                            </div>
                        </div>

                        {/* Detailed Categories */}
                        <div className="space-y-10">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/5" />
                                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] italic">Session Details</span>
                                <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/5" />
                            </div>

                            {Object.entries(mealData.categorized_meals).map(([category, meals]) => (
                                <div key={category} className="glass-card !p-0 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white/[0.04] group shadow-2xl">
                                    <div className="flex items-center justify-between p-8 bg-white/[0.05] border-b border-white/5">
                                        <h3 className="text-2xl font-black uppercase tracking-tighter italic text-primary">
                                            {category}
                                        </h3>
                                        <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-lg text-[9px] font-black uppercase tracking-[0.2em] border border-primary/10">
                                            {meals.length} {meals.length === 1 ? 'Entry' : 'Entries'}
                                        </div>
                                    </div>
                                    <div className="p-8 lg:p-10 space-y-4">
                                        {meals.map((meal, index) => (
                                            <div key={index} className="flex flex-col lg:flex-row lg:items-center justify-between p-6 lg:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.08] transition-all border border-white/5 group/item relative overflow-hidden">
                                                <div className="mb-6 lg:mb-0 relative z-10">
                                                    <p className="font-black text-xl group-hover/item:text-primary transition-colors italic tracking-tight">{meal.name}</p>
                                                    <p className="text-white/20 text-[10px] font-bold uppercase mt-2 tracking-widest">Premium Choice Selection</p>
                                                </div>
                                                <div className="grid grid-cols-3 gap-8 lg:gap-16 text-center relative z-10">
                                                    <div className="group-hover/item:scale-110 transition-transform">
                                                        <p className="text-white/30 text-[8px] uppercase font-black tracking-widest mb-2">Calories</p>
                                                        <p className="font-black text-white text-lg leading-none italic">{meal.calories}</p>
                                                    </div>
                                                    <div className="group-hover/item:scale-110 transition-transform">
                                                        <p className="text-white/30 text-[8px] uppercase font-black tracking-widest mb-2">Protein</p>
                                                        <p className="font-black text-blue-400 text-lg leading-none italic">{meal.protein}g</p>
                                                    </div>
                                                    <div className="group-hover/item:scale-110 transition-transform">
                                                        <p className="text-white/30 text-[8px] uppercase font-black tracking-widest mb-2">Carbs</p>
                                                        <p className="font-black text-orange-400 text-lg leading-none italic">{meal.carbs}g</p>
                                                    </div>
                                                </div>
                                                <div className="absolute top-0 right-0 w-24 h-full bg-primary/5 translate-x-24 group-hover/item:translate-x-0 transition-transform skew-x-[-20deg]" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MealData;