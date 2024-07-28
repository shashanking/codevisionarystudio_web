"use client";
import { useMemo, useRef, useState } from "react";
import { config } from "react-spring";
import { TestimonialCard } from "./TestimonialCard";
import dynamic from "next/dynamic";
const Carousel = dynamic(
  //@ts-ignore
  async () => (await import("react-spring-3d-carousel")).default,
  {
    ssr: false,
  }
);

const uuidv4 = () => {
  return Date.now() + "/" + Math.random() * 100;
};

const getTouches = (evt: React.TouchEvent<HTMLDivElement>) => {
  return (
    //@ts-ignore
    evt.touches || evt.originalEvent.touches
  );
};
const TestimonialCarousel = () => {
  const [goToSlideIndex, setGoToSlideIndex] = useState(0);
  const slides = useMemo(() => {
    return [
      {
        key: uuidv4(),
        content: <TestimonialCard />,
      },
      {
        key: uuidv4(),
        content: <TestimonialCard />,
      },
      {
        key: uuidv4(),
        content: <TestimonialCard />,
      },
      {
        key: uuidv4(),
        content: <TestimonialCard />,
      },
      {
        key: uuidv4(),
        content: <TestimonialCard />,
      },
      {
        key: uuidv4(),
        content: <TestimonialCard />,
      },
    ].map((slide, index) => {
      return { ...slide, onClick: () => setGoToSlideIndex(index) };
    });
  }, []);

  const positionsRef = useRef<{ xDown: number | null; yDown: number | null }>({
    xDown: null,
    yDown: null,
  });

  const handleTouchStart = (evt: React.TouchEvent<HTMLDivElement>) => {
    const firstTouch = getTouches(evt)[0];
    positionsRef.current = {
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    };
  };

  const handleTouchMove = (evt: React.TouchEvent<HTMLDivElement>) => {
    const xDown = positionsRef.current.xDown;
    const yDown = positionsRef.current.yDown;
    if (!xDown && !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = (xDown || 0) - xUp;
    let yDiff = (yDown || 0) - yUp;
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
        goToSlideDelay={1}
      />
    </div>
  );
};

export default TestimonialCarousel;
