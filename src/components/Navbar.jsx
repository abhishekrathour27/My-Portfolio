import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contacts' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-slate-800 fixed top-0 left-0 right-0 z-50 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-10">
        
   
        <h1 className="font-bold text-xl text-blue-500">Abhishek Kumar Singh</h1>

        
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-blue-400"
              className="cursor-pointer group relative transition-colors"
            >
              <span className="relative z-10 hover:text-blue-400">{label}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <ul className="flex flex-col md:hidden bg-slate-800 px-6 pb-6 text-lg gap-4">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}
