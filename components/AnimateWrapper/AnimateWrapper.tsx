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
import ImageSecOne from "../ImageSecOne/ImageSecOne";
import ImageSecTwo from "../ImageSecTwo/ImageSecTwo";

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
      opacity: 0,
      y: "-100vh"
    });
    gsap.set(".mbl_img4", {
      right: "60px",
      bottom: "290px",
      opacity: 0,
      y: "-100vh"
    });

    gsap.set(".mbl_img1", {
      left: "-100px",
      top: "170px",
      opacity: 0,
      y: "-100vh"
    });

    gsap.set(".mbl_img2", {
      left: "60px",
      bottom: "230px",
      opacity: 0,
      y: "-100vh"
    });

    gsap.set(".switch_list1", {
      y: "0",
      opacity: 1
    });
    gsap.set(".switch_list2", {
      y: "100px",
      opacity: 0
    });
    gsap.set(".switch_list3", {
      y: "100px",
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

    gsap.set([".img3", ".img4", ".img6", ".img8"], {
      y: "100vh"
    });

    gsap.set([".img9", ".img10", ".img6", ".img11"], {
      y: "100vh"
    });

    gsap.set(".roll_txt_heading h3", {
      opacity: 0
    });

    gsap.set(".roll_txt_heading h3:nth-child(2)", {
      y: "50px"
    });
    gsap.set(".roll_txt_heading h3:nth-child(3)", {
      y: "50px"
    });
    gsap.set(".roll_txt_heading h3:nth-child(4)", {
      y: "50px"
    });

    gsap.set(".roll_txt_content p", {
      opacity: 0
    });

    gsap.set(".roll_txt_content p:nth-child(2)", {
      y: "150px"
    });
    gsap.set(".roll_txt_content p:nth-child(3)", {
      y: "150px"
    });
    gsap.set(".roll_txt_content p:nth-child(4)", {
      y: "150px"
    });

    gsap.set([".gallery1", ".gallery2", ".gallery3"], {
      y: "100vh"
    });

    gsap.set(".gallery4", {
      opacity: 0
    });

    gsap.set([".design_txt3 img", ".design_txt1 img"], {
      x: "-100%"
    });
    gsap.set(".design_txt2 img", {
      x: "100%"
    });

    gsap.set(".teamGrid", {
      x: "100%",
      opacity: 0
    });

    gsap.set(".team_sec_cmn_heading p", {
      y: "200px"
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
        ".about_heading",
        {
          y: "-50vh"
        },
        "+=.25"
      )
      .to(
        ".about_heading_stack",
        {
          y: "-50vh"
        },
        "-=.95"
      )

      .to(
        [".img2", ".img7", ".img5", ".img1"],
        {
          y: "-100vh"
        },
        "-=.9"
      )

      .to(
        ".about_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=.95"
      )
      .to(
        ".image_one_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "-=1"
      )
      .to(
        ".img3",
        {
          y: "0"
        },
        "-=.9"
      )
      .to(
        ".img4",
        {
          y: "0"
        },
        "-=.9"
      )
      .to(
        ".img6",
        {
          y: 0
        },
        "-=.9"
      )
      .to(
        ".img8",
        {
          y: 0
        },
        "-=.9"
      )
      .to(
        ".image_one_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "+=1"
      )
      .to(
        ".image_two_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "-=1"
      )
      .to(
        ".img3",
        {
          y: "-100vh"
        },
        "-=.9"
      )
      .to(
        ".img4",
        {
          y: "-100vh"
        },
        "-=.9"
      )
      .to(
        ".img6",
        {
          y: "-40vh"
        },
        "-=.9"
      )
      .to(
        ".img8",
        {
          y: "-100vh"
        },
        "-=.9"
      )
      .to(
        ".img9",
        {
          y: "25vh"
        },
        "-=1"
      )
      .to(
        ".img10",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".img11",
        {
          y: "0"
        },
        "-=1"
      )

      .to(
        ".we_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=1"
      )
      .to(
        ".image_two_sec",
        {
          opacity: 0,
          pointerEvents: "none"
        },
        "-=1"
      )

      .to(
        ".img6",
        {
          y: "-100vh"
        },
        "-=1"
      )
      .to(
        ".img9",
        {
          y: "-100vh"
        },
        "-=1"
      )
      .to(
        ".img10",
        {
          y: "-100vh"
        },
        "-=1"
      )
      .to(
        ".img11",
        {
          y: "-100vh"
        },
        "-=1"
      )
      .to(
        ".weBck_lyr",
        {
          opacity: 1
        },
        "-=.25"
      )

      .to(
        ".design_txt3 img",
        {
          y: "0",
          x: "0"
        },
        "+=.5"
      )
      .to(
        ".design_txt2 img",
        {
          y: "0",
          x: "0%"
        },
        "+=.5"
      )
      .to(
        ".design_txt3 img",
        {
          y: "0",
          x: "50%"
        },
        "-=1"
      )
      .to(
        ".design_txt1 img",
        {
          y: "0",
          x: "0"
        },
        "+=.5"
      )
      .to(
        ".design_txt2 img",
        {
          y: "0",
          x: "-25%"
        },
        "-=1"
      )
      .to(
        ".design_txt1 img",
        {
          y: "0",
          x: "50%"
        },
        "+=.5"
      )
      .to(
        ".we_sec",
        {
          y: "-20vh"
        },
        "-=1"
      )
      .to(
        ".service_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "+=1"
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
        "-=.25"
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
        "+=1"
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
          opacity: 1,
          y: "0"
        },
        "+=1"
      )
      .to(
        ".switch_list1",
        {
          opacity: 0,
          y: "-100px"
        },
        "-=1"
      )
      .to(
        ".switch_list2",
        {
          opacity: 1,
          y: "0"
        },
        "-=1"
      )
      .to(
        ".mbl_img3",
        {
          left: "50%",
          transform: "translateX(-50%)",
          top: "65px"
        },
        "+=1"
      )
      .to(
        ".mbl_img1",
        {
          left: "50%",
          transform: "translateX(-50%)",
          top: "180px"
        },
        "-=1"
      )
      .to(
        ".mbl_img2",
        {
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "260px"
        },
        "-=1"
      )
      .to(
        ".mbl_img4",
        {
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "320px"
        },
        "-=1"
      )
      .to(
        ".switch_list2",
        {
          opacity: 0,
          y: "-100px"
        },
        "-=1"
      )
      .to(
        ".switch_list3",
        {
          opacity: 1,
          y: "0"
        },
        "-=1"
      )
      .to(
        ".why_sec",
        {
          opacity: 0,
          pointerEvents: "none",
          y: "-100vh"
        },
        "+=1"
      )
      .to(
        ".portfolio_sec",
        {
          opacity: 1,
          pointerEvents: "inherit"
        },
        "-=1"
      )

      .to(
        ".gallery1",
        {
          y: "0"
        },
        "+=1"
      )
      .to(
        ".gallery2",
        {
          y: "0"
        },
        "+=.5"
      )
      .to(
        ".gallery3",
        {
          y: "0"
        },
        "+=.5"
      )
      .to(
        ".gallery1",
        {
          x: "200%"
        },
        "+=.5"
      )
      .to(
        ".gallery2",
        {
          x: "100%"
        },
        "-=.85"
      )
      .to(
        ".gallery4",
        {
          opacity: 1
        },
        "-=1"
      )

      .to(
        ".roll_txt_heading h3:nth-child(1)",
        {
          opacity: 0.25
        },
        "+=.5"
      )
      .to(
        ".roll_txt_content p",
        {
          opacity: 0.25
        },
        "-=1"
      )
      .to(
        ".roll_txt_heading h3:nth-child(1)",
        {
          y: "-50px"
        },
        "+=.5"
      )
      .to(
        ".roll_txt_heading h3:nth-child(2)",
        {
          y: "0",
          opacity: 0.5
        },
        "-=.5"
      )
      .to(
        ".roll_txt_content p",
        {
          opacity: 0.5
        },
        "-=1"
      )
      .to(
        ".roll_txt_heading h3:nth-child(2)",
        {
          y: "-50px"
        },
        "+=.5"
      )
      .to(
        ".roll_txt_heading h3:nth-child(3)",
        {
          y: "0",
          opacity: 0.75
        },
        "-=.5"
      )
      .to(
        ".roll_txt_content p",
        {
          opacity: 0.75
        },
        "-=1"
      )
      .to(
        ".roll_txt_heading h3:nth-child(3)",
        {
          y: "-50px"
        },
        "+=.5"
      )
      .to(
        ".roll_txt_heading h3:nth-child(4)",
        {
          y: "0",
          opacity: 1
        },
        "-=.5"
      )
      .to(
        [
          ".roll_txt_content p",
          ".roll_txt_heading h3:nth-child(3)",
          ".roll_txt_heading h3:nth-child(2)",
          ".roll_txt_heading h3:nth-child(1)"
        ],
        {
          opacity: 1
        },
        "-=1"
      )

      .to(
        ".roll_txt_heading h3:nth-child(4)",
        {
          y: "50px",
          opacity: 1
        },
        "+=.5"
      )
      .to(
        ".roll_txt_heading h3:nth-child(3)",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".roll_txt_content p:nth-child(1)",
        {
          y: "-150px"
        },
        "-=1"
      )
      .to(
        ".roll_txt_content p:nth-child(2)",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".gallery1",
        {
          y: "-100vh"
        },
        "-=1"
      )

      .to(
        ".roll_txt_heading h3:nth-child(3)",
        {
          y: "50px",
          opacity: 1
        },
        "+=.5"
      )
      .to(
        ".roll_txt_heading h3:nth-child(2)",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".roll_txt_content p:nth-child(2)",
        {
          y: "-150px"
        },
        "-=1"
      )
      .to(
        ".roll_txt_content p:nth-child(3)",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".gallery2",
        {
          y: "-100vh"
        },
        "-=1"
      )

      .to(
        ".roll_txt_heading h3:nth-child(2)",
        {
          y: "50px",
          opacity: 1
        },
        "+=.5"
      )
      .to(
        ".roll_txt_heading h3:nth-child(1)",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".roll_txt_content p:nth-child(3)",
        {
          y: "-150px"
        },
        "-=1"
      )
      .to(
        ".roll_txt_content p:nth-child(4)",
        {
          y: "0"
        },
        "-=1"
      )
      .to(
        ".gallery3",
        {
          y: "-100vh"
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
        ".teamGrid",
        {
          x: "0",
          opacity: 1
        },
        "+=.25"
      )
      .to(
        ".team_sec_cmn_heading p",
        {
          y: "0"
        },
        "+=.5"
      )
      .to(
        ".teamCard:nth-child(even)",
        {
          marginTop: "40px"
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
        "-=1"
      )

      .to(".testimonial_sec", {}, "+=1")
      .to(".testimonial_sec", {}, "+=1")
      .to(".testimonial_sec", {}, "+=1");

    ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "850%",
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
      <ImageSecOne className="image_one_sec" />
      <ImageSecTwo className="image_two_sec" />
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
