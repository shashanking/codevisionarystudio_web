import { Box, styled } from "@mui/material";
import React, { useRef } from "react";
import AboutSection from "@/components/AboutSection/AboutSection";
import BannerSection from "@/components/BannerSection/BannerSection";
import ProtfolioSection from "@/components/ProtfolioSection/ProtfolioSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import WeSection from "@/components/WeSection/WeSection";
import WhySection from "@/components/WhySection/WhySection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const AnimateWrapperStyle = styled(Box)`
  position: relative;
  height: 100vh;
`;

gsap.registerPlugin(ScrollTrigger);

const AnimateWrapper = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // set elemnts
    gsap.set(".cmn_gap", {
      opacity: 0,
      pointerEvents: "none"
    });
    gsap.set(".cmn_heading", {
      y: "-100vh",
      opacity: 0
    });
    gsap.set(".gallery", {
      y: "100vh",
      opacity: 0
    });
    gsap.set(".textAlignLeft h2", {
      x: "-30vw",
      opacity: 0
    });
    gsap.set(".textAlignLeft p", {
      y: "10vh",
      opacity: 0
    });
    gsap.set(".mbl_img3", {
      right: "-45px",
      top: "-40px",
      opacity: 0
    });
    gsap.set(".mbl_img4", {
      right: "60px",
      bottom: "290px",
      opacity: 0
    });

    gsap.set(".mbl_img1", {
      left: "-100px",
      top: "170px",
      opacity: 0
    });

    gsap.set(".mbl_img2", {
      left: "60px",
      bottom: "230px",
      opacity: 0
    });

    gsap.set(".abt_text_rgt", {
      y: "30vh",
      opacity: 0
    });
    gsap.set(".img1", {
      y: "30vh",
      x: "100vw"
    });
    gsap.set(".img2", {
      y: "-30vh",
      x: "-100vw"
    });
    gsap.set(".img5", {
      y: "50vh",
      x: "-100vw"
    });
    gsap.set(".img7", {
      y: "-30vh",
      x: "100vw"
    });

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power1.inOut"
      }
    });

    tl.to(
      ".about_sec",
      {
        opacity: 1,
        pointerEvents: "inherit"
      },
      "-=.5"
    )
      .to(
        ".banner_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=1"
      )

      .to(
        ".abt_text_rgt",
        {
          y: 0,
          opacity: 1
        },
        "+=.25"
      )
      .to(
        ".img2",
        {
          y: 0,
          x: 0
        },
        "-=.5"
      )
      .to(
        ".img7",
        {
          y: 0,
          x: 0
        },
        "-=1"
      )
      .to(
        ".img5",
        {
          y: 0,
          x: 0
        },
        "-=1"
      )
      .to(
        ".img1",
        {
          y: 0,
          x: 0
        },
        "-=1"
      )
      .to(
        ".about_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "+=.25"
      )
      .to(
        ".we_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "-=.25"
      )
      .to(
        ".weBck_lyr",
        {
          opacity: 1
        },
        "-=1"
      )
      .to(
        ".service_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=.25"
      )
      .to(
        ".we_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=1"
      )
      .to(
        ".cmn_heading",
        {
          y: 0,
          opacity: 1
        },
        "-=1"
      )
      .to(
        ".gallery",
        {
          y: 0,
          opacity: 1
        },
        "-=1"
      )
      .to(
        ".why_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=.5"
      )
      .to(
        ".service_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=1"
      )
      .to(
        ".textAlignLeft h2",
        {
          x: 0,
          opacity: 1
        },
        "-=.5"
      )
      .to(
        ".textAlignLeft p",
        {
          y: 0,
          opacity: 1
        },
        "-=1"
      )
      .to(
        [".mbl_img1", ".mbl_img2", ".mbl_img3", ".mbl_img4"],
        {
          opacity: 1
        },
        "-=.5"
      )
      .to(
        ".portfolio_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=1"
      )
      .to(
        ".why_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=1"
      )
      .to(
        ".team_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=1"
      )
      .to(
        ".portfolio_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=1"
      )
      .to(
        ".testimonial_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=1"
      )
      .to(
        ".team_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=0.2"
      );

    ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "350%",
      scrub: 2,
      pin: true,
      markers: false,
      animation: tl
    });
  });

  return (
    <AnimateWrapperStyle ref={mainRef}>
      <BannerSection className="banner_sec" />
      <AboutSection className="about_sec" />
      <WeSection className="we_sec" />
      <ServiceSection className="service_sec" />
      <WhySection className="why_sec" />
      <ProtfolioSection className="portfolio_sec" />
      <TeamSection className="team_sec" />
      <TestimonialSection className="testimonial_sec" />
    </AnimateWrapperStyle>
  );
};

export default AnimateWrapper;
