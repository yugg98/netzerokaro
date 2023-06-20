import Image from 'next/image'
import React from 'react'
import check from '@/assets/check.png'
import earthhand from '@/assets/earthhand.png'
import comma from '@/assets/comma5.png'
import comma2 from '@/assets/comma6.png'
import Heading from '../Heading'
const Challenges = () => {
    return (
        <div className='w-full linearbggreen sm:h-[95vh] overflow-hidden'>
            <Heading text="Current Challenges" />
            <div className="flex sm:flex-row flex-col">
                <div className="sm:w-1/2 w-full flex justify-center items-center flex-col px-6 mt-8">
                    <span className="relative left-[-40%]">
                        <Image src={comma2} />
                    </span>
                    <p className="text-green text-2xl font-semibold capitalize text-center	 mb-4">There is a green skills emergency.</p>
                    <p className='text-lg font-extralight text-center px-5 sm:px-16 mt-2 text-fblack'>30 million more green workers are needed globally by 2030 for us to reach net-zero and prevent catastrophic climate breakdown. Without these workers, we won&apos;t be able to build the critical green infrastructure that we need for renewable power, energy efficiency and electric vehicles.</p>
                    <span className="relative left-[40%]">
                        <Image src={comma} />
                    </span>
                    <Image src={earthhand} className='w-[380px]' />
                </div>
                <div className="sm:w-1/2 w-full flex justify-center items-center max-h-screen ">
                    <ul className=' sm:pl-20  sm:pb-20 px-6 mt-0 sm:mb-0 mb-6 '>
                        <div className='sm:mt-4  sm:pr-20'>
                            <li className='flex  items-center sm:mt-4 mt-4'>
                                <span className='border-2 border-green p-1.5 py-2 rounded-full'>
                                    <Image src={check} className='min-w-[18px] min-h-[14px] ' />
                                </span>
                                <p className='ml-2 sm:text-xl text-lg font-extralight text-fblack normal-case	'>Lack of climate change awareness</p>
                            </li>
                        </div>
                        <Tick title="Insufficient technical knowledge" />
                        <Tick title="Limited understanding of climate policies and regulations" />
                        <Tick title="Integration of climate considerations into different Sectors" />
                        <Tick title="Limited capacity for green financing and investment" />
                        <Tick title="Lack of comprehensive solutions" />



                    </ul>
                </div>
            </div>
        </div>
    )
}

const Tick = ({ title }) => {
    return (
        <div className='sm:mt-4  '>
            <li className='flex  items-center sm:mt-12 mt-4'>
                <span className='border-2 border-green p-1.5 py-2 rounded-full'>
                    <Image src={check} className='min-w-[18px] min-h-[14px] ' />
                </span>
                <p className='ml-2 sm:text-xl text-lg font-extralight text-fblack normal-case '>{title}</p>
            </li>
        </div>
    )
}


export default Challenges