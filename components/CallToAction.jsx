import React from 'react'
import img from '@/assets/g10.png'
import Image from 'next/image'
const CallToAction = () => {
    return (
        <div className="bg-[#D7FFE4] flex justify-center items-center flex-col sm:m-10 m-4 rounded-xl sm:p-12 p-8">
            <p className="text-uppercase sm:text-4xl text-3xl text-center font-semibold">Contact us</p>
            <p className="font-extralight text-center mt-2">Let's talk and find the best solution for you and your company together</p>
            <button className='bg-green text-white sm:px-20 px-6 py-4 rounded-full mt-6'>Contact us </button>
            <Image src={img} className='sm:absolute   right-[40px] w-[180px]'/>
        </div>
    )
}

export default CallToAction