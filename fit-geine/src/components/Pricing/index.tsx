import React from "react";
import PricingPlans from '../Home/PricingPlans';
import { PRICING_PLANS } from "../../data/constants";
import { Link } from "react-router-dom";
import sports from "../../images/sports.jpg";

const PricingPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div 
        className='h-[400px] flex items-center justify-center bg-cover bg-fixed bg-center relative' 
        style={{ backgroundImage: `url(${sports})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="text-5xl md:text-8xl text-white relative z-10 tracking-tighter uppercase italic" data-aos="zoom-in">
          MEMBERSHIP <span className="text-primary italic font-['Outfit']">PLANS</span>
        </h1>
      </div>

      <div className="bg-dark py-24">
        <div className="container mx-auto px-6 text-center mb-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold uppercase tracking-widest text-primary mb-4 italic">Choose Your Tier</h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We keep it simple. No catch. Just outrageously good value for your fitness journey.
          </p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <Link key={index} to="/payment" className="h-full block transition-transform hover:-translate-y-2">
              <PricingPlans {...plan} />
            </Link>
          ))}
        </div>

        <div className="container mx-auto px-6 mt-32 max-w-4xl" data-aos="fade-up">
          <div className="glass-card !p-12 border border-white/5 relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-8 uppercase tracking-tighter italic">
              <span className="text-primary italic font-['Outfit'] mr-3">PAYMENT</span> OPTIONS
            </h3>
            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                At Fit Genie, we truly embrace technology. You now have two ways to join our club: 
                <strong className="text-white"> Join & Pay Online</strong> on this website or <strong className="text-white">Join & Pay</strong> at one of our 
                Automated Kiosks at Reception.
              </p>
              <p>
                Our 12-month upfront price is STILL the best value option on the market. 
                Please note we no longer accept cash payments, so you will need a valid bank 
                debit or credit card.
              </p>
              <p>
                Our online system offers you incredible flexibility – no more strict time contracts! 
                If you only need a few months of membership, opt for pay-monthly and cancel whenever you're ready. 
                The self-service online account system allows you to log in and control your account 24/7.
              </p>
            </div>
            {/* Visual element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
