import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoursesPage from './pages/CoursesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import CounsellingPage from './pages/CounsellingPage'
import EnquiryPage from './pages/EnquiryPage'
import EnquirySuccess from './pages/EnquirySuccess'
import CityCollegesPage from './pages/CityCollegesPage'
import MBAPage from './pages/MBAPage'
import EngineeringPage from './pages/EngineeringPage'
import NEETPage from './pages/NEETPage'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'
import WhatsAppModal from './components/WhatsAppModal'
import PhoneCallButton from './components/PhoneCallButton'
import GoogleTranslate from './components/GoogleTranslate'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes (no navbar/footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Enquiry Routes (no navbar/footer) */}
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/enquiry/success" element={<EnquirySuccess />} />

        {/* Public Routes (with navbar/footer) */}
        <Route path="/*" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/counselling" element={<CounsellingPage />} />
              <Route path="/colleges/:city" element={<CityCollegesPage />} />
              <Route path="/mba" element={<MBAPage />} />
              <Route path="/engineering" element={<EngineeringPage />} />
              <Route path="/neet" element={<NEETPage />} />
            </Routes>
            <Footer />
            <WhatsAppModal />
            <PhoneCallButton />
            <GoogleTranslate />

          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
