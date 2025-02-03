import { skillsData } from "../data/skills";

export default function Skills() {
  return (
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
              className="w-22 h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
