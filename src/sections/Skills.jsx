// src/pages/Skills.jsx

import React from "react";
import { motion } from "framer-motion";
import { SiCplusplus, SiTailwindcss, SiPostman, SiFigma, SiN8N } from "react-icons/si";
import { Icon } from "@iconify/react";
import Avatar from "../assets/Avatar7.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaCuttlefish,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "C", icon: <FaCuttlefish className="text-gray-300 text-5xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400 text-5xl" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600 text-5xl" /> },
  {
    name: "Express.js",
    icon: (
      <Icon
        icon="simple-icons:express"
        className="text-5xl text-gray-800 dark:text-white"
      />
    ),
  },
  { name: "React JS", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300 text-5xl" />,
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub className="text-gray-800 dark:text-white text-5xl" />
    ),
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-400 text-5xl" />,
  },
  {
    name: "MySQL",
    icon: (
      <Icon
        icon="logos:mysql"
        className="w-10 h-10 dark:brightness-90 brightness-105"
      />
    ),
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500 text-5xl" />,
  },
  {
    name: "n8n",
    icon: <SiN8N className="text-red-500 text-5xl" />,
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 sm:px-6 py-16 bg-gradient-to-br from-purple-900/10 to-blue-900/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 mt-10 px-4">
          <h2 className="text-4xl font-bold mb-4 dark:text-white text-gray-800 drop-shadow-md">
            My <span className="text-pink-600 dark:text-pink-400">Skills</span>
          </h2>
          <p className="text-lg mb-10 text-gray-600 dark:text-gray-300 leading-relaxed">
            I work across the full stack to build modern, scalable web
            applications.
            <br />
            From UI design to backend logic, I use industry-standard tools to
            deliver clean, efficient, and impactful solutions.
            <br />
            <br />
            Writing code using languages:
            <br />
            <span className="font-semibold text-black dark:text-white">
              C, C++, JS, HTML, CSS, React, Node, MySQL, MongoDB.
            </span>
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left: Skills Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07 }}
                className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 border dark:border-gray-700 flex flex-col items-center hover:shadow-lg"
              >
                {skill.icon}
                <p className="mt-4 text-md font-medium text-gray-800 dark:text-gray-200 text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex-1 flex justify-center mb-10 md:mb-0">
            <img
              src={Avatar}
              alt="3D Avatar"
              className="w-52 sm:w-60 md:w-72 lg:w-80 h-auto object-contain drop-shadow-xl transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
