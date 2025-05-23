import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-20 py-10 text-gray-900 dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block">
        About Me
      </h2>

      <p className="text-base sm:text-lg leading-7 max-w-3xl mb-6">
        I’m a passionate Frontend Developer focused on building responsive,
        accessible, and scalable web apps using modern JavaScript frameworks. I
        enjoy bringing designs to life and solving problems through clean,
        efficient code.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-5 sm:pl-6 text-base sm:text-lg">
        <li>
          <span className="font-semibold">🔧 Tech Stack:</span>
          HTML, CSS, BootStrap, Tailwind-CSS, JavaScript, React, Angular
        </li>
        <li>
          <span className="font-semibold">🛠 Tools:</span>
          VS Code, Git, GitHub, Firebase, Netlify
        </li>

        <li>
          <span className="font-semibold">📍 Based in: </span>Mumbai, India
        </li>
        <li>
          <span className="font-semibold">🚀 Career Goal:</span>
          Building engaging and scalable frontend applications
        </li>
      </ul>
    </section>
  );
};

export default AboutSection;
