import React from 'react';
import { User, MessageCircle, GraduationCap, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesTimeline = () => {
    const { t } = useLanguage();
    const steps = [
        {
            name: t('servicesSection.studentProfile'),
            icon: User,
        },
        {
            name: t('servicesSection.careerCounseling'),
            icon: MessageCircle,
        },
        {
            name: t('servicesSection.courseSelection'),
            icon: GraduationCap,
        },
        {
            name: t('servicesSection.applicationAssistance'),
            icon: FileText,
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
        >
            {/* Luxurious Blurred Light background shapes */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 drop-shadow-[0_6px_16px_rgba(218,174,94,0.14)]">
                    {t('servicesSection.title').split(' ')[0]} <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF6F00] bg-clip-text text-transparent gold-text shadow-lg">{t('servicesSection.title').split(' ')[1]}</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative h-72 rounded-3xl overflow-hidden shadow-[0_4px_32px_0_rgba(206,162,49,0.16)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-[2.5px] border-[#FFA726]/60 hover:border-[#FFB300] bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778]"
                            style={{ backdropFilter: 'blur(7px)' }}
                        >
                            <div className="flex flex-col justify-center items-center h-full z-10 relative p-6">
                                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FFD700]/30 via-[#FFB300]/20 to-[#FF6F00]/10 flex items-center justify-center shadow-lg">
                                    <step.icon className="w-12 h-12 text-[#FFD700] drop-shadow-[0_2px_8px_rgba(255,223,98,0.22)]" />
                                </div>
                                <h3 className="text-xl font-black text-white text-center drop-shadow-md">
                                    {step.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesTimeline;
