import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import '../Login/login.css';
import Footer from "../Footer";
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
import Swal from 'sweetalert2';

const loginUser = async (credentials: { username: string, password: string }) => {
  
  const data = await fetch("https://127.0.0.1:8000/api/login/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  return await data.json();
}

const Login = (props: { setToken: (token: string) => void, setLoggedIn: (loggedIn: boolean) => void }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      props.setToken(token);
      props.setLoggedIn(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const response = await loginUser({ username, password });
    if (response.token) {
      localStorage.setItem('token', response.token);
      props.setToken(response.token);
      props.setLoggedIn(true);

      Swal.fire({
        icon: "success",
        title: "Login Success",
        showCancelButton: false,
        timer: 1500
      });
      navigate('/home');
    } else {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Check your username or password"
      });
    }
  }

  return (
    <div>
      <Navbar loggedIn={false} setToken={function (token: string): void {
        throw new Error('Function not implemented.');
      } } setLoggedIn={function (loggedIn: boolean): void {
        throw new Error('Function not implemented.');
      } } />
      <div className='logiiin' style={{ backgroundImage: `url(${services})` }}>
        <h1>Login Page</h1>
      </div>
      <div className="containerrrr" style={{ backgroundImage: `url(${contactBG})` }}>
        <div className="login-register-container">
          <div className='form-cont'>
            <form method='post' onSubmit={handleLogin}>
              <div className="form-field-wrapper">
                <input
                  required
                  type="email"
                  name="username"
                  id='email'
                  placeholder="Username or email"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>

              <div className="form-field-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password..."
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
                      onChange={togglePasswordVisibility}
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
            <p className='social'>Sign in with <span>social</span></p>
            <div className='social-media'>
              <button className='btn-social' type="submit"><FaGoogle className='FaGoogle' /></button>
              <button className='btn-social' type="submit"><FaFacebook className='FaFacebook' /></button>
              <button className='btn-social' type="submit"><FaLinkedin className='FaLinkedin' /></button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
