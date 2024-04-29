import React, { useState, ChangeEvent, FormEvent } from "react";
import './home.css';

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState(null);

    // Validate the form before
    const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // send payment to server for processing
            const response = await fetch('my_end_point', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    cardNumber,
                    expiryDate,
                    cvv,
                    amount: 10000,
                    currency: "EGP",
                }),
            });
            // handle payment response from server "end-point"
        } catch (error) {
            // alert massage Error
        }
    };
    return (
        <form className="payment-form" onSubmit={handlePayment}>
            {/* label 1 */}
            <label className="payment-label">
                Card Number:
                <input
                    type="text"
                    className="payment-input"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </label>
            {/* label 2 */}

            <label className="payment-label">
                Expiry Date:
                <input
                    className="payment-input"
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                />
            </label>
            {/* label 3 */}

            <label className="payment-label">
                CVV:
                <input
                    className="payment-input"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                />
            </label>
            {error && <div className="payment-error">Error: {error}</div>}
            <button className="payment-button" type="submit">Pay Now</button>
        </form>
    );
};



export default PaymentForm;
