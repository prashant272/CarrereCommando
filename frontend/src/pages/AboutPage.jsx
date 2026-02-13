import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Target, Eye, Award, Users, Globe, CheckCircle, BookOpen, FileText, Plane, DollarSign, MessageSquare } from 'lucide-react';

const AboutPage = () => {
    const navigate = useNavigate();

    const stats = [
        { icon: Award, value: '10+', label: 'Years of Experience' },
        { icon: Users, value: '5000+', label: 'Successful Admissions' },
        { icon: Globe, value: '15+', label: 'Partner Universities' },
        { icon: CheckCircle, value: '100%', label: 'Visa Success Rate' }
    ];

    const expertise = [
        {
            title: 'MBBS Abroad',
            items: ['MBBS in Russia', 'MBBS in Kazakhstan', 'NMC-Approved Universities', 'English Medium Programs', 'Affordable Medical Education']
        },
        {
            title: 'Engineering Programs',
            items: ['Engineering in Canada', 'Engineering in USA', 'Top Russian Universities', 'Scholarship Support', 'IELTS Assistance']
        }
    ];

    const services = [
        { icon: MessageSquare, title: 'Personalized Career Counselling', desc: 'Profile-based university selection and course guidance' },
        { icon: FileText, title: 'Admission & Application', desc: 'End-to-end application process support' },
        { icon: Plane, title: 'Visa & Documentation', desc: 'SOP, LOR, document verification, visa filing' },
        { icon: DollarSign, title: 'Scholarship Guidance', desc: 'Financial planning and scholarship assistance' },
        { icon: BookOpen, title: 'Interview Preparation', desc: 'Mock interviews and communication training' },
        { icon: Globe, title: 'Post-Admission Support', desc: 'Continuous guidance even after admission' }
    ];

    const whyChooseUs = [
        '10+ Years of Experience in Study Abroad Consultancy',
        '5000+ Successful Student Admissions',
        'Direct University Tie-ups',
        'Transparent Fee Structure',
        'Complete Visa & Documentation Support',
        'Dedicated Student Counsellors'
    ];

    const countries = [
        { name: 'Russia', focus: 'MBBS Programs' },
        { name: 'Kazakhstan', focus: 'Medical Universities' },
        { name: 'USA', focus: 'Engineering & Tech' },
        { name: 'Canada', focus: 'Engineering Programs' },
        { name: 'India', focus: 'Top Universities' }
    ];

    return (
        <>
            <Helmet>
                <title>
                    About Career Commando | MBBS Abroad & Engineering Admission Consultant in India
                </title>

                <meta
                    name="description"
                    content="Learn about Career Commando, a trusted MBBS abroad and engineering admission consultant in India offering guidance for MBBS in Russia, MBBS in Kazakhstan, BTech admission in India, Engineering in Canada, and Study in USA. 10+ years experience, 5000+ successful admissions."
                />

                <meta
                    name="keywords"
                    content="About Career Commando, MBBS abroad consultant India, engineering admission consultant India, BTech counselling India, study abroad consultant India, overseas education consultancy India, MBBS in Russia, MBBS in Kazakhstan, Engineering in Canada, top engineering colleges India"
                />

                <link rel="canonical" href="https://careercommando.com/about" />

                {/* Open Graph */}
                <meta property="og:title" content="About Career Commando – Trusted MBBS & Engineering Admission Consultant in India" />
                <meta property="og:description"
                    content="10+ years experience in MBBS abroad & engineering admission counselling. Trusted overseas education consultant in India with 5000+ successful admissions."
                />
                <meta property="og:url" content="https://careercommando.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Career Commando" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Career Commando – MBBS & Engineering Admission Consultant" />
                <meta name="twitter:description"
                    content="Expert guidance for MBBS abroad and Engineering admission in India. Trusted education consultant with 10+ years experience."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b]">
                {/* Blurred background shapes */}
                <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
                <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>

                {/* Hero Section */}
                <section className="relative pt-24 md:pt-32 pb-12 md:pb-24 px-4">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl">
                            About <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">Career Commando</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-bold mb-4">
                            Best Study Abroad & MBBS Consultancy in India
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            Empowering Students to Build Successful Global Careers
                        </p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 md:p-12 border-2 border-[#FFA726]/60 shadow-2xl backdrop-blur-md">
                            <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                Career Commando is one of the leading <span className="text-yellow-400 font-bold">study abroad consultants in India</span>, specializing in MBBS abroad admissions, engineering programs overseas, and professional career counselling services. With over a decade of experience, we have successfully guided thousands of students toward top universities in Russia, Kazakhstan, USA, Canada, and India.
                            </p>
                            <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                As a trusted <span className="text-yellow-400 font-bold">MBBS abroad consultancy</span>, we focus on transparency, affordability, and ethical guidance to ensure students make informed decisions about their future.
                            </p>
                            <p className="text-gray-200 text-lg leading-relaxed">
                                If you are planning for <span className="text-yellow-400 font-semibold">MBBS in Russia, MBBS in Kazakhstan, Engineering in Canada, or Study in USA</span>, Career Commando is your reliable partner.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-2xl p-6 border-2 border-[#FFA726]/60 text-center backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                                    <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                                    <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 border-2 border-[#FFA726]/60 backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-6">
                                    <Target className="w-12 h-12 text-yellow-400" />
                                    <h2 className="text-3xl font-black text-white">Our Mission</h2>
                                </div>
                                <p className="text-gray-300 text-lg mb-6">
                                    Student-First Overseas Education Consultancy
                                </p>
                                <p className="text-gray-200 leading-relaxed mb-4">
                                    Our mission is to provide transparent and reliable overseas education consultancy services that simplify the admission process for students.
                                </p>
                                <ul className="space-y-3">
                                    {['Choose the right university', 'Understand tuition fees and living costs', 'Secure confirmed admissions', 'Get complete visa support', 'Prepare for international interviews'].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-200">
                                            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-yellow-400 font-bold mt-6 text-lg">
                                    We believe in honest counselling — no hidden charges, no false promises.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 border-2 border-[#FFA726]/60 backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-6">
                                    <Eye className="w-12 h-12 text-yellow-400" />
                                    <h2 className="text-3xl font-black text-white">Our Vision</h2>
                                </div>
                                <p className="text-gray-300 text-lg mb-6">
                                    Becoming India's Most Trusted Study Abroad Consultant
                                </p>
                                <p className="text-gray-200 leading-relaxed mb-4">
                                    Our vision is to become the most trusted name in global education consultancy in India, known for ethical practices, student satisfaction, and successful admissions.
                                </p>
                                <p className="text-gray-200 leading-relaxed mb-4">
                                    We aim to bridge the gap between Indian students and international universities by providing:
                                </p>
                                <ul className="space-y-3">
                                    {['Verified university partnerships', 'Affordable MBBS abroad options', 'Career-focused course selection', 'Long-term academic guidance'].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-200">
                                            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Our Expertise – <span className="text-yellow-400">MBBS & Engineering Admissions Abroad</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {expertise.map((area, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 border-2 border-[#FFA726]/60 backdrop-blur-md">
                                    <h3 className="text-2xl font-black text-yellow-400 mb-6">{area.title}</h3>
                                    <ul className="space-y-3">
                                        {area.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-200 text-lg">
                                                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-200 text-lg text-center mt-8">
                            Our team ensures that students get admission into <span className="text-yellow-400 font-bold">recognized and globally accepted universities</span>. From university shortlisting to visa approval, we provide complete end-to-end support.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Why Career Commando is the <span className="text-yellow-400">Best Career Counselling Service</span> in India
                        </h2>
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 md:p-12 border-2 border-[#FFA726]/60 backdrop-blur-md">
                            <div className="grid md:grid-cols-2 gap-6">
                                {whyChooseUs.map((reason, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                        <span className="text-gray-200 text-lg font-medium">{reason}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-yellow-400 font-black text-xl text-center mt-8">
                                We are not just consultants — we are long-term education partners.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Our Services – <span className="text-yellow-400">Complete Admission Support</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {services.map((service, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-2xl p-6 border-2 border-[#FFA726]/60 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                    <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
                                    <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-300">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Countries We Serve */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
                            Countries We Serve
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {countries.map((country, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-2xl p-6 border-2 border-[#FFA726]/60 text-center backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                    <Globe className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
                                    <h3 className="text-xl font-black text-white mb-2">{country.name}</h3>
                                    <p className="text-sm text-gray-300">{country.focus}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-200 text-lg text-center mt-8">
                            Our international admission process is <span className="text-yellow-400 font-bold">structured, transparent, and student-friendly</span>.
                        </p>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="relative py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-8 md:p-12 border-2 border-[#FFA726]/60 backdrop-blur-md text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                                Trusted by <span className="text-yellow-400">Thousands of Students</span>
                            </h2>
                            <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                Over the years, Career Commando has built a reputation as a reliable overseas education consultant in India. Students trust us because we prioritize:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {['Accurate information', 'Ethical practices', 'Clear financial breakdown', 'Continuous support even after admission'].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-center gap-3 text-gray-200 text-lg">
                                        <CheckCircle className="w-6 h-6 text-yellow-400" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-yellow-400 font-black text-2xl">
                                Your success is our responsibility.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 md:py-24 px-4">
                    <div className="max-w-5xl mx-auto relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Start Your <span className="text-yellow-400">Study Abroad Journey</span> Today
                        </h2>
                        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                            If you are looking for the best MBBS abroad consultancy in India or a reliable study abroad consultant for engineering and medical admissions, Career Commando is here to guide you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => navigate('/counselling')}
                                className="px-8 py-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-dark font-extrabold rounded-xl border-2 border-[#FFA726] hover:scale-105 active:scale-95 transition-all shadow-2xl text-lg"
                            >
                                📞 Book Free Counselling Today
                            </button>
                            <button
                                onClick={() => navigate('/counselling')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-extrabold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all text-lg"
                            >
                                📩 Get Expert Admission Support
                            </button>
                        </div>
                        <p className="text-gray-300 text-xl mt-8 font-bold">
                            🌍 Secure Your Global Career
                        </p>
                        <p className="text-yellow-400 text-2xl font-black mt-6">
                            Career Commando – Your Trusted Partner for MBBS Abroad & Global Education.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
