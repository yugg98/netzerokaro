import Image from 'next/image'
import React from 'react'
import earth from '@/assets/earth.png'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '@/utils/motion'
import heroimg from '@/assets/hero5.svg'
import Link from 'next/link'

const HeroCompany = () => {
    return (
        <div className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen sm:px-10'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
                <div className='p-2 sm:pl-4 sm:p-4 sm:px-10'>

                    <motion.div variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>Accelerating the transition to a greener world </motion.div>

                    <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">A platform designed for Net Zero Transition
                        Helping to create a better world ! 
                    </motion.p>
                   {/* <Typewriter
                        options={{
                            strings: ['You', 'Me','Us','Earth'],
                            autoStart: true,
                            loop: true,
                        }}
                    /> */}
                    <div className="flex items-center mt-8 sm:justify-start justify-center">
                    <div className="flex items-center mt-8 sm:justify-start justify-center">
            <Link  className="rounded-full bg-green text-white px-12 text-lg py-3" href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform">Explore</Link>
          </div>
          </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end py-20 w-full">
                <Image src={heroimg} width={500} height={64} className=' mx-auto' />
            </div>
        </div>
    )
}

export default HeroCompany