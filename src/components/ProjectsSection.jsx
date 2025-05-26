import { useState } from "react";
import { projectList } from "../data/projectList";
import ModalProjectDetails from "./ModalProjectDetails"; // See below

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-14 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 border-b-4 border-indigo-400 pb-2 inline-block mb-10 tracking-wide">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-indigo-600 mb-1">{project.type}</p>
            <p className="text-base text-gray-800 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ModalProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectsSection;
