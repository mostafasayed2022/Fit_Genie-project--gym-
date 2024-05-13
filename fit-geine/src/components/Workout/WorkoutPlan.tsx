import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";

interface WorkoutPlan {
    Intensitylevel: string;
    Typeofexercises: string;
}

const WorkoutPlan=()=> {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            const fetchWorkoutPlans = async () => {
                try {
                    const response = await axios.get('https://127.0.0.1:8000/api/workoutplan/', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setWorkoutPlans(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
                console.log(fetchWorkoutPlans)

            };
            fetchWorkoutPlans();
        }
    }, [token]);


    const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newToken = e.target.value;
        setToken(newToken);
        localStorage.setItem("token", newToken);
    }

    return (
    <>
    <Navbar loggedIn={undefined}/>
        <div>
            <h1>Workout Plans</h1>
            <input
                type="email"
                value={token || ''}
                onChange={handleTokenChange}
                placeholder="Enter token"
            />
            <button onClick={() => setToken('')}>Clear Token</button>
            <ul>
                {workoutPlans.map(workoutPlan => (
                    <li key={workoutPlan.Intensitylevel}>{workoutPlan.Typeofexercises}</li>
                ))}
            </ul>
        </div>
        </>
    );
};



export default WorkoutPlan;