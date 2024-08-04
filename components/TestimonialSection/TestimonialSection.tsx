import { TestimonialSectionWrapper } from "@/styles/StyledComponents/TestimonialSectionWrapper";
import { Box, Container, Grid } from "@mui/material";
import CommonHeading from "../CommonHeading/CommonHeading";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <TestimonialSectionWrapper className="cmn_gap">
      <Container fixed>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TestimonialCarousel />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="testiRgt_col">
              <CommonHeading
                sectionNameDots
                textAlignLeft
                sectionName="Testimonials"
                title="What Our Clients Say"
                description="Discover how Code Visionary Studios has made a difference for our clients. Our testimonials showcase the positive impact of our web design, app development, branding, and digital marketing services."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TestimonialSectionWrapper>
  );
};

export default TestimonialSection;
