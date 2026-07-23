import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { userData } from '../../data/userData';

const Projects = () => (
    <section id="projects" className="section-shell relative">
        <div className="section-content">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="mb-12"
            >
                <p className="eyebrow">Selected Work</p>
                <h2 className="section-title">Projects</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {userData.projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: index * 0.07 }}
                        className="glass-card card-glow group overflow-hidden rounded-[30px] p-0"
                    >
                        <div className={`relative min-h-[220px] border-b border-white/10 bg-gradient-to-br ${project.gradient} p-6`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_35%)]" />
                            <div className="relative flex h-full flex-col justify-between gap-4">
                                <span className="inline-flex w-fit rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-violet-200">
                                    {project.accent}
                                </span>
                                <div className="flex min-h-[140px] items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-black/25 backdrop-blur-lg">
                                    <div className="flex flex-col items-center gap-2 px-4 text-center">
                                        <span className="font-display text-3xl font-bold tracking-tight text-white/90 transition-transform duration-500 group-hover:scale-105">
                                            {project.placeholder}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.32em] text-zinc-400">Concept Preview</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="mb-4 text-xl font-semibold text-white">{project.title}</h3>
                            <p className="mb-5 text-sm leading-7 text-zinc-300">{project.desc}</p>

                            <div className="mb-5 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-white"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/20"
                                >
                                    <FaExternalLinkAlt size={12} />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
