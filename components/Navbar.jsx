import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { navVariants,item } from '@/utils/motion';
import Link from 'next/link'
const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
        >
            <div className='flex justify-between px-4 items-center nav'>
                <Image className='' src={logo} />
                <ul className='sm:flex hidden'>
                    <motion.li variants={item} initial="hidden"  whileInView="show">Company</motion.li>
                    <li><Link href="/academy">Academy</Link></li>
                    <li><Link href="/">Market Place</Link></li>
                    <li><Link href="/">Green Store</Link></li>
                    <li><Link href="/">Media Center </Link></li>
                    <li><Link href="/">Get Envolved</Link></li>
                </ul>
                <button className= "bg-[#363636] hidden text-white px-5 py-2 rounded-full sm:block ">Get Started</button>
                <div className={open ?"sidebar z-[20] w-[90%]":"hidden"}>
                    <ul className='sm:hidden flex flex-col'>
                         <li><Link href="/">Company</Link></li>
                         <li><Link href="/">Academy</Link></li>
                         <li><Link href="/">Market Place</Link></li>
                         <li><Link href="/">Green Store</Link></li>
                         <li><Link href="/">Media Center </Link></li>
                         <li><Link href="/">Get Envolved</Link></li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar