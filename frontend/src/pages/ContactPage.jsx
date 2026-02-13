import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactPage = () => {
    const navigate = useNavigate();

    const contactNumbers = [
        { number: '+91 9319 9319 89', label: 'Primary Contact', icon: Phone },
        { number: '+91 9810 91 0686', label: 'Helpline', icon: Phone },
    ];

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visit Our Office',
            content: 'Prime Time Research Media Pvt. Ltd, C-31, Nawada Housing Complex, New Delhi-59',
            link: 'https://maps.google.com/?q=C-31,+Nawada+Housing+Complex,+New+Delhi-59'
        },
        {
            icon: Mail,
            title: 'Email Us',
            content: 'careercommandoo@gmail.com',
            link: 'mailto:careercommandoo@gmail.com'
        },
        {
            icon: Clock,
            title: 'Office Hours',
            content: 'Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed',
            link: null
        }
    ];

    return (
        <>
            <Helmet>
                <title>
                    Contact Career Commando | MBBS Abroad & Engineering Admission Consultant in India
                </title>

                <meta
                    name="description"
                    content="Contact Career Commando, a trusted MBBS abroad and engineering admission consultant in India. Get expert guidance for MBBS in Russia, MBBS in Kazakhstan, BTech admission in India, Engineering in Canada, and Study in USA. Book free counselling today."
                />

                <meta
                    name="keywords"
                    content="contact Career Commando, MBBS abroad consultant India, engineering admission consultant India, BTech counselling India, study abroad consultant in Noida, overseas education consultant Delhi NCR, contact education consultant India"
                />

                <link rel="canonical" href="https://careercommando.com/contact" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Career Commando – MBBS Abroad & Engineering Admission Consultant in India" />
                <meta property="og:description"
                    content="Get expert counselling for MBBS abroad and Engineering admission in India. Contact Career Commando today for free guidance."
                />
                <meta property="og:url" content="https://careercommando.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Career Commando" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Career Commando – Trusted Education Consultant in India" />
                <meta name="twitter:description"
                    content="Get expert counselling for MBBS abroad and Engineering admission. Contact us for free guidance."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b]">
                {/* Blurred background shapes */}
                <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
                <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>

                {/* Hero Section */}
                <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl">
                            Contact <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">Career Commando</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-200 font-bold mb-4">
                            MBBS Abroad & Engineering Admission Consultant in India
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            Get expert guidance for MBBS in Russia, MBBS in Kazakhstan, BTech admission in India, Engineering in Canada, and Study in USA
                        </p>
                    </div>
                </section>

                {/* Local SEO Paragraph */}
                <section className="relative py-8 px-4">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-6 md:p-8 border-2 border-[#FFA726]/60 backdrop-blur-md">
                            <p className="text-gray-200 text-lg leading-relaxed text-center">
                                If you are looking for a <span className="text-yellow-400 font-bold">trusted MBBS abroad consultant in Noida</span> or an <span className="text-yellow-400 font-bold">experienced engineering admission consultant in Delhi NCR</span>, Career Commando is here to guide you with complete transparency and personalized support.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call Us Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Call Us – <span className="text-yellow-400">Career Commando</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactNumbers.map((contact, idx) => (
                                <a
                                    key={idx}
                                    href={`tel:${contact.number.replace(/\s/g, '')}`}
                                    className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-2xl p-6 border-2 border-[#FFA726]/60 backdrop-blur-md hover:scale-105 transition-transform duration-300 text-center group"
                                >
                                    <contact.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                                    <div className="text-sm text-gray-300 mb-2 font-medium">{contact.label}</div>
                                    <div className="text-xl md:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">
                                        {contact.number}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Visit Our Office in <span className="text-yellow-400">Noida, Delhi NCR</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 border-2 border-[#FFA726]/60 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
                                <h3 className="text-2xl font-black text-white mb-2">Head Office (Delhi)</h3>
                                <p className="text-gray-200 mb-4">Prime Time Research Media Pvt. Ltd, C-31, Nawada Housing Complex, New Delhi-59</p>
                                <a
                                    href="https://maps.google.com/?q=C-31,+Nawada+Housing+Complex,+New+Delhi-59"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-400 hover:text-white transition-colors font-bold uppercase tracking-wider flex items-center gap-2"
                                >
                                    View on Map <Send className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 border-2 border-[#FFA726]/60 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
                                <h3 className="text-2xl font-black text-white mb-2">Mumbai Office</h3>
                                <p className="text-gray-200 mb-4">SGS, 1 Aerocity Corporate Park, 7th Floor - 7026, Andheri - Kurla Rd Safed Pool Shivaji Nagar, Jarimari, Saki Naka, Mumbai, Maharashtra 400072</p>
                                <a
                                    href="https://maps.google.com/?q=SGS,+1+Aerocity+Corporate+Park,+Andheri+Kurla+Rd,+Mumbai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-400 hover:text-white transition-colors font-bold uppercase tracking-wider flex items-center gap-2"
                                >
                                    View on Map <Send className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Talk to Our <span className="text-yellow-400">MBBS & Engineering Admission Experts</span>
                        </h2>
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 md:p-12 border-2 border-[#FFA726]/60 backdrop-blur-md">
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h3 className="text-2xl font-black text-yellow-400 mb-4">MBBS Abroad Guidance</h3>
                                    <ul className="space-y-3 text-gray-200">
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>MBBS in Russia</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>MBBS in Kazakhstan</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>NMC-Approved Universities</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>Affordable Medical Education</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-yellow-400 mb-4">Engineering Admission Support</h3>
                                    <ul className="space-y-3 text-gray-200">
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>BTech Admission in India</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>Engineering in Canada</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>Study in USA</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>Top Engineering Colleges Counselling</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Book Free Counselling Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
                            Book Free <span className="text-yellow-400">Career Counselling in India</span>
                        </h2>
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 md:p-12 border-2 border-[#FFA726]/60 backdrop-blur-md text-center">
                            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                                Get personalized guidance for MBBS in Russia & BTech admission in India. Our expert counsellors are available to help you choose the right university and course for your future.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/counselling')}
                                    className="px-8 py-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-dark font-extrabold rounded-xl border-2 border-[#FFA726] hover:scale-105 active:scale-95 transition-all shadow-2xl text-lg flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Book Free Counselling
                                </button>
                                <a
                                    href="https://wa.me/919810910686"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-green-600 text-white font-extrabold rounded-xl border-2 border-green-500 hover:scale-105 active:scale-95 transition-all shadow-2xl text-lg flex items-center justify-center gap-2"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Find Us on <span className="text-yellow-400">Google Maps</span>
                        </h2>
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-4 border-2 border-[#FFA726]/60 backdrop-blur-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.0!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '1rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Career Commando Office Location"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactPage;
