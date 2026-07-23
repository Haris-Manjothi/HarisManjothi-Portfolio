import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { userData } from '../../data/userData';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black/30 px-4 py-10 text-center backdrop-blur-xl">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="text-left md:text-left">
                    <p className="font-display text-lg font-semibold text-white">{userData.name}</p>
                    <p className="mt-1 text-sm text-zinc-400">
                        Copyright &copy; {year}. All rights reserved.
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-zinc-500">
                        {userData.headlineShort} &middot; {userData.location}
                    </p>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                    <a
                        href={userData.contact.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="rounded-full border border-white/10 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-violet-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={userData.contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-full border border-white/10 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-violet-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={`mailto:${userData.contact.email}`}
                        aria-label="Email Haris Manjothi"
                        className="rounded-full border border-white/10 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-violet-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
