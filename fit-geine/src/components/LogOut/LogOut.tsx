import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const LogOut: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await fetch("https://127.0.0.1:8000/api/logout/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Logout failed");
                }

                // Clear token and redirect to login
                localStorage.removeItem("token");
                navigate("/login");
            } catch (error) {
                console.error("Logout error:", error);
                // Handle error if needed
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <>
            <Navbar loggedIn={false} setToken={function (token: string): void {
                throw new Error("Function not implemented.");
            }} setLoggedIn={function (loggedIn: boolean): void {
                throw new Error("Function not implemented.");
            }} />
            <div className="logout-container">
                <h1>User is logged in</h1>
            </div>
        </>
    );
};

export default LogOut;
function setIsLoggedin(arg0: boolean) {
    throw new Error("Function not implemented.");
}

