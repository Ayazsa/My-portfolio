import { motion } from "framer-motion";

function ModalProjectDetails({ project, onClose }) {
  const { title, tech, challenges, modal, github, liveDemo } = project;
  // 🧠 Null check for modal
  if (!modal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2 text-red-600">Oops!</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Project details are not available.
          </p>
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-start z-50 overflow-y-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 shadow-lg max-w-3xl w-full p-8 rounded-2xl mt-20 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold leading-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-sm text-indigo-100 mb-6">{tech}</p>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-indigo-200">Overview:</h4>
          <p className="text-white/90">{modal.overview}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-indigo-200">User Roles:</h4>
          <ul className="list-disc list-inside text-white/90 space-y-1">
            {modal.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-indigo-200">Key Features:</h4>
          <ul className="list-disc list-inside text-white/90 space-y-1">
            {modal.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-indigo-200">Challenges:</h4>
          <p className="text-white/90">{challenges}</p>
        </div>

        {(github || liveDemo) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
              >
                GitHub
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ModalProjectDetails;
