import Hero from '@/components/Hero'
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
import img3 from '@/assets/media/img1.png'

const greenstore = () => {
    return (
        <div>
            <Navbar />
            <Hero Title={"Our purpose lies in our name"} showQues={true} SuperTitle={"Why Net Zero"} Desc={"NET ZERO: It is a state where we add no incremental greenhouse gases to the atmosphere. <br/> <br/> KARO = TO DO, means to act. It reflects our commitment to action and direction towards achieving carbon neutrality."} />
            <div className='linearbggreen py-20'>
                <div className="text-5xl text-green font-semibold text-center">Who we are ?</div>
            <div className=" rounded-sm grid grid-cols-2 row-span-2 px-20 gap-2 justify-center items-center w-full mt-10">
                <div className="flex w-[500px] bg-white my-4 mx-4 ">
                    <div className='p-4'>
                        <Image src={icon1} />
                        <p className="text-2xl">Passion For the Environment</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                        <p className='mt-2'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                    <Image src={img3} />

                </div>
                <div className="flex w-[500px] bg-white my-4 mx-4 ">
                    <div className='p-4'>
                        <Image src={icon1} />
                        <p className="text-2xl">Passion For the Environment</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                        <p className='mt-2'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                    <Image src={img3} />

                </div> 
                <div className="flex w-[500px] bg-white my-4 mx-4 ">
                    <div className='p-4'>
                        <Image src={icon1} />
                        <p className="text-2xl">Passion For the Environment</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                        <p className='mt-2'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                    <Image src={img3} />

                </div> 
                <div className="flex w-[500px] bg-white my-4 mx-4 ">
                    <div className='p-4'>
                        <Image src={icon1} />
                        <p className="text-2xl">Passion For the Environment</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2'></div>
                        <p className='mt-2'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                    <Image src={img3} />

                </div>
            </div>
            </div>


            <div className="p-10 flex justify-center items-center linearbggreen">
                <div className="sm:w-1/2 p-8">
                    <Image src={img2} />
                </div>
                <div className="sm:w-1/2 px-16 flex">
                    <div className='w-1/2'>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                        <div className='flex items-center my-4'>
                            <Image src={icon} className='w-[70px]' />
                            <p className="ml-4 text-xl">Cement</p>
                        </div>
                    </div>
                </div>

            </div>
            <Form />
            <Footer />
        </div>
    )
}

export default greenstore