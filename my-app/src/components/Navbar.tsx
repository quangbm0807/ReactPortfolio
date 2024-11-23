// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavLink {
    id: string;
    title: string;
}

const navLinks: NavLink[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar: React.FC = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`
      fixed w-full flex items-center py-5 px-6 top-0 z-20
      ${scrolled ? 'backdrop-blur-md bg-primary/30 dark:bg-primary-dark/30' : ''}
      transition-all duration-300
    `}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-[18px] font-bold cursor-pointer flex dark:text-white text-black">
                        Your Name &nbsp;
                        <span className="md:block hidden">| Portfolio</span>
                    </p>
                </Link>

                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title
                                ? "text-primary dark:text-white"
                                : "text-gray-600 dark:text-gray-200"
                                } hover:text-primary dark:hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>
                    </li>
                </ul>

                <div className="md:hidden flex flex-1 justify-end items-center">
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {toggle ? (
                            <X className="w-6 h-6 dark:text-white text-black" />
                        ) : (
                            <Menu className="w-6 h-6 dark:text-white text-black" />
                        )}
                    </button>

                    <motion.div
                        className={`${!toggle ? "hidden" : "flex"} 
              p-6 bg-white dark:bg-primary absolute top-20 right-0 mx-4 my-2 
              min-w-[140px] z-10 rounded-xl shadow-lg`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <ul className="list-none flex flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${active === nav.title
                                        ? "text-primary dark:text-white"
                                        : "text-gray-600 dark:text-gray-200"
                                        } font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? (
                                        <Sun className="w-5 h-5 text-yellow-500" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-gray-700" />
                                    )}
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;