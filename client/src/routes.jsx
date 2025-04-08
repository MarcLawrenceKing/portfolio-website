import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
