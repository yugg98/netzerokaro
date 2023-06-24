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
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
const Popup = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen1, setIsOpen1] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)


    return (
        <div>  <div className="bg-img2 mt-0 md:p-6  ">
            <Heading text="Core Learning Programs" color={true} />
            <p className="text-white text-center mt-4 md:px-20 md:mb-10 px-4">Are you eager to make a difference in the fight against climate change within your workplace? Are you seeking ways to leverage your current job to address this pressing challenge without having to change careers? If so, our course is designed for you. Become a &apos;Climate Intrapreneur&apos; and discover the essential skills needed to drive and influence critical initiatives within businesses. This course is open to anyone who is passionate about driving change and making a positive impact.</p>
            <div className="flex justify-between flex-wrap  mt-8 overflow-hidden md:px-10 px-4">
                <div className="flex flex-row justify-center max-w-[380px]  items-center">
                    <div className="bg-white rounded-xl min-h-[500px]">
                        <Image src={img1} className='w-full' />
                        <div className="flex justify-between mt-2 p-6 pb-0">
                            <div >
                                <p className="text-sm text-green">Part One</p>
                                <p className="font-semibold ">Net Zero Essentials</p>
                            </div>
                            <button className='bg-green rounded-full p-2 ' onClick={() => setIsOpen(true)}>
                                <Image src={plus} className='w-[28px]' />
                            </button>
                        </div>
                        <div className='p-6 pt-4'>
                            <p className="text-[#08103A] mb-4">A comprehensive understanding of the principles, strategies, and practical steps necessary to transition their organizations toward a net-zero future</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center max-w-[380px]  items-center sm:mt-0 mt-4">
                    <div className="bg-white rounded-xl min-h-[500px]">
                        <Image src={img2} className='' />
                        <div className="flex justify-between mt-2 p-6 pb-0">
                            <div >
                                <p className="text-sm text-green">Part Two</p>
                                <p className="font-semibold ">Climate Change 101</p>
                            </div>
                            <button className='bg-green rounded-full p-2 ' onClick={() => setIsOpen1(true)}>
                                <Image src={plus} className='w-[28px]' />
                            </button>
                        </div>
                        <div className='p-6 pt-4'>
                            <p className="text-[#08103A] mb-4">A comprehensive understanding of the science, impacts, and solutions related to climate change. Climate key terms and concepts, measuring impacts, and approaches to taking action. </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center max-w-[380px]  items-center sm:mt-0 mt-4 sm:mb-0 mb-8">
                    <div className="bg-white rounded-xl min-h-[500px]">
                        <Image src={img3} className='' />
                        <div className="flex justify-between mt-2 p-6 pb-0">
                            <div >
                                <p className="text-sm text-green">Part Three</p>
                                <p className="font-semibold ">The ABCs of Circular Economy</p>
                            </div>
                            <button className='bg-green rounded-full p-2 ' onClick={() => setIsOpen2(true)}>
                                <Image src={plus} className='w-[28px]' />
                            </button>
                        </div>
                        <div className='p-6 pt-4'>
                            <p className="text-[#08103A] mb-4">A comprehensive understanding of the principles and practices of the circular economy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50 max-h-screen"
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
                                <Dialog.Title className=" sm:text-3xl text-2xl my-2 mx-2">+ Net Zero Essentials</Dialog.Title>
                                <Dialog.Title className=" text-3xl" onClick={() => setIsOpen(false)}><XMarkIcon className='w-[40px]' /></Dialog.Title>

                            </div>

                            <div className='w-full h-full '>
                                <div className="flex w-full flex-wrap overflow-y-scroll">
                                    <div className='sm:w-1/2 mt-2 md:border-r-[1px] p-6 border-[#CECECE]'>
                                        <Image src={modal1} />
                                        <p className="text-green my-2">Course Overview</p>
                                        <p className="text-lg text-greyf ">
                                            The Net Zero Essentials course is designed to provide corporate professionals with a comprehensive understanding of the principles, strategies, and practical steps necessary to transition their organizations toward a net-zero future. Through a combination of theoretical knowledge and practical insights, participants will gain the necessary skills and expertise to drive sustainable change within their organizations.
                                        </p>
                                    </div>
                                    <div className='sm:w-1/2 md:p-10 py-5 p-6'>
                                        <p className="text-2xl mx-auto">Course Highlights:</p>
                                        <MyDialog />
                                        <p className=" text-greyf mt-4">
                                        By completing the Net Zero Essentials course, participants will be equipped with the knowledge and tools to drive sustainable change within their organizations, contribute to the global net-zero agenda, and position their companies as leaders in the transition to a sustainable future.
                                        </p>
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
                className="relative z-50 max-h-screen"
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
                                <Dialog.Title className=" sm:text-3xl text-2xl my-2 mx-2">+ Climate Change 101</Dialog.Title>
                                <Dialog.Title className=" text-3xl" onClick={() => setIsOpen1(false)}><XMarkIcon className='w-[40px]' /></Dialog.Title>

                            </div>

                            <div className='w-full h-full '>
                                <div className="flex w-full flex-wrap overflow-y-scroll">
                                    <div className='sm:w-1/2 mt-2 md:border-r-[1px] p-6 border-[#CECECE]'>
                                        <Image src={modal1} />
                                        <p className="text-green my-2">Course Overview</p>
                                        <p className="text-lg text-greyf ">
                                        The Climate Change 101 course is designed to provide corporate professionals with a comprehensive understanding of the science, impacts, and solutions related to climate change. Participants will gain essential knowledge to effectively address climate change challenges and contribute to sustainability initiatives within their organizations.
                                        </p>
                                    </div>
                                    <div className='sm:w-1/2 md:p-10 py-5 p-6'>
                                        <p className="text-2xl mx-auto">Course Highlights:</p>
                                        <MyDialog1 />
                                        <p className=" text-greyf mt-4">
                                        By completing the Climate Change 101 course, participants will be equipped with a solid understanding of climate change science, its impacts, and the strategies to address it. They will be empowered to drive sustainability initiatives within their organizations and contribute to a more resilient and sustainable future.
                                        </p>
                                        <button className='text-green text-lg mt-6'>Get your Certificate of Completion</button>

                                        <p className=" text-greyf mt-4">You can earn a skill badge. To do so, make sure to successfully complete the quiz at the end of each module within every chapter. You will gain your certificate of completion once you complete the entire course. </p>
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
                className="relative z-50 max-h-screen"
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
                                <Dialog.Title className=" sm:text-3xl text-2xl my-2 mx-2">+ Climate Change 101</Dialog.Title>
                                <Dialog.Title className=" text-3xl" onClick={() => setIsOpen2(false)}><XMarkIcon className='w-[40px]' /></Dialog.Title>

                            </div>

                            <div className='w-full h-full '>
                                <div className="flex w-full flex-wrap overflow-y-scroll">
                                    <div className='sm:w-1/2 mt-2 md:border-r-[1px] p-6 border-[#CECECE]'>
                                        <Image src={modal1} />
                                        <p className="text-green my-2">Course Overview</p>
                                        <p className="text-lg text-greyf ">
                                        The ABCs of Circular Economy course is designed to provide corporate professionals with a comprehensive understanding of the principles and practices of the circular economy. Participants will explore how to transition from a linear "take-make-dispose" model to a regenerative and sustainable approach that maximizes resource efficiency and minimizes waste.
                                        </p>
                                    </div>
                                    <div className='sm:w-1/2 md:p-10 py-5 p-6'>
                                        <p className="text-2xl mx-auto">Course Highlights:</p>
                                        <MyDialog2 />
                                        <p className=" text-greyf mt-4">
                                        By completing the ABCs of Circular Economy course, participants will gain the knowledge and tools to incorporate circular economy principles into their business strategies. They will understand how to identify circular opportunities, implement circular business models, and drive the transition to a more sustainable and circular future.
                                        </p>
                                        <button className='text-green text-lg mt-6'>Get your Certificate of Completion</button>

                                        <p className=" text-greyf mt-4">You can earn a skill badge. To do so, make sure to successfully complete the quiz at the end of each module within every chapter. You will gain your certificate of completion once you complete the entire course. </p>
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
const MyDialog = () => {
    const [open, setOpen] = useState()
    return (
        <>
            <div>
                <Disclosure className="bg-white mt-4" defaultOpen>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Understanding Net Zero: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will cover the fundamental concepts of net-zero emissions, including the science behind climate change, greenhouse gas accounting, and the importance of setting ambitious carbon reduction targets.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Developing a Net-Zero Strategy: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will learn how to develop a robust net-zero strategy tailored to their organization's unique needs. Topics covered include stakeholder engagement, risk assessment, carbon footprint analysis, and goal-setting frameworks.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Implementing Sustainable Practices: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will focus on practical steps for implementing sustainable practices across various organizational functions. Topics include energy efficiency, renewable energy adoption, waste reduction, supply chain management, and sustainable procurement.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Measuring and Reporting Progress: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will learn how to effectively measure, track, and report progress towards their organization's net-zero goals. The module will cover key performance indicators, data collection methodologies, and reporting frameworks such as the Greenhouse Gas Protocol and CDP</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Measuring and Reporting Progress: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will learn how to effectively measure, track, and report progress towards their organization's net-zero goals. The module will cover key performance indicators, data collection methodologies, and reporting frameworks such as the Greenhouse Gas Protocol and CDP</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
            </div>
        </>
    )
}
const MyDialog1 = () => {
    const [open, setOpen] = useState()
    return (
        <>
            <div>
                <Disclosure className="bg-white mt-4" defaultOpen>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Fundamentals of Climate Change: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will cover the basic principles of climate change, including the greenhouse effect, the causes of climate change, and the role of human activities. Participants will gain a solid foundation in climate science.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Developing a Net-Zero Strategy: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will learn how to develop a robust net-zero strategy tailored to their organization's unique needs. Topics covered include stakeholder engagement, risk assessment, carbon footprint analysis, and goal-setting frameworks.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Impacts and Risks: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will explore the various impacts of climate change on ecosystems, communities, and economies. The module will delve into topics such as rising temperatures, extreme weather events, sea-level rise, and biodiversity loss.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Mitigation and Adaptation Strategies: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will focus on solutions to mitigate and adapt to climate change. Participants will learn about renewable energy, energy efficiency, sustainable transportation, circular economy practices, and climate-resilient infrastructure.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Corporate Climate Action: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will guide participants on how corporations can take meaningful climate action. Topics include setting science-based targets, carbon footprint measurement, sustainable supply chain management, stakeholder engagement, and the integration of climate considerations into corporate strategies.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
            </div>
        </>
    )
}
const MyDialog2 = () => {
    const [open, setOpen] = useState()
    return (
        <>
            <div>
                <Disclosure className="bg-white mt-4" defaultOpen>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Introduction to Circular Economy: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will provide an overview of the circular economy concept, its benefits, and its role in addressing environmental challenges. Participants will learn about the key principles of circularity, such as designing for durability, reuse, and recycling.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Circular Business Models: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will explore different circular business models and strategies that promote closed-loop systems. Topics covered include product lifecycle extension, sharing economy platforms, remanufacturing, and waste-to-resource conversion.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Circular Supply Chains:  </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>This module will focus on integrating circularity into supply chain management. Participants will learn about sustainable sourcing, reverse logistics, product recovery, and the implementation of circular procurement practices.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
                <Disclosure className="bg-white  " >
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <div className=' rounded-lg'>
                            <Disclosure.Button className='flex bg-white items-center justify-between w-full'>
                                <p className='text-left text-lg'>Circular Design and Innovation: </p>
                                <ChevronRightIcon className={open ? 'rotate-90 transform w-[40px]' : 'w-[40px]'} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-700 ease-out"
                                enterFrom="transform z-[-100] opacity-0"
                                enterTo="transform  z-[100] opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className={' bg-white rounded-lg text-black'}>
                                    <p>Participants will dive into the principles of circular design and explore innovative solutions that enable circularity. Topics covered include eco-design, biomimicry, cradle-to-cradle design, and the use of disruptive technologies for circular innovation.</p>
                                </Disclosure.Panel>
                            </Transition>
                        </div>

                    )}


                </Disclosure>
            
            </div>
        </>
    )
}
export default Popup