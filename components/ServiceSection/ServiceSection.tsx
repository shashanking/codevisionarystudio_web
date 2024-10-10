import assest from "@/json/assest";
import { ServiceSectionWrapper } from "@/styles/StyledComponents/ServiceSectionWrapper";
import {
  Box,
  BoxProps,
  Button,
  Container,
  Grid,
  Typography
} from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";
import React from "react";
import { earth_orbiter, montserrat } from "@/themes/_muiTheme";

const ServiceSection: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <>
      <div className="serviceSec__desktopWrapper">
        <ServiceSectionWrapper
          className={clsx("cmn_gap", className)}
          {...props}
        >
          <Container fixed>
            <CommonHeading
              sectionNameDots
              sectionName="Our services"
              title="Our Expertise"
              description="Discover the comprehensive range of IT services we offer at Code Visionary Studio. From web design and app development to branding and digital marketing, our expert team delivers innovative solutions that drive your business forward."
              className="cmn_heading"
            />
            <Box className="gallery">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box className="serviceBox">
                    <Box className="serviceBox_cnt">
                      <Typography variant="h3">
                        Website Design & Development
                      </Typography>
                      <Typography variant="body1">
                        Creating visually stunning and highly functional
                        websites that elevate your online presence. Our expert
                        team blends creativity with technical expertise to
                        deliver custom web solutions tailored to your unique
                        business needs.
                      </Typography>

                      <Button disableRipple className="whitbck_btn">
                        Learn More
                      </Button>
                    </Box>
                    <Image
                      src={assest.web_design}
                      width={492}
                      height={331}
                      alt="web application"
                      className="web_img"
                    />
                    <Image
                      src={assest.web_design_ring}
                      width={388}
                      height={331}
                      alt="web application ring"
                      className="webRing_img"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={3}>
                  <Box className="serviceBox">
                    <Typography variant="h3">
                      Mobile Application Design & Development
                    </Typography>
                    <Image
                      src={assest.mobile_app_dev}
                      width={274}
                      height={242}
                      alt="Mobile Application Design & Development"
                      className="mobile_img"
                    />
                    <Image
                      src={assest.mobile_app_dev_block_bg}
                      width={382}
                      height={225}
                      alt="Mobile Application Design & Development Block bg"
                      className="mobileRing_img"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={3}>
                  <Box className="serviceBox">
                    <Typography variant="h3">Branding</Typography>
                    <Image
                      src={assest.branding}
                      width={286}
                      height={258}
                      alt="Branding"
                      className="mobile_img"
                    />
                    <Image
                      src={assest.branding_block_ring}
                      width={363}
                      height={199}
                      alt="Branding Block bg"
                      className="mobileRing_img"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box className="serviceBox">
                    <Typography variant="h3" sx={{ pt: 8, px: 3 }}>
                      Digital Marketing
                    </Typography>
                    <Image
                      src={assest.digital_marketing}
                      width={517}
                      height={331}
                      alt="Digital Marketing"
                      className="digital_img"
                    />
                    <Image
                      src={assest.digital_marketing_ring}
                      width={299}
                      height={409}
                      alt="Digital Marketing ring"
                      className="digitalRing_img"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box className="serviceBox">
                    <Typography variant="h3">UI/UX Design</Typography>
                    <Image
                      src={assest.ui_ux}
                      width={518}
                      height={331}
                      alt="UI/UX Design"
                      className="digital_img"
                    />
                    <Image
                      src={assest.ui_ux_ring}
                      width={518}
                      height={276}
                      alt="UI/UX ring"
                      className="uiRing_img"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box className="serviceBox">
                    <Typography variant="h3">Web Applications</Typography>
                    <Image
                      src={assest.web_application}
                      width={517}
                      height={312}
                      alt="Web Applications"
                      className="digital_img"
                    />
                    <Image
                      src={assest.web_applications_ring}
                      width={517}
                      height={288}
                      alt="Web Applications ring"
                      className="uiRing_img"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ServiceSectionWrapper>
      </div>
      <ServiceSectionMobile />
    </>
  );
};

export default ServiceSection;

const ServiceSectionMobile: React.FC<{}> = () => {
  return (
    <>
      <div className="serviceSection__mobileMainOuterWrapper">
        <Image src="assets/images/ServiceBg.png" alt="service-bg" fill />
        <div className="serviceSection__mainContentOuterWrapper">
          <div className="serviceSection__mainContentInnerWrapper">
            <div className="serviceSection__smallTagWrapper">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="2.66675"
                    width="9.33333"
                    height="9.33333"
                    fill="white"
                  />
                  <rect
                    opacity="0.3"
                    x="2.66669"
                    width="9.33333"
                    height="9.33333"
                    fill="white"
                  />
                </svg>
              </span>
              <h4
                style={{
                  fontFamily: earth_orbiter.style.fontFamily
                }}
              >
                Our Services
              </h4>
            </div>
            <h3
              style={{
                fontFamily: earth_orbiter.style.fontFamily
              }}
              className="servceSection__ourExper"
            >
              Our Expertise
            </h3>
            <p
              style={{
                fontFamily: montserrat.style.fontFamily
              }}
              className="serviceSection__smallPara"
            >
              Discover the comprehensive range of IT services we offer at Code
              Visionary Studio. From web design and app development to branding
              and digital marketing, our expert team delivers innovative
              solutions that drive your business forward.
            </p>

            <div className="serviceSection__mainCardsWrapper">
              <div className="serviceSection__DDMainWrapper">
                <h3
                  style={{
                    fontFamily: montserrat.style.fontFamily
                  }}
                >
                  Website Design & Development
                </h3>
                <p
                  style={{
                    fontFamily: montserrat.style.fontFamily
                  }}
                >
                  Creating visually stunning and highly functional websites that
                  elevate your online presence. Our expert team blends
                  creativity with technical expertise to deliver custom web
                  solutions tailored to your unique business needs.
                </p>
                <div className="serviceSection__BTNMockupWrapper">
                  <button>Learn More</button>
                  <Image
                    loading="lazy"
                    src="assets/images/ServiceImg1.png"
                    alt="service-img1"
                    height={150}
                    width={150}
                  />
                </div>
              </div>

              <div className="serviceSection__serviceCardMainWrapper">
                <div className="serviceCard__mainWrapper">
                  <h3
                    style={{
                      fontFamily: montserrat.style.fontFamily
                    }}
                  >
                    Mobile Application Design & Development
                  </h3>

                  <Image
                    loading="lazy"
                    src="assets/images/ServiceImg2.png"
                    alt="service-img1"
                    height={120}
                    width={120}
                  />
                </div>
                <div className="serviceCard__mainWrapper">
                  <h3
                    style={{
                      fontFamily: montserrat.style.fontFamily
                    }}
                  >
                    Branding
                  </h3>

                  <Image
                    loading="lazy"
                    src="assets/images/ServiceImg3.png"
                    alt="service-img1"
                    height={120}
                    width={120}
                  />
                </div>
                <div className="serviceCard__mainWrapper">
                  <h3
                    style={{
                      fontFamily: montserrat.style.fontFamily
                    }}
                  >
                    Digital Marketing
                  </h3>

                  <Image
                    loading="lazy"
                    src="assets/images/ServiceImg2.png"
                    alt="service-img1"
                    height={120}
                    width={120}
                  />
                </div>
                <div className="serviceCard__mainWrapper">
                  <h3
                    style={{
                      fontFamily: montserrat.style.fontFamily
                    }}
                  >
                    UI/UX Design
                  </h3>

                  <Image
                    loading="lazy"
                    src="assets/images/ServiceImg2.png"
                    alt="service-img1"
                    height={120}
                    width={120}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
