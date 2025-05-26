import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectList } from "../data/projectList";
import ModalProjectDetails from "./ModalProjectDetails";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.3)", // indigo shadow
    transition: { duration: 0.3 },
  },
};

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      // disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      // enable background scroll
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-14 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 border-b-4 border-indigo-400 pb-2 inline-block mb-10 tracking-wide">
        Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md cursor-pointer border border-transparent"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-indigo-600 mb-1">{project.type}</p>
            <p className="text-base text-gray-800 dark:text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ModalProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
