import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const WhySectionWrapper = styled(Box)`
  display: flex;
  align-items: center;
  .why_row {
    align-items: center;

    .whyLft_box {
      position: relative;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 654px;
        height: 654px;
        border-radius: 50%;
        background: ${primaryColors.color007fa9};
        opacity: 0.2;
        filter: blur(139.545px);
        z-index: -1;
      }
      .whyMobile_img {
        text-align: center;
        position: relative;
        .mbl_img1,
        .mbl_img2,
        .mbl_img3,
        .mbl_img4 {
          position: absolute;
        }
      }
    }
    .why_list {
      li {
        display: flex;
        align-items: center;
        background: ${primaryColors.white};
        border-radius: 90px;
        padding: 18px 36px;
        min-height: 150px;
        :not(:last-child) {
          margin-bottom: 20px;
        }
        .number {
          font-size: 36px;
          font-weight: 700;
          font-family: ${montserrat.style.fontFamily};
          color: ${primaryColors.white};
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: ${primaryColors.color000D0F};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .content {
          width: calc(100% - 70px);
          padding-left: 20px;
          h3 {
            font-size: 24px;
            font-weight: 700;
            color: ${primaryColors.color000D0F};
            font-family: ${montserrat.style.fontFamily};
            line-height: 1;
            margin-bottom: 10px;
          }
          p {
            font-family: ${montserrat.style.fontFamily};
            font-size: 18px;
            font-weight: 400;
            color: ${primaryColors.color333333};
          }
        }
      }
    }
    .whyRgt_col {
      padding-left: 110px;
    }
  }
`;
