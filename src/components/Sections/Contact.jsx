import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { userData } from '../../data/userData';

const Contact = () => {
    const channels = [
        {
            icon: FaEnvelope,
            href: `mailto:${userData.contact.email}`,
            label: 'Email',
            value: userData.contact.email,
            external: false,
        },
        {
            icon: FaLinkedin,
            href: userData.contact.linkedin,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            external: true,
        },
        {
            icon: FaGithub,
            href: userData.contact.github,
            label: 'GitHub',
            value: 'View repositories',
            external: true,
        },
    ];

    return (
        <section id="contact" className="section-shell">
            <div className="section-content text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-10"
                >
                    <p className="eyebrow">Connect</p>
                    <h2 className="section-title">Let&apos;s build something thoughtful</h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-zinc-300"
                >
                    I&apos;m open to opportunities in software engineering, frontend development, and AI-focused product work. If you want to collaborate, learn, or build something meaningful, I&apos;d love to hear from you.
                </motion.p>

                <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
                    {channels.map((channel, index) => (
                        <motion.a
                            key={channel.label}
                            href={channel.href}
                            {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ delay: index * 0.08 }}
                            className="glass-card card-glow group flex flex-col items-start rounded-[24px] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60"
                        >
                            <div className="mb-4 rounded-2xl bg-violet-500/10 p-4 text-violet-300 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.24)]">
                                <channel.icon size={22} />
                            </div>
                            <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">{channel.label}</p>
                            <p className="mt-2 text-base font-semibold text-white">{channel.value}</p>
                            <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-violet-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Reach out
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
