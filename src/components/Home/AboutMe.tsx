import { lazy, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { skillsData } from "../../constants/skills";
import MyPicture from "/assets/myphoto.webp";

const ProjectsDialog = lazy(() => import("../dialogs/ProjectsDialog"));

export default function AboutMe() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <>
      <div
        className="py-14 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-background text-text transition-colors duration-300"
        id="start"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-surface shadow-xl">
            <img
              src={MyPicture}
              alt="Rui Barreto"
              width={160}
              height={160}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg text-text-secondary">
              A passionate Developer who <br />
              <span className="text-accent font-bold tracking-tight">
                turns ideas into code, one line at a time.
              </span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-5 sm:gap-6 mt-6">
              {skillsData.map((skill, index) => {
                const Icon = skill.src;

                return (
                  <div
                    key={skill.id || index}
                    className="text-3xl sm:text-4xl text-text-secondary hover:text-accent transition-colors"
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-text mb-4">
            <TypeAnimation
              sequence={["Software Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed text-justify px-1">
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
            <span className="font-semibold text-text">
              Cegid Primavera
            </span>{" "}
            as a Junior Technical Consultant, where I’m expanding my skills and
            gaining valuable real-world experience.
          </p>

          <div className="text-center mt-10">
            <button
              onMouseEnter={() => import("../dialogs/ProjectsDialog")}
              onClick={() => setProjectsOpen(true)}
              className="
                w-full sm:w-auto
                bg-button
                text-background dark:text-text
                px-8 py-3
                rounded-lg
                cursor-pointer
                text-base sm:text-lg
                font-bold
                shadow-lg
                shadow-accent/20
                hover:bg-text
                hover:text-background
                transition-all
                transform
                hover:-translate-y-1
              "
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