import { AboutSectionWrapper } from "@/styles/StyledComponents/AboutSectionWrapper";
import { Box, BoxProps, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";
import Image from "next/image";
import assest from "@/json/assest";
import { earth_orbiter, montserrat } from "@/themes/_muiTheme";

const AboutSection: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <>
      <div className="aboutSection__mainWrapperDesktop">
        <AboutSectionWrapper className={clsx("cmn_gap", className)} {...props}>
          <Container fixed>
            <CommonHeading
              textAlignLeft
              className="about_heading"
              sectionName="About us"
              sectionNameDots
            />
            <Grid container spacing={3} className="about_heading_stack">
              <Grid item md={5.1} xs={12}>
                <Box className="abt_text">
                  <Typography variant="h2">
                    WE are Code Visionary Studios
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6.9} xs={12}>
                <Box className="abt_text_rgt">
                  <Typography>
                    At Code Visionary Studios, we combine creativity,
                    technology, and strategic thinking to craft unique digital
                    experiences. Our talented team is committed to delivering
                    high-quality web design, app development, branding, and
                    marketing services tailored to meet your specific needs.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Stack direction="row" flexWrap="wrap" className="about_gallery">
              <Image
                src={assest?.img2}
                alt="img2"
                width={634}
                height={357}
                className="img2 cmn_img"
              />
              <Image
                src={assest?.img7}
                alt="img7"
                width={488}
                height={275}
                className="img7 cmn_img"
              />
              <Image
                src={assest?.img5}
                alt="img5"
                width={426}
                height={291}
                className="img5 cmn_img"
              />
              <Image
                src={assest?.img1}
                alt="img1"
                width={488}
                height={275}
                className="img1 cmn_img"
              />
            </Stack>
          </Container>
        </AboutSectionWrapper>
      </div>
      <AboutSectionMobile />
    </>
  );
};

export default AboutSection;
const AboutSectionMobile: React.FC<{}> = () => {
  return (
    <>
      <div className="aboutSection__mainWrapperMobile">
        <div className="aboutSection__innerMainWrapper">
          <div className="aboutSection__bgWrapper">
            <svg
              width="390"
              height="622"
              viewBox="0 0 390 622"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2" filter="url(#filter0_f_580_44)">
                <circle cx="195" cy="311" r="132" fill="#007FA9" />
              </g>
              <defs>
                <filter
                  id="filter0_f_580_44"
                  x="-116"
                  y="0"
                  width="622"
                  height="622"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="89.5"
                    result="effect1_foregroundBlur_580_44"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="aboutSection__mainContentWrapper">
            <div className="aboutSection__innerMainContentWrapper">
              <div className="aboutSection__smallTitleAndTitleWrapper">
                <div className="aboutSection__smallTitleWrapper">
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
                    About us
                  </h4>
                </div>

                <h3
                  style={{
                    fontFamily: earth_orbiter.style.fontFamily
                  }}
                  className="aboutSection__Title"
                >
                  WE are Code Visionary Studios
                </h3>
                <p
                  style={{
                    fontFamily: montserrat.style.fontFamily
                  }}
                  className="aboutSection__smallInfo"
                >
                  At Code Visionary Studios, we combine creativity, technology,
                  and strategic thinking to craft unique digital experiences.
                  Our talented team is committed to delivering high-quality web
                  design, app development, branding, and marketing services
                  tailored to meet your specific needs.
                </p>
              </div>

              <div className="aboutSection__projectsImagesMainWrapper">
                <div className="aboutSection__projectImageWrapper">
                  <img src={assest?.img2} alt="project-images" />
                </div>
                <div className="aboutSection__projectImageWrapper">
                  <Image
                    src={assest?.img7}
                    height={250}
                    width={250}
                    alt="project-images"
                  />
                </div>
                <div className="aboutSection__projectImageWrapper">
                  <Image
                    src={assest?.img5}
                    height={250}
                    width={250}
                    alt="project-images"
                  />
                </div>
                <div className="aboutSection__projectImageWrapper">
                  <Image
                    src={assest?.img1}
                    height={250}
                    width={250}
                    alt="project-images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second part start */}
        <div className="aboutSectionPartTwo__innerMainWrapper">
          <div className="aboutSection__bgWrapper">
            <svg
              width="390"
              height="622"
              viewBox="0 0 390 622"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2" filter="url(#filter0_f_580_44)">
                <circle cx="195" cy="311" r="132" fill="#007FA9" />
              </g>
              <defs>
                <filter
                  id="filter0_f_580_44"
                  x="-116"
                  y="0"
                  width="622"
                  height="622"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="89.5"
                    result="effect1_foregroundBlur_580_44"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="aboutSection__mainContentWrapper">
            <div className="aboutSection__innerMainContentWrapper">
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img10} alt="project-images" />
              </div>
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img3} alt="project-images" />
              </div>
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img4} alt="project-images" />
              </div>
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img6} alt="project-images" />
              </div>
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img9} alt="project-images" />
              </div> 
               <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img8} alt="project-images" />
              </div>
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img5} alt="project-images" />
              </div>
              <div className="aboutSection__projectImageWrapper">
                <img src={assest?.img2} alt="project-images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
