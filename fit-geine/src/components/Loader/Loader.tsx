import React from 'react';
import logo from "../../images/logo3.ico";

const Loader: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-[300px] space-y-6">
        <div className="relative w-20 h-20">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border-4 border-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(203,255,1,0.2)]"></div>
            
            {/* Logo in center */}
            <div className="absolute inset-4 flex items-center justify-center">
                <img src={logo} alt="Fit Genie Loader" className="w-full h-full object-contain animate-pulse" />
            </div>
        </div>
        <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] animate-pulse">Evolving...</p>
    </div>
);

export default Loader;
