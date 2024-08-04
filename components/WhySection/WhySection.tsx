import assest from "@/json/assest";
import { whyListItem } from "@/json/mock/demo.mock";
import { WhySectionWrapper } from "@/styles/StyledComponents/WhySectionWrapper";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography
} from "@mui/material";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";

const WhySection = () => {
  return (
    <WhySectionWrapper className="cmn_gap">
      <Container fixed>
        <Grid container spacing={2} className="why_row">
          <Grid item md={6} xs={12}>
            <Box className="whyLft_box">
              <figure className="whyMobile_img">
                <Image
                  src={assest.why_us_col_img}
                  alt="why_us_col_img"
                  width={491}
                  height={738}
                />
              </figure>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="whyRgt_col">
              <CommonHeading
                sectionNameDots
                textAlignLeft
                sectionName="Why us"
                title="What Makes Us Different"
                description="Code Visionary Studios stands out for our innovative solutions, personalized service, and proven track record. Our holistic approach to web design, app development, branding, and marketing ensures your business thrives in the digital age."
              />

              <List className="why_list">
                {whyListItem.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    <Box className="number">{item.listNumber}</Box>
                    <Box className="content">
                      <Typography variant="h3">{item.title}</Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </WhySectionWrapper>
  );
};

export default WhySection;
