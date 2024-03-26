import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Navbar from "../Navbar";
import Footer from "../Footer";
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
import './register.css';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try{
     const response =await axios.post(`https://localhost:8000/api/register/`,formData);
     console.log(response.data);  
  }
  catch(error)
  {
    console.error(`Error registration :`,error);
  }
}

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <Navbar loggedIn={undefined} />
      <div className='logiiin' style={{ backgroundImage: `url(${services})` }}>
        <h1> Register Page</h1>
      </div>
      <div className="containerrrrr" style={{ backgroundImage: `url(${contactBG})` }}>
        <div className="login-register-container">
          <div className='form-cont'>
            <form onSubmit={handleSubmit}>
              <div className="form-field-wrapper">
                <input
                  required
                  type="text"
                  name="fullName"
                  // value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                />
              </div>

              <div className="form-field-wrapper">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>

              <div className="form-field-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password..."
                  autoComplete="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password..."
                  autoComplete="Password"
                  // value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field-wrapper">
                <input
                  type="submit"
                  value="Register"
                  className="btnnn"
                  onChange={handleSubmit}
                />
              </div>

              <div className='forget_password '>
                <div className='checkbox pass '>
                  <label>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={togglePasswordVisibility}
                    />
                    <span>Show password</span>
                  </label>
                </div>
              </div>
            </form>
            <p className='social'>Sign in with  <span>social</span> </p>
            <div className='social-media'>
              <button className='btn-social' type="submit"><FaGoogle className='FaGoogle' />  </button>
              <button className='btn-social' type="submit"><FaFacebook className='FaFacebook' />  </button>
              <button className='btn-social' type="submit"><FaLinkedin className='FaLinkedin' />  </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
