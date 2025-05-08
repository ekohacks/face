import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Theme toggle">
      {isDark ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
