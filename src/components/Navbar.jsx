import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-slate-800 h-18 flex justify-between items-center px-35  fixed top-0 left-0 right-0 z-50'>
            <div>
                <h1 className='font-bold text-xl'>Abhishek Kumar Singh</h1>
            </div>
            <ul className='flex gap-5 text-lg'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Skills</li>
                <li className='cursor-pointer'>Experience</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </div>
    )
}
