import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './about.css';
// images
import building_gif from "../../images/building_gif.gif"
import services from "../../images/services.jpg";

import build1 from "../../images/build1.jpg"
import build2 from "../../images/build2.jpg"
import build3 from "../../images/build3.jpg"
import build4 from "../../images/build4.jpg"
import build5 from "../../images/build5.jpg"
import build6 from "../../images/build6.jpg"




function Building() {

  return (
<body>
      <Navbar loggedIn={undefined} />
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>body Building</h1>
      </div>
      <div className="container_about">
        <div className="text-about">
          <div className="title_about">
            What is  the <span>body Building?</span>
          </div>
          <p>Bodybuilding is a sport and fitness activity focused on developing and sculpting the muscles of the body through weightlifting, nutrition, and sometimes supplementation.
          It's not just about building muscle mass but also about achieving symmetry, proportion, and definition. 
          Bodybuilders typically engage in resistance training exercises targeting specific muscle groups to promote hypertrophy (muscle growth) and often follow strict diets to reduce body fat and enhance muscle definition.
          Competitive bodybuilding
          involves participants showcasing their physique in front of judges, who assess muscularity, definition, symmetry, and overall presentation.</p>
        </div>
        <div className="image">
          <img src={building_gif} alt="fitness_gif" />
        </div>
      </div>

      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> body Building advantages!</h1>
      </div>

      <div className="card-containerr">
        <div className="cart">
          <h2>Nutrition</h2>
          <p>Nutrition is a critical component of bodybuilding. Bodybuilders typically follow a high-protein diet to support muscle growth and repair. They also carefully monitor their calorie intake, macronutrient ratios (protein, carbohydrates, and fats), and meal timing to optimize muscle building and minimize fat gain.</p>
        </div>

        <div className="cart">
          <h2> Lifestyle</h2>
          <p>Bodybuilding is not just a sport but often a lifestyle for those involved. It requires dedication, discipline, and consistency in training, nutrition, and lifestyle habits to achieve and maintain a competitive physique.</p>
        </div>

        <div className="cart">
          <h2> Training</h2>
          <p>Bodybuilders typically follow a structured weightlifting program that targets different muscle groups on different days of the week. They often divide their training into "splits," focusing on specific muscle groups each session to allow for adequate recovery time.</p>
        </div>

        <div className="cart">
          <h2>Rest and Recovery</h2>
          <p>Adequate rest and recovery are essential for muscle growth and overall health. Bodybuilders typically prioritize sleep and may incorporate rest days into their training schedules to allow their muscles to recover and grow.</p>
        </div>

        <div className="cart">
          <h2>Supplementation</h2>
          <p>Many bodybuilders use supplements to support their training and nutrition goals. These may include protein powders, creatine, branched-chain amino acids (BCAAs), pre-workout supplements, and vitamins/minerals..</p>
        </div>
      </div>
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>body building gallery!</h1>
      </div>


      <div className="image-grid">
        <img src={build1} alt=" fitness_image" />
        <img src={build2} alt=" fitness_image" />
        <img src={build3} alt="fitness_image" />
        <img src={build4} alt="fitness_image" />
        <img src={build5} alt="fitness_image" />
        <img src={build6} alt="fitness_image" />

      </div>

      <Footer />
    </body>
  );
}

export default Building;
