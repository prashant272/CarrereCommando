import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';

const EnquiryPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        visitorName: '',
        mobileNumber: '',
        date: '',
        studentName: '',
        email: '',
        mobile: '',
        course: [],
        score: '',
        statePreference: [],
        address: '',
        city: '',
        referenceName: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const courses = ['Engineering', 'Medical', 'Management', 'Others'];
    const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Rajasthan'];

    const validateMobile = (number) => {
        return /^[0-9]{10}$/.test(number);
    };

    const handleMobileChange = (value) => {
        const numericValue = value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, mobile: numericValue });

        if (numericValue && !validateMobile(numericValue)) {
            setErrors({ ...errors, mobile: 'Must be exactly 10 digits' });
        } else {
            const newErrors = { ...errors };
            delete newErrors.mobile;
            setErrors(newErrors);
        }
    };

    const handleCourseChange = (course) => {
        const updatedCourses = formData.course.includes(course)
            ? formData.course.filter(c => c !== course)
            : [...formData.course, course];
        setFormData({ ...formData, course: updatedCourses });
    };

    const handleStateChange = (state) => {
        if (formData.statePreference.includes(state)) {
            setFormData({
                ...formData,
                statePreference: formData.statePreference.filter(s => s !== state)
            });
        } else if (formData.statePreference.length < 4) {
            setFormData({
                ...formData,
                statePreference: [...formData.statePreference, state]
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateMobile(formData.mobile)) {
            setErrors({ ...errors, mobile: 'Must be exactly 10 digits' });
            return;
        }

        if (formData.course.length === 0) {
            setErrors({ ...errors, course: 'Please select at least one course' });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enquiry/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/enquiry/success');
            } else {
                setErrors({ submit: data.message || 'Failed to submit enquiry' });
            }
        } catch (error) {
            console.error('Error submitting enquiry:', error);
            setErrors({ submit: 'Failed to submit enquiry. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                background: 'linear-gradient(120deg, #090e23 0%, #183478 65%, #e7b71a 100%)'
            }}
        >
            <div className="w-full max-w-6xl">
                <div className="bg-gradient-to-br from-[#032144] via-[#263556] to-[#ffe185] rounded-3xl shadow-2xl p-6 md:p-10 border border-yellow-200/30">
                    {/* Logo */}
                 

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-3 md:mb-5 tracking-tighter">
                            INQUIRY FORM
                        </h1>
                        <p className="text-white text-base md:text-xl font-medium">
                            Complete The Form Below
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Visitor Name */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Visitor Name *
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Enter visitor name"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.visitorName}
                                onChange={(e) => setFormData({ ...formData, visitorName: e.target.value })}
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Mob No. *
                            </label>
                            <input
                                required
                                type="tel"
                                placeholder="10 digit mobile number"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.mobileNumber}
                                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                maxLength="10"
                            />
                        </div>

                        {/* Date */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Date *
                            </label>
                            <input
                                required
                                type="date"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>

                        {/* Student Name */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Student Name *
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Enter student name"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.studentName}
                                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Email ID *
                            </label>
                            <input
                                required
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Mobile */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Student Mobile *
                            </label>
                            <input
                                required
                                type="tel"
                                placeholder="10 digit mobile number"
                                className={`w-full bg-transparent border rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:ring-4 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60 ${errors.mobile ? 'border-red-500 focus:border-red-500 focus:ring-red-200/10' : 'border-white focus:border-white focus:ring-white/20'
                                    }`}
                                value={formData.mobile}
                                onChange={(e) => handleMobileChange(e.target.value)}
                                maxLength="10"
                            />
                            {errors.mobile && <p className="text-red-400 text-base font-bold ml-1">{errors.mobile}</p>}
                        </div>

                        {/* Course - Checkboxes */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Course (Select Multiple) *
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-transparent border border-white rounded-xl">
                                {courses.map((course) => (
                                    <label key={course} className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.course.includes(course)}
                                            onChange={() => handleCourseChange(course)}
                                            className="w-5 h-5 rounded border-2 border-white bg-transparent checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer"
                                        />
                                        <span className="text-white text-base font-medium group-hover:text-yellow-300 transition-colors">{course}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.course && <p className="text-red-400 text-base font-bold ml-1">{errors.course}</p>}
                        </div>

                        {/* Score */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Score
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your score"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.score}
                                onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                            />
                        </div>

                        {/* State Preference - Max 4 */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                State Preference (Max 4)
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-transparent border border-white rounded-xl">
                                {states.map((state) => (
                                    <label key={state} className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.statePreference.includes(state)}
                                            onChange={() => handleStateChange(state)}
                                            disabled={!formData.statePreference.includes(state) && formData.statePreference.length >= 4}
                                            className="w-5 h-5 rounded border-2 border-white bg-transparent checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <span className="text-white text-base font-medium group-hover:text-yellow-300 transition-colors">{state}</span>
                                    </label>
                                ))}
                            </div>
                            <p className="text-yellow-300 text-sm ml-1">Selected: {formData.statePreference.length}/4</p>
                        </div>

                        {/* Address */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Address *
                            </label>
                            <textarea
                                required
                                rows="3"
                                placeholder="Enter complete address"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60 resize-none"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        {/* City */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                City *
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Enter city"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>

                        {/* Reference Name */}
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-bold text-white uppercase tracking-[0.16em] ml-1">
                                Reference Name *
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Enter reference name"
                                className="w-full bg-transparent border border-white rounded-xl p-4 md:p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-lg md:text-2xl placeholder:text-white/60"
                                value={formData.referenceName}
                                onChange={(e) => setFormData({ ...formData, referenceName: e.target.value })}
                            />
                        </div>

                        {/* Error Message */}
                        {errors.submit && (
                            <div className="bg-red-500/20 border border-red-500 rounded-xl p-4">
                                <p className="text-red-200 text-center font-semibold">{errors.submit}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black text-2xl py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <div className="w-6 h-6 border-3 border-black border-t-transparent rounded-full animate-spin"></div>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-6 h-6" />
                                    Submit Enquiry
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPage;
