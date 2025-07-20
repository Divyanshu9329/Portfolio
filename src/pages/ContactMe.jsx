// src/pages/ContactMe.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import Avatar from "../assets/Avatar6a.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Try again.");
        console.error("EmailJS error:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-20">
      <Toaster position="top-center" />

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        
        {/* Avatar Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-60 md:w-72 lg:w-80 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 -mt-8 lg:mt-0"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-xl bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center">
        <p className="mb-2 text-lg font-semibold">Connect with me</p>
        <div className="flex justify-center gap-6 text-2xl md:text-3xl">
          <a href="https://github.com/Divyanshu9329" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/divyanshu-pandey-b51556286/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="mailto:divyanshupandey9329@gmail.com">
            <FaEnvelope className="hover:text-blue-500 transition" />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactMe;
