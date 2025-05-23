import React, { useState } from "react";

const projects = [
  {
    title: "Easy Learning",
    description:
      "An interactive learning platform built with React and vanilla CSS, featuring smooth navigation, program highlights, and an enquiry form.",
    tech: "React, Vanilla CSS",
    github: "https://github.com/Ayazsa/my-react-app",
    demo: "https://easelearning.netlify.app/",
    challenges:
      "Ensuring smooth navigation and responsive design across devices.",
  },
  {
    title: "Bank App",
    description:
      "A user-friendly banking application with features like login, balance check, fund transfer, transaction logs, loan requests, and account deletion.",
    tech: "HTML, Vanilla CSS, JavaScript",
    github: "https://github.com/Ayazsa/Bank-app",
    demo: "https://66f124caef2bafa14923fce3--endearing-kheer-5e5c64.netlify.app/",
    challenges: "Implementing secure login and reliable fund transfer logic.",
  },
  {
    title: "Bank Marketing Page",
    description:
      "A visually engaging marketing page for a bank with smooth scrolling, section fades, testimonials, and an account opening call-to-action.",
    tech: "HTML, Vanilla CSS, JavaScript",
    github: "https://github.com/Ayazsa/Bank-marketing-page",
    demo: "https://66f127a7117033b6bfbfa90c--brilliant-choux-5add3c.netlify.app/",
    challenges:
      "Creating smooth scrolling and visually appealing animations with minimal performance cost.",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-10 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 border-b-4 border-indigo-400 pb-2 inline-block mb-10 tracking-wide">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
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
                onClick={(e) => e.stopPropagation()}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <p className="italic text-sm mb-4">
              <strong>Tech Used:</strong> {selectedProject.tech}
            </p>
            <p className="mb-4">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <div className="space-x-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub Repo
              </a>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
