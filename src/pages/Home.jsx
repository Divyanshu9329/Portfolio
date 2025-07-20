import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/avatar4.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 px-4 sm:px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-[90vh] -mt-20"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-600">Divyanshu Pandey</span>
        </h1>

        <TypeAnimation
          sequence={[
            "a Student 🎓",
            2000,
            "a Developer 💻",
            2000,
            "a Tech Enthusiast 🚀",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg sm:text-xl md:text-2xl text-blue-500 font-medium"
        />

        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mt-4 px-2 sm:px-0">
          I'm a passionate B.Tech IT student from Rajasthan, diving deep into emerging technologies like Blockchain, Web3, and Full Stack Development. I love building innovative web apps, exploring smart contracts, and pushing the boundaries of what's possible with code.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4 mt-6">
          <a
            href="https://drive.google.com/file/d/1tnztzCzee28frZwpHKkSiscKvxAK07dy/view?usp=sharing"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition w-full sm:w-auto text-center">Contact Me</Link>
        </div>
      </motion.div>

      {/* Right Avatar Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={avatar}
          alt="Divyanshu Avatar"
          className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}

export default Home;
