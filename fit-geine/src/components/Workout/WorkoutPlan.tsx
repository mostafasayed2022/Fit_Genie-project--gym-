import React, { useState } from "react";
import Navbar from "../Navbar";
import "./WorkoutPlan.css"; // Ensure you have a corresponding CSS file for styling

interface WorkoutPlan {
    [key: string]: {
        "Type of exercises": string;
        "Duration and frequency of workouts": string;
        "Intensity level": string;
        "Specific exercises or routines": string;
        "Calories burnt": string;
    };
}

const WorkoutPlan = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const fetchWorkoutPlans = async (email: string) => {
        setIsLoading(true);
        setError(null); // Clear previous errors
        try {
            const response = await fetch('https://127.0.0.1:8000/api/workoutplan/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data: WorkoutPlan = await response.json();
            setWorkoutPlans(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch workout plans');
        }
        setIsLoading(false);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchWorkoutPlans(email);
    };

    return (
        <>
            <Navbar loggedIn={false} setToken={function (token: string): void {
                throw new Error("Function not implemented.");
            } } setLoggedIn={function (loggedIn: boolean): void {
                throw new Error("Function not implemented.");
            } } />
            <div className="workout-container">
                <h1>Workout Plans</h1>
                <form onSubmit={handleSubmit} className="email-form">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                        className="email-input"
                    />
                    <button type="submit" className="fetch-button">
                        {isLoading ? 'Loading...' : 'Fetch Workout Data'}
                    </button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="cards-container">
                    {workoutPlans && Object.keys(workoutPlans).map((key) => (
                        <div className="card" key={key}>
                            <h2>{key}</h2>
                            <p>Type of exercises: {workoutPlans[key]["Type of exercises"]}</p>
                            <p>Duration and frequency of workouts: {workoutPlans[key]["Duration and frequency of workouts"]}</p>
                            <p>Intensity level: {workoutPlans[key]["Intensity level"]}</p>
                            <p>Specific exercises or routines: {workoutPlans[key]["Specific exercises or routines"]}</p>
                            <p>Calories burnt: {workoutPlans[key]["Calories burnt"]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WorkoutPlan;
