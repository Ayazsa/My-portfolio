import React from "react";
import {
  FaReact,
  FaAngular,
  FaTools,
  FaMapMarkerAlt,
  FaRocket,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const skills = [
  { name: "React", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "Angular", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "HTML & CSS", level: 95 },
];

const experiences = [
  {
    role: "Frontend Developer ",
    company: "Techseed IT Consulting & Services",
    duration: "Nov 2023 - Mar 2025",
    description:
      "Developed and optimized UI components using React and Tailwind CSS. Worked on building reusable code and integrating APIs.",
  },
];

const education = [
  {
    degree: "Bachelor of Engineering (Electronics and Telecommunication)",
    institution: "Sandip Institue of Engineering and Management, Nashik ",
    duration: "2016 - 2020",
    description:
      "Graduated from Sandip Institute of Engineering and Management affiliated with Savitribai Phule Pune University",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-14 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 border-b-4 border-indigo-400 pb-2 inline-block mb-10 tracking-wide">
        About Me
      </h2>

      {/* Profile Card */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10">
        <p className="text-lg sm:text-xl leading-7 text-gray-800 dark:text-gray-300 mb-4">
          I’m a{" "}
          <span className="text-indigo-600 font-semibold">
            Frontend Developer
          </span>{" "}
          passionate about building responsive, accessible, and scalable web
          apps using modern JavaScript frameworks.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none text-base sm:text-lg mb-6">
          <li className="flex items-start">
            <FaReact className="text-blue-500 text-xl mt-1 mr-2" />
            <span>
              <span className="font-semibold">Tech Stack:</span> HTML, CSS,
              Bootstrap, Tailwind-CSS, JavaScript, React, Angular
            </span>
          </li>
          <li className="flex items-start">
            <FaTools className="text-gray-600 dark:text-gray-300 text-xl mt-1 mr-2" />
            <span>
              <span className="font-semibold">Tools:</span> VS Code, Git,
              GitHub, Firebase, Netlify
            </span>
          </li>
          <li className="flex items-start">
            <FaMapMarkerAlt className="text-red-500 text-xl mt-1 mr-2" />
            <span>
              <span className="font-semibold">Based in:</span> Bengaluru, India
            </span>
          </li>
          <li className="flex items-start">
            <FaRocket className="text-yellow-500 text-xl mt-1 mr-2" />
            <span>
              <span className="font-semibold">Career Goal:</span> Building
              engaging and scalable frontend applications
            </span>
          </li>
        </ul>
      </div>

      {/* Goals */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-indigo-500 mb-4 border-l-4 border-indigo-400 pl-3">
          Goals & Aspirations
        </h3>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          My vision is to continuously grow as a frontend engineer by mastering
          advanced frameworks, contributing to open-source projects, and
          creating performant, accessible web applications that make a real
          difference.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-indigo-500 mb-4 border-l-4 border-indigo-400 pl-3 flex items-center">
          <FaBriefcase className="mr-2" /> Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow"
            >
              <h4 className="text-lg font-semibold">{exp.role}</h4>
              <p className="text-sm text-indigo-500">
                {exp.company} — {exp.duration}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-500 mb-4 border-l-4 border-indigo-400 pl-3 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow"
            >
              <h4 className="text-lg font-semibold">{edu.degree}</h4>
              <p className="text-sm text-indigo-500">
                {edu.institution} — {edu.duration}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
