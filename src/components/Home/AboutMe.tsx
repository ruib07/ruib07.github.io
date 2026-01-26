import { createElement, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { skillsData } from "../../constants/skills";
import ProjectsDialog from "../dialogs/ProjectsDialog";
import MyPicture from "/assets/myphoto.jpeg";

export default function AboutMe() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <>
      <div className="py-16 px-4 md:px-8 lg:px-16" id="start">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-200 dark:border-gray-700 shadow-xl">
            <img
              src={MyPicture}
              alt="MyPicture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg text-slate-600 dark:text-gray-400">
              A passionate Developer who <br />
              <span className="text-indigo-600 dark:text-purple-400 font-bold tracking-tight">
                turns ideas into code, one line at a time.
              </span>
            </p>

            <div className="flex justify-center md:justify-start gap-6 mt-6">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="text-4xl text-slate-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors"
                >
                  {createElement(skill.src)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">
            Currently a{" "}
            <span className="text-indigo-600 dark:text-purple-400">
              <TypeAnimation
                sequence={["Software Developer", 1000]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-justify">
            As a dedicated Software Developer, I am driven by a relentless
            curiosity for new programming languages and technologies.
            <br />
            <br />
            I am committed to staying ahead of industry trends, continuously
            learning, and mastering emerging tools to solve complex problems and
            drive innovation.
            <br />
            <br />
            Currently, I’m working at{" "}
            <span className="font-semibold text-slate-800 dark:text-gray-200">
              Cegid Primavera
            </span>{" "}
            as a Junior Technical Consultant, where I’m expanding my skills and
            gaining valuable real-world experience.
          </p>

          <div className="text-center mt-10">
            <button
              onClick={() => setProjectsOpen(true)}
              className="bg-indigo-600 dark:bg-purple-500 text-white px-8 py-3 rounded-lg cursor-pointer text-lg font-bold shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 dark:hover:bg-purple-600 transition-all transform hover:-translate-y-1"
            >
              See My Projects
            </button>
          </div>
        </div>
      </div>

      <ProjectsDialog
        open={projectsOpen}
        onClose={() => setProjectsOpen(false)}
      />
    </>
  );
}
