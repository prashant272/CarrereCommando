import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogs } from '../hooks/useBlogs';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, ArrowRight } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const LatestBlogs = () => {
    const navigate = useNavigate();
    const { language, t } = useLanguage();

    // Fetch latest blogs from API - cached with React Query
    // Note: Blog list doesn't need translation, only detail page does
    const { data: allBlogs = [], isLoading, error } = useBlogs('all');

    // Get only the latest 2 blogs
    const latestBlogs = allBlogs.slice(0, 2);

    if (isLoading) {
        return (
            <section className="py-24 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-[#F3CC60] border-t-transparent rounded-full animate-spin"></div>
                </div>
            </section>
        );
    }

    if (error || latestBlogs.length === 0) {
        return null; // Don't show section if no blogs
    }

    return (
        <section
            id="blog"
            className="py-24 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
        >
            {/* Luxurious Blurred Light background shapes */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_6px_16px_rgba(218,174,94,0.14)]">
                            {t('latestBlogs.title').split(' ')[0]} <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF6F00] bg-clip-text text-transparent gold-text shadow-lg">{t('latestBlogs.title').split(' ')[1]}</span>
                        </h2>
                        <p className="font-semibold text-lg text-white/90 shadow-sm">
                            {t('latestBlogs.subtitle')}
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/blog')}
                        className="flex items-center gap-2 bg-gradient-to-tr from-[#e1b94a] via-[#f2d180] to-[#c98934] px-7 py-3 rounded-lg font-extrabold text-white text-base shadow-xl border-[2px] border-[#FFD700] hover:scale-105 active:scale-95 transition-all"
                    >
                        {t('latestBlogs.viewAll')}
                        <ArrowRight className="w-5 h-5 text-white drop-shadow-[0_2px_6px_rgba(255,215,0,0.3)]" />
                    </button>
                </div>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-2 gap-14">
                    {latestBlogs.map((blog) => (
                        <div
                            key={blog._id}
                            onClick={() => navigate(`/blog/${blog.slug}`)}
                            className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] border-[2.5px] border-[#FFD700]/40 shadow-[0_4px_32px_0_rgba(206,162,49,0.18)] rounded-3xl flex flex-col md:flex-row items-center gap-8 p-10 group hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            style={{ backdropFilter: "blur(9px)" }}
                        >
                            {/* Blog Image */}
                            {blog.thumbnailUrl && (
                                <div className="w-full md:w-52 h-52 bg-[#3a2c0e] rounded-2xl overflow-hidden shrink-0 shadow-lg border border-[#F3CC60]/30">
                                    <img
                                        src={blog.thumbnailUrl}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400';
                                        }}
                                    />
                                </div>
                            )}

                            {/* Blog Content */}
                            <div className="space-y-5 text-center md:text-left w-full">
                                {/* Category & Date */}
                                <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                                    <span className="px-4 py-1 bg-gradient-to-r from-[#FFE085] via-[#FFD700]/75 to-[#F2C760]/80 text-[#2e1700] text-xs font-bold rounded-full shadow-lg border border-[#EFC046]/40 uppercase tracking-widest">
                                        {blog.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-white/70 font-semibold text-sm">
                                        <Calendar className="w-4 h-4 text-[#FFD700]" />
                                        {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white group-hover:text-[#FFD700] transition-colors duration-200 drop-shadow-md">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                {blog.excerpt && (
                                    <p className="text-white/90 line-clamp-2 font-medium drop-shadow-sm">
                                        {blog.excerpt}
                                    </p>
                                )}

                                {/* Read More */}
                                <div className="flex items-center gap-2 text-[#FFD700] font-bold hover:text-white/95 transition-colors text-lg justify-center md:justify-start">
                                    Read Article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FFD700] drop-shadow-[0_2px_6px_rgba(255,215,0,0.17)]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
