import { GithubIcon, Linkedin, Mail, MapPin } from 'lucide-react'
import React from 'react'

export default function ContactLeft() {
    return (
        <div className='border bg-[#020618] border-gray-400 w-[90vw]  md:w-[30vw] md:h-[50vh] rounded-lg space-y-2 py-5 '>
            <h2 className='text-2xl text-blue-500 font-bold pl-8'>Contact Information</h2>
            <div className='pl-10 mt-8 space-y-6'>
                <div className='flex gap-10 items-center'>
                    <Mail />
                    <div className='flex flex-col'>
                        <span>Email</span>
                        <span>abhishekrathour96081@gmail.com</span>
                    </div>
                </div>
                <div className='flex gap-10 items-center'>
                    <MapPin />
                    <div className='flex flex-col '>
                        <span>Location</span>
                        <span>Bengaluru</span>
                    </div>
                </div>
                <center className='bg-blue-500 h-0.5 w-74 md:w-96'></center>
                <p>Connect with me</p>
                <div className='flex gap-3'>
                    <div className='bg-white text- black p-1 rounded-full cursor-pointer w-fit'>
                        <a href='https://github.com/abhishekrathour27' > < GithubIcon /></a>
                    </div>
                    <div className='bg-white text-black p-1 rounded-full cursor-pointer w-fit'>
                        <a href='https://www.linkedin.com/feed/' > <Linkedin /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
