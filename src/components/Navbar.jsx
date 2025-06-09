import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-slate-800 h-19 flex justify-between items-center px-35 fixed top-0 left-0 right-0 z-50 text-white'>
            <div>
                <h1 className='font-bold text-xl'>Abhishek Kumar Singh</h1>
            </div>
            <ul className='flex gap-5 text-lg'>
                <li className='cursor-pointer group relative'>
                    <span className='relative z-10'>Home</span>
                    <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                </li>
                <li className='cursor-pointer group relative'>
                    <span className='relative z-10'>Skills</span>
                    <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                </li>
                <li className='cursor-pointer group relative'>
                    <span className='relative z-10'>Experience</span>
                    <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                </li>
                <li className='cursor-pointer group relative'>
                    <span className='relative z-10'>Projects</span>
                    <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                </li>
                <li className='cursor-pointer group relative'>
                    <span className='relative z-10'>Contact</span>
                    <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                </li>
            </ul>
        </div>
    )
}
