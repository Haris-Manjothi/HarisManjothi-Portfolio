import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { userData } from '../../data/userData';
import useActiveSection from '../../hooks/useActiveSection';

const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
];

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const activeSection = useActiveSection(sectionIds);

    useEffect(() => {
        const updateScroll = () => {
            setHasScrolled(window.scrollY > 24);
        };

        updateScroll();
        window.addEventListener('scroll', updateScroll, { passive: true });
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 z-[100] w-full border-b transition-all duration-500 ${
                hasScrolled
                    ? 'border-white/10 bg-[var(--nav-bg)] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
                <a href="#hero" className="group flex shrink-0 items-center gap-3">
                    <img
                        src={`${import.meta.env.BASE_URL}HM Logo.png`}
                        alt="Haris Manjothi logo"
                        className="h-9 w-9 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 md:h-10 md:w-10"
                    />
                    <div>
                        <span className="block text-base font-black tracking-[-0.04em] text-white md:text-lg">{userData.name}</span>
                        <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-400">{userData.headlineShort}</span>
                    </div>
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`group relative text-sm font-medium transition-colors duration-300 ${
                                    isActive ? 'text-violet-300' : 'text-zinc-300 hover:text-white'
                                }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </a>
                        );
                    })}

                    <div className="mx-2 h-5 w-px bg-white/10" />

                    <div className="flex items-center gap-3">
                        <a href={userData.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 text-zinc-300 transition-colors hover:text-violet-300">
                            <FaGithub size={17} />
                        </a>
                        <a href={userData.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-zinc-300 transition-colors hover:text-violet-300">
                            <FaLinkedin size={17} />
                        </a>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-violet-300 transition-colors hover:bg-white/5"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FaSun size={17} /> : <FaMoon size={17} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="rounded-full p-2 text-violet-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                    <button
                        type="button"
                        className="relative z-[110] rounded-full p-2 text-white"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#050505]/95 pt-16 backdrop-blur-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-7 px-6 py-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between text-2xl font-semibold transition-colors ${
                                        activeSection === link.id ? 'text-violet-300' : 'text-white'
                                    }`}
                                >
                                    {link.name}
                                    <span className={`h-2 w-2 rounded-full ${activeSection === link.id ? 'bg-violet-400' : 'bg-white/20'}`} />
                                </a>
                            ))}
                            <div className="h-px w-full bg-white/10" />
                            <div className="flex items-center gap-6">
                                <a href={userData.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white">
                                    <FaGithub size={24} />
                                    <span>GitHub</span>
                                </a>
                                <a href={userData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white">
                                    <FaLinkedin size={24} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
