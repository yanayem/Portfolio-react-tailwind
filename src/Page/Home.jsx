import React from "react";
import ThemeToggle from "../component/ThemeToggle";
import StarBackground from "../component/StarBackground";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import AboutMe from "../component/AboutMe";
import SkillSection from "../component/SkillSection";
import ProjectSection from "../component/ProjectSection";
import ScrollToTop from "../component/ScrollToTop";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
