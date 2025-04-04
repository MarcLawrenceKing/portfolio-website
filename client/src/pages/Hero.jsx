import Button from "../components/Button";
import HeroPicture from "../components/HeroPicture";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-30 mx-10 pb-12 sm:mx-20 md:mx-30 2xl:mx-12 2xl:flex-row 2xl:mt-15">
        <div className="flex items-center flex-col 2xl:items-start ">
          <p className="hero-fields">WEB DEVELOPMENT · DATA SCIENCE</p>
          <p className="text-hero2">I can help your business</p>
          <p className="text-hero1">go online with modern websites.</p>
          <div className="flex flex-col gap-3 mt-12 w-full justify-center sm:flex-row sm:gap-9 2xl:justify-start">
            <Link to="/portfolio-website/resume">
              <Button size="lg">
                <p className="text-btn">Resume</p>
              </Button>
            </Link>
            <Link to="/portfolio-website/projects">
              <Button variant="secondary" size="lg">
                <p className="text-btn">Projects</p>
              </Button>
            </Link>
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
