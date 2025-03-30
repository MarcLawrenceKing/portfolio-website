import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

import project30days from "../assets/AWS30DFE.jpg";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-12 sm:px-28">
        <p className="text-section-title mb-10">Projects</p>
        <div className="flex flex-col gap-12">
          <ProjectCard
            projectImage={project30days}
            projectName="30 Days of Frontend"
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          ducimus voluptates eos est impedit dicta assumenda, qui quis explicabo
          iste quidem, asperiores aliquid ad ea esse veritatis doloribus
          eveniet!"
          />
          <ProjectCard />
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Projects;
