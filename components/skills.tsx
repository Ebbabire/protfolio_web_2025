import React from "react";
import { SKILLS } from "../constants";

export const Skills: React.FC = () => {
  // Duplicate skills for seamless loop
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
      {/* Forward Marquee */}
      <div className="relative flex overflow-x-hidden mb-8">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {marqueeSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <span className="text-4xl md:text-6xl font-display font-bold text-transparent text-stroke-1 hover:text-white transition-colors duration-300 uppercase opacity-50 hover:opacity-100">
                {skill.name}
              </span>
              <span className="text-2xl text-accent">✦</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
          {marqueeSkills.map((skill, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 group">
              <span className="text-4xl md:text-6xl font-display font-bold text-transparent text-stroke-1 hover:text-white transition-colors duration-300 uppercase opacity-50 hover:opacity-100">
                {skill.name}
              </span>
              <span className="text-2xl text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Marquee (Optional: Visual variety) */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-16 items-center">
          {marqueeSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <span className="text-2xl md:text-4xl font-sans font-light text-gray-600 hover:text-white transition-colors duration-300 uppercase">
                {skill.category}
              </span>
              <span className="w-2 h-2 rounded-full bg-gray-700"></span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .text-stroke-1 {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
};
