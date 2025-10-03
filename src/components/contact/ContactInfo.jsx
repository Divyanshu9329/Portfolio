import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock, Github, Linkedin } from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    { icon: Mail, title: "Email", subtitle: "divyanshupandey9329@gmail.com", description: "Best for detailed discussions", color: "text-blue-700", bgColor: "bg-red-500/10", borderColor: "border-blue-500/30" },
    { icon: Linkedin, title: "LinkedIn", subtitle: "@divyanshupandey", description: "Professional networking", color: "text-purple-600", bgColor: "bg-purple-500/10", borderColor: "border-purple-400/30" },
    { icon: Github, title: "GitHub", subtitle: "@divyanshupandey", description: "Check out my code", color: "text-green-800", bgColor: "bg-green-500/10", borderColor: "border-green-400/30" },
  ];

  const quickInfo = [
    { icon: MapPin, text: "Indore, India" },
    { icon: Clock, text: "Usually responds within 24 hours" },
  ];

  const scrollToForm = () => {
    const form = document.querySelector("form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8 ">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold mb-4"><span className="text-gradient">Get In Touch</span> 🤝</h2>
        <p className="text-gray-500 text-lg leading-relaxed">I'm always excited to connect with developers, collaborators, or anyone passionate about tech.</p>
      </motion.div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.03, y: -2 }} className={`p-6 rounded-2xl ${method.bgColor} backdrop-blur-md border ${method.borderColor} cursor-pointer group shadow-md hover:shadow-lg`}>
            <div className="flex items-start gap-4">
              <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className={`w-12 h-12 rounded-xl ${method.bgColor} border ${method.borderColor} flex items-center justify-center transition-all duration-300`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                <p className={`font-semibold ${method.color} mb-2`}>{method.subtitle}</p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Info */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
        <div className="space-y-3">
          {quickInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-500">
              <info.icon className="w-5 h-5 text-purple-400" />
              <span>{info.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 shadow-md">
        <h3 className="text-xl font-bold text-gradient mb-3">Ready to Collaborate? 🚀</h3>
        <p className="text-gray-500 mb-6">Have a project idea, job opportunity, or just want to chat about tech? I'm always open to meaningful conversations.</p>
        <motion.button onClick={scrollToForm} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Let's Talk
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
