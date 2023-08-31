'use client'

import Button from "@/Components/Button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const About = () => {
    return (
        <div className='py-7  md:w-[1200px] lg:w-[1550px] mx-auto  text-white '>
            <h3 className='text-4xl font-semibold hover:underline decoration-[#ff004f] underline-offset-8 decoration-4 Transition'> ABOUT ME</h3>
            <h4 className='text-start text-xl my-4 ml-3'> Hi, This is Kar Rakib</h4>
           <div className="">
           <p className='text-start ml-5'> A Passionate MERN Stack Developer and dedicated to my work. I worked varies projects with modern technologies like javascript, react, node js, golang.
                Most of my time <br /> I design and build digital products. I prefer to keep learning, continue challenging myself,and do interesting things that matter</p> <br />
            <p className='text-start hidden md:block ml-3'> A Passionate Web Developer and dedicated to my work. I worked varies projects with modern technologies like javascript, react, node js, golang.
                Most of my time <br /> I design and build digital products. I prefer to keep learning, continue challenging myself,and do interesting things that matter</p>
           </div>
           <h3 className='text-start mt-4 font-bold text-[#b73e77] rounded-lg'> FIND WITH ME</h3>
            <div className='flex gap-1'>
                <Button><a href="https://www.facebook.com/KRA24587" target="_blank"> <FaFacebook className='text-xl mx-1' /> </a></Button>
                <Button> <a href="https://github.com/KarRakib" target="_blank">  <FaGithub className='text-xl mx-1' /> </a></Button>
                <Button><a href="https://www.linkedin.com/in/kar-rakib27/" target="_blank"> <FaLinkedin className='text-xl mx-1' /> </a></Button>
                
                
            </div>
        </div>
    );
};

export default About;