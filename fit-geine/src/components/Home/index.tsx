import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Counter from './Counter';
import TestimonialsSlider from './TestimonialsSlider';
import TrainerCard from './TrainerCard ';
import PricingPlans from './PricingPlans';
import ControlledAccordions from './Accordions ';
import ContactForm from './ContactForm';
import About from './About';
import AOS from "aos";
import Footer from "../Footer";
// services pages
import Services_fitness from "../Services_fitness/Fitness"
import Services_building from "../Services_fitness/Fitness"
import Services_crossfit from "../Services_fitness/Fitness"
import Services_cardio from "../Services_fitness/Fitness"


// css
import './home.css';
import '../Pricing/pricing.css'


// images
import home from "../../images/home.jpg";
import card1 from "../../images/card1.jpg";
import card2 from "../../images/card2.jpg";
import card3 from "../../images/card3.jpg";
import card4 from "../../images/card4.jpg";
import card5 from "../../images/card5.jpg";
import services from "../../images/services.jpg";
import counter1 from "../../images/counter1.jpg";
import trainer1 from "../../images/trainer1.jpg";
import trainer2 from "../../images/trainer2.jpg";
import trainer3 from "../../images/trainer3.jpg";
import trainer4 from "../../images/trainer4.jpg";


// import counter2 from "../../images/counter2.jpg";


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




const plans = [
  {
    name: 'Basic',
    price: 60,
    features: ['Access to all of fitgenie', ' access to hardware', 'not access to ai plans', "access to Services fitgenie"],
  },
  {
    name: 'Pro',
    price: 120,
    features: ['Access to all of fitgenie', 'access to hardware', 'access to Services fitgenie', 'access to ai plans but not all'],
  },
  {
    name: 'Premium',
    price: 250,
    features: ['Access to all of fitgenie', 'access to hardware', 'access to Services fitgenie', 'access to ai plans '],
  },
];



const cards = [
  {
    img: card1,
    title: 'Fitness',
    text: 'Fitness is a broad term that encompasses various aspects of physical well-being, including strength, endurance, flexibility, and cardiovascular health.'
  },
  {
    img: card2,
    title: 'Body Building',
    text: 'Bodybuilding is a form of physical fitness training that focuses on building and sculpting muscle mass to achieve a muscular and well-defined physique.'
  },
  {
    img: card3,
    title: 'Crossfit',
    text: 'CrossFit is a high-intensity fitness program that combines elements of strength training, cardiovascular exercise, and functional movements.'
  },
  {
    img: card4,
    title: 'Cardio',
    text: 'Cardiovascular exercise, often referred to simply as "cardio," is any activity that raises your heart rate and increases your breathing rate.'
  }
];


// useEffect(() => {
//   AOS.init(); // Initialize AOS
// }, []);

function Home() {
  return (
    <>
      <Navbar loggedIn={false} setToken={function (token: string): void {
        throw new Error('Function not implemented.');
      }} setLoggedIn={function (loggedIn: boolean): void {
        throw new Error('Function not implemented.');
      }} />
      <div className="containerr" style={{
        backgroundImage: `url(${home})`,
      }}>
        <div className="banner">
          <div className="right-banner">
            <h1 data-aos="fade-up-right" >
              Fit Genie
            </h1>
            <h2 className="fancy">UNLOCK YOUR FULL <span>FITNESS</span>  POTENTIAL</h2>
            <div className="butt">
              <Link to="/register">
                <button className="btn">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div data-aos="fade-up-right" className='title_cards ' style={{ backgroundImage: `url(${services})` }}>
        services
      </div>
      <div className='cards'>
        <div className='card'>
          <Card style={{}}>
            <Card.Img className='image' src={card1} />
            <Card.Body>
              <Card.Title className='title'>Fitness</Card.Title>
              <Card.Text className='text'>
                Fitness is a broad term that encompasses various aspects of physical well-being, including strength, endurance, flexibility, and cardiovascular health.
              </Card.Text>
              <Link to={'/fitness'}>
                <Button data-aos="fade-up-right" variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className='card'>
          <Card style={{}}>
            <Card.Img className='image' src={card2} />
            <Card.Body>
              <Card.Title className='title'>Body Building</Card.Title>
              <Card.Text className='text'>
                Bodybuilding is a form of physical fitness training that focuses on building and sculpting muscle mass to achieve a muscular and well-defined physique.
              </Card.Text>
              <Link to={'/building'}>
                <Button data-aos="fade-up-right" variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className='card'>
          <Card style={{}}>
            <Card.Img className='image' src={card3} />
            <Card.Body>
              <Card.Title className='title'>Crossfit </Card.Title>
              <Card.Text className='text'>
                CrossFit is a high-intensity fitness program that combines elements of strength training, cardiovascular exercise, and  movements.
              </Card.Text>
              <Link to={'/crossfit'}>
                <Button data-aos="fade-up-right" variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className='card'>
          <Card style={{}}>
            <Card.Img className='image' src={card4} />
            <Card.Body>
              <Card.Title className='title'>Cardio</Card.Title>
              <Card.Text className='text'>
                Cardiovascular exercise, often referred to simply as "cardio," is any activity that raises your heart rate and increases your breathing rate .
              </Card.Text>
              <Link to={'/cardio'}>
                <Button data-aos="fade-up-right" variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='background' style={{ backgroundImage: `url(${counter1})` }}>

        <div className='counter_number' >
          <div className="numbers">
            <Counter number={586} title="Working Days" />
            <Counter number={1036} title="Happy Clients" />
            <Counter number={875} title="Successful Stories" />
            <Counter number={1250} title="Perfect Bodies" />
          </div>
        </div>
      </div>
      <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
        <h1>Testimonials</h1>
      </div>
      <TestimonialsSlider />


      <div className="trainers-page">
        <div className='Trainers' style={{ backgroundImage: `url(${services})` }}>
          <h1>Our Trainers</h1>
        </div>

        <div className="trainer-cards">
          {trainers.map((trainer, index) => (
            <Link to={"/profile"}>
              <TrainerCard key={index} {...trainer} />
            </Link>
          ))}
        </div>

      </div >

      <div className='plans' style={{ backgroundImage: `url(${services})` }}>
        <h1> OUR PRICING PLANS</h1>
      </div>

      <div className='plan'>
        {plans.map((plan, index) => (
          <Link to={"/payment"}>
            <PricingPlans key={index} {...plan} />
          </Link>
        ))}
      </div>

      <div className='accordion' style={{ backgroundImage: `url(${services})` }}>
        <h1> FREQUENTLY ASKED QUESTIONS</h1>
      </div>

      <ControlledAccordions />
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
