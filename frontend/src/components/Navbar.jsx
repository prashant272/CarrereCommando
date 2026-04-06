import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';


// Helper for gradient text classes
const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500";
const gradientHover = "hover:bg-gradient-to-l hover:from-green-500 hover:via-yellow-400 hover:to-orange-500";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            setIsScrolled(scrolled);
            setShowPill(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [showPill, setShowPill] = useState(false);

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.mba'), href: '/mba' },
        { name: t('nav.engineering'), href: '/engineering' },
        { name: t('nav.neet'), href: '/neet' },
        { name: t('nav.blogs'), href: '/blog' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    const DesktopNavContent = ({ isPill = false }) => (
        <>
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.href}
                    className={`
                        text-sm font-bold transition-colors 
                        ${gradientText} ${gradientHover} 
                    `}
                    style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                    {link.name}
                </Link>
            ))}
            <Link
                to="/counselling"
                className="flex items-center gap-2 text-xxl group bg-yellow-400 text-black font-bold px-4 py-1.5 rounded-full shadow hover:bg-yellow-500 transition"
                style={{ WebkitBackgroundClip: "initial", WebkitTextFillColor: "initial" }}
            >
                {t('nav.bookCounselling')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-3 pl-2 border-l border-gray-700/50">
                {/* Reserved for future icons if needed */}
            </div>
        </>
    );

    return (
        <>
            {/* DESKTOP: Standard Navbar (Hidden when scrolled past 100px) */}
            <nav className={`hidden md:flex fixed w-full z-50 transition-all duration-300  ${showPill ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-start overflow-visible">
                        {/* Huge Logo for Standard View */}
                        <Link to="/" className="flex items-center gap-3 group cursor-pointer -ml-16 -mt-24 transition-all duration-300">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-300 flex-shrink-0">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain bg-transparent" />
                            </div>
                        </Link>

                        <div className="flex items-center gap-6 mt-6 flex-1 justify-end mr-4">
                            <DesktopNavContent />
                        </div>
                    </div>
                </div>
            </nav>

            {/* DESKTOP: Scroll Pill Navbar (Visible when scrolled past 100px) */}
            <div className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showPill ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'}`}>
                <nav className="bg-white backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-2xl flex items-center gap-8">
                    {/* Small Logo for Pill View */}
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white/5 p-1">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-black tracking-tight hidden lg:block ">Career Commando</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <DesktopNavContent isPill={true} />
                    </div>
                </nav>
            </div>

            {/* MOBILE: Always Fixed Navbar */}
            <nav className="md:hidden fixed w-full z-50 bg-[#222031] p-0 transition-all duration-300">
                <div className="w-full px-4 py-2">
                    <div className="flex justify-between items-center">
                        {/* Mobile Logo */}
                        <Link to="/" className="flex items-center gap-2 -ml-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-bold text-white text-sm">Career Commando</span>
                        </Link>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-blue-500 hover:text-blue-400 transition-colors"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#222031]/95 backdrop-blur-lg border-b border-white/10 px-4 py-6 space-y-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`
                                    block text-lg font-medium transition-colors 
                                    ${gradientText} ${gradientHover}
                                `}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/counselling"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center py-2 bg-yellow-400 text-black font-bold rounded-full shadow hover:bg-yellow-500 transition"
                            style={{ WebkitBackgroundClip: "initial", WebkitTextFillColor: "initial" }}
                        >
                            {t('nav.bookCounselling')}
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
