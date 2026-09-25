import { memo, useEffect } from "react";
import { projects } from "../../constants/projects";
import { IProjectsDialogProps } from "../../types/projectDialog";
import { IProject, IProjectCardProps } from "../../types/project";

const ProjectCard = memo(({ project }: IProjectCardProps) => {
  return (
    <div
      className="
        bg-surface
        rounded-xl
        overflow-hidden
        border border-text/10
        transition-all duration-300
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transform-gpu
      "
    >
      <div className="relative h-44 sm:h-56 overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.title}
          width={400}
          height={224}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col min-h-[280px] sm:min-h-[320px]">
        <div className="flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-text mb-2">
            {project.title}
          </h3>

          <p className="text-text-secondary mb-4 text-sm leading-relaxed line-clamp-4 text-justify">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {project.techStack.map((TechIcon, idx) => (
              <span
                key={idx}
                className="
                  text-2xl
                  text-text-secondary
                  hover:text-accent
                  transition-colors
                "
              >
                <TechIcon />
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-wrap gap-4">
          {project.sourceLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-lg
                text-sm
                font-semibold
                transition-all
                bg-background
                text-accent
                border border-accent/20
                hover:bg-button
                hover:text-background
                hover:border-button
              "
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
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Featured Projects"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-text/80 transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="
          relative
          bg-background
          text-text
          w-full
          max-w-5xl
          max-h-[92vh] sm:max-h-[80vh]
          flex
          flex-col
          rounded-2xl
          shadow-2xl
          border border-text/10
          overflow-hidden
        "
      >
        {/* Header */}
        <div
          className="
            flex
            justify-between
            items-center
            px-4 sm:px-10
            py-4 sm:py-5
            shrink-0
            bg-background
            z-10
            border-b border-text/10
          "
        >
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-text">
              Featured Projects
            </h2>

            <hr className="border-t-4 border-accent w-16 mt-2" />
          </div>

          <button
            onClick={onClose}
            className="
              p-2
              -mr-2
              rounded-full
              hover:bg-surface
              text-text-secondary
              hover:text-text
              transition-colors
              cursor-pointer
            "
            aria-label="Close dialog"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
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

        {/* Projects */}
        <div className="p-4 sm:p-10 overflow-y-auto scroll-smooth overscroll-contain">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {projects.map((project: IProject, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}