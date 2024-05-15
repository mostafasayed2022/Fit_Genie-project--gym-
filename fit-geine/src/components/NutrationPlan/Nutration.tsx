import React, { useState } from "react";
import Navbar from "../Navbar";

interface MealData {
    [key: string]: {
        calories: number;
        protein: number;
        carbs: number;
        meal: string;
    };
}

const Nutration = () => {
    const [mealData, setMealData] = useState<MealData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const fetchMealData = async (email: string) => {
        setIsLoading(true);
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
            setMealData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
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
                <h1>Nutration Plans</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Get API data</button>
                </form>

                {isLoading && <h1>Loading...</h1>}

                {mealData && Object.keys(mealData).map((meal) => (
                    <div key={meal}>
                        <h1>{meal}</h1>
                        <p>Calories: {mealData[meal].calories}</p>
                        <p>Protein: {mealData[meal].protein}</p>
                        <p>Carbs: {mealData[meal].carbs}</p>
                        <p>Meal: {mealData[meal].meal}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Nutration;
