import Navbar from '@/components/Navbar'
import React from 'react'
import laptop from '@/assets/img3.png'
import Image from 'next/image'
import c1 from '@/assets/comma3.png'
import c2 from '@/assets/comma4.png'
import { Footer } from '@/components/Footer'
import icon from '@/assets/icons/icon12.png'
import Heading from '@/components/Heading'
import Nzkacademy from '@/components/Nzkacademy'
import Popup from '@/components/Popup'
import { motion } from 'framer-motion'
import img from '@/assets/g10.png'
import heroimg from '@/assets/hero1.svg'
import { slideIn ,textVariant} from '@/utils/motion'
import { Parser } from 'html-to-react'


const academy = () => {
    return (
        <div>
            <Navbar />
            <Hero Title="Climate education with a difference." Desc="A platform dedicated to driving India's transition towards a net-zero economy." />
            <div className="w-full flex flex-wrap p-10  pb-10 mt-10">
                <motion.div className="sm:w-1/2 " variants={slideIn('left', 'tween', 0.1, 1)} initial="hidden" whileInView="show">
                    <Image src={laptop} className=' sm:max-w-[400px] mx-auto' />
                </motion.div>
                <div className="sm:w-1/2 sm:px-10 px-2 sm:pt-0">
                    <p className="text-green sm:text-5xl text-3xl font-semibold  text-center sm:text-left  ">Invest in your team’s capacity to respond to our changing world</p>
                    <Image src={c1} className='w-[40px] relative opacity-40 left-[-40px] mt-10' />
                    <p className=' text-xl mt-5 text-[#5D6180]'>We are entering into a values-based, circular and green economy. Companies that upskill their employees with the tools of transformation will be at the forefront of adapting to the changing business landscape.</p>
                    <p className=' text-xl mt-10 text-[#5D6180]'>But, there is a significant sustainability skills gap in most workforces.<span className='font-semibold'> Net Zero Karo </span>is the capacity-building educational platform equipping the global workforce with actionable sustainability skills for this changing business landscape.</p>
                    <Image src={c2} className='w-[40px] opacity-40 relative  mt-5 right-[-90%]' />
                </div>
            </div>

            <Popup />

            <Nzkacademy />

            {/* <div className="bg-img2 sm:p-10 p-4 flex flex-wrap">
                <div className="flex flex-col  sm:px-20 sm:my-10 md:w-[60%]">
                    <div className="bg-white md:p-10 p-6 rounded-lg md:w-[600px] w-full">
                        <Image src={book} className='w-[60px] ' />
                        <p className='text-lg mt-4 '>Learning format</p>
                        <ul className='card-list'>
                            <p className="text-sm text-greyf">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p>
                        </ul>
                    </div>
                    <div className="bg-white md:p-10 p-6 rounded-lg mt-4 sm:w-[600px] w-full">
                        <Image src={script} className='w-[60px]' />
                        <p className='text-lg mt-4 '>Learning format</p>
                        <ul className='card-list'>
                            <li>Voiceovers and closed captions</li>
                            <li>Scientifically validated resource links for further research</li>
                            <li>Self-paced online learning</li>
                            <li>Engaging & interactive graphics</li>
                            <li>80+ Interactive quizzes</li>
                        </ul>
                    </div>
                </div>
                <Image src={windmill} className='md:h-[500px] md:w-[40%] md:my-auto mx-auto sm:my-0 my-6' />
            </div> */}


         
            <div className="linearbggreen sm:py-20 sm:pt-4 py-4">
                <Heading text={"Academy USP  "} />
                {/* <p className=" mt-2 text-center sm:max-w-[50%] mx-auto mb-10">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p> */}
                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="linearbggreen sm:py-20 sm:pt-4 py-4">
                <Heading text={"Who is the climate academy for ? "} />
                {/* <p className=" mt-2 text-center sm:max-w-[50%] mx-auto mb-10">Our in-house team make sure everything is set up and configured for you to use. From data availability and completeness through to portal logins and training, we’ve got it covered.</p> */}
                <div className=" rounded-sm grid grid-flow-row	 sm:grid-cols-2 row-span-2 sm:px-20 px-4 gap-2 justify-center items-center w-full mt-10">
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                    <div className=" sm:w-[600px] flex w-full my-4 sm:mx-4   sm:p-6 p-4  rounded-lg">
                        <Image src={icon} className='h-[50px] w-[50px] md:flex hidden' />
                        <div className=' px-4 flex flex-col ' >
                            <div className='flex'>
                                <Image src={icon} className='h-[40px] w-[40px] md:hidden flex' />
                                <p className="md:text-2xl text-xl md:ml-0 ml-2 ">Dedicated community <br /> platform</p>
                            </div>
                            <p className='mt-2 text-greyf'>At NetZeroKaro we are a diverse bunch of people all driven by the same purpose to tackle the world’s environmental challenges. It might be our job but it is also our personal passion.</p>
                        </div>
                    </div>
                  
                </div>
                
            </div>
            <div className="bg-[#D7FFE4] flex justify-center items-center flex-col sm:m-10 m-4 rounded-xl sm:p-12 p-8">
                <p className="text-uppercase sm:text-4xl text-3xl text-center font-semibold">Make Contact </p>
                <p className="font-extralight text-center mt-2"> Connect for a free Introduction Call</p>
                <button className='bg-green text-white sm:px-20 px-6 py-4 rounded-full mt-6'>Contact us </button>
                <Image src={img} className='sm:absolute   right-[40px] w-[180px]' />
            </div>
            <Footer />
        </div>
    )
}
const Hero = ({Title,Desc,SuperTitle}) => {
    return (
      <div  className=' w-full sm:h-[80vh] h-full flex sm:flex-row flex-col justify-center items-center  linearbggreen sm:px-0'>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden"  whileInView="show" className="sm:w-[50%] w-full flex justify-center mt-10">
          <div className='p-2 sm:pl-8 sm:p-4 sm:px-20'>
            <div className='flex  items-center mx-auto'>
                <p className="text-green text-2xl  text-center sm:mb-0 mb-2 mr-2">{SuperTitle}</p>
            </div>
            <motion.div variants={textVariant(0.8)} className='text-black text-center sm:text-left sm:text-6xl text-4xl font-[800] gradienttextbg'>{Title}</motion.div>
            
            <motion.p variants={textVariant(0.6)} className=" leading-6 mt-4 text-center sm:text-left">{Parser().parse(Desc)}</motion.p>
            <div className="flex items-center mt-8 sm:justify-start justify-center">
              <button className="rounded-full bg-green text-white px-12 text-lg py-3">Explore</button>
            </div>
          </div>
        </motion.div>
        <div className="sm:w-[50%] flex justify-end py-20 w-full">
          <Image src={heroimg} className='w-[80%] mx-auto' />
        </div>
      </div>
    )
  }
export default academy