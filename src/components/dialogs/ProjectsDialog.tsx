import { createElement } from "react";
import { projects } from "../../constants/projects";
import { IProjectsDialogProps } from "../../types/projectDialog";

export default function ProjectsDialog({
  open,
  onClose,
}: IProjectsDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-900 w-[95%] max-w-7xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6 scroll-smooth">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-blue-700 dark:text-purple-500">
            Main Projects
          </h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-600 dark:text-gray-300 hover:text-red-500"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <hr className="border-t-2 border-blue-700 dark:border-purple-500 w-24 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {project.title}
                  </h3>

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
      </div>
    </div>
  );
}
