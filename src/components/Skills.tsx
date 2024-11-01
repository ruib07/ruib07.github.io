import { useState, useEffect } from "react";
import ArrowLeft from "../assets/SkillsIcons/arrowleft.png";
import ArrowRight from "../assets/SkillsIcons/arrowright.png";
import { skillsData } from "../data/skills";

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 5;

  const startIndex = currentPage * skillsPerPage;
  const endIndex = startIndex + skillsPerPage;

  const currentSkills = skillsData.slice(startIndex, endIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prev) => (endIndex >= skillsData.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentPage, endIndex]);

  return (
    <section className="bg-white py-12" id="skills">
      <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">
        My Top Skills
      </h2>
      <div className="flex justify-center flex-wrap gap-8 mb-8">
        {currentSkills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={skill.src}
              alt={skill.alt}
              loading="lazy"
              className="w-20 h-22 object-cover transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={startIndex === 0}
          className={`mx-2 p-2 rounded bg-blue-600 text-white transition duration-300 
                      ${
                        startIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-blue-700"
                      }`}
        >
          <img src={ArrowLeft} alt="arrow left" className="w-4 h-4" />
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={endIndex >= skillsData.length}
          className={`mx-2 p-2 rounded bg-blue-600 text-white transition duration-300 
                      ${
                        endIndex >= skillsData.length
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-blue-700"
                      }`}
        >
          <img src={ArrowRight} alt="arrow right" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
