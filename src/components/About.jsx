import React from 'react'
import { ABOUT } from '../constants'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section  id="about" className='container mx-auto ' > 
         <motion.h2 className='mt-20 text-center text-5xl mb-6 leading-tight font-semibold'
         initial={{opacity:0, y:-20  }}
         whileInView={{opacity:1, y:0 }}
         transition={{duration:.5}}
         viewport={{once:true}}
         ><span className='text-yellow-500 text-8xl mr-2 underline'>A</span>bout</motion.h2>
         <motion.h3 
         className='p-4 md:text-[6rem] sm:text-[3rem] text-6xl uppercase font-semibold lg:text-[8rem]'
          initial={{opacity:0, x:-20  }}
          whileInView={{opacity:1, x:0 }}
          transition={{duration:1}}
          viewport={{once:true}}
         >{ABOUT.text1}</motion.h3>
         <motion.p 
         className='mr-24 pl-4 leading-loose text-2xl text-gray-400'
          initial={{opacity:0, x:100  }}
          whileInView={{opacity:1, x:0 }}
          transition={{duration:1}}
          viewport={{once:true}}
         >{ABOUT.text2}  </motion.p>
    </section>
  )
}

export default About