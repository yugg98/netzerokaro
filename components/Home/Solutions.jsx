import React from 'react'
import base1 from '@/assets/Base.png'
import base2 from '@/assets/Base1.png'
import base3 from '@/assets/Base2.png'
import Image from 'next/image'
import arrow from '@/assets/arrow.png'
import earth from '@/assets/earth1.png'
import comma from '@/assets/comma3.png'
import comma2 from '@/assets/comma4.png'
import Link from 'next/link'
import Heading from '../Heading'
const Solutions = () => {
  return (
    <>
      <div className='bg-img2 mt-0 md:p-6 p-4 rounded-lg '>
        <Heading text="Our Solutions" color={true}/>
        <div className="flex justify-between flex-wrap sm:mt-20 mt-10 sm:px-10 ">
          <div className="flex flex-row justify-center max-w-[380px]  items-center md:mb-0 mb-4">
            <div className="bg-white rounded-lg  overflow-hidden h-[530px]">
              <Image src={base1} className='' />
              <div className="flex justify-between px-8 py-5">
                <div >
                  <p className="font-semibold text-lg ">Climate Skilling</p>
                  <p className="text-greyf mb-4 mt-2">Acquire the essential skills and expertise needed to tackle climate challenges head-on, with our range of immersive and practical learning opportunities designed to empower you to make a positive impact in the fight against climate change.</p>
                  <p className='relative b-2  gradienttextbg mt-4'><Link href="/academy">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center max-w-[380px]  items-center md:mb-0 mb-4 ">
            <div className="bg-white rounded-lg  overflow-hidden h-[530px]">
              <Image src={base2} className='' />
              <div className="flex justify-between sm:px-8 px-6 py-5">
                <div >
                  <p className="font-semibold text-lg ">Climate Literacy</p>
                  <p className="text-greyf mb-4 mt-2">Elevate your climate IQ with our comprehensive resources, empowering you to understand and communicate the science, impacts, and solutions of climate change effectively.</p>
                  <p className='relative bottom-[-19px]  gradienttextbg mt-4'><Link href="/academy">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center max-w-[380px]  items-center md:mb-0 mb-4">
            <div className="bg-white rounded-lg  overflow-hidden h-[530px] ">
              <Image src={base3} className='' />
              <div className="flex justify-between px-8 py-5">
                <div >
                  <p className="font-semibold text-lg "> Market Place</p>
                  <p className="text-greyf mb-4 mt-2">Elevate your climate IQ with our comprehensive resources, empowering you to understand and communicate the science, impacts, and solutions of climate change effectively.</p>
                  <p className=' relative bottom-[-19px] gradienttextbg mt-4'><Link href="/marketplace">Explore More <span><Image src={arrow} className='inline max-w-[50px]' /></span></Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="linearbggreen  overflow-hidden ">
        <Image src={earth} className='sm:flex absolute hidden  right-[0%] w-[450px] ' />
        <div className='p-6 sm:px-14 px-8 mt-4'>
          {/* <span className="relative md:left-[10%] left-[-5%]">
            <Image src={comma} className="md:w-[45px] w-[30px]" />
          </span> */}
          <p className="sm:text-5xl text-3xl font-semibold text-green text-center z-[12] sticky  ">Building The Net Zero Work force</p>
          {/* <span className="relative md:left-[85%] left-[90%] ">
            <Image src={comma2} className="md:w-[45px] w-[35px]" />
          </span> */}
          <p className='text-4xl leading-[3rem] mt-20 font-semibold text-fblack'><span className='font-extralight'>Take the first step towards a </span><br />
          climate awareness with Net Zero Karo!</p>
          <div className="flex flex-col sm:w-[400px] w-full mt-4 mb-10">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform" className="bg-green text-center px-4 py-3 text-white w-full rounded-full mt-4">Get&nbsp;Started&nbsp;now</Link>
          </div>
        </div>

      </div>
    </>
  )
}





export default Solutions