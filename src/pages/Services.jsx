import ServicesIntro from '../components/services/ServicesIntro'
import ServicesList from '../components/services/ServicesList'
import ServiceProcess from '../components/services/ServiceProcess'
import TechStack from '../components/services/TechStack'
import FAQ from '../components/services/FAQ'
import ClientLogoSection from '../components/home/ClientLogoSection'
import CTASection from '../components/home/CTASection'
import PageHeader from '../components/common/PageHeader'
import SEO from '../components/common/SEO'

const Services = () => {
    return (
        <div className="bg-dark">
            <SEO
                title="Premier Digital Services"
                description="Explore our high-performance agency services: Waply WhatsApp automation, custom ERP solutions, E-commerce development, and expert digital growth strategies."
                url="/services"
            />
            <PageHeader
                title="Our Services"
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Services' }
                ]}
                backgroundImage="/Images/Breadcrumb.webp"
            />

            <ServicesIntro />
            <ServicesList />
            <TechStack />
            <ServiceProcess />
            <ClientLogoSection />
            <FAQ />
            <CTASection />
        </div>
    )
}

export default Services
