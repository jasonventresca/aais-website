import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Jason Ventresca",
    designation: "Co-founder, Software Engineering",
    image: "/images/team/jason-headshot.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    linkedinLink: "/#",
  },
  {
    id: 2,
    name: "Mario Spano",
    designation: "Co-founder, Business Development",
    image: "/images/team/mario-headshot-suit.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    linkedinLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle=""
            title="Meet Our Team"
            paragraph="We are fascinated and excited by the potential of AI to supercharge creativity and productivity. Our passion for partnering with business owners to solve real-world problems with cutting-edge technology drives us to help you achieve your most ambitious business goals."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
