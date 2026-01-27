import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const contactLinks = [
  {
    href: "https://www.linkedin.com/in/rui-barreto-814071248/",
    label: "LinkedIn",
    icon: FaLinkedin,
    colorClass: "text-indigo-600 dark:text-purple-400",
    hoverBorder:
      "group-hover:border-indigo-500 dark:group-hover:border-purple-500",
    hoverText: "group-hover:text-indigo-600 dark:group-hover:text-purple-400",
  },
  {
    href: "https://github.com/ruib07",
    label: "GitHub",
    icon: FaGithub,
    colorClass: "text-slate-800 dark:text-gray-200",
    hoverBorder: "group-hover:border-slate-900 dark:group-hover:border-white",
    hoverText: "group-hover:text-slate-900 dark:group-hover:text-white",
  },
  {
    href: "mailto:ruibarreto07@outlook.com",
    label: "Email",
    icon: FaEnvelope,
    colorClass: "text-red-500",
    hoverBorder: "group-hover:border-red-500",
    hoverText: "group-hover:text-red-500",
  },
];
