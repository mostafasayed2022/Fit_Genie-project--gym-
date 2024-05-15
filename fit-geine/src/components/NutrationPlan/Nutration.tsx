import React, { useState } from "react";
import Navbar from "../Navbar";

interface WorkoutPlan {
    title: string;
    calories: string;
}

const Nutration = () => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

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

    return (
        <>
            <Navbar loggedIn={undefined} />
            <div>
                <h1>Workout Plans</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button onClick={() => fetchWorkoutPlans} >
                        {isLoading ? 'Loading...' : 'Fetch Workout Plans'}
                    </button>
                </form>
                {/* <ul>
                    {Array.isArray(workoutPlans) && workoutPlans.map(workoutPlan => (
                        <li key={workoutPlan.Title}>{workoutPlan.Calories}</li>
                    ))}
                </ul> */}
                
                <div className="row">
          {workoutPlans.map((article, index) => (
            <div className="col-md-4 mb-4 cardss" key={index}>
              <div className="cardd">
                <div className={`card-body item ${article.title === 'Some title to hide' ? 'hidden' : ''}`} key={index}>
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-description">{article.calories}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
            </div>
        </>

    );
};

export default Nutration;
