import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Logo from '@/assets/logo.png'
import smm1 from '@/assets/smm1.svg'
import smm2 from '@/assets/smm2.svg'
import smm3 from '@/assets/smm3.svg'
import Link from 'next/link'
import anime from 'animejs'
import Marquee from "react-fast-marquee";

export const Footer = () => {
  const slideRef = useRef(null);


  return (
    <div className=" sm:p-10 p-4 px-16">
      <div className="border-[1px] border-dashed border-green p-3 my-4 max-h-[100px] overflow-hidden ">

        <Marquee>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Achieve Net Zero by 2070</span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'> Increase non-fossil energy capacity to 500 GW by 2030 </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Reduce carbon intensity of the economy by 45% by 2030 </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Meet 50% of energy requirements from Renewal energy by 2030 </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative '>Reduce total projected carbon emissions by one billion tonnes from now till 2030</span>
        </Marquee>
      </div>
      <div className="flex justify-between footer flex-wrap">
        <div className="">
          <Image src={Logo} />
          <p className="text-sm text-greyf my-2">GURGAON, HARYANA 122018,India</p>
          <p className="text-sm text-greyf">Copyright@netzerokaro.earth</p>
          <p className=" text-lg mt-2 text-green mb-2 sm:text-left text-center">Follow us on Social</p>
          <div className="flex w-full ">
            <Image src={smm1} className='mx-4' />
            <Image src={smm2} className='mx-4' />
            <Image src={smm3} className='mx-4' />
          </div>
        </div>
        <div className="sm:mt-0 mt-6">
          <div className="text-sm text-green">Company</div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About us</Link>
            </li>

          </ul>
        </div>
        <div className="sm:mt-0 mt-6">
          <div className="text-sm text-green">Our Pages</div>
          <ul>
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/company">Company </Link>
            </li>
            <li>
              <Link href="/academy">Academy  </Link>
            </li>
            <li>
              <Link href="/courses">Courses </Link>
            </li>
            <li>
              <Link href="/marketplace"> Marketplace </Link>
            </li>
            <li>
              <Link href="/aboutus"> About us </Link>
            </li>
            <li>
              <Link href="/hackathon"> Hackathon </Link>
            </li>
           
            <li>
              <Link href="/marketplace">  </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="text-sm text-green">Contact us</div>
          <ul>
            <li>
            <a href="mailto:info@netzerokaro.earth">Email us at info@netzerokaro.earth</a>
            </li>
          </ul>
          <ul>
            <li>
            <a href="tel:+919560885856">Call us at +919560885856</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
