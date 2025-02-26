import { useNavigate } from "react-router-dom";

export default function NavigateHome() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div
      className={`fixed bottom-8 left-8 bg-blue-500 text-white dark:bg-purple-400 hover:bg-blue-600 dark:hover:bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity duration-400 ease-in-out ${"opacity-100"} sm:block hidden`}
      style={{ zIndex: 50 }}
    >
      <button
        onClick={goToHome}
        className="flex items-center justify-center w-full h-full bg-transparent border-none cursor-pointer focus:outline-none hover:scale-110"
        aria-label="Go to Home"
      >
        <span className="text-xl">🏠</span>
      </button>
    </div>
  );
}
