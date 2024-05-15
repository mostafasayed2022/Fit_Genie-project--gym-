import React, { useState } from "react";
import Navbar from "../Navbar";
import index from "../About";

interface WorkoutPlan {
    title: string;
    calories: string;
}

const Nutration = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState<WorkoutPlan | null>(null);

    const fetchWorkoutPlans = async (email: string) => {
        setIsLoading(true);
        try {
            const response = await fetch('https://127.0.0.1:8000/api/mealplan/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            });
            console.log(response)
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
    const handleShowDetails = (index: number) => {
        setSelectedWorkoutPlan(workoutPlans[index]);
    };

    return (
        <>
            <Navbar loggedIn={false} />
            <div>
                <h1>Nutration Plans</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button onClick={() => handleSubmit} >
                        {isLoading ? 'Loading...' : 'Fetch Workout Plans'}
                    </button>
                </form>
                {/* <ul>
                    {Array.isArray(workoutPlans) && workoutPlans.map(workoutPlan => (
                        <li key={workoutPlan.Title}>{workoutPlan.Calories}</li>
                    ))}
                </ul> */}

                <div className="row">
                {Array.isArray(workoutPlans) && workoutPlans.length > 0 && workoutPlans.map((WorkoutPlan, index) => (
                        <div className="col-md-4 mb-4 cardss" key={index}>
                            <div className="cardd">
                                <div>
                                    <h5 className="card-title">{WorkoutPlan.title}</h5>
                                    <p className="card-description">{WorkoutPlan.calories}</p>
                                    <button onClick={() => { console.log('Clicked on index:', index); handleShowDetails(index); }}>Show Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedWorkoutPlan && (
                    <div>
                        <h5>selected workout:{selectedWorkoutPlan.title}</h5>
                        <p>calories: {selectedWorkoutPlan.calories}</p>
                    </div>
                )}
            </div>
        </>

    );
};

export default Nutration;
