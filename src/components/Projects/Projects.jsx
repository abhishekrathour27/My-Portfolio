import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "DoctorAppointment",
            description: "Responsive Doctor Appointment Fronted Website with Login & Sign-up",
            image: "/doctor_appointment.png",
            technologies: ["React.js", "Tailwind CSS"],
            features: ["Login & Sign-up", "Doctors Category", "Email verification", "Book Appointment"],
            github: "https://github.com/abhishekrathour27",
            demo: "https://github.com/abhishekrathour27/Doctor-Appointment",
        },
        {
            id: 2,
            title: "myShop",
            description: "Responsive eCommerce Fronted Website",
            image: "/myShop.png",
            technologies: ["Html", "Javascript", "Tailwind CSS"],
            features: ["Product-Section", "Cart-Section", "Add-To-Cart Feature"],
            github: "https://github.com/abhishekrathour27",
            demo: "https://github.com/abhishekrathour27/eCom-web-js",
        },
    ]
    return (

        <div id='projects' className='bg-[#020618]  py-5 h-fit md:h-[100vh] flex flex-col items-center justify-center overflow-x-hidden'>
            <center className='text-4xl font-bold'>Projects</center>
            <div className="w-33 h-1 bg-blue-500 mx-auto border mt-3 rounded-full border-white/10"></div>
            <div className='mt-10'>
                <ProjectCard projects={projects} />
            </div>
        </div>
    )
}
