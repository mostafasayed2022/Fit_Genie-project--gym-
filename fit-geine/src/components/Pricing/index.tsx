import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './pricing.css'
import PricingPlans from '../Home/PricingPlans';
import { Link } from "react-router-dom";
// images
import bg_grit_light from '../../images/bg_grit_light.jpg';
import services from "../../images/services.jpg";
import bg_gym from "../../images/bg_gym.jpg";


function Pricing() {

  const plans = [
    {
      name: 'Basic',
      price: 60,
      features: ['Access to all of fitgenie', ' access to hardware', 'not access to ai plans', "access to Services fitgenie"],
    },
    {
      name: 'Pro',
      price: 120,
      features: ['Access to all of fitgenie', 'access to hardware', 'access to Services fitgenie', 'access to ai plans but not all'],
    },
    {
      name: 'Premium',
      price: 250,
      features: ['Access to all of fitgenie', 'access to hardware', 'access to Services fitgenie', 'access to ai plans '],
    },
  ];

  return (
    <body>
      <Navbar loggedIn={false} setToken={function (token: string): void {
        throw new Error('Function not implemented.');
      }} setLoggedIn={function (loggedIn: boolean): void {
        throw new Error('Function not implemented.');
      }} />
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
          <Link to={"/payment"} >
            <PricingPlans key={index} {...plan} />
          </Link>
          ))}
        </div>
      </div>

      <div className="pricing-title pricing-title2" >
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
