import { useEffect, useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import NotFound from "./components/NotFound";
import Login from "./components/Login";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Blog from './components/Blog';
import PaymentForm from './components/Home/PaymentForm';
import NotFound from './components/NotFound';
import WorkoutPlan from './components/Workout/WorkoutPlan';
import Nutrition from './components/NutrationPlan/Nutrition';
import Services_fitness from "./components/Services_fitness/Fitness"
import Services_building from "./components/Services_building/Building"
import Services_crossfit from "./components/Services_crossfit/Crossfit"
import Services_cardio from "./components/Services_cardio/Cardio"
import LogOut from './components/LogOut/LogOut';
import VerifyEmail from './components/Otp/VerifyEmail';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);




  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="/login" element={<Login setToken={setToken} setLoggedIn={setLoggedIn} />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/verify" element={<VerifyEmail />} />

      <Route path="*" element={<NotFound />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path='payment' element={<PaymentForm />} />
      <Route path='workout' element={<WorkoutPlan />} />
      <Route path='nutration' element={<Nutrition />} />
      <Route path='/fitness' element={<Services_fitness/>} />
      <Route path='/building' element={<Services_building/>} />
      <Route path='/crossfit' element={<Services_crossfit/>} />
      <Route path='/cardio' element={<Services_cardio/>} />


    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
