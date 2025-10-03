import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projectsData";

export default function Projects() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gradient-to-br from-purple-900/10 to-blue-900/10">
      <ProjectsHero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
