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
import Heading from '@/components/Heading'
import icon from '@/assets/customer/icon.png'
function marketplace() {
    return (
        <div>
            <Navbar />
            <Hero Title="Innovating for a Net Zero Economy" Desc="A Platform dedicated to driving India’s transition to a Net Zero Economy" />
            <div className='p-20 pt-4 sm:px-[120px] px-4 linearbggreen pb-0 '>
                <p className="sm:text-5xl text-3xl text-center text-green font-semibold sm:leading-[60px]">Discover the versatility of our
                    Academy</p>
                <p className="text-center mt-4">Sustainability, Climate Literacy and Circular Economy are among the most important future fields of our time. They form the basis for the innovative strength and competitiveness of the economy and for the work of tomorrow</p>
                <div className="mx-auto sm:mt-0 mt-4">
                    <Image src={dashboardimg} className='relative' />
                </div>
            </div>
            <div className='bg-img2 flex flex-wrap  sm:max-h-screen overflow-hidden'>
                <Image src={women} className='max-h-[60%] ' />
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
            <Courses />
            {/* <div className='sm:p-20 bg-img2'>
                <p className="text-5xl text-center font-semibold text-white">Net Zero Karo at Glance</p>
                <div className=" grid sm:grid-cols-3	row-span-3 p-10 gap-6 justify-center items-center w-full mt-10">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div> */}
            <div className='bg-img2 flex flex-wrap  sm:max-h-screen overflow-hidden p-8 pt-4'>
                <div className="md:w-[40%] md:p-14 p-4 ">
                    <p className="sm:text-5xl text-3xl text-white font-semibold md:mt-10">How academy is solving the climate skilling crisis</p>
                    <p className="text-white text-xl mt-10">diverse, innovative talent for your teams by assessing them for varied skill-set</p>
                </div>
                <div className="sm:w-[60%]  list-values sm:px-24  p-4 py-8 pt-4 flex flex-col justify-center">
                <ul>

                    <li className=''>
                        <p>Climate and ESG Skills Gap: </p>
                        <p className=''> The academy aims to address the existing skills gap in climate and Environmental, Social, and Governance (ESG) areas by providing comprehensive training and upskilling opportunities.e</p>
                    </li>

                    <li className=''>
                        <p>Meeting the Demand for Climate Skilling:</p>
                        <p> As climate change becomes a pressing issue, there is a growing demand for professionals equipped with the knowledge and skills to tackle climate-related challenges. The academy aims to meet this demand by offering a platform for climate skilling.</p>
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
                <Heading text="We’ve Got your back, every step of the way"/>
                <div className="flex mt-10 justify-between ">
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg">
                        <Image src={icon} className='mx-auto w-[120px]'/>
                        <p className="text-xl text-center mt-6 ">Onboarding Support</p>
                        <p className="text-center mt-2">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                    </div>
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg">
                        <Image src={icon} className='mx-auto w-[120px]'/>
                        <p className="text-xl text-center mt-6 ">Onboarding Support</p>
                        <p className="text-center mt-2">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                    </div>
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg">
                        <Image src={icon} className='mx-auto w-[120px]'/>
                        <p className="text-xl text-center mt-6 ">Onboarding Support</p>
                        <p className="text-center mt-2">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                    </div>
                    <div className="bg-white p-6 w-[300px] h-[400px] rounded-lg">
                        <Image src={icon} className='mx-auto w-[120px]'/>
                        <p className="text-xl text-center mt-6 ">Onboarding Support</p>
                        <p className="text-center mt-2">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap sm:p-20 sm:pt-4 p-4 pt-8 linearbggreen">
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
const Cards = () => {
    return (
        <div className='bg-white rounded-lg flex justify-center items-center flex-col p-8 w-[350px] h-[250px] mx-auto'>
            <p className="text-green text-3xl font-semibold">120+</p>
            <p className="text-black text-center mt-4">Corporate Customers from industry and business</p>
        </div>
    )
}
export default marketplace