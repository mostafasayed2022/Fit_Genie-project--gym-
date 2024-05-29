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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);

  // const handleError=(response: { ok: any; statusText: string | undefined; json: () => any; })=>{
  //   if(!response.ok)
  //   {
  //     throw Error(response.statusText);
  //   }
  //   return response.json();
  // }


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="/login" element={<Login setToken={setToken} setLoggedIn={setLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path='payment' element={<PaymentForm />} />
      <Route path='workout' element={<WorkoutPlan />} />
      <Route path='nutration' element={<Nutrition />} />

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
