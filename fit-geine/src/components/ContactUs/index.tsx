import Navbar from "../Navbar";
import Footer from "../Footer";
import React, { useState } from "react";
import '../Home/home.css';
import ControlledAccordions from '../Home/Accordions ';
import Contactt from "./Contactt";
// images
import contactBG from "../../images/contactBg.jpg";
import services from "../../images/services.jpg";




function ContactUs() {
  return (
    <>
      <Navbar />
      <Contactt/>
      <div className='accordion-contact' style={{ backgroundImage: `url(${services})` }}>
        <h1> FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <ControlledAccordions />
      <Footer />
    </>
  );
}

export default ContactUs;
