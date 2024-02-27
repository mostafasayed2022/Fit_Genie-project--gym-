import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import '../Login/login.css';
import { useAuth } from '../../utils/AuthContext';
import Validation from '../Validation';
import Footer from "../Footer";

import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
import { CheckBox } from '@mui/icons-material';



function Login() {
  // const [values, setValues] = useState({
  //   name:'',
  //   email: '',
  //   password: ''
  // });

  // const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  // const { user, loginUser } = useAuth();
  // const navigate = useNavigate();

  // const loginForm = useRef<HTMLFormElement>(null);

  // useEffect(() => {
  //   if (user) {
  //     navigate('/home');
  //   }
  // }, [user, navigate]);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setErrors(Validation(values));
  //   const { email, password } = values;
  //   setUserInfo({ email, password });
  //   // loginUser({ email, password });
  //   // loginUser({email, password})
  // };
  const [password, setPassword] = useState('');
  const [showPassword, setSowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setSowPassword(!showPassword);
  }

  return (
    <body>
      <Navbar />
      <div className='logiiin' style={{ backgroundImage: `url(${services})` }}>
        <h1> Login Page</h1>
      </div>
      <div className="containerrrr" style={{ backgroundImage: `url(${contactBG})` }}>
        <div className="login-register-container">
          <div className='form-cont'>
            <form  >
              <div className="form-field-wrapper">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="UserName or email"
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
                  type="submit"
                  value="Login"
                  className="btnn"
                />
              </div>
              <div className='forget-password'>
                <div className='checkbox'>
                  <label>

                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={(togglePasswordVisibility)}
                    />
                    <span>Show password</span>
                  </label>
                </div>
                <div className='Forget'> 
                  <a href="#">Forget password?</a>
                </div>
              </div>
            </form>
            <p className='text-login'>Don't have an account? <span><Link to="/register">Register</Link></span> </p>
            <p className='social'>sign in with  <span>social</span> </p>
            <div className='social-media'>
              <button className='btn-social' type="submit"><FaGoogle className='FaGoogle' />  </button>
              <button className='btn-social' type="submit"><FaFacebook className='FaFacebook' />  </button>
              <button className='btn-social' type="submit"><FaLinkedin className='FaLinkedin' />  </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </body>
  );
}

export default Login;
function setUserInfo(arg0: { email: string; password: string; }) {
  throw new Error('Function not implemented.');
}

