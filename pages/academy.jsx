import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import laptop from '@/assets/img3.png'
import Image from 'next/image'
import c1 from '@/assets/comma3.png'
import c2 from '@/assets/comma4.png'
import img1 from '@/assets/img4.png'
import img4 from '@/assets/img7.png'
import plus from '@/assets/plus.png'
import img2 from '@/assets/img5.png'
import img3 from '@/assets/img6.png'
import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import comma from '@/assets/comma.png'
import comma1 from '@/assets/comma2.png'
import book from '@/assets/icon4.png'
import feature from '@/assets/icon5.png'
import icon from '@/assets/icons/icon12.png'




const academy = () => {
    return (
        <div>
            <Navbar />
            <Hero Title="Climate education with a difference." Desc="a platform dedicated to driving India's transition towards a net-zero economy." />
            <div className="w-full flex flex-wrap p-10 sm:h-[80vh] pb-10 ">
                <div className="sm:w-1/2 mb-10 ">
                    <Image src={laptop} className=' sm:max-w-[500px] mx-auto' />
                </div>
                <div className="sm:w-1/2 sm:px-10 px-2">
                    <p className="text-green sm:text-5xl text-3xl font-semibold mt-10 sm:leading-[60px] text-center sm:text-left capitalize ">Invest in your team’s capacity to respond to our changing world</p>
                    <Image src={c1} className='w-[40px] relative opacity-40 left-[-40px] mt-5' />
                    <p className=' text-xl mt-5 text-[#5D6180]'>We are entering into a values-based, circular and green economy. Companies that upskill their employees with the tools of transformation will be at the forefront of adapting to the changing business landscape.</p>
                    <p className=' text-xl mt-10 text-[#5D6180]'>But, there is a significant sustainability skills gap in most workforces.<span className='font-semibold'> Net Zero Karo </span>is the capacity-building educational platform equipping the global workforce with actionable sustainability skills for this changing business landscape.</p>
                    <Image src={c2} className='w-[40px] opacity-40 relative  mt-5 right-[-90%]' />
                </div>
            </div>
            <div className="bg-img2 mt-10 p-6 rounded-lg ">
                <p className=" text-white capitalize text-center text-4xl mt-10">Core Learning Programs</p>
                <p className="text-white text-center mt-4">Are you motivated to take climate action at work, but don&apos;t know where to start? Do you want to use your job to tackle the challenge of climate change, but don&apos;t want to switch careers? Are you ready to become a ‘Climate Intrapreneur’, and learn what it takes to influence and lead critical initiatives inside of businesses? Regardless of your role, this course could be for you – you don’t need to be a CEO or executive to drive change.</p>
                <div className="flex justify-between flex-wrap p-4 mt-8">
                    <div className="flex flex-row justify-center max-w-[380px] items-center">
                        <div className="bg-white rounded-lg p-4">
                            <Image src={img1} className='w-[350px]' />
                            <div className="flex justify-between mt-6 px-2">
                                <div >
                                    <p className="text-sm text-green">Part One</p>
                                    <p className="font-semibold ">Sustainability</p>
                                </div>
                                <div className='bg-green rounded-full p-2 '>
                                    <Image src={plus} className='w-[28px]' />
                                </div>
                            </div>
                            <div className='px-2 mt-2'>
                                <p className="text-sm text-green">Key Content</p>
                                <p className="text-[#08103A] mb-4">Sustainability terminology, how to take accountability and maintain integrity in business, and application to sustainability in the business context</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[380px] items-center">
                        <div className="bg-white rounded-lg p-4">
                            <Image src={img1} className='w-[350px]' />
                            <div className="flex justify-between mt-6 px-2">
                                <div >
                                    <p className="text-sm text-green">Part One</p>
                                    <p className="font-semibold ">Sustainability</p>
                                </div>
                                <div className='bg-green rounded-full p-2 '>
                                    <Image src={plus} className='w-[28px]' />
                                </div>
                            </div>
                            <div className='px-2 mt-2'>
                                <p className="text-sm text-green">Key Content</p>
                                <p className="text-[#08103A] mb-4">Sustainability terminology, how to take accountability and maintain integrity in business, and application to sustainability in the business context</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center max-w-[380px] items-center">
                        <div className="bg-white rounded-lg p-4">
                            <Image src={img1} className='w-[350px]' />
                            <div className="flex justify-between mt-6 px-2">
                                <div >
                                    <p className="text-sm text-green">Part One</p>
                                    <p className="font-semibold ">Sustainability</p>
                                </div>
                                <div className='bg-green rounded-full p-2 '>
                                    <Image src={plus} className='w-[28px]' />
                                </div>
                            </div>
                            <div className='px-2 mt-2'>
                                <p className="text-sm text-green">Key Content</p>
                                <p className="text-[#08103A] mb-4">Sustainability terminology, how to take accountability and maintain integrity in business, and application to sustainability in the business context</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:p-12 sm:px-[120px] p-8'>
                <p className="text-center text-5xl text-green capitalize">The Learning Experience</p>
                <p className='text-sm text-center mt-2'>The Net Zero Karo academy Core Sustainability Training Program is a three-part comprehensive learning experience covering <br /> Sustainability, Climate Literacy and the Circular Economy.</p>
                <div className="flex flex-wrap mt-6 w-full justify-between items-center">
                    <div className='sm:w-[40%]'>
                        <Image src={img2} className='w-full' />
                    </div>

                    <div className='sm:w-[55%] w-full'>
                        <p className="text-3xl">The Program</p>
                        <p className='mt-2'>
                            Jump start your sustainability, climate literacy and circular economy skill set with our comprehensive core learning experience. This program is designed for all professionals, providing the most up-to-date understanding and actions to integrate these three areas into your role with any company, organisation or industry.
                        </p>
                        <p className='mt-2'>
                            Designed to fill the global sustainability skills gap and support companies with the growing demand for sincere, company-wide sustainability actions, the Swivel Skills Core Learning Experiences transfers knowledge from a leading expert in the field.
                        </p>
                        <p className='mt-2'>
                            The program offers best-practice examples and provides the framework to develop applicable green skills, which ultimately supports you and your company in building a healthier, more innovative, environmentally-responsible, socially-equitable and future-focused workforce.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row-reverse mt-6 w-full justify-between items-center">
                    <div className='sm:w-[40%]'>
                        <Image src={img3} className='w-full' />
                    </div>

                    <div className='sm:w-[55%]'>
                        <p className="text-3xl">The Program</p>
                        <p className='mt-2'>
                            Jump start your sustainability, climate literacy and circular economy skill set with our comprehensive core learning experience. This program is designed for all professionals, providing the most up-to-date understanding and actions to integrate these three areas into your role with any company, organisation or industry.
                        </p>
                        <p className='mt-2'>
                            Designed to fill the global sustainability skills gap and support companies with the growing demand for sincere, company-wide sustainability actions, the Swivel Skills Core Learning Experiences transfers knowledge from a leading expert in the field.
                        </p>
                        <p className='mt-2'>
                            The program offers best-practice examples and provides the framework to develop applicable green skills, which ultimately supports you and your company in building a healthier, more innovative, environmentally-responsible, socially-equitable and future-focused workforce.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-img2 sm:p-10 p-4">
                <Image src={comma1} className='w-[40px] relative left-[-10px]' />
                <p className='mx-10 text-white sm:text-2xl text-xl'>This interactive online training will guide you and your organization step-by-step through the why and how-to of the global transformation to a circular economy.<br/>
                    The main difference Net Zero Karo offers compared to other sustainability training platforms is the quality and ease of content, learner flow and meeting the targeted needs of the business community.</p>
                <Image src={comma} className='w-[40px] relative right-[-68%] top-[-20px]' />
                <div className="flex flex-wrap justify-between sm:mx-20 sm:my-10">
                <div className="bg-white p-10 rounded-lg">
                    <Image src={book} className='w-[60px]'/>
                    <p className='text-lg mt-4 '>Learning format</p>
                    <ul className='card-list'>
                        <li>Voiceovers and closed captions</li>
                        <li>Scientifically validated resource links for further research</li>
                        <li>Self-paced online learning</li>
                        <li>Engaging & interactive graphics</li>
                        <li>80+ Interactive quizzes</li>
                    </ul>
                </div>
                <div className="bg-white p-10 rounded-lg mt-4">
                    <Image src={book} className='w-[60px]'/>
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
            </div>
            <div className="linearbggreen sm:py-20 py-4">
                <p className="sm:text-5xl text-3xl text-green mb-4 text-center mt-4 sm:mt-0"> USP of Academy</p>
                <p className="text-black text-center sm:max-w-[50%] mx-auto mb-10">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
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
                </div>
            </div>
            <CallToAction />
            <Footer />
        </div>
    )
}

export default academy