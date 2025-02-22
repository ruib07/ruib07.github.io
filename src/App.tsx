import Header from "./layouts/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./layouts/Footer";

import { jobs } from "./data/experience";
import { useState } from "react";
import { skillsData } from "./data/skills";
import { projects } from "./data/projects";

import Avatar from "/assets/myphoto.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function App() {
  const [activeJobs, setActiveJobs] = useState<string[]>([]);

  const handleToggle = (title: string) => {
    setActiveJobs((prevActiveJobs) =>
      prevActiveJobs.includes(title)
        ? prevActiveJobs.filter((job) => job !== title)
        : [...prevActiveJobs, title]
    );
  };

  return (
    <div className="mt-16">
      <Header />
      <ScrollToTop />
      {/* About Me */}
      <div
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-16 px-4 md:px-8 lg:px-16"
        id="start"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 dark:border-gray-700 shadow-lg">
            <img
              src={Avatar}
              alt="Avatar with Laptop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-400">
              A passionate Developer who <br />
              <span className="text-blue-600 dark:text-purple-400 font-semibold">
                turns ideas into code, one line at a time.
              </span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Currently a{" "}
            <span className="text-blue-600 dark:text-purple-400">
              Full-Stack Developer
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-justify">
            As a dedicated Full-Stack Developer, I am driven by a relentless
            curiosity for new programming languages and technologies. I am
            committed to staying ahead of industry trends, continuously
            learning, and mastering emerging tools to solve complex problems and
            drive innovation.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <div
        className="bg-white dark:bg-gray-900 text-center py-12 text-gray-800 dark:text-gray-300"
        id="experience"
      >
        <h1 className="text-3xl font-semibold text-blue-600 dark:text-purple-400">
          Work Experience
        </h1>
        <hr className="border-t-2 border-blue-700 dark:border-purple-500 w-1/4 mx-auto mt-2 mb-8" />

        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="mb-6 border-b border-gray-300 dark:border-gray-700 transform transition duration-300 hover:scale-105"
            >
              <div
                onClick={() => handleToggle(job.title)}
                className="cursor-pointer py-4 flex items-center justify-between"
              >
                <h2 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                  {job.title}
                </h2>
                <span
                  className={`text-blue-600 dark:text-purple-400 transform transition-transform duration-500 ${
                    activeJobs.includes(job.title) ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeJobs.includes(job.title)
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 text-justify">
                    {job.modalDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <section
        className="bg-white dark:bg-gray-900 py-12 text-gray-800 dark:text-gray-300"
        id="skills"
      >
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-purple-400 text-center">
          My Top Skills
        </h2>
        <hr className="border-t-2 border-blue-700 dark:border-purple-500 w-1/4 mx-auto mt-2 mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4 max-w-screen-lg mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center justify-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 hover:scale-110 transition-transform transform"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                loading="lazy"
                className="w-22 h-22 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <div
        className="bg-white dark:bg-gray-900 py-12 text-gray-800 dark:text-gray-300"
        id="projects"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-purple-500">
            Main Projects
          </h2>
          <hr className="border-t-2 border-blue-700 dark:border-purple-500 w-1/4 mx-auto mt-2" />
        </div>

        <div className="flex flex-col items-center gap-8">
          {projects.map((project, index) => (
            <div
              className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-6xl w-full"
              key={index}
            >
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400 mb-6 text-lg leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        className="bg-blue-600 dark:bg-purple-500 text-white text-sm font-semibold py-2 px-3 rounded-md cursor-pointer hover:scale-105 transition-transform"
                        key={idx}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center text-blue-600 dark:text-purple-400 text-sm space-x-4">
                    {project.sourceLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-purple-400 text-base font-medium relative transition duration-200 ease-out 
                                     before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 
                                     before:bg-blue-600 dark:before:bg-purple-400 hover:before:w-full hover:before:transition-all hover:scale-105"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
                {project.videoSrc ? (
                  <video className="w-full h-full object-cover" controls>
                    <source src={project.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  project.imageSrc && (
                    <img
                      src={project.imageSrc}
                      alt={`${project.title} Project`}
                      className="w-full h-full object-cover"
                    />
                  )
                )}
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
          <h2 className="text-3xl font-semibold text-blue-600 dark:text-purple-500">
            Contact
          </h2>
          <hr className="border-t-2 border-blue-600 dark:border-purple-500 w-1/4 mx-auto mt-2" />
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Get in touch with me via LinkedIn, GitHub, or email.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/rui-barreto-814071248/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-600 hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white w-6 h-6" />
          </a>

          <a
            href="https://github.com/ruib07"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-600 hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white w-6 h-6" />
          </a>

          <a
            href="mailto:ruibarreto07@outlook.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-600 hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-white w-6 h-6" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
