import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const ProtfolioSectionWrapper = styled(Box)`
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 446px;
    height: 446px;
    background: ${primaryColors.color007fa9};
    opacity: 0.2;
    filter: blur(139.545px);
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    right: 20%;
    width: 362px;
    height: 346px;
    background: ${primaryColors.color007fa9};
    opacity: 0.2;
    filter: blur(139.545px);
    z-index: -1;
  }
  .cmn_gallery_img{
    position: absolute;
    top: 0;
    width: calc(100% / 3);
    height: 100vh;
    z-index: 9;
    &.gallery2{
      left: 33.33%;
      z-index: 8;
    }
    &.gallery3{
      right: 0;
      z-index: 7;
    }
    &.gallery4{
      right: 0;
      z-index: 6;
    }
  }
  .port_text {
    span {
      max-width: 555px;
      display: inline-block;
      font-family: ${earth_orbiter.style.fontFamily};
      font-weight: 400;
      font-size: 94px;
      background: linear-gradient(
        180deg,
        #c44f56 -33.06%,
        rgba(196, 79, 86, 0) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      opacity: 0.4;
      line-height: 1;
    }
    .prot_btm {
      margin-top: 100px;
      .port_btn {
        min-width: 212px;
        min-height: 60px;
        border-radius: 30px;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        font-size: 20px;
        font-weight: 700;
        color: ${primaryColors.white};
        background: ${primaryColors.primary};
        border: 2px solid ${primaryColors.primary};
        font-family: ${earth_orbiter.style.fontFamily};
        transition: all 0.3s ease-in-out;
        &:hover {
          background: transparent;
        }
      }
    }
  }

  .roll_txt_heading{
    position: relative;
    min-height: 50px;
    overflow: hidden;
    margin-bottom: 70px;
    h3{
      font-size: 48px;
      font-weight: 700;
      color: ${primaryColors?.white};
      position: absolute;
      left: 0;
      top: 0;
   
    }
  }
  .roll_txt_content{
    position: relative;
    min-height: 150px;
    overflow: hidden;
    p{
      font-size: 20px;
      color: ${primaryColors?.white};
      max-width: 785px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;
