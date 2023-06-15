import React from 'react'
import img from '@/assets/g10.png'
import Image from 'next/image'
const CallToAction = () => {
    return (
        <div className="bg-[#D7FFE4] flex justify-center items-center flex-col sm:m-10 m-4 rounded-xl sm:p-12 p-8">
            <p className="text-uppercase sm:text-4xl text-3xl text-center font-semibold">Access the Net Zero Karo Academy</p>
            <p className="font-extralight text-center mt-2">This interactive online training will guide you and your organization step-by-step through the why <br/>and how-to of the global transformation to a circular economy.</p>
            <button className='bg-green text-white sm:px-20 px-6 py-4 rounded-full mt-6'>Get Started Now</button>
            <Image src={img} className='sm:absolute hidden right-[40px] w-[200px]'/>
        </div>
    )
}

export default CallToAction