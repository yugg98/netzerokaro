import { Footer } from '@/components/Footer'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import React from 'react'
import icon1 from '@/assets/media/icon1.png'
import img3 from '@/assets/media/img1.png'
import Image from 'next/image'
import bulb from '@/assets/icons/bulb.png'
import group from '@/assets/icons/group.png'
import recur from '@/assets/icons/recur.png'
import company from '@/assets/icons/company.png'
import hire from '@/assets/hire.png'
import tick from '@/assets/icons/icon11.png'
import icon from '@/assets/icons/icon12.png'
import Heading from '@/components/Heading'
import one from '@/assets/1.svg'
import two from '@/assets/2.svg'
import three from '@/assets/3.svg'
import four from '@/assets/4.svg'
import five from '@/assets/5.svg'
import six from '@/assets/6.svg'

import heroimg from '@/assets/hero3.svg'
import { slideIn, textVariant } from '@/utils/motion'
import { Parser } from 'html-to-react'
import { motion } from 'framer-motion'


const hackathon = () => {
    return (
        <div>
            <Navbar />
            <Hero Title="Virtual Hackathon Specialists" Desc="Hire, engage and innovate with top diverse talent to accelerate your business roadmap" />
            <div className='linearbggreen sm:py-20 p-4 sm:pt-4'>
                <Heading text="Ignite innovation, collaborate, and elevate your brand through impactful hackathons." />
                <p className=" text-greyf sm:px-[100px] px- text-center mt-3">Innovation Hackathons are extensively used by some of the most innovative organizations across the globe to innovate faster where an idea or a business problem involving niche skill sets is given to the technology professionals and students to solve within 24-48 hours.
                    Over 80% of Fortune 500 companies have hosted or sponsored hackathons to accelerate their innovation processes.
                    Net Zero Karo specializes in conducting personalized innovation hackathons for organizations, thereby enabling them to accelerate their innovation reliably and with agility.</p>
                <div className=" rounded-sm grid sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={bulb} className='h-[80px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Innovation & IP <br /> Development</p>
                            <p className='mt-2 text-[#5D6180]'>Hackathons are an experimental playground for ideation, prototyping and developing new innovations to solve problems.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={company} className='h-[80px]' />
                        <div className=' px-4'>
                            <p className="text-2xl  text-black mt-1">Cultivate Community </p>
                            <p className='mt-2 text-[#5D6180]'>Build a vibrant community by bringing together diverse talent, cutting-edge technologies, and collaborative processes, inspiring out-of-the-box thinking and driving impactful solutions.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={group} className='h-[60px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Branding </p>
                            <p className='mt-2 text-[#5D6180]'> Elevate your company&apos;s brand by associating with hackathons, positioning yourself as an industry expert committed to driving positive social change.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={recur} className='h-[80px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Recruitment</p>
                            <p className='mt-2 text-[#5D6180]'>Discover top talent and assess their capabilities in handling real-world challenges through project-based hackathon challenges, providing valuable insights for recruitment and talent identification.</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="bg-img2 flex flex-wrap sm:p-20 p-4 sm:pb-0 pb-4">
                <div className="sm:w-1/2">
                    <p className="text-5xl text-white">Hire</p>
                    <p className='text-lg text-white font-extralight mt-10 '>Attract and hire diverse, innovative talent with a customizable platform that assesses varied skill sets. Engage a large pool of participants and identify the top performers for your teams.</p>
                    <p className='text-lg text-white font-extralight mt-2 '>Reach out to a large set of participants, assess using a customisable platform and hire the best of the best</p>
                    <div>
                        <div className='flex border-b-[1px] border-b-white mt-10 pb-8'>
                            <Image src={tick} className='w-[28px] h-[28px] mr-3' />
                            <p className="text-lg text-white">Present real-world challenges to assess problem-solving abilities and domain understanding.</p>
                        </div>
                        <div className='flex border-b-[1px] border-b-white mt-10 pb-8'>
                            <Image src={tick} className='w-[28px] h-[28px] mr-3' />
                            <p className="text-lg text-white">Evaluate candidates&apos; business acumen, coding prowess, situational judgment skills, and teamwork capabilities.</p>
                        </div>
                        {/* <div className='flex  mt-10 pb-8'>
                            <Image src={tick} className='w-[28px] h-[28px] mr-3' />
                            <p className="text-lg text-white">Assess situational judgment skills and ability to work in teams</p>
                        </div> */}
                    </div>

                </div>
                <div className="sm:w-1/2  pb-0">
                    <div className='flex justify-end'>
                        <Image src={hire} className='sm:h-[600px] sm:w-[400px] w-full h-full' />
                    </div>
                </div>
            </div>
            <div className="linearbggreen sm:py-20 py-4">
                <p className="sm:text-5xl text-3xl text-green mb-10 text-center mt-4 sm:mt-0">What We Offer ?</p>
                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full md:mt-10 mt-4">
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={one} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Community Hub</p>
                            <p className='mt-2 text-[#5D6180]'>With our dedicated registration platform and cutting-edge technology, we empower organizations to efficiently capture participants&apos; and mentors&apos; skills and roles.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={two} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Workshops & Inductions</p>
                            <p className='mt-2 text-[#5D6180]'>Unlocking potential through structured inductions and workshops for seamless onboarding and up-skilling. With our structured inductions, skill enhancement workshops, and personalized mentor-matching, we foster an environment where mentors and participants can thrive.</p>
                        </div>
                    </div>
                
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={three} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Content Assets & Visual Branding</p>
                            <p className='mt-2 text-[#5D6180]'>Stay informed and engaged with our organization through tailored updates on participant resources, rules, and guidelines. Experience the power of streamlined communication and visually captivating updates.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={four} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Marketing & Schedule</p>
                            <p className='mt-2 text-[#5D6180]'>Elevate your marketing efforts with our comprehensive support in developing impactful campaigns. Take your marketing initiatives to new heights with our expertise and resources.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={five} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Creative Support for Ideation</p>
                            <p className='mt-2 text-[#5D6180]'>Ensure clear and effective communication across all channels with our comprehensive announcement services. Empower your communication efforts and accelerate your innovation journey.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={six} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Evaluation and Insights</p>
                            <p className='mt-2 text-[#5D6180]'>Benefit from our expert judging assistance, comprehensive surveying, and data analysis services to gain a deeper understanding of the value-add in your hackathon.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-green p-10 flex flex-wrap  items-center">
                <div>
                    <p className="md:text-5xl text-3xl md:text-left text-center text-white font-semibold">Let&apos;s innovate together</p>
                    <div className='md:mt-10 mt-4'>
                        <Tick title="Dedicated participant and mentor organisers for all of our sponsorship packages." />
                        <Tick title="Strong linkages with other sponsors and hacker community." />
                        <Tick title="Able to accommodate bespoke features for our enterprise customers." />
                        <Tick title="Understand the balancing objectives and focus between hackers, makers, mentors and sponsors.​" />
                    </div>
                </div>
                <div className='md:mx-0 mx-auto mt-4'>
                    <button className="rounded-full px-8 py-4 text-green bg-white mx-auto">Let&apos;s connect together</button>


                </div>
            </div>
            <Footer />
        </div>
    )
}
const Tick = ({ title }) => {
    return (
        <div className='sm:mt-4  sm:pr-20'>
            <li className='flex  items-start sm:mt-6 mt-4'>
                <Image src={tick} className='min-w-[18px] min-h-[14px] ' />
                <p className='ml-2 sm:text-lg font-extralight text-white border--[0.5px] border-b-white pb-4'>{title}</p>
            </li>
        </div>
    )
}
const Hero = ({ Title, Desc, SuperTitle }) => {
    return (
        <div className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen sm:px-0'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
                <div className='p-2 sm:pl-8 sm:p-4 sm:px-20'>
                    <div className='flex  items-center mx-auto'>
                        <p className="text-green text-2xl  text-center sm:mb-0 mb-2 mr-2">{SuperTitle}</p>
                    </div>
                    <motion.div variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>{Title}</motion.div>

                    <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">{Parser().parse(Desc)}</motion.p>
                    <div className="flex items-center mt-8 sm:justify-start justify-center">
                        <button className="rounded-full bg-green text-white px-12 text-lg py-3">Explore</button>
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end py-20 w-full">
                <Image src={heroimg} className='w-[80%] mx-auto' />
            </div>
        </div>
    )
}
export default hackathon