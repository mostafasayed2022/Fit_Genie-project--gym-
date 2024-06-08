import React, { useState } from 'react';
import './TrainerProfile.css';
import trainer4 from "../../images/trainer4.jpg"
import Navbar from '../Navbar';
import Footer from '../Footer';

// Trainer data (embedded for simplicity)
const trainerData = {
  name: "John Doe",
  image: trainer4,
  bio: "Certified fitness trainer with 10 years of experience.",
  features: ["Weight Training", "Cardio", "Nutrition Advice"]
};

const TrainerProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(trainerData);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would normally handle form submission, e.g., sending the data to an API
    console.log('Updated trainer data:', formData);
  };

  return (
  <>
        <Navbar loggedIn={false} setToken={function (token: string): void {
        throw new Error('Function not implemented.');
      }} setLoggedIn={function (loggedIn: boolean): void {
        throw new Error('Function not implemented.');
      }} />
    <div className="trainer-profile-page">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="features">Features:</label>
            <input
              type="text"
              id="features"
              name="features"
              value={formData.features.join(', ')}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: e.target.value.split(', '),
                })
              }
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <img src={formData.image} alt={`${formData.name}'s profile`} className="trainer-image" />
          <h2 className='heading'>{formData.name}</h2>
          <p className='heading'>{formData.bio}</p>
          <ul className="trainer-features">
            {formData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className='btn-edit' onClick={() => setIsEditing(true)}>Edit Profile</button>
        </>
      )}
    </div>
    <Footer/>

    </>
  );
};

export default TrainerProfilePage;
