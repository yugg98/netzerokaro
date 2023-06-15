import Image from 'next/image'
import React from 'react'
import check from '@/assets/check.png'
import earthhand from '@/assets/earthhand.png'
import comma from '@/assets/comma5.png'
import comma2 from '@/assets/comma6.png'
const Challenges = () => {
    return (
        <div className='w-full linearbggreen'>
            <p className="text-4xl text-center font-semibold text-green mt-4">Current Challenges</p>
            <div className="flex sm:flex-row flex-col">
                <div className="sm:w-1/2 w-full flex justify-center items-center flex-col px-6 mt-20">
                    <span className="relative left-[-40%]">
                        <Image src={comma2} />
                    </span>
                    <p className="text-green text-2xl font-semibold capitalize text-center	 mb-4">There is a green skills emergency.</p>
                    <p className='text-lg font-extralight text-center px-5 sm:px-16 mt-2 text-fblack'>30 million more green workers are needed globally by 2030 for us to reach net-zero and prevent catastrophic climate breakdown. Without these workers, we won&apos;t be able to build the critical green infrastructure that we need for renewable power, energy efficiency and electric vehicles.</p>
                    <span className="relative left-[40%]">
                        <Image src={comma} />
                    </span>
                    <Image src={earthhand} className='w-[450px]'/>
                </div>
                <div className="sm:w-1/2 w-full flex justify-center items-center ">
                    <ul className='sm:ml-20  mt-26 sm:p-0 p-8'>
                        
                        <Tick title="Lack of Climate Change Awareness"/>
                        <Tick title="Insufficient Technical Knowledge"/>

                        <Tick title="Limited Understanding of Climate Policies and Regulations"/>
                        <Tick title="Integration of Climate Considerations into Different Sectors"/>
                        <Tick title="Limited Capacity for Green Financing and Investment"/>
                        <Tick title="Limited Understanding of Climate Policies and Regulations"/>
                       


                    </ul>
                </div>
            </div>
        </div>
    )
}

const Tick = ({title}) => {
    return (
        <div className='sm:mt-16 mt-10 sm:pr-20'>
            <li className='flex  items-center mt-6'>
                <span className='border-2 border-green p-1.5 py-2 rounded-full'>
                    <Image src={check} className='w-[18px] h-[14px] ' />
                </span>
                <p className='ml-2 sm:text-xl text-lg font-extralight text-fblack '>{title}</p>
            </li>
        </div>
    )
}


export default Challenges