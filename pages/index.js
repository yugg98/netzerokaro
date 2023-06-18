import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroHome from '@/components/Home/HeroHome'
import NzkCatalyst from '@/components/Home/NzkCatalyst'
import Roadnz from '@/components/Home/Roadnz'
import Story from '@/components/Home/Story'
import Challenges from '@/components/Home/Challenges'
import Solutions from '@/components/Home/Solutions'
import { Footer } from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='max-w-full overflow-x-hidden'>
      <Navbar/>
      {/* <HeroHome/> */}
      <NzkCatalyst/>
      <Roadnz/>
      <Story/>
      <Challenges/>
      <Solutions/>
      <Footer/>
   </div>
  )
}
