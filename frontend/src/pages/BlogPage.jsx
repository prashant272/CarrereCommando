import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogs } from '../hooks/useBlogs';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { language } = useLanguage();

    // Use React Query hook - automatic caching!
    // Note: Blog list doesn't need translation, only detail page does
    const { data: blogs = [], isLoading: loading } = useBlogs(selectedCategory);

    const categories = [
        { id: 'all', label: 'All Updates' },
        { id: 'MBA', label: 'MBA Updates' },
        { id: 'Engineering', label: 'Engineering Updates' },
        { id: 'NEET', label: 'NEET Updates' },
        { id: 'General', label: 'General' }
    ];

    if (loading) {
        return (
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="relative pt-32 pb-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b]">
            {/* Luxurious Blurred Light background shapes (like DestinationPicker, but background of whole page not inside cards) */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <h1 className="text-5xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF6F00] bg-clip-text text-transparent tracking-tighter drop-shadow-[0_6px_16px_rgba(218,174,94,0.18)]">
                    Latest <span className="gold-text">Updates & Blogs</span>
                </h1>
                <p className="text-center text-[#fff8e1]/70 mb-12 max-w-2xl mx-auto">
                    Stay updated with the latest news, tips, and insights for your career journey
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-7 py-3 rounded-full font-black uppercase tracking-widest transition-all duration-300 shadow-md border-2 ${selectedCategory === cat.id
                                    ? 'bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-[#43290b] border-[#FFD700]/80 shadow-xl'
                                    : 'bg-white/5 text-[#FFD700] border-[#FFD700]/30 hover:bg-[#FFD700]/20 hover:text-white'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Premium small card, orange border, transparent bg - matching DestinationPicker premium look */}
                {blogs.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-[#fff8e1] text-xl">No blogs found in this category.</p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                onClick={() => navigate(`/blog/${blog.slug}`)}
                                className="group relative h-[25rem] rounded-3xl overflow-hidden shadow-[0_4px_32px_0_rgba(206,162,49,0.16)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-[2.5px] border-[#FFA726]/60 hover:border-[#FFB300] bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778]"
                                style={{
                                    backdropFilter: "blur(7px)",
                                    minHeight: "30rem",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                {/* Card Thumbnail */}
                                {blog.thumbnailUrl && (
                                    <div className="w-full h-36 overflow-hidden relative">
                                        <img
                                            src={blog.thumbnailUrl}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={e => { e.target.style.display = 'none'; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                                    </div>
                                )}
                                {/* Card Content */}
                                <div className="flex-1 flex flex-col justify-between p-5 md:p-6 z-10 relative">
                                    {/* Top badge/date */}
                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                        <span className="px-3 py-1 bg-gradient-to-r from-[#FFD700]/25 via-[#FFB300]/10 to-white/10 text-[#FFD700] text-[11px] font-black rounded-full tracking-wider shadow">
                                            {blog.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-[#FFD700]/80 text-xs font-semibold">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-black text-white group-hover:text-[#FFD700] transition-colors leading-snug drop-shadow-[0_2px_6px_rgba(218,174,94,0.12)] mb-1 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    {/* Excerpt */}
                                    <p className="text-[#fff8e1] text-sm font-medium leading-relaxed mb-1 line-clamp-2">
                                        {blog.excerpt}
                                    </p>
                                    {/* Tags */}
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {blog.tags.slice(0, 2).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] text-[#FFD700]/80 bg-[#fff8e1]/10 px-2 py-0.5 rounded-full border border-[#FFD700]/20"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {/* Read More */}
                                    <button
                                        onClick={e => { e.stopPropagation(); navigate(`/blog/${blog.slug}`); }}
                                        className="mt-auto w-full py-2 font-extrabold uppercase tracking-widest rounded-full shadow-lg border-2 border-[#FFA726] 
                                            bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-dark flex items-center justify-center gap-2 group/btn 
                                            hover:scale-105 active:scale-95 transition-all text-xs"
                                    >
                                        Read Full Article
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
