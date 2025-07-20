import { useState } from "react";
import { SunIcon, MoonIcon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({ toggleDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md py-4 px-6 bg-white dark:bg-gray-800 text-black dark:text-white fixed top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Divyanshu.</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
          >
            <SunIcon className="w-5 h-5 hidden dark:block" />
            <MoonIcon className="w-5 h-5 block dark:hidden" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
          >
            <SunIcon className="w-5 h-5 hidden dark:block" />
            <MoonIcon className="w-5 h-5 block dark:hidden" />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 dark:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col gap-4 bg-white dark:bg-gray-800 pb-6 transition-all duration-300 ease-in-out">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
