import { motion } from 'framer-motion';
import { userData } from '../../data/userData';

const skillGroups = [
    { title: 'Languages', skills: userData.skills.languages },
    { title: 'Frontend', skills: userData.skills.frontend },
    { title: 'Backend', skills: userData.skills.backend },
    { title: 'Tools', skills: userData.skills.tools },
];

const SkillBar = ({ skill }) => (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10 hover:shadow-[0_0_28px_rgba(124,58,237,0.18)]">
        <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-white">{skill.name}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                {skill.level}
            </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            />
        </div>
    </div>
);

const Skills = () => (
    <section id="skills" className="section-shell">
        <div className="section-content">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="mb-12"
            >
                <p className="eyebrow">Specialization</p>
                <h2 className="section-title">Skills</h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
                {skillGroups.map((group, groupIndex) => (
                    <motion.article
                        key={group.title}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: groupIndex * 0.08 }}
                        className="glass-card card-glow rounded-[28px] p-6 md:p-8"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                                {group.skills.length} items
                            </span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {group.skills.map((skill) => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
