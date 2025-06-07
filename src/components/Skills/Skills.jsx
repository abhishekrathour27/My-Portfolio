import React from 'react'
import SkillsCard from './SkillsCard'

export default function Skills() {
    const skillCategories = [
        {
            title: "Technical Skills",
            items: [
                "HTML5", "CSS", "JavaScript", "TypeScript",
                "React.js", "Bootstrap", "TailwindCSS", "Next.js 13",
                "Node.js", "Express", "Redis"
            ]
        },
        {
            title: "Tools",
            items: ["Git", "GitHub", "Vercel", "Postman", "MongoDB Atlas"]
        },
        {
            title: "Soft Skills",
            items: ["Teamwork", "Problem-solving", "Communication"]
        }
    ]
    return (
        <div className='h-[60vh] bg-[#0F172B] py-8 flex flex-col items-center justify-center'>
            <center className='text-4xl font-bold'>Skills</center>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    skillCategories.map((item) => <SkillsCard key={item.title} item={item} />)
                }
            </div>
        </div>
    )
}
