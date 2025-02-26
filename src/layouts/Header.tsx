import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full bg-blue-500 dark:bg-gray-900 z-10 transition duration-300"
    >
      <div
        className={`px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 ${
          isScrolled
            ? darkMode
              ? "bg-gray-800 bg-opacity-90 shadow-md"
              : "bg-blue-600 bg-opacity-90 shadow-md"
            : darkMode
            ? "bg-gray-900"
            : "bg-blue-500"
        } transition-all duration-300`}
      >
        <button
          onClick={toggleDarkMode}
          className="ml-auto flex items-center justify-center p-2 rounded-full focus:outline-none"
        >
          <div
            className={`flex items-center w-16 h-8 rounded-full p-1 cursor-pointer transition-all duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <span
              className={`text-xl absolute transition-transform duration-300 ${
                darkMode
                  ? "translate-x-8 opacity-100"
                  : "translate-x-0 opacity-0"
              }`}
            >
              🌙
            </span>
            <span
              className={`text-xl absolute transition-transform duration-300 ${
                darkMode
                  ? "translate-x-0 opacity-0"
                  : "translate-x-8 opacity-100"
              }`}
            >
              ☀️
            </span>
          </div>
        </button>
      </div>
    </Disclosure>
  );
}
