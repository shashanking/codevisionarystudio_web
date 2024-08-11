import assest from "@/json/assest";
import { WeSectionWrapper } from "@/styles/StyledComponents/WeSectionWrapper";
import { BoxProps, Container } from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";

const WeSection:React.FC<BoxProps> = ({className,...props}) => {
  return (
    <WeSectionWrapper className={clsx("cmn_gap",className)} {...props}>
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
