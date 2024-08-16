import { teamMembers } from "@/json/mock/demo.mock";
import { TeamWrapper } from "@/styles/StyledComponents/TeamWrapper";
import { Container, Grid } from "@mui/material";
import CommonHeading from "../CommonHeading/CommonHeading";
import TeamCard from "./TeamCard";
import clsx from "clsx";

type TeamSectionProps = {
  className?: string;
};
const TeamSection = ({ className }: TeamSectionProps) => {
  return (
    <TeamWrapper className={clsx("cmn_gap", className)}>
      <Container fixed>
        <CommonHeading
          sectionNameDots
          sectionName="Our Team"
          title="MEAT OUR TALENTED TEAM"
          description="Meet the passionate professionals who drive the success of Code Visionary Studios. Our team's diverse backgrounds and expertise come together to create powerful, integrated solutions that help our clients thrive in the digital world."
          maxWidthBlock={1217}
          className="team_sec_cmn_heading"
        />
        <Grid container spacing={2} className="teamGrid">
          {teamMembers.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              className="teamCard"
            >
              <TeamCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </TeamWrapper>
  );
};

export default TeamSection;
