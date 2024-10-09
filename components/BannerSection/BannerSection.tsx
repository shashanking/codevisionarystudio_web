import { BannerWrapper } from "@/styles/StyledComponents/BannerWrapper";
import { earth_orbiter } from "@/themes/_muiTheme";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { Container, Typography } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const BannerSection: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <>
      <div className="desktopViewMainWrapper">
        <BannerWrapper className={clsx("", className)} {...props} {...props}>
          <Box className="iframeWrapper">
            <iframe
              src="https://my.spline.design/webbg-2027e265eca50f4533c337593fa82e2a"
              frameBorder="0"
              width="100%"
              height="100%"
              title="Background Animation"
            ></iframe>
          </Box>

          <Container fixed>
            <Box className="contentWrapper">
              <Box className="content_box">
                <motion.div
                  initial={{
                    y: -100,
                    transitionDuration: "3000",
                    transitionDelay: "10000"
                  }}
                  whileInView={{ y: 0 }}
                >
                  <Typography variant="h1">
                    Transforming Ideas into<br></br>
                    <span className="gradient_text">Digital Reality</span>
                  </Typography>
                </motion.div>
                <Typography variant="body1">
                  Web Design, App Development, Branding & Marketing Services
                </Typography>
              </Box>
            </Box>
            <Box className="buttonWrapper">
              <CustomButtonPrimary color="secondary" variant="contained">
                Get Started
              </CustomButtonPrimary>
            </Box>
          </Container>
        </BannerWrapper>
      </div>
      <HeroMobileView />
    </>
  );
};

export default BannerSection;

const HeroMobileView = () => {
  return (
    <>
      <div className="mobileViewMainWrapper">
        <div className="mobileViewFrameWrapper">
          <iframe
            src="https://my.spline.design/webbg-2027e265eca50f4533c337593fa82e2a"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Background Animation"
          ></iframe>
        </div>
        <div className="mobileViewContent__mainWrapper">
          <div className="contentWrapper">
            <h1 style={{
                    fontFamily:earth_orbiter.style.fontFamily
                  }} className="mobileViewContent__mainHeading">
              Transforming Ideas into
            </h1>
            <h2 style={{
                    fontFamily:earth_orbiter.style.fontFamily
                  }} className="mobileViewContent__gradientHeading gradient_text">Digital Reality</h2>
            <button className="mobileViewContent__heroBTN">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
