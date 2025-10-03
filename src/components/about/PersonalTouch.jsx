import React from "react";
import { motion } from "framer-motion";
import { Book, Lightbulb, Users, Target, Coffee, Music } from "lucide-react";

export default function PersonalTouch() {
  const personalAspects = [
    {
      icon: Book,
      title: "Continuous Learning",
      description: "Always exploring new technologies and staying updated with industry trends",
      gradient: "linear-gradient(to right, #6366F1, #3B82F6)", // Indigo → Blue
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Love tackling complex challenges and finding creative solutions",
      gradient: "linear-gradient(to right, #10B981, #34D399)", // Emerald → Mint
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enjoy working with diverse teams and sharing knowledge",
      gradient: "linear-gradient(to right, #F59E0B, #FBBF24)", // Amber → Yellow
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on building impactful products that make a difference",
      gradient: "linear-gradient(to right, #3B82F6, #6366F1)", // Blue → Indigo
    },
    {
      icon: Coffee,
      title: "Late Night Coder",
      description: "Best ideas often come during late-night coding sessions",
      gradient: "linear-gradient(to right, #EC4899, #F472B6)", // Pink → Rose
    },
    {
      icon: Music,
      title: "Creative Mind",
      description: "Music and art inspire my approach to technology and design",
      gradient: "linear-gradient(to right, #06B6D4, #22D3EE)", // Cyan → Teal
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/10 to-blue-900/10 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Beyond the <span className="text-indigo-500">Code</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What drives me as a person and shapes my approach to technology
          </p>
        </motion.div>

        {/* Personal Aspects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalAspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 rounded-3xl 
                         bg-white dark:bg-[#1E1E2F] 
                         border border-gray-200 dark:border-gray-700 
                         hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md"
                style={{
                  background: aspect.gradient,
                }}
              >
                <aspect.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                {aspect.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {aspect.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Fun Facts About Me
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "🌙 Night owl developer",
              "☕ Coffee enthusiast",
              "📚 Avid tech reader",
              "🎵 Code with music",
              "🚀 Future entrepreneur",
              "🌍 Impact-focused builder",
            ].map((fact, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-full border 
                           border-gray-300 dark:border-gray-600 
                           bg-gradient-to-r from-gray-100 to-gray-50 
                           dark:from-[#1E293B] dark:to-[#0F172A] 
                           text-gray-700 dark:text-gray-200 
                           shadow-sm hover:shadow-md transition-all duration-300"
              >
                {fact}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
