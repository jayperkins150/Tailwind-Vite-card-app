import React, { useState, useEffect } from 'react';

// Utility function to get the initial theme preference
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme());
  const isDark = theme === 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-4 py-2 rounded 
                bg-blue-500 hover:bg-blue-600 
                dark:bg-indigo-500 dark:hover:bg-indigo-600 
                text-white transition"
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode" }
    </button>
  );
}
