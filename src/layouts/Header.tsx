import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";

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
      className="fixed top-0 w-full z-50 transition duration-300"
    >
      <div
        className={`px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "h-16 bg-gray-800 bg-opacity-90 shadow-md border-b border-gray-800"
              : "h-16 bg-slate-50 bg-opacity-80 shadow-md border-b border-slate-200"
            : darkMode
              ? "h-20 bg-gray-900"
              : "h-20 bg-slate-50"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="ml-auto flex items-center justify-center p-2 rounded-full focus:outline-none"
        >
          <div
            className={`flex items-center w-14 h-7 rounded-full p-1 cursor-pointer transition-all duration-300 shadow-inner ${
              darkMode ? "bg-gray-700" : "bg-slate-200"
            }`}
          >
            <div
              className={`flex items-center justify-center w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode
                  ? "translate-x-7 bg-gray-900"
                  : "translate-x-0 bg-white"
              }`}
            >
              {darkMode ? (
                <span className="text-[12px] select-none">🌙</span>
              ) : (
                <span className="text-[12px] select-none">☀️</span>
              )}
            </div>
          </div>
        </button>
      </div>
    </Disclosure>
  );
}
