import CreativeHubImg from "/assets/ProjectsImgs/CreativeHub.jpg";
import SkillSwapImg from "/assets/ProjectsImgs/SkillSwap.jpg";
import StockFlowImg from "/assets/ProjectsImgs/StockFlow.jpg";
import TakeATicketImg from "/assets/ProjectsImgs/TakeATicket.png";
import TaskQuestImg from "/assets/ProjectsImgs/TaskQuest.jpg";
import TheKnifeImg from "/assets/ProjectsImgs/TheKnife.jpeg";
import TodoAppImg from "/assets/ProjectsImgs/ToDo.jpeg";
import WeatherAppImg from "/assets/ProjectsImgs/WeatherApp.webp";

import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

export const projects = [
  {
    title: "TheKnife",
    description:
      "TheKnife aims to rival TheFork by offering users the ability to make restaurant reservations and allowing" +
      " restaurant managers to register and manage their restaurants.",
    techStack: [FaAngular, FaBootstrap, FaNodeJs, BiLogoPostgresql, FaDocker],
    imageSrc: TheKnifeImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TheKnife" },
    ],
  },
  {
    title: "TaskQuest",
    description:
      "TaskQuest is a web app made to companies who want a easier way to organize projects, employees, tasks and see" +
      " employees productivity on projects.",
    techStack: [
      FaReact,
      RiTailwindCssFill,
      FaNodeJs,
      BiLogoPostgresql,
      FaDocker,
    ],
    imageSrc: TaskQuestImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TaskQuest" },
    ],
  },
  {
    title: "CreativeHub",
    description:
      "CreativeHub is a web app made to developers, designers and photographers publish their projects. Other users can interact" +
      " putting comments and likes on projects.",
    techStack: [
      FaReact,
      RiTailwindCssFill,
      FaNodeJs,
      BiLogoPostgresql,
      FaDocker,
    ],
    imageSrc: CreativeHubImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/CreativeHub" },
    ],
  },
  {
    title: "SkillSwap",
    description:
      "SkillSwap is a web app inspired by Fiverr, users can request private sessions to receive training in a skill that is available" +
      " from a mentor.",
    techStack: [FaReact, RiTailwindCssFill, AiOutlineDotNet, DiMsqlServer],
    imageSrc: SkillSwapImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/SkillSwap" },
    ],
  },
  {
    title: "TodoApp",
    description:
      "TodoApp is a simple web app made to users place and organize their own tasks.",
    techStack: [FaReact, RiTailwindCssFill, AiOutlineDotNet, DiMsqlServer],
    imageSrc: TodoAppImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/ToDo-App" },
    ],
  },
  {
    title: "Stockflow",
    description:
      "Made for stores to manage products, customers, suppliers and revenues.",
    techStack: [FaReact, RiTailwindCssFill, AiOutlineDotNet, DiMsqlServer],
    imageSrc: StockFlowImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/StockFlow" },
    ],
  },
  {
    title: "TakeATicket",
    description:
      "Mobile app to users create tickets and assign the ticket for a admin.",
    techStack: [FaReact, FaNodeJs, BiLogoPostgresql, FaDocker],
    imageSrc: TakeATicketImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/TakeATicket" },
    ],
  },
  {
    title: "WeatherApp",
    description:
      "WeatherApp is a web app made for people to consult the weather in the cities around the world.",
    techStack: [FaHtml5, FaCss3Alt, RiJavascriptFill],
    imageSrc: WeatherAppImg,
    sourceLinks: [
      { label: "View Source", url: "https://github.com/ruib07/WeatherApp" },
    ],
  },
];
