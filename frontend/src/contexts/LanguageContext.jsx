import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

// Supported languages
export const LANGUAGES = {
    en: { code: 'en', name: 'English', nativeName: 'English' },
    hi: { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    mai: { code: 'mai', name: 'Maithili', nativeName: 'मैथिली' },
    ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    te: { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    kn: { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    ml: { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        // Get language from localStorage or default to 'en'
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en';
    });

    const [translations, setTranslations] = useState({});

    useEffect(() => {
        // Load translation file for current language
        const loadTranslations = async () => {
            try {
                const translationModule = await import(`../locales/${language}.json`);
                setTranslations(translationModule.default);
            } catch (error) {
                console.error(`Failed to load translations for ${language}:`, error);
                // Fallback to English if translation file not found
                if (language !== 'en') {
                    const fallbackModule = await import('../locales/en.json');
                    setTranslations(fallbackModule.default);
                }
            }
        };

        loadTranslations();
        localStorage.setItem('language', language);
    }, [language]);

    // Translation function
    const t = (key) => {
        const keys = key.split('.');
        let value = translations;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value || key;
    };

    const setLanguage = (langCode) => {
        if (LANGUAGES[langCode]) {
            setLanguageState(langCode);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
            {children}
        </LanguageContext.Provider>
    );
};
