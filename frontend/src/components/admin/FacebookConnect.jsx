import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Facebook, Check, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../../api';

const FacebookConnect = () => {
    const [status, setStatus] = useState({ connected: false, pageName: '' });
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState([]);
    const [setupToken, setSetupToken] = useState(null);

    useEffect(() => {
        checkStatus();
        
        // Check URL for setup token (returned from OAuth redirect)
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('fb_setup');
        const error = urlParams.get('fb_error');

        if (token) {
            setSetupToken(token);
            fetchPages(token);
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        } else if (error) {
            alert(`Facebook Connection Error: ${error}`);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    const checkStatus = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/facebook/status`);
            setStatus(res.data);
        } catch (error) {
            console.error('Failed to get FB status', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchPages = async (token) => {
        try {
            const res = await axios.get(`${API_BASE_URL}/facebook/pages?setupToken=${token}`);
            setPages(res.data);
        } catch (error) {
            console.error('Failed to fetch FB pages', error);
            alert('Failed to load your Facebook Pages. Token might expire.');
        }
    };

    const handleLogin = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/facebook/auth-url`);
            // Redirect to Facebook OAuth
            window.location.href = res.data.url;
        } catch (error) {
            console.error('Failed to get login URL', error);
        }
    };

    const selectPage = async (page) => {
        try {
            await axios.post(`${API_BASE_URL}/facebook/save-page`, {
                setupToken,
                pageId: page.id,
                pageName: page.name,
                pageAccessToken: page.access_token
            });
            alert('Success! Facebook Auto-Posting is now active.');
            setSetupToken(null);
            setPages([]);
            checkStatus();
        } catch (error) {
            console.error('Failed to link page', error);
            alert('Failed to link page.');
        }
    };

    if (loading) return null;

    return (
        <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                        <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Facebook Auto-Posting</h3>
                        {status.connected ? (
                            <p className="text-green-400 text-sm flex items-center gap-1">
                                <Check className="w-4 h-4" /> Connected to: {status.pageName}
                            </p>
                        ) : (
                            <p className="text-gray-400 text-sm">Post published blogs automatically to your Page</p>
                        )}
                    </div>
                </div>
                
                {!setupToken && !status.connected && (
                    <button 
                        onClick={handleLogin}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
                    >
                        Connect Facebook
                    </button>
                )}
                
                {status.connected && (
                    <button 
                        onClick={handleLogin}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 text-sm font-bold rounded-lg transition-colors border border-white/10"
                    >
                        Change Page
                    </button>
                )}
            </div>

            {setupToken && pages.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-400" />
                        Select a Page to link:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pages.map(page => (
                            <button
                                key={page.id}
                                onClick={() => selectPage(page)}
                                className="text-left px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                            >
                                <span className="text-white font-medium block">{page.name}</span>
                                <span className="text-xs text-gray-400">ID: {page.id}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
            {setupToken && pages.length === 0 && (
                <div className="mt-4 pt-4 border-t border-white/10 text-center text-gray-400">
                    Loading your pages... (Make sure you granted Pages permission during login)
                </div>
            )}
        </div>
    );
};

export default FacebookConnect;
