import React from "react";
import heroImg from "../assets/avatar.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Ayaz Ansari
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Frontend Developer | React & Angular Enthusiast
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          I’m a passionate frontend developer who loves building user-friendly,
          high-performance web apps using modern frameworks and tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href="/AyazResumeFr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow text-center"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md text-center"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="Ayaz"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
