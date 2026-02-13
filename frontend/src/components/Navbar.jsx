import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
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
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.mba'), href: '/mba' },
        { name: t('nav.engineering'), href: '/engineering' },
        { name: t('nav.neet'), href: '/neet' },
        { name: t('nav.blogs'), href: '/blog' },
        { name: t('nav.contact'), href: '/contact' },
    ];


    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300"
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-start overflow-visible">
                    {/* Logo - Large in dark mode, will be small in light mode via CSS */}
                    <Link to="/" className="flex items-center gap-3 group cursor-pointer -ml-16 -mt-24 transition-all duration-300">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-300 flex-shrink-0">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain bg-transparent" />
                        </div>
                    </Link>

                    {/* Desktop Navigation - Stays at top */}
                    <div className="hidden md:flex items-center gap-6 mt-6 flex-1 justify-end mr-4">
                        {navLinks.map((link, idx) => (
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
                            className="flex items-center gap-2 text-xxl group bg-yellow-400 text-black font-bold px-2 py-1 rounded-full shadow hover:bg-yellow-500 transition"
                            style={{ WebkitBackgroundClip: "initial", WebkitTextFillColor: "initial" }}
                        >
                            {t('nav.bookCounselling')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <LanguageSelector />
                        </div>
                    </div>

                    {/* Mobile Menu Button with Theme & Language Toggles */}
                    <div className="md:hidden flex items-center gap-3 mt-0">
                        <ThemeToggle />
                        <LanguageSelector />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-blue-500 hover:text-blue-400 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-primary/20 px-4 py-6 space-y-4 shadow-xl shadow-primary/10">
                    {navLinks.map((link, idx) => (
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
                        className="block w-full text-center py-1 bg-yellow-400 text-black font-bold rounded-full shadow hover:bg-yellow-500 transition"
                        style={{ WebkitBackgroundClip: "initial", WebkitTextFillColor: "initial" }}
                    >
                        {t('nav.bookCounselling')}
                    </Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
