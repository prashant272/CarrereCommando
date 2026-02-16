import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';

// Inspired by DestinationPicker.jsx (gradient, color, font, size)
const CounsellingPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        email: '',
        phone: '',
        alternateMobile: '',
        address: '',
        statePreference: [],
        course: '',
        marks10th: '',
        marks12th: '',
        stream12th: '',
        schoolName12th: '',
        examScore: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    const validateMobile = (number) => {
        return /^[0-9]{10}$/.test(number);
    };

    const handleMobileChange = (field, value) => {
        const numericValue = value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, [field]: numericValue });

        if (numericValue && !validateMobile(numericValue)) {
            setErrors({ ...errors, [field]: 'Must be exactly 10 digits' });
        } else {
            const newErrors = { ...errors };
            delete newErrors[field];
            setErrors(newErrors);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateMobile(formData.phone)) {
            setErrors({ ...errors, phone: 'Must be exactly 10 digits' });
            return;
        }
        if (!validateMobile(formData.alternateMobile)) {
            setErrors({ ...errors, alternateMobile: 'Must be exactly 10 digits' });
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    fatherName: '',
                    email: '',
                    phone: '',
                    alternateMobile: '',
                    address: '',
                    statePreference: [],
                    course: '',
                    marks10th: '',
                    marks12th: '',
                    stream12th: '',
                    schoolName12th: '',
                    examScore: '',
                    message: ''
                });
                setErrors({});
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div
            className="min-h-screen pt-16 md:pt-20 pb-24"
            style={{
                background: 'linear-gradient(120deg, #090e23 0%, #183478 65%, #e7b71a 100%)'
            }}
        >
            <div className="max-w-4xl mx-auto px-4">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-yellow-200 hover:text-yellow-400 transition-colors font-semibold text-xl"
                >
                    <ArrowLeft className="w-6 h-6" />
                    <span>Back</span>
                </button>

                <div className="bg-gradient-to-br from-[#032144] via-[#263556] to-[#ffe185] rounded-3xl shadow-2xl p-8 md:p-16 border border-yellow-200/30">
                    {status === 'success' ? (
                        <div className="text-center py-20 space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div className="w-28 h-28 bg-green-100 rounded-3xl flex items-center justify-center mx-auto shadow-inner border-4 border-green-200">
                                <CheckCircle className="w-16 h-16 text-green-600" />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-5xl font-extrabold text-yellow-200 tracking-tight">Thank You!</h2>
                                <p className="text-yellow-100 text-2xl font-medium mx-auto max-w-md">Your enquiry has been submitted successfully. Our expert counselor will contact you shortly.</p>
                                <p className="text-yellow-300 text-lg">Redirecting to home page...</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-14">
                                <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-100 mb-5 tracking-tighter">
                                    Book Your Counselling
                                </h1>
                                <p className="text-yellow-200 text-lg font-bold uppercase tracking-[0.35em]">Empower your future with expert guidance.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Details */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Student Name *</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter student name"
                                            className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Father's Name *</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter father's name"
                                            className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                            value={formData.fatherName}
                                            onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Mobile Number *</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="10 digit mobile number"
                                            className={`w-full bg-transparent border rounded-xl p-6 text-white focus:bg-white/10 focus:ring-4 outline-none transition-all font-semibold text-xl placeholder:text-white/60 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200/10' : 'border-white focus:border-white focus:ring-white/20'
                                                }`}
                                            value={formData.phone}
                                            onChange={(e) => handleMobileChange('phone', e.target.value)}
                                            maxLength="10"
                                        />
                                        {errors.phone && <p className="text-red-400 text-base font-bold ml-1">{errors.phone}</p>}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Alternate Mobile *</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="10 digit alternate number"
                                            className={`w-full bg-transparent border rounded-xl p-6 text-white focus:bg-white/10 focus:ring-4 outline-none transition-all font-semibold text-xl placeholder:text-white/60 ${errors.alternateMobile ? 'border-red-500 focus:border-red-500 focus:ring-red-200/10' : 'border-white focus:border-white focus:ring-white/20'
                                                }`}
                                            value={formData.alternateMobile}
                                            onChange={(e) => handleMobileChange('alternateMobile', e.target.value)}
                                            maxLength="10"
                                        />
                                        {errors.alternateMobile && <p className="text-red-400 text-base font-bold ml-1">{errors.alternateMobile}</p>}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Email Address *</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Address *</label>
                                    <textarea
                                        required
                                        rows="2"
                                        placeholder="Enter complete address"
                                        className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60 resize-none"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>

                                {/* State Preference - Multi Select */}
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">State Preference (Select Multiple) *</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-transparent border border-white rounded-xl">
                                        {['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Rajasthan', 'Telangana', 'Andhra Pradesh', 'Punjab', 'Haryana', 'Other'].map((state) => (
                                            <label key={state} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    value={state}
                                                    checked={formData.statePreference.includes(state)}
                                                    onChange={(e) => {
                                                        const updatedStates = e.target.checked
                                                            ? [...formData.statePreference, state]
                                                            : formData.statePreference.filter(s => s !== state);
                                                        setFormData({ ...formData, statePreference: updatedStates });
                                                    }}
                                                    className="w-5 h-5 rounded border-2 border-white bg-transparent checked:bg-yellow-400 checked:border-yellow-400 cursor-pointer"
                                                />
                                                <span className="text-white text-base font-medium group-hover:text-yellow-300 transition-colors">{state}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {formData.statePreference.length === 0 && (
                                        <p className="text-yellow-300 text-sm ml-1">Please select at least one state</p>
                                    )}
                                </div>

                                {/* Course */}
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Interested Course *</label>
                                    <select
                                        required
                                        className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-bold text-xl cursor-pointer appearance-none"
                                        value={formData.course}
                                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                    >
                                        <option value="">Select Course</option>
                                        <option value="MBA">MBA</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="NEET/Medical">NEET/Medical</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Academic Details */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">10th Marks (%) *</label>
                                        <input
                                            required
                                            type="number"
                                            min="0"
                                            max="100"
                                            step="0.01"
                                            placeholder="Enter 10th percentage"
                                            className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                            value={formData.marks10th}
                                            onChange={(e) => setFormData({ ...formData, marks10th: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">12th Marks (%) *</label>
                                        <input
                                            required
                                            type="number"
                                            min="0"
                                            max="100"
                                            step="0.01"
                                            placeholder="Enter 12th percentage"
                                            className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                            value={formData.marks12th}
                                            onChange={(e) => setFormData({ ...formData, marks12th: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">12th Stream *</label>
                                        <select
                                            required
                                            className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-bold text-xl cursor-pointer appearance-none"
                                            value={formData.stream12th}
                                            onChange={(e) => setFormData({ ...formData, stream12th: e.target.value })}
                                        >
                                            <option value="">Select Stream</option>
                                            <option value="PCM">PCM (Physics, Chemistry, Maths)</option>
                                            <option value="PCB">PCB (Physics, Chemistry, Biology)</option>
                                            <option value="Commerce">Commerce</option>
                                            <option value="Arts">Arts</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">12th School Name *</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter school name"
                                            className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                            value={formData.schoolName12th}
                                            onChange={(e) => setFormData({ ...formData, schoolName12th: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Exam Score */}
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">JEE/NEET/Other Competitive Exam Score</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your exam score (e.g., JEE Mains: 95 percentile)"
                                        className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60"
                                        value={formData.examScore}
                                        onChange={(e) => setFormData({ ...formData, examScore: e.target.value })}
                                    />
                                </div>

                                {/* Optional Message */}
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-white uppercase tracking-[0.16em] ml-1">Additional Message (Optional)</label>
                                    <textarea
                                        rows="3"
                                        placeholder="Tell us about your goals..."
                                        className="w-full bg-transparent border border-white rounded-xl p-6 text-white focus:bg-white/10 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all font-semibold text-xl placeholder:text-white/60 resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-4 text-red-400 text-lg font-extrabold uppercase tracking-[0.18em] bg-red-100/10 p-5 rounded-xl border border-red-200/40">
                                        <AlertCircle className="w-6 h-6" />
                                        Submission failed. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || Object.keys(errors).length > 0}
                                    className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-[#22305d] font-bold text-2xl py-6 flex items-center justify-center gap-4 rounded-2xl shadow-2xl shadow-yellow-300/30 hover:from-yellow-300 hover:to-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-200/50 transition-all disabled:opacity-55"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-7 h-7 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <Send className="w-7 h-7" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CounsellingPage;
