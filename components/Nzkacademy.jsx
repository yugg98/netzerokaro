import Image from 'next/image'
import React from 'react'
import check from '@/assets/check.png'
import img from '@/assets/media/img3.png'
import comma from '@/assets/comma5.png'
import comma2 from '@/assets/comma6.png'
import Heading from './Heading'
import book from '@/assets/icon4.png'
import script from '@/assets/script.png'
const Nzkacademy = () => {
    return (
        <div className='w-full linearbggreen  overflow-hidden'>
            <Heading text="NET ZERO KARO ACADEMY" />
            <div className="flex sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full flex justify-center items-center max-h-screen ">
                    <ul className=' sm:pl-20  sm:pb-20 px-6 mt-4 sm:mb-0 mb-6 '>

                        <Tick title="Versatile online learning platform compatible with desktop, and mobile devices, and seamless integration with existing learning systems (LMS/LXP)." />
                        <Tick title="Comprehensive and specialized curriculum specifically designed to address the knowledge and skills gaps in climate change and sustainability" />
                        <Tick title="Structured learning paths from fundamental concepts to advanced expertise" />
                        <Tick title="Customization and flexibility in all of the learning programs" />
                        <Tick title="Collaborative development process involving renowned experts from industry and academia" />
                        <Tick title="Official certificates after completion" />



                    </ul>
                </div>
                <div className="sm:w-1/2 w-full flex justify-start items-center flex-col sm:p-10 p-4 ">
                    <div className="bg-white md:p-10 p-6 rounded-lg md:w-[600px] w-full">
                        <Image src={book} className='w-[60px] ' />
                        <p className='text-lg mt-4 '>Learning format</p>
                        <ul className='card-list'>
                            <p className="text-sm text-greyf">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                        </ul>
                    </div>
                    <div className="bg-white md:p-10 p-6  rounded-lg mt-4 sm:w-[600px] w-full">
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
                
            </div>
        </div>
    )
}

const Tick = ({ title }) => {
    return (
        <div className='sm:mt-4  sm:pr-20'>
            <li className='flex  items-start sm:mt-6 mt-4'>
                <span className='border-2 border-green p-1.5 py-2 rounded-full'>
                    <Image src={check} className='min-w-[18px] min-h-[14px] ' />
                </span>
                <p className='ml-2 sm:text-lg font-extralight text-fblack '>{title}</p>
            </li>
        </div>
    )
}


export default Nzkacademy