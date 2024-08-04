import { testimonialProps } from "@/reduxtoolkit/interfaces/interfaces";
import { TestimonialCarouselWrapper } from "@/styles/StyledComponents/TestimonialSectionWrapper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const TestimonialCard = ({
  designation,
  img,
  name,
  subtext
}: testimonialProps) => {
  return (
    <TestimonialCarouselWrapper>
      <Box className="card_content">
        <Box className="testiCard_top">
          <i>
            <Image src={img} width={72} height={72} alt="testimonial-profile" />
          </i>
          <Box className="testiCard_cnt">
            <Typography variant="body1" className="testi_name">
              {name}
            </Typography>
            <Typography variant="caption">{designation}</Typography>
          </Box>
        </Box>
        <Typography variant="body1">{subtext}</Typography>
      </Box>
    </TestimonialCarouselWrapper>
  );
};

export default TestimonialCard;
