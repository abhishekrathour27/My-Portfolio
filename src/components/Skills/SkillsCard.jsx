import { Space } from 'lucide-react'
import React from 'react'

export default function SkillsCard({ item }) {
    return (
        <div className='bg-[#020618] h-fit w-[90vw] md:h-full md:w-[25vw] flex flex-col items-center py-5 gap-10 rounded-lg'>
            <h1 className='font-semibold text-xl'>{item.title}</h1>
            <div className='flex flex-wrap gap-5 items-center justify-center h-fit md:w-[22vw]'>
                {
                    item.items.map((i, index) => <span key={index}
                        className='border border-blue-500 text-blue-500 bg-[#1D293D] px-3 py-1 rounded-3xl font-semibold'>
                        {i}
                    </span>)
                }
            </div>
        </div>
    )
}
