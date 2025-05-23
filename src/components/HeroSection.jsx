import React from "react";
import heroImg from "../assets/avatar.png";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Text */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-blue-600">Ayaz Ansari</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Frontend Developer | React & Angular Enthusiast
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          I’m a passionate frontend developer who builds performant, accessible,
          and modern web apps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href="/AyazResumeFr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow text-center transition duration-300"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md text-center transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={heroImg}
          alt="Ayaz"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;
