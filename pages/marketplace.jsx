import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import dashboardimg from '@/assets/img8.png'
import women from '@/assets/img9.png'
import icon1 from '@/assets/icon8.png'
import Form from '@/components/Form'
import Accordian from '@/components/Accordian'
import Courses from '@/components/Courses'
function marketplace() {
    return (
        <div>
            <Navbar />
            <Hero Title="Acquire, Develop and Retain Sustainability" Desc="a platform dedicated to driving India's transition towards a net-zero economy." />
            <div className='p-20 sm:px-[120px] px-4 linearbggreen pb-0'>
                <p className="sm:text-5xl text-3xl text-center text-green font-semibold sm:leading-[60px]">Discover the versatility of our
                    Net Zero Karo Academy</p>
                <p className="text-center mt-4">Sustainability, Climate Literacy and Circular Economy are among the most important future fields of our time. They form the basis for the innovative strength and competitiveness of the economy and for the work of tomorrow</p>
                <div className="mx-auto sm:mt-0 mt-4">
                    <Image src={dashboardimg} className='relative' />
                </div>
            </div>
            <div className='bs flex flex-wrap '>
                <Image src={women} className='max-h-[80%] ' />
                <div className='sm:w-1/2 w-full py-10 sm:px-0 px-10'>
                    <div className="bg-white p-8 rounded-lg my-4">
                        <Image src={icon1} />
                        <p className='text-lg mt-2 font-semibold'>Upskilling & reskilling</p>
                        <p className='mt-2'>in the future fields of Sustainability, Climate Literacy and Circular Economy.
                            e-mobility and green digitization next.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg my-4">
                        <Image src={icon1} />
                        <p className='text-lg mt-2 font-semibold'>Upskilling & reskilling</p>
                        <p className='mt-2'>in the future fields of Sustainability, Climate Literacy and Circular Economy.
                            e-mobility and green digitization next.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg my-4">
                        <Image src={icon1} />
                        <p className='text-lg mt-2 font-semibold'>Upskilling & reskilling</p>
                        <p className='mt-2'>in the future fields of Sustainability, Climate Literacy and Circular Economy.
                            e-mobility and green digitization next.</p>
                    </div>
                </div>
            </div>
            <Courses/>
            <div className='sm:p-20 bs'>
                <p className="text-5xl text-center font-semibold text-white">Net Zero Karo at Glance</p>
                <div className=" grid sm:grid-cols-3	row-span-3 p-10 gap-6 justify-center items-center w-full mt-10">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>

            <div className="flex flex-wrap sm:p-20 p-4 linearbggreen">
                <div className="sm:w-1/2 sm:px-[100px]">
                    <p className="text-lg text-green sm:text-left text-center">FAQ’S</p>
                    <p className="sm:text-5xl text-3xl text-black sm:leading-[60px] sm:text-left text-center">What our Students 
                        <span className='font-semibold'> Frequently Asked</span>  Us  ?</p>
                      <p className="text-l sm:mt-0 mt-3">Your questions answered on our approach, our team, our values, our process, costs, timeline and more.</p>
                </div>
                <div className="sm:w-1/2">
                    <Accordian/>
                </div>

            </div>
            <Form />
            <Footer />
        </div>
    )
}
const Cards = () => {
    return (
        <div className='bg-white rounded-lg flex justify-center items-center flex-col p-8 w-[350px] h-[250px] mx-auto'>
            <p className="text-green text-3xl font-semibold">120+</p>
            <p className="text-black text-center mt-4">Corporate Customers from industry and business</p>
        </div>
    )
}
export default marketplace