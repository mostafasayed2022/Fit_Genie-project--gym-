import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

interface WorkoutPlan {
    Title: string;
    Intensitylevel: string;
    Typeofexercises: string;
}

const WorkoutPlan = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');


    const fetchWorkoutPlans = async () => {
        setIsFetching(true);
        try {
            const response = await axios.get<WorkoutPlan[]>('https://127.0.0.1:8000/api/workoutplan/');
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
                <h1>Workout Plans</h1>

                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
                <button onClick={fetchWorkoutPlans} disabled={isFetching}>
                    {isFetching ? 'Fetching...' : 'Fetch Workout Plans'}
                </button>
                <ul>
                    {workoutPlans.map(workoutPlan => (
                        <li key={workoutPlan.Title}>{workoutPlan.Typeofexercises}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default WorkoutPlan;
