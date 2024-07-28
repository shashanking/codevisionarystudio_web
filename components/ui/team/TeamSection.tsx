import Image from "next/image";
import { TeamCard } from "./TeamCard";

const teamMembers = [
  {
    id: 1,
    thumbnail: "/images/team-1.jpg",
    title: "Vikash Jha",
    designation: "Co Founder, UI/UX Designer",
  },
  {
    id: 2,
    thumbnail: "/images/team-1.jpg",
    title: "Vikash Jha",
    designation: "Co Founder, UI/UX Designer",
  },
  {
    id: 3,
    thumbnail: "/images/team-1.jpg",
    title: "Vikash Jha",
    designation: "Co Founder, UI/UX Designer",
  },
  {
    id: 4,
    thumbnail: "/images/team-1.jpg",
    title: "Vikash Jha",
    designation: "Co Founder, UI/UX Designer",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="team-section pt-[7.5rem] pb-[7.125rem]">
      <div className="container">
        <div className="flex items-center justify-center text-center gap-x-6 mb-12">
          <Image
            src="/images/subheading-icon.png"
            width="12"
            height="12"
            alt="subheading-icon"
          />
          <h4 className="uppercase">Our Team</h4>
        </div>

        <div className="text-center content-box mb-[3.75rem] px-[8%]">
          <h2>MEAT OUR TALENTED TEAM</h2>
          <p>
            Meet the passionate professionals who drive the success of Code
            Visionary Studios. Our team&apos;s diverse backgrounds and expertise
            come together to create powerful, integrated solutions that help our
            clients thrive in the digital world.
          </p>
        </div>

        <ul className="team-grid flex flex-wrap *:px-2.5 *:w-3/12 -mx-2.5">
          {teamMembers.map((member) => {
            return (
              <TeamCard
                key={member.id}
                title={member.title}
                designation={member.designation}
                thumbnail={member.thumbnail}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
