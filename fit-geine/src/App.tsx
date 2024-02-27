import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import EducationalResources from "./components/EducationalResources";
import Register from "./components/Register";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="educationalResources" element={<EducationalResources />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="pricing" element={<Pricing />} />
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
