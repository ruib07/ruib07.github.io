import TheKnifeVideo from "../assets/ProjectsImgs/TheKnifeVideo.mp4";
import TaskQuestImg from "../assets/ProjectsImgs/TaskQuest.jpg";
import CreativeHubImg from "../assets/ProjectsImgs/CreativeHub.png";
import BookSwapImg from "../assets/ProjectsImgs/BookSwap.png";
import LanchesMacImg from "../assets/ProjectsImgs/burguer-store.webp";

export const projects = [
  {
    title: "TheKnife",
    description:
      "TheKnife aims to rival TheFork by offering users the ability to make restaurant reservations and allowing restaurant managers to register and manage their restaurants.",
    techStack: ["Angular", "Bootstrap", "NodeJS", "PostgreSQL", "Docker"],
    videoSrc: TheKnifeVideo,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TheKnife" },
    ],
  },
  {
    title: "TaskQuest",
    description:
      "Streamline your business projects effortlessly. Create, organize, and manage projects with ease. Add team members, exchange messages, categorize tasks, and create detailed to-dos like coding or database planning within each category. Empower collaboration and boost productivity with this intuitive tool.",
    techStack: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL", "Docker"],
    imageSrc: TaskQuestImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TaskQuest" },
    ],
  },
  {
    title: "CreativeHub",
    description:
      "CreativeHub is a web app for developers, designers, and photographers to share their projects. Users can like, comment, and track engagement while managing their profiles and activity. Get insights on views, likes, and comments to see how your work resonates.",
    techStack: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL", "Docker"],
    imageSrc: CreativeHubImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/CreativeHub" },
    ],
  },
  {
    title: "BookSwap",
    description:
      "BookSwap is a web app that allows users to exchange books with each other, making it easy to share and discover new reads. Users can manage their books by adding images, deleting images, removing books, and creating a book. The platform also includes a review system, enabling users to share their opinions and explore feedback from others. Each user has a dedicated profile area where they can view and edit personal details, manage their books, and check their reviews.",
    techStack: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL", "Docker"],
    imageSrc: BookSwapImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/BookSwap" },
    ],
  },
  {
    title: "LanchesMac",
    description:
      "This website is an burguer store where the user can buy burguers. The website contains filters, categories, a carrousel slide, product page, shop cart, checkout, login, register, admin area.",
    techStack: ["ASP.NET MVC", "HTML", "Bootstrap", "EF Core", "SQL Server"],
    imageSrc: LanchesMacImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/LanchesMac" },
    ],
  },
];
