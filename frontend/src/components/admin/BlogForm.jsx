import React, { useState } from 'react';
import { X, Upload, Loader, Sparkles } from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from '../../api';

const BlogForm = ({ onClose, onSuccess, editBlog = null }) => {
    const [formData, setFormData] = useState({
        title: editBlog?.title || '',
        excerpt: editBlog?.excerpt || '',
        content: editBlog?.content || '',
        category: editBlog?.category || 'General',
        tags: editBlog?.tags?.join(', ') || '',
        status: editBlog?.status || 'draft',
        thumbnailUrl: editBlog?.thumbnailUrl || ''
    });
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(editBlog?.thumbnailUrl || '');
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [generatingAI, setGeneratingAI] = useState(false);
    const [aiTopic, setAiTopic] = useState('');
    const [error, setError] = useState('');

    const handleAIGenerate = async () => {
        if (!aiTopic) {
            setError('Please enter a topic or college name to generate blog');
            return;
        }
        setGeneratingAI(true);
        setError('');
        try {
            const response = await axios.post(`${API_BASE_URL}/blogs/generate-ai`, { topic: aiTopic });
            const { title, excerpt, content } = response.data;
            setFormData(prev => ({
                ...prev,
                title: title || prev.title,
                excerpt: excerpt || prev.excerpt,
                content: content || prev.content
            }));
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Failed to generate AI content');
        } finally {
            setGeneratingAI(false);
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnailFile(file);
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const uploadThumbnail = async () => {
        if (!thumbnailFile) return formData.thumbnailUrl;

        setUploading(true);
        const formDataUpload = new FormData();
        formDataUpload.append('image', thumbnailFile);

        try {
            const response = await axios.post(`${API_BASE_URL}/blogs/upload-image`, formDataUpload);
            return response.data.key; // Return S3 key
        } catch (err) {
            console.error('Upload error:', err);
            throw new Error('Failed to upload image');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Upload thumbnail if new file selected
            let thumbnailKey = formData.thumbnailUrl;
            if (thumbnailFile) {
                try {
                    thumbnailKey = await uploadThumbnail();
                } catch (uploadError) {
                    // If image upload fails, continue without image
                    console.error('Image upload failed, continuing without image:', uploadError);
                    thumbnailKey = '';
                }
            }

            const blogData = {
                ...formData,
                thumbnailUrl: thumbnailKey
            };

            if (editBlog) {
                await axios.put(`${API_BASE_URL}/blogs/${editBlog._id}`, blogData);
            } else {
                await axios.post(`${API_BASE_URL}/blogs`, blogData);
            }

            onSuccess();
            onClose();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save blog');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-dark border border-white/10 rounded-2xl w-full max-w-4xl my-8">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-2xl font-black text-white">
                        {editBlog ? 'Edit Blog' : 'Create New Blog'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {/* AI Generation Section */}
                    {!editBlog && (
                        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                                <h3 className="text-lg font-bold text-white">Generate content with AI</h3>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    value={aiTopic}
                                    onChange={(e) => setAiTopic(e.target.value)}
                                    placeholder="Enter college name or topic (e.g. IIT Madras Admission Process)"
                                    className="flex-1 px-4 py-3 bg-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                                />
                                <button
                                    type="button"
                                    onClick={handleAIGenerate}
                                    disabled={generatingAI || !aiTopic}
                                    className="btn-primary whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {generatingAI ? (
                                        <><Loader className="w-4 h-4 animate-spin" /> Generating...</>
                                    ) : (
                                        <><Sparkles className="w-4 h-4" /> Generate Blog</>
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-3">
                                Automatically writes structured content covering introduction, location, admissions, and 5-year placements.
                            </p>
                        </div>
                    )}

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    {/* Category & Status */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">
                                Category *
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="General">General</option>
                                <option value="MBA">MBA Updates</option>
                                <option value="Engineering">Engineering Updates</option>
                                <option value="NEET">NEET Updates</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">
                                Status *
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                    </div>

                    {/* Thumbnail Upload */}
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">
                            Thumbnail Image
                        </label>
                        <div className="flex items-center gap-4">
                            {thumbnailPreview && (
                                <img
                                    src={thumbnailPreview}
                                    alt="Thumbnail preview"
                                    className="w-32 h-32 object-cover rounded-lg border border-white/20"
                                />
                            )}
                            <label className="flex-1 cursor-pointer">
                                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:bg-white/20 transition-colors">
                                    <Upload className="w-5 h-5" />
                                    <span>{thumbnailFile ? thumbnailFile.name : 'Choose Image'}</span>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleThumbnailChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">
                            Excerpt * (Short Description)
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 resize-none"
                            placeholder="Brief description (max 300 characters)"
                            rows="3"
                            maxLength="300"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">{formData.excerpt.length}/300</p>
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">
                            Content * (Supports basic HTML)
                        </label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 resize-none font-mono text-sm"
                            placeholder="Write your blog content here. You can use basic HTML tags like <p>, <h2>, <strong>, <em>, <ul>, <li>, etc."
                            rows="15"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Tip: Use HTML tags for formatting. Example: &lt;h2&gt;Heading&lt;/h2&gt; &lt;p&gt;Paragraph&lt;/p&gt;
                        </p>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">
                            Tags (comma separated)
                        </label>
                        <input
                            type="text"
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50"
                            placeholder="e.g. admissions, scholarships, tips"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 sticky bottom-0 bg-dark pb-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 btn-outline py-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || uploading}
                            className="flex-1 btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {(loading || uploading) && <Loader className="w-5 h-5 animate-spin" />}
                            {uploading ? 'Uploading...' : loading ? 'Saving...' : editBlog ? 'Update Blog' : 'Create Blog'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
