import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { contactLinks } from "../../constants/contactLinks";

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  return (
    <div className="py-20 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-gray-100">
          Get In Touch
        </h2>
        <hr className="border-t-2 border-indigo-600 dark:border-purple-500 w-12 mx-auto mt-3 mb-8" />

        <p className="text-slate-600 dark:text-gray-400 text-xl mb-10">
          I'm always open for new opportunities and collaborations. Choose one
          of these ways to get in touch with me:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
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
                className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-slate-200 dark:border-gray-700 transition-all duration-300 group-hover:-translate-y-2 ${link.hoverBorder}`}
              >
                <link.icon className={`${link.colorClass} w-7 h-7`} />
              </div>
              <span
                className={`text-sm font-semibold text-slate-500 dark:text-gray-400 transition-colors ${link.hoverText}`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 text-slate-400 dark:text-gray-600 text-sm">
          © {CURRENT_YEAR} Rui Barreto. Built with React & Tailwind.
        </div>
      </div>
    </div>
  );
}
