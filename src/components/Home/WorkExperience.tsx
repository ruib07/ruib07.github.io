import { useState, memo, useCallback } from "react";
import { jobs } from "../../constants/experience";

interface IJob {
  id: string;
  title: string;
  contractType: string;
  date: string;
  modalDescription: string;
}

const JobItem = memo(
  ({
    job,
    isOpen,
    onToggle,
  }: {
    job: IJob;
    isOpen: boolean;
    onToggle: (id: string) => void;
  }) => {
    return (
      <div
        className="
          mb-4
          bg-surface
          rounded-xl
          border border-text/10
          transition-all duration-300
          hover:shadow-md
          hover:border-accent
          hover:-translate-y-1
        "
      >
        <div
          onClick={() => onToggle(job.id)}
          className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between min-w-0 flex-1 text-left gap-2 sm:gap-0">
            <h2 className="text-lg sm:text-xl font-bold text-accent break-words">
              {job.title}
            </h2>

            <span
              className="
                text-sm font-medium
                px-3 py-1
                rounded-full
                bg-background
                text-accent
                border border-accent/20
                sm:mr-6
                w-fit
                shrink-0
              "
            >
              {job.contractType}
            </span>
          </div>

          <span
            className={`shrink-0 text-text-secondary transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="
                px-4 sm:px-5 pb-6
                text-left
                border-t border-text/10
                pt-4
              "
            >
              <p className="text-accent font-medium mb-3">
                {job.date}
              </p>

              <p className="text-text-secondary leading-relaxed whitespace-pre-line text-justify">
                {job.modalDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

JobItem.displayName = "JobItem";

export default function WorkExperience() {
  const [activeJobs, setActiveJobs] = useState<string[]>([]);

  const handleToggle = useCallback((id: string) => {
    setActiveJobs((prev) =>
      prev.includes(id)
        ? prev.filter((jobId) => jobId !== id)
        : [...prev, id],
    );
  }, []);

  return (
    <div
      className="text-center py-12 bg-background text-text transition-colors duration-300"
      id="experience"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-text px-4">
        Work Experience
      </h1>

      <hr className="border-t-2 border-accent w-16 mx-auto mt-3 mb-10" />

      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            isOpen={activeJobs.includes(job.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}