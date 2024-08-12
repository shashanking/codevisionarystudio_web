import assest from '@/json/assest';
import { ImageSecTwoWrapper } from '@/styles/StyledComponents/ImageSecTwoWrapper';
import { Box, BoxProps, Container, Stack } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import React from 'react'

const ImageSecTwo: React.FC<BoxProps> = ({ className, ...props }) => {
  return (
    <ImageSecTwoWrapper className={clsx("cmn_gap", className)} {...props}>
        <Container fixed>
        <Stack direction="row" flexWrap="wrap" className="imgTwo_gallery">
          <Image
            src={assest?.img10}
            alt="img9"
            width={634}
            height={357}
            className="img9 cmn_img"
          />
          <Image
            src={assest?.img3}
            alt="img10"
            width={650}
            height={275}
            className="img10 cmn_img"
          />
          <Image
            src={assest?.img6}
            alt="img6"
            width={426}
            height={150}
            className="img6 cmn_img"
          />
          <Image
            src={assest?.img7}
            alt="img11"
            width={400}
            height={275}
            className="img11 cmn_img"
          />
        </Stack>
      </Container>
    </ImageSecTwoWrapper>
  )
}

export default ImageSecTwo