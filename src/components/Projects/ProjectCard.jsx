import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function ProjectCard({ projects }) {
    return (

        <div className='w-screen flex flex-wrap gap-20  items-center justify-center text-sm h-full'>
            {
                projects.map((item, index) => <div key={index} className='flex flex-col  bg-[#0F172B] w-[25vw] h-[60vh] rounded-xl overflow-hidden'>
                    <div className='relative w-full h-fit'>
                        <img
                            src={item.image} alt={''}
                        />
                        <div className='absolute bottom-0 w-full h-full flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-transform transform hover:scale-110 hover:duration-500 bg-black/30 cursor-pointer '>
                            <button>
                                <a href={item.github}>
                                    <FaGithub className='h-5 w-5' />
                                </a>
                            </button>
                            <button>
                                <a href={item.demo}>
                                    <FaExternalLinkAlt className='h-5 w-5' />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='p-5 space-y-2 flex flex-col'>
                        <span className='font-bold text-lg'>{item.title}</span>
                        <span className='text-gray-400'>{item.description}</span>
                        <span className='font-bold'>key Features</span>
                        {
                            item.features.map((f, index) => <li key={index} className='text-gray-400'>
                                {f}
                            </li>)
                        }
                        <div className='w-full flex flex-wrap gap-2 text-sm'>
                            {
                                item.technologies.map((tec, index) =>
                                    <div
                                        className=' border border-blue-500 text-blue-500 bg-[#1D293D] px-2 py-1 rounded-lg'
                                        key={index}
                                    >
                                        {tec}
                                    </div>)
                            }

                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
