import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const BannerWrapper = styled(Box)`
  height: 100vh;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 339px;
    background: linear-gradient(
      180deg,
      rgba(0, 13, 15, 0) 0%,
      rgba(0, 13, 15, 0.5) 41.5%,
      #000d0f 100%
    );
    z-index: -1;
  }
  .iframeWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  .contentWrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    .content_box {
      margin-bottom: 100px;
      font-size: 24px;

      h1 {
        /* font-size: 40px; */
        line-height: 1.2;
        text-transform: uppercase;
        color: ${primaryColors.white};
        margin-bottom: 48px;
        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 25%;
          }

          100% {
            background-position: 0% 50%;
          }
        }
        .gradient_text {
          display: inline-block;
          background-image: repeating-linear-gradient(
            90deg,
            #f23232,
            #fea656,
            #07ac7a,
            #0cd69a,
            #472ed4,
            #5220c7,
            #f2c532,
            #56fe64,
            #f23232,
            #fea656
          );
          text-align: center;
          background-size: 1600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow 25s ease-in-out infinite;
        }
      }
      p {
        font-size: 24px;
        color: ${primaryColors.white};
        font-family: ${montserrat.style.fontFamily};
      }
    }
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
    .MuiButton-containedSecondary {
      height: 72px;
      min-width: 261px;
      font-size: 24px;
    }
  }
`;
