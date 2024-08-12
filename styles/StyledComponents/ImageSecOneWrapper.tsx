import { Box, styled } from "@mui/material";

export const ImageSecOneWrapper = styled(Box)`
  .imgOne_gallery {
    margin-top: 50px;
    position: relative;
    min-height: calc(100vh - 450px);
    .cmn_img {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      position: absolute;
      &.img3 {
        left: 0;
        top: 0;
      }
      &.img4 {
        left: 50%;
        top: 60px;
        z-index: 2;
      }
      &.img6 {
        left: 20%;
        top: 390px;
        height: 290px;
        object-fit: cover;
        object-position: top;
      }
      &.img8 {
        right: 0;
        top: 250px;
        height: 400px;
        object-fit: cover;
      }
    }
  }
`;
