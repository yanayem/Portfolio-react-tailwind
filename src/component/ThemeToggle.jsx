import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";

// Run once, before component renders, to prevent flash
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Keep in sync with localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed z-50 p-2 top-3 right-4"
    >
      {isDarkMode ? (
        <Sun className="h-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
