import "../styles/Projects.css"
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projects" id="projects-section">
      <p className="page-title">Projects</p>

      <div className="projects-card-container">
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>
      
    </div>
  );
};

export default Projects;