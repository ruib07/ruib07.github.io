import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { contactLinks } from "../../constants/contactLinks";

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  return (
    <div
      className="py-16 sm:py-20 px-4 bg-background text-text transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-text">
          Get In Touch
        </h2>

        <hr className="border-t-2 border-accent w-12 mx-auto mt-3 mb-8" />

        <p className="text-text-secondary text-base sm:text-xl mb-10">
          I'm always open for new opportunities and collaborations. Choose one
          of these ways to get in touch with me:
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex flex-col items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow me on ${link.label}`}
            >
              <div
                className="
                  w-14 h-14 sm:w-16 sm:h-16
                  flex items-center justify-center
                  rounded-2xl
                  bg-surface
                  shadow-md
                  border border-text/10
                  text-accent
                  transition-all duration-300
                  group-hover:-translate-y-2
                  group-hover:border-accent
                  group-hover:bg-accent
                  group-hover:text-background
                "
              >
                <link.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <span
                className="
                  text-sm font-semibold
                  text-text-secondary
                  transition-colors
                  group-hover:text-accent
                "
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 text-text-secondary/60 text-sm">
          © {CURRENT_YEAR} Rui Barreto. Built with React & Tailwind.
        </div>
      </div>
    </div>
  );
}