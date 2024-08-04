import { AboutSectionWrapper } from "@/styles/StyledComponents/AboutSectionWrapper";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import CommonHeading from "../CommonHeading/CommonHeading";

const AboutSection = () => {
  return (
    <AboutSectionWrapper className="cmn_gap">
      <Container fixed>
        <CommonHeading textAlignLeft sectionName="About us" sectionNameDots />
        <Box className="abt_text">
          <Typography variant="h2">WE are Code Visionary Studios</Typography>
        </Box>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
