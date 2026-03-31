import React from 'react';
import { Link } from 'react-router-dom';
import { NAVBAR_LINKS, SITE_NAME } from '../../data/constants';
import logo from "../../images/logo3.ico";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-12 lg:pt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/home" className="flex items-center gap-2 group transition-all duration-500">
              <img src={logo} alt="logo" className="w-10 h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110" />
              <p className="text-xl lg:text-2xl font-black font-['Outfit'] italic tracking-tighter uppercase leading-none">
                FIT <span className="text-primary italic">GENIE</span>
              </p>
            </Link>
            <p className="text-white/40 leading-relaxed max-w-sm text-sm font-medium italic">
              {SITE_NAME} offers the most advanced personal training programs. 
              Our certified experts create perfect routines to help you reach 
              your peak potential. Join the evolution.
            </p>
          </div>

          {/* Links Column */}
          <div className="lg:pl-16">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-primary font-['Outfit']">Quick Links</h3>
            <ul className="space-y-4">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/40 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-widest italic flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-primary font-['Outfit']">Connect With Us</h3>
            <div className="space-y-6 text-white/50">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Email</span>
                <p className="text-sm font-bold hover:text-white transition-colors cursor-pointer">hello@fitgenie.com</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Phone</span>
                <p className="text-sm font-bold hover:text-white transition-colors cursor-pointer">+1 (234) 567-890</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Location</span>
                <p className="text-sm font-bold hover:text-white transition-colors cursor-pointer">123 Fitness St, Muscle City</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved under the gravity.
          </p>
          <div className="flex gap-10 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all">Terms & Cond</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
