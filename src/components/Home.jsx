import React, { useMemo } from 'react';
import hraf from '../assets/hraf.webp';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';

const Home = () => {
  // Memoizing PROFILE data to prevent unnecessary re-calculations
  const profileData = useMemo(() => PROFILE, [PROFILE]);

  return (
    <section className='relative flex min-h-screen items-end justify-center' id='hero'>
      <motion.img
        src={hraf}
        alt="Profile picture"
        className='absolute inset-0 z-10 h-full w-full object-cover'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <section
        className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></section>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='absolute bottom-0 left-3.5 z-20 mx-4 max-w-3xl pb-20'>

         <motion.h1
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                // className="md:text-4xl lg:text-9xl lg:uppercase font-bold mb-8 text-yellow-500"
                  className='text-5xl font-bold uppercase tracking-wide w-full md:text-7xl'
              >
                ACHRAF ABDELFADEL
              </motion.h1>
        <motion.p
          className='pt-2 font-semibold'
          initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
          {profileData.info}
        </motion.p>
      </motion.div>
    </section>
  );
};

// Memoize the Home component to prevent re-renders
export default React.memo(Home);
