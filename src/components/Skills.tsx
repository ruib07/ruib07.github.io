import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section className="bg-white py-12" id="skills">
      <h2 className="text-3xl font-semibold text-blue-600 text-center">
        My Top Skills
      </h2>
      <hr className="border-t-2 border-blue-700 w-1/4 mx-auto mt-2 mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4 max-w-screen-lg mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-center p-2 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:scale-110 transition-transform transform"
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
