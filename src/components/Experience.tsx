import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import '../styles/Experience.css';
import TechConsultantImg from '../assets/WorkIcons/Job1.png';
import BackendDevImg from '../assets/WorkIcons/Job2.png';
import NETDevImg from '../assets/WorkIcons/Job3.png';
import FrontendDevImg from '../assets/WorkIcons/Job4.png';
import ITechImg from '../assets/WorkIcons/hardware.png';

interface JobDetails {
  title: string;
  description: string;
}

const Experience: React.FC = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState<JobDetails | null>(null);

  const handleClose = () => {
    setShow(false);
    setModalContent(null);
  };
  const handleShow = (title: string, description: string): void => {
    setModalContent({ title, description });
    setShow(true);
  };

  return (
    <div className="work-experience" id="experience">
      <h1>Work Experience</h1>
      <div className="card-container">
        <div className="card">
          <div className="icon-text">
            <div className="icon-container">
              <img src={TechConsultantImg} alt="Icon 2" />
            </div>
            <h2>Technical Consultant Trainee</h2>
          </div>
          <p>Developing an integration between 2 softwares.</p>
          <Button className="learn-more" onClick={() => handleShow(
              'Technical Consultant Trainee - Cegid Primavera',
              'The objective of my internship was to develop an integration between 2 softwares. I developed robust functionalities that enable comprehensive employee management across both software platforms. Additionally, I implemented an initial feature to efficiently oversee employee training programs. I also conducted thorough end-to-end testing to ensure the reliability and effectiveness of the functionalities I developed.'
            )}>
            Learn More
          </Button>
        </div>

        <div className="card">
          <div className="icon-text">
            <div className="icon-container">
              <img src={BackendDevImg} alt="Icon 2" />
            </div>
            <h2>Backend Developer Trainee</h2>
          </div>
          <p>Learned how to make good APIs with .NET Web API.</p>
          <Button className="learn-more"  onClick={() => handleShow(
              'Backend Developer Trainee - Activex',
              'I learned how to use effectively .NET Web API with Swagger, to make a clean code with C#, to create, update, delete and making queries to consult tables with SQL Server and learned the best practices to build good APIs.'
            )}>
            Learn More
          </Button>
        </div>

        <div className="card">
          <div className="icon-text">
            <div className="icon-container">
              <img src={NETDevImg} alt="Icon 2" />
            </div>
            <h2>.NET Developer Trainee</h2>
          </div>
          <p>Learning how to make web applications with ASP.NET MVC.</p>
          <Button className="learn-more"  onClick={() => handleShow(
              '.NET Developer Trainee - Activex',
              'I made a formation to learn how to make a website using C#, ASP.NET MVC, Entity Framework Core and SQL Server.'
            )}>
            Learn More
          </Button>
        </div>

        <div className="card">
          <div className="icon-text">
            <div className="icon-container">
              <img src={FrontendDevImg} alt="Icon 2" />
            </div>
            <h2>Frontend Developer</h2>
          </div>
          <p>Develop the frontend for websites to company clients.</p>
          <Button className="learn-more"  onClick={() => handleShow(
              'Frontend Developer - Activex',
              'This internship I developed the frontend for the websites for the clients using WordPress, HTML, CSS, and JavaScript.'
            )}>
            Learn More
          </Button>
        </div>

        <div className="card">
          <div className="icon-text">
            <div className="icon-container">
              <img src={ITechImg} alt="Icon 4" />
            </div>
            <h2>IT Technician</h2>
          </div>
          <p>Responsible for helping the team to resolve hardware problems.</p>
          <Button className="learn-more"  onClick={() => handleShow(
              'IT Technician - Município de Braga',
              'In this internship I worked in the hardware area. I helped with troubleshooting employee computers, assembling computers, installing operating systems and software on new computers and changing equipment.'
            )}>
            Learn More
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Experience;
