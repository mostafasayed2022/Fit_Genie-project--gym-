import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../Home";
import TrainerCard from "../Home/TrainerCard ";
import ImagesClasses from "./ImagesClasses";
import './about.css';
// images
import bgVideo from "../../images/bgVideo.mp4";
import services from "../../images/services.jpg";
import trainer1 from "../../images/trainer1.jpg";
import trainer2 from "../../images/trainer2.jpg";
import trainer3 from "../../images/trainer3.jpg";
import trainer4 from "../../images/trainer4.jpg";



function index() {

  const trainers = [
    {
      name: 'JANE MARSHALL',
      image: trainer1,
      description: 'CARDIO & CONDITIONING',
    },
    {
      name: 'DAVE WOOD',
      image: trainer2,
      description: 'STRENGTH TRAINER',
    },
  
    {
      name: 'MATTHEW AIDEN',
      image: trainer3,
      description: 'FREESTYLE TRAINER',
    },
  
    {
      name: 'WILLIAM MASON',
      image: trainer4,
      description: 'GROUP EXERCISE TRAINER',
    },
  ];
  
  return (
    <body>
      <Navbar loggedIn={undefined} />

      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>About us</h1>
      </div>
      <div className="container_about">
        <div className="text-about">
          <div className="title_about">
            Who we <span>are?</span>
          </div>
            <p>Fit-Genie has the best personal training program 
            ,Our certified personal trainers are experts in their craft
            , We create the perfect programs to help you reach your goals
            , Everything begins with our energy and 
            figuring out how to evolve that, then the journey begins.</p>
        </div>
        <div>
          <video autoPlay loop muted className="video">
            <source src={bgVideo} type="video/mp4">
            </source>
          </video>
        </div>
      </div>
      
      <div className="trainers-page">
        <div className='Trainers' style={{ backgroundImage: `url(${services})` }}>
          <h1>Our Trainers</h1>
        </div>
        <div className="trainer-cards">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
        
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>Our Classes</h1>
      </div>
        <ImagesClasses/>
        
      <Footer />
    </body>
  );
}

export default index;
