import React from "react";
import { CLASSES } from "../../data/constants";

const ImagesClasses: React.FC = () => {
    return (
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLASSES.map((cls, index) => (
                <div 
                  key={index} 
                  className="group relative h-96 rounded-2xl overflow-hidden shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                    <img 
                      src={cls.image} 
                      alt={cls.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">
                        {cls.name}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {cls.description}
                      </p>
                      <div className="w-12 h-1 bg-primary mt-4 group-hover:w-full transition-all duration-500" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImagesClasses;