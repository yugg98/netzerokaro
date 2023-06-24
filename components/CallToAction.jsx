import React from 'react'
import img from '@/assets/g10.png'
import Image from 'next/image'
import Link from 'next/link'
const CallToAction = () => {
    return (
        <div className="bg-[#D7FFE4] flex justify-center items-center flex-col sm:m-10 m-4 rounded-xl sm:p-12 p-8">
            <p className="text-uppercase sm:text-4xl text-3xl text-center font-semibold">Get started now </p>
            <p className="font-extralight text-center mt-2">Companies that address ESG and sustainability challenges now have a decisive competitive advantage. So let&apos;s get started today!</p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKhKzbkfUpONy24bTzoRY-YELlkcHzMaYCXiI3zNvlZEUosg/viewform" className='bg-green text-white sm:px-20 px-6 py-4 rounded-full mt-6'>Request&nbsp;Demo</Link>
            <Image src={img} className='sm:absolute   right-[40px] w-[180px]'/>
        </div>
    )
}

export default CallToAction