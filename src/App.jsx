import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from './pages/ContactMe';
import ContactI from './pages/ContactI';
import Skills from "./sections/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar toggleDark={() => setDarkMode(!darkMode)} />
      <Toaster position="top-center" reverseOrder={false} />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-300 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactI />} />
        </Routes>
        </main>
    </>
  );
}

export default App;
