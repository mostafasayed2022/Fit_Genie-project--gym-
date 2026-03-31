import React from 'react';
import { Link } from 'react-router-dom';

interface TrainerCardProps {
    name: string;
    image: string;
    specialty?: string;
    description?: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ name, image, specialty, description }) => {
  return (
    <Link to="/profile" className="group block h-full">
      <div className="glass-card !p-0 overflow-hidden relative aspect-[3/4] rounded-2xl border border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-2xl h-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Expert Trainer</p>
          <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-1">{name}</h3>
          <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
            {specialty || description}
          </p>
        </div>
        
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <span className="text-black text-xl font-bold">+</span>
        </div>
      </div>
    </Link>
  );
};

export default TrainerCard;
