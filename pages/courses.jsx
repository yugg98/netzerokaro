import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import dashboardimg from '@/assets/img8.png'
import women from '@/assets/img9.png'
import icon1 from '@/assets/icon8.png'
import Form from '@/components/Form'
import Accordian from '@/components/Accordian'
import Courses from '@/components/Courses'
import Heading from '@/components/Heading'
import icon from '@/assets/customer/icon.png'
import icons1 from '@/assets/customer/icon2.png'
import icon2 from '@/assets/customer/icon3.png'
import icon3 from '@/assets/customer/icon4.png'
import heroimg from '@/assets/hero4.svg'
import el from '@/assets/icons/el.svg'
import flex from '@/assets/icons/flex.svg'
import learn from '@/assets/icons/learn.svg'
import train from '@/assets/icons/train.svg'
import { slideIn, textVariant } from '@/utils/motion'
import { Parser } from 'html-to-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'

function marketplace() {
    return (
        <div>
            <Navbar />
            <Head>
      <title>Net Zero Karo - Courses</title>
      <meta name='viewport' content='This is a net zero website'/>
    </Head>
            <Hero Title="Innovating for a Net Zero Economy" Desc="A Platform dedicated to driving India’s transition to a Net Zero Economy" />
            <div className='p-20 pt-4 sm:px-[120px] px-4 linearbggreen pb-0 '>
                <Heading text='Discover the versatility of our Academy' />
                <p className="text-center mt-4">Net Zero Essentials, Climate Literacy 101, and ABCs of Circular Economy are pivotal domains that hold immense significance in shaping our future. These fields are at the forefront of addressing the pressing challenges of our time, including achieving net-zero emissions, fostering climate awareness, and transitioning to a circular and sustainable economic model.. </p>
                <div className="mx-auto sm:mt-0 mt-4">
                    <Image src={dashboardimg} className='relative' />
                </div>
            </div>

            <div className='bg-img2 flex flex-wrap   overflow-hidden p-8 pt-4'>
                <div className="md:w-[40%] md:p-14 p-4 ">
                    <p className="sm:text-5xl text-3xl text-white font-semibold md:mt-10">Platform Features</p>
                    <p className="text-white text-xl mt-10">Net Zero Karo Platform is a leading online platform dedicated to helping businesses and organizations achieve their net-zero carbon goals. The platform&apos;s user-friendly interface and customizable features make it easy for users to track their progress, identify areas for improvement, and develop tailored strategies for carbon reduction.</p>
                </div>
                <div className="sm:w-[60%]  list-values sm:px-24   py-8 pt-4 flex flex-col justify-center">
                    <ul>

                        <li className=''>
                          
                            <div className='sm:p-4 flex'>
                                <Image src={el} className='h-[50px] md:flex hidden' />
                                <div className=' px-4'>
                                    <div className='md:block flex  items-center '>
                                        <Image src={el} className='md:hidden flex h-[50px] w-[50px] mr-2' />
                                        <p className=" text-xl   text-black mt-1">Next generation E-learning</p>
                                    </div>
                                    <p className='mt-2 text-[#5D6180]'>The academy aims to address the existing skills gap in climate and Environmental, Social, and Governance (ESG) areas by providing comprehensive training and upskilling opportunities.</p>
                                </div>
                            </div>
                        </li>
                        <li className=''>
                          
                          <div className='sm:p-4 flex'>
                              <Image src={learn} className='h-[60px] md:flex hidden' />
                              <div className=' px-4'>
                                  <div className='md:block flex  items-center '>
                                      <Image src={learn} className='md:hidden flex h-[50px] w-[50px] mr-2' />
                                      <p className=" text-xl   text-black mt-1">Tailored learning paths</p>
                                  </div>
                                  <p className='mt-2 text-[#5D6180]'>Younger talent is increasingly seeking purpose, values-alignment, and engagement in their learning and development (L&D) experiences. The academy recognizes this and strives to provide a platform that appeals to younger individuals who are passionate about addressing climate change.</p>
                              </div>
                          </div>
                      </li>
                      <li className=''>
                          
                            <div className='sm:p-4 flex'>
                                <Image src={train} className='h-[60px] md:flex hidden' />
                                <div className=' px-4'>
                                    <div className='md:block flex  items-center '>
                                        <Image src={train} className='md:hidden flex h-[50px] w-[50px] mr-2' />
                                        <p className=" text-xl   text-black mt-1">Train all your staff</p>
                                    </div>
                                    <p className='mt-2 text-[#5D6180]'>The academy focuses on aligning skills development with the goal of achieving net-zero emissions. It aims to equip individuals with the knowledge and tools necessary to contribute to sustainability efforts and the transition to a net-zero future.</p>
                                </div>
                            </div>
                        </li>
                        <li className=''>
                          
                            <div className='sm:p-4 flex'>
                                <Image src={flex} className='h-[60px] md:flex hidden' />
                                <div className=' px-4'>
                                    <div className='md:block flex  items-center '>
                                        <Image src={flex} className='md:hidden flex h-[50px] w-[50px] mr-2' />
                                        <p className=" text-xl   text-black mt-1">Flexible learning</p>
                                    </div>
                                    <p className='mt-2 text-[#5D6180]'>The academy recognizes that climate skilling is the next wave in learning and development. By offering a platform that addresses this emerging trend, it seeks to stay ahead and provide relevant and impactful learning opportunities.</p>
                                </div>
                            </div>
                        </li>
                      

                    </ul>
                </div>
            </div>
            <Courses />

            <div className='bg-img2 flex flex-wrap   overflow-hidden p-8 pt-4'>
                <div className="md:w-[40%] md:p-14 p-4 ">
                    <p className="sm:text-5xl text-3xl text-white font-semibold md:mt-10">How academy is solving the climate skilling crisis</p>
                    <p className="text-white text-xl mt-10">Diverse, innovative talent for your teams by assessing them for varied skill-set</p>
                </div>
                <div className="sm:w-[60%]  list-values sm:px-24   py-8 pt-4 flex flex-col justify-center">
                    <ul>

                        <li className=''>
                            <p>Climate and ESG Skills Gap: </p>
                            <p className=''> The academy aims to address the existing skills gap in climate and Environmental, Social, and Governance (ESG) areas by providing comprehensive training and upskilling opportunities.</p>
                        </li>

                        <li className=''>
                            <p>Meeting the Demand for Climate Skilling:</p>
                            <p> Younger talent is increasingly seeking purpose, values-alignment, and engagement in their learning and development (L&D) experiences. The academy recognizes this and strives to provide a platform that appeals to younger individuals who are passionate about addressing climate change.</p>
                        </li>
                        <li className=''>
                            <p>Aligning Skills with Net Zero Goals: </p>
                            <p>The academy focuses on aligning skills development with the goal of achieving net-zero emissions. It aims to equip individuals with the knowledge and tools necessary to contribute to sustainability efforts and the transition to a net-zero future.</p>
                        </li>
                        <li className=''>
                            <p>Keeping Up with the Next L&D Wave:</p>
                            <p>The academy recognizes that climate skilling is the next wave in learning and development. By offering a platform that addresses this emerging trend, it seeks to stay ahead and provide relevant and impactful learning opportunities.</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="p-10 pt-0 linearbggreen">
                <Heading text="We’ve Got your back, every step of the way" />
                <div className="flex flex-wrap md:mt-20 justify-between ">
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg my-4">
                        <Image src={icon} className='mx-auto w-[120px]  ' />
                        <p className="text-xl text-center mt-6 ">Onboarding Support</p>
                        <p className="text-center mt-2">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                    </div>
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg my-4">
                        <Image src={icons1} className='mx-auto w-[120px]' />
                        <p className="text-xl text-center mt-6 ">Account Managed Services</p>
                        <p className="text-center mt-2">Your account will be managed by a named individual, so you know where to go for additional support. Our team of account managers are focussed on helping you meet your objectives.</p>
                    </div>
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg my-4">
                        <Image src={icon2} className='mx-auto w-[120px]' />
                        <p className="text-xl text-center mt-6 "> Access to Expertise</p>
                        <p className="text-center mt-2">Our analysts and engineers are not just there to help you achieve your objectives but also to give you access to their knowledge and expertise and improve the level of understanding that your team has.</p>
                    </div>
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg my-4">
                        <Image src={icon3} className='mx-auto w-[120px]' />
                        <p className="text-xl text-center mt-6 "> Subscription-based pricing model</p>
                        <p className="text-center mt-2">No upfront fees</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap sm:p-20 sm:pt-6 p-4 pt-8 linearbggreen">
                <div className="sm:w-1/2 sm:px-[100px]">
                    <p className="sm:text-5xl text-3xl text-green sm:leading-[60px] sm:text-left text-center">
                        <span className='font-semibold'> Frequently Asked  Us  ?</span></p>
                    <p className="text-l sm:mt-0 mt-3">Your questions answered on our approach, our team, our values, our process, costs, timeline and more.</p>
                </div>
                <div className="sm:w-1/2">
                    <Accordian />
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
                 
                    <motion.div variants={textVariant(0.8)} className='text-black text-center py-6 md:h-[150px] sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>{Title}</motion.div>

                    <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">{Parser().parse(Desc)}</motion.p>
                    <div className="flex items-center mt-8 sm:justify-start justify-center">
                        <Link className="rounded-full bg-green text-white px-12 text-lg py-3" href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform">Explore</Link>
                    </div>
                </div>
            </motion.div>
            <div className="sm:w-[50%] flex justify-end py-20 w-full">
                <Image src={heroimg} className='md:w-[75%] mx-auto' />
            </div>
        </div>
    )
}
export default marketplace