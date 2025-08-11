import React, { useState } from "react";
import { cn } from "../lib/utils";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 88, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express.js", level: 72, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Figma", level: 78, category: "tools" },
    { name: "C", level: 84, category: "language" },
    { name: "C++", level: 96, category: "language" },
    { name: "JavaScript", level: 68, category: "language" },
    { name: "python", level: 57, category: "language" },
  ];

  const categories = ["all", "frontend", "backend", "tools", "language"];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full animate-[glow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
