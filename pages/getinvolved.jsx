import { Footer } from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import icon1 from '@/assets/media/icon1.png'
import img3 from '@/assets/media/img1.png'
import Image from 'next/image'
import bulb from '@/assets/bulb.png'
const getinvolved = () => {
    return (
        <div>
            <Navbar />
            <Hero SuperTitle="Net Zero Karo Hackathon " Title="Virtual Hackathon Specialists" Desc="Hire, engage and innovate with top diverse talent to accelerate your business roadmap" />
            <div className='linearbggreen py-20 '>
                <div className="text-5xl text-green font-semibold text-center leading-[60px]">Connecting brands and talent through <br /> innovation</div>
                <p className="text-lg text-greyf px-[100px] text-center mt-3">Our knowledge spans the complex field of sustainability. Our teams include data analysts, strategy experts, energy management experts, compliance wizards and project developers out in the field.</p>
                <div className=" rounded-sm grid grid-cols-2 row-span-2 px-20 gap-2 justify-center items-center w-full mt-10">
                    <div className=" w-[500px] my-4 mx-4 ">
                        <div className='p-4 flex'>
                            <Image src={bulb} className='h-[80px]'/>
                            <div className=' px-4'>
                            <p className="text-2xl text-green mt-1">Innovation & IP <br/> Development</p>
                            <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>

                    </div>
                    <div className=" w-[500px] my-4 mx-4 ">
                        <div className='p-4 flex'>
                            <Image src={bulb} className='h-[80px]'/>
                            <div className=' px-4'>
                            <p className="text-2xl text-green mt-1">Innovation & IP <br/> Development</p>
                            <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>

                    </div>
                    <div className=" w-[500px] my-4 mx-4 ">
                        <div className='p-4 flex'>
                            <Image src={bulb} className='h-[80px]'/>
                            <div className=' px-4'>
                            <p className="text-2xl text-green mt-1">Innovation & IP <br/> Development</p>
                            <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>

                    </div>
                    <div className=" w-[500px] my-4 mx-4 ">
                        <div className='p-4 flex'>
                            <Image src={bulb} className='h-[80px]'/>
                            <div className=' px-4'>
                            <p className="text-2xl text-green mt-1">Innovation & IP <br/> Development</p>
                            <p className='mt-2 text-[#5D6180]'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                            </div>
                        </div>

                    </div>
                  
                </div>
            </div>
            <Form />
            <Footer />
        </div>
    )
}

export default getinvolved