import { Disclosure,Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

function Accordian() {
    return (
        <div>
            <Disclosure className="bg-white sm:p-4 p-2 my-10" defaultOpen>
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white sm:p-4 p-2'>
                            <p className='text-left '>What will it cost and how long will it take to to Get Your Service For my company Bill Board ?</p>
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
                            <Disclosure.Panel className={'sm:p-6 p-4 sm:pl-16 pt-0 bg-white rounded-lg text-black'}>
                                <p>Time:  We are a Digital Signage Software (The Software that runs onDigital Menu Boards, Advertising Screens and Digital Billboards.) Startup, dedicated to revolutionising the advertising industry. Our platform helps businesses create dynamic and engaging content to display on digital signage screens in various settings. We are fast-growing company with a passionate team committed to delivering the best experience to our clients.Note: Above Images are of Locations where .</p>
                                <p className='mt-4'>Cost:  Pricing is based on the estimated number of days (hours) required for building the product. Most web/mobile apps with standard features along with costs from USD</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                    
                )}
                

            </Disclosure>
            <Disclosure className="bg-white sm:p-4 p-2 my-10" >
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white sm:p-4 p-2'>
                            <p className='text-left '>What will it cost and how long will it take to to Get Your Service For my company Bill Board ?</p>
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
                            <Disclosure.Panel className={'sm:p-6 p-4 sm:pl-16 pt-0 bg-white rounded-lg text-black'}>
                                <p>Time:  We are a Digital Signage Software (The Software that runs onDigital Menu Boards, Advertising Screens and Digital Billboards.) Startup, dedicated to revolutionising the advertising industry. Our platform helps businesses create dynamic and engaging content to display on digital signage screens in various settings. We are fast-growing company with a passionate team committed to delivering the best experience to our clients.Note: Above Images are of Locations where .</p>
                                <p className='mt-4'>Cost:  Pricing is based on the estimated number of days (hours) required for building the product. Most web/mobile apps with standard features along with costs from USD</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                    
                )}
                

            </Disclosure>
            <Disclosure className="bg-white sm:p-4 p-2 my-10" >
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='my-10 rounded-lg'>
                        <Disclosure.Button className='flex bg-white sm:p-4 p-2'>
                            <p className='text-left '>What will it cost and how long will it take to to Get Your Service For my company Bill Board ?</p>
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
                            <Disclosure.Panel className={'sm:p-6 p-4 sm:pl-16 pt-0 bg-white rounded-lg text-black'}>
                                <p>Time:  We are a Digital Signage Software (The Software that runs onDigital Menu Boards, Advertising Screens and Digital Billboards.) Startup, dedicated to revolutionising the advertising industry. Our platform helps businesses create dynamic and engaging content to display on digital signage screens in various settings. We are fast-growing company with a passionate team committed to delivering the best experience to our clients.Note: Above Images are of Locations where .</p>
                                <p className='mt-4'>Cost:  Pricing is based on the estimated number of days (hours) required for building the product. Most web/mobile apps with standard features along with costs from USD</p>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                    
                )}
                

            </Disclosure>
        </div>
    )
}

export default Accordian;