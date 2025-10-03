import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Lightbulb } from "lucide-react";

const stats = [
  { icon: <Code className="w-6 h-6" />, stat: "10+", label: "Projects Built" },
  { icon: <Lightbulb className="w-6 h-6" />, stat: "5+", label: "Technologies" },
  { icon: <Rocket className="w-6 h-6" />, stat: "3+", label: "Hackathons" },
];

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-purple-900/10 to-blue-900/10-gray-100">
      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-6xl text-blue-500/30"
      >
        <Code />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          My Creations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Where <span className="font-semibold text-blue-500">ideas</span> meet{" "}
          <span className="font-semibold text-cyan-600">innovation</span>, building projects that{" "}
          <span className="font-semibold text-purple-400">make an impact</span>.
        </motion.p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-2xl shadow-md text-center"
            >
              <div className="flex justify-center text-blue-500 mb-2">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.stat}</h3>
              <p className="text-gray-700 dark:text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
