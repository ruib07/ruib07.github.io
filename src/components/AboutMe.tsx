import Avatar from "../assets/myphoto.jpeg";

export default function AboutMe() {
  return (
    <div
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-16 px-4 md:px-8 lg:px-16"
      id="start"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 dark:border-gray-700 shadow-lg">
          <img
            src={Avatar}
            alt="Avatar with Laptop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 dark:text-gray-400">
            A passionate Developer who <br />
            <span className="text-blue-600 dark:text-purple-400 font-semibold">
              turns ideas into code, one line at a time.
            </span>
          </p>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Currently a{" "}
          <span className="text-blue-600 dark:text-purple-400">
            Full-Stack Developer
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-justify">
          As a dedicated Full-Stack Developer, I am driven by a relentless
          curiosity for new programming languages and technologies. I am
          committed to staying ahead of industry trends, continuously learning,
          and mastering emerging tools to solve complex problems and drive
          innovation.
        </p>
      </div>
    </div>
  );
}
