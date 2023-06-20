import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, staggerContainer } from '@/utils/motion'
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
import earth from '@/assets/Africa.png'
import earth1 from '@/assets/earth1.png'

import comma1 from '@/assets/comma.png'
import comma from '@/assets/comma2.png'

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
        <div className='bg-img2 sm:max-h-screen flex sm:flex-row flex-col '>
            <Image src={earth} className=' w-[50%] sm:flex hidden'/>
            <div className='sm:px-[100px] p-8 flex  flex-col justify-center '>
            <div className='sm:max-w-[600px] mt-10'>
                <Image src={comma} className=' relative sm:left-[-50px] bottom-[-30px] w-[40px]' />
                <p className="text-3xl text-white sm:text-left text-center">Our Vision</p>
                <p className="text-xl text-white mt-4 sm:text-left text-center">Our vision is to create a world that is sustainable, carbon-neutral, and resilient to the impacts of climate change, by empowering individuals and businesses with the tools and knowledge to transition to a net-zero economy.</p>
                <Image src={comma1} className=' relative sm:right-[-50%] right-[-80%] top-[-20px] w-[40px]' />

            </div>
            <div className=' sm:max-w-[600px] sm:mt-40 mt-10 sm:ml-[150px]'  >
                <Image src={comma} className=' relative sm:left-[-50px] bottom-[-30px] w-[40px]' />
                <p className="text-3xl text-white sm:text-left text-center" >Our Mission</p>
                <p className="text-xl text-white mt-4 sm:text-left text-center">Our mission is to accelerate the transition to a sustainable & net-zero economy by enabling stakeholders to reduce their carbon footprint, embrace sustainable practices, and embrace a more resilient future for our planet and future generations.</p>
                <Image src={comma1} className=' relative right-[-80%] top-[-20px] w-[40px]' />
            </div>
            </div>
        </div>
    )
}
function OurApproach() {
    return (
        <div className="w-full flex flex-wrap  linearbggreen ">           
            <div className="sm:w-[60%]  sm:px-24 flex flex-col justify-center p-6 px-4">
                <ul>
                    
                    <li className='sm:my-10 my-4'>
                        <div className='sm:flex justify-center '>
                            <Image src={icon1} className='h-[84px] w-[84px] sm:flex hidden' />
                            <div className='sm:p-0 p-4'>
                                <div className="flex">
                            <Image src={icon1} className='h-[48px] w-[48px] sm:hidden flex' />

                                <p className="text-2xl text-semibold mt-2">Why Now ?</p>
                                </div>

                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                    They have the power to rapidly reduce emissions, and can mobilise significant resources. They also define the political space for climate policy around the world.
                                </p>
                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                Multiple studies* state that climate change is the highest concern for Millenial and GenZ employees, and they want to contribute to action at work. (Deloitte Global 2021 Survey)
                                </p>
                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                As the world strives to meet the net zero targets outlined in the Paris Agreement, regulation will force corporations to move faster on climate.                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='sm:my-10 my-4'>
                        <div className='sm:flex justify-center '>
                            <Image src={icon2} className='h-[84px] w-[84px] sm:flex hidden' />
                            <div className='sm:p-0 p-4'>
                                <div className="flex">
                            <Image src={icon2} className='h-[48px] w-[48px] sm:hidden flex' />

                                <p className="text-2xl text-semibold mt-2">Why You ?</p>
                                </div>

                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                Utilise your existing professional skills and apply them to your company’s climate transformation – no matter your current job title or position.                                </p>
                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                Harness your passion and dedication to implementing climate solutions – you have the skills, experience, and you’re prepared to act. Give yourself permission to lead change.                                </p>
                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                The world has enough experts. You just need to learn enough to become a translator - the people who can bridge the gap between information and action.                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='sm:my-10 my-4'>
                        <div className='sm:flex justify-center '>
                            <Image src={icon3} className='h-[84px] w-[100px] sm:flex hidden' />
                            <div className='sm:p-0 p-4'>
                                <div className="flex">
                            <Image src={icon3} className='h-[48px] w-[60px] sm:hidden flex' />

                                <p className="text-2xl text-semibold mt-2">Why Us ?</p>
                                </div>

                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                We don’t just teach the what and the why, we show you how to lead change in your company through a unique curriculum that combines technical knowledge with leadership.                                </p>
                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                Our focused commitments give you a blueprint that closes the gap between information and action, so you can be sure you are focusing your efforts on the most impactful goals.                                </p>
                                <p className=' mt-2 text-greyf sm:text-sm text-md '>
                                We’re here for the long haul. Once you’ve joined the WorkforClimate community, you’ll have ongoing access to all of our coaches and community members.                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        <Image src={earth1} className=' sm:w-[40%] h-[40%]  sm:flex hidden ' />

        </div>
    )
}
function CoreValues() {
    return (
        <div className="w-full flex bg-img2 flex-wrap">
            <div className="sm:w-[40%]">
                <Image src={img1} />
            </div>
            <div className="sm:w-[60%] bg-img2 list-values sm:px-24  p-4 py-8 flex flex-col justify-center">
                <p className="text-5xl text-white font-semibold">Our Core Values</p>
                <ul>

                    <li className=''>
                        <p>Sustainability</p>
                        <p>196 countries adopted the historic Paris. Its overall goal: limit warming to no more than 1.5 degrees Celsius.</p>
                    </li>

                    <li className=''>
                        <p>Integrity</p>
                        <p> We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations and interactions</p>
                    </li>
                    <li className=''>
                        <p>Innovation</p>
                        <p>We embrace innovation as a driving force for finding creative and impactful solutions to climate and sustainability challenges.</p>
                    </li>
                    <li className=''>
                        <p>Collaboration</p>
                        <p>We believe in the power of collaboration and partnerships to foster collective action and maximise our impact in creating a sustainable future.</p>
                    </li>
                    <li className=''>
                        <p>Empowerment</p>
                        <p>We empower individuals and organizations with the knowledge, skills, and resources to take meaningful action towards achieving net-zero emissions and sustainability goals.</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}
function Approach() {
    return (
        <div className="linearbggreen sm:h-screen  flex sm:items-end items-center justify-center my-10 bg-img">
            <div className="flex flex-wrap items-center justify-center w-full">
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={learn} alt="" />
                    <p className="text-lg font-[550] mt-8">Learning</p>
                    <p className="text-sm text-center mt-2">Empowering Individuals through Education</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={dia} alt="" />
                    <p className="text-lg font-[550] mt-8">Dialogue</p>
                    <p className="text-sm text-center mt-2">Collaborative Engagement for Change</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={tech} alt="" />
                    <p className="text-lg font-[550] mt-8">Technology</p>
                    <p className="text-sm text-center mt-2">Innovating for a Sustainable Future</p>
                </div>
                <div className="border-green bg-gradientg border-[1px] bg-white rounded-lg mx-10 w-[250px] h-[300px] p-4 flex flex-col justify-center items-center mt-4">
                    <Image src={note} alt="" />
                    <p className="text-lg font-[550] mt-8">Content</p>
                    <p className="text-sm text-center mt-2">Comprehensive and Relevant Knowledge</p>
                </div>
            </div>
        </div>
    )
}


export default company