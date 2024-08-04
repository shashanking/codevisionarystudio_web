import assest from "@/json/assest";
import { ServiceSectionWrapper } from "@/styles/StyledComponents/ServiceSectionWrapper";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";

const ServiceSection = () => {
  return (
    <ServiceSectionWrapper className="cmn_gap">
      <Container fixed>
        <CommonHeading
          sectionNameDots
          sectionName="Our services"
          title="Our Expertise"
          description="Discover the comprehensive range of IT services we offer at Code Visionary Studios. From web design and app development to branding and digital marketing, our expert team delivers innovative solutions that drive your business forward."
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box className="serviceBox">
              <Box className="serviceBox_cnt">
                <Typography variant="h3">
                  Website Design & Development
                </Typography>
                <Typography variant="body1">
                  Creating visually stunning and highly functional websites that
                  elevate your online presence. Our expert team blends
                  creativity with technical expertise to deliver custom web
                  solutions tailored to your unique business needs.
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
      </Container>
    </ServiceSectionWrapper>
  );
};

export default ServiceSection;
