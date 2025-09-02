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
    <section id="projects" className="relative px-4 py-24 bg_custom_card">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 dark:text-gray-400">
          Here are some recent projects
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 rounded-lg shadow-md bg_custom_sm_card group hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-800 dark:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-semibold text-raw_custom">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm des-raw_custom">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 duration-200 transition10-transform text-gray-00 hover:text-primary hover:scale-110"
                      aria-label={`View demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>

                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 transition-transform duration-200 dark:text-gray-300 hover:text-primary hover:scale-110"
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

        <div className="mt-12 text-center">
          <a
            href="https://github.com/yanayem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold transition-colors text-primary hover:text-fourth"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
