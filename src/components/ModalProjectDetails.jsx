import { motion } from "framer-motion";

function ModalProjectDetails({ project, onClose }) {
  const { title, tech, challenges, modal } = project;

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

        <div>
          <h4 className="font-semibold mb-2 text-indigo-200">Challenges:</h4>
          <p className="text-white/90">{challenges}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ModalProjectDetails;
