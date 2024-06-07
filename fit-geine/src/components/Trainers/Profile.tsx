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
const API_UPDATE = "https://127.0.0.1:8000/profile/update/"


interface ProfileData {
    name: string;
    bio: string;
    user: {
        email: string;
    };
}
const Profile = () => {
    const [profile, setProfile] = useState<ProfileData>({
        name: '',
        bio: '',
        user: {
            email: ''
        }
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
                const response = await axios.get<ProfileData>('http://127.0.0.1:8000/profile/update/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                setProfile(response.data);
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            await axios.patch('http://127.0.0.1:8000/profile/update/', profile, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            setIsEditing(false);
        } catch (err) {
            setError(error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Name: </label>
                {isEditing ? (
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                ) : (
                    <span>{profile.name}</span>
                )}
            </div>
            <div>
                <label>Bio: </label>
                {isEditing ? (
                    <input type="text" name="bio" value={profile.bio} onChange={handleChange} />
                ) : (
                    <span>{profile.bio}</span>
                )}
            </div>
            <div>
                <label>Email: </label>
                <span>{profile.user.email}</span>
            </div>
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
    <Footer />
};

export default Profile;
