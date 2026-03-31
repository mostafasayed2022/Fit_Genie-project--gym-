import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import sports from "../../images/sports.jpg"

interface LoginProps {
  setToken: (token: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setToken, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, isLoading } = useAuth(setToken, setLoggedIn);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login({ username, password });
    if (success) {
      navigate('/home');
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
                Welcome <span className="text-primary italic">Back</span>
            </h2>
            <p className="mt-3 text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">
                Level up your journey
            </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Email / Username</label>
                    <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none text-white transition-all placeholder-white/10 text-sm"
                        placeholder="mostafa@fitgenie.com"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="space-y-1 group relative">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Password</label>
                    <div className="relative">
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary outline-none text-white transition-all placeholder-white/10 text-sm"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-primary transition-colors"
                        >
                            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[10px]">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-3 h-3 rounded border-white/10 bg-white/5 text-primary focus:ring-primary focus:ring-offset-dark" />
                    <span className="text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">Remember me</span>
                </label>
                <Link to="/verify" className="font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">
                    Forgot password?
                </Link>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 flex justify-center items-center gap-3 ${
                    isLoading ? 'bg-white/10 text-white/20' : 'bg-primary text-black hover:shadow-[0_0_30px_rgba(203,255,1,0.3)] hover:scale-[1.02]'
                }`}
            >
                {isLoading ? "AUTHENTICATING..." : "LOGIN NOW"}
            </button>
        </form>

        <div className="mt-8 text-center">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] flex-grow bg-white/5" />
                <span className="text-[9px] text-white/20 uppercase tracking-[0.4em]">OR JOIN WITH</span>
                <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            <div className="flex justify-center gap-4">
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                    <FaGoogle />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                    <FaFacebook />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                    <FaLinkedin />
                </button>
            </div>
        </div>

        <p className="mt-10 text-center text-[10px] text-white/40 uppercase tracking-[0.25em]">
            NEW TO FIT GENIE?{" "}
            <Link to="/register" className="font-black text-primary hover:text-primary/80 transition-colors ml-2">
                REGISTER FOR FREE
            </Link>
        </p>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

export default Login;
