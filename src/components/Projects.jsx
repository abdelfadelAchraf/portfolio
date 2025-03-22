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
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-3xl"
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="mb-2 text-xl">{project.name}</h3>
          <p className="mb-8 px-4 text-center">{project.description}</p>

          {/* GitHub Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer rounded-full bg-white px-4 py-2 text-black transition-all duration-200 hover:bg-gray-300"
          >
            <span>{project.btnContent}</span>
            <MdArrowOutward />
          </a>
        </div>
      </motion.div>
    )), [PROJECTS]
  );

  return (
    <section className="p-6 pt-20" id="projects">
      {/* Title */}
     
      <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='mt-10  text-center text-5xl mb-6 leading-tight font-semibold'
        ><span className='text-yellow-500 text-8xl mr-2 underline'>P</span>rojects</motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList}
      </div>
    </section>
  );
};

export default Projects;
