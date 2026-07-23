import { motion } from 'framer-motion';
import { userData } from '../../data/userData';

const Education = () => (
    <section id="education" className="section-shell relative overflow-hidden">
        <div className="section-content">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="mb-12"
            >
                <p className="eyebrow">Academic Path</p>
                <h2 className="section-title">Education</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {userData.education.map((item, index) => (
                    <motion.article
                        key={`${item.degree}-${item.year}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: index * 0.08 }}
                        className="glass-card card-glow rounded-[28px] p-6"
                    >
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-violet-200">
                                {item.year}
                            </span>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white">{item.degree}</h3>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300">{item.institution}</p>
                        <p className="leading-7 text-zinc-300">{item.focus}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
