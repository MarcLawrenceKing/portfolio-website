import Button from "../components/Button";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center py-20 bg-accent4 px-12 sm:px-28">
        <p className="text-section-title">Resume</p>
        <div className="flex justify-between">
          <p>Certifications</p>
          <Button>Download Resume</Button>
        </div>
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
    </div>
  );
};

export default Resume;
