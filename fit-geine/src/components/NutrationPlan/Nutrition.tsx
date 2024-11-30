import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Loader from "../Loader/Loader";
import "../Loader/Loader.css";
import "./Nutrition.css";

interface Meal {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
}

interface CategorizedMeals {
    [category: string]: Meal[];
}

interface MealDataResponse {
    categorized_meals: CategorizedMeals;
    total: {
        calories: number;
        protein: number;
        carbs: number;
    };
}

const MealData: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [mealData, setMealData] = useState<MealDataResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMealData = async () => {
        setError(null);
        setMealData(null);
        setIsLoading(true);

        try {
            const response = await axios.get<MealDataResponse>(
                `http://127.0.0.1:8000/api/meals/mohamedhossamabdelraham@gmail.com/`
            );
            setMealData(response.data);
        } catch (err: any) {
            setError(err.response?.data?.error || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar
                loggedIn={false}
                setToken={() => { }}
                setLoggedIn={() => { }}
            />
            <div className="nutrition-container">
                <h1>Fetch User Meal Data</h1>
                <div className="nutrition-form">
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <button onClick={fetchMealData} disabled={isLoading}>
                        {isLoading ? "Fetching..." : "Fetch Data"}
                    </button>
                </div>

                {isLoading && <Loader />}
                {error && <div className="error-message">Error: {error}</div>}
                {mealData && (
                    <div className="meal-data">
                        <h2>Categorized Meals</h2>
                        {Object.entries(mealData.categorized_meals).map(([category, meals]) => (
                            <div key={category} className="meal-category">
                                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                                <ul>
                                    {meals.map((meal, index) => (
                                        <li key={index}>
                                            <strong>{meal.name}</strong>: {meal.calories} cal, {meal.protein}g protein, {meal.carbs}g carbs
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <h2>Total Nutrients</h2>
                        <p>Calories: {mealData.total.calories}</p>
                        <p>Protein: {mealData.total.protein}g</p>
                        <p>Carbs: {mealData.total.carbs}g</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default MealData;