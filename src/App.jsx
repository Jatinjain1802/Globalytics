import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from './components/layouts/MainLayout'
import ScrollToTop from './components/common/ScrollToTop'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))

// Loading component
const PageLoader = () => (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00C2E8]"></div>
    </div>
)

function App() {
    return (
        <Suspense fallback={<PageLoader />}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services/:id" element={<ServiceDetail />} />
                    <Route path="courses/:id" element={<CourseDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<TermsConditions />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App

