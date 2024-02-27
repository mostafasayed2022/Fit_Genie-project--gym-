import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './pricing.css'
import PricingPlans from '../Home/PricingPlans';





// images
import bg_grit_light from '../../images/bg_grit_light.jpg';
import services from "../../images/services.jpg";
import bg_gym from "../../images/bg_gym.jpg";


function Pricing() {

  const plans = [
    {
      name: 'Basic',
      price: 60,
      features: ['Feature 1', 'Feature 2', 'Feature 3', "Feature 4"],
    },
    {
      name: 'Pro',
      price: 120,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'Premium',
      price: 250,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ];

  return (
    <body>
      <Navbar />
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>Pricing</h1>
      </div>
      <div className="bg-image">
        <div className="pricing-title">
          <h3>MEMBERSHIP <span className="planss">PLANS</span> </h3>
          <p>We keep it simple. No catch. Just outrageously good value.</p>
        </div>
        <div className='plan'>
          {plans.map((plan, index) => (
            <PricingPlans key={index} {...plan} />
          ))}
        </div>
      </div>

      <div className="pricing-title pricing-title2" style={{ backgroundImage: `url(${bg_gym})` }} >
        <h3 className="pricing-heading" id="heading"> <span className="planss"> PAYMENT</span> OPTIONS</h3>
        <p>At Goldstone we truly embrace technology.
          You now have two ways to Join our club: Join &
          Pay Online on this website or Join & Pay at one
          of our Automated Kiosks at Reception. Our 12
          Month upfront price is STILL the best value
          option on the market. Please note we no longer
          accept cash payments so you will need a valid bank
          visa debit /credit card. Our online system offers you
          incredible flexibility – no more strict time contracts!
          So, if all you need is 4 months membership for
          example, then opt for pay monthly and cancel it
          before the 5th month starts. The self service online
          account system allows you to log in and control your
          account, 24/7.</p>
      </div>
      <Footer />
    </body>
  );
}

export default Pricing;
