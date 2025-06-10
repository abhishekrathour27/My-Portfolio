import React from 'react'
import SkillsCard from './SkillsCard'

export default function Skills() {
    const skillCategories = [
        {
            title: "Technical Skills",
            items: [
                "HTML5", "CSS", "JavaScript",
                "React.js", "Bootstrap", "TailwindCSS", "C Language", "Java", "Python",
            ]
        },
        {
            title: "Tools",
            items: ["Git", "GitHub", "Netlify"]
        },
        {
            title: "Soft Skills",
            items: ["Teamwork", "Problem-solving", "Communication"]
        }
    ]
    return (
        <div id='skills' className='h-[90vh] bg-[#0F172B] py-8 flex flex-col items-center justify-center'>
            <center className='text-4xl font-bold'>Skills</center>
            <div className="w-20 h-1 bg-blue-500 mx-auto border mt-3 rounded-full border-white/10"></div>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    skillCategories.map((item) => <SkillsCard key={item.title} item={item} />)
                }
            </div>
        </div>
    )
}
