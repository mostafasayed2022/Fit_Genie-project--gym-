import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TESTIMONIALS } from '../../data/constants';

const TestimonialsSlider: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="testimonials-swiper !pb-16"
      >
        {TESTIMONIALS.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="glass-card h-full flex flex-col items-center text-center p-8 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-500">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl leading-none">
                  "
                </div>
              </div>
              <p className="text-white/80 italic mb-6 leading-relaxed flex-grow">
                {testimonial.text}
              </p>
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">
                {testimonial.author}
              </h4>
              <p className="text-primary text-xs font-bold tracking-widest mt-1">HAPPY CLIENT</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          @apply bg-white/20 opacity-100 w-3 h-3 transition-all duration-300;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          @apply bg-primary w-8 rounded-full;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlider;
