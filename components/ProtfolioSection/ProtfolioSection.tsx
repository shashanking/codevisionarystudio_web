import { ProtfolioSectionWrapper } from "@/styles/StyledComponents/ProtfolioSectionWrapper";
import { Box, BoxProps, Button, Container, Typography } from "@mui/material";
import CommonHeading from "../CommonHeading/CommonHeading";
import clsx from "clsx";
import Image from "next/image";
import assest from "@/json/assest";

const ProtfolioSection:React.FC<BoxProps> = ({className,...props}) => {
  return (
    <ProtfolioSectionWrapper className={clsx("cmn_gap",className)} {...props}>
      <Container fixed>
        <CommonHeading
          sectionNameDots
          sectionName="Our portfolio"
          textAlignLeft
        />
        <Box className="port_text">
          <Typography variant="caption">Creative Highlights</Typography>
          <Box className="roll_txt_heading">
            <Typography variant="h3">Money blaster</Typography>
            <Typography variant="h3">Contract crafters</Typography>
            <Typography variant="h3">Car corner</Typography>
            <Typography variant="h3">Upwealth magazine</Typography>
          </Box>
          <Box className="roll_txt_content">
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in. Proin non sollicitudin risus. Praesent eget risus id magna molestie volutpat at vel neque.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in. Proin non sollicitudin risus. Praesent eget risus id magna molestie volutpat at vel neque.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in. Proin non sollicitudin risus. Praesent eget risus id magna molestie volutpat at vel neque.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in. Proin non sollicitudin risus. Praesent eget risus id magna molestie volutpat at vel neque.</Typography>
          </Box>
          <Box className="prot_btm">
            <Button disableRipple className="port_btn">
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
      <Image src={assest?.gallery1} alt="gallery1" width={640} height={1080} className="gallery1 cmn_gallery_img"/>
      <Image src={assest?.gallery2} alt="gallery2" width={640} height={1080} className="gallery2 cmn_gallery_img"/>
      <Image src={assest?.gallery3} alt="gallery3" width={640} height={1080} className="gallery3 cmn_gallery_img"/>
      <Image src={assest?.gallery4} alt="gallery4" width={640} height={1080} className="gallery4 cmn_gallery_img"/>
    </ProtfolioSectionWrapper>
  );
};

export default ProtfolioSection;
