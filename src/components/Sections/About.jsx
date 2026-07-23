import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import { userData } from '../../data/userData';

const About = () => {
    return (
        <section id="about" className="section-shell relative overflow-hidden">
            <div className="animated-bg" />
            <div className="section-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="mb-12"
                >
                    <p className="eyebrow">Introduction</p>
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        className="glass-card card-glow rounded-[32px] p-6 md:p-8"
                    >
                        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3">
                                <img
                                    src={userData.profileImage}
                                    alt="Portrait of Haris Manjothi"
                                    className="h-[500px] min-h-[280px] w-full rounded-[22px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                                    {userData.currentRole}
                                </p>
                                <p className="text-lg leading-8 text-zinc-300 md:text-xl">
                                    {userData.shortBio}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {userData.quickFacts.map((fact) => (
                                        <span
                                            key={fact}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-zinc-200"
                                        >
                                            {fact}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    <motion.aside
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ delay: 0.08 }}
                        className="glass-card card-glow rounded-[32px] p-6 md:p-8"
                    >
                        <div className="mb-5 flex items-center gap-3 text-white">
                            <div className="rounded-full bg-violet-500/20 p-2 text-violet-200">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.26em] text-zinc-400">Location</p>
                                <p className="text-lg font-semibold">{userData.location}</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-sm text-zinc-300">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Professional Summary</p>
                                <p className="mt-2 leading-7">{userData.summary}</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Current Focus</p>
                                <p className="mt-2 leading-7">{userData.currentFocus}</p>
                            </div>
                            <a
                                href={userData.resume}
                                download="Haris-Manjothi-Resume.pdf"
                                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.32)] transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                <FaDownload />
                                Download Resume
                            </a>
                        </div>
                    </motion.aside>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        className="glass-card rounded-[28px] p-6 md:p-8"
                    >
                        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-violet-300">Experience</p>
                        <div className="space-y-4">
                            {userData.experience.map((item) => (
                                <div
                                    key={`${item.role}-${item.company}`}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-violet-400/40"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <p className="font-semibold text-white">{item.role}</p>
                                            <p className="text-sm text-violet-300">{item.company}</p>
                                        </div>
                                        <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{item.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: 0.08 }}
                        className="glass-card rounded-[28px] p-6 md:p-8"
                    >
                        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-violet-300">Education</p>
                        <div className="space-y-4">
                            {userData.education.map((item) => (
                                <div
                                    key={`${item.degree}-${item.year}`}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-violet-400/40"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <p className="font-semibold text-white">{item.degree}</p>
                                            <p className="text-sm text-zinc-300">{item.institution}</p>
                                        </div>
                                        <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{item.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
