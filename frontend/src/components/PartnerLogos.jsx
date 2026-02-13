import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import OptimizedImage from './OptimizedImage';
import { useLanguage } from '../contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/pagination';

const PartnerLogos = () => {
    const { t } = useLanguage();
    const partners = [
    {
        name: "SRM Institute of Science and Technology",
        logo: "../guidence/srm.jpg",
        type: "Engineering",
        category: "Private University"
    },
    {
        name: "VIT Vellore",
        logo: "../guidence/vit.jpg",
        type: "Engineering",
        category: "Private University"
    },
    {
        name: "Thapar Institute of Engineering and Technology",
        logo: "../guidence/thapar.png",
        type: "Engineering",
        category: "Private University"
    },
    {
        name: "Manipal Academy of Higher Education",
        logo: "../guidence/manipal.jpg",
        type: "University",
        category: "Private University"
    },
    {
        name: "BITS Pilani",
        logo: "../guidence/bit.png",
        type: "Engineering",
        category: "Private Deemed University"
    },
    {
        name: "Shiv Nadar University",
        logo: "../guidence/shiv.png",
        type: "University",
        category: "Private University"
    },
    {
        name: "Ajay Kumar Garg Engineering College",
        logo: "../guidence/ajay.jpg",
        type: "Engineering",
        category: "Private Engineering College"
    },
    {
        name: "ABES Engineering College",
        logo: "../guidence/abes.jpg",
        type: "Engineering",
        category: "Private Engineering College"
    },
    {
        name: "JSS Academy of Technical Education",
        logo: "../guidence/jss.png",
        type: "Engineering",
        category: "Private Engineering College"
    },
    {
        name: "NITTE Meenakshi Institute of Technology",
        logo: "../guidence/mankashi.jpg",
        type: "Engineering",
        category: "Private Engineering College"
    },
];


    return (
        <section
            className="py-24 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
        >
            {/* Luxurious Blurred Light background shapes */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 z-10 relative">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        {t('partnerInstitutions.title').split(' ')[0]} <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF6F00] bg-clip-text text-transparent gold-text">
                            {t('partnerInstitutions.title').split(' ').slice(1).join(' ')}
                        </span>
                    </h2>
                    <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium">
                        {t('partnerInstitutions.subtitle')}
                    </p>
                </div>

                {/* Partner Logos Carousel */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="pb-16"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="group relative h-64 flex flex-col items-center justify-center bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-2xl p-8 border-[2.5px] border-[#FFA726]/60 hover:border-[#FFB300] shadow-[0_4px_32px_0_rgba(206,162,49,0.16)] hover:shadow-2xl transition-all duration-300"
                                style={{ backdropFilter: "blur(7px)" }}
                            >
                                {/* Logo Container with transparent white background */}
                                <div className="w-32 h-32 mb-6 flex items-center justify-center rounded-xl bg-white bg-opacity-60 shadow-lg">
                                    <OptimizedImage
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                        fallbackSrc={'https://via.placeholder.com/150?text=' + partner.name.split(' ')[0]}
                                    />
                                </div>

                                {/* Partner Info */}
                                <div className="text-center space-y-2">
                                    <h3 className="text-lg font-black text-[#FF9800] group-hover:text-[#FFB300] transition-colors">
                                        {partner.name}
                                    </h3>
                                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#FFD700] to-[#FF9800] text-dark text-xs font-bold rounded-full">
                                        {partner.type}
                                    </span>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FF9800] opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PartnerLogos;
