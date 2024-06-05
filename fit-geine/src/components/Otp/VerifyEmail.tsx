
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import './EmailOtpVerification.css';


const VerifyEmail = () => {

    const [step, setStep] = useState('email'); // 'email' or 'otp'
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate=useNavigate();

    const handleEmailSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('https://127.0.0.1:8000/send-otp/', { email });
            setStep('otp');
        } catch (err) {
            setError('Failed to send verification email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleOtpSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('https://127.0.0.1:8000/verify-otp/', { email, otp });
            setSuccess(true);
        } catch (err) {
            // setError('Invalid OTP. Please try again.');
            Swal.fire({
                icon: "error",
                title: 'Invalid OTP. Please try again.',
                text: "Check your username or password"
              });
        } finally {
            setLoading(false);
        }
    };

    if (success) {
            Swal.fire({
                icon: "error",
                title: "otp is done ..go to the home page",
                text: "Check your username or password"
              });
            navigate("/home");
    }
    return (
        <div className="email-otp-verification">
            {step === 'email' && (
                <div className="email-verification">
                    <h2>Email Verification</h2>
                    <form onSubmit={handleEmailSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" disabled={loading} onSubmit={handleEmailSubmit}>
                            {loading ? 'Sending...' : 'Send Verification Email'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            )}

            {step === 'otp' && (
                <div className="otp-verification">
                    <h2>OTP Verification</h2>
                    <form onSubmit={handleOtpSubmit}>
                    <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Verifying...' : 'Verify OTP'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            )}
        </div>
    );
}

export default VerifyEmail;