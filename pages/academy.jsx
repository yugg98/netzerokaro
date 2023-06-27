import Navbar from '@/components/Navbar'
import React from 'react'
import laptop from '@/assets/img3.png'
import Image from 'next/image'
import c1 from '@/assets/comma3.png'
import c2 from '@/assets/comma4.png'
import { Footer } from '@/components/Footer'
import icon from '@/assets/icons/icon12.png'
import Heading from '@/components/Heading'
import Nzkacademy from '@/components/Nzkacademy'
import Popup from '@/components/Popup'
import { motion } from 'framer-motion'
import img from '@/assets/g10.png'
import icon1 from '@/assets/bg/icon2.png'
import icon2 from '@/assets/bg/icon4.png'
import icon3 from '@/assets/bg/icon3.png'
import one from '@/assets/1.svg'
import two from '@/assets/2.svg'
import three from '@/assets/3.svg'
import four from '@/assets/4.svg'
import five from '@/assets/5.svg'

import heroimg from '@/assets/hero1.svg'
import { slideIn, textVariant } from '@/utils/motion'
import { Parser } from 'html-to-react'
import Link from 'next/link'

import Head from 'next/head'

const academy = () => {
    return (
        <div>
            <Navbar />
            <Head>
      <title>Net Zero Karo - Academy</title>
      <meta name='viewport' content='This is a net zero website'/>
    </Head>
            <Hero Title="Climate education with a difference." Desc="A platform dedicated to driving India's transition towards a net-zero economy." />
            <div className="w-full flex flex-wrap p-10  pb-10 mt-10">
                <motion.div className="sm:w-1/2 " variants={slideIn('left', 'tween', 0.1, 1)} initial="hidden" whileInView="show">
                    <Image src={laptop} className=' sm:max-w-[400px] mx-auto' />
                </motion.div>
                <div className="sm:w-1/2 sm:px-10 px-2 sm:pt-0">
                    <p className="text-green sm:text-5xl text-3xl font-semibold  text-center sm:text-left  ">Invest in your team’s capacity to respond to our changing world</p>
                    <Image src={c1} className='w-[40px] relative opacity-40 left-[-40px] mt-10' />
                    <p className=' text-xl mt-5 text-[#5D6180]'>We are entering into a values-based, circular and green economy. Companies that upskill their employees with the tools of transformation will be at the forefront of adapting to the changing business landscape.</p>
                    <p className=' text-xl mt-10 text-[#5D6180]'>But, there is a significant sustainability skills gap in most workforces.<span className='font-semibold'> Net Zero Karo </span>is the capacity-building educational platform equipping the global workforce with actionable sustainability skills for this changing business landscape.</p>
                    <Image src={c2} className='w-[40px] opacity-40 relative  mt-5 right-[-90%]' />
                </div>
            </div>

            <Popup />

            <Nzkacademy />

          



            <div className="linearbggreen sm:py-20 sm:pt-4 py-4">
                <Heading text={"Academy USP"} />
                {/* <p className=" mt-2 text-center sm:max-w-[50%] mx-auto mb-10">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p> */}
                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-10 px-4 gap-4 justify-center items-center w-full mt-10">
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon1} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon1} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Comprehensive and Specialized Curriculum</p>
                            </div>
                            <p className='mt-2 text-greyf'>In-depth training on a wide range of topics related to net-zero emissions, climate science, renewable energy, sustainable practices, climate finance, and more</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4    sm:p-6 p-4  rounded-lg">
                        <Image src={icon1} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon1} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Practical and Hands-On Learning:</p>
                            </div>
                            <p className='mt-2 text-greyf'>Offer real-world case studies, simulations, projects, and workshops that allow participants to apply their knowledge and skills in practical settings, enhancing their understanding and competence in climate-related fields.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon2} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon2} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Industry Partnerships and Expert Faculty</p>
                            </div>
                            <p className='mt-2 text-greyf'>The academy collaborates with industry partners, climate experts, and practitioners to deliver high-quality instruction</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon2} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon2} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Customization and Flexibility</p>
                            </div>
                            <p className='mt-2 text-greyf'>4.Platform provides tailored learning paths or modules to cater to the specific needs and interests of participants</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon3} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon3} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Networking and Community Engagement</p>
                            </div>
                            <p className='mt-2 text-greyf'>Platform facilitate networking events, online forums, mentorship programs, or collaborations, creating opportunities for knowledge sharing, collaboration, and career advancement</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon3} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon3} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Focus on Innovation and Emerging Technologies</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="linearbggreen sm:py-20 sm:pt-4 py-4">
                <p className=" mt-2 text-center sm:max-w-[50%] mx-auto mb-10">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={vec1} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={vec1} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={vec2} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={vec2} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={vec3} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={vec3} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={vec4} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={vec4} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                  
                </div>
                
            </div> */}
            <div className="linearbggreen sm:py-20 py-4 sm:pt-4">
                <Heading text={"Who is the climate academy for ? "} />

                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-20 px-4  justify-center  w-full md:mt-10 mt-4">
                <div className='sm:p-4 p-2 flex'>
                        <Image src={one} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Sustainability Managers </p>
                            <p className='mt-2 text-[#5D6180]'>The Net Zero Karo Academy is particularly beneficial for sustainability managers who are responsible for driving sustainability initiatives within their organizations. The academy provides them with the knowledge and skills necessary to develop and implement effective net-zero strategies, measure carbon footprints, and engage stakeholders in sustainability efforts.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={two} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Corporate Executives and Leaders </p>
                            <p className='mt-2 text-[#5D6180]'>Corporate executives and leaders play a crucial role in shaping the sustainability agenda of their organizations. The Net Zero Karo Academy offers valuable insights and guidance to help them understand the business case for net-zero goals, navigate regulatory landscapes, and make informed decisions to transition to a sustainable and low-carbon future.</p>
                        </div>
                    </div>

                    <div className='sm:p-4 p-2 flex'>
                        <Image src={three} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">HR and Learning & Development Professionals </p>
                            <p className='mt-2 text-[#5D6180]'>Stay informed and engaged with our organization through tailored updates on participant resources, rules, and guidelines. Experience the power of streamlined communication and visually captivating updates.</p>
                        </div>
                    </div>
                    <div className='sm:p-4 p-2 flex'>
                        <Image src={four} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Environmental and ESG Specialists </p>
                            <p className='mt-2 text-[#5D6180]'>Environmental and ESG specialists focus on measuring and managing environmental impacts and integrating sustainability practices into organizations. The Net Zero Karo Academy offers them specialized training on climate science, environmental management, sustainable finance, and ESG reporting, enabling them to enhance their expertise and contribute to their organization&apos;s sustainability goals.</p>
                        </div>
                    </div>
                  
                 

                </div>
                <div className='sm:p-4 p-2 flex justify-self-end max-w-[700px] mx-auto'>
                        <Image src={five} className='h-[50px] w-[50px]' />
                        <div className=' px-4'>
                            <p className="text-2xl   text-black mt-1">Entrepreneurs and Innovators </p>
                            <p className='mt-2 text-[#5D6180]'>Entrepreneurs and innovators seeking to develop sustainable business models and products can benefit from the academy&apos;s courses on circular economy, sustainable innovation, and climate entrepreneurship. They can gain insights into market trends, disruptive technologies, and sustainable business practices to drive innovation and create a positive environmental impact.</p>
                        </div>
                    </div>
            </div>
            <div className="bg-[#D7FFE4] flex justify-center items-center flex-col sm:m-10 m-4 rounded-xl sm:p-12 p-8">
                <p className="text-uppercase sm:text-4xl text-3xl text-center font-semibold">Make Contact </p>
                <p className="font-extralight text-center mt-2"> Connect for a free Introduction Call</p>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform" className='bg-green text-white sm:px-20 px-6 py-4 rounded-full mt-6'>Contact us </Link>

                <Image src={img} className='sm:absolute   right-[40px] w-[180px]' />
            </div>
            <Footer />
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
            <Link  className="rounded-full bg-green text-white px-12 text-lg py-3" href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform">Explore</Link>
          </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end py-20 w-full">
                <Image src={heroimg} className='md:w-[75%] mx-auto' />
            </div>
        </div>
    )
}
export default academy