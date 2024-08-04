import assest from "@/json/assest";
import { WeSectionWrapper } from "@/styles/StyledComponents/WeSectionWrapper";
import { Container } from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";

const WeSection = () => {
  return (
    <WeSectionWrapper className="cmn_gap">
      <Image
        src={assest.weLyr}
        alt="weLyr"
        width={2145}
        height={746}
        className="weBck_lyr"
      />
      <Container fixed>
        <CommonHeading title="WE" />
      </Container>
    </WeSectionWrapper>
  );
};

export default WeSection;
