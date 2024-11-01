import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="bg-white py-12" id="projects">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-700">Main Projects</h2>
        <hr className="border-t-2 border-blue-700 w-1/4 mx-auto mt-2" />
      </div>

      <div className="flex flex-col items-center gap-8">
        {projects.map((project, index) => (
          <div
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full"
            key={index}
          >
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-md font-semibold text-blue-600 mb-2">
                  Featured Project
                </h3>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      className="bg-blue-600 text-white text-xs font-semibold py-2 px-2 rounded cursor-pointer"
                      key={idx}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap">
                  {project.sourceLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mr-4 text-xs"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex-shrink-0">
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
