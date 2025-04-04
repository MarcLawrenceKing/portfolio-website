import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio-website" element={<Hero />} />
      <Route path="/portfolio-website/resume" element={<Resume />} />
      <Route path="/portfolio-website/projects" element={<Projects />} />
      <Route path="/portfolio-website/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
