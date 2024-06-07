import React, { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../Navbar";
import Loader from "../Loader/Loader";
import "../Loader/Loader.css";
import "./WorkoutPlan.css"; // Ensure you have a corresponding CSS file for styling

interface WorkoutPlan {
    id: number;
    workout: string;
}

const WorkoutPlan: React.FC = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
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

            const data: WorkoutPlan[] = await response.json();
            setWorkoutPlans(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch workout plans');
        }
        setIsLoading(false);
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
            {isLoading && <Loader />}
            <Navbar loggedIn={false} setToken={() => { }} setLoggedIn={() => { }} />
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
                    <button type="submit" className="fetch-button">Get API Data</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="workout-plans">
                    {workoutPlans.map(plan => (
                        <div key={plan.id} className="workout-card">
                            <p>{plan.workout}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WorkoutPlan;
