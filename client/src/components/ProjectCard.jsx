import "../styles/ProjectCard.css";
import Image from "./Image";
import ProjectCategory from "./ProjectCategory";

const ProjectCard = ({
  projectImage,
  projectName,
  projectCategories,
  projectLink,
}) => {
  const variantClasses = {
    AWSCCFE30D:
      "https://marclawrenceking.github.io/AWSCC-PUP-Main-Frontend-Workshop/",
    PortfolioWebsiteFigma:
      "https://www.figma.com/proto/wVJLGvW0hGT0zXyKcIwQtz/Untitled?node-id=30-202&node-type=frame&t=11eZHavkQMGipjJD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A202",
    CEDv2: "https://marclawrenceking.github.io/CEDv2/",
    mpklmdd:
      "https://public.tableau.com/app/profile/marc.king4953/viz/Mapakalamidad/Dashboard1?publish=yes",
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <a href={variantClasses[projectLink]} target="_blank">
          <Image variant={"project-image"} imageKey={projectImage}></Image>
        </a>
      </div>
      <div className="project-categories-container">
        <p className="project-name"> {projectName}</p> <br />
        {projectCategories.map((category, index) => (
          <ProjectCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
