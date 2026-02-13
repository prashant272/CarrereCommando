import React from 'react';

const courses = [
    { title: 'Engineering', desc: 'Complete guidance for JEE, BITSAT, and top private universities.' },
    { title: 'Medical', desc: 'Expert coaching and counselling for NEET and AIIMS aspirants.' },
    { title: 'Management', desc: 'Pathways to top IIMs and prestigious B-schools after 12th/Graduation.' },
    { title: 'Law', desc: 'Comprehensive support for CLAT and other major law entrance exams.' },
    { title: 'Commerce', desc: 'Expert guidance for CA, CS, and top commerce colleges.' },
    { title: 'Arts & Humanities', desc: 'Exploring creative paths in design, psychology, and social sciences.' }
];

const CoursesPage = () => {
    return (
        <div className="relative pt-32 pb-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b]">
            {/* Blurred luxurious background shapes to match DestinationPicker */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h1 className="text-5xl font-black mb-16 text-center bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-white bg-clip-text text-transparent tracking-tighter">
                    Our <span className="gold-text">Courses</span>
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courses.map((course) => (
                        <div
                            key={course.title}
                            className="border-[2.5px] border-[#FFA726]/60 hover:border-[#FFB300] rounded-[2.5rem] p-10 glass-card transition-all duration-500 group shadow-[0_4px_32px_0_rgba(206,162,49,0.16)] hover:shadow-2xl bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] hover:-translate-y-2"
                            style={{ backdropFilter: "blur(7px)" }}
                        >
                            <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#FFD700] transition-colors drop-shadow-[0_2px_6px_rgba(218,174,94,0.12)]">{course.title}</h3>
                            <p className="text-[#fff8e1] mb-8 font-medium leading-relaxed">{course.desc}</p>
                            <button className="w-full py-3 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 rounded-full border-2 border-[#FFA726] bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-[#43290b] shadow-lg hover:scale-105 active:scale-95 transition-all group/btn">
                                View Roadmap
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
