import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const ServiceSectionWrapper = styled(Box)`
  .serviceBox {
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
    padding: 32px 20px 32px 30px;
    min-height: 331px;
    &:hover {
      .web_img {
        transform: scale(1.05);
      }
      .webRing_img,
      .mobileRing_img,
      .digitalRing_img,
      .uiRing_img {
        transform: scale(1.2);
      }
      .mobile_img,
      .digital_img {
        transform: scale(1.1);
      }
    }
    .serviceBox_cnt {
      position: relative;
      z-index: 30;
      width: 65%;
    }
    h3 {
      font-size: 24px;
      color: ${primaryColors.white};
      line-height: 1.2;
      margin-bottom: 20px;
      position: relative;
      font-family: ${montserrat.style.fontFamily};
    }
    p {
      font-size: 16px;
      color: ${primaryColors.white};
      max-width: 340px;
      font-family: ${montserrat.style.fontFamily};
    }
    .whitbck_btn {
      margin-top: 24px;
      min-width: 212px;
      border-radius: 44px;
      font-size: 20px;
      color: ${primaryColors.color000D0F};
      background: ${primaryColors.white};
      font-weight: 700;
      line-height: 1;
      padding: 16px 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: ${primaryColors.primary};
        color: ${primaryColors.white};
      }
    }

    .web_img {
      position: absolute;
      top: 0;
      right: 0;
      transform-origin: right bottom;
      transition: all 0.3s ease-in-out;
      z-index: 20;
    }
    .webRing_img {
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      transform-origin: right bottom;
      transition: all 0.3s ease-in-out;
      z-index: 10;
    }
    .mobile_img {
      position: absolute;
      left: 20px;

      bottom: 0;
      transition: all 0.3s ease-in-out;
      z-index: 20;
    }
    .mobileRing_img {
      position: absolute;
      bottom: 0;
      left: 20px;
      margin: 0 auto;
      display: block;
      transition: all 0.3s ease-in-out;
      z-index: 10;
    }

    .digital_img {
      position: absolute;
      left: 20px;
      transform-origin: left right;
      bottom: 0;
      transition: all 0.3s ease-in-out;
      z-index: 20;
    }
    .digitalRing_img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      transform-origin: left right;
      display: block;
      transition: all 0.3s ease-in-out;
      z-index: 10;
    }
    .uiRing_img {
      position: absolute;
      bottom: 0;
      left: 20px;
      display: block;
      z-index: 10;
      margin: 0 auto;
      transition: all 0.3s ease-in-out;
    }
  }
`;
