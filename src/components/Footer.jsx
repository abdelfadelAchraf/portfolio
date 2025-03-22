import React, { useMemo } from 'react';
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  // Memoize the social media links rendering to avoid unnecessary recalculations
  const socialMediaLinks = useMemo(() => (
    SOCIAL_MEDIA_LINKS.map((media, index) => (
      <a key={index} href={media.href} target='_blank' rel='noopener noreferrer'>
        {media.icon}
      </a>
    ))
  ), [SOCIAL_MEDIA_LINKS]); // Recalculate only when SOCIAL_MEDIA_LINKS change

  return (
    <section className='mb-8 mt-20'>
      {/* Divider line */}
      <section className='flex items-center justify-center w-full h-1 bg-gray-200/45 mb-6'>
      </section>

      {/* Social Media Icons */}
      <motion.section
        className='flex items-center justify-center gap-8'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {socialMediaLinks}
      </motion.section>

      {/* Copyright Text */}
      <motion.p
        className='mt-8 text-center text-sm tracking-wide text-gray-400'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        &copy; created by Achraf Abdelfadel. All rights reserved.
      </motion.p>
    </section>
  );
};

export default React.memo(Footer);  // Memoize the Footer component itself to prevent re-renders
