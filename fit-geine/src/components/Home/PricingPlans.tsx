// PricingPlan.js
import React from 'react';
import './home.css';
import { FaCheck } from 'react-icons/fa';

interface PlansCardProps {
    name: string;
    price: number;
    features: string[];
  }

const PricingPlans = ({ name, price, features }:PlansCardProps) => {
  return (
    <div className="pricing-plan">
      <h2>{name}</h2>
      <h3>${price} / month</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}><FaCheck /> {feature}</li>
        ))}
      </ul>
      <button>Choose Plan</button>
    </div>
  );
};

export default PricingPlans;
