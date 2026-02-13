import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            className="relative min-h-screen flex items-center pt-1 md:pt-28 overflow-hidden bg-dark"
            style={{
                backgroundImage: "url('/banner.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Darker overlay for better text readability */}
            <div className="absolute inset-0 bg-dark/80 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Hero Text Content */}
                    <div className="space-y-6 md:space-y-10 text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                            {t('hero.title')}
                        </h1>

                        <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start pt-1">
                            <Link
                                to="/counselling"
                                className="btn-primary px-6 py-3 md:px-8 md:py-4 text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 group"
                            >
                                {t('nav.bookCounselling')}
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <button className="px-6 py-3 md:px-11 md:py-5 border-2 border-primary bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3">
                                <div className="p-1.5 md:p-2 bg-white/20 rounded-full flex items-center justify-center">
                                    <Play className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                                </div>
                                <span className="text-sm md:text-base">{t('colleges.viewColleges')}</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 pt-1 md:pt-2 justify-center lg:justify-start flex-wrap">
                            <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">100+</span>
                                <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.15em] sm:tracking-[0.23em] font-black text-center">{t('heroStats.expertCounselors')}</span>
                            </div>
                            <div className="h-8 sm:h-10 w-px bg-white/20" />
                            <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">98%</span>
                                <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.15em] sm:tracking-[0.23em] font-black text-center">{t('heroStats.successRate')}</span>
                            </div>
                            <div className="h-8 sm:h-10 w-px bg-white/20" />
                            <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">24/7</span>
                                <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.15em] sm:tracking-[0.23em] font-black text-center">{t('heroStats.support')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Placeholder/Empty for symmetry on large screens */}
                    <div className="relative group lg:mt-0 mt-20 order-1 lg:order-2" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
