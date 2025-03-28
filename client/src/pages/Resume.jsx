import { DynamicIcon } from "lucide-react/dynamic";
import Button from "../components/Button";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import Education from "../components/Education";
import SkillsLanguages from "../components/SkillsLanguages";

const Resume = () => {
  const skills = [
    "Web Development",
    "Data Science",
    "Cherry",
    "Data Science",
    "Data Science",
    "Data Science",
  ];
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center py-30 bg-accent4 px-12 sm:px-28">
        <p className="text-section-title">Resume</p>
        <div className="flex flex-col-reverse gap-10 items-center justify-between mb-5 mt-5 w-125 sm:gap-0 sm:flex-row md:w-160 lg:w-180 xl:w-200">
          <p className="text-resume-header text-primary">Certifications</p>
          <Button size="lg">
            {" "}
            <DynamicIcon name="download" color="white" size={22} />{" "}
            <p className="font-normal">Download Resume</p>
          </Button>
        </div>
        <div className="flex flex-col gap-10">
          <ResumeCard>
            <Certification
              year="2023"
              title="30 Days of Frontend"
              org="AWS Cloud Clubs"
              place="Manila City"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, corrupti, maiores in mollitia distinctio eligendi ullam atque perferendis tempora quae temporibus quo voluptatem adipisci cum voluptatibus esse placeat libero eaque."
            />
          </ResumeCard>
          <ResumeCard>
            <Certification
              year="2023"
              title="30 Days of Frontend"
              org="AWS Cloud Clubs"
              place="Manila City"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, corrupti, maiores in mollitia distinctio eligendi ullam atque perferendis tempora quae temporibus quo voluptatem adipisci cum voluptatibus esse placeat libero eaque."
            />
          </ResumeCard>
          <ResumeCard>
            <Certification
              year="2023"
              title="30 Days of Frontend"
              org="AWS Cloud Clubs"
              place="Manila City"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, corrupti, maiores in mollitia distinctio eligendi ullam atque perferendis tempora quae temporibus quo voluptatem adipisci cum voluptatibus esse placeat libero eaque. "
            />
          </ResumeCard>
        </div>
        <div className="flex items-center mb-5 mt-5 w-125  md:w-160 lg:w-180 xl:w-200">
          <p className="text-resume-header text-accent2">Education</p>
        </div>
        <div className="flex flex-col gap-10">
          <ResumeCard>
            <Education
              year="2022-2026"
              school="Polytechnic University of the Philipiines Manila"
              place="Manila City"
              degree="Undergraduate"
              course="BS Information Technology"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, corrupti, maiores in mollitia distinctio eligendi ullam atque perferendis tempora quae temporibus quo voluptatem adipisci cum voluptatibus esse placeat libero eaque."
            />
          </ResumeCard>
        </div>
        <div>
          <ResumeCard>
            <SkillsLanguages logo="hammer" name="Skills" items={skills} />
          </ResumeCard>
        </div>
      </div>
    </div>
  );
};

export default Resume;
