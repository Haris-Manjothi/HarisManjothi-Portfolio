import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds, offset = 120) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;
            let current = sectionIds[0];

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element && element.offsetTop <= scrollPosition) {
                    current = id;
                }
            }

            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};

export default useActiveSection;
