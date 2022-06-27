import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("light");
}

const ThemeToggle: React.FC = () => {
  return (
    <button
      onClick={toggleTheme}
      title={`Toggle theme.`}
      className="w-8 hover:text-red-600 sm:h-8 sm:right-4 sm:top-6"
    >
      <FontAwesomeIcon icon={faMoon} size="2x" className="dark:hidden" />
      <FontAwesomeIcon icon={faSun} size="2x" className="dark:block hidden" />
    </button>
  );
};

export default ThemeToggle;
