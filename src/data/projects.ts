import TheKnifeImg from "/assets/ProjectsImgs/TheKnife.jpeg";
import TaskQuestImg from "/assets/ProjectsImgs/TaskQuest.jpg";
import CreativeHubImg from "/assets/ProjectsImgs/CreativeHub.jpg";
import SkillSwapImg from "/assets/ProjectsImgs/SkillSwap.jpg";
import WeatherAppImg from "/assets/ProjectsImgs/WeatherApp.webp";
import TodoAppImg from "/assets/ProjectsImgs/ToDo.jpeg";

import {
  FaAngular,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";

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
