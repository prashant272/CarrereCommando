import React from 'react';
import {
    GraduationCap,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer
            className="pt-24 pb-12 border-t border-white/10 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
        >
            {/* Blurred Gold/Yellow background shapes */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-2 group">
                            <GraduationCap className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase">
                                    Career
                                </span>
                                <span className="text-sm font-black text-primary leading-none tracking-[0.2em] uppercase">
                                    Commando
                                </span>
                            </div>
                        </Link>
                        <p className="text-white text-base leading-relaxed font-semibold">
                            {t('about.description')}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?viewas=100000686899395&id=61571714667441' },
                                { Icon: Instagram, href: 'https://www.instagram.com/careercommando/' }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:text-primary hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">
                            {t('footer.quickLinks')}
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: t('footerLinks.home'), path: '/' },
                                { name: t('footerLinks.courses'), path: '/courses' },
                                { name: t('footerLinks.aboutUs'), path: '/about' },
                                { name: t('footerLinks.blog'), path: '/blog' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:text-primary transition-colors text-sm font-bold"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">
                            {t('nav.contact')}
                        </h4>
                        <ul className="space-y-4">
                            {[
                                t('services.counselling'),
                                t('services.admissionSupport'),
                                t('services.testPrep'),
                                t('services.scholarship'),
                                t('services.visaAssistance'),
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-white hover:text-primary transition-colors text-sm font-bold"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">
                            {t('footer.contact')}
                        </h4>
                        <ul className="space-y-6">
                            {/* Office Locations */}
                            <li className="flex gap-4 text-sm font-medium">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-white font-bold">Head Office</span>
                                    <span className="text-white">C-31, Nawada Housing Complex, New Delhi - 110059</span>

                                    <span className="text-white font-bold mt-4">Mumbai Office</span>
                                    <span className="text-white">SGS, 1 Aerocity Corporate Park, 7th Floor - 7026, Andheri - Kurla Rd Safed Pool Shivaji Nagar, Jarimari, Saki Naka, Mumbai, Maharashtra 400072</span>

                                    <a
                                        href="https://maps.google.com/?q=SGS,+1+Aerocity+Corporate+Park,+Andheri+Kurla+Rd,+Mumbai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors font-bold text-xs uppercase tracking-wider mt-1"
                                    >
                                        {t('footerLinks.viewOnMap')} →
                                    </a>
                                </div>
                            </li>

                            <li className="flex gap-4 text-sm font-medium">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <a
                                        href="tel:+919319931989"
                                        className="text-white hover:text-primary transition-colors font-bold text-lg"
                                    >
                                        +91 9319 9319 89
                                    </a>
                                    <a
                                        href="tel:+919810910686"
                                        className="text-white hover:text-primary transition-colors"
                                    >
                                        +91 9810 91 0686{' '}
                                        <span className="text-xs">({t('footerLinks.helpline')})</span>
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-4 text-sm font-medium">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <a
                                    href="mailto:careercommandoo@gmail.com"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    careercommandoo@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Embedded Map */}
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 text-center">
                    <p className="text-white text-xs tracking-widest font-black uppercase">
                        © 2026 CAREER COMMANDO. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
