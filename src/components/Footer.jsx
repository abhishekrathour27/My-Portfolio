import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#020618] py-2 px-6">
      <div className="hidden  max-w-7xl mx-auto md:flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-blue-400">Abhishek Kumar Singh</h1>
          <p className="text-sm mt-1 text-gray-400">Frontend Developer | Passionate about clean UI & UX</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/abhishekrathour27" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-transform transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhishekrathour27" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/abhishekrathour" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-transform transform hover:scale-110">
            <FaTwitter />
          </a>
        </div>

        {/* Links */}
        <div className="text-center md:text-right">
          <ul className="space-y-1 text-sm text-gray-400 flex gap-5">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Skills</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-slate-700 pt-4">
        © {new Date().getFullYear()} Abhishek Kumar Singh. All rights reserved.
      </div>
    </footer>
  );
}
