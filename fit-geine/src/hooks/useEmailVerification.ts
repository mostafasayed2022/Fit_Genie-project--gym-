import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

export const useEmailVerification = () => {
    const [step, setStep] = useState('email'); // 'email' or 'otp'
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const sendOtp = async (email: string) => {
        setLoading(true);
        setError('');
        try {
            await axios.post('https://127.0.0.1:8000/send-otp/', { email });
            setStep('otp');
            return true;
        } catch (err) {
            setError('Failed to send verification email. Please try again.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async (email: string, otp: string) => {
        setLoading(true);
        setError('');
        try {
            await axios.post('https://127.0.0.1:8000/verify-otp/', { email, otp });
            setSuccess(true);
            return true;
        } catch (err) {
            setError('Invalid OTP. Please check the code and try again.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { step, sendOtp, verifyOtp, loading, error, success };
};
