import { createElement } from "react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <div
        className="bg-white dark:bg-gray-900 py-12 text-gray-800 dark:text-gray-300"
        id="projects"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-700 dark:text-purple-500">
            Main Projects
          </h2>
          <hr className="border-t-2 border-blue-700 dark:border-purple-500 w-24 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6 flex flex-col justify-between">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-4xl text-gray-800 dark:text-gray-400"
                      >
                        {createElement(tech)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  {project.sourceLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-purple-400 text-base font-medium relative transition duration-200 ease-out before:absolute 
                                  before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 dark:before:bg-purple-400 hover:before:w-full
                                  hover:before:transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            className="bg-blue-500 dark:bg-purple-400 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-2xl">🏠</span>
          </button>
        </div>
      </div>
    </div>
  );
}
