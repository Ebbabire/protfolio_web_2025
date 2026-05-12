"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Coffee, Zap } from "lucide-react";
import { PERSONAL_INFO, SOCIALS } from "../constants";

import profile from "@/app/assets/profile.png";
import Image from "next/image";

const CAREER_START_YEAR = 2022;

export const About: React.FC = () => {
  const yearsExperience = Math.max(
    0,
    new Date().getFullYear() - CAREER_START_YEAR,
  );

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-sm text-foreground/70 uppercase tracking-widest mb-4">
            Who I Am
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase leading-none">
            Digital Creator <br />{" "}
            <span className="text-foreground/70">Based in Ethiopia</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Main Bio Card - Top Left (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface rounded-3xl p-8 border border-foreground/10 flex flex-col justify-between group hover:border-foreground/20 transition-colors min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-foreground" />
              </div>
              {/* <h4 className="text-2xl font-bold mb-4">Philosophy</h4> */}
              <p className="text-foreground/75 text-lg leading-relaxed">
                {PERSONAL_INFO.bio} I bridge the gap between engineering and
                design, believing that the best digital products feel natural,
                fluid, and human.
              </p>
            </div>
            <div className="mt-8">
              {/* <span className="text-sm font-mono text-gray-500">EST. 2021</span> */}
              <div className="flex gap-8 mb-8 md:mb-0">
                {SOCIALS.slice(0, 2).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 hover:text-foreground uppercase tracking-wider text-3xl transition-colors"
                  >
                    {<social.icon />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. Image Card - Right Side (Tall) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-3xl border border-foreground/10 group min-h-[400px] md:min-h-full"
          >
            {/* REPLACE THIS SRC WITH YOUR ACTUAL IMAGE URL */}
            <Image
              src={profile}
              alt="Ebba Birhanu"
              width={500}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white/80 text-xs uppercase tracking-widest mb-2">
                The Face
              </p>
              <h4 className="text-2xl font-display font-bold text-white">
                Ebba Birhanu
              </h4>
            </div>
          </motion.div>

          {/* 3. Stats Card - Middle Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface rounded-3xl p-8 border border-foreground/10 flex flex-col justify-center items-center text-center hover:bg-foreground/5 transition-colors"
          >
            <h4 className="text-6xl font-display font-bold text-foreground mb-2">
              {yearsExperience}+
            </h4>
            <p className="text-foreground/70 text-sm uppercase tracking-wider">
              Years Experience
            </p>
          </motion.div>

          {/* 4. Stack Card - Middle Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface rounded-3xl p-8 border border-foreground/10 flex flex-col justify-between hover:bg-foreground/5 transition-colors"
          >
            <div className="flex justify-between items-start">
              <Cpu className="w-8 h-8 text-foreground/70" />
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Fast & Scalable</h4>
              <p className="text-foreground/70 text-sm">Next.js powered</p>
            </div>
          </motion.div>

          {/* 5. Contact Tease Card - Bottom Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 bg-linear-to-r from-surface to-foreground/5 rounded-3xl p-8 border border-foreground/10 flex items-center justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-2">Open to Work</h4>
              <p className="text-foreground/70">
                Ready to start your next project?
              </p>
            </div>
            <Coffee className="w-12 h-12 text-foreground/50 group-hover:text-foreground transition-colors relative z-10" />

            <div className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
