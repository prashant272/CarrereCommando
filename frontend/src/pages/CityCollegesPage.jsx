import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Stethoscope, Briefcase, MapPin, Star } from 'lucide-react';

const CityCollegesPage = () => {
    const { city } = useParams();
    const navigate = useNavigate();

    // College data by city (same as before)
    const collegeData = {
        'new-delhi': {
            name: 'New Delhi',
            colleges: [
                { name: 'IIT Delhi', type: 'Engineering', rating: 4.8, location: 'Hauz Khas' },
                { name: 'AIIMS Delhi', type: 'Medical', rating: 4.9, location: 'Ansari Nagar' },
                { name: 'Delhi University', type: 'Engineering', rating: 4.5, location: 'North Campus' },
                { name: 'Jamia Millia Islamia', type: 'Engineering', rating: 4.3, location: 'Jamia Nagar' },
                { name: 'LHMC', type: 'Medical', rating: 4.6, location: 'Connaught Place' },
                { name: 'FMS Delhi', type: 'MBA', rating: 4.7, location: 'North Campus' },
                { name: 'DTU', type: 'Engineering', rating: 4.4, location: 'Rohini' },
                { name: 'NSIT', type: 'Engineering', rating: 4.3, location: 'Dwarka' },
                { name: 'VMMC', type: 'Medical', rating: 4.5, location: 'Safdarjung' },
                { name: 'IMT Ghaziabad', type: 'MBA', rating: 4.2, location: 'Ghaziabad' },
                { name: 'Amity University', type: 'Engineering', rating: 4.1, location: 'Noida' },
                { name: 'Sharda University', type: 'Medical', rating: 4.0, location: 'Greater Noida' },
                { name: 'IIIT Delhi', type: 'Engineering', rating: 4.6, location: 'Okhla' },
                { name: 'MDI Gurgaon', type: 'MBA', rating: 4.5, location: 'Gurgaon' },
                { name: 'BML Munjal University', type: 'Engineering', rating: 4.2, location: 'Gurgaon' }
            ]
        },
        'mumbai': {
            name: 'Mumbai',
            colleges: [
                { name: 'IIT Bombay', type: 'Engineering', rating: 4.9, location: 'Powai' },
                { name: 'VJTI', type: 'Engineering', rating: 4.5, location: 'Matunga' },
                { name: 'KEM Hospital', type: 'Medical', rating: 4.7, location: 'Parel' },
                { name: 'JBIMS', type: 'MBA', rating: 4.6, location: 'Churchgate' },
                { name: 'SPIT', type: 'Engineering', rating: 4.3, location: 'Andheri' },
                { name: 'Grant Medical College', type: 'Medical', rating: 4.6, location: 'Byculla' },
                { name: 'NMIMS', type: 'MBA', rating: 4.5, location: 'Vile Parle' },
                { name: 'DJ Sanghvi', type: 'Engineering', rating: 4.4, location: 'Vile Parle' },
                { name: 'Thadomal Shahani', type: 'Engineering', rating: 4.2, location: 'Bandra' },
                { name: 'Sion Hospital', type: 'Medical', rating: 4.4, location: 'Sion' },
                { name: 'SP Jain', type: 'MBA', rating: 4.7, location: 'Andheri' },
                { name: 'Sardar Patel', type: 'Engineering', rating: 4.3, location: 'Andheri' },
                { name: 'Nair Hospital', type: 'Medical', rating: 4.5, location: 'Mumbai Central' },
                { name: 'Welingkar', type: 'MBA', rating: 4.3, location: 'Matunga' },
                { name: 'Somaiya', type: 'Engineering', rating: 4.2, location: 'Vidyavihar' }
            ]
        },
        'hyderabad': {
            name: 'Hyderabad',
            colleges: [
                { name: 'IIT Hyderabad', type: 'Engineering', rating: 4.7, location: 'Sangareddy' },
                { name: 'BITS Pilani Hyderabad', type: 'Engineering', rating: 4.6, location: 'Shamirpet' },
                { name: 'Osmania Medical College', type: 'Medical', rating: 4.5, location: 'Koti' },
                { name: 'ISB Hyderabad', type: 'MBA', rating: 4.9, location: 'Gachibowli' },
                { name: 'JNTU Hyderabad', type: 'Engineering', rating: 4.3, location: 'Kukatpally' },
                { name: 'Gandhi Medical College', type: 'Medical', rating: 4.4, location: 'Musheerabad' },
                { name: 'ICFAI Business School', type: 'MBA', rating: 4.2, location: 'Dontanapally' },
                { name: 'CBIT', type: 'Engineering', rating: 4.4, location: 'Gandipet' },
                { name: 'Vasavi College', type: 'Engineering', rating: 4.3, location: 'Ibrahimbagh' },
                { name: 'Kakatiya Medical College', type: 'Medical', rating: 4.3, location: 'Warangal' },
                { name: 'GITAM Hyderabad', type: 'Engineering', rating: 4.1, location: 'Rudraram' },
                { name: 'Nizam Institute', type: 'Medical', rating: 4.4, location: 'Punjagutta' },
                { name: 'IFIM Hyderabad', type: 'MBA', rating: 4.0, location: 'Gachibowli' },
                { name: 'CVR College', type: 'Engineering', rating: 4.2, location: 'Ibrahimpatnam' },
                { name: 'Mahavir Institute', type: 'MBA', rating: 4.1, location: 'Bandlaguda' }
            ]
        },
        'chennai': {
            name: 'Chennai',
            colleges: [
                { name: 'IIT Madras', type: 'Engineering', rating: 4.9, location: 'Guindy' },
                { name: 'Anna University', type: 'Engineering', rating: 4.5, location: 'Guindy' },
                { name: 'CMC Vellore', type: 'Medical', rating: 4.8, location: 'Vellore' },
                { name: 'IIM Tiruchirappalli', type: 'MBA', rating: 4.6, location: 'Trichy' },
                { name: 'VIT Chennai', type: 'Engineering', rating: 4.4, location: 'Vandalur' },
                { name: 'Stanley Medical College', type: 'Medical', rating: 4.6, location: 'Old Jail Road' },
                { name: 'Great Lakes', type: 'MBA', rating: 4.5, location: 'OMR' },
                { name: 'SSN College', type: 'Engineering', rating: 4.3, location: 'Kalavakkam' },
                { name: 'SRM University', type: 'Engineering', rating: 4.2, location: 'Kattankulathur' },
                { name: 'Madras Medical College', type: 'Medical', rating: 4.7, location: 'Park Town' },
                { name: 'Loyola IBMR', type: 'MBA', rating: 4.3, location: 'Nungambakkam' },
                { name: 'PSG Tech', type: 'Engineering', rating: 4.4, location: 'Coimbatore' },
                { name: 'Kilpauk Medical College', type: 'Medical', rating: 4.5, location: 'Kilpauk' },
                { name: 'Amrita School', type: 'MBA', rating: 4.2, location: 'Coimbatore' },
                { name: 'Thiagarajar College', type: 'Engineering', rating: 4.3, location: 'Madurai' }
            ]
        },
        // Country data - Russia
        'russia': {
            name: 'Russia',
            isCountry: true,
            colleges: [
                { name: 'Lomonosov Moscow State University', type: 'Medical', rating: 4.8, location: 'Moscow' },
                { name: 'Sechenov University', type: 'Medical', rating: 4.7, location: 'Moscow' },
                { name: 'Kazan Federal University', type: 'Medical', rating: 4.6, location: 'Kazan' },
                { name: 'Peoples Friendship University', type: 'Medical', rating: 4.7, location: 'Moscow' },
                { name: 'Pirogov Medical University', type: 'Medical', rating: 4.6, location: 'Moscow' },
                { name: 'Bashkir State Medical University', type: 'Medical', rating: 4.5, location: 'Ufa' },
                { name: 'Bauman Moscow State Technical University', type: 'Engineering', rating: 4.8, location: 'Moscow' },
                { name: 'Moscow Institute of Physics', type: 'Engineering', rating: 4.9, location: 'Moscow' },
                { name: 'Peter the Great Polytechnic University', type: 'Engineering', rating: 4.7, location: 'St. Petersburg' },
                { name: 'Tomsk State University', type: 'Engineering', rating: 4.6, location: 'Tomsk' },
                { name: 'Novosibirsk State University', type: 'Engineering', rating: 4.7, location: 'Novosibirsk' },
                { name: 'Ural Federal University', type: 'Engineering', rating: 4.5, location: 'Yekaterinburg' }
            ]
        },
        // Country data - Kazakhstan
        'kazakhstan': {
            name: 'Kazakhstan',
            isCountry: true,
            colleges: [
                { name: 'Kazakh National Medical University', type: 'Medical', rating: 4.6, location: 'Almaty' },
                { name: 'Astana Medical University', type: 'Medical', rating: 4.5, location: 'Nur-Sultan' },
                { name: 'Karaganda Medical University', type: 'Medical', rating: 4.4, location: 'Karaganda' },
                { name: 'South Kazakhstan Medical Academy', type: 'Medical', rating: 4.3, location: 'Shymkent' },
                { name: 'West Kazakhstan Medical University', type: 'Medical', rating: 4.2, location: 'Aktobe' },
                { name: 'Semey Medical University', type: 'Medical', rating: 4.3, location: 'Semey' },
                { name: 'Nazarbayev University', type: 'Engineering', rating: 4.8, location: 'Nur-Sultan' },
                { name: 'Satbayev University', type: 'Engineering', rating: 4.6, location: 'Almaty' },
                { name: 'Al-Farabi Kazakh National University', type: 'Engineering', rating: 4.5, location: 'Almaty' },
                { name: 'Kazakh-British Technical University', type: 'Engineering', rating: 4.4, location: 'Almaty' },
                { name: 'Eurasian National University', type: 'Engineering', rating: 4.3, location: 'Nur-Sultan' },
                { name: 'Karaganda Technical University', type: 'Engineering', rating: 4.2, location: 'Karaganda' }
            ]
        },
        // Country data - Canada
        'canada': {
            name: 'Canada',
            isCountry: true,
            colleges: [
                { name: 'University of Toronto', type: 'Medical', rating: 4.9, location: 'Toronto' },
                { name: 'McGill University', type: 'Medical', rating: 4.8, location: 'Montreal' },
                { name: 'University of British Columbia', type: 'Medical', rating: 4.8, location: 'Vancouver' },
                { name: 'McMaster University', type: 'Medical', rating: 4.7, location: 'Hamilton' },
                { name: 'University of Alberta', type: 'Medical', rating: 4.6, location: 'Edmonton' },
                { name: 'University of Calgary', type: 'Medical', rating: 4.6, location: 'Calgary' },
                { name: 'University of Waterloo', type: 'Engineering', rating: 4.9, location: 'Waterloo' },
                { name: 'University of Toronto', type: 'Engineering', rating: 4.8, location: 'Toronto' },
                { name: 'UBC Engineering', type: 'Engineering', rating: 4.8, location: 'Vancouver' },
                { name: 'McGill Engineering', type: 'Engineering', rating: 4.7, location: 'Montreal' },
                { name: 'University of Alberta Engineering', type: 'Engineering', rating: 4.6, location: 'Edmonton' },
                { name: 'Queens University', type: 'Engineering', rating: 4.6, location: 'Kingston' }
            ]
        },
        // Country data - USA
        'usa': {
            name: 'USA',
            isCountry: true,
            colleges: [
                { name: 'Harvard Medical School', type: 'Medical', rating: 5.0, location: 'Boston' },
                { name: 'Johns Hopkins School of Medicine', type: 'Medical', rating: 4.9, location: 'Baltimore' },
                { name: 'Stanford School of Medicine', type: 'Medical', rating: 4.9, location: 'Stanford' },
                { name: 'Mayo Clinic Alix School', type: 'Medical', rating: 4.8, location: 'Rochester' },
                { name: 'UCSF School of Medicine', type: 'Medical', rating: 4.8, location: 'San Francisco' },
                { name: 'University of Pennsylvania', type: 'Medical', rating: 4.7, location: 'Philadelphia' },
                { name: 'MIT', type: 'Engineering', rating: 5.0, location: 'Cambridge' },
                { name: 'Stanford University', type: 'Engineering', rating: 4.9, location: 'Stanford' },
                { name: 'UC Berkeley', type: 'Engineering', rating: 4.9, location: 'Berkeley' },
                { name: 'Caltech', type: 'Engineering', rating: 4.8, location: 'Pasadena' },
                { name: 'Carnegie Mellon University', type: 'Engineering', rating: 4.8, location: 'Pittsburgh' },
                { name: 'Georgia Institute of Technology', type: 'Engineering', rating: 4.7, location: 'Atlanta' }
            ]
        }
    };

    const cityData = collegeData[city] || { name: 'City', colleges: [], isCountry: false };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'Engineering':
                return <GraduationCap className="w-6 h-6" />;
            case 'Medical':
                return <Stethoscope className="w-6 h-6" />;
            case 'MBA':
                return <Briefcase className="w-6 h-6" />;
            default:
                return <GraduationCap className="w-6 h-6" />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Engineering':
                return 'from-blue-600 to-cyan-500';
            case 'Medical':
                return 'from-red-500 to-pink-400';
            case 'MBA':
                return 'from-orange-500 to-yellow-400';
            default:
                return 'from-gray-500 to-gray-600';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] overflow-hidden pt-16 md:pt-20 pb-16 md:pb-24">
            {/* Blurred light background shapes like DestinationPicker */}
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 z-10">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="mb-6 md:mb-8 flex items-center gap-2 text-gray-200 hover:text-yellow-300 transition-colors font-bold text-sm md:text-base"
                >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    Back to Home
                </button>

                {/* Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl tracking-tight px-4">
                        {cityData.isCountry ? 'Study in' : 'Top Colleges in'} <span className="text-yellow-400 bg-gradient-to-br from-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-gold">{cityData.name}</span>
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium px-4">
                        {cityData.isCountry
                            ? `Explore ${cityData.colleges.length} world-class universities for MBBS & Engineering programs`
                            : `Explore ${cityData.colleges.length} premier institutions for Engineering, Medical & MBA programs`
                        }
                    </p>
                </div>

                {/* Colleges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cityData.colleges.map((college, index) => (
                        <div
                            key={index}
                            onClick={() => navigate('/counselling')}
                            className="group relative h-full bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] rounded-3xl p-6 border-[2.5px] border-[#FFA726]/60 hover:border-[#FFB300] hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 shadow-[0_4px_32px_0_rgba(206,162,49,0.16)]"
                            style={{ backdropFilter: "blur(7px)" }}
                        >
                            {/* Type Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(college.type)} text-white text-xs font-bold shadow`}>
                                {college.type}
                            </div>

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getTypeColor(college.type)} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {getTypeIcon(college.type)}
                            </div>

                            {/* College Info */}
                            <h3 className="text-xl font-black text-white mb-3 group-hover:text-yellow-300 transition-colors drop-shadow-md">
                                {college.name}
                            </h3>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-gray-200 mb-3">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">{college.location}</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="text-lg font-bold text-white">{college.rating}</span>
                                <span className="text-sm text-gray-300">/5.0</span>
                            </div>

                            {/* CTA */}
                            <button className="w-full py-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-dark font-extrabold rounded-xl border-2 border-[#FFA726] hover:scale-105 active:scale-95 hover:shadow-xl transition-all shadow-lg">
                                Book Counselling
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CityCollegesPage;
