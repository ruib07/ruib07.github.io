import React from 'react';
import '../styles/Projects.css';
import TheKnifeVideo from '../assets/ProjectsImgs/TheKnifeVideo.mp4';
import WeatherAppImg from '../assets/ProjectsImgs/WeatherApp.webp';
import ProEventosImg from '../assets/ProjectsImgs/event.jpg';
import LanchesMacImg from '../assets/ProjectsImgs/burguer-store.webp';
import TaskShareAppImg from '../assets/ProjectsImgs/Tasks-img.webp';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  videoSrc?: string;
  imageSrc?: string; 
  sourceLinks: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: 'TheKnife',
    description:
      'TheKnife aims to rival TheFork by offering users the ability to make restaurant reservations and allowing restaurant managers to register and manage their restaurants.',
    techStack: ['Angular', 'JS', 'Jest', 'Knex', 'Docker', 'PostgreSQL'],
    videoSrc: TheKnifeVideo,
    sourceLinks: [{ label: 'View Source', url: 'https://github.com/ruib07/TheKnife' }],
  },
  {
    title: 'WeatherApp',
    description:
      'Explore global weather conditions effortlessly. Get real-time updates on temperature, climate, and hourly forecasts for any city worldwide.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Public API'],
    imageSrc: WeatherAppImg,
    sourceLinks: [{ label: 'View Source', url: 'https://github.com/ruib07/WeatherApp' }],
  },
  {
    title: 'ProEventos',
    description:
      'This website is an event website where the user can make a reservation to an event, cancel is reservation, update his reservation, make a login, register and update the personal data.',
    techStack: ['Angular', 'C#', '.NET Web API', 'EF Core', 'SQL Server'],
    imageSrc: ProEventosImg,
    sourceLinks: [{ label: 'View Source', url: 'https://github.com/ruib07/ProEventos' }],
  },
  {
    title: 'LanchesMac',
    description:
      'This website is an burguer store where the user can buy burguers. The website contains filters, categories, a carrousel slide, product page, shop cart, checkout, login, register, admin area.',
    techStack: ['C#', 'MVC', 'HTML', 'Bootstrap', 'EF Core', 'SQL Server'],
    imageSrc: LanchesMacImg,
    sourceLinks: [{ label: 'View Source', url: 'https://github.com/ruib07/LanchesMac' }],
  },
  {
    title: 'TaskShare App',
    description:
      'This mobile app is a task organizer to the user make a list of tasks for the day. You can make a login, register, add a task, update a task and delete a task. The app is minimalistic and have a clean design.',
    techStack: ['React Native', 'C#', '.NET Web API', 'EF Core', 'SQL Server'],
    imageSrc: TaskShareAppImg,
    sourceLinks: [
      { label: 'View Frontend Source', url: 'https://github.com/ruib07/TaskShareFrontend' },
      { label: 'View Backend Source', url: 'https://github.com/ruib07/TaskShareBackend' },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="header">
        <h2 className="projects-header">Main Projects</h2>
        <hr className="hr-projects" />
      </div>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-content">
            <div className="project-details">
              <h3 className="project-subtitle">Featured Project</h3>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <button className="tech-btn" key={idx}>
                    {tech}
                  </button>
                ))}
              </div>
              {project.sourceLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }} className="source-link">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="project-image">
              {project.videoSrc ? (
                <video className="project-video" controls>
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                project.imageSrc && <img src={project.imageSrc} alt={`${project.title} Project`} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
