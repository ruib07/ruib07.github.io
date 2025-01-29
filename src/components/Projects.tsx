import { projects } from "../data/projects";

export default function Projects() {
  return (
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
  );
}
