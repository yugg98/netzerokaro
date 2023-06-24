import Image from 'next/image'
import React from 'react'
import earth from '@/assets/earth.png'
import aslen from '@/assets/aslap.png'
import asro from '@/assets/asro.png'
import aspen from '@/assets/aspen.png'
import {motion} from 'framer-motion'
import { rocket, slideIn ,textVariant} from '@/utils/motion'
const HeroHome = () => {
  return (
    <div    className='linearbggreen w-screen sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center   '>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden"  whileInView="show" className="sm:w-[50%] w-full flex justify-center">
        <div className='p-2 sm:pl-8 sm:p-4'>
          <motion.p variants={textVariant(0.8)} className='text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg '>Empowering the future with climate and sustainability education. </motion.p>
          <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 sm:text-left text-center text-greyf">Workplace climate action made simple.</motion.p>
          <div className="flex items-center mt-8 sm:justify-start justify-center">
            <button className="rounded-full bg-green text-white px-12 text-lg py-3">Explore</button>
          </div>
        </div>
      </motion.div>
      <div className="sm:w-[50%] flex justify-end ">
        <motion.div 
        transition={{ease:'linear',duration:'10',repeat:Infinity}}
        animate={{ x: ["100%", "-100%"],y: ["80%", "20%"] }}
         className=" ">
        <Image src={asro} width={200} height={64} className='px-6 pr-0'  />
        </motion.div>
        <Image src={aspen} className='px-6 pr-0 w-[100px] h-[120px] absolute top-[10%] right-[10%]' />

        <Image src={earth} width={500} height={64} className='px-6 pr-0 md:mt-10 ' />
      </div>
    </div>
  )
}

export default HeroHome