import React from "react";
import AboutHero from "../components/about/AboutHero";
import Timeline from "../components/about/Timeline";
import PersonalTouch from "../components/about/PersonalTouch";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="pt-16 overflow-hidden">
      

      {/* Who Am I Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
            Who Am 
            <span className="text-blue-400 font-semibold"> I</span>
            ?
          </h2>
          <p className="text-2xl md:text-2xl max-w-3xl mx-auto mb-4 text-gray-500">
            I'm <span className="font-semibold text-blue-400">Divyanshu Pandey</span>,
            a tech enthusiast from Indore, India. <br></br>
            Passionate about 
            <span className="text-purple-600 font-semibold"> Blockchain</span>, 
            <span className="text-orange-600 font-semibold"> Web3</span>, 
            <span className="text-green-500 font-semibold"> AI</span>, and 
            <span className="text-blue-500 font-semibold"> MERN Stack Development</span>.
          </p>
        </div>
      </section>

      <AboutHero />

      {/* Timeline Section */}
      <Timeline />

      {/* Personal Touch Section */}
      <PersonalTouch />

      {/* Call to Action */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
          Let's Build Something Amazing Together 
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            View My Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-8 py-4 rounded-full font-semibold border-2 border-purple-500 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </div>
        </div>
      </section>
    </div>
  );
}
