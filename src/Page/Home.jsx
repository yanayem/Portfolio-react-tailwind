import React from "react";
import ThemeToggle from "../Component/ThemeToggle";
import StarBackground from "../Component/StarBackground";
import Navbar from "../Component/NavBar";
import HeroSection from "../Component/HeroSection";
import AboutMe from "../Component/AboutMe";
import SkillSection from "../Component/SkillSection";
import SeviceArea from "../Component/ServiceArea";
import ProjectSection from "../Component/ProjectSection";
import ScrollToTop from "../Component/ScrollToTop";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
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
      <SeviceArea />
      <ProjectSection />
      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
