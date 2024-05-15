import React, { useState } from "react";
import Navbar from "../Navbar";

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
                body: JSON.stringify({ email: email })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log('Fetched data:', data);  // Debugging log
            setMealData(data);
        } catch (error) {
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
            <Navbar loggedIn={false} />
            <div>
                <h1>Nutrition Plans</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Get API Data</button>
                </form>

                {isLoading && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {mealData && Object.entries(mealData).map(([meal, mealData]) => (
                    <div key={meal}>
                        <h1>{meal}</h1>
                        <p>Calories: {mealData.calories}</p>
                        <p>Protein: {mealData.protein}</p>
                        <p>Carbs: {mealData.carbs}</p>
                        <p>Meal: {mealData.meal}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Nutrition;
