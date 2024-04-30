import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// images
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";

const testimonials = [
  {
    image: img1,
    id: 1,
    text: "I've never felt stronger and more confident. The trainers here are amazing!",
    author: "Jessica T.",
  },
  {
    image: img2,
    id: 2,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: img3,
    id: 3,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: img4,
    id: 4,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: img5,
    id: 5,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.id} >
        <div className="testimonial">
          <img src={testimonial.image} className='testimonial-img' alt=''  />
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-author">- {testimonial.author}</p>
        </div>
      </SwiperSlide>
    ))}
  
  </Swiper>

  );
};

export default TestimonialsSlider;
