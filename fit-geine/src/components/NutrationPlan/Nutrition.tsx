import React, { useState } from "react";
import Navbar from "../Navbar";
import Loader from "../Loader/Loader";
import "../Loader/Loader.css"
import './Nutrition.css';

interface MealData {
    [key: string]: {
        calories: string;
        protein: string;
        carbs: string;
        meal: string;
    };
}

const Nutrition = () => {
    const [mealData, setMealData] = useState<MealData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const fetchMealData = async (email: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://127.0.0.1:8000/api/mealplan/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log('Fetched data:', data);
            setMealData(data);
        } catch (error: unknown) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data');
        }
        setIsLoading(false);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchMealData(email);
    };

    return (
        <>
            {isLoading && <Loader />}
            <Navbar loggedIn={false} />
            <div className="nutrition-container">
                <h1>Nutrition Plans</h1>
                <form onSubmit={handleSubmit} className="nutrition-form">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Get API Data</button>
                </form>

                {error && <h1>{error}</h1>}
                {mealData && (
                    <div className="cards-container">
                        {Object.keys(mealData).map((mealKey) => (
                            <div className="card" key={mealKey}>
                                <h2>{mealKey}</h2>
                                <p>Calories: {mealData[mealKey]?.calories}</p>
                                <p>Protein: {mealData[mealKey]?.protein}</p>
                                <p>Carbs: {mealData[mealKey]?.carbs}</p>
                                <p>Meal: {mealData[mealKey]?.meal}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Nutrition;
