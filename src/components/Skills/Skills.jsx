import React from 'react'
import Badge from './components/Badge'

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
        <div>
           <center>Skills</center> 
           <div>
            {
                skillCategories.map((title , items)=> <Badge key={title}   /> )
            }
           </div>
        </div>
    )
}
