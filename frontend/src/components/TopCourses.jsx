import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Stethoscope, Briefcase, BookOpen, Laptop, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Inspired by DestinationPicker's modern, luxurious color palette
const BG_GRADIENT =
  "bg-gradient-to-br from-[#222031] via-[#100c2e] to-[#43290b]";
const BLUR_SHAPE_1 =
  "absolute -top-10 -left-20 w-96 h-96 bg-[#e7b56733] rounded-full blur-[110px] opacity-60 pointer-events-none z-0";
const BLUR_SHAPE_2 =
  "absolute bottom-0 -right-24 w-96 h-96 bg-[#fff8e1a0] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none";

const TopCourses = () => {
  const { t } = useLanguage();
  const [isViewingAll, setIsViewingAll] = useState(false);
  const scrollContainerRef = useRef(null);

  const courses = [
    {
      id: 1,
      title: 'BE/BTech',
      description: 'Engineering programs in various specializations',
      icon: GraduationCap,
      gradient: 'from-yellow-400 to-[#FFD700]',
      bgGradient: 'from-white/90 via-yellow-50 to-[#FFECB3]/80',
      link: '/engineering'
    },
    {
      id: 2,
      title: 'MBBS/BDS/BAMS/BHMS',
      description: 'Medical & healthcare professional courses',
      icon: Stethoscope,
      gradient: 'from-[#f67259] to-[#e457a9]',
      bgGradient: 'from-white/90 via-pink-50 to-[#FFD1DC]/80',
      link: '/neet'
    },
    {
      id: 3,
      title: 'MD/MS',
      description: 'Postgraduate medical specialization programs',
      icon: Stethoscope,
      gradient: 'from-[#bb67df] to-[#7d47e4]',
      bgGradient: 'from-white/90 via-purple-50 to-[#E1D5FF]/80',
      link: '/neet'
    },
    {
      id: 4,
      title: 'MBA',
      description: 'Master of Business Administration programs',
      icon: Briefcase,
      gradient: 'from-[#f6b13a] to-[#eec948]',
      bgGradient: 'from-white/90 via-amber-50 to-[#FFF7DE]/80',
      link: '/mba'
    },
    {
      id: 5,
      title: 'Other Courses',
      description: 'Diploma, certificate & specialized programs',
      icon: BookOpen,
      gradient: 'from-[#7fd87a] to-[#56c596]',
      bgGradient: 'from-white/90 via-green-50 to-[#E6FFF2]/80',
      link: '/courses'
    },
    {
      id: 6,
      title: 'Online Courses',
      description: 'Distance learning & online degree programs',
      icon: Laptop,
      gradient: 'from-[#9553e8] to-[#512e82]',
      bgGradient: 'from-white/90 via-indigo-50 to-[#EEE7FF]/80',
      link: '/courses'
    }
  ];

  // Additional courses for scrolling view
  const allCourses = [
    ...courses,
    {
      id: 7,
      title: 'BBA',
      description: 'Bachelor of Business Administration',
      icon: Briefcase,
      gradient: 'from-[#FFC960] to-[#FFB464]',
      bgGradient: 'from-white/90 via-orange-50 to-[#FFE3B3]/80',
      link: '/courses'
    },
    {
      id: 8,
      title: 'BCA/MCA',
      description: 'Computer Applications programs',
      icon: Laptop,
      gradient: 'from-[#42c3d2] to-[#27e1ce]',
      bgGradient: 'from-white/90 via-cyan-50 to-[#E0FFFB]/80',
      link: '/courses'
    },
    {
      id: 9,
      title: 'B.Sc/M.Sc',
      description: 'Science programs in various specializations',
      icon: GraduationCap,
      gradient: 'from-[#7aafff] to-[#51d1e2]',
      bgGradient: 'from-white/90 via-blue-50 to-[#E7F4FF]/80',
      link: '/courses'
    },
    {
      id: 10,
      title: 'B.Com/M.Com',
      description: 'Commerce & accounting programs',
      icon: BookOpen,
      gradient: 'from-[#ff82ac] to-[#f54e91]',
      bgGradient: 'from-white/90 via-rose-50 to-[#FFE3F3]/80',
      link: '/courses'
    },
    {
      id: 11,
      title: 'Law (LLB/LLM)',
      description: 'Legal studies & law programs',
      icon: BookOpen,
      gradient: 'from-[#A98D5F] to-[#885420]',
      bgGradient: 'from-white/90 via-yellow-100 to-[#FFF6D9]/80',
      link: '/courses'
    },
    {
      id: 12,
      title: 'Pharmacy',
      description: 'B.Pharm & D.Pharm programs',
      icon: Stethoscope,
      gradient: 'from-[#87e09f] to-[#37c978]',
      bgGradient: 'from-white/90 via-green-50 to-[#E7FFE8]/80',
      link: '/courses'
    },
    {
      id: 13,
      title: 'Architecture',
      description: 'B.Arch & M.Arch programs',
      icon: GraduationCap,
      gradient: 'from-[#FFE377] to-[#FFD046]',
      bgGradient: 'from-white/90 via-yellow-50 to-[#FFF9DE]/80',
      link: '/courses'
    },
    {
      id: 14,
      title: 'Hotel Management',
      description: 'Hospitality & hotel management courses',
      icon: Briefcase,
      gradient: 'from-[#f49ada] to-[#fc7b6d]',
      bgGradient: 'from-white/90 via-pink-50 to-[#FFE3F4]/80',
      link: '/courses'
    },
    {
      id: 15,
      title: 'Mass Communication',
      description: 'Journalism & media studies',
      icon: BookOpen,
      gradient: 'from-[#85DEF9] to-[#355C7D]',
      bgGradient: 'from-white/90 via-blue-50 to-[#E1F7FF]/80',
      link: '/courses'
    }
  ];

  // Duplicate courses for infinite scroll effect
  const infiniteScrollCourses = [...allCourses, ...allCourses, ...allCourses];

  // Auto-scroll effect
  useEffect(() => {
    if (!isViewingAll || !scrollContainerRef.current) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const container = scrollContainerRef.current;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      container.scrollTop = scrollPosition;

      // Reset scroll when reaching the end of first set
      if (scrollPosition >= container.scrollHeight / 3) {
        scrollPosition = 0;
        container.scrollTop = 0;
      }
    };

    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, [isViewingAll]);

  const CourseCard = ({ course, onClick }) => {
    const Icon = course.icon;
    return (
      <div
        onClick={onClick}
        className="group relative cursor-pointer h-full"
      >
        <div className={`
          relative h-full p-5 rounded-3xl border-2 border-[#f5debe]
          bg-gradient-to-br ${course.bgGradient}
          hover:border-[#ffd87c]
          hover:shadow-2xl
          transition-all duration-500 ease-out
          hover:-translate-y-2
          overflow-hidden
          flex flex-col
        `}>
          <div className={`
            absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0
            group-hover:opacity-15 transition-opacity duration-500
          `}></div>

          <div className="relative mb-4">
            <div className={`
              w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient}
              flex items-center justify-center
              shadow-lg group-hover:shadow-2xl
              transition-all duration-500
              group-hover:scale-110 group-hover:rotate-6
            `}>
              <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <div className="relative space-y-2 flex-grow flex flex-col">
            <h3 className="text-xl font-black text-[#1b1428] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#c49029] group-hover:to-[#f59e42] transition-all duration-300">
              {course.title}
            </h3>
            <p className="text-sm text-[#54423d] font-medium leading-snug flex-grow">
              {course.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[#a9742a] font-bold group-hover:gap-4 transition-all duration-300">
              <span className="text-xs uppercase tracking-wider">{t('topCourses.explore')}</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          <div className={`
            absolute -top-8 -right-8 w-32 h-32 rounded-full
            bg-gradient-to-br ${course.gradient} opacity-5
            group-hover:opacity-20 group-hover:scale-150
            transition-all duration-700
          `}></div>
        </div>
      </div>
    );
  };

  if (isViewingAll) {
    return (
      <div className={`fixed inset-0 z-[200] ${BG_GRADIENT}`}>
        {/* Background shapes like DestinationPicker */}
        <div className={BLUR_SHAPE_1}></div>
        <div className={BLUR_SHAPE_2}></div>
        {/* Back Button */}
        <button
          onClick={() => setIsViewingAll(false)}
          className="fixed top-6 left-6 z-[210] flex items-center gap-3 px-6 py-4 bg-[#fff9e6] rounded-full shadow-2xl border-2 border-[#ffd87c] hover:bg-[#fff6ea] transition-all hover:scale-105"
        >
          <ArrowLeft className="w-6 h-6 text-[#8e6625]" />
          <span className="font-bold text-[#8e6625]">{t('topCourses.back')}</span>
        </button>
        {/* Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto scrollbar-hide"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-24">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-[#FFD700] tracking-tight drop-shadow-[0_2px_4px_rgba(218,174,94,0.16)]">
                {t('topCourses.allCourses')} <span className="gold-text">{t('courses.title')}</span>
              </h2>
              <p className="text-[#e9cd89] text-xl max-w-3xl mx-auto font-medium">
                {t('topCourses.autoScrolling')}
              </p>
            </div>
            {/* Infinite Scrolling Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {infiniteScrollCourses.map((course, index) => (
                <Link
                  key={`${course.id}-${index}`}
                  to={course.link}
                  onClick={() => setIsViewingAll(false)}
                >
                  <CourseCard course={course} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Hide scrollbar CSS */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none;}
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none;}
        `}</style>
      </div>
    );
  }

  return (
    <section className={`py-12 md:py-16 relative overflow-hidden ${BG_GRADIENT} min-h-[60vh]`}>
      {/* Luxurious blurred shapes like DestinationPicker */}
      <div className={BLUR_SHAPE_1}></div>
      <div className={BLUR_SHAPE_2}></div>
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFD700] tracking-tight drop-shadow-[0_2px_6px_rgba(218,174,94,0.12)]">
            {t('topCourses.title').split(' ')[0]} <span className="gold-text">{t('topCourses.title').split(' ')[1]}</span>
          </h2>
          <p className="text-[#ffe0b0] text-lg max-w-2xl mx-auto font-medium">
            {t('topCourses.subtitle')}
          </p>
        </div>
        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} to={course.link}>
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => setIsViewingAll(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFC872] to-[#FF9800] text-[#5d3d14] font-extrabold rounded-full shadow-xl border-2 border-[#FFA726] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t('topCourses.viewAll')}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
