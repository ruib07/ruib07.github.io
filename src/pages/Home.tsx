import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/Contact";
import WorkExperience from "../components/Home/WorkExperience";

export default function Home() {
  return (
    <div className="mt-20 bg-background text-text transition-colors duration-300 overflow-x-hidden">
      <AboutMe />
      <WorkExperience />
      <Contact />
    </div>
  );
}