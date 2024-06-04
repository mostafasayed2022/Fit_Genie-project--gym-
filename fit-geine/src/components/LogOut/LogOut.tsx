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
            <Navbar loggedIn={false} />
            <div className="logout-container">
                <h1>Logging out...</h1>
                {/* You can add a loader or message here if needed */}
            </div>
        </>
    );
};

export default LogOut;
