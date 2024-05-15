import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/logo.ico";
import "./logoname.css";

const Navbar = (props: { loggedIn: any; }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="logo_name">
          <Link to="/home" className="header__content__logo">
            <img src={logo} alt="logo" />
          </Link>
          <p className="span1">Fit <span className="span2">Genie </span></p>
        </div>


        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            {/* {props.loggedIn ?

              <li><Link to="/logout" className="icon solid fa-sign-out-alt"><span className="label">Logout</span></Link></li>
              :
              <li><Link to="/login" className="icon solid fa-sign-in-alt"><span className="label">Login</span></Link></li>

            } */}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            
            <li>
              <Link to="/workout">Workout Plan</Link>
            </li>
            
            <li>
              <Link to="/nutration">Nutrition Plan</Link>
            </li>
            
            <li>
              <Link to="/ContactUs">ContactUs</Link>
            </li>

            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">Login</button>
            </Link>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
