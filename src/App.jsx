import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <>
      <Header />

      {/* Main content sections */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className=" p-6 bg-gray-100 dark:bg-gray-800">
          <AnimatedSection>
            <HeroSection />
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className=" p-6 bg-gray-100 dark:bg-gray-800">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section id="projects" className=" p-6 bg-gray-100 dark:bg-gray-800">
          <AnimatedSection>
            <ProjectsSection />
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
