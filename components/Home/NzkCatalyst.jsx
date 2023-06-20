import React from 'react'
import {motion} from 'framer-motion'
import { textVariant } from '@/utils/motion'
const NzkCatalyst = () => {
    return (
        <div className='flex justify-center items-center flex-col w-[90%] mx-auto my-10 mt-12'>
            <p className="text-4xl mb-6 text-green font-[500]">&quot;Empowering minds, igniting change for a sustainable future.&quot;</p>
            <motion.p variants={textVariant(0.2)} initial="hidden"  whileInView="show" className="text-fblack text-center " >
            The Net Zero Karo holds that transformation is sparked by education. It is based on the steadfast conviction that we can unleash the potential for sustainable solutions and have a real-world impact by empowering people with the information and skills necessary to understand the intricacies of climate change                <br/>
                <br/>

                The core of the academy&apos;s narrative is the profound realization that the difficulties we encounter may be overcome through teamwork.                <br/>
                <br/>

                The Net Zero Kar is a living example of the value of teamwork, bringing together a diverse community of learners, educators, business professionals, and thought leaders with the shared objective of building a resilient and sustainable future for future generations.            </motion.p>
        </div>
    )
}

export default NzkCatalyst