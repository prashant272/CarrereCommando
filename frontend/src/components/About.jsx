import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section
            id="about"
            className="py-24 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
        >
            {/* Luxurious Blurred Light background shapes */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="relative bg-white/10 border border-[#e4e4e4]/10 rounded-3xl overflow-hidden shadow-md backdrop-blur-md">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                                alt="About Team"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent flex items-center p-12">
                                <div className="max-w-xs space-y-4">
                                    <div className="text-5xl font-black text-[#FFD700] drop-shadow-[0_2px_10px_rgba(240,229,150,0.18)]">{t('about.yearsExperience')}</div>
                                    <div className="text-white font-bold text-lg leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.10)]">{t('about.excellence')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_6px_16px_rgba(218,174,94,0.14)]">
                                {t('about.title')}
                            </h2>
                            <p className="text-xl text-white/80 leading-relaxed font-medium shadow-sm">
                                {t('about.description')}
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                t('services.personalizedCounselling'),
                                t('services.admissionGuidance'),
                                t('services.careerPathMapping'),
                                t('services.interviewPreparation'),
                                t('services.documentAssistance'),
                                t('services.scholarshipSupport')
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-4 group/item">
                                    <div className="w-6 h-6 rounded-full bg-[#FFD700]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                        <Check className="w-3.5 h-3.5 text-[#FFD700]" strokeWidth={3} />
                                    </div>
                                    <span className="text-white text-sm font-bold uppercase tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary px-10 py-5 font-extrabold shadow-xl border-2 border-[#FFA726] bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-dark hover:scale-105 active:scale-95 transition-all">
                            {t('about.learnMore')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
