import assest from "@/json/assest";
import { CommonHeadingProps } from "@/reduxtoolkit/interfaces/interfaces";
import { CommonHeadingWrapper } from "@/styles/StyledComponents/CommonHeadingWrapper";
import { Box, BoxProps, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const CommonHeading:React.FC<CommonHeadingProps & BoxProps> = ({
  sectionName,
  title,
  description,
  textAlignLeft,
  sectionNameDots,
  className,
  ...props
}) => {
  return (
    <CommonHeadingWrapper className={clsx(`${textAlignLeft ? "textAlignLeft" : ""}`,className)}>
      <Box className="section_name">
        {sectionNameDots ? (
          <i>
            <Image
              src={assest.subheading_icon}
              width={12}
              height={12}
              alt="subheading-icon"
            />
          </i>
        ) : (
          ""
        )}

        <Typography variant="caption">{sectionName}</Typography>
      </Box>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </CommonHeadingWrapper>
  );
};

export default CommonHeading;
