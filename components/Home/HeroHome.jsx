import Image from 'next/image'
import React from 'react'
import earth from '@/assets/earth.png'
import {motion} from 'framer-motion'
import { slideIn ,textVariant} from '@/utils/motion'
const HeroHome = () => {
  return (
    <div    className=' w-screen sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden"  whileInView="show" className="sm:w-[50%] w-full flex justify-center">
        <div className='p-2 sm:pl-8 sm:p-4'>
          <motion.p variants={textVariant(0.8)} className='gradienttextbg sm:text-5xl text-3xl font-[800] sm:text-left text-center'>Empowering the Future with Climate and Sustainability Education. </motion.p>
          <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 sm:text-left text-center text-greyf text-xl">Workplace climate action made simple.</motion.p>
          <div className="flex items-center mt-8 sm:justify-start justify-center">
          </div>
        </div>
      </motion.div>
      <div className="sm:w-[50%] flex justify-end py-20 w-full">
        <Image src={earth} className='w-[80%]' />
      </div>
    </div>
  )
}

export default HeroHome