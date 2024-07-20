import React from "react";
import Image from "next/image";

const TeamCard = ({ thumbnail, title, designation }) => {
  return (
    <div className="team-card group">
      <figure className="aspect-[382/485] overflow-hidden rounded-2xl">
        <Image src={thumbnail} width="382" height="485" alt="Vikash Jha" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
      </figure>
      <div className="pt-6">
        <h3 className="font-base text-2xl mb-2">{title}</h3>
        <p className="text-sm transition-all duration-500 -translate-y-3 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100">{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
