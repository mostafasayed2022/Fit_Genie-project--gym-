import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './TrainerProfile.css';
// import trainer4 from "../../images/trainer4.jpg";
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';

// Replace with your actual API endpoint

const token = localStorage.getItem('token');
const email = localStorage.getItem('email');

const API_TRAINER = 'https://127.0.0.1:8000/api/profile/?email=${email}';


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



        if (token) {
            setFormData(JSON.parse(token));
        } else {
            // Fetch the trainer data from the API when the component mounts
            axios.get(API_TRAINER, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
                .then(response => {
                    const trainer = response.data;
                    setFormData({
                        name: trainer.name,
                        avatar: trainer.avatar,
                        bio: trainer.bio,
                        // features: trainer.features
                    });
                })
                .catch(error => {
                    console.error('Error fetching trainer data:', error);
                });
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
        const token = localStorage.getItem('token');
        if (token) {
            // Send the updated trainer data to the API
            axios.put(API_TRAINER, formData, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
                .then(response => {
                    console.log('Trainer data updated:', response.data);
                })
                .catch(error => {
                    console.error('Error updating trainer data:', error);
                });
        } else {
            console.error('No token found. Cannot update trainer data.');
        }
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
