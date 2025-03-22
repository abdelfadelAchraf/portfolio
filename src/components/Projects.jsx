import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useMemo } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const projectList = useMemo(() => 
    PROJECTS.map((project) => (
      <motion.div
        key={project.id}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 , delay:0.3}}
        className="group relative overflow-hidden rounded-3xl border border-white/15"
      >
        {/* Project Image */}
        
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full aspect-square object-cover  transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
         

        {/* Overlay on Hover */}
        <div className="absolute inset-0  flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg bg-[linear-gradient(to_right,#000_50%,#FACC15_50%)] transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="mb-4 text-6xl text-center font-bold">{project.title}</h3>
          <p className="mb-8 px-4 text-center text-xl font-semibold">{project.description}</p>

          {/* GitHub Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer rounded-full bg-white px-4 py-3 text-black  hover:bg-white/30 hover:text-white transition-all duration-300"
          >
            <span>{project.btnContent}</span>
            <MdArrowOutward />
          </a>
        </div>
      
      </motion.div>
    )), [PROJECTS]
  );

  return (
    <motion.section 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    className="p-6 pt-20"
     id="projects">
      {/* Title */}
     
      <motion.h2
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      className=" text-4xl md:text-4xl lg:text-9xl uppercase font-bold mb-8  text-yellow-500"
        >Projects</motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList}
      </div>
    </motion.section>
  );
};

export default Projects;
