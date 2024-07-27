"use client";
import React, { useMemo, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { config } from "react-spring";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import Carousel from "react-spring-3d-carousel";
const uuidv4 = () => {
  return Date.now() + "/" + Math.random() * 100;
};

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};
const TestimonialCarousel = () => {
  const [goToSlideIndex, setGoToSlideIndex] = useState(0);
  const slides = useMemo(() => {
    return [
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="1" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="2" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="3" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="4" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="5" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="6" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="7" />,
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/804/?random" alt="8" />,
      },
    ].map((slide, index) => {
      return { ...slide, onClick: () => setGoToSlideIndex(index) };
    });
  }, []);

  const positionsRef = useRef({
    xDown: null,
    yDown: null,
  });

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    positionsRef.current = {
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    };
  };

  const handleTouchMove = (evt) => {
    if (!positionsRef.current.xDown && !positionsRef.current.yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = positionsRef.current.xDown - xUp;
    let yDiff = positionsRef.current.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        positionsRef.current = {
          xDown: null,
          yDown: null,
        };
        setGoToSlideIndex((prevIndex) => prevIndex + 1);
      } else {
        /* right swipe */

        setGoToSlideIndex((prevIndex) => prevIndex - 1);
        positionsRef.current = {
          xDown: null,
          yDown: null,
        };
      }
    }
  };

  return (
    <div
      className="testimonial-carousel"
      style={{
        width: "80%",
        height: "500px",
        margin: "0 auto",
        userSelect: "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlideIndex}
        offsetRadius={5}
        showNavigation={false}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default TestimonialCarousel;
