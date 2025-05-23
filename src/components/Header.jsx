import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          MyPortfolio
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        } bg-white dark:bg-gray-900 px-4`}
      >
        <nav className="flex flex-col space-y-2 py-3 text-gray-700 dark:text-gray-300">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="py-2 px-2 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
