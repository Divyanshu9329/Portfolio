// src/pages/Projects.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiEthereum,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import YouspotThumbnail from "../assets/YouspotThumbnail.png";

const projects = [
  {
    title: "YouSpot - Web3 Streaming Platform",
    description:
      "Decentralized Spotify-like platform using zk-SNARKs and NFTs for private, secure content monetization.",
    image: YouspotThumbnail,
    alt: "YouSpot Project Thumbnail",
    tech: [<SiReact />, <SiTailwindcss />, <SiEthereum />],
    role: "Smart Contract Developer & Frontend Engineer",
    live: "https://divyanshu9329.github.io/VP/",
    source: "https://github.com/Divyanshu9329/YouSpot",
  },
  {
    title: "Smart Krishi Sahayak",
    description:
      "A farmer-friendly platform for crop guidance, seasonal tips & consultancy via a modern UI.",
    image: "/path/to/krishi.png",
    alt: "Smart Krishi Sahayak Preview",
    tech: [<SiReact />, <SiMongodb />, <SiNodedotjs />, <SiExpress />],
    role: "Fullstack Developer (MERN Stack)",
    live: "https://your-krishi-demo.com",
    source: "https://github.com/yourgithub/krishi",
  },
];

const Projects = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 py-16 bg-white dark:bg-[#0f0f11] text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 mt-6 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.alt || project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xl text-primary dark:text-cyan-300 mb-3">
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Role:
                  </span>{" "}
                  {project.role}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt className="mr-2" /> View Live
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-900"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
