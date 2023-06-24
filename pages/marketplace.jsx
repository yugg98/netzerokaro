import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/world.png'
import img2 from '@/assets/img11.png'
import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import o1 from '@/assets/o1.png'
import o2 from '@/assets/o2.png'
import o3 from '@/assets/o3.png'
import o4 from '@/assets/o4.png'

import img3 from '@/assets/windmill.png'
import Heading from '@/components/Heading'

import heroimg from '@/assets/hero2.svg'
import { slideIn, textVariant } from '@/utils/motion'
import { Parser } from 'html-to-react'
import { motion } from 'framer-motion'

const greenstore = () => {
    return (
        <div>
            <Navbar />
            <Hero Title={"Empower your team with the tools for a sustainable tomorrow! "} Desc={"Overall emissions reduction is the most direct way for any organisation to start working in favour of the planet. With our help, you’ll be able to do just that."} />
            <div className="p-10 flex flex-wrap justify-center items-center linearbggreen">
                <div className="sm:w-1/2 md:px-16">
                    <p className="sm:text-5xl text-3xl font-semibold text-green mb-2 sm:leading-[60px]">From understanding your Carbon Footprint to reducing your emissions, we&apos;ll be there.</p>
                    <p className='text-2xl mt-10'>We have the roadmap to your company’s zero-carbon future, and the expertise and platform to get you there</p>
                </div>
                <div className="sm:w-1/2 md:p-8">
                    <Image src={img1} />
                </div>
            </div>
            <div className='bg-img2'>
                <Heading text="Net Zero Services" color={true}/>

                <div className="sm:p-4 p-2 flex  items-center  flex-wrap">
                    <div className="sm:w-1/2 w-full">
                        <Image src={img3}  className='md:w-[80%] mx-auto'/>
                    </div>
                    <div className="sm:w-1/2 sm:px-8  px-4 w-full">

                        <p className='text-xl  text-white'>Are you struggling to meet your carbon reduction goals without compromising your profit margins? Whether your company is required to report carbon emissions or you choose to showcase your environmental sustainability as part of your corporate social responsibility, we have a tailored carbon plan just for you.
                            <br />
                            <br />

                            Managing and disclosing Environment, Social, and Governance (ESG) data can be a time-consuming and resource-intensive process, especially for companies operating across multiple locations.
                            <br />
                            <br />

                            Our services include precise carbon measurement, accurate carbon reporting and compliance evaluation, and the development of a personalized carbon plan that aligns with your company&apos;s unique needs and goals.
                            <br />
                            <br />

                            Let us assist you in navigating the complexities of carbon management while driving sustainability and success for your business.</p>
                    </div>

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
                        <p className="text-lg mt-4 sm:text-left text-center">Our carbon consulting services simplify the process of understanding and calculating your carbon footprint. We provide user-friendly tools and expert guidance to ensure accurate measurements. Additionally, we certify you as Carbon Balanced by offsetting your footprint through nature-powered projects. Take meaningful action towards carbon neutrality and make a positive impact on the environment. Empower yourself today with our comprehensive services. Contact us to learn more.</p>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row-reverse justify-center items-center p-4'>
                    <div className="sm:w-[40%]">
                        <Image src={o2} className='sm:w-[80%] mx-auto' />

                    </div>
                    <div className='sm:w-[60%] sm:px-20'>
                        <p className="sm:text-3xl text-2xl  text-green mt-2 sm:text-left text-center">Emissions Measurement & Net-Zero Strategy</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2 sm:mx-0 mx-auto'></div>
                        <p className="text-lg mt-4 sm:text-left text-center">At NetZeroKaro, we specialize in helping you create a comprehensive net-zero plan. Our services include precise carbon footprint calculations, including challenging tasks like measuring Scope 3 and supply chain emissions, as well as emissions from investment portfolios. With our expert guidance, you can establish clear climate ambitions, set boundaries, and develop a robust strategy for impactful action. Start your journey towards a sustainable future with us today. Contact us to learn more.

                         .</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center p-4'>
                    <div className="sm:w-[40%]">
                        <Image src={o3} className='sm:w-[80%] mx-auto' />

                    </div>
                    <div className='sm:w-[60%] sm:px-20'>
                        <p className="sm:text-3xl text-2xl sm:text-left text-center text-green mt-2">Carbon reduction training</p>
                        <div className='w-[110px] bg-green h-[6px] rounded-full mt-2 sm:mx-0 mx-auto'></div>
                        <p className="text-lg mt-4 sm:text-left text-center">Our carbon management specialists offer comprehensive low carbon training for stakeholders at all levels. We collaborate closely with clients to customize training programs that align with their organization, projects, and objectives. Our seminars and workshops provide inspirational insights, strategic goal setting, and practical advice on environmental best practices. By participating in our training, clients can future-proof their projects and navigate towards a net-zero carbon future while demonstrating tangible sustainability progress and cost-efficiency.


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
                        <p className="text-lg mt-4 sm:text-left text-center">Our expertise extends beyond emission reduction to effective management of remaining emissions through credible offsetting programs. With extensive knowledge of the international carbon market, we guide you through various types of credits, aligning them with your net-zero aspirations and global sustainable development goals. By partnering with us, you&apos;ll gain a comprehensive understanding of offsetting strategies that not only support your journey to net-zero but also contribute to broader sustainability objectives.</p>
                    </div>
                </div>
            </div>

            <CallToAction />
            <Footer />
        </div>
    )
}

const Hero = ({ Title, Desc, SuperTitle }) => {
    return (
        <div className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen sm:px-0'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
                <div className='p-2 sm:pl-8 sm:p-4 sm:px-20'>
                    <div className='flex  items-center mx-auto'>
                        <p className="text-green text-2xl  text-center sm:mb-0 mb-2 mr-2">{SuperTitle}</p>
                    </div>
                    <motion.div variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>{Title}</motion.div>

                    <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">{Parser().parse(Desc)}</motion.p>
                    <div className="flex items-center mt-8 sm:justify-start justify-center">
                        <button className="rounded-full bg-green text-white px-12 text-lg py-3">Explore</button>
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end py-20 w-full">
                <Image src={heroimg} className='w-[80%] mx-auto' />
            </div>
        </div>
    )
}
export default greenstore