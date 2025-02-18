// src/components/Header.js
import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">
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
      </div>
    </header>
  );
};

export default Header;
