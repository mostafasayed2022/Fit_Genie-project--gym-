import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./about.css"
// images
import services from "../../images/services.jpg";
import fitness_gif from "../../images/fitness_gif.gif"
import fit1 from "../../images/fit1.jpg";
import fit2 from "../../images/fit2.jpg";
import fit3 from "../../images/fit3.jpg";
import fit4 from "../../images/fit4.jpg";
import fit5 from "../../images/fit5.jpg";

import card5 from "../../images/card5.jpg";

function Fitness() {

  return (
    <body>
      <Navbar loggedIn={undefined} />
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>Fitness</h1>
      </div>
      <div className="container_about">
        <div className="text-about">
          <div className="title_about">
            What is  the <span>Fitness?</span>
          </div>
          <p>Fitness encompasses a state of physical health and well-being achieved through regular exercise, proper nutrition,
            adequate rest, and overall healthy lifestyle habits. It involves various components,
            including cardiovascular endurance, muscular strength, muscular endurance, flexibility, and body composition.</p>
        </div>
        <div className="image">
          <img src={fitness_gif} alt="fitness_gif" />
        </div>
      </div>

      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> fitness advantages!</h1>
      </div>

      <div className="card-containerr">
        <div className="cart">
          <h2>Health</h2>
          <p>This refers to the ability of the heart, lungs, and circulatory system to deliver oxygen and nutrients to the body's tissues during sustained physical activity. Activities such as running, swimming, cycling, and aerobic exercises improve cardiovascular endurance.</p>
        </div>

        <div className="cart">
          <h2> Strength</h2>
          <p>Muscular strength is the ability of muscles to exert force against resistance. Resistance training, weightlifting, and bodyweight exercises like push-ups, squats, and pull-ups help build muscular strength.</p>
        </div>

        <div className="cart">
          <h2> Endurance</h2>
          <p>Muscular endurance is the ability of muscles to perform repetitive contractions over an extended period without fatigue. Endurance activities, high-repetition resistance training, and circuit training can enhance muscular endurance.</p>
        </div>

        <div className="cart">
          <h2>Flexibility</h2>
          <p>Flexibility refers to the range of motion around a joint or group of joints. Stretching exercises, yoga, and Pilates can improve flexibility, which enhances joint mobility, reduces the risk of injury, and improves overall movement efficiency.</p>
        </div>

        <div className="cart">
          <h2>Body Composition</h2>
          <p>Body composition refers to the proportion of fat, muscle, bone, and other tissues in the body. Achieving a healthy body composition involves maintaining an appropriate balance of lean muscle mass and body fat through a combination of exercise, nutrition, and lifestyle choices.</p>
        </div>
      </div>
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> Fitness gallery!</h1>
      </div>


      <div className="image-grid">
        <img src={fit5} alt=" fitness_image" />
        <img src={fit1} alt=" fitness_image" />
        <img src={fit2} alt="fitness_image" />
        <img src={fit3} alt="fitness_image" />
        <img src={fit4} alt="fitness_image" />
        <img src={card5} alt="fitness_image" />

      </div>

      <Footer />
    </body>
  );
}

export default Fitness;
