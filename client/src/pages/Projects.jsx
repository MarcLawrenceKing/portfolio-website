import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

import project30days from "../assets/AWS30DFE.jpg";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-12 sm:px-28">
        <p className="text-section-title mb-10">Projects</p>
        <div className="flex flex-col gap-12">
          <ProjectCard
            projectImage={project30days}
            projectName="Portfolio Website (2025)"
            projectDesc="Enhanced my portfolio website using frameworks like Vite and React, along with Tailwind CSS for styling. Integrated the Google Apps Scripts to collect data from the contact form. "
            projectLink="https://github.com/MarcLawrenceKing/AWSCC-PUP-Main-Frontend-Workshop"
          />
          <ProjectCard
            projectImage={project30days}
            projectName="30 Days of Frontend (2023)"
            projectDesc="Utilized HTML, CSS, and JavaScript to build simple projects, including a blog website, a rock-paper-scissors game, and a number guessing game, to apply my front end knowledge."
            projectLink="https://github.com/MarcLawrenceKing/AWSCC-PUP-Main-Frontend-Workshop"
          />

          <ProjectCard
            projectImage={project30days}
            projectName="Tableau Flood Visualization (2024)"
            projectDesc="An interactive dashboard as part of the Data Management Workshop by MapaKalamidadPH in September 2024, showcasing flood data from January and February 2023."
            projectLink="https://public.tableau.com/app/profile/marc.king4953/viz/Mapakalamidad/Dashboard1?publish=yes&fbclid=IwY2xjawJcY5RleHRuA2FlbQIxMQABHfpbxiw2-b8CGOMzuU7Dv12C9bOlGpWk1-CzTt5wGWnTGqUTm5UZeCRaCg_aem_xhjXzk7Ro5D08PRaBSn6oA"
          />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Projects;
