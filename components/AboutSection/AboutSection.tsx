import { AboutSectionWrapper } from "@/styles/StyledComponents/AboutSectionWrapper";
import { Box, BoxProps, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";
import Image from "next/image";
import assest from "@/json/assest";

const AboutSection: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <AboutSectionWrapper className={clsx("cmn_gap", className)} {...props}>
      <Container fixed>
        <CommonHeading textAlignLeft sectionName="About us" sectionNameDots />
        <Grid container spacing={3}>
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
                At Code Visionary Studios, we combine creativity, technology,
                and strategic thinking to craft unique digital experiences. Our
                talented team is committed to delivering high-quality web
                design, app development, branding, and marketing services
                tailored to meet your specific needs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Stack direction='row' flexWrap='wrap' className="about_gallery">
        <Image src={assest?.img2} alt="img2" width={634} height={357} className="img2 cmn_img"/>
        <Image src={assest?.img7} alt="img7" width={488} height={275} className="img7 cmn_img"/>
        <Image src={assest?.img5} alt="img5" width={426} height={291} className="img5 cmn_img"/>
        <Image src={assest?.img1} alt="img1" width={488} height={275} className="img1 cmn_img"/>
       
   
        </Stack>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
