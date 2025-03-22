import React, { useState, useCallback, useEffect } from 'react';
import { NAVIGATION_LINKS, SOCIAL_MEDIA_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo2 from '../assets/logo2.png';

const Navbar = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Toggle menu with useCallback to prevent unnecessary re-creation
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // Smooth scrolling function using scrollIntoView
    const handleLinkClick = useCallback((event, href) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMenuOpen(false); // Close the mobile menu after a click
    }, []);

    // Navbar animation variants
    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    // Link animation variants
    const linkVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: i => ({ 
            opacity: 1, 
            y: 0, 
            transition: { 
                delay: i * 0.1,
                duration: 0.3
            }
        }),
        hover: { 
            y: -3,
            color: "#F59E0B", // yellow-500
            transition: { duration: 0.2 }
        }
    };

    // Logo animation variants
    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        },
        hover: { 
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.nav 
        
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-md ${scrolled ? 'bg-black' : 'bg-black'}`}
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            {/* Desktop Navbar */}
            <section className="hidden lg:flex items-center justify-between px-10 py-3 w-full text-2xl">
                {/* Logo */}
                <motion.div
                    variants={logoVariants}
                    whileHover="hover"
                >
                    <a href=""> <img src={logo2} alt="HRAF Logo" className='w-44' /></a>
                </motion.div>
                
                {/* Navigation Links */}
                <ul className="flex items-center gap-6">
                    {NAVIGATION_LINKS.map((item, index) => (
                        <motion.li 
                            key={index}
                            custom={index}
                            variants={linkVariants}
                            whileHover="hover"
                        >
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-lg text-white font-semibold transition"
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </section>

            {/* Mobile Navbar */}
            <motion.section 
                className="lg:hidden bg-black text-white p-4 flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Logo */}
                <motion.a 
                    href="/" 
                    className="text-xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.span 
                        className="letter text-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                        H
                    </motion.span>
                    <motion.span 
                        className="letter text-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    >
                        R
                    </motion.span>
                    <motion.span 
                        className="letter text-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        A
                    </motion.span>
                    <motion.span 
                        className="letter text-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                    >
                        F
                    </motion.span>
                </motion.a>

                {/* Mobile Menu Toggle */}
                <motion.button 
                    onClick={toggleMenu} 
                    className="focus:outline-none" 
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {isMenuOpen ? (
                        <FaTimes className="h-10 w-10 text-white hover:text-yellow-300 transition-all duration-200" />
                    ) : (
                        <FaBars className="h-10 w-10 text-white hover:text-yellow-300 transition-all duration-200" />
                    )}
                </motion.button>
            </motion.section>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-50  "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Close Button (X) */}
                        <motion.button
                            onClick={toggleMenu}
                            className="absolute top-4 right-4 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaTimes className="h-10 w-10 text-white hover:text-yellow-300 transition-all duration-200" />
                        </motion.button>
                    
                        <motion.ul
                            className="flex flex-col items-center justify-center gap-6 text-2xl font-semibold h-screen bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {/* Logo */}
                            <motion.button
                                onClick={toggleMenu}
                                className="text-8xl text-yellow-400 hover:text-yellow-600 font-extrabold transition-all duration-300"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.2
                                }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    rotate: [0, -2, 2, -2, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                HRAF
                            </motion.button>
                            
                            {/* Navigation Links */}
                            {NAVIGATION_LINKS.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: 0.3 + index * 0.1 
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                        className="block w-full text-xl font-semibold text-white hover:text-gray-500 transition"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                            
                            {/* Social Media Links */}
                            <motion.div 
                                className="flex gap-4 mt-6"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 30, opacity: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.3 + NAVIGATION_LINKS.length * 0.1 
                                }}
                            >
                                {SOCIAL_MEDIA_LINKS.map((media, index) => (
                                    <motion.a
                                        key={index}
                                        href={media.href}
                                        className="text-yellow-400 hover:text-yellow-600 transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ 
                                            duration: 0.3, 
                                            delay: 0.5 + NAVIGATION_LINKS.length * 0.1 + index * 0.1 
                                        }}
                                        whileHover={{ 
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        {media.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
});

export default Navbar;