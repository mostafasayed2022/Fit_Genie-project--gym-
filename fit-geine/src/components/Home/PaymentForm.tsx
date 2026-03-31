import React, { useState, FormEvent } from "react";
import sports from "../../images/sports.jpg"

const PaymentForm: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Mock payment logic
        console.log("Processing payment...");
    };

    return (
        <div className="pt-20 bg-dark min-h-screen text-white">
            <div 
              className='h-[300px] flex items-center justify-center bg-cover bg-fixed bg-center relative' 
              style={{ backgroundImage: `url(${sports})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="text-4xl md:text-7xl relative z-10 tracking-tighter uppercase italic" data-aos="zoom-in">SECURE <span className="text-primary italic font-['Outfit']">PAYMENT</span></h1>
            </div>

            <div className="container mx-auto px-6 py-24 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Info Side */}
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter italic mb-8 border-l-4 border-primary pl-4">Flexible Payment Options</h2>
                        <div className="space-y-6 text-white/50 leading-relaxed italic text-sm">
                            <p>
                                At Fit Genie, we truly embrace technology. You now have two ways to join our club: 
                                <strong className="text-white"> Join & Pay Online</strong> on this website or 
                                <strong className="text-white"> Join & Pay at one of our Automated Kiosks</strong>.
                            </p>
                            <p>
                                Our 12-month upfront price is STILL the best value option on the market. 
                                Please note we no longer accept cash payments, so you will need a valid bank 
                                debit or credit card.
                            </p>
                            <p>
                                Our self-service online account system allows you to log in and control your account, 24/7. 
                                Flexibility is our priority – no strict long-term contracts.
                            </p>
                        </div>
                        <div className="mt-12 p-8 glass-card border border-primary/10 bg-primary/5 flex items-center gap-6">
                            <div className="text-4xl text-primary transform scale-125">🛡️</div>
                            <div>
                                <h4 className="font-bold text-primary uppercase tracking-widest text-xs">Secure Checkout</h4>
                                <p className="text-[10px] text-white/40 uppercase mt-1">256-bit SSL Encrypted Payment</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass-card border border-white/5 shadow-2xl relative overflow-hidden" data-aos="fade-left">
                        <div className="mb-10 flex justify-between items-center text-left">
                            <h3 className="text-xl font-bold uppercase tracking-widest">Card Details</h3>
                            <div className="flex gap-2">
                                <div className="w-8 h-5 bg-white/10 rounded" />
                                <div className="w-8 h-5 bg-white/10 rounded" />
                                <div className="w-8 h-5 bg-white/10 rounded" />
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handlePayment}>
                            <div className="space-y-1 text-left">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Card Number</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 text-sm tracking-[0.2em]"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1 text-left">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Expiry Date</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 text-sm"
                                        placeholder="MM / YY"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">CVV</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all placeholder-white/5 text-sm"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                    />
                                </div>
                            </div>

                            {error && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">{error}</div>}
                            
                            <button className="w-full btn-primary !rounded-xl py-4 font-black text-sm uppercase tracking-[0.2em]" type="submit">
                                PAY SECURELY NOW
                            </button>
                        </form>
                        
                        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
