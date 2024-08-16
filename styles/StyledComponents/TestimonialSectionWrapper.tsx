import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const TestimonialSectionWrapper = styled(Box)`
display: flex;
align-items: center;
  .testiRgt_col {
    padding-left: 100px;
  }
`;
export const TestimonialCarouselWrapper = styled(Box)`
  position: relative;
  .testi_arw {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    .next_arrow {
      position: absolute;
      right: 0;
      top: 0;
      width: 47px;
      height: 47px;
      padding: 0;
      min-width: auto;

      svg {
        path {
          transition: all 0.3s ease-in-out;
        }
      }
      &:hover {
        svg {
          path {
            fill: ${primaryColors.primary};
            fill-opacity: 1;
          }
        }
      }
    }
    .prev_arrow {
      position: absolute;
      left: 0;
      top: 0;
      width: 47px;
      height: 47px;
      padding: 0;
      min-width: auto;

      svg {
        path {
          transition: all 0.3s ease-in-out;
        }
      }
      &:hover {
        svg {
          path {
            fill: ${primaryColors.primary};
            fill-opacity: 1;
          }
        }
      }
    }
  }
  .card_content {
    border-radius: 16px;
    padding: 28px 20px;
  }
  .swiper {
    width: 342px;
    height: 440px;
  }

  .swiper-slide {
    background: ${primaryColors.colorffffff10};
  }
  .swiper-slide {
    .card_content {
      opacity: 0;
    }
  }
  .swiper-slide-visible {
    .card_content {
      opacity: 1;
    }
  }
  .swiper-slide-visible {
    background: ${primaryColors.colorffffff90};
  }

  .swiper-slide {
    border-radius: 18px;
  }

  .testiCard_top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    i {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .testiCard_cnt {
      padding-left: 15px;
      .testi_name {
        font-size: 24px;
        color: ${primaryColors.white};
        line-height: 1;
        font-weight: 700;
        font-family: ${montserrat.style.fontFamily};
        margin-bottom: 5px;
      }
      span {
        display: inline-block;
        font-size: 14px;
        font-weight: 400;
        font-family: ${montserrat.style.fontFamily};
        color: ${primaryColors.white};
      }
    }
  }
  p {
    font-size: 18px;
    color: ${primaryColors.white};
    font-family: ${montserrat.style.fontFamily};
  }
`;
