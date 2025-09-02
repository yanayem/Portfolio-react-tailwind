import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-4 bg-background text-foreground"
    >
      <div className="container z-10 max-w-4xl mx-auto space-y-8 text-center">
        {/* Heading */}
        <div className="space-y-6">
          <h1 className="inline-block text-4xl font-bold tracking-tight opacity-0 md:text-6xl animate-fade-in">
            Hi, I'm{" "}
            <span className="text-primary">Yeasin</span>{" "}
            <span className="text-secondary">Arafat Nayem</span>{" "}
            <span className="text-primary">Bhuiyan</span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-lg opacity-0 md:text-xl text-muted animate-fade-in animate-delay-500">
            I craft intuitive web experiences with HTML, CSS, and JavaScript,
            solve algorithmic challenges in C and C++, and build smart logic
            with Python and SQL. Whether it's designing sleek interfaces or
            decoding complex problems, I thrive at the intersection of
            creativity and code.
          </p>
        </div>

        {/* Button */}
        <div className="pt-4 opacity-0 animate-fade-in animate-delay-1000">
          <a
            href="#projects"
            className="inline-block px-6 py-3 transition-colors duration-300 ease-in-out rounded-md shadow-md bg-primary text-primary-foreground hover:bg-fourth"
          >
            View My Projects
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToFooter}
          className="absolute flex items-center gap-2 transform -translate-x-1/2 bottom-8 left-1/2 cursor-pointer animate-bounce-slow bg-transparent border-none"
          aria-label="Scroll to footer"
        >
          <span className="text-sm md:text-md">Scroll</span>
          <ArrowDown className="w-6 h-5 text-primary hover:text-fourth" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
