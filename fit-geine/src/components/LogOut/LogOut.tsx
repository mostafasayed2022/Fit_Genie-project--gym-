import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                // We attempt to call the logout API
                await fetch("https://127.0.0.1:8000/api/logout/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
            } catch (error) {
                console.error("Logout error:", error);
            } finally {
                // Always clear local state and redirect
                localStorage.clear();
                window.location.href = "/login"; // Force full reload to reset all states
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-dark flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">Signing you out safely...</p>
        </div>
    );
};

export default LogOut;
