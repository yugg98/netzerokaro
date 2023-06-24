import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

function Accordian() {
    return (
        <div>
            <Disclosure className="bg-white   my-10" defaultOpen>
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-4 rounded-lg'>
                        <Disclosure.Button className='flex bg-white sm:p-4 p-2 items-center'>
                            <p className='text-left text-xl'>Who is Net Zero Karo?</p>
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
                            <Disclosure.Panel className={' sm:pl-8 pt-0 bg-white rounded-lg text-black'}>
                                <p>Net Zero Karo is a climate startup from India with the vision to bring Climate Action into the DNA of every company.
                                    <br />Through our courses, employees can not only drive climate action in their company and make an immediate impact but also connect with others facing the same big challenges and share best practices and experiences, creating a global response for Climate Action.</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>

                )}


            </Disclosure>
            <Disclosure className="bg-white sm:p-4 p-2 my-4" >
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white items-center '>
                            <p className='text-left text-xl'>What can you expect from the platform?</p>
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
                            <Disclosure.Panel className={' p-4 sm:pl-8 pt-0 bg-white rounded-lg text-black'}>
                                <p>The Net Zero Karo platform is for any professional who wants to build their capacity in:</p>
                                <ul className='list-disc'>
                                    <li>Applying Sustainability to business decision-making</li>
                                    <li>Taking action on climate change</li>
                                    <li>Adopting the circular economy</li>
                                </ul>
                            </Disclosure.Panel>
                        </Transition>
                    </div>

                )}


            </Disclosure>
            <Disclosure className="bg-white sm:p-4 p-2 my-4" >
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white items-center '>
                            <p className='text-left text-xl'>For whom is the Net Zero Karo Academy?</p>
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
                            <Disclosure.Panel className={' p-4 sm:pl-8 pt-0 bg-white rounded-lg text-black'}>
                                <p>The academy provides climate education for your entire workforce. We offer basic climate action knowledge for the entire workforce as well as industry, and department. We also have deep dives, and advanced training for selected audiences such as HR, marketing, finance, management, and many more.</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>

                )}


            </Disclosure>
            <Disclosure className="bg-white sm:p-4 p-2 my-4" >
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white items-center '>
                            <p className='text-left text-xl'>How can my company join the Net Zero Karo Academy?</p>
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
                            <Disclosure.Panel className={' p-4 sm:pl-8 pt-0 bg-white rounded-lg text-black'}>
                                <p>Write to us via our contact form and we will get back to you shortly with all the relevant details.</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>

                )}


            </Disclosure>
            <Disclosure className="bg-white sm:p-4 p-2 my-4" >
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white items-center '>
                            <p className='text-left text-xl'>Are you open to partnerships?</p>
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
                            <Disclosure.Panel className={' p-4 sm:pl-8 pt-0 bg-white rounded-lg text-black'}>
                                <p>Yes! Reach out to find out more</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>

                )}


            </Disclosure>
        </div>
    )
}

export default Accordian;