import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    const currentLanguage = languages[language];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                    background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
                }}
                aria-label="Select language"
            >
                <Globe className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium hidden sm:inline">
                    {currentLanguage?.nativeName || 'English'}
                </span>
                <ChevronDown
                    className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden shadow-2xl z-50"
                    style={{
                        background: 'rgba(15, 23, 42, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}
                >
                    <div className="py-2">
                        {Object.values(languages).map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full px-4 py-2 text-left transition-all duration-200 ${language === lang.code
                                        ? 'bg-gradient-to-r from-indigo-600/50 to-pink-600/50 text-white'
                                        : 'text-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">{lang.nativeName}</span>
                                    <span className="text-xs opacity-70">{lang.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
