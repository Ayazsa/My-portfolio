import React, { useState, useEffect } from "react";
import heroImg from "../assets/avatar.png";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  // Scroll lock effect
  useEffect(() => {
    if (showModal) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts while modal open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleView = () => {
    window.open("/AyazResumeFr.pdf", "_blank");
    setShowModal(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AyazResumeFr.pdf";
    link.download = "AyazResumeFr.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Text Container */}
      <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-blue-600">Ayaz Ansari</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-2">
          Frontend Developer | React & Angular Enthusiast
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
          I’m a passionate frontend developer who builds performant, accessible,
          and modern web apps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow text-center transition duration-300"
            aria-haspopup="dialog"
            aria-expanded={showModal}
          >
            View Resume
          </button>
          <a
            href="#projects"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md text-center transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="Ayaz"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 shadow-lg rounded-2xl p-8 w-80 max-w-full relative animate-fadeIn">
            <h3
              id="modal-title"
              className="text-2xl font-bold mb-6 text-white drop-shadow-md"
            >
              What would you like to do?
            </h3>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleView}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
              >
                View
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
              >
                Download
              </button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold leading-none"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
