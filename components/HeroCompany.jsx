import Image from 'next/image'
import React from 'react'
import earth from '@/assets/earth.png'
import { motion } from 'framer-motion'
import heroimg from '@/assets/heroimg.png'
import { slideIn, textVariant } from '@/utils/motion'
import { Parser } from 'html-to-react'
import ques from '@/assets/ques.png'
import Typewriter from 'typewriter-effect';

const HeroCompany = () => {
    return (
        <div className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen sm:px-10'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
                <div className='p-2 sm:pl-8 sm:p-4 sm:px-20'>

                    <motion.div variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>Accelerating the Transition to a Greener World with Net Zero Karo!</motion.div>

                    <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">A platform designed for Net Zero Transition
                        Helping to create a better world for 
                   
                    </motion.p>
                    <Typewriter
                        options={{
                            strings: ['You', 'Me','Us','Earth'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end py-20 w-full">
                <Image src={heroimg} className='w-[80%] mx-auto' />
            </div>
        </div>
    )
}

export default HeroCompany