import { useState } from "react";

interface WorkoutPlans {
    workout: string;
}

export const useWorkoutPlan = () => {
    const [workoutPlans, setWorkoutPlans] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const sliceWorkout = (workout: string, startIndex: number, endIndex: number) => {
        // Preserving the original slicing logic as it seems tied to backend format
        const startSymbolIndex = workout.indexOf('-', startIndex);
        const endSymbolIndex = workout.indexOf('+', endIndex);
        if (startSymbolIndex !== -1 && endSymbolIndex !== -1) {
            return workout.slice(startSymbolIndex, endSymbolIndex);
        }
        return workout;
    };

    const fetchWorkoutPlans = async (email: string) => {
        setIsLoading(true);
        setError(null);
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

            const data: WorkoutPlans = await response.json();
            const processedWorkout = sliceWorkout(data.workout, 0, 100);
            setWorkoutPlans(processedWorkout);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Could not find workout plans for this email. Make sure you have a plan assigned.');
        } finally {
            setIsLoading(false);
        }
    };

    return { workoutPlans, fetchWorkoutPlans, isLoading, error };
};
