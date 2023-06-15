import Image from 'next/image'
import React from 'react'
import earth from '@/assets/earth.png'
import {motion} from 'framer-motion'
import { slideIn ,textVariant} from '@/utils/motion'
const HeroHome = () => {
  return (
    <div    className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center border-2 border-green border-spacing-4 border-dashed linearbggreen'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden"  whileInView="show" className="sm:w-[50%] w-full flex justify-center">
        <div className='p-2 sm:pl-8 sm:p-4'>
          <motion.p variants={textVariant(0.8)} className='gradienttextbg sm:text-6xl text-4xl font-[800]'>Building The Net Zero <br/ >Work Force  </motion.p>
          <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4">At Zero Carbon Net, we are dedicated to creating a world with zero carbon emissions and a sustainable future for all. Our mission is to accelerate the transition to renewable energy sources and reduce our carbon footprint to protect the planet.</motion.p>
          <div className="flex items-center mt-8 sm:justify-start justify-center">
            <button className="rounded-full bg-green text-white px-6 py-3">Get Started</button>
            <a href="" className="text-fblack underline ml-4">Learn More</a>
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