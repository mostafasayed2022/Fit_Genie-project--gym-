import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NAVBAR_LINKS } from "../../data/constants";
import logo from "../../images/logo3.ico";

const Navbar: React.FC<{ loggedIn: boolean; setToken: (token: string) => void; setLoggedIn: (loggedIn: boolean) => void; }> = ({ loggedIn, setLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-dark shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 group">
          <img src={logo} alt="logo" className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform" />
          <p className="text-lg md:text-xl font-['Outfit'] font-extrabold tracking-tighter">
            FIT <span className="text-primary italic">GENIE</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <ul className="flex items-center gap-6">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`font-semibold tracking-tighter uppercase transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 ml-4">
            {!loggedIn ? (
              <>
                <Link to="/login" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn-primary !px-5 !py-2 !text-xs !rounded-lg font-black uppercase tracking-widest">
                  Join Now
                </Link>
              </>
            ) : (
              <button 
                onClick={() => {
                  setLoggedIn(false);
                  localStorage.clear();
                }}
                className="text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div 
          className="md:hidden text-3xl cursor-pointer text-white hover:text-primary transition-colors" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose className="text-primary scale-110" /> : <BiMenuAltRight />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark h-screen transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Visual Element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none">
          <span className="text-[15vh] font-black italic uppercase tracking-tighter -rotate-6">FIT GENIE</span>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 relative z-10">
          {NAVBAR_LINKS.map((link, index) => (
            <Link 
              key={link.path}
              to={link.path} 
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-4xl font-black italic uppercase tracking-tighter transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${location.pathname === link.path ? "text-primary" : "text-white/40 hover:text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className={`flex flex-col items-center gap-6 mt-12 transition-all duration-700 delay-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {!loggedIn ? (
              <>
                <Link to="/login" className="text-xl font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Login</Link>
                <Link to="/register" className="btn-primary !px-16 !py-4 shadow-[0_0_30px_rgba(203,255,1,0.2)] font-black uppercase tracking-widest !rounded-xl">Join Now</Link>
              </>
            ) : (
              <button 
                onClick={() => {
                  setLoggedIn(false);
                  localStorage.clear();
                  setMenuOpen(false);
                }}
                className="text-xl font-bold uppercase tracking-widest text-red-500"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
