import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const indiaDestinations = [
    { name: 'New Delhi', img: '/city/india/delhi.webp', slug: 'new-delhi' },
    { name: 'Mumbai', img: '/city/india/mumbai.webp', slug: 'mumbai' },
    { name: 'Hyderabad', img: '/city/india/hydeabad.jpg', slug: 'hyderabad' },
    { name: 'Chennai', img: '/city/india/Chennai.webp', slug: 'chennai' }
];

const abroadDestinations = [
    { name: 'Russia', img: '/city/abroad/russia.jpg', slug: 'russia' },
    { name: 'Kazakhstan', img: '/city/abroad/kazakhstan.jpg', slug: 'kazakhstan' },
    { name: 'Canada', img: '/city/abroad/canada.jpg', slug: 'canada' },
    { name: 'USA', img: '/city/abroad/usa.jpg', slug: 'usa' }
];

const DestinationPicker = () => {
    const [activeTab, setActiveTab] = useState('india');
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleCityClick = (citySlug) => {
        console.log('City clicked:', citySlug);
        navigate(`/colleges/${citySlug}`);
    };

    const handleTabChange = (tab) => {
        console.log('Tab changed to:', tab);
        setActiveTab(tab);
    };

    const currentDestinations = activeTab === 'india' ? indiaDestinations : abroadDestinations;
    console.log('Active tab:', activeTab, 'Current destinations:', currentDestinations);

    return (
        <section
            className="py-12 md:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
        >
            {/* Luxurious Blurred Light background shapes */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 z-30">
                {/* Toggle Switch */}
                <div className="flex justify-center mb-12 md:mb-16 relative z-50">
                    <div className="bg-gray-100 p-1 md:p-1.5 rounded-full flex items-center gap-1 shadow-md relative z-50">
                        <button
                            onClick={() => handleTabChange('india')}
                            className={`px-6 md:px-10 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider md:tracking-widest transition-all duration-300 ${activeTab === 'india'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {t('destination.studyInIndia')}
                        </button>
                        <button
                            onClick={() => handleTabChange('abroad')}
                            className={`px-6 md:px-10 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider md:tracking-widest transition-all duration-300 ${activeTab === 'abroad'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {t('destination.studyAbroad')}
                        </button>
                    </div>
                </div>

                {/* City Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {currentDestinations.map((city, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleCityClick(city.slug)}
                            className="group relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-[0_4px_32px_0_rgba(206,162,49,0.16)] hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-[2.5px] border-[#FFA726]/60 hover:border-[#FFB300] bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778]"
                            style={{ backdropFilter: "blur(7px)" }}
                        >
                            <div className="w-full h-full absolute inset-0 z-0">
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                                <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 drop-shadow-[0_2px_6px_rgba(218,174,94,0.16)]">
                                    {city.name}
                                </h3>
                                <button className="btn-primary w-full text-sm md:text-base font-extrabold shadow-xl border-2 border-[#FFA726] bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-dark hover:scale-105 active:scale-95 transition-all py-2 md:py-3">
                                    {t('destination.exploreColleges')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationPicker;
