import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <div className="pt-16 overflow-hidden bg-gradient-to-br from-purple-900/10 to-blue-900/10">
      <ContactHero />

      <section className="py-20 px-4  bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Let's Build the Future Together 🌍🚀
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every great innovation starts with a conversation. Ready to create something amazing?
          </p>
        </motion.div>
      </section>
    </div>
  );
}
