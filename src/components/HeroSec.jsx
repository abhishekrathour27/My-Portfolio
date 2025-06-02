import { ArrowBigRight, ArrowRight, FileText, GithubIcon, Linkedin } from 'lucide-react'
import React from 'react'

export default function HeroSec() {
    return (
        <div className='bg-[#020618]  '>
            <div className='max-w-7xl h-[90vh] flex justify-around m-auto items-center gap-5'>
                <div className=' space-y-10'>
                    <div className='flex flex-col text-xl gap-2'>
                        <span>Hello I'm</span>
                        <span className='text-6xl font-bold text-blue-500'>Abhishek Kumar Singh</span>
                        <span className='text-2xl text-gray-400 font-semibold'>Fronted Developer</span>
                        <span className='mt-2'>Crafting web experiences with performance and design in mind.</span>
                    </div>
                    <div className='flex gap-3'>
                        <button className='flex bg-blue-500 font-semibold px-3 py-2 rounded-lg cursor-pointer gap-2'>View Projects  <ArrowRight /> </button>
                        <button className=' bg-white text-black font-semibold px-3 py-2 rounded-lg cursor-pointer'>Contact Me</button>
                    </div>
                    <div className='space-x-5'>
                        <button className='bg-white text-black p-1.5 rounded-full cursor-pointer'> < GithubIcon /> </button>
                        <button className='bg-white text-black p-1.5 rounded-full cursor-pointer'> <Linkedin /> </button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5'> 
                    <div className='bg-white border border-blue-500 h-[200px] w-[200px] rounded-full'>

                    </div>
                    <div>
                        <button className='flex bg-blue-500 font-semibold px-2 py-1 rounded-lg cursor-pointer gap-2'> <FileText /> View My Resume </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
