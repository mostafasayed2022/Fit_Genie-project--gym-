import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-dark to-dark">
      <div className="space-y-6" data-aos="zoom-in">
        <h1 className="text-9xl font-black italic tracking-tighter text-white/5 select-none leading-none">404</h1>
        <div className="relative -mt-12 md:-mt-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            LOST IN <span className="text-primary italic font-['Outfit']">PROGRESS?</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] font-bold text-[10px] mb-10 max-w-sm mx-auto">
            The page you are looking for doesn't exist or has been moved to another dimension.
          </p>
          <Link to="/home" className="btn-primary inline-block">
            BACK TO HOMEPAGE
          </Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}

export default NotFound;
