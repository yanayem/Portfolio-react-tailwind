import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import img1 from "../assets/img_1.png";
import img2 from "../assets/img_2.png";
import img3 from "../assets/img_3.png";

const ProjectSection = () => {
  const projects = [
    {
      title: "Pet Shop",
      description:
        "A sleek personal portfolio built with React, Vite, and Tailwind CSS. Features dark mode, animated backgrounds, and smooth scroll navigation.",
      tags: ["React", "Vite", "Tailwind", "Dark Mode", "Animation"],
      demoUrl: "https://petshop012.netlify.app/",
      githubUrl: "#",
      image: img1,
    },
    {
      title: "Blackbang hacks Portfolio",
      description:
        "A productivity web app for managing tasks and projects. Includes drag-and-drop UI, theme toggles, and local storage persistence.",
      tags: [
        "React",
        "Tailwind",
        "LocalStorage",
        "Drag & Drop",
        "Theme Toggle",
      ],
      demoUrl: "https://blackbanghacks.netlify.app/",
      githubUrl: "#",
      image: img2,
    },
    {
      title: "Nature Blog",
      description:
        "A GitHub user search tool using the GitHub API. Responsive design with light/dark mode, error handling, and animated transitions.",
      tags: ["React", "API", "Tailwind", "Dark Mode", "Responsive"],
      demoUrl: "https://imageinactive.netlify.app/",
      githubUrl: "#",
      image: img3,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some recent projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary transition-transform duration-200 hover:scale-110"
                      aria-label={`View demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>

                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary transition-transform duration-200 hover:scale-110"
                        aria-label={`View GitHub repo of ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <span
                        className="opacity-50 cursor-not-allowed"
                        title="Private or unavailable"
                        aria-label="GitHub repo not available"
                      >
                        <Github size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yanayem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;