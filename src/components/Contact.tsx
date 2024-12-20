import LinkedinLogo from "../assets/ContactIcons/linkedin.webp";
import GitHubLogo from "../assets/ContactIcons/github.png";
import EmailLogo from "../assets/ContactIcons/email.png";

export default function Contact() {
  return (
    <div
      className="bg-white dark:bg-gray-900 py-12 text-gray-800 dark:text-gray-300"
      id="contact"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-purple-500">
          Contact
        </h2>
        <hr className="border-t-2 border-blue-600 dark:border-purple-500 w-1/4 mx-auto mt-2" />
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Get in touch with me via LinkedIn, GitHub, or email.
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/rui-barreto-814071248/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-600 hover:scale-110 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedinLogo} alt="LinkedIn" className="w-6 h-6" />
        </a>

        <a
          href="https://github.com/ruib07"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-600 hover:scale-110 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub" className="w-8 h-8" />
        </a>

        <a
          href="mailto:ruibarreto07@outlook.com"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-600 hover:scale-110 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={EmailLogo} alt="Email" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
