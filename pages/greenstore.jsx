import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/img10.png'
import img2 from '@/assets/img11.png'
import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import icon from '@/assets/icons/icon.png'
const greenstore = () => {
  return (
    <div>
        <Navbar/>
        <Hero Title={"Help your organisation get to Net Zero, faster!"}  Desc={"Overall emissions reduction is the most direct way for any organisation to start working in favour of the planet. With our help, you’ll be able to do just that."} />
        <div className="p-10 flex justify-center items-center linearbggreen">
            <div className="sm:w-1/2 px-16">
                <p className="text-5xl text-green mb-2 sm:leading-[60px]">Helping you deliver a  credible net zero  strategy”</p>
                <p className='text-2xl mt-10'>We have the roadmap to your company’s zero-carbon future, and the expertise and platform to get you there.</p>
            </div>
            <div className="sm:w-1/2 p-8">
                <Image src={img1}/>
            </div>
        </div>
        <div className="p-10 flex justify-center items-center linearbggreen">
        <div className="sm:w-1/2 p-8">
                <Image src={img2}/>
            </div>
            <div className="sm:w-1/2 px-16 flex">
              <div className='w-1/2'>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
                <div className='flex items-center my-4'>
                    <Image src={icon} className='w-[70px]'/>
                    <p className="ml-4 text-xl">Cement</p>
                </div>
              </div>
            </div>
           
        </div>
        
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default greenstore