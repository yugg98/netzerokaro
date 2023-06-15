import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, staggerContainer } from '@/utils/motion'
import approach from '@/assets/approach.png'
import Image from 'next/image'
import tech from '@/assets/tech.svg'
import { Footer } from '@/components/Footer'
import img1 from '@/assets/img1.png'
import CallToAction from '@/components/CallToAction'
import icon1 from '@/assets/icon1.png'
import icon2 from '@/assets/icon2.png'
import icon3 from '@/assets/icon3.png'

const company = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Platform />
            <Vision />
            <Approach />
            <CoreValues />
            <OurApproach />
            <CallToAction />
            <Footer />
        </div>
    )
}

function Vision() {
    return (
        <div className='bs'>Vision</div>
    )
}

function OurApproach() {
    return (
        <div className="w-full flex flex-row-reverse linearbggreen">
            <div className="w-[35%] approach-bg h-[100vh] flex justify-center flex-col items-center">
                <p className="text-4xl text-white text-center font-semibold leading-12 ">Our Approach<br />
                    Towards<br />
                    Net Zero </p>
                <button className="rounded-full bg-green text-white px-6 py-3">Explore</button>

            </div>
            <div className="w-[65%]  sm:px-24 flex flex-col justify-center">
                <ul>
                    <li className='my-10'>
                        <div className='flex justify-center '>
                            <Image src={icon1} className='h-[84px] w-[84px]' />
                            <div>
                                <p className="text-2xl text-semibold mt-2">Why Now ?</p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='my-10'>
                        <div className='flex justify-center '>
                            <Image src={icon2} className='h-[84px] w-[84px]' />
                            <div>
                                <p className="text-2xl text-semibold mt-2">Why Now ?</p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='my-10'>
                        <div className='flex justify-center '>
                            <Image src={icon3} className='h-[84px] w-[84px]' />
                            <div>
                                <p className="text-2xl text-semibold mt-2">Why Now ?</p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className='font-extralight mt-2 text-greyf'>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function CoreValues() {
    return (
        <div className="w-full flex bs">
            <div className="w-[40%]">
                <Image src={img1} />
            </div>
            <div className="w-[60%] bs list-values sm:px-24 flex flex-col justify-center">
                <p className="text-5xl text-white font-semibold">Our Core Values</p>
                <ul>

                    <li className=''>
                        <p>Sustainability</p>
                        <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                    </li>

                    <li className=''>
                        <p>Sustainability</p>
                        <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                    </li>
                    <li className=''>
                        <p>Sustainability</p>
                        <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                    </li>
                    <li className=''>
                        <p>Sustainability</p>
                        <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                    </li>
                    <li className=''>
                        <p>Sustainability</p>
                        <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}
function Approach() {
    return (
        <div className="bg-img">
            <div className="border-green p-4 flex flex-col justify-center items-center">
                <Image src={tech} alt="" />
                <p className="text-lg font-semibold hover:text-white">Learning</p>
                <p className="text-sm hover:text-white">Empowering Individuals through Education</p>
            </div>
        </div>
    )
}
const Platform = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col w-[90%] mx-auto my-10 mt-12 mb-0 sm:px-20 pb-0'>
                <p className="text-4xl mb-6 text-green font-semibold">The Platform</p>
                <motion.p variants={textVariant(0.2)} initial="hidden" whileInView="show" className="text-fblack text-center " >
                    Net Zero Karo (NZK), a platform dedicated to driving India's transition towards a net-zero economy.
                    “KARO” which means "TO DO" in Hindi, reflects our commitment to action and direction towards achieving carbon neutrality.
                    <br />
                    <br />
                    Net Zero Karo is a leading climate and sustainability education platform. Our comprehensive curriculum and specialized training programs address the urgent need for climate and ESG skills.
                    <br />
                    <br />

                    We empower individuals and organizations to navigate the transition to a net-zero future by providing in-depth knowledge, practical tools, and industry insights. With a focus on innovative learning, collaborative engagement, and cutting-edge technology, we inspire and equip climate leaders to drive meaningful change.
                </motion.p>
                <div className='bs w-full px-10 py-6 rounded-lg mt-10 relative bottom-[-10px] z-[-1]'>
                    <p className="text-center text-2xl font-semibold text-white">The Carbon Clock is ticking! Time to meet the <br /> two-degree target</p>
                    <div className="flex justify-between  w-[50%] mx-auto mt-10">
                        <div className="rounded-full bg-white px-3.5 py-3">
                            <p className="text-sm text-center text-greyf">Years</p>
                            <p className="text-sm text-center">7</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                            <p className="text-sm text-center">Years</p>
                            <p className="text-sm text-center">7</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                            <p className="text-sm text-center">Years</p>
                            <p className="text-sm text-center">7</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                            <p className="text-sm text-center">Years</p>
                            <p className="text-sm text-center">7</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                            <p className="text-sm text-center">Years</p>
                            <p className="text-sm text-center">7</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                            <p className="text-sm text-center">Years</p>
                            <p className="text-sm text-center">7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default company