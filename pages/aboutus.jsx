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
import icon from '@/assets/icons/icon.svg'
import icon1 from '@/assets/media/icon1.png'
import icon2 from '@/assets/media/icon5.png'
import icon3 from '@/assets/media/icon6.png'
import icon4 from '@/assets/media/icon7.png'

import finan from '@/assets/icons/finan.svg'
import auto from '@/assets/icons/auto.svg'
import avi from '@/assets/icons/avi.svg'
import fmcg from '@/assets/icons/fmcg.svg'
import manu from '@/assets/icons/manu.svg'
import ecom from '@/assets/icons/ecom.svg'
import it from '@/assets/icons/it.svg'
import edu from '@/assets/icons/edu.svg'
import pharma from '@/assets/icons/pharma.svg'
import Head from 'next/head'

import img3 from '@/assets/media/img1.png'

import CallToAction from '@/components/CallToAction'
import Heading from '@/components/Heading'
import base1 from '@/assets/faces/img.png'
import Link from 'next/link'
import linkedin from '@/assets/faces/icon.svg'
import zero from '@/assets/zero.png'
import { Parser } from 'html-to-react'


import p1 from '@/assets/p1.png'
import p2 from '@/assets/p2.png'
import p4 from '@/assets/p4.png'
import p3 from '@/assets/p3.png'

const aboutus = () => {
    return (
        <div>
            <Navbar />
            <Head>
                <title>Net Zero Karo - Abouts</title>
            </Head>
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
                <p className=" text-greyf sm:px-[100px] px- text-center mt-3">  These are some of the values and expertise that define us</p>
                <div className=" rounded-sm grid sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full md:mt-20 mt-10">
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={icon1} className='h-[80px] md:flex hidden' />
                        <div className=' px-4'>
                            <div className='md:block flex justify-center items-center '>
                                <Image src={icon1} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">Passion for the environment</p>
                            </div>

                            <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex '>
                        <Image src={icon2} className='h-[80px] md:flex hidden' />
                        <div className=' px-4'>
                            <div className='md:block  flex justify-center items-center'>
                                <Image src={icon2} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">Extensive expertise</p>
                            </div>
                            <p className='mt-2 text-[#5D6180]'>Our knowledge spans the complex field of sustainability. Our teams include data analysts, strategy experts, energy management experts, compliance wizards and project developers out in the field.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={icon3} className='h-[80px] md:flex  hidden' />
                        <div className=' px-4'>
                            <div className='md:block flex justify-center items-center '>
                                <Image src={icon3} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">A unique culture experience</p>
                            </div>
                            <p className='mt-2 text-[#5D6180]'> At NetZeroKaro we believe environment and employee well-being are key to sustainability. We deal with serious challenges in our day to day work life but it doesn’t stop us having fun.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex '>
                        <Image src={icon4} className='h-[80px] md:flex hidden' />
                        <div className=' px-4'>
                            <div className='md:block flex justify-center items-center'>
                                <Image src={icon4} className='md:hidden flex h-[60px] w-[60px] mr-2' />
                                <p className="text-2xl   text-black mt-1">A global community</p>
                            </div>
                            <p className='mt-2 text-[#5D6180]'>NetZeroKaro has grown out of our successful global partnerships. For us collaboration is the key to success in tackling climate change and other environmental challenges. This is what we excel at.</p>
                        </div>
                    </div>


                </div>
            </div>
            <div>
                <Heading text="Industries we work with" />

                <div className="sm:p-4 p-2 flex flex-wrap justify-center items-center linearbggreen">

                    <div className="sm:w-1/2 p-8">
                        <Image src={img2} />
                    </div>
                    <div className="sm:w-1/2 sm:px-16 px-2 flex">
                        <div className='sm:w-1/2 '>
                            <div className='flex items-center my-4 '>
                                <Image src={icon} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Cement</p>
                            </div>
                            <div className='flex items-center my-4 '>
                                <Image src={finan} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Financial </p>
                            </div>
                            <div className='flex items-center my-4 '>
                                <Image src={auto} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Automobile</p>
                            </div>
                            <div className='flex items-center my-4 '>
                                <Image src={edu} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Education</p>
                            </div>
                            <div className='flex items-center my-4 '>
                                <Image src={pharma} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Pharma</p>
                            </div>
                        </div>
                        <div className='sm:w-1/2'>
                            <div className='flex items-center my-4  ml-10'>
                                <Image src={avi} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Aviation</p>
                            </div>
                            <div className='flex items-center my-4 ml-10'>
                                <Image src={fmcg} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">FMCG</p>
                            </div>
                            <div className='flex items-center my-4 ml-10'>
                                <Image src={manu} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Manufacturing</p>
                            </div>
                            <div className='flex items-center my-4 ml-10'>
                                <Image src={ecom} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">Ecommerce</p>
                            </div>
                            <div className='flex items-center my-4 ml-10'>
                                <Image src={it} className='md:w-[50px] w-[35px]' />
                                <p className="ml-4 md:text-xl text-md">I.T</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='linearbggreen p-4'>
                <Heading text="Leadership Team" />
                <div className="flex justify-between flex-wrap sm:mt-20 mt-10 sm:px-10 ">
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[700px]">
                            <Image src={p1} className='mx-auto ' />
                            <div className="flex justify-between px-4 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sunil Batra</p>
                                    <p className="text-green font-semibold">Founder, <span className='font-semibold'> Net Zero Karo</span><br /> Ex-Samsung / Ex-Bharti Group </p>
                                    <p className="text-greyf mb-4 mt-2">Results-driven professional with over 20 years of experience in corporate roles, including successful entrepreneurship.</p>
                                    <Link href={'https://www.linkedin.com/in/sunilbatra81/'}>
                                        <Image src={linkedin} className='' />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[700px]">
                            <Image src={p2} className='mx-auto' />
                            <div className="flex justify-between px-4 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Sonia Batra</p>
                                    <p className="text-green font-semibold">Co-Founder, <span className='font-semibold'> Net Zero Karo</span><br /> Psychologist & Mental Health Professional</p>
                                    <p className="text-greyf mb-4 mt-2">Sensitive and motivated professional with 15+ yrs of extensive experience in psychology assistance.</p>
                                    <Link href={'https://www.linkedin.com/in/sonia-batra-a98b8b11/'}>
                                        <Image src={linkedin} className='' />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[700px]">
                            <Image src={p4} className='mx-auto' />
                            <div className="flex justify-between px-4 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Raghav Kumar Sharma</p>
                                    <p className="text-green font-semibold">Strategic Advisor,<span className=''> Net Zero Karo</span><br /> Angel Investor & Entrepreneur</p>
                                    <p className="text-greyf mb-4 mt-2">A serial entrepreneur & Next-Gen business professional with 15+ years of developing business strategies, hatching new business models, and building out business processes.</p>
                                    <Link href={'https://www.linkedin.com/in/raghavsharmanift/'}>
                                        <Image src={linkedin} />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[320px]  items-center md:mb-0 mb-4">
                        <div className=" rounded-lg  overflow-hidden h-[700px]">
                            <Image src={p3} className='mx-auto' />
                            <div className="flex justify-between px-4 py-5">
                                <div >
                                    <p className="font-semibold text-lg ">Manpreet Sethi</p>
                                    <p className="text-green font-semibold">Marketing and Sustainability Strategist, Ex-Jaguar</p>
                                    <p className="text-greyf mb-4 mt-2">A passionate entrepreneur with 15 Years of rich experience in driving innovative and sustainable strategies. Skilled in forming partnerships and alliances across industries and verticals.</p>
                                    <Link href={'https://www.linkedin.com/in/manpreetsethi1/'}>
                                        <Image src={linkedin} />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='linearbggreen p-4'>
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
            </div> */}
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
                        <Link className="rounded-full bg-green text-white px-12 text-lg py-3" href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform">Explore</Link>
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end w-full  ">
                <Image src={zero} className='px-6 pr-0 mx-auto my-4 w-[75%]' />
            </div>
        </div>
    )
}

export default aboutus