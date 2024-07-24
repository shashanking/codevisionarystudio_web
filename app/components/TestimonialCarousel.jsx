"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        spaceBetween={0}
        slidesPerView="auto"
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        <SwiperSlide>
          {" "}
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
