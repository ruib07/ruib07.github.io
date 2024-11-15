import TheKnifeVideo from "../assets/ProjectsImgs/TheKnifeVideo.mp4";
import TaskQuestImg from "../assets/ProjectsImgs/TaskQuest.jpg";
import WeatherAppImg from "../assets/ProjectsImgs/WeatherApp.webp";
import ProEventosImg from "../assets/ProjectsImgs/event.jpg";
import LanchesMacImg from "../assets/ProjectsImgs/burguer-store.webp";

export const projects = [
  {
    title: "TheKnife",
    description:
      "TheKnife aims to rival TheFork by offering users the ability to make restaurant reservations and allowing restaurant managers to register and manage their restaurants.",
    techStack: ["Angular", "JS", "Jest", "Knex", "Docker", "PostgreSQL"],
    videoSrc: TheKnifeVideo,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TheKnife" },
    ],
  },
  {
    title: "TaskQuest",
    description:
      "Streamline your business projects effortlessly. Create, organize, and manage projects with ease. Add team members, exchange messages, categorize tasks, and create detailed to-dos like coding or database planning within each category. Empower collaboration and boost productivity with this intuitive tool.",
    techStack: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL", "PostgreSQL"],
    imageSrc: TaskQuestImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TaskQuest" },
    ],
  },

  {
    title: "WeatherApp",
    description:
      "Explore global weather conditions effortlessly. Get real-time updates on temperature, climate, and hourly forecasts for any city worldwide.",
    techStack: ["HTML", "CSS", "JavaScript", "Public API"],
    imageSrc: WeatherAppImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/WeatherApp" },
    ],
  },
  {
    title: "ProEventos",
    description:
      "This website is an event website where the user can make a reservation to an event, cancel is reservation, update his reservation, make a login, register and update the personal data.",
    techStack: ["Angular", "C#", ".NET Web API", "EF Core", "SQL Server"],
    imageSrc: ProEventosImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/ProEventos" },
    ],
  },
  {
    title: "LanchesMac",
    description:
      "This website is an burguer store where the user can buy burguers. The website contains filters, categories, a carrousel slide, product page, shop cart, checkout, login, register, admin area.",
    techStack: ["C#", "MVC", "HTML", "Bootstrap", "EF Core", "SQL Server"],
    imageSrc: LanchesMacImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/LanchesMac" },
    ],
  },
];
