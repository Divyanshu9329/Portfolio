import { motion } from "framer-motion";
import { useEffect } from "react";
import avatar from "../assets/avatar1.png";
import Skills from "../sections/Skills";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on mount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#f9f9f9] dark:bg-[#0e0e10] px-6 py-12 md:py-24 flex flex-col items-center text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={avatar}
            alt="Divyanshu Avatar"
            className="w-64 sm:w-72 md:w-70 h-auto object-contain drop-shadow-xl ml-25"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 md:pl-12 text-left mr-25">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            ABOUT <span className="text-indigo-600 dark:text-pink-500">ME</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hello! I’m <strong>Divyanshu Pandey</strong>, a tech enthusiast currently pursuing my B.Tech in Information Technology.
            I'm deeply passionate about innovation, building impactful digital solutions, and staying ahead in emerging technologies like Blockchain, AI, and Web3.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Throughout my academic journey at <strong><a href="https://aitr.ac.in/"> AITR</a></strong>, I’ve worked on several exciting projects ranging from decentralized streaming platforms to productivity-focused systems.
            My core strengths lie in full-stack development, problem-solving, and building user-centric web experiences.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I thrive in collaborative environments, and I'm always eager to learn, innovate, and push boundaries through technology.
          </p>

          {/* Optional Socials */}
          <div className="flex space-x-5 mt-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <i className="fab fa-github text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <i className="fab fa-linkedin text-2xl" />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-700 dark:text-gray-300 hover:text-red-500"
            >
              <i className="fas fa-envelope text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
