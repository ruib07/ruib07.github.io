import { createElement } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { skillsData } from "../../constants/skills";
import MyPicture from "/assets/myphoto.jpeg";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-16 px-4 md:px-8 lg:px-16"
      id="start"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 dark:border-gray-700 shadow-lg">
          <img
            src={MyPicture}
            alt="MyPicture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 dark:text-gray-400">
            A passionate Developer who <br />
            <span className="text-blue-500 dark:text-purple-400 font-semibold">
              turns ideas into code, one line at a time.
            </span>
          </p>
          <div className="flex justify-center gap-6 mt-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="text-4xl text-gray-800 dark:text-gray-400"
              >
                {createElement(skill.src)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Currently a{" "}
          <span className="text-blue-500 dark:text-purple-400">
            <TypeAnimation
              sequence={["Software Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-justify">
          As a dedicated Software Developer, I am driven by a relentless
          curiosity for new programming languages and technologies.
          <br />
          <br /> I am committed to staying ahead of industry trends,
          continuously learning, and mastering emerging tools to solve complex
          problems and drive innovation.
          <br />
          <br />
          Currently, I’m making an internship at Cegid Primavera as a Technical
          Consultant, where I’m expanding my skills and gaining valuable
          real-world experience in the field.
        </p>
        <div className="text-center mt-8">
          <a
            onClick={() => navigate("Projects")}
            className="bg-blue-500 dark:bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-purple-600 transition-transform transform hover:scale-105 cursor-pointer"
          >
            See My Projects
          </a>
        </div>
      </div>
    </div>
  );
}
