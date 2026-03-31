import { useState } from "react";
import Swal from 'sweetalert2';

export const useAuth = (setToken: (token: string) => void, setLoggedIn: (loggedIn: boolean) => void) => {
    const [isLoading, setIsLoading] = useState(false);

    const login = async (credentials: { username: string, password: string }) => {
        setIsLoading(true);
        try {
            const response = await fetch("https://127.0.0.1:8000/api/login/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setLoggedIn(true);
                Swal.fire({
                    icon: "success",
                    title: "Login Success",
                    timer: 1500,
                    showConfirmButton: false,
                });
                return true;
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: data.error || "Check your username or password"
                });
                return false;
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "Could not connect to the fitness server"
            });
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading };
};
