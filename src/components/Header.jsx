import React, { useState, useEffect } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close contact form"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            MyPortfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
            {["home", "about", "projects"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-blue-500 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            {/* Contact as button */}
            <button
              onClick={() => setContactOpen(true)}
              className="hover:text-blue-500 transition-colors bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu with slide down/up animation */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-max-height duration-500 ease-in-out ${
            menuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 py-3 text-gray-700 dark:text-gray-300">
            {["home", "about", "projects"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="py-2 px-2 hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            {/* Contact in mobile menu as button */}
            <button
              onClick={() => {
                setContactOpen(true);
                setMenuOpen(false);
              }}
              className="py-2 px-2 text-left hover:text-blue-500 transition-colors bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Header;
