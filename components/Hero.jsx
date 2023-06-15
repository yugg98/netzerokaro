import Image from 'next/image'
import React from 'react'
import earth from '@/assets/earth.png'
import {motion} from 'framer-motion'
import heroimg from '@/assets/heroimg.png'
import { slideIn ,textVariant} from '@/utils/motion'
const Hero = ({}) => {
  return (
    <div  className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center border-2 border-green border-spacing-4 border-dashed linearbggreen sm:px-20'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden"  whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
        <div className='p-2 sm:pl-8 sm:p-4 sm:px-20'>
          <motion.p variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800]'>Net Zero Karo<br/ >(NZK)  </motion.p>
          <motion.p variants={textVariant(0.6)} className="text-xl leading-6 mt-4 text-center sm:text-left">a platform dedicated to driving India's transition towards a net-zero economy.</motion.p>
          <div className="flex items-center mt-8 sm:justify-start justify-center">
            <button className="rounded-full bg-green text-white px-6 py-3">Explore</button>
          </div>
        </div>
      </motion.div>
      <div className="sm:w-[50%] flex justify-end py-20 w-full">
        <Image src={heroimg} className='w-[80%] mx-auto' />
      </div>
    </div>
  )
}

export default Hero