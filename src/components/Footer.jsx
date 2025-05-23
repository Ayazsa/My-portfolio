import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Ayaz Ansari. All rights reserved.
        </p>

        <div className="flex space-x-5 justify-center md:justify-start text-xl">
          <a
            href="https://github.com/Ayazsa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ayazansari25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ansariayaz465@gmail.com"
            aria-label="Email"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
