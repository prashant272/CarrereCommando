import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlogDetail } from '../hooks/useBlogs';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, ArrowLeft, Eye, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();

    // Use React Query hook with language parameter - automatic caching per language!
    const { data: blog, isLoading: loading, error } = useBlogDetail(slug, language);

    if (loading) {
        return (
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Blog Not Found</h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10">{error}</p>
                <button onClick={() => navigate('/blog')} className="btn-primary text-xl px-8 py-4">
                    Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <>
            {/* Dynamic SEO Meta Tags for Google Ranking */}
            <Helmet>
                <title>{blog.title} | Career Commando</title>
                <meta name="description" content={blog.excerpt} />
                {blog.tags && blog.tags.length > 0 && (
                    <meta name="keywords" content={blog.tags.join(', ')} />
                )}
                
                {/* Open Graph / Social Media */}
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.excerpt} />
                <meta property="og:type" content="article" />
                {blog.thumbnailUrl && <meta property="og:image" content={blog.thumbnailUrl} />}
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.excerpt} />
                {blog.thumbnailUrl && <meta name="twitter:image" content={blog.thumbnailUrl} />}
            </Helmet>

            <div
                className="relative pt-24 md:pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] overflow-hidden"
                style={{ zIndex: 1 }}
            >
                {/* Luxurious Blurred Light background shapes to match DestinationPicker */}
                <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
                <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>


            {/* Back Button */}
            <div className="max-w-4xl mx-auto px-4 mb-10 relative z-10">
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center gap-2 text-white/80 hover:text-[#FFD700] transition-colors font-semibold text-lg md:text-xl"
                >
                    <ArrowLeft className="w-6 h-6" />
                    Back to all blogs
                </button>
            </div>

            {/* Blog Content */}
            <article className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Category Badge */}
                <div className="mb-8">
                    <span className="px-5 py-3 bg-primary/10 text-[#FFD700] text-lg md:text-xl font-bold rounded-full tracking-wider shadow-lg">
                        {blog.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight drop-shadow-[0_2px_12px_rgba(218,174,94,0.14)]">
                    {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center gap-8 text-[#f9e9be] text-lg md:text-2xl mb-12 pb-10 border-b border-white/15">
                    <div className="text-[#FFD700]/80 text-lg md:text-xl font-bold">
                        By {blog.author}
                    </div>
                </div>

                {/* Thumbnail */}
                {blog.thumbnailUrl && (
                    <div className="mb-16 rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFD700]/30">
                        <img
                            src={blog.thumbnailUrl}
                            alt={blog.title}
                            className="w-full h-auto object-cover bg-black/20"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                {/* Excerpt */}
                <div className="mb-12 p-8 bg-[#fff8e1dd] border-l-4 border-[#FFD700] rounded-lg shadow">
                    <p className="text-2xl md:text-3xl text-[#1f2937] italic">{blog.excerpt}</p>
                </div>

                <div
                    className="max-w-none mb-16 text-xl md:text-2xl text-gray-200 leading-relaxed
                      [&_h2]:text-[#FFD700] [&_h2]:font-black [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:mt-14 [&_h2]:mb-6
                      [&_h3]:text-[#FFC872] [&_h3]:font-bold [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h3]:mt-10 [&_h3]:mb-4
                      [&_p]:mb-6 [&_p]:text-gray-200
                      [&_a]:text-[#4AC0FF] hover:[&_a]:underline
                      [&_strong]:text-white [&_strong]:font-bold
                      [&_table]:border-collapse [&_table]:w-full [&_table]:my-10 [&_table]:bg-[#ffffff08] [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:shadow-lg
                      [&_th]:border [&_th]:border-white/20 [&_th]:bg-[#FFD700]/20 [&_th]:text-[#FFD700] [&_th]:p-4 [&_th]:text-left [&_th]:font-bold
                      [&_td]:border [&_td]:border-white/10 [&_td]:p-4 [&_td]:text-gray-300
                      [&_ul]:list-disc [&_ul]:pl-8 [&_ul]:my-6 [&_ul]:space-y-3
                      [&_ol]:list-decimal [&_ol]:pl-8 [&_ol]:my-6 [&_ol]:space-y-3
                      [&_li]:marker:text-[#FFD700]"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="mb-16 pt-10 border-t border-white/10">
                        <div className="flex items-center gap-4 flex-wrap">
                            <Tag className="w-7 h-7 text-[#FFD700]" />
                            {blog.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-5 py-2.5 bg-[#fff8e1a0] text-[#332700] text-lg md:text-xl rounded-full hover:bg-[#FFD700]/70 transition-colors font-semibold backdrop-blur-md"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back to Blogs Button */}
                <div className="text-center pt-10 border-t border-white/10">
                    <button
                        onClick={() => navigate('/blog')}
                        className="btn-primary px-10 py-5 bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-dark font-black shadow-xl border-2 border-[#FFD700] hover:scale-105 active:scale-95 transition-all text-xl md:text-2xl"
                    >
                        View More Blogs
                    </button>
                </div>
            </article>
        </div>
        </>
    );
};

export default BlogDetail;
