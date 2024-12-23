// app/components/ui/Header.tsx
"use client"; // Ensures the use of client-side hooks

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Font Awesome icons

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in the system
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);

    // Apply the dark class if dark mode is preferred by the system
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <header className="bg-zinc-900 text-white p-4 border-b border-zinc-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary-500 p-2 rounded-full"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-400" />
                ) : (
                  <FaMoon className="text-blue-400" />
                )}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
