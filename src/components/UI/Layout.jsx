import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarsBackground from '../Canvas/StarsBackground';
import CursorFollower from './CursorFollower';
import { userData } from '../../data/userData';

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsLoading(false), 600);
        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
            setScrollProgress(value);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-transparent">
            <div className="fixed top-0 left-0 w-full h-1 z-[120] bg-white/5">
                <div
                    className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-purple-500 transition-[width] duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <StarsBackground />
            <CursorFollower />
            <Navbar />

            {isLoading && (
                <div className="fixed inset-0 z-[140] flex items-center justify-center bg-[#050505] transition-opacity duration-500">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="loading-dot inline-flex h-2 w-2 rounded-full bg-violet-500" style={{ animationDelay: '0ms' }} />
                            <span className="loading-dot inline-flex h-2 w-2 rounded-full bg-fuchsia-400" style={{ animationDelay: '150ms' }} />
                            <span className="loading-dot inline-flex h-2 w-2 rounded-full bg-purple-400" style={{ animationDelay: '300ms' }} />
                        </div>
                        <p className="text-sm font-medium uppercase tracking-[0.4em] text-zinc-300">
                            {userData.name}
                        </p>
                    </div>
                </div>
            )}

            <main id="main-content" className="flex-grow pt-20 w-full relative z-10">
                {children}
            </main>
            <Footer />

            <div className="fixed inset-0 z-[-2] pointer-events-none opacity-80">
                <div className="absolute top-[-18%] left-[-20%] h-[42rem] w-[42rem] rounded-full bg-violet-500/20 blur-[140px]" />
                <div className="absolute right-[-12%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-purple-600/15 blur-[140px]" />
            </div>
        </div>
    );
};

export default Layout;
