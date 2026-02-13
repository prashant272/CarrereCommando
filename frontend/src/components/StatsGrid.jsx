import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsGrid = () => {
    const { t } = useLanguage();

    const stats = [
        {
            icon: '⏱️',
            val: '3000+',
            label: t('whyChooseUs.counselingHours'),
        },
        {
            icon: '🏢',
            val: '5+',
            label: t('whyChooseUs.branchOffices'),
        },
        {
            icon: '🎓',
            val: '2500+',
            label: t('whyChooseUs.studentsAbroad'),
        },
        {
            icon: '📅',
            val: '18+',
            label: t('whyChooseUs.yearsExperience'),
        }
    ];

    return (
        <section
            className="py-20 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[30vh] border-y border-white/10"
        >
            {/* Premium blurred light background shapes */}
            <div className="absolute -top-10 -left-20 w-56 h-56 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-16 w-60 h-60 bg-[#fff8e183] rounded-full blur-[100px] opacity-50 pointer-events-none z-0"></div>
            <div className="relative max-w-7xl mx-auto px-4 z-10">
                {/* Header: Why Choose Us */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_6px_16px_rgba(218,174,94,0.14)]">
                        {t('whyChooseUs.title').split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF6F00] bg-clip-text text-transparent gold-text">{t('whyChooseUs.title').split(' ').pop()}</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-medium">
                        {t('whyChooseUs.subtitle')}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center space-y-4 bg-gradient-to-b from-white/15 via-[#1b1832bb] to-[#2d190755] border border-[#FFD700]/25 shadow-lg rounded-2xl py-8 px-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            style={{ backdropFilter: "blur(7px)" }}
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700]/30 via-[#FFB300]/20 to-[#FF6F00]/10 mb-2 shadow-lg drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <span className="text-5xl md:text-6xl select-none">{s.icon}</span>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-black text-[#FFD700] drop-shadow-[0_2px_10px_rgba(218,174,94,0.24)] tracking-tight">{s.val}</div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#f9e9be] drop-shadow max-w-[170px] mx-auto">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
