// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/wht-site.png'


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-2 px-4 md:px-8 shadow-md z-50">
            <div className="flex justify-between items-center">
                <Link to="/" className='flex items-center'>
                    <img src={logo} className='h-15' alt='Site Logo' />
                </Link>
                <div className="flex space-x-6">
                    <Link to="/" className='hover:text-gray-400 transition duration-300 ease-in-out'>Home</Link>
                    <Link to="/experience" className='hover:text-gray-400 transition duration-300 ease-in-out'>Experience</Link>
                    <Link to="/projects" className='hover:text-gray-400 transition duration-300 ease-in-out'>Projects</Link>
                    <Link to="/about-me" className='hover:text-gray-400 transition duration-300 ease-in-out'>About Me</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
