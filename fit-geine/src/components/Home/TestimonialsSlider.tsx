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





const testimonials = [
  {
    image: 'https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png',
    id: 1,
    text: "I've never felt stronger and more confident. The trainers here are amazing!",
    author: "Jessica T.",
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png',
    id: 2,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: 'https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png',
    id: 3,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: 'https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png',
    id: 4,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: 'https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png',
    id: 5,
    text: "The classes are so much fun and the atmosphere is motivating. Love it!",
    author: "Michael S.",
  },
  
  {
    image: 'https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png',
    id: 6,
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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:3000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.id} >
        <div className="testimonial">
          <img src={testimonial.image} className='testimonial-img' />
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-author">- {testimonial.author}</p>
        </div>
      </SwiperSlide>
    ))}
  
  </Swiper>

  );
};

export default TestimonialsSlider;
