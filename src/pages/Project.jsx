import { useEffect, useRef } from "react";
import ToDoReact from "../components/images/Project_Img/todo-react.png";
import portfolio from "../components/images/Project_Img/Official-Portfolio.png";
import eCommerce from "../components/images/Project_Img/E-commmerse.png";
import Book from "../components/images/Project_Img/Book-Management-System.png";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-xl group">
      <div className="relative w-full overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="object-cover object-center w-full h-full transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
          <div className="w-full p-4 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col flex-1 p-6 bg-white dark:bg-gray-800">
        {/* Diagonal corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 transform rotate-45 translate-x-6 -translate-y-6 bg-primary-100 dark:bg-primary-900"></div>

        <h3 className="relative z-10 mb-2 font-sans text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="flex-1 mb-4 font-sans text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm text-gray-800 transition-colors duration-300 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-sm hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}

function Project() {
  const projectsRef = useRef(null);

  const projects = [
    {
      name: "ToDoApp - React",
      image: ToDoReact,
      description:
        "A simple and interactive to-do list application built with React. It allows users to add, delete, and mark tasks as completed, with real-time updates using React state management and a clean user interface.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Harsha-Buddhika-Official/ToDoApp-React",
    },
    {
      name: "Modern Portfolio Site",
      image: portfolio,
      description:
        "A responsive and modern portfolio website built using React and Tailwind CSS. Features clean architecture, responsive design, and CI/CD deployment pipeline. Showcases skills and projects with an emphasis on DevOps and full-stack development.",
      technologies: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
      github:
        "https://github.com/Harsha-Buddhika-Official/Official-Portfolio-React",
    },
    {
      name: "E-commerce Store (ShopVibe)",
      image: eCommerce,
      description:
        "A modern full-stack e-commerce platform built with React and Express.js, featuring dual customer and seller portals, complete shopping functionality, inventory management, sales analytics, and secure payment integration for a comprehensive online marketplace experience.",
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/Harsha-Buddhika-Official/E-Commerce",
    },
    {
      name: "Book Management System",
      image: Book,
      description:
        "A comprehensive full-stack book management platform built with React and Express.js, featuring user authentication, complete CRUD operations for book collections, intuitive Material-UI interface, MongoDB database integration, protected routes, session management, and search/filter capabilities for efficient library organization and digital catalog management.",
      technologies: ["React", "Express.js", "Node.js", "MongoDB", "Material UI"],
      github: "https://github.com/Harsha-Buddhika-Official/Book-Management-System",
    },
  ];

  useEffect(() => {
    if (!projectsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const projectElements =
      projectsRef.current.querySelectorAll(".project-card");
    projectElements.forEach((element) => observer.observe(element));

    return () => {
      projectElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      id="projects"
      className="relative px-4 py-16 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8 md:py-24"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 w-64 h-64 -translate-x-1/2 rounded-full top-10 bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-30"></div>
      <div className="absolute right-0 w-64 h-64 translate-x-1/2 bg-purple-100 rounded-full bottom-10 dark:bg-purple-900/20 blur-3xl opacity-30"></div>

      {/* Decorative lines */}
      <div className="absolute pointer-events-none right-10 top-10 opacity-20 dark:opacity-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50H100"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M50 0L50 100"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M0 0L100 100"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M100 0L0 100"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="relative z-10 mb-12 text-center">
        <h2 className="relative inline-block text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Projects
          <div className="absolute w-16 h-1 transform -translate-x-1/2 rounded-full -bottom-3 left-1/2 md:w-24 bg-primary-500 dark:bg-primary-400"></div>
        </h2>
      </div>

      <div
        ref={projectsRef}
        className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 md:gap-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="transition-all duration-700 ease-out translate-y-10 opacity-0 project-card"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circleGrid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circleGrid)" />
        </svg>
      </div>
    </div>
  );
}

export default Project;
