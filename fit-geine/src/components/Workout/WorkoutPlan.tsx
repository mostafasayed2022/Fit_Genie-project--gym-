import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

interface WorkoutPlan {
    Intensitylevel: string;
    Typeofexercises: string;
}

const WorkoutPlanComponent = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

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

    return (
        <>
            <Navbar loggedIn={undefined} />
            <div>
                <h1>Workout Plans</h1>
                <button onClick={fetchWorkoutPlans} disabled={isFetching}>
                    {isFetching ? 'Fetching...' : 'Fetch Workout Plans'}
                </button>
                <ul>
                    {workoutPlans.map(workoutPlan => (
                        <li key={workoutPlan.Intensitylevel}>{workoutPlan.Typeofexercises}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default WorkoutPlanComponent;
