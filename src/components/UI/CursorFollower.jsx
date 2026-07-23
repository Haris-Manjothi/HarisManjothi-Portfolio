import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                || ('ontouchstart' in window)
                || (navigator.maxTouchPoints > 0);
            setIsMobile(mobile);
        };

        checkMobile();

        if (isMobile) return undefined;

        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            setIsHovering(
                target.tagName === 'A'
                || target.tagName === 'BUTTON'
                || target.closest('a')
                || target.closest('button'),
            );
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] blur-xl transition-colors duration-300 ${
                isHovering ? 'bg-[var(--accent-color)] opacity-80' : 'bg-violet-400 opacity-50'
            }`}
            animate={{
                x: mousePosition.x - (isHovering ? 24 : 16),
                y: mousePosition.y - (isHovering ? 24 : 16),
                scale: isHovering ? 1.5 : 1,
                opacity: isHovering ? 0.8 : 0.5,
            }}
            transition={{
                type: 'spring',
                damping: 25,
                stiffness: 150,
                mass: 0.5,
            }}
        />
    );
};

export default CursorFollower;
