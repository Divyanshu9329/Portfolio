import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Rocket } from "lucide-react";
import avatar from "../../assets/avatar1.png";

export default function AboutHeroCombined() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on mount
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 section-spacing md:py-2 relative overflow-hidden bg-gradient-to-br from-purple-900/10 to-blue-900/10">
      
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <Code className="w-16 h-16 text-blue-400/30" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-32 right-16 hidden lg:block"
      >
        <Rocket className="w-20 h-20 text-purple-400/30" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between relative z-10"
      >
        {/* Avatar */}
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="w-64 sm:w-72 md:w-70 h-auto p-3 relative rounded-full overflow-hidden border-4 border-white/20"
          >
            <img
              src={avatar}
              alt="Divyanshu Avatar"
              className="w-full h-full object-cover"
            />
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 md:pl-12 text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            ABOUT <span className="text-blue-400 dark:text-purple-500">ME</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hello! I’m <strong>Divyanshu Pandey</strong>, a tech enthusiast currently pursuing my B.Tech.
            I'm passionate about building innovative solutions and exploring emerging technologies like
            <span className="text-red-500 font-semibold"> MERN Stack</span>, 
            <span className="text-purple-400 font-semibold"> Blockchain</span>, 
            <span className="text-orange-400 font-semibold"> Web3</span>, and 
            <span className="text-green-400 font-semibold"> AI</span>.
          </p>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’ve worked on projects ranging from decentralized platforms to productivity systems.
            My strengths include full-stack development, problem-solving, and creating user-centric experiences.
          </p>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I thrive in collaborative environments, always eager to innovate and push boundaries through technology.
          </p>

          {/* Social Links */}
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
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
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
      </motion.div>
    </section>
  );
}
