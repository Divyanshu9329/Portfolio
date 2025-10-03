import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import * as SiIcons from "react-icons/si";


export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className={`relative group bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={project.alt} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="px-2 py-1 bg-black/40 text-white text-xs rounded">{project.category}</span>
          <h2 className="text-xl font-bold mt-2">{project.title}</h2>
          <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex gap-2 text-xl text-blue-500 dark:text-cyan-300">
          {project.tech.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Role:</span> {project.role}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
          >
            View Details
          </button>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800"
          >
            <FaExternalLinkAlt className="mr-2" /> Live
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-900"
          >
            <FaGithub className="mr-2" /> Code
          </a>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-lg w-full p-6 shadow-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <img src={project.image} alt={project.alt} className="w-full rounded-lg mb-3" />
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-2 text-xl text-primary dark:text-cyan-300">
                {project.tech.map((iconName, i) => {
                    const IconComponent = SiIcons[iconName];
                    return IconComponent ? <IconComponent key={i} /> : null;
                })}
            </div>
            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
