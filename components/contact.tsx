import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PERSONAL_INFO, SOCIALS } from "../constants";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <p className="text-gray-500 uppercase tracking-widest mb-4">
            What's Next?
          </p>
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase leading-[0.8] tracking-tighter mb-12">
            Let's work <br />
            <span className="text-gray-600 group hover:text-white transition-colors cursor-pointer">
              Together
            </span>
          </h2>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-4 text-2xl md:text-4xl text-white hover:text-gray-300 transition-colors border-b border-white pb-2"
          >
            {PERSONAL_INFO.email}
            <ArrowRight className="w-8 h-8 -rotate-45" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
          <div className="flex gap-8 mb-8 md:mb-0">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white uppercase tracking-wider text-lg transition-colors"
              >
                {<social.icon />}
              </a>
            ))}
          </div>

          <div className="text-right text-gray-500 text-sm">
            <p>ADDIS ABABA, ETHIOPIA</p>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
