import { createElement, ElementType, memo } from "react";
import { projects } from "../../constants/projects";
import { IProjectsDialogProps } from "../../types/projectDialog";
import { IProject, IProjectCardProps } from "../../types/project";

const ProjectCard = memo(({ project }: IProjectCardProps) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-slate-200 dark:border-gray-700
                 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transform-gpu"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col h-[320px]">
        {" "}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-2">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {project.techStack.map((tech: ElementType, idx: number) => (
              <span
                key={idx}
                className="text-2xl text-slate-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors"
                title="Technology used"
              >
                {createElement(tech)}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-4 flex gap-4">
          {project.sourceLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all
                         bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white
                         dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-600 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function ProjectsDialog({
  open,
  onClose,
}: IProjectsDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/90 transition-opacity"
        onClick={onClose}
      />

      <div
        className="relative bg-slate-50 dark:bg-gray-900 w-full max-w-7xl max-h-[90vh] 
                   overflow-y-auto rounded-2xl shadow-2xl p-6 sm:p-10 scroll-smooth border border-slate-200 dark:border-gray-800"
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <hr className="border-t-4 border-indigo-600 dark:border-purple-500 w-16 mt-3" />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-800 text-slate-500 dark:text-gray-400 transition-colors"
            aria-label="Close dialog"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: IProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
