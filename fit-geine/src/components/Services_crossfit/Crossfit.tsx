import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './about.css';
// images
import crossfit_gif from "../../images/crossfit_gif.gif"
import services from "../../images/services.jpg";
import crossfit1 from "../../images/crossfit1.jpg"
import crossfit2 from "../../images/crossfit2.jpg"
import crossfit3 from "../../images/crossfit3.jpg"
import crossfit4 from "../../images/crossfit4.jpg"
import crossfit5 from "../../images/crossfit5.jpg"
import crossfit6 from "../../images/crossfit6.jpg"




function Crossfit() {

  return (
    <body>
      <Navbar loggedIn={undefined} />
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>crossfit</h1>
      </div>
      <div className="container_about">
        <div className="text-about">
          <div className="title_about">
            What is  the <span>crossfit?</span>
          </div>
          <p>CrossFit is a high-intensity fitness program that incorporates elements from various disciplines, including weightlifting, gymnastics, calisthenics, and cardiovascular exercise.
            It is characterized by constantly varied functional movements performed at high intensity. The workouts, known as WODs (Workout of the Day), typically include a mix of exercises such as weightlifting (e.g., squats, deadlifts, cleans),
            bodyweight movements (e.g., pull-ups, push-ups, burpees), and cardiovascular exercises (e.g., rowing, running, jump rope).
            CrossFit workouts are designed to be scalable, meaning they can be adjusted to accommodate individuals of different fitness levels, from beginners to elite athletes. Participants often perform the same workout but scale the intensity,
            load, or movements based on their abilities and experience.</p>
        </div>
        <div className="image">
          <img src={crossfit_gif} alt="fitness_gif" />
        </div>
      </div>

      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> crossfit advantages!</h1>
      </div>

      <div className="card-containerr">
        <div className="cart">
          <h2> Movements</h2>
          <p>CrossFit emphasizes functional movements, which are movements that mimic real-life activities and engage multiple muscle groups simultaneously. Examples include squats, deadlifts, pull-ups, and Olympic weightlifting movements like the snatch and clean and jerk.</p>
        </div>

        <div className="cart">
          <h2> Constant Variation</h2>
          <p>Workouts in CrossFit are highly varied and rarely repeated. This constant variation keeps participants engaged and challenges their bodies in different ways, preventing plateaus and promoting overall fitness.</p>
        </div>

        <div className="cart">
          <h2> High Intensity</h2>
          <p>CrossFit workouts are typically performed at high intensity, meaning they are fast-paced and push participants to work at or near their maximum effort level. This intensity helps improve cardiovascular fitness, strength, and endurance.</p>
        </div>

        <div className="cart">
          <h2>Workout Structure</h2>
          <p>CrossFit workouts, known as "WODs" (Workout of the Day), are typically short but intense. They often combine different exercises in a circuit or AMRAP (As Many Rounds As Possible) format, with participants completing a prescribed number of repetitions or rounds as quickly as possible.</p>
        </div>

        <div className="cart">
          <h2>Scalability</h2>
          <p> CrossFit workouts can be scaled or modified to suit individuals of all fitness levels, from beginners to elite athletes. This scalability makes CrossFit accessible to a wide range of people with varying fitness goals and abilities.</p>
        </div>
      </div>
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1> crossfit gallery!</h1>
      </div>


      <div className="image-grid">
        <img src={crossfit1} alt=" fitness_image" />
        <img src={crossfit2} alt=" fitness_image" />
        <img src={crossfit3} alt="fitness_image" />
        <img src={crossfit4} alt="fitness_image" />
        <img src={crossfit5} alt="fitness_image" />
        <img src={crossfit6} alt="fitness_image" />

      </div>

      <Footer />
    </body>
  );
}

export default Crossfit;
