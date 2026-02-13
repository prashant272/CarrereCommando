import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(135deg, #6366F1, #EC4899)'
                    : 'linear-gradient(135deg, #F59E0B, #FBBF24)',
                boxShadow: theme === 'dark'
                    ? '0 4px 15px rgba(99, 102, 241, 0.4)'
                    : '0 4px 15px rgba(245, 158, 11, 0.4)'
            }}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
            ) : (
                <Moon className="w-5 h-5 text-white" />
            )}
        </button>
    );
};

export default ThemeToggle;
