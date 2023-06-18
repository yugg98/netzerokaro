import { Footer } from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import icon1 from '@/assets/media/icon1.png'
import img3 from '@/assets/media/img1.png'
import Image from 'next/image'
import bulb from '@/assets/bulb.png'
import hire from '@/assets/hire.png'
import tick from '@/assets/icons/icon11.png'
import icon from '@/assets/icons/icon12.png'
const getinvolved = () => {
    return (
        <div>
            <Navbar />
            <Hero SuperTitle="Net Zero Karo Hackathon " Title="Virtual Hackathon Specialists" Desc="Hire, engage and innovate with top diverse talent to accelerate your business roadmap" />
            <div className='linearbggreen sm:py-20 p-4 '>
                <div className="sm:text-5xl text-3xl text-green font-semibold text-center sm:leading-[60px]">Connecting brands and talent through <br /> innovation</div>
                <p className="text-lg text-greyf sm:px-[100px] px- text-center mt-3">Our knowledge spans the complex field of sustainability. Our teams include data analysts, strategy experts, energy management experts, compliance wizards and project developers out in the field.</p>
                <div className=" rounded-sm grid sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                        <div className='sm:p-4 p-2 flex'>
                            <Image src={bulb} className='h-[80px]' />
                            <div className=' px-4'>
                                <p className="text-2xl  text-green mt-1">Innovation & IP <br /> Development</p>
                                <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>
                        <div className='sm:p-4 p-2 flex'>
                            <Image src={bulb} className='h-[80px]' />
                            <div className=' px-4'>
                                <p className="text-2xl  text-green mt-1">Innovation & IP <br /> Development</p>
                                <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>
                        <div className='sm:p-4 p-2 flex'>
                            <Image src={bulb} className='h-[80px]' />
                            <div className=' px-4'>
                                <p className="text-2xl  text-green mt-1">Innovation & IP <br /> Development</p>
                                <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>
                        <div className='sm:p-4 p-2 flex'>
                            <Image src={bulb} className='h-[80px]' />
                            <div className=' px-4'>
                                <p className="text-2xl  text-green mt-1">Innovation & IP <br /> Development</p>
                                <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>
                        <div className='sm:p-4 p-2 flex'>
                            <Image src={bulb} className='h-[80px]' />
                            <div className=' px-4'>
                                <p className="text-2xl  text-green mt-1">Innovation & IP <br /> Development</p>
                                <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                    </div>
                  

                </div>
            </div>
            <div className="bs flex flex-wrap sm:p-20 p-4 pb-0">
                <div className="sm:w-1/2">
                    <p className="text-5xl text-white">Hire</p>
                    <p className='text-lg text-white font-extralight mt-10 '>Diverse, innovative talent for your teams by assessing them for varied skill-set</p>
                    <p className='text-lg text-white font-extralight mt-2 '>Reach out to a large set of participants, assess using a customisable platform and hire the best of the best</p>
                    <div>
                        <div className='flex border-b-[1px] border-b-white mt-10 pb-8'>
                            <Image src={tick} className='w-[28px] h-[28px] mr-3' />
                            <p className="text-lg text-white">Challenge the participants with problems that they would tackle on the job</p>
                        </div>
                        <div className='flex border-b-[1px] border-b-white mt-10 pb-8'>
                            <Image src={tick} className='w-[28px] h-[28px] mr-3' />
                            <p className="text-lg text-white">Challenge the participants with problems that they would tackle on the job</p>
                        </div>
                        <div className='flex  mt-10 pb-8'>
                            <Image src={tick} className='w-[28px] h-[28px] mr-3' />
                            <p className="text-lg text-white">Challenge the participants with problems that they would tackle on the job</p>
                        </div>
                    </div>

                </div>
                <div className="sm:w-1/2 p-4 pb-0">
                    <div className='flex justify-end'>
                        <Image src={hire} className='sm:h-[600px] sm:w-[400px] w-full h-full' />
                    </div>
                </div>
            </div>
            <div className="linearbggreen sm:py-20 py-4">
                <p className="sm:text-5xl text-3xl text-green mb-10 text-center mt-4 sm:mt-0">What We Offer ?</p>
                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className=" sm:w-[600px] w-full my-4 sm:mx-4 bg-white sm:p-6 p-4 border-[1px] border-[#BBE7CA] rounded-lg">
                            <div className=' px-4 flex ' >
                                <Image src={icon} className='h-[50px] w-[50px]' />
                                <p className="text-2xl  mt-1 ml-5">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                    <div className=" sm:w-[600px] w-full my-4 sm:mx-4 bg-white sm:p-6 p-4 border-[1px] border-[#BBE7CA] rounded-lg">
                            <div className=' px-4 flex ' >
                                <Image src={icon} className='h-[50px] w-[50px]' />
                                <p className="text-2xl  mt-1 ml-5">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                  
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default getinvolved