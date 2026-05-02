import AboutIntro from '../components/about/AboutIntro'
import MissionVision from '../components/about/MissionVision'
import WhyChooseUs from '../components/about/WhyChooseUs'

import PageHeader from '../components/common/PageHeader'
import SEO from '../components/common/SEO'

const About = () => {
    return (
        <div className="bg-dark">
            <SEO
                title="Our Story & Vision"
                description="Learn about Globalytics Digital—India's premier digital marketing agency and academy. We bridge the gap between high-performance agency results and practitioner-led training."
                url="/about"
            />
            <PageHeader
                title="Who We Are"
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Our Story' }
                ]}
            />

            <AboutIntro />
            <MissionVision />
            <WhyChooseUs />

        </div>
    )
}

export default About
