import { useState } from "react";
import { jobs } from "../../constants/experience";

export default function WorkExperience() {
  const [activeJobs, setActiveJobs] = useState<string[]>([]);

  const handleToggle = (title: string) => {
    setActiveJobs((prevActiveJobs) =>
      prevActiveJobs.includes(title)
        ? prevActiveJobs.filter((job) => job !== title)
        : [...prevActiveJobs, title]
    );
  };

  return (
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
                <p
                  className="mt-2 text-gray-700 dark:text-gray-300 text-justify"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {job.modalDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
