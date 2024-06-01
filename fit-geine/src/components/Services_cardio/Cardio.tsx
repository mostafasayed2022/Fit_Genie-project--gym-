import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './about.css';
// images
import cardio_gif from "../../images/cardio_gif.gif"
import services from "../../images/services.jpg";

import cardio1 from "../../images/cardio1.jpg"
import card4 from "../../images/card4.jpg"
import cardio3 from "../../images/cardio3.jpg"
import cardio4 from "../../images/cardio4.jpg"
import cardio5 from "../../images/cardio5.jpg"
import cardio6 from "../../images/cardio6.jpg"


function Cardio() {

  return (
    <body>
      <Navbar loggedIn={undefined} />
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>Cardio</h1>
      </div>
      <div className="container_about">
        <div className="text-about">
          <div className="title_about">
            What is  the <span>Cardio?</span>
          </div>
          <p>Cardio, short for cardiovascular exercise, refers to any physical activity that increases your heart rate and improves the function of your heart and lungs. It's also known as aerobic exercise because it primarily relies on the aerobic energy-generating process, which requires oxygen.
            Cardio exercises involve continuous, rhythmic movements that engage large muscle groups and elevate your heart rate to a moderate to high intensity for an extended period. These activities help improve cardiovascular health, increase endurance, burn calories, and promote overall fitness.</p>
        </div>
        <div className="image">
          <img src={cardio_gif} alt="fitness_gif" />
        </div>
      </div>

      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> Cardio advantages!</h1>
      </div>

      <div className="card-containerr">
        <div className="cart">
          <h2>Running</h2>
          <p>Running  are simple yet effective forms of cardio that require minimal equipment and can be done almost anywhere..</p>
        </div>

        <div className="cart">
          <h2> Cycling</h2>
          <p>Whether outdoors on a bike or indoors on a stationary bike, cycling is an excellent cardiovascular workout that strengthens the legs and improves endurance.</p>
        </div>

        <div className="cart">
          <h2> Swimming</h2>
          <p>Swimming provides a full-body workout while being gentle on the joints. It's an excellent option for people with joint pain or injuries.</p>
        </div>

        <div className="cart">
          <h2>Walking</h2>
          <p> Walking is a low-impact form of cardio that can be easily incorporated into daily life. Brisk walking can still provide significant cardiovascular benefits.</p>
        </div>

        <div className="cart">
          <h2>Dancing</h2>
          <p>Whether it's Zumba, salsa, or hip-hop, dancing is a fun way to get your heart pumping while enjoying music and movement.</p>
        </div>
      </div>
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> Cardio gallery!</h1>
      </div>


      <div className="image-grid">
        <img src={cardio1} alt=" fitness_image" />
        <img src={card4} alt=" fitness_image" />
        <img src={cardio3} alt="fitness_image" />
        <img src={cardio4} alt="fitness_image" />
        <img src={cardio5} alt="fitness_image" />
        <img src={cardio6} alt="fitness_image" />

      </div>

      <Footer />
    </body>
  );
}

export default Cardio;
