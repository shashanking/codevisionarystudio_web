import { TestimonialCarouselWrapper } from "@/styles/StyledComponents/TestimonialSectionWrapper";

import { testimonialItem } from "@/json/mock/demo.mock";
import SliderNextArrow from "@/ui/Icons/SliderNextArrow";
import SliderPrevArrow from "@/ui/Icons/SliderPrevArrow";
import { Box, Button } from "@mui/material";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // useEffect(() => {
  //   const swiperInstance = document.querySelector(".swiper-container").swiper;
  //   swiperInstance.navigation.init();
  //   swiperInstance.navigation.update();
  // }, []);
  return (
    <TestimonialCarouselWrapper>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop
        centeredSlides={true}
        modules={[Navigation, EffectCards, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          enabled: true
        }}
        cardsEffect={{
          rotate: false,
          perSlideOffset: 20,
          perSlideRotate: 0,
          slideShadows: false
        }}
      >
        {testimonialItem.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className="testi_arw">
        <Button ref={prevRef} disableRipple className="slider_arrow prev_arrow">
          <SliderPrevArrow />
        </Button>
        <Button ref={nextRef} disableRipple className="slider_arrow next_arrow">
          <SliderNextArrow />
        </Button>
      </Box>
    </TestimonialCarouselWrapper>
  );
};

export default TestimonialCarousel;
