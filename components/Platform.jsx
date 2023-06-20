import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { textVariant, staggerContainer } from '@/utils/motion'
import approach from '@/assets/approach.png'
const Platform = () => {
    const calculateRemainingTime = () => {
        const now = new Date();
        const targetDate = new Date('January 1, 2030 00:00:00');
    
        const timeDifference = targetDate - now;
    
        if (timeDifference > 0) {
          const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
          const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
          const weeks = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
          const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
          setRemainingTime({ years, months, weeks, days, hours, minutes, seconds });
        } else {
          setRemainingTime({ years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };
    
      const [remainingTime, setRemainingTime] = useState({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    
    

    useEffect(() => {
        calculateRemainingTime();

        const interval = setInterval(() => {
            calculateRemainingTime();
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <div className='flex justify-center items-center flex-col w-[90%] mx-auto my-10 mt-12 mb-0 sm:px-20 pb-0'>
                <p className="text-4xl mb-6 text-green font-semibold">The Platform</p>
                <motion.p variants={textVariant(0.2)} initial="hidden" whileInView="show" className="text-fblack text-center " >
                    Net Zero Karo (NZK), a platform dedicated to driving India&apos;s transition towards a net-zero economy.
                    KARO which means TO DO in Hindi, reflects our commitment to action and direction towards achieving carbon neutrality.
                    <br />
                    <br />
                    Net Zero Karo is a leading climate and sustainability education platform. Our comprehensive curriculum and specialized training programs address the urgent need for climate and ESG skills.
                    <br />
                    <br />

                    We empower individuals and organizations to navigate the transition to a net-zero future by providing in-depth knowledge, practical tools, and industry insights. With a focus on innovative learning, collaborative engagement, and cutting-edge technology, we inspire and equip climate leaders to drive meaningful change.
                </motion.p>
                <div className='bs w-full px-10 py-6 rounded-lg mt-10 relative bottom-[-10px] z-[-1]'>
                    <p className="text-center text-2xl font-semibold text-white">The Carbon Clock is ticking! Time to meet the <br /> two-degree target</p>
                    <div className="flex justify-between flex-wrap  sm:w-[60%] sm:mx-auto mt-10">

                        <Cricular text="Years" time={remainingTime.years} style={' px-5 py-4 '}/>
                        <Cricular text="Months" time={remainingTime.months} style={' px-3 py-4 '}/>
                        <Cricular text="Day" time={remainingTime.days} style={' px-6 py-4 '}/>
                        <Cricular text="Hour" time={remainingTime.hours} style={' px-5 py-4 '}/>
                        <Cricular text="Minute" time={remainingTime.minutes} style={' px-4 py-4 '}/>
                        <Cricular text="Second" time={remainingTime.seconds} style={' px-3 py-4 '}/>


                    </div>
                </div>
            </div>
        </div>
    );
};


const Cricular = ({ text, time,style }) => {
    return (
        <div className={"rounded-lg my-2 bg-white sm:w-[100px] max-w-[80px]"+style}>
            <p className=" text-center text-greyf">{text}</p>
            <p className="text-sm text-center">{time}</p>
        </div>
    )
}
export default Platform;
