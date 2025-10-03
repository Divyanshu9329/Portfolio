import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Rocket, Users, Trophy, Code, Laptop2, CpuIcon, Cpu, CupSoda } from "lucide-react";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpg";
import event5 from "../../assets/event5.jpg";

export default function Timeline() {
  const timelineEvents = [
    {
      icon: GraduationCap,
      title: "Started B.Tech",
      description: "Began my undergraduate journey with a passion for innovation",
      year: "2022",
      image: event1,
      colorFrom: "#B2D3BE",
      colorTo: "#89A3B2",
    },
    {
      icon: Users,
      title: "Blockchain Technology Club",
      description: "Became Content Head, leading content creation and organizing tech events",
      year: "June 2024",
      image: event2,
      colorFrom: "#89A3B2",
      colorTo: "#DCDCDC",
    },
    {
      icon: Trophy,
      title: "1st Hackathon Achievements",
      description: "Built innovative solutions including webservices for Org and supporting platform",
      year: "Nov 2024",
      image: event3,
      colorFrom: "#D97D55",
      colorTo: "#B2D3BE",
    },
    {
      icon: Trophy,
      title: "2nd Hackathon Achievements",
      description: "Built YouSpot, an innovative solution combining MERN stack and Blockchain",
      year: "Dec 2024",
      image: event4,
      colorFrom: "#F39F9F",
      colorTo: "#B2D3BE",
    },
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description: "Mastered MERN stack and expanded into Web3, blockchain, and AI technologies",
      year: "Present",
      image: event5,
      colorFrom: "#708993",
      colorTo: "#FFE797",
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [initialXs, setInitialXs] = useState([]);
  const centerColumnWidth = 48; // px — controls gap between center line and card

  // compute initial X offsets so each card visually starts at the center line
  useEffect(() => {
    const computeOffsets = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      const newInitials = timelineEvents.map((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        // translation necessary to move card center to timeline center
        return centerX - cardCenterX;
      });

      setInitialXs(newInitials);
    };

    // compute after layout & images; also recompute on resize
    computeOffsets();
    window.addEventListener("resize", computeOffsets);
    window.addEventListener("load", computeOffsets);
    return () => {
      window.removeEventListener("resize", computeOffsets);
      window.removeEventListener("load", computeOffsets);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once and on resize/load

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
      <div ref={containerRef} className="max-w-6xl mx-auto relative">

        <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-50 left-10 hidden lg:block"
            >
            <Laptop2 className="w-16 h-16 text-blue-400/30" />
        </motion.div>

        <motion.div
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-292 right-2 hidden lg:block"
            >
            <Sparkles className="w-16 h-16 text-purple-400/30" />
        </motion.div>

        <motion.div
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-242 right-2 hidden lg:block"
            >
            <Cpu className="w-20 h-20 text-purple-400/30" />
        </motion.div>

        <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-380 left-10 hidden lg:block"
            >
            <GraduationCap className="w-16 h-16 text-blue-400/30" />
        </motion.div>

        <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-220 left-10 hidden lg:block"
            >
            <CupSoda className="w-16 h-16 text-blue-400/30" />
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            <span className="text-blue-400 dark:text-purple-500">My </span>
            Journey
          </h2>
          <p className="text-gray-700 max-w-xl text-xl mx-auto">
            A timeline of growth, learning, and innovation
          </p>
        </motion.div>

        {/* vertical center line (full height) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
          style={{
            background: "linear-gradient(to bottom, #B2D3BE, #89A3B2, #5E6073)",
          }}
        />

        {/* timeline items -> grid with a center column whose width controls the gap */}
        <div className="space-y-16">
          {timelineEvents.map((event, index) => {
            const isRight = index % 2 === 0; // keep your old pattern: even = right
            return (
              <div
                key={index}
                className="w-full"
                /* per-row grid: left / center / right */
              >
                <div
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: `1fr ${centerColumnWidth}px 1fr`,
                    alignItems: "center",
                  }}
                >
                  {/* LEFT column (card only for odd indexes) */}
                  <div className="flex justify-end">
                    {!isRight && (
                      <motion.div
                        ref={(el) => (cardRefs.current[index] = el)}
                        initial={{ x: initialXs[index] ?? 0, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                          mass: 1,
                          delay: index * 0.10,
                        }}
                        className="flex items-center w-full max-w-lg md:max-w-xl px-4"
                      >
                        <div
                          className="flex-1 p-6 md:p-8 rounded-3xl border border-white/20 shadow-lg flex flex-col md:flex-row gap-4"
                          style={{
                            background: `linear-gradient(to right, ${event.colorFrom}, ${event.colorTo})`,
                          }}
                        >
                          <div className="flex-1 text-white">
                            <div className="flex items-center gap-4 mb-2">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                                <event.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-bold">{event.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                            <p className="text-sm md:text-base">{event.description}</p>
                          </div>

                          <div className="w-32 md:w-40 h-32 md:h-40 rounded-xl overflow-hidden shadow-lg">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* CENTER column: node */}
                  <div className="flex justify-center">
                    <motion.div
                      className="w-5 h-5 rounded-full z-10 border-2 border-white/20"
                      style={{
                        background: `linear-gradient(to right, ${event.colorFrom}, ${event.colorTo})`,
                      }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* RIGHT column (card only for even indexes) */}
                  <div className="flex justify-start">
                    {isRight && (
                      <motion.div
                        ref={(el) => (cardRefs.current[index] = el)}
                        initial={{ x: initialXs[index] ?? 0, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                          mass: 1,
                          delay: index * 0.10,
                        }}
                        className="flex items-center w-full max-w-lg md:max-w-xl px-4"
                      >
                        <div
                          className="flex-1 p-6 md:p-8 rounded-3xl border border-white/20 shadow-lg flex flex-col md:flex-row gap-4"
                          style={{
                            background: `linear-gradient(to right, ${event.colorFrom}, ${event.colorTo})`,
                          }}
                        >
                          <div className="flex-1 text-white">
                            <div className="flex items-center gap-4 mb-2">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                                <event.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-bold">{event.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                            <p className="text-sm md:text-base">{event.description}</p>
                          </div>

                          <div className="w-32 md:w-40 h-32 md:h-40 rounded-xl overflow-hidden shadow-lg">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
