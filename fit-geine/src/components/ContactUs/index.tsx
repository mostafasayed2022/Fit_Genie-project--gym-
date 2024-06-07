import Navbar from "../Navbar";
import Footer from "../Footer";
import React, { useState } from "react";
import '../Home/home.css';
import ControlledAccordions from '../Home/Accordions ';
import Contactt from "./Contactt";
// images
import contactBG from "../../images/contactBg.jpg";
import services from "../../images/services.jpg";
import sports from "../../images/sports.jpg"




function ContactUs() {
  return (
    <>
      <Navbar loggedIn={false} setToken={function (token: string): void {
        throw new Error('Function not implemented.');
      }} setLoggedIn={function (loggedIn: boolean): void {
        throw new Error('Function not implemented.');
      }} />      <Contactt/>
      <div className='accordion-contact' style={{ backgroundImage: `url(${sports})` }}>
        <h1> FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <ControlledAccordions />
      <Footer />
    </>
  );
}

export default ContactUs;
