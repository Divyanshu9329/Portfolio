// src/data/projectsData.js
import YouspotThumbnail from "../assets/YouspotThumbnail.png";
import KrishiThumbnail from "../assets/KrishiThumbnail.png"; // Add your images
import CivicXThumbnail from "../assets/CivicXThumbnail.png";
import QuickAiThumbnail from "../assets/QuickAiThumbnail.png";

export const projects = [
    {
    title: "QuickAi",
    description:
      "A SaaS platform that generates images, writes articles, removes image objects and backgrounds, reviews resumes, and creates article titles using AI.",
    image: QuickAiThumbnail,
    alt: "QuickAi Project Preview",
    tech: ["SiReact", "SiTailwindcss", "SiNodedotjs", "SiExpress"],
    role: "Fullstack Developer",
    live: "https://quick-ai-ochre-ten.vercel.app/",
    source: "https://github.com/Divyanshu9329/QuickAI",
    featured: true,
    category: "MERN",
    gradient: "from-purple-500/40 to-blue-500/40",
  },
  {
    title: "YouSpot - Web3 Streaming Platform",
    description:
      "Decentralized Spotify-like platform using zk-SNARKs and NFTs for private, secure content monetization.",
    image: YouspotThumbnail,
    alt: "YouSpot Project Thumbnail",
    tech: ["SiReact", "SiTailwindcss", "SiEthereum"],
    role: "Smart Contract Developer & Frontend Engineer",
    live: "https://divyanshu9329.github.io/VP/",
    source: "https://github.com/Divyanshu9329/YouSpot",
    featured: true,
    category: "Web3",
    gradient: "from-indigo-600/40 to-purple-600/40",
  },
  {
    title: "Smart Krishi Sahayak",
    description:
      "A farmer-friendly platform for crop guidance, seasonal tips & consultancy via a modern UI.",
    image: KrishiThumbnail,
    alt: "Smart Krishi Sahayak Preview",
    tech: ["SiReact", "SiMongodb", "SiNodedotjs", "SiExpress"],
    role: "Fullstack Developer (MERN Stack)",
    live: "https://your-krishi-demo.com",
    source: "https://github.com/yourgithub/krishi",
    featured: false,
    category: "MERN",
    gradient: "from-emerald-500/40 to-cyan-500/40",
  },
  {
    title: "CivicX",
    description:
      "A citizen engagement platform for smart city initiatives, offering feedback, civic services tracking, and community collaboration.",
    image: CivicXThumbnail,
    alt: "CivicX Project Preview",
    tech: ["SiReact", "SiTailwindcss", "SiNodedotjs"],
    role: "Frontend & Backend Developer",
    live: "https://civicx-demo.com",
    source: "https://github.com/yourgithub/civicx",
    featured: false,
    category: "Web3",
    gradient: "from-yellow-400/40 to-orange-500/40",
  },
  
];
