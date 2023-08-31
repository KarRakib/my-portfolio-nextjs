"use clinet"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
    const form  = useRef();

    const sendEmail =  async(e) => {
        e.preventDefault()
        const formData = new FormData(form.current);

        // Get individual form values
        const userName = formData.get('user_name');
        const userPhone = formData.get('user_phone');
        const userEmail = formData.get('user_email');
        const userSubject = formData.get('user_subject');
        const message = formData.get('message');
    
        console.log('Name:', userName);
        console.log('Phone:', userPhone);
        console.log('Email:', userEmail);
        console.log('Subject:', userSubject);
        console.log('Message:', message);
        try {
            await emailjs.sendForm(
                'service_f9l0qth',
                'template_6ly1f5r',
                form.current,
                '3dtauFC-uDlSVRAX9'
            );
    
            toast.success('Your message has been sent.');
            console.log('Email sent successfully.');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    
        e.target.reset();
    };

    return (
        <div className='py-7 '>
            <h1 className='md:text-4xl font-semibold text-center text-[#C4CFDE] py-6'> Contact With Me
            </h1>
           
                <div className='text-[#C4CFDE] w-72 lg:w-[450px] lg:mx-auto'>
                    <div className='Card '>
                        <form className='w-full  ' ref={form} onSubmit={sendEmail}>
                            <label className="label block">
                                <span className="label-text block text-[#C4CFDE]">Name</span>
                            </label>
                            <input className='Input w-60 md:w-72 h-12' type="text" name="user_name" />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Phone</span>
                            </label>
                            <input className='Input w-60 md:w-72 h-12' type="text" name="user_phone" />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Email</span>
                            </label>
                            <input className='Input w-60 md:w-72 h-12' type="email" name="user_email" />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Subject</span>
                            </label>
                            <input className='Input w-60 md:w-72 h-12' type="text" name="user_subject" />
                            <br />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Message</span>
                            </label>
                            <textarea className='Input w-60 md:w-72 h-36' name="message" />
                            <br />
                            <div className='flex w-60 md:w-72 justify-center Button items-center text-[#ff013c] '>
                                <button className='mr-2'>Send Message</button>
                                <BsArrowRight className=' ' />
                            </div>
                        </form>
                    </div>
                
            </div>


        </div>
    );
};

export default Contact;