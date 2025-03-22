import React from 'react';
import { ABOUT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      id='about'
      className="w-full mx-auto pt-20 px-4 shadow-[0_-50px_50px_-3px_rgba(0,0,0,0.5)]"
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="text-6xl md:text-4xl lg:text-9xl uppercase font-bold mb-8 text-yellow-500 border-l-2  border-r-2 pl-2 py-2 bg-gradient-to-tr from-[rgba(245,175,25,0.48)] w-full text-center"
      >
        About
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6 text-4xl md:text-4xl lg:text-6xl font-bold uppercase"
      >
        {ABOUT.text1}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6 text-2xl leading-10 lg:w-10/12"
      >
        {ABOUT.text2}
      </motion.div>
    </motion.section>
  );
};

export default About;