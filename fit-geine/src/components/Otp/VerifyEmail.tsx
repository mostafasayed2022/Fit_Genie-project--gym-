import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEmailVerification } from '../../hooks/useEmailVerification';
import sports from "../../images/sports.jpg"

const VerifyEmail: React.FC = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const { step, sendOtp, verifyOtp, loading, error } = useEmailVerification();

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendOtp(email);
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const ok = await verifyOtp(email, otp);
        if (ok) {
            Swal.fire({
                icon: "success",
                title: "Authentication Verified",
                text: "Your identity has been confirmed.",
                timer: 2000,
                showConfirmButton: false
            });
            navigate("/login");
        }
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src={sports} alt="bg" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
            </div>

            <div className="max-w-md w-full space-y-8 glass-card border border-white/10 p-10 relative z-10 shadow-2xl" data-aos="fade-up">
                <div className="text-center">
                    <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Secure <span className="text-primary italic">Verify</span>
                    </h2>
                    <p className="mt-3 text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">
                        {step === 'email' ? 'Identification stage' : 'Verification stage'}
                    </p>
                </div>

                {step === 'email' ? (
                    <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Account Email</label>
                            <input
                                required
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none text-white transition-all placeholder-white/10 text-sm"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {error && <p className="text-red-400 text-[10px] italic text-center px-4">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 flex justify-center items-center gap-3 ${
                                loading ? 'bg-white/10 text-white/20' : 'bg-primary text-black hover:shadow-[0_0_30px_rgba(203,255,1,0.3)] hover:scale-[1.02]'
                            }`}
                        >
                            {loading ? "SENDING CODE..." : "SEND VERIFICATION"}
                        </button>
                    </form>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Email (Read Only)</label>
                                <input
                                    readOnly
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none text-white/40 text-sm cursor-not-allowed"
                                    value={email}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">6-Digit OTP Code</label>
                                <input
                                    required
                                    type="text"
                                    maxLength={6}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none text-white transition-all placeholder-white/10 text-sm text-center tracking-[0.5em] font-black"
                                    placeholder="000000"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-400 text-[10px] italic text-center px-4 uppercase font-bold tracking-tighter">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 flex justify-center items-center gap-3 ${
                                loading ? 'bg-white/10 text-white/20' : 'bg-primary text-black hover:shadow-[0_0_30px_rgba(203,255,1,0.3)]'
                            }`}
                        >
                            {loading ? "VERIFYING..." : "CONFIRM CODE"}
                        </button>
                        
                        <button 
                            type="button" 
                            onClick={() => window.location.reload()}
                            className="w-full text-[10px] text-white/20 font-bold uppercase tracking-widest hover:text-white transition-colors"
                        >
                            Resend Code
                        </button>
                    </form>
                )}
            </div>

            {/* Decorative Blur */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};

export default VerifyEmail;