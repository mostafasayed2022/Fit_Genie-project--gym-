import React, { useState } from "react";

interface WorkoutPlan {
    Intensitylevel: string;
    Typeofexercises: string;
}

const WorkoutPlanComponent = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const fetchWorkoutPlans = async (email: string) => {
        setIsLoading(true);
        try {
            const response = await fetch('https://127.0.0.1:8000/api/workoutplan/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            });
            const data = await response.json();
            setWorkoutPlans(data);
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
        fetchWorkoutPlans(email);
    };

    return (
        <div>
            <h1>Workout Plans</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Fetch Workout Plans'}
                </button>
            </form>
            <ul>
                {workoutPlans.map(workoutPlan => (
                    <li key={workoutPlan.Intensitylevel}>{workoutPlan.Typeofexercises}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutPlanComponent;
