import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogs } from '../hooks/useBlogs';
import { Calendar, ArrowRight } from 'lucide-react';

const EngineeringPage = () => {
    const navigate = useNavigate();
    const { data: blogs = [], isLoading: loading, error } = useBlogs('Engineering');

    if (loading) {
        return (
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <section
            className="relative pt-32 pb-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b]"
        >
            {/* Blurred luxurious background shapes to match DestinationPicker */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <h1 className="text-5xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-white bg-clip-text text-transparent tracking-tighter">
                    <span className="gold-text">Engineering</span> Updates
                </h1>
                <p className="text-center text-[#FFF8E1] mb-12 max-w-2xl mx-auto font-medium">
                    Latest news, tips, and insights for Engineering aspirants
                </p>

                {/* Blog Grid */}
                {blogs.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-[#FFECB3] text-xl">No Engineering updates available yet.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-12">
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="border-[2.5px] border-[#FFA726] hover:border-[#FFB300] rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-[0_4px_32px_0_rgba(255,163,38,0.18)] hover:shadow-2xl"
                                style={{ background: 'linear-gradient(130deg, #1a1734 60%, #322004 90%)', backdropFilter: "blur(7px)" }}
                            >
                                {blog.thumbnailUrl && (
                                    <div className="h-72 overflow-hidden bg-dark/50">
                                        <img
                                            src={blog.thumbnailUrl}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    </div>
                                )}
                                <div className="p-10 space-y-6">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <span className="px-4 py-2 bg-[#FFA726]/10 text-[#FFA726] text-base font-bold rounded-full tracking-wide">
                                            {blog.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-[#fff8e1bb] text-sm">
                                            <Calendar className="w-5 h-5" />
                                            {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFD700] transition-colors leading-tight">
                                        {blog.title}
                                    </h3>
                                    <p className="text-[#FFF8E1] font-medium leading-relaxed line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs text-[#fff9e6ad] bg-white/5 px-3 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <button
                                        onClick={() => navigate(`/blog/${blog.slug}`)}
                                        className="w-full py-4 font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-2 rounded-full border-2 border-[#FFA726] bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-[#43290b] shadow-lg hover:scale-105 active:scale-95 transition-all group/btn"
                                    >
                                        Read Full Article
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default EngineeringPage;
