import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Theme Context Demo
        </h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-primary-light dark:bg-primary-dark 
                   text-white font-medium hover:opacity-90 transition-opacity
                   focus:outline-none focus:ring-2 focus:ring-offset-2 
                   focus:ring-primary-light dark:focus:ring-primary-dark"
        >
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
