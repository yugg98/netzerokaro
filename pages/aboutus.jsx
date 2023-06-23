import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/zero.png'
import img2 from '@/assets/img11.png'
import { motion } from 'framer-motion'
import heroimg from '@/assets/heroimg.png'
import { slideIn, textVariant } from '@/utils/motion'
import o1 from '@/assets/o1.png'
import o2 from '@/assets/o2.png'
import Form from '@/components/Form'
import { Footer } from '@/components/Footer'
import icon from '@/assets/icons/icon.png'
import icon1 from '@/assets/media/icon1.png'
import icon2 from '@/assets/media/icon5.png'
import icon3 from '@/assets/media/icon6.png'
import icon4 from '@/assets/media/icon7.png'

import finan from '@/assets/icons/finan.png'
import auto from '@/assets/icons/auto.png'
import avi from '@/assets/icons/avi.png'
import fmcg from '@/assets/icons/fmcg.png'
import manu from '@/assets/icons/manu.png'
import ecom from '@/assets/icons/ecom.png'
import img3 from '@/assets/media/img1.png'
import CallToAction from '@/components/CallToAction'
import Heading from '@/components/Heading'
import base1 from '@/assets/faces/img.png'
import Link from 'next/link'
import linkedin from '@/assets/faces/icon.svg'
import zero from '@/assets/zero.png'
import { Parser } from 'html-to-react'

const aboutus = () => {
    return (
        <div>
            <Navbar />
            <Hero Title={"Our purpose lies in our name"} Desc={"NET ZERO: It is a state where we add no incremental greenhouse gases to the atmosphere. <br/> <br/> KARO = TO DO, means to act. It reflects our commitment to action and direction towards achieving carbon neutrality."} />
            {/* <div className='linearbggreen py-20'>
                <div className="text-5xl text-green font-semibold text-center"></div>
                <div className=" rounded-sm grid sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className="flex sm:w-[500px] w-full bg-white my-4 sm:mx-4 ">
                        <div className='p-4'>
                            <Image src={icon1} />
                            <p className="text-2xl">Passion For the Environment</p>
                            <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                            <p className='mt-2 sm:text-md text-sm'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                        <Image src={img3} />

                    </div>
                    <div className="flex sm:w-[500px] w-full bg-white my-4 sm:mx-4 ">
                        <div className='p-4'>
                            <Image src={icon1} />
                            <p className="text-2xl">Passion For the Environment</p>
                            <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                            <p className='mt-2 sm:text-md text-sm'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                        <Image src={img3} />

                    </div>
                    <div className="flex sm:w-[500px] w-full bg-white my-4 sm:mx-4 ">
                        <div className='p-4'>
                            <Image src={icon1} />
                            <p className="text-2xl">Passion For the Environment</p>
                            <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                            <p className='mt-2 sm:text-md text-sm'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                        <Image src={img3} />

                    </div>
                    <div className="flex sm:w-[500px] w-full bg-white my-4 sm:mx-4 ">
                        <div className='p-4'>
                            <Image src={icon1} />
                            <p className="text-2xl">Passion For the Environment</p>
                            <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                            <p className='mt-2 sm:text-md text-sm'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                        <Image src={img3} />

                    </div>
                </div>
            </div> */}

            <div className='linearbggreen sm:py-20  sm:pt-4'>
                <Heading text="Who we are ?" />
                <p className=" text-greyf sm:px-[100px] px- text-center mt-3">Innovation Hackathons are extensively used by some of the most innovative organizations across the globe to innovate faster where an idea or a business problem involving niche skill sets is given to the technology professionals and students to solve within 24-48 hours.
                    Over 80% of Fortune 500 companies have hosted or sponsored hackathons to accelerate their innovation processes.
                    Net Zero Karo specializes in conducting personalized innovation hackathons for organizations, thereby enabling them to accelerate their innovation reliably and with agility.</p>
                <div className=" rounded-sm grid sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={icon1} className='h-[80px] md:flex hidden' />
                        <div className=' px-4'>
                            <div className='flex justify-center items-center '>
                                <Image src={icon1} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">Passion for the environment</p>
                            </div>

                            <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex '>
                    <Image src={icon2} className='h-[80px] md:flex hidden' />
                        <div className=' px-4'>
                            <div className='flex justify-center items-center'>
                                <Image src={icon2} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">Extensive expertise</p>
                            </div>
                            <p className='mt-2 text-[#5D6180]'>Our knowledge spans the complex field of sustainability. Our teams include data analysts, strategy experts, energy management experts, compliance wizards and project developers out in the field.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                    <Image src={icon3} className='h-[80px] md:flex  hidden' />
                        <div className=' px-4'>
                            <div className='flex justify-center items-center '>
                                <Image src={icon3} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">A unique culture experience</p>
                            </div>
                            <p className='mt-2 text-[#5D6180]'> At NetZeroKaro we believe environment and employee well-being are key to sustainability. We deal with serious challenges in our day to day work life but it doesn’t stop us having fun.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex '>
                    <Image src={icon4} className='h-[80px] md:flex hidden' />
                        <div className=' px-4'>
                            <div className='flex justify-center items-center'>
                                <Image src={icon4} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">A global community</p>
                            </div>
                            <p className='mt-2 text-[#5D6180]'>NetZeroKaro has grown out of our successful global partnerships. For us collaboration is the key to success in tackling climate change and other environmental challenges. This is what we excel at.</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="sm:p-10 p-2 flex flex-wrap justify-center items-center linearbggreen">
                <div className="sm:w-1/2 p-8">
                    <Image src={img2} />
                </div>
                <div className="sm:w-1/2 sm:px-16 px-2 flex">
                    <div className='sm:w-1/2 '>
                        <div className='flex items-center my-4 '>
                            <Image src={icon} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Cement</p>
                        </div>
                        <div className='flex items-center my-4 '>
                            <Image src={finan} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Financial </p>
                        </div>
                        <div className='flex items-center my-4 '>
                            <Image src={auto} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Automobile</p>
                        </div>
                        <div className='flex items-center my-4 '>
                            <Image src={icon} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Education</p>
                        </div>
                        <div className='flex items-center my-4 '>
                            <Image src={icon} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Pharma</p>
                        </div>
                    </div>
                    <div className='sm:w-1/2'>
                        <div className='flex items-center my-4  ml-10'>
                            <Image src={avi} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Aviation</p>
                        </div>
                        <div className='flex items-center my-4 ml-10'>
                            <Image src={fmcg} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">FMCG</p>
                        </div>
                        <div className='flex items-center my-4 ml-10'>
                            <Image src={manu} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Manufacturing</p>
                        </div>
                        <div className='flex items-center my-4 ml-10'>
                            <Image src={ecom} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">Ecommerce</p>
                        </div>
                        <div className='flex items-center my-4 ml-10'>
                            <Image src={ecom} className='md:w-[70px] w-[45px]' />
                            <p className="ml-4 md:text-xl text-md">I.T</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='linearbggreen p-4'>
                <Heading text="Leadership Team" />
                <div className="flex justify-between flex-wrap sm:mt-20 mt-10 sm:px-10 ">
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sonia Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='linearbggreen p-4'>
                <Heading text="Board Advisiors" />
                <div className="flex justify-between flex-wrap sm:mt-20 mt-10 sm:px-10 ">
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[580px]">
                            <Image src={base1} className='mx-auto' />
                            <div className="flex justify-between px-8 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green">Founder</p>
                                    <p className="text-greyf mb-4 mt-2">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                                    <Image src={linkedin} />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <CallToAction />
            <Footer />
        </div>
    )
}
const Hero = ({ Title, Desc, CalltoAction, SuperTitle, showQues }) => {
    return (
        <div className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen sm:px-20'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
                <div className='p-2 sm:pl-8 sm:p-4 sm:px-20'>


                    <motion.div variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>{Title}</motion.div>

                    <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">{Parser().parse(Desc)}</motion.p>
                    <div className="flex items-center mt-8 sm:justify-start justify-center">
                        <button className="rounded-full bg-green text-white px-12 text-lg py-3">Explore</button>
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end ">

                <Image src={zero} width={500} height={64} className='px-6 pr-0 md:mx-auto mr-5 my-4' />
            </div>
        </div>
    )
}

export default aboutus