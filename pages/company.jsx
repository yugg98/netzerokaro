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
import Platform from '@/components/Platform'

const company = () => {
    return (
        <div>
            <Navbar />
            <Hero Title="Net Zero Karo (NZK)" Desc="a platform dedicated to driving India&apos;s transition towards a net-zero economy." />
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
        <div className="w-full flex flex-row-reverse linearbggreen ">
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
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf text-sm '>
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
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='my-10'>
                        <div className='flex justify-center '>
                            <Image src={icon3} className='h-[64px] w-[84px]' />
                            <div>
                                <p className="text-2xl text-semibold mt-2">Why Now ?</p>
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf text-sm '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf text-sm '>
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
        <div className="linearbggreen  flex items-end justify-center my-10 bg-img">
            <div className="flex">
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 max-w-[250px] min-h-[300px] p-4 flex flex-col justify-center items-center">
                    <Image src={tech} alt="" />
                    <p className="text-lg font-[550] mt-8">Learning</p>
                    <p className="text-sm text-center mt-2">Empowering Individuals through Education</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 max-w-[250px] min-h-[300px] p-4 flex flex-col justify-center items-center">
                    <Image src={tech} alt="" />
                    <p className="text-lg font-[550] mt-8">Learning</p>
                    <p className="text-sm text-center mt-2">Empowering Individuals through Education</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 max-w-[250px] min-h-[300px] p-4 flex flex-col justify-center items-center">
                    <Image src={tech} alt="" />
                    <p className="text-lg font-[550] mt-8">Learning</p>
                    <p className="text-sm text-center mt-2">Empowering Individuals through Education</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 max-w-[250px] min-h-[300px] p-4 flex flex-col justify-center items-center">
                    <Image src={tech} alt="" />
                    <p className="text-lg font-[550] mt-8">Learning</p>
                    <p className="text-sm text-center mt-2">Empowering Individuals through Education</p>
                </div>
            </div>
        </div>
    )
}


export default company