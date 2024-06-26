import React, { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../Navbar";
import Loader from "../Loader/Loader";
import "../Loader/Loader.css";
import "./WorkoutPlan.css"; // Ensure you have a corresponding CSS file for styling

interface WorkoutPlans {
    workout: string;
}

const WorkoutPlan: React.FC=() => {
    const [workoutPlans, setWorkoutPlans] = useState<string | null>(null);
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
            console.log(response)

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data: WorkoutPlans = await response.json();
            const slicedWorkout = sliceWorkout(data.workout, 0, 100);
            setWorkoutPlans(slicedWorkout);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch workout plans');
        }
        setIsLoading(false);
    };

    const sliceWorkout = (workout: string, startIndex: number, endIndex: number) => {
        // Find the indexes of specific symbols
        const startSymbolIndex = workout.indexOf('-', startIndex);
        const endSymbolIndex = workout.indexOf('+', endIndex);
    
        // Check if the symbols are found and return the sliced string
        if (startSymbolIndex !== -1 && endSymbolIndex !== -1) {
            return workout.slice(startSymbolIndex, endSymbolIndex);
        } else {
            return '';
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchWorkoutPlans(email);
    };

    return (
        <>
            {isLoading && <Loader/>}
            <Navbar loggedIn={false} setToken={function (token: string): void {
                throw new Error("Function not implemented.");
            }} setLoggedIn={function (loggedIn: boolean): void {
                throw new Error("Function not implemented.");
            }} />
            <div className="workout-container">
                <h1>Workout Plans</h1>
                <form onSubmit={handleSubmit} className="email-form">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit" className="fetch-button"> Get API Data</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {workoutPlans && (
                    <div className="work-plan">
                        <pre className="workout-card">{workoutPlans}</pre>
                    </div>
                )}
            </div>
        </>
    );
};

export default WorkoutPlan;
