import axios from 'axios';
import { API_BASE_URL } from '../api';

/**
 * Check if user is authenticated as admin
 * @returns {boolean}
 */
export const isAdminAuthenticated = () => {
    const token = localStorage.getItem('adminToken');
    return !!token;
};

/**
 * Get admin token from localStorage
 * @returns {string|null}
 */
export const getAdminToken = () => {
    return localStorage.getItem('adminToken');
};

/**
 * Verify admin token with backend
 * @returns {Promise<boolean>}
 */
export const verifyAdminToken = async () => {
    const token = getAdminToken();

    if (!token) {
        return false;
    }

    try {
        const response = await axios.post(`${API_BASE_URL}/admin/verify`, {
            token
        });
        return response.data.valid;
    } catch (error) {
        return false;
    }
};

/**
 * Logout admin (clear token)
 */
export const logoutAdmin = () => {
    localStorage.removeItem('adminToken');
};
