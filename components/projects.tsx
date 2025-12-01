"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";
import Image from "next/image";
import Link from "next/link";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            Selected <br /> Works
          </h2>
          <p className="text-gray-400 mb-2">(Feb 2025 - Present)</p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div>
                <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden rounded-lg mb-8">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />

                  {/* Image Scale Effect */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full bg-red-50 object-top h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                  />

                  {/* Floating Action Button */}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-8 right-8 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"
                    >
                      <ArrowUpRight className="w-8 h-8 text-black" />
                    </Link>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start border-t border-white/20 pt-6">
                  <div>
                    <h3 className="text-3xl font-bold uppercase mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap md:mt-0">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
