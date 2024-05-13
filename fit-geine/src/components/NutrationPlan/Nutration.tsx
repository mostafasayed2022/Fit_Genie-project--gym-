import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

interface WorkoutPlan {
    Title: string;
    Calories: number;
    Carbs: number;
}

const NutrationPlan = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');


    const fetchWorkoutPlans = async () => {
        setIsFetching(true);
        try {
            const response = await axios.get<WorkoutPlan[]>('https://127.0.0.1:8000/api/mealplan/');
            setWorkoutPlans(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setIsFetching(false);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };


    return (
        <>
            <Navbar loggedIn={undefined} />
            <div>
                <h1>Nutration Plans</h1>

                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
                <button onClick={fetchWorkoutPlans} disabled={isFetching}>
                    {isFetching ? 'Fetching...' : 'Fetch Nutration Plans'}
                </button>
                <ul>
                    {workoutPlans.map(workoutPlan => (
                        <li key={workoutPlan.Title}>{workoutPlan.Calories}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NutrationPlan;
