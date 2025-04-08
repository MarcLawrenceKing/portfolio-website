import { DynamicIcon } from "lucide-react/dynamic";
import Button from "../components/Button";
import Certification from "../components/Certification";
import ResumeCard from "../components/ResumeCard";
import Education from "../components/Education";
import SkillsLanguages from "../components/SkillsLanguages";

const Resume = () => {
  const certifications = [
    {
      year: "2023",
      title: "30 Days of Frontend",
      org: "AWS Cloud Clubs",
      place: "Manila City",
      description:
        "Built a strong foundation in front-end web development with HTML, CSS, and JavaScript by creating small, hands-on projects that put theory into practice.",
    },
    {
      year: "2024",
      title: "Java Programming",
      org: "Joysis TECH VOC INC.",
      place: "Malabon City",
      description:
        "Reviewed core programming concepts and gained experience with Object-Oriented Programming (OOP), the MVC design pattern, and JDBC for MySQL database connectivity. Applied these skills by building a simple CRUD application as a final group project.",
    },
    {
      year: "2024",
      title: "Data Management Workshop",
      org: "MapaKalamidadPH",
      place: "Quezon City",
      description:
        "Learned the importance of open-source data extraction for disaster response. Utilized an open-source API providing JSON data to visualize flood patterns in Tableau.",
    },
  ];

  const education = [
    {
      year: "2022-2026",
      school: "Polytechnic University of the Philipiines Manila",
      place: "Manila City",
      degree: "Undergraduate",
      course: "BS Information Technology",
      description:
        "DOST RA 7687 scholar and consistent president lister, actively engaged in student tech organizations. Took on leadership roles and contributed to initiatives while exploring diverse IT fields including web development, cloud computing, data science, and cybersecurity.",
    },
  ];

  const skills = ["Web Development", "Data Science"];

  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vite + React",
    "Tailwind CSS",
  ];
  return (
    <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-12 sm:px-28 overflow-x-hidden">
      <p className="text-section-title">Resume</p>
      <div className="flex flex-col-reverse gap-10 items-center justify-between mb-5 mt-5 w-110 sm:gap-0 sm:flex-row md:w-160 lg:w-180 xl:w-200">
        <p className="text-resume-header text-primary">Certifications</p>

        <Button size="dl" className="w-1/2 ">
          <DynamicIcon name="download" color="white" size={22} />{" "}
          <a
            href="https://www.canva.com/design/DAGTJNTlXbM/G37zun6D4B09cUu83ERMlQ/edit"
            target="_blank"
          >
            <p className="font-normal text-sm sm:text-base">Download Resume</p>
          </a>
        </Button>
      </div>
      <div className="flex flex-col gap-10">
        {certifications.map((certification, index) => (
          <ResumeCard>
            <Certification key={index} {...certification} />
          </ResumeCard>
        ))}
      </div>
      <div className="flex items-center justify-center mb-5 mt-5 w-125 sm:justify-start md:w-160 lg:w-180 xl:w-200">
        <p className="text-resume-header text-accent2">Education</p>
      </div>
      <div className="flex flex-col gap-10">
        {education.map((educationz, index) => (
          <ResumeCard>
            <Education key={index} {...educationz} />
          </ResumeCard>
        ))}
        <ResumeCard className="flex gap-12 flex-col mt-14">
          <SkillsLanguages logo="hammer" name="Skills" items={skills} />
          <SkillsLanguages logo="code-xml" name="Languages" items={languages} />
        </ResumeCard>
      </div>
    </div>
  );
};

export default Resume;
