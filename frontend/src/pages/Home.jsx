import React from 'react';
import Hero from '../components/Hero';
import PartnerLogos from '../components/PartnerLogos';
import DestinationPicker from '../components/DestinationPicker';
import ServicesTimeline from '../components/ServicesTimeline';
import StatsGrid from '../components/StatsGrid';
import Colleges from '../components/Colleges';
import TopCourses from '../components/TopCourses';
import LatestBlogs from '../components/LatestBlogs';

const Home = () => {
    return (
        <>
            <main>
                {/* Modern Hero with Form */}
                <Hero />

                {/* Highlighted Courses Section */}
                <TopCourses />

                {/* Global Partner Scroll */}
                <PartnerLogos />

                {/* Destination Selection with India/Abroad Toggle */}
                <DestinationPicker />

                {/* Top Colleges Showcase */}
                <Colleges />

                {/* Visual Roadmap / Services Timeline */}
                <ServicesTimeline />

                {/* Detailed Stats Grid (Why Career Commando) */}
                <StatsGrid />

                {/* Latest Blogs - Dynamic from API */}
                <LatestBlogs />
            </main>
        </>
    );
};

export default Home;
