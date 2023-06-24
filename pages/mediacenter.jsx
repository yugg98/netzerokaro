import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/zero.png'
import img2 from '@/assets/img10.png'
import { motion } from 'framer-motion'
import heroimg from '@/assets/heroimg.png'
import { slideIn, textVariant } from '@/utils/motion'
const greenstore = () => {
    return (
        <div>
            <Navbar />
            <Hero Title={"Our purpose lies in our name"} showQues={true} SuperTitle={"Why Net Zero"} Desc={"NET ZERO: It is a state where we add no incremental greenhouse gases to the atmosphere. <br/> <br/> KARO = TO DO, means to act. It reflects our commitment to action and direction towards achieving carbon neutrality."} />

            <div className="sm:p-10 p-2 flex justify-center items-center linearbggreen flex-wrap">
                <div className="sm:w-1/2 sm:px-16 px-4 w-full">
                    <p className="sm:text-5xl text-3xl  mt-4 text-green mb-2 sm:leading-[60px]">Helping you deliver a  credible net zero  strategy”</p>
                    <p className='text-2xl mt-10'>We have the roadmap to your company’s zero-carbon future, and the expertise and platform to get you there.</p>
                </div>
                <div className="sm:w-1/2 p-8 w-full">
                    <Image src={img2} />
                </div>
            </div>
        </div>
    )
}

export default greenstore