import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Logo from '@/assets/logo.png'
import smm1 from '@/assets/smm1.png'
import smm2 from '@/assets/smm2.png'
import smm3 from '@/assets/smm3.png'
import smm4 from '@/assets/smm4.png'
import Link from 'next/link'
import anime from 'animejs'
export const Footer = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const elt = slideRef.current.querySelectorAll('.slide-text > *');

    const animation = anime({
      targets: elt,
      translateX: '-100%',
      duration: 4000,
      easing: 'linear',
      loop: true
    });

    return () => {
      // Cleanup the animation when the component is unmounted
      animation.pause();
    };
  }, []);
  return (
    <div className=" sm:p-10 p-4 px-16">
      <div className="border-[1px] border-dashed border-green p-3 my-4 max-h-[100px] overflow-hidden ">
        <div class=" slide-text" ref={slideRef}>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Building The Net Zero Work force </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Building The Net Zero Work force </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Building The Net Zero Work force </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative'>Building The Net Zero Work force </span>
          <span className='text-green border-r-green border-r-2 inline px-6  border-dashed relative '>Building The Net Zero Work force </span>
        </div>
      </div>
      <div className="flex justify-between footer flex-wrap">
        <div className="">
          <Image src={Logo} />
          <p className="text-sm text-greyf my-2">X Y Z  Locality ,<br />
            Bengaluru , 201033 India</p>
          <p className="text-sm text-greyf">copyright @ Netzeroakaro.com</p>
          <p className=" text-lg mt-2 text-green mb-2">Follow us on Social</p>
          <div className="flex w-full justify-between">
            <Image src={smm1} />
            <Image src={smm2} />
            <Image src={smm3} />
            <Image src={smm4} />
          </div>
        </div>
        <div className="sm:mt-0 mt-6">
          <div className="text-sm text-green">Company</div>
          <ul>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>

          </ul>
        </div>
        <div className="sm:mt-0 mt-6">
          <div className="text-sm text-green">Company</div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Features </Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Industries</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="text-sm text-green">Company</div>
          <ul>
            <li>
              <Link href="/">Climate Skilling</Link>
            </li>
            <li>
              <Link href="/">Climate Literacy</Link>
            </li>
            <li>
              <Link href="/">Marketplace </Link>
            </li>
            <li>
              <Link href="/">Corporates</Link>
            </li>
            <li>
              <Link href="/">Education</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
