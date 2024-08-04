import { teamMembersProps } from "@/reduxtoolkit/interfaces/interfaces";
import { TeamCardWrapper } from "@/styles/StyledComponents/TeamWrapper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const TeamCard = ({ designation, thumbnail, title }: teamMembersProps) => {
  return (
    <TeamCardWrapper>
      <Box className="team_card">
        <figure className="team_fig">
          <Image src={thumbnail} width={382} height={485} alt={title} />
        </figure>
        <Box className="team_content">
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{designation}</Typography>
        </Box>
      </Box>
    </TeamCardWrapper>
  );
};

export default TeamCard;
