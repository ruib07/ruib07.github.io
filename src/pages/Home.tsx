import { createElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import { jobs } from "../constants/experience";
import { skillsData } from "../constants/skills";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import MyPicture from "/assets/myphoto.jpeg";

export default function Home() {
  const [activeJobs, setActiveJobs] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleToggle = (title: string) => {
    setActiveJobs((prevActiveJobs) =>
      prevActiveJobs.includes(title)
        ? prevActiveJobs.filter((job) => job !== title)
        : [...prevActiveJobs, title]
    );
  };

  const handleProjects = () => {
    navigate("Projects");
  };

  return (
    <div className={"mt-16"}>
      {/* About Me */}
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
            curiosity for new programming languages and technologies. I am
            committed to staying ahead of industry trends, continuously
            learning, and mastering emerging tools to solve complex problems and
            drive innovation. Currently, I’m making an internship at Cegid
            Primavera as a Technical Consultant, where I’m expanding my skills
            and gaining valuable real-world experience in the field.
          </p>
          <div className="text-center mt-8">
            <a
              onClick={handleProjects}
              className="bg-blue-500 dark:bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-purple-600 transition-transform transform hover:scale-105 cursor-pointer"
            >
              See My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div
        className="bg-white dark:bg-gray-900 text-center py-12 text-gray-800 dark:text-gray-300"
        id="experience"
      >
        <h1 className="text-3xl font-semibold text-blue-500 dark:text-purple-400">
          Work Experience
        </h1>
        <hr className="border-t-2 border-blue-500 dark:border-purple-500 w-24 mx-auto mt-3 mb-8" />

        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="mb-6 border-b border-gray-300 dark:border-gray-700 transform transition duration-300 hover:scale-105"
            >
              <div
                onClick={() => handleToggle(job.id)}
                className="cursor-pointer py-4 flex items-center justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                  <h2 className="text-xl font-semibold text-blue-500 dark:text-purple-400">
                    {job.title}
                  </h2>
                  <h3 className="text-gray-500 dark:text-gray-400 me-5">
                    {job.contractType}
                  </h3>
                </div>

                <span
                  className={`text-blue-500 dark:text-purple-400 transform transition-transform duration-500 ${
                    activeJobs.includes(job.id) ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeJobs.includes(job.id)
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4">
                  <p className="text-blue-500 dark:text-purple-300 text-justify">
                    {job.date}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">
                    {job.modalDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div
        className="bg-white dark:bg-gray-900 py-12 text-gray-800 dark:text-gray-300"
        id="contact"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 dark:text-purple-500">
            Contact
          </h2>
          <hr className="border-t-2 border-blue-500 dark:border-purple-500 w-24 mx-auto mt-3" />
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Get in touch with me via LinkedIn, GitHub, or email.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/rui-barreto-814071248/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 dark:bg-purple-500 hover:bg-blue-600 dark:hover:bg-purple-600 hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white w-6 h-6" />
          </a>

          <a
            href="https://github.com/ruib07"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 dark:bg-purple-500 hover:bg-blue-600 dark:hover:bg-purple-600 hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white w-6 h-6" />
          </a>

          <a
            href="mailto:ruibarreto07@outlook.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 dark:bg-purple-500 hover:bg-blue-600 dark:hover:bg-purple-600 hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-white w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
