import Image from 'next/image'
import React from 'react'
import mountain from '@/assets/mountain.png'
import comma1 from '@/assets/comma.png'
import comma2 from '@/assets/comma2.png'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, fadeIn,textVariant2, textVariant } from '@/utils/motion'

const Story = () => {
    const comma = " relative bg-white rounded-full opacity-0.5 sm:mt-0 mt-20"
    return (
        <div 
            className='bg-img2 bs   sm:p-14 p-10 rounded-md'>
            <p className="text-center font-semibolf text-white text-4xl">Net Zero Story So Far ?</p>
            <div className="sm:flex mt-6">
                <div className="sm:w-1/2 w-full">
                    <Image src={mountain} className='max-w-full sm:w-[550px] w-[100%] mt-5 mx-auto' />

                    <div className='mt-2'>
                        <span className={`${comma} `} >
                            <Image src={comma2} className='bg-white w-[50px] rounded-full bg-opacity-5 m-2 px-2 py-3' />
                        </span>
                        <motion.p variants={slideIn('right', 'tween', 0.1, 1)} className='text-white text-xl font-extralight sm:px-10 pl-10 mt-4 leading-8 '>To secure a sustainable future for our planet and all its people, the world must reach net zero – cutting greenhouse gases as close to zero as possible.</motion.p>
                        <span className={`${comma} left-[90%] `} >
                            <Image src={comma1} className='bg-white w-[50px] rounded-[99%] bg-opacity-5 m-2 px-2 py-3' />
                        </span>
                    </div>

                </div>
                <motion.div variants={slideIn('right', 'tween', 0.1, 1)}
                    initial="hidden" whileInView="show" className="sm:w-1/2 w-full list-story sm:px-8">
                    <ul>
                        <li>
                            <p>2015</p>
                            <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                        </li>
                        <li>
                            <p>2015-2017</p>
                            <p>Climate action plans known as nationally determined contributions (NDCs) submitted.</p>
                        </li>
                        <li>
                            <p>2020-21</p>
                            <p>NDCs revised in COP26 to strengthen climate action. Target to cut carbon emissions and reach net zero by 2050.</p>
                        </li>
                        <li>
                            <p>2030</p>
                            <p>To keep warming to 1.5 degrees, countries must cut emissions by at least 45 percent compared to 2010 levels</p>
                        </li>
                        <li className='border-0'>
                            <p>2050</p>
                            <p>The transition to net-zero emissions must be fully complete.</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Story