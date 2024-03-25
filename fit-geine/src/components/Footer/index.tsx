import React from 'react';
import './footer.css';
import logo from "../../images/logo.ico";

import  { Link } from 'react-router-dom';

import contactBG from "../../images/contactBg.jpg";
// import footerBG from "../../images/gymOverlayBg.jpg";



const Footer =() => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='column' >
          <img src={logo} alt='logo' />
          
          <p>Fit-Genie  has the best personal training program .Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins.</p>
        </div>
        <div className="column">
          <h3>Pages</h3>
          <ul>
          <Link to="/home">
          <li><a href="#">Home</a></li>
          </Link>
            
          <Link to="/about">
          <li><a href="#">About</a></li>
          </Link>
          
          <Link to="/pricing">
          <li><a href="#">Pricing</a></li>
          </Link>
          
          <Link to="/educationalResources">
          <li><a href="#">Educational Resources</a></li>
          </Link>
          
          <Link to="/ContactUs">
          <li><a href="#">Contact Us</a></li>
          </Link>
          
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <p> Name: Mostafa Sayed</p>
          <p> Email:  mostafa123@gmail.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Your massage: very nice this site</p>
        </div>
      </div>
      <div className="bottomBar" >
        <p>&copy; {new Date().getFullYear()} Fit_Geine. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
