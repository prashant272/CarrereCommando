import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const stats = [
    { label: "Total Students", value: "10,000+", icon: Users },
    { label: "Expert Counselors", value: "100+", icon: BookOpen },
    { label: "Case Matching", value: "98%", icon: Award },
    { label: "Partner Colleges", value: "500+", icon: Globe }
];

const Stats = () => {
    const { t } = useLanguage();

    const stats = [
        { label: t('stats.totalStudents'), value: "10,000+", icon: Users },
        { label: t('stats.expertCounselors'), value: "100+", icon: BookOpen },
        { label: t('stats.successRate'), value: "98%", icon: Award },
        { label: t('stats.partnerColleges'), value: "500+", icon: Globe }
    ];

    return (
        <section
            className="py-16 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[30vh] border-y border-white/5"
        >
            {/* Luxurious Blurred Light background shapes */}
            <div className="absolute -top-10 -left-20 w-52 h-52 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-56 h-56 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center space-y-2 group
                                       bg-gradient-to-b from-white/10 via-[#1b1832bb] to-[#2d190755] 
                                       border border-[#FFD700]/20 shadow-lg rounded-2xl py-6
                                       hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            style={{ backdropFilter: "blur(7px)" }}
                        >
                            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-[#FFD700]/20 transition-all">
                                <stat.icon className="w-9 h-9 text-[#FFD700] drop-shadow-[0_2px_10px_rgba(218,174,94,0.22)]" />
                            </div>
                            <div className="text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs font-bold text-[#f9e9be] uppercase tracking-widest drop-shadow">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
