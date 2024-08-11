import { AboutSectionWrapper } from "@/styles/StyledComponents/AboutSectionWrapper";
import { Box, BoxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";

const AboutSection:React.FC<BoxProps> = ({className,...props}) => {
  return (
    <AboutSectionWrapper className={clsx("cmn_gap",className)} {...props}>
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
