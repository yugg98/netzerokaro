import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import img1 from '@/assets/img4.png'
import img2 from '@/assets/imglit.png'
import img3 from '@/assets/imgcir.png'

import plus from '@/assets/plus.png'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import modal1 from '@/assets/modal1.png'
const Popup = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen1, setIsOpen1] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)


    return (
        <div>  <div className="bg-img2 mt-0 md:p-6  ">
            <Heading text="Core Learning Programs" color={true} />
            <p className="text-white text-center mt-4 md:px-20 md:mb-10 px-4">Are you eager to make a difference in the fight against climate change within your workplace? Are you seeking ways to leverage your current job to address this pressing challenge without having to change careers? If so, our course is designed for you. Become a 'Climate Intrapreneur' and discover the essential skills needed to drive and influence critical initiatives within businesses. This course is open to anyone who is passionate about driving change and making a positive impact.</p>
            <div className="flex justify-between flex-wrap  mt-8 overflow-hidden md:px-10 px-4">
                <div className="flex flex-row justify-center max-w-[380px] items-center">
                    <div className="bg-white rounded-xl ">
                        <Image src={img1} className='' />
                        <div className="flex justify-between mt-2 p-6 pb-0">
                            <div >
                                <p className="text-sm text-green">Part One</p>
                                <p className="font-semibold ">Sustainability</p>
                            </div>
                            <button className='bg-green rounded-full p-2 ' onClick={() => setIsOpen(true)}>
                                <Image src={plus} className='w-[28px]' />
                            </button>
                        </div>
                        <div className='p-6 pt-4'>
                            <p className="text-sm text-green">Key Content</p>
                            <p className="text-[#08103A] mb-4">Sustainability terminology, how to take accountability and maintain integrity in business, and application to sustainability in the business context</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center max-w-[380px] items-center sm:mt-0 mt-4">
                    <div className="bg-white rounded-xl ">
                        <Image src={img2} className='' />
                        <div className="flex justify-between mt-2 p-6 pb-0">
                            <div >
                                <p className="text-sm text-green">Part Two</p>
                                <p className="font-semibold ">Climate Literacy</p>
                            </div>
                            <button className='bg-green rounded-full p-2 ' onClick={() => setIsOpen1(true)}>
                                <Image src={plus} className='w-[28px]' />
                            </button>
                        </div>
                        <div className='p-6 pt-4'>
                            <p className="text-sm text-green">Key Content</p>
                            <p className="text-[#08103A] mb-4">Climate key terms and concepts, measuring impacts, and approaches on taking action. Case studies and an accompanying regulation guide are included</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center max-w-[380px] items-center sm:mt-0 mt-4 sm:mb-0 mb-8">
                    <div className="bg-white rounded-xl ">
                        <Image src={img3} className='' />
                        <div className="flex justify-between mt-2 p-6 pb-0">
                            <div >
                                <p className="text-sm text-green">Part Three</p>
                                <p className="font-semibold ">The Circular Economy</p>
                            </div>
                            <button className='bg-green rounded-full p-2 ' onClick={() => setIsOpen2(true)}>
                                <Image src={plus} className='w-[28px]' />
                            </button>
                        </div>
                        <div className='p-6 pt-4'>
                            <p className="text-sm text-green">Key Content</p>
                            <p className="text-[#08103A] mb-4">What the circular economy is, benefits and opportunities, the transition from a linear to circular economy. Case studies and an acronym decoder are included</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center  ">
                        {/* The actual dialog panel  */}
                        <Dialog.Panel className="w-full md:max-w-[80%] max-w-[99%] rounded bg-white md:p-10 p-2">
                            <div className="flex w-full justify-between">
                            <Dialog.Title className=" text-3xl">+ Sustainability Skills</Dialog.Title>
                            <Dialog.Title className=" text-3xl" onClick={()=>setIsOpen(false)}>Close</Dialog.Title>

                            </div>

                            <div className='w-full h-full overflow-scroll'>
                                <div className="flex w-full flex-wrap overflow-y-scroll">
                                    <div className='sm:w-1/2 mt-2 md:border-r-[1px] p-6 border-[#CECECE]'>
                                        <Image src={modal1} />
                                        <p className="text-lg text-greyf mt-2">
                                            From the basic vocabulary to actionable how-to tools, learn the practical application of sustainability in all its forms, as a technical skill set as it relates to your day-to-day business operations and workplace role. <br />
                                            Learn what sustainability is and how it applies to all businesses, understand core concepts and approaches, gain general skills for applying sustainability such as impact assessment.
                                        </p>
                                    </div>
                                    <div className='sm:w-1/2 md:p-10 py-5 p-2'>
                                        <p className="text-2xl mx-auto">Sustainability Foundations Program</p>
                                        <ul className='mt-4'>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>

                                        </ul>
                                        <p className=" text-greyf mt-4">Through distinct, dedicated learning experiences, you will first dive into ensuring your foundational understanding of sustainability is solid -- examining what it is, what it is not, the four different dimensions of sustainability, planetary boundaries, externalities of pollution, emerging global sustainability regulations, green myths, and greenwashing, and so much more.</p>
                                        <button className='text-green text-lg mt-6'>Get your Certificate of Completion</button>

                                        <p className=" text-greyf mt-4">You can earn a skill badge. To do so, make sure to successfully complete the quiz at the end of each module within every chapter, as well as the 5-part quiz at the end of each chapter. Then, upon completion of the entire Core Learning Experience, you will gain your certificate of completion.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                <button className=" bg-green rounded-full px-8 text-white py-4 mx-auto mt-4">Get Started Now</button>
                                </div>
                            </div>
                            {/* ... */}
                        </Dialog.Panel>

                    </div>
                </div>
            </Dialog>
            <Dialog
                open={isOpen1}
                onClose={() => setIsOpen1(false)}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center  ">
                        {/* The actual dialog panel  */}
                        <Dialog.Panel className="w-full md:max-w-[80%] max-w-[99%] rounded bg-white md:p-10 p-2">
                            <div className="flex w-full justify-between">
                            <Dialog.Title className=" text-3xl">+ Sustainability Skills</Dialog.Title>
                            <Dialog.Title className=" text-3xl" onClick={()=>setIsOpen1(false)}>Close</Dialog.Title>

                            </div>

                            <div className='w-full h-full overflow-scroll'>
                                <div className="flex w-full flex-wrap overflow-y-scroll">
                                    <div className='sm:w-1/2 mt-2 md:border-r-[1px] p-6 border-[#CECECE]'>
                                        <Image src={modal1} />
                                        <p className="text-lg text-greyf mt-2">
                                            From the basic vocabulary to actionable how-to tools, learn the practical application of sustainability in all its forms, as a technical skill set as it relates to your day-to-day business operations and workplace role. <br />
                                            Learn what sustainability is and how it applies to all businesses, understand core concepts and approaches, gain general skills for applying sustainability such as impact assessment.
                                        </p>
                                    </div>
                                    <div className='sm:w-1/2 md:p-10 py-5 p-2'>
                                        <p className="text-2xl mx-auto">Sustainability Foundations Program</p>
                                        <ul className='mt-4'>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>

                                        </ul>
                                        <p className=" text-greyf mt-4">Through distinct, dedicated learning experiences, you will first dive into ensuring your foundational understanding of sustainability is solid -- examining what it is, what it is not, the four different dimensions of sustainability, planetary boundaries, externalities of pollution, emerging global sustainability regulations, green myths, and greenwashing, and so much more.</p>
                                        <button className='text-green text-lg mt-6'>Get your Certificate of Completion</button>

                                        <p className=" text-greyf mt-4">You can earn a skill badge. To do so, make sure to successfully complete the quiz at the end of each module within every chapter, as well as the 5-part quiz at the end of each chapter. Then, upon completion of the entire Core Learning Experience, you will gain your certificate of completion.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                <button className=" bg-green rounded-full px-8 text-white py-4 mx-auto mt-4">Get Started Now</button>
                                </div>
                            </div>
                            {/* ... */}
                        </Dialog.Panel>

                    </div>
                </div>
            </Dialog>
            <Dialog
                open={isOpen2}
                onClose={() => setIsOpen2(false)}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center  ">
                        {/* The actual dialog panel  */}
                        <Dialog.Panel className="w-full md:max-w-[80%] max-w-[99%] rounded bg-white md:p-10 p-2">
                            <div className="flex w-full justify-between">
                            <Dialog.Title className=" text-3xl">+ Sustainability Skills</Dialog.Title>
                            <Dialog.Title className=" text-3xl" onClick={()=>setIsOpen2(false)}>Close</Dialog.Title>

                            </div>

                            <div className='w-full h-full overflow-scroll'>
                                <div className="flex w-full flex-wrap overflow-y-scroll">
                                    <div className='sm:w-1/2 mt-2 md:border-r-[1px] p-6 border-[#CECECE]'>
                                        <Image src={modal1} />
                                        <p className="text-lg text-greyf mt-2">
                                            From the basic vocabulary to actionable how-to tools, learn the practical application of sustainability in all its forms, as a technical skill set as it relates to your day-to-day business operations and workplace role. <br />
                                            Learn what sustainability is and how it applies to all businesses, understand core concepts and approaches, gain general skills for applying sustainability such as impact assessment.
                                        </p>
                                    </div>
                                    <div className='sm:w-1/2 md:p-10 py-5 p-2'>
                                        <p className="text-2xl mx-auto">Sustainability Foundations Program</p>
                                        <ul className='mt-4'>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>
                                            <li> <span className='font-semibold'>Chapter 1:</span> Introduction to Sustainability</li>

                                        </ul>
                                        <p className=" text-greyf mt-4">Through distinct, dedicated learning experiences, you will first dive into ensuring your foundational understanding of sustainability is solid -- examining what it is, what it is not, the four different dimensions of sustainability, planetary boundaries, externalities of pollution, emerging global sustainability regulations, green myths, and greenwashing, and so much more.</p>
                                        <button className='text-green text-lg mt-6'>Get your Certificate of Completion</button>

                                        <p className=" text-greyf mt-4">You can earn a skill badge. To do so, make sure to successfully complete the quiz at the end of each module within every chapter, as well as the 5-part quiz at the end of each chapter. Then, upon completion of the entire Core Learning Experience, you will gain your certificate of completion.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                <button className=" bg-green rounded-full px-8 text-white py-4 mx-auto mt-4">Get Started Now</button>
                                </div>
                            </div>
                            {/* ... */}
                        </Dialog.Panel>

                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Popup