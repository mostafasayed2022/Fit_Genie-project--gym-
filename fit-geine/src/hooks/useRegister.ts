import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);

    const register = async (formData: any) => {
        setIsLoading(true);
        try {
            await axios.post(`https://127.0.0.1:8000/api/register/`, formData);
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "You have successfully joined the Fit Genie tribe!",
                timer: 2000,
                showConfirmButton: false
            });
            return true;
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: "Something went wrong. Please check your data and try again."
            });
            console.error(`Error registration:`, error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { register, isLoading };
};
