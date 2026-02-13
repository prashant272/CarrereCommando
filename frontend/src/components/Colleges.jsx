import React from 'react';
import { ExternalLink, Star, MapPin, GraduationCap, Globe, BadgeCheck } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useLanguage } from '../contexts/LanguageContext';

// Illustrative images for some major colleges (these are not official images)
const collegeImages = {
  "Indian Institute of Technology Madras":
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600",
  "Indian Institute of Technology Delhi":
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=600",
  "Indian Institute of Technology Bombay":
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=600",
  "All India Institute of Medical Sciences":
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=600",
  "Christian Medical College":
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600",
  "Shri Ram College of Commerce":
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600",
  "St. Stephen's College":
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600",
  "Birla Institute of Technology and Science":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  "Manipal Institute of Technology":
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600",
};

// College data from prompt
const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology Madras",
    short_name: "IIT Madras",
    category: "Engineering",
    type: "Government",
    location: { city: "Chennai", state: "Tamil Nadu", country: "India" },
    established: 1959,
    entrance_exam: "JEE Advanced",
    popular_courses: ["B.Tech", "M.Tech", "PhD"],
    official_website: "https://www.iitm.ac.in",
  },
  {
    id: 2,
    name: "Indian Institute of Technology Delhi",
    short_name: "IIT Delhi",
    category: "Engineering",
    type: "Government",
    location: { city: "New Delhi", state: "Delhi", country: "India" },
    established: 1961,
    entrance_exam: "JEE Advanced",
    popular_courses: ["B.Tech", "M.Tech", "MBA"],
    official_website: "https://home.iitd.ac.in",
  },
  {
    id: 3,
    name: "Indian Institute of Technology Bombay",
    short_name: "IIT Bombay",
    category: "Engineering",
    type: "Government",
    location: { city: "Mumbai", state: "Maharashtra", country: "India" },
    established: 1958,
    entrance_exam: "JEE Advanced",
    popular_courses: ["B.Tech", "M.Tech", "PhD"],
    official_website: "https://www.iitb.ac.in",
  },
  {
    id: 4,
    name: "All India Institute of Medical Sciences",
    short_name: "AIIMS Delhi",
    category: "Medical",
    type: "Government",
    location: { city: "New Delhi", state: "Delhi", country: "India" },
    established: 1956,
    entrance_exam: "NEET",
    popular_courses: ["MBBS", "MD", "MS"],
    official_website: "https://www.aiims.edu",
  },
  {
    id: 6,
    name: "Shri Ram College of Commerce",
    short_name: "SRCC",
    category: "Commerce",
    type: "Government",
    location: { city: "Delhi", state: "Delhi", country: "India" },
    established: 1926,
    entrance_exam: "CUET",
    popular_courses: ["B.Com (Hons)", "Economics"],
    official_website: "https://www.srcc.edu",
  },
  {
    id: 7,
    name: "St. Stephen's College",
    short_name: "St. Stephen's",
    category: "Arts",
    type: "Government",
    location: { city: "Delhi", state: "Delhi", country: "India" },
    established: 1881,
    entrance_exam: "CUET",
    popular_courses: ["BA (Hons)", "BSc"],
    official_website: "https://www.ststephens.edu",
  },
  {
    id: 8,
    name: "Birla Institute of Technology and Science",
    short_name: "BITS Pilani",
    category: "Engineering",
    type: "Private",
    location: { city: "Pilani", state: "Rajasthan", country: "India" },
    established: 1964,
    entrance_exam: "BITSAT",
    popular_courses: ["B.Tech", "M.Tech"],
    official_website: "https://www.bits-pilani.ac.in",
  },
  {
    id: 9,
    name: "Manipal Institute of Technology",
    short_name: "MIT Manipal",
    category: "Engineering",
    type: "Private",
    location: { city: "Manipal", state: "Karnataka", country: "India" },
    established: 1957,
    entrance_exam: "MET",
    popular_courses: ["B.Tech"],
    official_website: "https://manipal.edu/mit.html",
  },
];

// Chips for college type and category
const typeColor = {
  Government: "from-green-200 via-green-100 to-green-50 text-green-900 border-green-300",
  Private: "from-yellow-200 via-orange-100 to-yellow-50 text-orange-900 border-orange-300",
};

const categoryIcon = (category) => {
  switch (category) {
    case "Engineering":
      return <GraduationCap className="inline w-4 h-4 mr-1 text-blue-500" />;
    case "Medical":
      return <BadgeCheck className="inline w-4 h-4 mr-1 text-pink-500" />;
    case "Commerce":
      return <BadgeCheck className="inline w-4 h-4 mr-1 text-amber-500" />;
    case "Arts":
      return <BadgeCheck className="inline w-4 h-4 mr-1 text-fuchsia-500" />;
    default:
      return null;
  }
};

const Colleges = () => {
  const { t } = useLanguage();

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="colleges"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b] min-h-[50vh]"
    >
      {/* Luxurious Blurred Light background shapes */}
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-[0_6px_16px_rgba(218,174,94,0.14)]">
              {t('colleges.title')}
            </h2>
            <p className="text-white/90 max-w-2xl font-medium text-lg leading-relaxed shadow-sm">
              {t('colleges.subtitle')}
            </p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-tr from-[#e1b94a] via-[#f2d180] to-[#c98934] px-4 py-4 rounded-lg font-extrabold text-black text-xl shadow-xl border-[2px] border-[#FFD700] hover:scale-105 active:scale-95 transition-all">
            {t('colleges.viewColleges')}
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {colleges.map((college) => (
            <div
              key={college.id}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(college.official_website)}
              onKeyDown={e => { if (e.key === 'Enter') handleCardClick(college.official_website); }}
              className="bg-gradient-to-br from-white/10 via-[#1b1832eb] to-[#2d190778] border-[2.5px] border-[#FFD700]/40 shadow-[0_4px_32px_0_rgba(206,162,49,0.18)] rounded-3xl overflow-hidden group hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              style={{ backdropFilter: "blur(9px)" }}
              title={`Visit ${college.short_name} official website`}
            >
              <div className="relative h-48 overflow-hidden bg-[#181425]">
                <OptimizedImage
                  src={collegeImages[college.name]}
                  alt={college.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-900">★</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                {/* Title */}
                <h3 className="text-xl font-black text-white group-hover:text-[#FFD700] transition-colors drop-shadow-md leading-tight flex items-center gap-2">
                  {categoryIcon(college.category)}
                  {college.short_name}
                </h3>
                {/* Tags: Category/Type/Year */}
                <div className="flex flex-wrap gap-2 items-center mb-1">
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${typeColor[college.type]} text-xs font-extrabold rounded shadow border uppercase tracking-widest`}
                  >
                    {t(`collegeTypes.${college.type.toLowerCase()}`)}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#FFF7E2] via-[#FFF2BF] to-[#FFFFFFBC] text-[#8E720C] text-xs font-bold rounded shadow border border-[#FFE180]/60 uppercase tracking-wide">
                    {t(`collegeCategories.${college.category.toLowerCase()}`)}
                  </span>
                  <span className="px-2 py-1 bg-[#130f2e44] text-white text-xs rounded font-bold border border-white/5">
                    {t('common.established')} {college.established}
                  </span>
                </div>
                {/* Location */}
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>
                    {college.location.city}, {college.location.state}
                  </span>
                </div>
                {/* Entrance Exam */}
                <div className="flex items-center gap-2 text-white/70 text-xs mb-1">
                  <BadgeCheck className="w-4 h-4 text-[#FFC400]" />
                  {college.entrance_exam}
                </div>
                {/* Popular Courses */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {college.popular_courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gradient-to-r from-[#FFF3C2] via-[#FFECB3] to-[#F2C760]/80 text-[#846300] text-xs font-bold rounded-full border border-yellow-200/60 shadow-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                {/* Website Button */}
                <a
                  href={college.official_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] font-extrabold shadow-xl border-2 border-[#FFA726] rounded-lg text-dark hover:scale-105 active:scale-95 transition-all py-2 text-base"
                  title={`Visit ${college.short_name} Website`}
                >
                  {t('colleges.visitWebsite')}
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colleges;
