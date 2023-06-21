import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/img10.png'
import img2 from '@/assets/img11.png'
import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import o1 from '@/assets/o1.png'
import o2 from '@/assets/o2.png'
import o3 from '@/assets/o3.png'
import o4 from '@/assets/o4.png'

import img3 from '@/assets/windmill.png'
import Heading from '@/components/Heading'

const greenstore = () => {
    return (
        <div>
            <Navbar />
            <Hero Title={"Help your organisation get to Net Zero, faster!"} Desc={"Overall emissions reduction is the most direct way for any organisation to start working in favour of the planet. With our help, you’ll be able to do just that."} />
            <div className="p-10 flex justify-center items-center linearbggreen">
                <div className="sm:w-1/2 px-16">
                    <p className="text-5xl text-green mb-2 sm:leading-[60px]">Helping you deliver a  credible net zero  strategy”</p>
                    <p className='text-2xl mt-10'>We have the roadmap to your company’s zero-carbon future, and the expertise and platform to get you there.</p>
                </div>
                <div className="sm:w-1/2 p-8">
                    <Image src={img1} />
                </div>
            </div>

            <div className="sm:p-10 p-2 flex  items-center bs flex-wrap">
                <div className="sm:w-1/2 p-8 w-full">
                    <Image src={img3} />
                </div>
                <div className="sm:w-1/2 sm:px-16 px-4 w-full">
                    <p className="sm:text-5xl text-3xl  mt-4  mb-2 sm:leading-[60px] text-white">NET ZERO SERVICES</p>
                    <p className='text-xl mt-10 text-white'>Whether your business fits the criteria for mandatory carbon reporting, or you’ve decided to voluntarily demonstrate your environmental sustainability from a corporate social responsibility perspective, we have a carbon strategy for you.</p>
                    <p className='text-xl mt-4 text-white'>Achieving your carbon reduction targets and maintaining your profit margins isn’t easy. Disclosing Environment, Social and Governance (ESG) data can take a huge amount of effort in time and resource, especially if your business is geographically large with multiple sites.</p>
                </div>

            </div>
            <div className='p-4'>
                <div className='flex flex-wrap justify-center items-center p-4'>
                    <div className="sm:w-[40%]">
                        <Image src={o1} className='sm:w-[80%] mx-auto' />

                    </div>
                    <div className='sm:w-[60%] sm:px-20'>
                        <p className="sm:text-3xl text-2xl sm:text-left text-center text-green mt-2">Carbon Consulting and Certification</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2 sm:mx-0 mx-auto'></div>
                        <p className="text-lg mt-4 sm:text-left text-center">Our carbon consulting helps you first understand your carbon footprint. Keeping things simple, we give you the tools and help to calculate carbon impact easily and confidently and then act. Our integrated approach means we go onto certify you as Carbon Balanced, offsetting your footprint with the world’s most holistic projects powered by nature and communities.</p>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row-reverse justify-center items-center p-4'>
                    <div className="sm:w-[40%]">
                        <Image src={o2} className='sm:w-[80%] mx-auto' />

                    </div>
                    <div className='sm:w-[60%] sm:px-20'>
                        <p className="sm:text-3xl text-2xl  text-green mt-2 sm:text-left text-center">Emissions Measurement & Net-Zero Strategy</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2 sm:mx-0 mx-auto'></div>
                        <p className="text-lg mt-4 sm:text-left text-center">Creating a net-zero plan starts with understanding your climate impact, agreeing the boundaries of your climate ambitions and devising a robust and informed strategy for action.

                            <br /> <br /> At NetZeroKaro, we can provide support with carbon footprint calculation, including the more challenging tasks of calculating Scope 3/supply chain emissions or even the emissions of an investment portfolio.</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center p-4'>
                    <div className="sm:w-[40%]">
                        <Image src={o3} className='sm:w-[80%] mx-auto' />

                    </div>
                    <div className='sm:w-[60%] sm:px-20'>
                        <p className="sm:text-3xl text-2xl sm:text-left text-center text-green mt-2">Carbon reduction training</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2 sm:mx-0 mx-auto'></div>
                        <p className="text-lg mt-4 sm:text-left text-center">Our carbon management specialists can provide low carbon training to stakeholders at all levels.
                            <br />
                            <br />
                            We work closely with our clients to ensure our training is tailored to their organisation, projects, and goals. We offer inspirational and meaningful insights on environmental best practice, development of strategic objectives and targets for carbon reduction.
                            <br />
                            <br />
                            Our sustainability leadership seminars and carbon/cost workshops have proven to be central in helping our client’s future-proof their projects and steer their organisations towards a net-zero carbon future. Our practical advice not only enables cost-efficient carbon reduction, it also helps our clients to clearly demonstrate their progress towards genuine sustainability.

                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row-reverse justify-center items-center p-4'>
                    <div className="sm:w-[40%]">
                        <Image src={o4} className='sm:w-[80%] mx-auto' />

                    </div>
                    <div className='sm:w-[60%] sm:px-20'>
                        <p className="sm:text-3xl text-2xl md:text-left text-center text-green mt-2">Voluntary Carbon Offsetting</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2 sm:mx-0 mx-auto'></div>
                        <p className="text-lg mt-4 sm:text-left text-center">Nature- and Technology-Based Solutions
                            <br /><br />
                            We can support you, not only in reducing your emissions, but in managing any remaining emissions via a credible offsetting programme. As an experienced project developer and portfolio manager, we know carbon offsetting and the international carbon market inside out. We can help you understand the different types of credits and how they can support you along your journey to net-zero and beyond, whilst contributing to our global goals for sustainable development.
                            <br /><br />
                            It is vitally important that the carbon credits you purchase come from projects verified by internationally recognised certifying bodies.</p>
                    </div>
                </div>
            </div>
           
            <CallToAction />
            <Footer />
        </div>
    )
}

export default greenstore