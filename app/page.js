'use client'
import Hero from '@/Components/Hero/Hero'
import About from './about/page'
import Whyes from '@/Components/Features/Whyes'
import MySkill from '@/Components/MySkill/MySkill'
import MyProject from '@/Components/MyProject/MyProject'


export default async function Home() {
    return (
    <div className='ml-4'>
    <Hero/>
    <Whyes/>
    <About/>
    <MySkill/>
    <MyProject />
    </div>
  )
}
