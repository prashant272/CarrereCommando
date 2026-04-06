import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from '../../api';
import { useAdminBlogs } from '../../hooks/useBlogs';
import { useQueryClient } from '@tanstack/react-query';
import BlogForm from '../../components/admin/BlogForm';
import FacebookConnect from '../../components/admin/FacebookConnect';

const BlogManagement = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const queryClient = useQueryClient();

    // Use React Query hook - automatic caching!
    const { data: blogs = [], isLoading: loading, error } = useAdminBlogs();

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;

        try {
            await axios.delete(`${API_BASE_URL}/blogs/${id}`);
            // Invalidate cache to refetch data
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('Failed to delete blog');
        }
    };

    const handleEdit = async (blog) => {
        try {
            // Fetch full blog data because the list API excludes 'content'
            const response = await axios.get(`${API_BASE_URL}/blogs/${blog.slug}`);
            setEditingBlog(response.data);
            setShowForm(true);
        } catch (error) {
            console.error('Error fetching full blog details:', error);
            alert('Failed to load full blog content for editing.');
        }
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingBlog(null);
    };

    const handleFormSuccess = () => {
        // Invalidate cache to refetch data
        queryClient.invalidateQueries({ queryKey: ['blogs'] });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-white">Blog Posts</h1>
                <button
                    onClick={() => setShowForm(true)}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Create New Blog
                </button>
            </div>

            {/* Facebook Connection Integration */}
            <FacebookConnect />

            {/* Blog List */}
            {blogs.length === 0 ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                    <p className="text-gray-400 mb-4">No blogs yet. Create your first blog post!</p>
                    <button
                        onClick={() => setShowForm(true)}
                        className="btn-primary"
                    >
                        Create Blog
                    </button>
                </div>
            ) : (
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Title</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Views</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Date</th>
                                <th className="px-6 py-4 text-right text-sm font-bold text-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {blogs.map((blog) => (
                                <tr key={blog._id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-white font-medium">{blog.title}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                                            {blog.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${blog.status === 'published'
                                            ? 'bg-green-500/10 text-green-400'
                                            : 'bg-yellow-500/10 text-yellow-400'
                                            }`}>
                                            {blog.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">{blog.views}</td>
                                    <td className="px-6 py-4 text-gray-400">
                                        {new Date(blog.publishedDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog._id)}
                                                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Blog Form Modal */}
            {showForm && (
                <BlogForm
                    onClose={handleCloseForm}
                    onSuccess={handleFormSuccess}
                    editBlog={editingBlog}
                />
            )}
        </div>
    );
};

export default BlogManagement;
