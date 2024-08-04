import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const TeamWrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    bottom: -40%;
    left: 50%;
    transform: translateX(-50%);
    width: 792px;
    height: 792px;
    border-radius: 50%;
    background: ${primaryColors.color007fa9};
    opacity: 0.2;
    filter: blur(139.545px);
    z-index: -1;
  }
  .teamGrid {
    margin-top: 20px;
  }
  .teamCard {
    &:nth-child(even) {
      margin-top: 48px;
    }
  }
`;

export const TeamCardWrapper = styled(Box)`
  .team_card {
    cursor: pointer;
    &:hover {
      .team_fig {
        img {
          filter: grayscale(0);
          transform: scale(1.1);
        }
      }
      .team_content {
        p {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    .team_fig {
      aspect-ratio: 382/485;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 24px;
      img {
        filter: grayscale(1);
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
      }
    }
    .team_content {
      h3 {
        font-family: ${montserrat.style.fontFamily};
        color: ${primaryColors.white};
        font-size: 24px;
        line-height: 1;
        margin-bottom: 8px;
      }
      p {
        font-family: ${montserrat.style.fontFamily};
        font-size: 14px;
        color: ${primaryColors.white};
        transform: translateY(-12px);
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
