import React from 'react'
import aslap from '@/assets/aslap.png'
import asro from '@/assets/asro.png'
import aspen from '@/assets/aspen.png'
import Image from 'next/image'
import arrow from '@/assets/arrow.png'
import earth from '@/assets/earth1.png'
import comma from '@/assets/comma3.png'
import comma2 from '@/assets/comma4.png'
import Link from 'next/link'
const Solutions = () => {
  return (
    <>
      <div className='bs p-8 rounded-lg'>
        <p className="text-white text-4xl text-center font-semibold">Our Solutions</p>
        <div className="flex justify-between items-center mt-16 sm:w-[80%] w-full mx-auto flex-wrap">
          <div className='bg-white mx-2  rounded-[12px] max-w-[300px] mt-10 h-[450px]  '>
            <Image src={aslap} className='relative top-[-80px] w-[250px] mx-auto ' />
            <p className="text-xl text-center text-fblack ">Climate Skilling</p>
            <p className="text-sm text-center px-4 mt-6">At the heart of the academy&apos;s story is the profound understanding that the challenges we face are not insurmountable but require a united effort.</p>
            <p className='text-center  gradienttextbg mt-10'><Link href="/">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
          </div>
          <div className='bg-white mx-2  rounded-[12px] max-w-[300px] mt-10 h-[450px]  '>
            <Image src={aspen} className='relative top-[-80px] w-[144px] mx-auto ' />
            <div className="relative top-[-10px]">
            <p className="text-xl text-center text-fblack ">Climate Skilling</p>
            <p className="text-sm text-center px-4 mt-6">At the heart of the academy&apos;s story is the profound understanding that the challenges we face are not insurmountable but require a united effort.</p>
            <p className='text-center  gradienttextbg mt-10'><Link href="/">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
            </div>
          </div>
          <div className='bg-white mx-2  rounded-[12px] max-w-[300px] mt-10 h-[450px]  '>
            <Image src={asro} className='relative top-[-80px] w-[240px] mx-auto ' />
            <p className="text-xl text-center text-fblack relative">Climate Skilling</p>
            <p className="text-sm text-center px-4 mt-6">At the heart of the academy&apos;s story is the profound understanding that the challenges we face are not insurmountable but require a united effort.</p>
            <p className='text-center  gradienttextbg mt-10'><Link href="/">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
          </div>

        </div>
      </div>
      <div className="linearbggreen  overflow-hidden ">
        <Image src={earth} className='absolute left-[640px] w-[800px] ' />
        <div className='p-6 sm:px-14 px-8 mt-4'>
          <span className="relative sm:left-[25%] left-[-14%]">
            <Image src={comma} className="w-[45px]" />
          </span>
          <p className="text-3xl font-semibold text-green text-center z-[12] sticky tracking-wider ">Building The Net Zero Work force</p>
          <span className="relative sm:left-[70%] left-[100%] ">
            <Image src={comma2} className="w-[45px]" />
          </span>
          <p className='text-4xl leading-[3rem] mt-20 font-semibold text-fblack'><span className='font-extralight'>Take the first step towards a </span><br />
            carbon-neutral world with Zero <br /> Carbon Net.</p>
          <p className='text-fblack text-lg mt-6'>*we will not disseminate your email and so you avoid spam</p>
          <div className="flex flex-col sm:w-[400px] w-full mt-4 mb-10">
            <input type="email" name="" placeholder='Enter your business email' id="" className='bg-grey px-4 py-3 outline-none text-[#5D6180] w-full font-extralight rounded-full ' />
            <button className="bg-green text-center px-4 py-3 text-white w-full rounded-full mt-4">Get Started now</button>
          </div>
        </div>

      </div>
    </>
  )
}


const Cards = ({ image }) => {
  return (
    <div className='bg-white mx-2  rounded-[12px] max-w-[300px] mt-10 h-[450px]  '>
      <Image src={image} className='relative top-[-80px] w-[250px] mx-auto ' />
      <p className="text-xl text-center text-fblack relative">Climate Skilling</p>
      <p className="text-sm text-center px-4 mt-6">At the heart of the academy&apos;s story is the profound understanding that the challenges we face are not insurmountable but require a united effort.</p>
      <p className='text-center  gradienttextbg mt-10'><Link href="/">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
    </div>
  )
}


export default Solutions