import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import CoursesSection from '../components/home/CoursesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'
import ClientLogoSection from '../components/home/ClientLogoSection'
import KeyBenefits from '../components/home/KeyBenefits'
import SEO from '../components/common/SEO'

const Home = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Globalytics Digital",
        "url": "https://globalyticsdigital.in",
        "logo": "https://globalyticsdigital.in/logo.png",
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
            <ServicesSection />
            <KeyBenefits />
            <CoursesSection />
            <TestimonialsSection />
            <ClientLogoSection />
            <CTASection />
        </div>
    )
}

export default Home

