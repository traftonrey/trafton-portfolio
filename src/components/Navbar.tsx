import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Tlogo500x500.png';

const NavLink = ({ to, text, color }: { to: string; text: string; color: string }) => (
    <Link
        to={to}
        className={`hover:text-${color}-400 transition-colors duration-300 px-3 py-1 rounded-lg`}
    >
        {text}
    </Link>
);

const MobileNavLink = ({ to, text, color, onClick }: { to: string; text: string; color: string; onClick: () => void }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`w-3/4 hover:text-${color}-400 text-center py-3 px-6 hover:bg-gray-700/50 transition-colors rounded-lg text-lg`}
    >
        {text}
    </Link>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800/50 backdrop-blur-lg text-white py-3 px-4 md:px-8 shadow-xl z-50 border-b border-white/20">
            <div className="flex justify-between items-center">
                <Link to="/" className='flex items-center'>
                    <img src={logo} className='h-8 lg:h-14 md:h-12 md:py-1 transition-all duration-300' alt='Trafton Reynolds' />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" text="Home" color="emerald" />
                    <NavLink to="/experience" text="Experience" color="blue" />
                    <NavLink to="/projects" text="Projects" color="amber" />
                    <NavLink to="/about-me" text="About" color="green" />
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 hover:text-emerald-500 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                    aria-label="Navigation menu"
                >
                    {isOpen ? (
                        <FaTimes className="text-2xl" />
                    ) : (
                        <FaBars className="text-2xl" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col items-center py-4 space-y-4 bg-gray-800/50 backdrop-blur-lg border-t border-white/20">
                    <MobileNavLink to="/" text="Home" color="emerald" onClick={() => setIsOpen(false)} />
                    <MobileNavLink to="/experience" text="Experience" color="blue" onClick={() => setIsOpen(false)} />
                    <MobileNavLink to="/projects" text="Projects" color="amber" onClick={() => setIsOpen(false)} />
                    <MobileNavLink to="/about-me" text="About Me" color="green" onClick={() => setIsOpen(false)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;