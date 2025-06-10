import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

export default function Contact() {
    return (
        <div id='contacts'
         className='bg-[#0F172B] h-screen py-10'>
            <center className='text-4xl font-bold'>Contact</center>
            <div className="w-30 h-1 bg-blue-500 mx-auto border mt-3 rounded-full border-white/10"></div>
            <div className='flex flex-wrap  gap-20 items-center justify-center mt-10'>
                <ContactLeft />
                <ContactRight />
            </div>
        </div>
    )
}
