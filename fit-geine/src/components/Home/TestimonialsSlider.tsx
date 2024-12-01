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
    text: "Great service and friendly staff!",
    author: "John Doe.",
  },
  {
    image: img2,
    id: 2,
    text: "I love the workout plans, they are so effective!",
    author: "Jane Smith.",
  },

  {
    image: img3,
    id: 3,
    text: "Amazing experience, highly recommended!",
    author: "Bob Johnson.",
  },

  {
    image: img4,
    id: 4,
    text: "The best gym I have ever been to.",
    author: "Alice Brown.",
  },

  {
    image: img5,
    id: 5,
    text: "I feel healthier and stronger thanks to their programs.",
    author: "Diana Clark.",
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
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={3} 
      breakpoints={{
        0: { 
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: { 
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: { 
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: { 
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: { 
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >

{testimonials.map((testimonial) => (
  <SwiperSlide key={testimonial.id} >
    <div className="testimonial">
      <img 
        src={testimonial.image} 
        className='testimonial-img' 
        alt={`Testimonial from ${testimonial.author}`} 
        loading="lazy" 
      />
      <p className="testimonial-text">{testimonial.text}</p>
      <p className="testimonial-author">- {testimonial.author}</p>
    </div>
  </SwiperSlide>
))}

    </Swiper>

  );
};

export default TestimonialsSlider;
