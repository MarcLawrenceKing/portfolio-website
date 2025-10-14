import { DynamicIcon } from "lucide-react/dynamic";
import Button from "../components/Button";
import Certification from "../components/Certification";
import ResumeCard from "../components/ResumeCard";
import Education from "../components/Education";
import SkillsLanguages from "../components/SkillsLanguages";

const Resume = () => {
  const experience = [
    {
      year: "2025",
      title: "Laravel Developer",
      org: "DOST Central Office",
      place: "Remote",
      description:
        "Assisted in developing a full-stack intern management system using Laravel (Blade), Bootstrap, and MySQL on a local environment. Contributed to the creation of multiple CRUD modules, and helped design a dashboard that visualized key internship metrics.",
    },
  ];
  const certifications = [
    {
      year: "2025",
      title: "FCF in Cybersecurity",
      org: "Fortinet Training Institute",
      place: "Self-Paced",
      description:
        "Earned the Fortinet Certified Fundamentals in Cybersecurity certification, gaining foundational knowledge of key cybersecurity concepts and terminologies.",
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

  const skills = ["Web Development", "Data Science", "Cybersecurity"];

  const languages = [
    "HTML, CSS, & JS",
    "React.js",
    "Next.js",
    ".NET MVC Core",
    "Laravel",
    "Tailwind CSS",
  ];
  return (
    <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-12 sm:px-28 overflow-x-hidden">
      <p className="text-section-title">Resume</p>
      <div className="flex flex-col-reverse gap-10 items-center justify-between mb-5 mt-5 w-110 sm:gap-0 sm:flex-row md:w-160 lg:w-180 xl:w-200">
        <p className="text-resume-header text-primary">Experience</p>

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
        {experience.map((certification, index) => (
          <ResumeCard>
            <Certification key={index} {...certification} />
          </ResumeCard>
        ))}
      </div>
      <div className="flex items-center justify-center mb-5 mt-5 w-125 sm:justify-start md:w-160 lg:w-180 xl:w-200">
        <p className="text-resume-header text-primary">Certifications</p>
      </div>
      <div className="flex flex-col gap-10">
        {certifications.map((certification, index) => (
          <ResumeCard>
            <Certification key={index} {...certification} />
          </ResumeCard>
        ))}
      </div>
      <div className="flex items-center justify-center mb-5 mt-5 w-125 sm:justify-start md:w-160 lg:w-180 xl:w-200">
        <p className="text-resume-header text-primary">Education</p>
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
