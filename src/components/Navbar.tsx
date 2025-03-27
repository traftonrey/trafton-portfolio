// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/wht-site.png'


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800/90 backdrop-blur-lg text-white py-3 px-4 md:px-8 shadow-xl z-50 border-b border-white/20">
            <div className="flex justify-between items-center">
                <Link to="/" className='flex items-center'>
                    <img src={logo} className='h-12' alt='Site Logo' />
                </Link>
                <div className="flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-purple-400 transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/experience"
                        className="hover:text-blue-400 transition-colors duration-300"
                    >
                        Experience
                    </Link>
                    <Link
                        to="/projects"
                        className="hover:text-amber-400 transition-colors duration-300"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about-me"
                        className="hover:text-green-400 transition-colors duration-300"
                    >
                        About Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
