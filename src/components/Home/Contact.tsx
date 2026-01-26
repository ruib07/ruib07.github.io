import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="py-20 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-gray-100">
          Get In Touch
        </h2>
        <hr className="border-t-2 border-indigo-600 dark:border-purple-500 w-12 mx-auto mt-3 mb-8" />

        <p className="text-slate-600 dark:text-gray-400 text-xl mb-10">
          I´m always open for new oportunities and colaborations. Choose one of
          this ways to get in touch with me:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/rui-barreto-814071248/"
            className="group flex flex-col items-center gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-slate-200 dark:border-gray-700 group-hover:border-indigo-500 dark:group-hover:border-purple-500 group-hover:-translate-y-2 transition-all duration-300">
              <FaLinkedin className="text-indigo-600 dark:text-purple-400 w-7 h-7" />
            </div>
            <span className="text-sm font-semibold text-slate-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/ruib07"
            className="group flex flex-col items-center gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-slate-200 dark:border-gray-700 group-hover:border-slate-900 dark:group-hover:border-white group-hover:-translate-y-2 transition-all duration-300">
              <FaGithub className="text-slate-800 dark:text-gray-200 w-7 h-7" />
            </div>
            <span className="text-sm font-semibold text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              GitHub
            </span>
          </a>

          <a
            href="mailto:ruibarreto07@outlook.com"
            className="group flex flex-col items-center gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-slate-200 dark:border-gray-700 group-hover:border-red-500 group-hover:-translate-y-2 transition-all duration-300">
              <FaEnvelope className="text-red-500 w-7 h-7" />
            </div>
            <span className="text-sm font-semibold text-slate-500 dark:text-gray-400 group-hover:text-red-500 transition-colors">
              Email
            </span>
          </a>
        </div>

        <div className="mt-20 text-slate-400 dark:text-gray-600 text-sm">
          © {new Date().getFullYear()} Rui Barreto. Built with React & Tailwind.
        </div>
      </div>
    </div>
  );
}
