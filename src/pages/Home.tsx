import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/Contact";
import WorkExperience from "../components/Home/WorkExperience";

export default function Home() {
  return (
    <div className={"mt-16 bg-slate-50 dark:bg-gray-900"}>
      <AboutMe />
      <WorkExperience />
      <Contact />
    </div>
  );
}
