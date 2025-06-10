import { GithubIcon, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import React from 'react'
import { FaTelegram } from 'react-icons/fa'

export default function ContactLeft() {
  return (
    <div className='border border-gray-400  w-[35vw] h-[60vh] rounded-lg space-y-2 py-5 '>
      <h1 className='text-2xl text-blue-500 font-bold pl-8'>Send a Message</h1>
      <div className='px-8 space-y-5'>
        <div className='flex flex-col'>
          <span className='font-bold'>Name</span>
          <input type="text" placeholder='Enter your name' className='border rounded-lg py-1 px-2 border-gray-700' />
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Email</span>
          <input type="email" placeholder='Enter your Email' className='border rounded-lg py-1.5 px-2  border-gray-700' />
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Messege</span>
          <textarea
            placeholder='Enter your messege'
            name="text" rows={5} cols={10}
            className='border rounded-lg py-1.5 px-2  border-gray-700' ></textarea>
            <button className='bg-[#1D293D] py-2 mt-2 rounded-lg flex items-center justify-center gap-5 '> <Send className='text-blue-500 size-5'/> Send Messege</button>
        </div>
      </div>
    </div>
  )
}
