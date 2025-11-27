"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerOffset = 100;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-20 animate-blob pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-4 tracking-widest uppercase">
            Lead Web Developer
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] font-display font-bold leading-[0.9] tracking-tighter text-white uppercase mix-blend-difference"
          >
            Ebba
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] font-display font-bold leading-[0.9] tracking-tighter text-gray-500 uppercase mix-blend-difference"
          >
            Birhanu
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8"
        >
          <p className="max-w-md text-lg text-gray-400 leading-relaxed">
            Crafting digital experiences with a focus on motion, aesthetics, and
            performance. Reimagining the web, one pixel at a time.
          </p>

          <div
            onClick={scrollToContent}
            className="hidden md:flex gap-4 cursor-pointer group"
          >
            <span className="text-sm font-mono text-gray-500 group-hover:text-white transition-colors">
              SCROLL TO EXPLORE
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer p-4 hover:scale-110 transition-transform"
      >
        <ArrowDown className="w-6 h-6 animate-bounce text-white/50" />
      </motion.div>
    </section>
  );
};
