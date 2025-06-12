import {  Send } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function ContactLeft() {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [messege, setMessege] = useState('')
  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {
      nameError: '',
      emailError: '',
      msgError: ''
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      newError.nameError = 'First enter your Name'
    }
    if (!mail) {
      newError.emailError = "First enter your Email"
    }
    if (mail && !emailRegex.test(mail)) {
      newError.emailError = "Please enter correct Email"
    }
    if (!messege) {
      newError.msgError = "First enter your Messege"
    }
    if (name && emailRegex.test(mail) && messege) {
      toast.success('Messege Sent Successfully')
      setName('')
      setMail('')
      setMessege('')
    }

    setError(newError)

  }

  return (
    <div className='border bg-[#020618] border-gray-400 w-[90vw]  md:w-[35vw] h-fit rounded-lg space-y-1 py-10 '>
      <h1 className='text-2xl text-blue-500 font-bold pl-8'>Send a Message</h1>
      <div className='px-8 space-y-5'>
        <div className='flex flex-col'>
          <span className='font-bold'>Name</span>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder='Enter your name'
            className='border rounded-lg py-1 px-2 border-gray-700' />
          <div className='text-red-500'>{error.nameError}</div>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Email</span>
          <input
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            type="email"
            placeholder='Enter your Email'
            className='border rounded-lg py-1.5 px-2  border-gray-700' />
          <div className='text-red-500'>{error.emailError}</div>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Messege</span>
          <textarea
            onChange={(e) => setMessege(e.target.value)}
            value={messege}
            placeholder='Enter your messege'
            name="text" rows={5} cols={10}
            className='border rounded-lg py-1.5 px-2  border-gray-700' ></textarea>
          <div className='text-red-500'>{error.msgError}</div>
          <button
            onClick={handleSubmit}
            className='bg-[#1D293D] py-2 mt-2 rounded-lg flex items-center justify-center gap-5 cursor-pointer '> 
            <Send className='text-blue-500 size-5' /> Send Messege</button>
        </div>
      </div>
    </div>
  )
}
