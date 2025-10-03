import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-16 hidden lg:block"
      >
        <MessageCircle className="w-20 h-20 text-purple-400/30" />
      </motion.div>

      <motion.div
        animate={{ x: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-40 right-20 hidden lg:block"
      >
        <Mail className="w-16 h-16 text-blue-400/30" />
      </motion.div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="block mb-4 text-blue-700">Let's</span>
          <span className="text-gradient block mb-4">Connect &</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-500">
            Collaborate
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Have an <span className="text-blue-500 font-semibold">innovative idea</span> or 
          <span className="text-purple-500 font-semibold"> exciting opportunity</span>? 
          I'd love to hear from you and explore how we can create something 
          <span className="text-orange-500 font-semibold"> extraordinary</span> together.
        </motion.p>
      </motion.div>
    </section>
  );
}
