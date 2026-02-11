import Button from "../components/Button";
import HeroPicture from "../components/HeroPicture";
import AboutMe from "../components/AboutMe";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center items-center flex-col mt-30 mx-5 sm:mx-10 pb-12 sm:mx-20 md:mx-30 2xl:mx-12 2xl:flex-row 2xl:mt-15 ">
        <div className="flex items-center flex-col 2xl:items-start ">
          <p className="hero-fields">WEB DEVELOPMENT · DATA SCIENCE· CYBERSECURITY</p>
          <p className="text-hero2">I can help your business</p>
          <p className="text-hero1">go online with modern websites.</p>
          <div className="flex flex-col gap-3 mt-12 w-full items-center sm:justify-center sm:flex-row sm:gap-9 2xl:justify-start">
            <Button size="lg" className="w-full sm:w-40">
              <Link to="/resume">
                <p className="text-btn">Resume</p>
              </Link>
            </Button>

            <Button variant="secondary" size="lg" className="w-full sm:w-40">
              <Link to="/projects">
                <p className="text-btn">Projects</p>
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-15 mb-10 2xl:ml-30">
          <HeroPicture />
        </div>
      </div>
      <AboutMe />
    </div>
  );
};

export default Hero;
