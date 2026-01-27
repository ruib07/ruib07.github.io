import { useState, memo, useCallback } from "react";
import { jobs } from "../../constants/experience";

const JobItem = memo(
  ({
    job,
    isOpen,
    onToggle,
  }: {
    job: any;
    isOpen: boolean;
    onToggle: (id: string) => void;
  }) => {
    return (
      <div
        className="mb-4 bg-white dark:bg-gray-800/50 rounded-xl border border-slate-200 dark:border-gray-700 
                 transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-purple-500/50 hover:-translate-y-1"
      >
        <div
          onClick={() => onToggle(job.id)}
          className="cursor-pointer p-5 flex items-center justify-between"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left">
            <h2 className="text-xl font-bold text-indigo-600 dark:text-purple-400">
              {job.title}
            </h2>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 dark:bg-purple-900/30 text-indigo-700 dark:text-purple-300 sm:mr-6 mt-2 sm:mt-0 w-fit">
              {job.contractType}
            </span>
          </div>

          <span
            className={`text-slate-400 dark:text-gray-500 transform transition-transform duration-300 ${
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
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-6 text-left border-t border-slate-100 dark:border-gray-700/50 pt-4">
              <p className="text-slate-500 dark:text-purple-300/80 font-medium mb-3">
                {job.date}
              </p>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
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
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id],
    );
  }, []);

  return (
    <div className="text-center py-12" id="experience">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-gray-100">
        Work Experience
      </h1>
      <hr className="border-t-2 border-indigo-600 dark:border-purple-500 w-16 mx-auto mt-3 mb-10" />

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
