import { useState } from "react";
import axios from "axios";

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

export const useNutrition = () => {
    const [mealData, setMealData] = useState<MealDataResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMealData = async (email: string) => {
        if (!email) {
            setError("Email is required");
            return;
        }
        setError(null);
        setMealData(null);
        setIsLoading(true);

        try {
            const response = await axios.get<MealDataResponse>(
                `http://127.0.0.1:8000/api/meals/${email}/`
            );
            setMealData(response.data);
        } catch (err: any) {
            setError(err.response?.data?.error || "Could not find nutrition plan for this user. Ensure you have an active plan.");
        } finally {
            setIsLoading(false);
        }
    };

    return { mealData, fetchMealData, isLoading, error };
};
