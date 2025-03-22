import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section 
    className="container mx-auto pt-20" id="skills">
      {/* Title */}
     <motion.h2
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{
               type: "spring",
               stiffness: 100,
               damping: 10
             }}
             className=" text-4xl md:text-4xl lg:text-9xl uppercase font-bold mb-8 ml-4  text-yellow-500"
           >
             skills
           </motion.h2>

      {/* Skills List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3}} 
        viewport={{ once: true }}
        className="mx-2 pt-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 lg:px-20"
      >
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex items-center justify-between py-4 border-b border-gray-700"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
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
