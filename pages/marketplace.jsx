import CallToAction from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import dashboardimg from '@/assets/img8.png'
function marketplace() {
    return (
        <div>
            <Navbar />
            <Hero Title="Acquire, Develop and Retain Sustainability" Desc="a platform dedicated to driving India's transition towards a net-zero economy." />
            <div className='p-20 px-[120px] linearbggreen pb-0'>
                <p className="text-5xl text-center text-green font-semibold leading-[60px]">Discover the versatility of our<br />
                    Net Zero Karo Academy</p>
                <p className="text-center mt-4">Sustainability, Climate Literacy and Circular Economy are among the most important future fields of our time. They form the basis for the innovative strength and competitiveness of the economy and for the work of tomorrow</p>
                <div className="mx-auto">
                    <Image src={dashboardimg} className='relative'/>
                </div>
            </div>
            <CallToAction />
            <Footer />
        </div>
    )
}

export default marketplace