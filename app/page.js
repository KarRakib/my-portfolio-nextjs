'use client'
import Hero from '@/Components/Hero/Hero'
import About from './about/page'
import Whyes from '@/Components/Features/Whyes'
import MySkill from '@/Components/MySkill/MySkill'
import MyProject from '@/Components/MyProject/MyProject'
import Contact from '@/Components/ContactForm/Contact'


export default async function Home() {
    return (
    <div className=''>
    <Hero/>
    <Whyes/>
    <About/>
    <MySkill/>
    <MyProject />
    <Contact/>
    </div>
  )
}
