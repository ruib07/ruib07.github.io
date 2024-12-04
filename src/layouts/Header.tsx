import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../data/navigation";
import Icon from "../assets/logo.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

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
      className="fixed top-0 w-full bg-blue-600 dark:bg-gray-900 z-10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="hidden sm:flex items-center">
            <a
              href="#start"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#start");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <img alt="MyPortfolioIcon" src={Icon} className="h-8 w-auto" />
            </a>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={classNames(
                      item.current
                        ? "bg-blue-900 text-white dark:bg-gray-700 dark:text-gray-100"
                        : "text-gray-100 hover:bg-blue-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                      "rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 text-blue-300 dark:text-gray-300 focus:outline-none"
            >
              <div
                className={`flex items-center justify-between w-16 h-8 rounded-full p-1 transition-all duration-300 ${
                  darkMode ? "bg-gray-700" : "bg-yellow-400"
                }`}
              >
                <span
                  className={`text-xl transition-all duration-300 ${
                    darkMode ? "translate-x-0" : "-translate-x-8"
                  } ${darkMode ? "visible" : "invisible"}`}
                >
                  🌙
                </span>
                <span
                  className={`text-xl transition-all duration-300 ${
                    darkMode ? "translate-x-8" : "translate-x-0"
                  } ${darkMode ? "invisible" : "visible"}`}
                >
                  ☀️
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Transition
        enter="transition transform duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition transform duration-300 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-blue-600 dark:bg-gray-900">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={classNames(
                  item.current
                    ? "bg-blue-900 text-white dark:bg-gray-700 dark:text-gray-100"
                    : "text-gray-100 hover:bg-blue-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}
