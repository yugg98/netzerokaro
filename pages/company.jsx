import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, staggerContainer,slideIn } from '@/utils/motion'
import approach from '@/assets/approach.png'
import Image from 'next/image'
import tech from '@/assets/company/tech.jpg'
import dia from '@/assets/company/dia.svg'
import note from '@/assets/company/note.png'
import learn from '@/assets/company/learn.svg'
import { Footer } from '@/components/Footer'
import img1 from '@/assets/img1.png'
import CallToAction from '@/components/CallToAction'
import icon1 from '@/assets/icon1.png'
import icon2 from '@/assets/icon2.png'
import icon3 from '@/assets/icon3.png'
import Platform from '@/components/Platform'

import Heading from '@/components/Heading'
import HeroCompany from '@/components/HeroCompany'

const company = () => {
    return (
        <div>
            <Navbar />
            <HeroCompany/>
            <Platform />
            {/* <Vision />
            <Approach /> */}
            <CoreValues />
            <CallToAction />
            <Footer />
        </div>
    )
}

function Vision() {
    return (
        <div className='bg-img2  flex sm:flex-row flex-col '>
            <motion.div className='sm:w-[40%]' variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show">
                <div className='sm:px-[80px] p-8 flex  flex-col justify-center '>
                    <div className=' mt-10'>
                        <p className="text-3xl text-white sm:text-left text-center">Our Vision</p>
                        <p className="text-xl text-white mt-4 sm:text-left text-center">Our vision is to create a world that is sustainable, carbon-neutral, and resilient to the impacts of climate change, by empowering individuals and businesses with the tools and knowledge to transition to a net-zero economy.</p>

                    </div>
                    <div className='  sm:mt-40 mt-10 '  >
                        <p className="text-3xl text-white sm:text-left text-center" >Our Mission</p>
                        <p className="text-xl text-white mt-4 sm:text-left text-center">Our mission is to accelerate the transition to a sustainable & net-zero economy by enabling stakeholders to reduce their carbon footprint, embrace sustainable practices, and embrace a more resilient future for our planet and future generations.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className="sm:w-[60%]  sm:px-24 flex flex-col justify-center p-6 px-4" variants={slideIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show">
                <ul>
                    <li className='sm:my-10 my-4'>
                        <div className='sm:flex justify-center '>
                            <div className='sm:p-0 p-4'>
                                <div className="flex">

                                    <p className="text-3xl text-semibold mt-2 text-white">Why Now ?</p>
                                </div>

                                <p className=' mt-2 text-white sm:text-xl  '>
                                Now is the time to act on the climate crisis. With growing global awareness and a sense of urgency, organizations and individuals need to embrace sustainability and climate action. Regulatory shifts and evolving policies demand swift adaptation. Embracing sustainability practices is not only a business imperative but also an opportunity for future-proofing. 
                                </p>
                                
                              
                            </div>
                        </div>
                    </li>
                    <li className='sm:my-10 my-4'>
                        <div className='sm:flex justify-center '>
                            <div className='sm:p-0 p-4'>
                                <div className="flex">

                                    <p className="text-3xl text-semibold mt-2 text-white">Why You ?</p>
                                </div>

                                <p className=' mt-2 text-white sm:text-xl  '>
                                Bridge the gap between your professional skills and the urgent need for climate action within your company. Unleash your passion and dedication to drive meaningful change, leveraging your existing expertise and experience. Empower yourself to become a catalyst for transformation and lead the way toward a sustainable future.                                </p>
                               
                              
                            </div>
                        </div>
                    </li>
                    <li className='sm:my-10 my-4'>
                        <div className='sm:flex justify-center '>
                            <div className='sm:p-0 p-4'>
                                <div className="flex">

                                    <p className="text-3xl text-semibold mt-2 text-white">Why Us ?</p>
                                </div>

                                <p className=' mt-2 text-white sm:text-xl  '>
                                Experience a transformative learning journey with us, where we go beyond theoretical knowledge to empower you with practical skills for driving change within your company. Our comprehensive curriculum blends technical expertise with leadership development, equipping you to lead sustainable initiatives with confidence.                                </p>
                              
                               
                            </div>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}


function CoreValues() {
    return (
        <div className="w-full flex bg-img2 flex-wrap mb-0">
            <motion.div className="sm:w-[40%]" variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show">
                <Image src={img1} />
            </motion.div>
            <motion.div className="sm:w-[60%]  list-values sm:px-24  p-4 py-8 pt-4 flex flex-col justify-center " variants={slideIn('right', 'tween', 0.1, 1)} initial="hidden" whileInView="show">
                <p className="sm:text-5xl text-3xl text-white font-semibold">Our Core Values</p>
                <ul className=''>

                    <li className=''>
                        <p>Sustainability</p>
                        <p className=''> We are deeply committed to promoting sustainable practices and solutions that contribute to a resilient and thriving plane</p>
                    </li>

                    <li className=''>
                        <p>Integrity</p>
                        <p> We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations and interactions.</p>
                    </li>
                    <li className=''>
                        <p>Innovation</p>
                        <p>We embrace innovation as a driving force for finding creative and impactful solutions to climate and sustainability challenges.</p>
                    </li>
                    <li className=''>
                        <p>Collaboration</p>
                        <p>We believe in the power of collaboration and partnerships to foster collective action and maximize our impact in creating a sustainable future</p>
                    </li>
                    <li className=''>
                        <p>Empowerment</p>
                        <p>We empower individuals and organizations with the knowledge, skills, and resources to take meaningful action toward achieving net-zero emissions and sustainability goals</p>
                    </li>

                </ul>
            </motion.div>
        </div>
    )
}
function Approach() {
    return (
        <div className='sm:h-screen  bg-img linearbggreen'>
            <Heading text="Our Approach"/>
        <div className="   flex sm:items-end items-center justify-center my-10 md:h-[80%]">
            <div className="flex flex-wrap items-center justify-center w-full">
                
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={learn} alt="" />
                    <p className="text-lg font-[550] mt-8 text-green">Learning</p>
                    <p className="text-sm text-center mt-2">Empowering Individuals through Education</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={dia} alt="" />
                    <p className="text-lg font-[550] mt-8 text-green">Engagement</p>
                    <p className="text-sm text-center mt-2">Cultivating collaborative engagement for impactful solutions</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={tech} alt="" />
                    <p className="text-lg font-[550] mt-8 text-green">Innovation</p>
                    <p className="text-sm text-center mt-2">Embracing technology’s potential for an environmentally resilient future</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={note} alt="" />
                    <p className="text-lg font-[550] mt-8 text-green">Knowledge</p>
                    <p className="text-sm text-center mt-2">Enabling informed decision-making and driving sustainable outcomes.</p>
                </div>
            </div>
        </div>
        </div>

    )
}


export default company