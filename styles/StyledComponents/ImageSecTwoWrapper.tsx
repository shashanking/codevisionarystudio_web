import { Box, styled } from "@mui/material";

export const ImageSecTwoWrapper = styled(Box)`
  .imgTwo_gallery {
    margin-top: 50px;
    position: relative;
    min-height: calc(100vh - 450px);
    .cmn_img {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      position: absolute;
      &.img9 {
        left: 0;
        top: 0;
        z-index: 2;
      }
      &.img10 {
        right: 50px;
        top: 0;
        /* z-index: 2; */
      }
      &.img6 {
        left: 20%;
        top: 390px;
        height: 290px;
        object-fit: cover;
        object-position: top;
      }
      &.img11 {
        right: 0;
        top: 390px;
        height: 250px;
        object-fit: cover;
      }
    }
  }
`;
