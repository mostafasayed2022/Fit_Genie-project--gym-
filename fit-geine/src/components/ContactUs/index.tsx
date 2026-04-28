import React from "react";
import ControlledAccordions from '../Home/Accordions ';
import ContactFormSection from "./Contactt";
import sports from "../../images/sports.jpg"

const ContactUs: React.FC = () => {
  return (
    <div className="pt-20">
      <ContactFormSection />
      
      <div 
        className='h-[200px] flex items-center justify-center bg-cover bg-fixed bg-center relative' 
        style={{ backgroundImage: `url(${sports})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <h2 className="text-4xl md:text-6xl text-white relative z-10 uppercase tracking-tighter italic">Common Questions</h2>
      </div>
      {/*  */}
      <div className="bg-dark py-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <ControlledAccordions />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
