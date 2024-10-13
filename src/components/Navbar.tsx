import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; 
import '../styles/Navbar.css';
import Logo from '../assets/SkillsIcons/logo.png';

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleNavbar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarCentered"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <div className="collapse navbar-collapse justify-content-left ms-5">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item-logo">
                <a href="#start">
                  <img src={Logo} alt="Logo" />
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`collapse navbar-collapse me-5 ${!isCollapsed ? "show" : ""}`}
            id="navbarCentered"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#start">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Work Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br /><br />
    </>
  );
};

export default Navbar;
