function ModalProjectDetails({ project, onClose }) {
  const { title, tech, challenges, modal } = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto p-4">
      <div className="bg-gray-100 dark:bg-gray-800 max-w-3xl w-full p-8 rounded-xl mt-20 relative shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-3xl font-bold leading-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-4 text-indigo-600">{title}</h2>
        <p className="text-sm text-indigo-400 mb-6">{tech}</p>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-200">
            Overview:
          </h4>
          <p className="text-gray-800 dark:text-gray-300">{modal.overview}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-200">
            User Roles:
          </h4>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
            {modal.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-200">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
            {modal.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-200">
            Challenges:
          </h4>
          <p className="text-gray-800 dark:text-gray-300">{challenges}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalProjectDetails;
