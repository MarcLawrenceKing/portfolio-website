import "../styles/ProjectCard.css"
import Image from "./Image";
import ProjectCategory from "./ProjectCategory";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-image-container">
      <Image variant={"project-image"} imageKey={"imageMarc"}></Image> 
      </div>          
      <div className="project-categories-container">
      <p className="project-name"> Project Name</p> <br/>
      <ProjectCategory/>
      <ProjectCategory/>
      <ProjectCategory/>
      </div>
    </div>
  );
};

export default ProjectCard;