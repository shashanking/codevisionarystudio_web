import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const AboutSectionWrapper = styled(Box)`
  height: 100vh;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 399px;
    height: 399px;
    background: ${primaryColors.color007fa9};
    opacity: 0.2;
    filter: blur(150px);
    z-index: -1;
  }
  .abt_text {
    position: relative;
    max-width: 640px;
    &::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 112px;
      right: 0;
      top: 0;
      background: ${primaryColors.color575F61};
    }
    h2 {
      padding-right: 24px;
      font-family: ${earth_orbiter.style.fontFamily};
      font-weight: 400;
      color: ${primaryColors.color192527};
    }
  }
  .about_gallery {
    margin-top: 50px;
    position: relative;
    min-height: calc(100vh - 450px);
    .cmn_img {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      position: absolute;
      &.img2 {
        left: 0;
        top: 0;
      }
      &.img7 {
        left: 50%;
        top: -50px;
      }
      &.img5 {
        left: 20%;
        top: 300px;
      }
      &.img1 {
        right: 0;
        top: 300px;
      }
    }
  }
`;
