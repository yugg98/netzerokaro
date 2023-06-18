import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { navVariants, item } from '@/utils/motion';
import Link from 'next/link'
import { AcademicCapIcon, Bars3Icon, BookmarkSquareIcon, XMarkIcon } from '@heroicons/react/20/solid';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
        >
            <div className='flex justify-between px-4 py-3 items-center nav 	 top-0 left-0'>
                <Link href="/"><Image className='w-[180px]' src={logo} /></Link>
                <ul className='sm:flex hidden'>
                    <motion.li variants={item} initial="hidden" whileInView="show"><Link href="/company">Company</Link></motion.li>
                    <li><Link href="academy">Academy</Link></li>
                    <li><Link href="marketplace">Market Place</Link></li>
                    <li><Link href="greenstore">Green Store</Link></li>
                    <li><Link href="mediacenter">Media Center </Link></li>
                    <li><Link href="/getinvolved">Get Envolved</Link></li>
                </ul>
                {open ? <XMarkIcon className='sm:hidden relative w-[35px] z-[2010]' onClick={() => setOpen(false)} /> : <Bars3Icon className='sm:hidden relative w-[35px] z-[100]' onClick={() => setOpen(true)} />}
                <button className="bg-[#363636] hidden text-white px-5 py-2 rounded-full sm:block ">Get Started</button>
                <div className={open ? "sidebar z-[200] w-[90%] py-12 px-5  bg-white" : "hidden"}>
                    <ul className='sm:hidden flex flex-col'>
                        <li>
                            
                            <Link href="/" className='flex text-xl hover:bg-grey rounded-lg text-center items-center p-4'> <AcademicCapIcon className='w-[36px] mr-2 text-green' /> Company  </Link>
                        </li>
                        <li>
                            
                            <Link href="/" className='flex text-xl hover:bg-grey rounded-lg text-center items-center p-4'> <AcademicCapIcon className='w-[36px] mr-2 text-green' /> Company  </Link>
                        </li>
                        <li>
                            
                            <Link href="/" className='flex text-xl hover:bg-grey rounded-lg text-center items-center p-4'> <AcademicCapIcon className='w-[36px] mr-2 text-green' /> Company  </Link>
                        </li>
                        <li>
                            
                            <Link href="/" className='flex text-xl hover:bg-grey rounded-lg text-center items-center p-4'> <AcademicCapIcon className='w-[36px] mr-2 text-green' /> Company  </Link>
                        </li>
                        <li>
                            
                            <Link href="/" className='flex text-xl hover:bg-grey rounded-lg text-center items-center p-4'> <AcademicCapIcon className='w-[36px] mr-2 text-green' /> Company  </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar