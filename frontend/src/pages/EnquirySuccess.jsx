import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const EnquirySuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                background: 'linear-gradient(120deg, #090e23 0%, #183478 65%, #e7b71a 100%)'
            }}
        >
            <div className="max-w-2xl w-full">
                <div className="bg-gradient-to-br from-[#032144] via-[#263556] to-[#ffe185] rounded-3xl shadow-2xl p-12 md:p-16 border border-yellow-200/30 text-center space-y-8">
                    {/* Success Icon */}
                    <div className="flex justify-center">
                        <div className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center border-4 border-green-400 animate-pulse">
                            <CheckCircle className="w-20 h-20 text-green-400" />
                        </div>
                    </div>

                    {/* Success Message */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-300 tracking-tight">
                            Thank You!
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Enquiry Submitted Successfully
                        </h2>
                        <p className="text-xl text-gray-200 max-w-lg mx-auto leading-relaxed">
                            Your enquiry has been received. Our expert counselor will contact you shortly to discuss your career options.
                        </p>
                    </div>

                    {/* Info */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <p className="text-white text-lg font-medium">
                            📞 For immediate assistance, call us at:
                        </p>
                        <a href="tel:+919810882769" className="text-yellow-300 text-2xl font-bold hover:text-yellow-400 transition-colors">
                            +91 9810 88 2769
                        </a>
                    </div>

                    {/* Auto Redirect Message */}
                    <p className="text-gray-300 text-base">
                        Redirecting to home page in 5 seconds...
                    </p>

                    {/* Home Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black text-xl py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
                    >
                        <Home className="w-6 h-6" />
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnquirySuccess;
