// Images imports (as per current project structure)
import image2 from "../images/image2.jpg";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import trainer1 from "../images/trainer1.jpg";
import trainer2 from "../images/trainer2.jpg";
import trainer3 from "../images/trainer3.jpg";
import trainer4 from "../images/trainer4.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import zomba from "../images/zomba.jpg";
import workout from "../images/workout.jpg";
import workout_fitness from "../images/workout_fitness.jpg";
import trx from "../images/trx.jpg";
import boxing from "../images/boxing.jpg";
import Body from "../images/BudyBuilding.jpg";
import BARRE from "../images/BARRE.jpg";
import running from "../images/running.jpg";

// Services Details Images
import fitness_gif from "../images/fitness_gif.gif";
import fit1 from "../images/fit1.jpg";
import fit2 from "../images/fit2.jpg";
import fit3 from "../images/fit3.jpg";
import fit4 from "../images/fit4.jpg";
import fit5 from "../images/fit5.jpg";
import card5 from "../images/card5.jpg";

import building_gif from "../images/building_gif.gif";
import build1 from "../images/build1.jpg";
import build2 from "../images/build2.jpg";
import build3 from "../images/build3.jpg";
import build4 from "../images/build4.jpg";
import build5 from "../images/build5.jpg";
import build6 from "../images/build6.jpg";

export const SITE_NAME = "Fit Genie";
export const TAGLINE = "UNLOCK YOUR FULL FITNESS POTENTIAL";

export const NAVBAR_LINKS = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/#services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contactUs" },
];

export const SERVICES = [
  {
    id: "fitness",
    title: "Fitness",
    image: card1,
    description: "Fitness is a broad term that encompasses various aspects of physical well-being, including strength, endurance, flexibility, and cardiovascular health.",
    link: "/fitness"
  },
  {
    id: "bodybuilding",
    title: "Body Building",
    image: card2,
    description: "Bodybuilding is a form of physical fitness training that focuses on building and sculpting muscle mass to achieve a muscular and well-defined physique.",
    link: "/building"
  },
  {
    id: "crossfit",
    title: "Crossfit",
    image: card3,
    description: "CrossFit is a high-intensity fitness program that combines elements of strength training, cardiovascular exercise, and functional movements.",
    link: "/crossfit"
  },
  {
    id: "cardio",
    title: "Cardio",
    image: card4,
    description: "Cardiovascular exercise, often referred to simply as 'cardio,' is any activity that raises your heart rate and increases your breathing rate.",
    link: "/cardio"
  }
];

// Cardio Details Images
import cardio_gif from "../images/cardio_gif.gif";
import cardio1 from "../images/cardio1.jpg";
import cardio3 from "../images/cardio3.jpg";
import cardio4 from "../images/cardio4.jpg";
import cardio5 from "../images/cardio5.jpg";
import cardio6 from "../images/cardio6.jpg";

// Crossfit Details Images
import crossfit_gif from "../images/crossfit_gif.gif";
import crossfit1 from "../images/crossfit1.jpg";
import crossfit2 from "../images/crossfit2.jpg";
import crossfit3 from "../images/crossfit3.jpg";
import crossfit4 from "../images/crossfit4.jpg";
import crossfit5 from "../images/crossfit5.jpg";
import crossfit6 from "../images/crossfit6.jpg";

export const SERVICE_DETAILS = {
  fitness: {
    title: "Fitness",
    intro: "Fitness encompasses a state of physical health and well-being achieved through regular exercise, proper nutrition, adequate rest, and overall healthy lifestyle habits.",
    gif: fitness_gif,
    advantages: [
      {
        title: "Health",
        description: "This refers to the ability of the heart, lungs, and circulatory system to deliver oxygen and nutrients to the body's tissues."
      },
      {
        title: "Strength",
        description: "Muscular strength is the ability of muscles to exert force against resistance. Build yours with weightlifting and push-ups."
      },
      {
        title: "Endurance",
        description: "Perform repetitive contractions over an extended period without fatigue. Boost yours with circuit training."
      },
      {
        title: "Flexibility",
        description: "Range of motion around joints. Yoga and Pilates can improve joint mobility and reduce injury risk."
      },
      {
        title: "Body Composition",
        description: "Appropriate balance of lean muscle mass and body fat through nutrition and exercise."
      }
    ],
    gallery: [fit5, fit1, fit2, fit3, fit4, card5]
  },
  building: {
    title: "Body Building",
    intro: "Bodybuilding is a sport and fitness activity focused on developing and sculpting the muscles through weightlifting and nutrition.",
    gif: building_gif,
    advantages: [
      {
        title: "Nutrition",
        description: "Critical component. High-protein diets to support muscle growth and repair with careful calorie monitoring."
      },
      {
        title: "Lifestyle",
        description: "Requires dedication, discipline, and consistency in training and nutrition to maintain a competitive physique."
      },
      {
        title: "Training",
        description: "Structured programs targeting different muscle groups on different days using 'splits' for recovery."
      },
      {
        title: "Recovery",
        description: "Essential for growth. prioritizing sleep and rest days to allow muscles to recover and grow."
      },
      {
        title: "Supplementation",
        description: "Using protein powders, creatine, and BCAAs to support training and nutrition goals."
      }
    ],
    gallery: [build1, build2, build3, build4, build5, build6]
  },
  cardio: {
    title: "Cardio",
    intro: "Cardio, short for cardiovascular exercise, refers to any physical activity that increases your heart rate and improves the function of your heart and lungs.",
    gif: cardio_gif,
    advantages: [
      {
        title: "Running",
        description: "Simple yet effective form of cardio that requires minimal equipment and can be done almost anywhere."
      },
      {
        title: "Cycling",
        description: "Excellent cardiovascular workout that strengthens the legs and improves endurance, indoors or out."
      },
      {
        title: "Swimming",
        description: "Provides a full-body workout while being gentle on the joints, ideal for injury recovery."
      },
      {
        title: "Walking",
        description: "Low-impact form of cardio that can be easily incorporated into daily life for significant benefits."
      },
      {
        title: "Dancing",
        description: "A fun way to get your heart pumping while enjoying music and continuous movement."
      }
    ],
    gallery: [cardio1, card4, cardio3, cardio4, cardio5, cardio6]
  },
  crossfit: {
    title: "Crossfit",
    intro: "CrossFit is a high-intensity fitness program that combines elements of strength training, cardiovascular exercise, and functional movements.",
    gif: crossfit_gif,
    advantages: [
      {
        title: "Functional Strength",
        description: "Focuses on movements that mimic real-life activities, improving overall physical capability."
      },
      {
        title: "High Intensity",
        description: "Short, intense workouts that maximize calorie burn and hormonal response."
      },
      {
        title: "Variety",
        description: "Every workout is different (WOD), preventing boredom and ensuring constant adaptation."
      },
      {
        title: "Community",
        description: "Strong group atmosphere that provides motivation and support through shared struggle."
      },
      {
        title: "Agility",
        description: "Improves coordination and speed through diverse explosive movements."
      }
    ],
    gallery: [crossfit1, crossfit2, crossfit3, crossfit4, crossfit5, crossfit6]
  }
};

export const TRAINERS = [
  {
    name: "JANE MARSHALL",
    image: trainer1,
    specialty: "CARDIO & CONDITIONING",
  },
  {
    name: "DAVE WOOD",
    image: trainer2,
    specialty: "STRENGTH TRAINER",
  },
  {
    name: "MATTHEW AIDEN",
    image: trainer3,
    specialty: "FREESTYLE TRAINER",
  },
  {
    name: "WILLIAM MASON",
    image: trainer4,
    specialty: "GROUP EXERCISE TRAINER",
  },
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    price: 60,
    features: [
      "Access to all of fitgenie",
      "Access to hardware",
      "No AI plans access",
      "Access to basic services",
    ],
  },
  {
    name: "Pro",
    price: 120,
    features: [
      "Access to all of fitgenie",
      "Access to hardware",
      "Access to AI plans (Limited)",
      "Access to all basic services",
    ],
  },
  {
    name: "Premium",
    price: 250,
    features: [
      "Access to all of fitgenie",
      "Access to hardware",
      "Full AI plans access",
      "Priority technical support",
    ],
  },
];

export const FAQS = [
  {
    question: "How do I choose the right routine for my goals?",
    answer: "Determine what you want to achieve, whether it's weight loss, muscle gain, or overall health. Choose a routine that matches your current fitness level and build a solid foundation.",
  },
  {
    question: "Should I bulk (gain weight) or cut (lose weight)?",
    answer: "Bulking focuses on muscle growth via calorie surplus, while cutting aims for fat loss via deficit. Choose based on your current body fat percentage and long-term goals.",
  },
  {
    question: "Can I lose fat and build muscle at the same time?",
    answer: "Yes, via body recomposition. This requires a slight caloric deficit, high protein intake (1.2-2.2g per kg), and consistent resistance training.",
  },
  {
    question: "How do I know how many calories to eat?",
    answer: "Calculate your BMR using the Mifflin-St Jeor equation and multiply by your activity factor to find your TDEE. Adjust based on your goal (surplus or deficit).",
  },
  {
    question: "Is it true that eating too much protein at once is a waste?",
    answer: "Consuming 20-40g per meal is efficient for muscle synthesis, but your body can handle more. Excess protein is used for energy or stored, but not necessarily 'wasted'.",
  },
  {
    question: "Am I not getting a good workout if I'm not sweating?",
    answer: "Sweating is a cooling mechanism, not a marker of intensity. Focus on heart rate, strength progression, and consistency rather than sweat volume.",
  },
];

export const STATS = [
  { value: 586, title: "Working Days" },
  { value: 1036, title: "Happy Clients" },
  { value: 875, title: "Successful Stories" },
  { value: 1250, title: "Perfect Bodies" },
];

export const TESTIMONIALS = [
  {
    image: img1,
    id: 1,
    text: "Great service and friendly staff!",
    author: "John Doe",
  },
  {
    image: img2,
    id: 2,
    text: "I love the workout plans, they are so effective!",
    author: "Jane Smith",
  },
  {
    image: img3,
    id: 3,
    text: "Amazing experience, highly recommended!",
    author: "Bob Johnson",
  },
  {
    image: img4,
    id: 4,
    text: "The best gym I have ever been to.",
    author: "Alice Brown",
  },
  {
    image: img5,
    id: 5,
    text: "I feel healthier and stronger thanks to their programs.",
    author: "Diana Clark",
  },
];

export const CLASSES = [
  {
    name: "Zomba",
    image: zomba,
    description: "Dancing to a mix of Latin and International Music.",
  },
  {
    name: "Workout",
    image: workout,
    description: "A period of physical exercise or training focused on performance.",
  },
  {
    name: "Fitness",
    image: workout_fitness,
    description: "Strength training exercises specifically designed for beginners.",
  },
  {
    name: "Boxing",
    image: boxing,
    description: "A combat sport and martial art for agility and power.",
  },
  {
    name: "TRX",
    image: trx,
    description: "Suspension training that utilizes bodyweight equipment.",
  },
  {
    name: "BodyBuilding",
    image: Body,
    description: "Exercises designed to enhance development and promote fitness.",
  },
  {
    name: "Barre",
    image: BARRE,
    description: "Low-impact movements inspired by classical ballet.",
  },
  {
    name: "Running",
    image: running,
    description: "Competition and high-intensity training for endurance.",
  },
];
