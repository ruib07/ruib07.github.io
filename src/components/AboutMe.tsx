import React from "react";
import '../styles/AboutMe.css';
import Avatar from '../assets/SkillsIcons/avatar.png';

const AboutMe: React.FC = () => {
  return (
    <div className="intro-section" id="start">
      <div className="hello-arrow">
        <p className="hello-text">
          Hello! I’m <span className="highlight-name">Rui Barreto</span>
        </p>
        <div className="arrow"></div>
      </div>

      <div className="avatar-description">
        <div className="avatar-container">
          <img
            src={Avatar}
            alt="Avatar with Laptop"
            className="avatar"
          />
        </div>
        <div className="intro-text">
          <p className="description">
            A passionate Developer who <br />
            <span className="highlight-judges">
              turns ideas into code, one line at a time.
            </span>
          </p>
        </div>
      </div>

      <br /><br />

      <div className="small-description">
        <h1 style={{ textAlign: "center" }}>
          Currently a <span className="highlight-job">Full-Stack Developer</span>
        </h1>
        <p className="bio">
          As a dedicated Full-Stack Developer, I am driven by a relentless curiosity
          for new programming languages and technologies. I am committed to staying
          ahead of industry trends, continuously learning, and mastering emerging
          tools to solve complex problems and drive innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
