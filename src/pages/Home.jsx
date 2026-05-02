import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import { lazy, Suspense } from 'react'

const ServicesSection = lazy(() => import('../components/home/ServicesSection'))
const CoursesSection = lazy(() => import('../components/home/CoursesSection'))
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'))
const CTASection = lazy(() => import('../components/home/CTASection'))
const ClientLogoSection = lazy(() => import('../components/home/ClientLogoSection'))
const KeyBenefits = lazy(() => import('../components/home/KeyBenefits'))
import SEO from '../components/common/SEO'

const Home = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Globalytics Digital",
        "url": "https://globalyticsdigital.in",
        "logo": "https://globalyticsdigital.in/logo.webp",
        "description": "Digital marketing agency and academy offering SEO, Google Ads, Meta Ads, website development, video production, and digital marketing courses in India.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "20, Narayan Pura Square, above Relaxo Footwear, near Teen Batti",
          "addressLocality": "Ujjain",
          "addressRegion": "MP",
          "postalCode": "456010",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/globalyticsdigital/",
          "https://www.instagram.com/globalyticsdigital",
          "https://www.linkedin.com/company/globalytics-digital-pvt-ltd/"
        ]
    };

    return (
        <div className="bg-[#0A0F1C]">
            <SEO
                title="Digital Marketing Agency & Academy in India"
                description="Globalytics Digital is a full-service digital marketing agency and academy in India. We offer SEO, Google Ads, Meta Ads, Website Development, Video Production, and certified digital marketing courses."
                url="/"
                schemaMarkup={organizationSchema}
            />
            <HeroSection />
            <AboutSection />
            <Suspense fallback={<div className="h-20" />}>
                <ServicesSection />
                <KeyBenefits />
                <CoursesSection />
                <TestimonialsSection />
                <ClientLogoSection />
                <CTASection />
            </Suspense>
        </div>
    )
}

export default Home

