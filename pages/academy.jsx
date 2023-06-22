import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import laptop from '@/assets/img3.png'
import Image from 'next/image'
import c1 from '@/assets/comma3.png'
import c2 from '@/assets/comma4.png'
import img4 from '@/assets/img7.png'
import plus from '@/assets/plus.png'
import img2 from '@/assets/img5.png'
import img3 from '@/assets/img6.png'
import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import windmill from '@/assets/media/img2.png'
import book from '@/assets/icon4.png'
import script from '@/assets/script.png'
import img1 from '@/assets/img4.png'
import feature from '@/assets/icon5.png'
import icon from '@/assets/icons/icon12.png'
import Heading from '@/components/Heading'
import Nzkacademy from '@/components/Nzkacademy'
import Popup from '@/components/Popup'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import img from '@/assets/g10.png'



const academy = () => {
    return (
        <div>
            <Navbar />
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


            <Nzkacademy />

            {/* <div className="bg-img2 sm:p-10 p-4 flex flex-wrap">
                <div className="flex flex-col  sm:px-20 sm:my-10 md:w-[60%]">
                    <div className="bg-white md:p-10 p-6 rounded-lg md:w-[600px] w-full">
                        <Image src={book} className='w-[60px] ' />
                        <p className='text-lg mt-4 '>Learning format</p>
                        <ul className='card-list'>
                            <p className="text-sm text-greyf">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                        </ul>
                    </div>
                    <div className="bg-white md:p-10 p-6 rounded-lg mt-4 sm:w-[600px] w-full">
                        <Image src={script} className='w-[60px]' />
                        <p className='text-lg mt-4 '>Learning format</p>
                        <ul className='card-list'>
                            <li>Voiceovers and closed captions</li>
                            <li>Scientifically validated resource links for further research</li>
                            <li>Self-paced online learning</li>
                            <li>Engaging & interactive graphics</li>
                            <li>80+ Interactive quizzes</li>
                        </ul>
                    </div>
                </div>
                <Image src={windmill} className='md:h-[500px] md:w-[40%] md:my-auto mx-auto sm:my-0 my-6' />
            </div> */}


            <Popup />
            <div className="linearbggreen mt-0 md:p-6 rounded-lg ">
                <Heading text="Who is the academy for?" />
                <div className="flex justify-between flex-wrap  mt-8 overflow-hidden md:px-10 px-4">
                    <div className="flex flex-row justify-center max-w-[380px] items-center">
                        <div className="bg-white rounded-xl ">
                            <Image src={img1} className='' />
                            <div className="flex justify-between mt-2 p-6 pb-0">
                                <div >
                                    <p className="font-semibold text-lg">Sustainability</p>
                                </div>
                                <div className='bg-green rounded-full p-2 '>
                                    <Image src={plus} className='w-[28px]' />
                                </div>
                            </div>
                            <div className='p-6 pt-1'>
                                <p className="text-[#08103A] mb-4">Sustainability terminology, how to take accountability and maintain integrity in business, and application to sustainability in the business context</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bs sm:py-20 sm:pt-4 py-4">
                <Heading text={"Academy USP  "} color={true} />
                <p className="text-white mt-2 text-center sm:max-w-[50%] mx-auto mb-10">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
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
                    <div className=" sm:w-[600px] w-full my-4 sm:mx-4 bg-white sm:p-6 p-4 border-[1px] border-[#BBE7CA] rounded-lg">
                        <div className=' px-4 flex ' >
                            <Image src={icon} className='h-[50px] w-[50px]' />
                            <p className="text-2xl  mt-1 ml-5">Dedicated community <br /> platform</p>
                        </div>
                        <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#D7FFE4] flex justify-center items-center flex-col sm:m-10 m-4 rounded-xl sm:p-12 p-8">
                <p className="text-uppercase sm:text-4xl text-3xl text-center font-semibold">Make Contact </p>
                <p className="font-extralight text-center mt-2"> Connect for a free Introduction Call</p>
                <button className='bg-green text-white sm:px-20 px-6 py-4 rounded-full mt-6'>Contact us </button>
                <Image src={img} className='sm:absolute   right-[40px] w-[180px]' />
            </div>
            <Footer />
        </div>
    )
}

export default academy