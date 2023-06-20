import { slideIn, staggerContainer } from '@/utils/motion'
import React from 'react'
import { motion } from 'framer-motion'
import Heading from '../Heading'
const Roadnz = () => {
    return (
        <motion.div
            variants={slideIn}
            initial="hidden"  whileInView="show"
            className='linearbggreen sm:h-[500px]  '>
            <p className="text-4xl mb-6 text-green font-[600] text-center"></p>
            <Heading text="Road to Net Zero"/>
            <div className=" ">
                <div className="w-[90%] flex sm:flex-row flex-col mx-auto justify-between ">
                    <motion.div variants={slideIn('left', 'tween', 0.1, 1)} initial="hidden"  whileInView="show" className="sm:w-[38%] w-full bg-white p-8  rounded-[12px]">
                        <p className="text-xl font-[500px] mt-2">What Is Net Zero ?</p>
                        <p className="text-md text-[#5D6180] mt-2">
                            In simple terms, “Net Zero” is about equilibrium.
                            <br />
                            <br />
                            Net zero is when greenhouse gas (GHG) emission removals balance out the amount of GHG emissions in the atmosphere.
                        </p>
                    </motion.div>
                    <motion.div variants={slideIn('right', 'tween', 0.1, 1)} initial="hidden"  whileInView="show" className="sm:w-[58%] sm:mt-2 sm:mb-0 mb-4  bg-white p-8  rounded-[12px] mt-10">
                        <p className="text-xl font-[500px] mt-2"> Why Net Zero ?</p>
                        <p className="text-md text-[#5D6180] mt-2">
                            As the world is facing an unprecedented climate crisis, there is an urgent need to reduce greenhouse gas emissions and mitigate the impacts of climate change.
                            <br />
                            <br />

                            To keep the global temperature below 1.5℃, the Intergovernmental Panel on Climate Change (IPCC) says that we must reduce global net anthropogenic carbon dioxide emissions by 45% from 2010 levels by 2030 and reach net zero by 2050.
                            <br />
                            <br />
                            The transition to a net-zero economy, where the amount of greenhouse gases produced is equal to the amount removed from the atmosphere, is a crucial step in achieving this goal.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Roadnz