import assest from "@/json/assest";
import { WeSectionWrapper } from "@/styles/StyledComponents/WeSectionWrapper";
import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";

const WeSection: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <WeSectionWrapper className={clsx("cmn_gap", className)} {...props}>
      <Image
        src={assest.weLyr}
        alt="weLyr"
        width={2145}
        height={746}
        className="weBck_lyr"
      />
      <Container fixed>
        <CommonHeading title="WE" />
        <Box className="design_txt">
          <figure className="design_txt3">
            <Image
              src={assest?.design_txt3}
              alt="design_txt3"
              width={807}
              height={197}
            />
          </figure>

          <figure className="design_txt2">
            <Image
              src={assest?.design_txt2}
              alt="design_txt2"
              width={930}
              height={197}
            />
          </figure>
          <figure className="design_txt1">
            <Image
              src={assest?.design_txt1}
              alt="design_txt1"
              width={807}
              height={197}
            />
          </figure>
        </Box>
      </Container>
    </WeSectionWrapper>
  );
};

export default WeSection;
