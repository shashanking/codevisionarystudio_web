import { ProtfolioSectionWrapper } from "@/styles/StyledComponents/ProtfolioSectionWrapper";
import { Box, BoxProps, Button, Container, Typography } from "@mui/material";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";

const ProtfolioSection:React.FC<BoxProps> = ({className,...props}) => {
  return (
    <ProtfolioSectionWrapper className={clsx("cmn_gap",className)} {...props}>
      <Container fixed>
        <CommonHeading
          sectionNameDots
          sectionName="Our portfolio"
          textAlignLeft
        />
        <Box className="port_text">
          <Typography variant="caption">Creative Highlights</Typography>
          <Box className="prot_btm">
            <Button disableRipple className="port_btn">
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </ProtfolioSectionWrapper>
  );
};

export default ProtfolioSection;
