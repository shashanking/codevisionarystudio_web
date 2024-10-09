import assest from "@/json/assest";
import { WeSectionWrapper } from "@/styles/StyledComponents/WeSectionWrapper";
import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";
import React from "react";
import { earth_orbiter, montserrat } from "@/themes/_muiTheme";

const WeSection: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <>
      <div className="desktopMain__wrapper">
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
      </div>
      <WeSectionMobile />
    </>
  );
};

export default WeSection;

const WeSectionMobile: React.FC<{}> = () => {
  return (
    <>
      <div className="weSection__mobileMianOuterWrapper">
        <Image
          src="/assets/images/WeSectionBg.png"
          loading="lazy"
          fill
          alt="we-section-bg"
        />
        <div className="weSection__contentMainOuterWrapper">
          <div className="weSection__contentWrapper">
            <h3
              className="weSection__weSmallTag"
              style={{
                fontFamily: earth_orbiter.style.fontFamily
              }}
            >
              We
            </h3>

            <div className="weSection__dddMainWrapper">
              <div className="design__wapper">
                <Image src="/assets/images/design_txt1.png" fill alt="design" />
              </div>
              <div className="design__wapper">
                <Image src="/assets/images/design_txt2.png" fill alt="develop" />
              </div>
              <div className="design__wapper">
                <Image src="/assets/images/design_txt3.png" fill alt="deliver" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
