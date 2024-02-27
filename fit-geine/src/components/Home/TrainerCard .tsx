// TrainerCard.js
import React from 'react';
import './home.css';

interface TrainerCardProps {
    name: string;
    image: string;
    description: string;
  }

const TrainerCard = ({ name, image, description }:TrainerCardProps) => {
  return (
    <div className="trainer-card">
      <img src={image} alt={name} className="trainer-image" />
      <div className='part'>
      <h3>{name}</h3>
      <p>{description}</p>
      </div>

    </div>
  );
};

export default TrainerCard;
