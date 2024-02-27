import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";
import './register.css';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
function Register() {

  const [password, setPassword] = useState('');
  const [showPassword, setSowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setSowPassword(!showPassword);
  }

  return (
    <body>
      <body>
        <Navbar />
        <div className='logiiin' style={{ backgroundImage: `url(${services})` }}>
          <h1> Register Page</h1>
        </div>
        <div className="containerrrrr" style={{ backgroundImage: `url(${contactBG})` }}>
          <div className="login-register-container">
            <div className='form-cont'>
              <form  >
                <div className="form-field-wrapper">
                  <input
                    required
                    type="text"
                    name="text"
                    placeholder="Full name"
                  />


                  {/* {errors.email && <p style={{ color: 'red', fontSize: '13px' }}>{errors.email}</p>} */}
                </div>



                <div className="form-field-wrapper">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder=" email"
                  />


                  {/* {errors.email && <p style={{ color: 'red', fontSize: '13px' }}>{errors.email}</p>} */}
                </div>
                <div className="form-field-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter password..."
                    autoComplete="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* {errors.password && <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>} */}
                </div>
                <div className="form-field-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Confirm password..."
                    autoComplete="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* {errors.password && <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>} */}
                </div>
                <div className="form-field-wrapper">
                  <input
                    type="submit"
                    value="Login"
                    className="btnnn"
                  />
                </div>
                <div className='forget_password '>
                  <div className='checkbox pass '>
                    <label>
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={(togglePasswordVisibility)}
                      />
                      <span>Show password</span>
                    </label>
                  </div>
                </div>
              </form>
              <p className='social'>sign in with  <span>social</span> </p>
              <div className='social-media'>
                <button className='btn-social' type="submit"><FaGoogle className='FaGoogle' />  </button>
                <button className='btn-social' type="submit"><FaFacebook className='FaFacebook' />  </button>
                <button className='btn-social' type="submit"><FaLinkedin className='FaLinkedin' />  </button>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </body>
  );
}

export default Register;
