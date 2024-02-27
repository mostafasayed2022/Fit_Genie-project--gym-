import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Grateful email messages… Thank you so much for a job well done',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Social media love… You guys are the best! Keep up the great work!',
  },
  
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Happy handwritten thank you note.. I just wanted to let you know that its been great working with you.',
  },
  
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Gushing in-person gratitude… You,ve been so helpful.',
  },
  
    {
    id: 2,
    name: 'Jane Smith',
    text: 'He has excellent testimonials wherever he has been',
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
  
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div className='terminals' key={testimonial.id}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
