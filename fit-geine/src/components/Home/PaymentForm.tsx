import React, { useState, FormEvent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PricingPlans from '../Pricing/index';

import './home.css';
import '../Pricing/pricing.css';

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
        <>
            <Navbar loggedIn={undefined} />
            <div className="pricing-title pricing-title2" >
                <h3 className="pricing-heading" id="heading"> <span className="planss"> PAYMENT</span> OPTIONS</h3>
                <p>At Goldstone we truly embrace technology.
                    You now have two ways to Join our club: Join &
                    Pay Online on this website or Join & Pay at one
                    of our Automated Kiosks at Reception. Our 12
                    Month upfront price is STILL the best value
                    option on the market. Please note we no longer
                    accept cash payments so you will need a valid bank
                    visa debit /credit card. Our online system offers you
                    incredible flexibility – no more strict time contracts!
                    So, if all you need is 4 months membership for
                    example, then opt for pay monthly and cancel it
                    before the 5th month starts. The self service online
                    account system allows you to log in and control your
                    account, 24/7.</p>
            </div>
            <form className="payment-form" onSubmit={handlePayment}>
                <label className="payment-label">
                    Card Number:
                    <input
                        type="text"
                        className="payment-input"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </label>
                <label className="payment-label">
                    Expiry Date:
                    <input
                        className="payment-input"
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </label>
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
            <Footer />
        </>
    );
};

export default PaymentForm;
