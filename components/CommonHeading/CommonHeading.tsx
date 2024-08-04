import assest from "@/json/assest";
import { CommonHeadingProps } from "@/reduxtoolkit/interfaces/interfaces";
import { CommonHeadingWrapper } from "@/styles/StyledComponents/CommonHeadingWrapper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const CommonHeading = ({
  sectionName,
  title,
  description,
  textAlignLeft,
  sectionNameDots
}: CommonHeadingProps) => {
  return (
    <CommonHeadingWrapper className={textAlignLeft ? "textAlignLeft" : ""}>
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
