import React from 'react'
import {motion} from 'framer-motion'
import { textVariant } from '@/utils/motion'
const NzkCatalyst = () => {
    return (
        <div className='flex justify-center items-center flex-col w-[90%] mx-auto my-10 mt-12'>
            <p className="text-4xl mb-6 text-green font-[500]">Net Zero Catalyst For Transformation</p>
            <motion.p variants={textVariant(0.2)} initial="hidden"  whileInView="show" className="text-fblack text-center " >
                The Net Zero Karo believes that education is the catalyst for transformation. It is rooted in the firm belief that by upskilling individuals with the knowledge and expertise to navigate the complexities of climate change, we can unlock the potential for sustainable solutions and drive real-world impact.
                <br/>
                <br/>

                At the heart of the academy&apos;s story is the profound understanding that the challenges we face are not insurmountable but require a united effort.
                <br/>
                <br/>

                The Net Zero Kar stands as a testament to the power of collaboration, bringing together a diverse community of learners, educators, industry experts, and thought leaders who share a common goal: to create a sustainable and resilient future for generations to come.
            </motion.p>
        </div>
    )
}

export default NzkCatalyst