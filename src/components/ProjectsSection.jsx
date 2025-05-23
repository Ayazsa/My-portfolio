import React from "react";

const projects = [
  {
    title: "Easy Learning",
    description:
      "An interactive learning platform built with React and vanilla CSS, featuring smooth navigation, program highlights, and an enquiry form.",
    tech: "React, Vanilla CSS",
    github: "https://github.com/Ayazsa/my-react-app",
    demo: "https://easelearning.netlify.app/",
  },
  {
    title: "Bank App",
    description:
      "A user-friendly banking application with features like login, balance check, fund transfer, transaction logs, loan requests, and account deletion.",
    tech: "HTML, Vanilla CSS, JavaScript",
    github: "https://github.com/Ayazsa/Bank-app",
    demo: "https://66f124caef2bafa14923fce3--endearing-kheer-5e5c64.netlify.app/",
  },
  {
    title: "Bank Marketing Page",
    description:
      "A visually engaging marketing page for a bank with smooth scrolling, section fades, testimonials, and an account opening call-to-action.",
    tech: "HTML, Vanilla CSS, JavaScript",
    github: "https://github.com/Ayazsa/Bank-marketing-page",
    demo: "https://66f127a7117033b6bfbfa90c--brilliant-choux-5add3c.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-10 text-gray-900 dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 border-b-2 border-indigo-500 inline-block">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
              Tech Used: {project.tech}
            </p>
            <div className="space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
