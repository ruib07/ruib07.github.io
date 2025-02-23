import TheKnifeVideo from "/assets/ProjectsImgs/TheKnifeVideo.mp4";
import TaskQuestImg from "/assets/ProjectsImgs/TaskQuest.jpg";
import CreativeHubImg from "/assets/ProjectsImgs/CreativeHub.jpg";
import SkillSwapImg from "/assets/ProjectsImgs/SkillSwap.jpg";

export const projects = [
  {
    title: "TheKnife",
    description:
      "TheKnife aims to rival TheFork by offering users the ability to make restaurant reservations and allowing" +
      " restaurant managers to register and manage their restaurants.",
    techStack: ["Angular", "Bootstrap", "NodeJS", "PostgreSQL", "Docker"],
    videoSrc: TheKnifeVideo,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TheKnife" },
    ],
  },
  {
    title: "TaskQuest",
    description:
      "Streamline your business projects effortlessly. Create, organize, and manage projects with ease. Add team members, exchange messages," +
      " categorize tasks, and create detailed to-dos like coding or database planning within each category. Empower collaboration and" +
      " boost productivity with this intuitive tool.",
    techStack: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL", "Docker"],
    imageSrc: TaskQuestImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TaskQuest" },
    ],
  },
  {
    title: "CreativeHub",
    description:
      "CreativeHub is a web app for developers, designers, and photographers to share their projects. Users can like, comment, and track" +
      " engagement while managing their profiles and activity. Get insights on views, likes, and comments to see how your work resonates.",
    techStack: ["React", "Tailwind CSS", "NodeJS", "PostgreSQL", "Docker"],
    imageSrc: CreativeHubImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/CreativeHub" },
    ],
  },
  {
    title: "SkillSwap",
    description:
      "This app allows users to request private training sessions with mentors. Users can find a mentor based on their expertise, request a session," +
      " make a payment to confirm the booking and provide feedback. Mentors can manage their sessions, accept requests, and add skills to their" +
      " profiles. Mentors can track their sessions, manage payments, and receive valuable reviews to improve their services.",
    techStack: [
      "React",
      "Tailwind CSS",
      ".NET Web API",
      "Ef Core",
      "SQL Server",
    ],
    imageSrc: SkillSwapImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/SkillSwap" },
    ],
  },
];
