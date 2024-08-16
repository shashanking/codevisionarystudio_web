import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const WeSectionWrapper = styled(Box)`
  height: 100vh;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 399px;
    height: 399px;
    background: ${primaryColors.color007fa9};
    opacity: 0.2;
    filter: blur(150px);
    z-index: -2;
  }
  .weBck_lyr {
    position: absolute;
    width: 100%;
    height: 746px;
    top: 50%;
    left: 0;
    transform: translateY(-30%);
    z-index: -1;
    opacity: 0;
  }

  .design_txt {
    display: flex;
    flex-direction: column;
    figure {
      margin-bottom: 80px;
      position: relative;
      line-height: 0;
      font-size: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      height: 130px;
      &:last-child {
        margin-bottom: 0;
      }
      &:nth-child(even){
        justify-content: flex-end;
      }
      img{
        position: absolute;
      }
    }
  }
`;
