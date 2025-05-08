// src/components/Header.js
import React from "react";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";


const Header = () => {
  const { isDark } = useTheme(); 
  return (
    <header 
      className="py-4 shadow-md"
      style={{
        backgroundColor: 'var(--bg-header)',
        color: 'var(--text)',
        transition: 'background-color 0.3s, color 0.3s'
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
          <Link to="/">EkoHacks</Link>
        </h1>

        {/* <nav className="flex space-x-6">
                    <Link
                        to="/about"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/products"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                        Products
                    </Link>
                    
                </nav> */}
        <ThemeToggle />

      </div>
    </header>
  );
};

export default Header;
