import assest from "@/json/assest";
import { ImageSecOneWrapper } from "@/styles/StyledComponents/ImageSecOneWrapper";
import { Box, BoxProps, Container, Stack } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ImageSecOne: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <ImageSecOneWrapper className={clsx("cmn_gap", className)} {...props}>
      <Container fixed>
        <Stack direction="row" flexWrap="wrap" className="imgOne_gallery">
          <Image
            src={assest?.img3}
            alt="img3"
            width={634}
            height={357}
            className="img3 cmn_img"
          />
          <Image
            src={assest?.img4}
            alt="img4"
            width={488}
            height={275}
            className="img4 cmn_img"
          />
          <Image
            src={assest?.img6}
            alt="img6"
            width={426}
            height={150}
            className="img6 cmn_img"
          />
          <Image
            src={assest?.img8}
            alt="img8"
            width={634}
            height={275}
            className="img8 cmn_img"
          />
        </Stack>
      </Container>
    </ImageSecOneWrapper>
  );
};

export default ImageSecOne;
