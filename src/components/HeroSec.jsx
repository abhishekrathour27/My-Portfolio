import { ArrowBigRight, ArrowRight, FileText, GithubIcon, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function HeroSec() {
    return (
        <div id='Hero' className='bg-[#020618] '>
            <div className='md:max-w-7xl h-fit md:h-[100vh] flex flex-col  md:flex md:flex-row md:justify-around md:m-auto items-center gap-5 pt-20 px-5 py-2'>
                <div className=' space-y-10 flex flex-col items-center justify-center md:w-3/4 '>
                    <div className='flex flex-col justify-center items-center md:flex md:flex-col text-xl gap-2 w-[80vw]'>
                        <span className='text-xl md:text-2xl'>Hello I'm</span>
                        <span className='text-3xl md:text-6xl font-bold text-blue-500'>Abhishek Kumar Singh</span>
                        <span className='text-2xl text-gray-400 font-semibold'>Fronted Developer</span>
                        <span className=' ml-2 md:mt-2'>Crafting web experiences with performance and design in mind.</span>
                    </div>
                    <div className='flex flex-col items-center md:flex md:flex-row  gap-3'>

                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500}>
                            <button className='flex bg-blue-500 font-semibold px-3 py-2 rounded-lg cursor-pointer gap-2'> View Projects  <ArrowRight /> </button>
                        </Link>
                        <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-80} duration={500}>
                            <button className=' bg-white text-black font-semibold px-3 py-2 rounded-lg cursor-pointer'>Contact Me</button>
                        </Link>
                    </div>
                    <div className="flex gap-5 text-xl">
                        <a href="https://github.com/abhishekrathour27" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-transform transform hover:scale-120">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/abhishekrathour27" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-transform transform hover:scale-120">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/abhishekrathour" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-transform transform hover:scale-120">
                            <FaTwitter />
                        </a>
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
