import { motion, useScroll, useTransform } from 'framer-motion';
import { userData } from '../../data/userData';

const ExperienceCard = ({ item, index }) => (
    <motion.article
        className="glass-card card-glow relative ml-2 rounded-[28px] p-6 md:ml-0 md:p-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.08, duration: 0.55 }}
    >
        <div className="absolute -left-2 top-7 h-4 w-4 rounded-full border-4 border-[#050505] bg-gradient-to-r from-violet-500 to-fuchsia-400 md:-left-3" />
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">{item.role}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">{item.company}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                {item.duration}
            </span>
        </div>
        <p className="mb-4 text-sm text-zinc-400">{item.location}</p>
        <p className="leading-7 text-zinc-300">{item.description}</p>
    </motion.article>
);

const Experience = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);

    return (
        <section id="experience" className="section-shell relative overflow-hidden">
            <div className="section-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-12"
                >
                    <p className="eyebrow">Timeline</p>
                    <h2 className="section-title">Experience</h2>
                </motion.div>

                <div className="relative ml-4 md:ml-8">
                    <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
                    <motion.div
                        className="absolute left-0 top-0 w-0.5 origin-top bg-gradient-to-b from-violet-500 via-fuchsia-400 to-transparent"
                        style={{ height: '100%', scaleY }}
                    />

                    <div className="space-y-6 pl-7 md:pl-10">
                        {userData.experience.map((item, index) => (
                            <ExperienceCard key={`${item.role}-${item.company}`} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
