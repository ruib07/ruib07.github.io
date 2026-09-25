import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#start", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

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

  const DarkModeToggle = (
    <button
      onClick={toggleDarkMode}
      className="
        flex items-center justify-center
        p-2
        rounded-full
        focus:outline-none
        cursor-pointer
      "
      aria-label="Toggle dark mode"
    >
      <div
        className="
          flex items-center
          w-14 h-7
          rounded-full
          p-1
          transition-all duration-300
          shadow-inner
          bg-surface
          border border-text/10
        "
      >
        <div
          className={`
            flex items-center justify-center
            w-5 h-5
            rounded-full
            shadow-md
            transition-all duration-300
            ${
              darkMode
                ? "translate-x-7 bg-button"
                : "translate-x-0 bg-background"
            }
          `}
        >
          {darkMode ? (
            <span className="text-[12px] select-none">🌙</span>
          ) : (
            <span className="text-[12px] select-none">☀️</span>
          )}
        </div>
      </div>
    </button>
  );

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 transition-colors duration-300"
    >
      {({ open, close }) => (
        <>
          <div
            className={`
              px-4 sm:px-6 lg:px-8
              flex items-center justify-between
              gap-4
              transition-all duration-300
              border-b
              ${
                isScrolled || open
                  ? "h-16 bg-background/90 backdrop-blur-md shadow-md border-text/10"
                  : "h-20 bg-background border-transparent"
              }
            `}
          >
            <a
              href="#start"
              className="text-lg sm:text-xl font-bold text-text tracking-tight shrink-0"
            >
              Rui<span className="text-accent">Barreto</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {DarkModeToggle}

              <Disclosure.Button
                className="
                  md:hidden
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  text-text
                  hover:bg-surface
                  transition-colors
                  cursor-pointer
                  focus:outline-none
                "
                aria-label="Toggle navigation menu"
              >
                {open ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-background border-b border-text/10 shadow-md">
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <Disclosure.Button
                  key={link.href}
                  as="a"
                  href={link.href}
                  onClick={() => close()}
                  className="py-3 text-base font-semibold text-text-secondary hover:text-accent transition-colors border-b border-text/10 last:border-b-0"
                >
                  {link.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}