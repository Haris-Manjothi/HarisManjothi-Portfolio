/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FluidBackground from '../Canvas/FluidBackground';
import { userData } from '../../data/userData';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 120]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const [typedText, setTypedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const roles = userData.typedRoles;

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = window.setTimeout(() => {
            if (!deleting && typedText.length < currentRole.length) {
                setTypedText(currentRole.slice(0, typedText.length + 1));
            } else if (!deleting && typedText.length === currentRole.length) {
                setDeleting(true);
            } else if (deleting && typedText.length > 0) {
                setTypedText(currentRole.slice(0, typedText.length - 1));
            } else if (deleting && typedText.length === 0) {
                setDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, deleting ? 45 : 90);

        return () => window.clearTimeout(timeout);
    }, [typedText, deleting, roleIndex, roles]);

    return (
        <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 md:py-24">
            <FluidBackground />

            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-lg"
                >
                    <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-300">
                        {userData.location}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.12 }}
                    className="mb-5 font-display text-5xl font-bold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]"
                >
                    <span className="block">Hi, I&apos;m</span>
                    <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
                        {userData.name}
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.22 }}
                    className="mb-4 inline-flex min-h-[2.2rem] items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 backdrop-blur-lg md:text-lg"
                >
                    <span className="mr-2 text-white">{typedText}</span>
                    <span className="inline-block h-4 w-px animate-pulse bg-white" aria-hidden="true" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.28 }}
                    className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-zinc-400"
                >
                    {userData.headline}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.34 }}
                    className="mx-auto mb-10 max-w-3xl text-base leading-8 text-zinc-300 md:text-xl"
                >
                    {userData.heroDescription}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.46 }}
                    className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
                >
                    <a
                        href={userData.resume}
                        download="Haris-Manjothi-Resume.pdf"
                        className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(255,255,255,0.18)]"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                    <a
                        href="#projects"
                        className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/10 hover:shadow-[0_0_32px_rgba(124,58,237,0.24)]"
                    >
                        View Projects
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/10"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.56 }}
                    className="mt-8 flex items-center gap-4 text-zinc-300"
                >
                    <a
                        href={userData.contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Haris Manjothi on LinkedIn"
                        className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-violet-300 hover:shadow-[0_0_24px_rgba(124,58,237,0.28)]"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={userData.contact.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Haris Manjothi on GitHub"
                        className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-violet-300 hover:shadow-[0_0_24px_rgba(124,58,237,0.28)]"
                    >
                        <FaGithub />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.4 }}
                aria-hidden="true"
            >
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent md:h-16" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
