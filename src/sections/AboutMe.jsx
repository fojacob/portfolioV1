import { Technologies } from '../components/Technologies';
import React from "react";
import img1 from '../assets/IMG_2142.jpg';
import { motion } from 'framer-motion';
import {fadeIn, textVariant}  from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { about } from '../constants';

const AboutMe = () => {
  return (
    <div className='sm:h-screen w-screen flex items-center justify-around flex-col-reverse py-16 sm:flex-row'>
    <div className='flex flex-col w-full px-3 md:w-1/2 md:h-screen md:p-32 md:justify-between'>
      <div className='content'>
        <motion.div variants={textVariant()}>
            <h1 className='sm:text-6xl text-4xl my-4'>About Me</h1>
        </motion.div>
        
        {about.map((topic, index)=>(
          <motion.p
          key={index}
          variants={fadeIn("","",0.5,1)}
          className="mb-6 sm:text-lg text-md text-justify"
          >
          {topic}
        </motion.p>
        ))}
      </div>

      <motion.div variants={fadeIn("", "",0.5, 1)}>
        <Technologies className=" align-bottom"  />
      </motion.div>
    </div>
    <motion.div variants={fadeIn("left", "", 0.5, 1)} className='flex justify-center'>
      <img src={img1} alt="personal photo" className=' aspect-square w-1/2 rounded-full border-solid border-white border-4 object-cover object-top' />
    </motion.div>
    </div>
  )
}

export default SectionWrapper(AboutMe, "about")
  