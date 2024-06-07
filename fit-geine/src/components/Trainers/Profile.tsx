import React, { useState, useEffect } from 'react';
import './TrainerProfile.css';
// import trainer4 from "../../images/trainer4.jpg";
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';

// Replace with your actual API endpoint
const API_TRAINER = 'https://api.example.com/trainer';

// interface Trainer {
//     name: string;
//     avatar: string;
//     bio: string;
//     features: string[];
// }

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        avatar: '',
        bio: '',
        // features: []
    });

    useEffect(() => {
        // Fetch the trainer data from the API when the component mounts
        axios.get(API_TRAINER)
            .then(response => {
                const trainer = response.data;
                setFormData({
                    name: trainer.name,
                    avatar: trainer.avatar,
                    bio: trainer.bio
                    // features: trainer.features
                });
            })
            .catch(error => {
                console.error('Error fetching trainer data:', error);
            });
    }, []);

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
        // Send the updated trainer data to the API
        axios.put(API_TRAINER, formData)
            .then(response => {
                console.log('Trainer data updated:', response.data);
            })
            .catch(error => {
                console.error('Error updating trainer data:', error);
            });
    };

    return (
        <>
            <Navbar loggedIn={false} setToken={() => { }} setLoggedIn={() => { }} />
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
                            {/* <label htmlFor="features">Features:</label>
                            <input
                                type="text"
                                id="features"
                                name="features"
                                value={formData.features.join(', ')}
                                onChange={handleChange}
                            /> */}
                        </div>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </form>
                ) : (
                    <>
                        <img src={formData.avatar} alt={`${formData.name}'s profile`} className="trainer-image" />
                        <h2 className='data_name'>{formData.name}</h2>
                        <p>{formData.bio}</p>
                        <ul className="trainer-features">
                            {/* {formData.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))} */}
                        </ul>
                        <button className='btn-edit' onClick={() => setIsEditing(true)}>Edit Profile</button>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Profile;
