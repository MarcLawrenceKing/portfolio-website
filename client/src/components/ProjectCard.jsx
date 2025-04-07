import DefaultProject from "../assets/DefaultProject.jpg";

const ProjectCard = ({
  projectImage = DefaultProject,
  projectName = "project name",
  projectLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  projectDesc = "project desc",
}) => {
  return (
    <a href={projectLink} target="_blank">
      <div className="flex flex-col-reverse mx-10 shadow-xl rounded-xl overflow-hidden bg-primary sm:w-120 md:w-150 lg:w-200 lg:flex-row">
        <div className="flex flex-col p-12 pt-8 justify-center gap-2 flex-4">
          <p className="font-bold text-[2rem] text-center text-white lg:text-start">
            {projectName}
          </p>
          <p className="text-white text-justify">{projectDesc}</p>
        </div>
        <div className="flex bg-primary flex-3 justify-center">
          <img
            src={projectImage}
            className="h-120 border-10 border-primary rounded-xl lg:h-100 "
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
