import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="container mx-auto pt-6" id="skills">
      {/* Title */}
      <h2 className="mt-10 text-center text-5xl mb-6 font-semibold leading-tight">
        <span className="text-yellow-500 text-8xl mr-2 underline">S</span>kills
      </h2>

      {/* Skills List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
        className="mx-2 pt-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 lg:px-20"
      >
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex items-center justify-between py-4 border-b border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Skill Icon and Name */}
            <div className="flex items-center gap-4">
              {skill.icon}
              <h3 className="text-2xl lg:text-3xl">{skill.name}</h3>
            </div>

            {/* Skill Level */}
            <span className="text-md font-semibold lg:text-xl text-yellow-400">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
