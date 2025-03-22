import React, { useState, useCallback } from 'react';
import { NAVIGATION_LINKS, SOCIAL_MEDIA_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo2 from '../assets/logo2.png'

const Navbar = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu with useCallback to prevent unnecessary re-creation
    const ToggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // Smooth scrolling function using scrollIntoView
    const handleLinkClick = useCallback((event, href) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Align the top of the target with the viewport top
            });
        }
        setIsMenuOpen(false); // Close the mobile menu after a click
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg shadow-md">
            {/* Desktop Navbar */}
            <section className="hidden lg:flex items-center justify-between px-10 py-3 w-screen text-2xl">
                {/* Logo */}
               
                <img src={logo2} alt="" className='w-44' />
                {/* Navigation Links */}
                <ul className="flex items-center gap-6">
                    {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-lg text-white font-semibold hover:text-gray-600 transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Mobile Navbar */}
            <section className="lg:hidden bg-black text-white p-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-yellow-500 hover:text-yellow-900 transition text-xl">HRAF</a>

                {/* Mobile Menu Toggle */}
                <button onClick={ToggleMenu} className="focus:outline-none" aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <FaTimes className="h-10 w-10 text-white hover:text-yellow-300 transition-all duration-200" />
                    ) : (
                        <FaBars className="h-10 w-10 text-white hover:text-yellow-300 transition-all duration-200" />
                    )}
                </button>
            </section>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <motion.ul
                    className="flex flex-col items-center justify-center gap-6 text-2xl font-semibold bg-black h-screen"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo */}
                    <button
                        onClick={ToggleMenu}
                        className="text-8xl text-yellow-400 hover:text-yellow-600 font-extrabold transition-all duration-300"
                    >
                        HRAF
                    </button>

                    {/* Navigation Links */}
                    {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="block w-full text-xl font-semibold text-white hover:text-gray-500 transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-6">
                        {SOCIAL_MEDIA_LINKS.map((media, index) => (
                            <a
                                key={index}
                                href={media.href}
                                className="text-yellow-400 hover:text-yellow-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {media.icon}
                            </a>
                        ))}
                    </div>
                </motion.ul>
            )}
        </nav>
    );
});

export default Navbar;
