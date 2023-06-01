import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroHome from '@/components/HeroHome'
import NzkCatalyst from '@/components/NzkCatalyst'
import Roadnz from '@/components/Roadnz'
import Story from '@/components/Story'
import Challenges from '@/components/Challenges'
import Solutions from '@/components/Solutions'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
      <Navbar/>
      <HeroHome/>
      <NzkCatalyst/>
      <Roadnz/>
      <Story/>
      <Challenges/>
      <Solutions/>
   </div>
  )
}
