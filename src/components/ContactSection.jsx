import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-10 text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center border-b-2 border-indigo-500 inline-block">
          Contact Me
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
