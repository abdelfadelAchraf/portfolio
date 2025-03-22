import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { h1 } from "framer-motion/client";

const fadeInUp = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check device width on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Default breakpoint for small devices
    };

    // Initialize
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProjectClick = (e, link) => {
    if (isMobile) {
      // Prevent default behavior (navigation) on mobile
      e.preventDefault();
    }
  };

  const projectList = useMemo(() =>
    PROJECTS.map((project) => (
      <motion.div
        key={project.id}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="group relative overflow-hidden rounded-3xl border border-white/15"
      >
        {/* Project Image */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          //  className="bg-red-700 p-6"
          onClick={(e) => handleProjectClick(e, project.link)}
        >
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </a>


        {/* Overlay on Hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg bg-[linear-gradient(to_right,#000_50%,#FACC15_50%)] transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="mb-4 text-6xl text-center font-bold">{project.title}</h3>
          <p className="mb-8 px-4 text-center text-xl font-semibold">{project.description}</p>

          {/* GitHub Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer rounded-full bg-white px-4 py-3 text-black hover:bg-white/30 hover:text-white transition-all duration-300"
            onClick={(e) => handleProjectClick(e, project.link)}
          >
            <span>{project.btnContent}</span>
            <MdArrowOutward />
          </a>
        </div>

      </motion.div>
    )),
    [PROJECTS, isMobile] // Added isMobile to dependencies
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="p-6 pt-20"
      id="projects"
    >
      {/* Title */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="text-6xl md:text-6xl lg:text-9xl uppercase font-bold mb-8 text-yellow-500 border-l-2 border-r-2 pl-2 py-2 bg-gradient-to-bl from-[rgba(245,175,25,0.48)] w-full text-center"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        
         {isMobile ? (
          PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 text-center bg-black rounded-lg border border-white/20"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-3 text-2xl font-bold text-yellow-400">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 text-black hover:bg-yellow-400 transition-all duration-300"
              >
                {project.btnContent}
                <MdArrowOutward className="ml-1" />
              </a>
            </motion.div>
          ))
        ) : (
          projectList
        )}
        
        

      </div>
    </motion.section>
  );
};

export default Projects;