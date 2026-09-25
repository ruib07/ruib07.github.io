import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [windowScrolled, setWindowScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed bottom-8 right-8
        bg-button
        text-background dark:text-text
        hover:bg-text
        hover:text-background
        rounded-full
        w-12 h-12
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        ease-in-out
        hover:-translate-y-1
        ${
          windowScrolled
            ? "opacity-100"
            : "opacity-0 invisible"
        }
        sm:block hidden
      `}
      style={{ zIndex: 50 }}
    >
      <button
        onClick={scrollToTop}
        className="
          flex items-center justify-center
          w-full h-full
          bg-transparent
          border-none
          cursor-pointer
          focus:outline-none
        "
        aria-label="Scroll to top"
      >
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
}