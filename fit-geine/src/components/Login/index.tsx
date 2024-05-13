import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import '../Login/login.css';
import Footer from "../Footer";
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
import Swal from 'sweetalert2'



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
  const [username, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const response = await loginUser({ username, password });
    props.setToken(response.token);
    props.setLoggedIn(true);
    
    if(username==='admin' && password==="password")
    {
      setLoggedIn();
      Swal.fire({
      icon:"success",
      title:"Login Success",
      showCancelButton:false,
      timer:1500
      });
    }
    else{
      Swal.fire({
        icon:"error",
        title:"Login failed",
        text:"check your username or password"
      }) 
    }
  }

  return (
    <body>
      <Navbar loggedIn={undefined} />
      <div className='logiiin' style={{ backgroundImage: `url(${services})` }}>
        <h1> Login Page</h1>
      </div>
      <div className="containerrrr" style={{ backgroundImage: `url(${contactBG})` }}>
        <div className="login-register-container">
          <div className='form-cont'>
            <form  method='post' onSubmit={handleLogin}>
              <div className="form-field-wrapper">
                <input
                  required
                  type="email"
                  name="username"
                  id='email'
                  placeholder="UserName or email"
                  onChange={e=> setEmail(e.target.value)}
                />
                {/* {errors.email && <p style={{ color: 'red', fontSize: '13px' }}>{errors.email}</p>} */}
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
                {/* {errors.password && <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>} */}
              </div>

              <div className="form-field-wrapper">
                <input
                  type="submit"
                  value="Login"
                  className="btnn"
                  onClick={()=>handleLogin}   
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
      <Footer />
    </body>
  );
}

export default Login;

function setLoggedIn() {
  throw new Error('Function not implemented.');
}

