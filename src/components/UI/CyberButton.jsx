const CyberButton = ({ children, href, primary }) => {
    return (
        <a
            href={href}
            className={`relative inline-block px-8 py-4 font-bold uppercase tracking-wider text-sm overflow-hidden group ${primary
                ? 'text-[var(--bg-color)] bg-[var(--primary-neon)]'
                : 'text-[var(--primary-neon)] border border-[var(--primary-neon)]'
                }`}
        >
            <span className="relative z-10">{children}</span>

            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-50" />
        </a>
    );
};

export default CyberButton;
