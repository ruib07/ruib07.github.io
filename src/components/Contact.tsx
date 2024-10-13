import React from "react";
import '../styles/Contact.css';
import LinkedinLogo from '../assets/SkillsIcons/linkedin.webp';
import GitHubLogo from '../assets/SkillsIcons/github.png';
import EmailLogo from '../assets/SkillsIcons/email.png';

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">Contact</h2>
        <hr className="hr-contact" />
        <br />
      </div>

      <div className="contact-body">
        <p className="contact-paragraph">
          Get in touch with me via LinkedIn, GitHub or email.
        </p>

        <div className="contact-links">
          <div className="linkedin-contact">
            <a
              href="https://www.linkedin.com/in/rui-barreto-814071248/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="LinkedIn" />
            </a>
          </div>

          <div className="linkedin-contact">
            <a
              href="https://github.com/ruib07"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubLogo} alt="GitHub" />
            </a>
          </div>

          <div className="email-contact">
            <a
              href="mailto:ruibarreto07@outlook.com"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailLogo} alt="Email" />
            </a>
          </div>
        </div>
      </div><br /><br />
    </div>
  );
};

export default Contact;
