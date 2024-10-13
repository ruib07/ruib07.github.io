import React, { useState, useEffect } from "react";
import '../styles/Skills.css';

import ArrowLeft from '../assets/SkillsIcons/arrowleft.png';
import ArrowRight from '../assets/SkillsIcons/arrowright.png';
import ReactImg from '../assets/SkillsIcons/react.svg.webp';
import AngularImg from '../assets/SkillsIcons/angular.png';
import CSharpImg from '../assets/SkillsIcons/csharp.svg.png';
import RestAPIsImg from '../assets/SkillsIcons/restapis.png';
import DatabaseImg from '../assets/SkillsIcons/database.png';
import HTMLImg from '../assets/SkillsIcons/html.png';
import CSSImg from '../assets/SkillsIcons/css.png';
import JavaScriptImg from '../assets/SkillsIcons/javascript.webp';
import TypescriptImg from '../assets/SkillsIcons/typescript.png';
import BootstrapImg from '../assets/SkillsIcons/bootstrap.png';

interface Skill {
  src: string;
  alt: string;
}

const skillsData: Skill[] = [
  { src: ReactImg, alt: "React" },
  { src: AngularImg, alt: "Angular" },
  { src: CSharpImg, alt: "C#" },
  { src: RestAPIsImg, alt: "REST APIs" },
  { src: DatabaseImg, alt: "Databases" },
  { src: HTMLImg, alt: "HTML" },
  { src: CSSImg, alt: "CSS" },
  { src: JavaScriptImg, alt: "JavaScript" },
  { src: TypescriptImg, alt: "TypeScript" },
  { src: BootstrapImg, alt: "Bootstrap" }
];

const Skills: React.FC = () => {
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
    <section className="skills" id="skills">
      <h2 className="skill-header">My Top Skills</h2>
      <div className="skills-wrapper">
        {currentSkills.map((skill, index) => (
          <div key={index} className="skills-icons">
            <img
              src={skill.src}
              alt={skill.alt}
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={startIndex === 0}>
          <img src={ArrowLeft} alt="arrowleft" />
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={endIndex >= skillsData.length}>
          <img src={ArrowRight} alt="arrowright" />
        </button>
      </div><br /><br />
    </section>
  );
};

export default Skills;
