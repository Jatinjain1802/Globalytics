import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
    {
        id: 'seo',
        icon: 'bx-search-alt',
        title: 'Search Engine Optimisation (SEO)',
        description: 'Rank higher. Get found. Grow organically. We build a solid SEO foundation—covering technical audits, on-page optimisation, and high-quality link building.',
        number: '01',
        features: ['Technical SEO', 'Keyword Research', 'Link Building']
    },
    {
        id: 'web-development',
        icon: 'bx-code-alt',
        title: 'Website Design & Development',
        description: 'Fast, beautiful websites that convert visitors into customers. Mobile-first, speed-optimised, and built for conversions.',
        number: '02',
        features: ['Responsive Design', 'Speed Optimised', 'Custom Dev']
    },
    {
        id: 'google-ads',
        icon: 'bx-bullseye',
        title: 'Google Ads Management',
        description: 'Be at the top of search results exactly when your customers are looking. High-performing campaigns across Search, Display, and YouTube.',
        number: '03',
        features: ['PPC Strategy', 'Search Ads', 'ROI Tracking']
    },
    {
        id: 'meta-ads',
        icon: 'bxl-facebook-circle',
        title: 'Meta Ads (FB & Instagram)',
        description: 'Reach your ideal customers on the platforms they use every day. High-converting Meta Ad campaigns driven by performance data.',
        number: '04',
        features: ['Audience Targeting', 'Creative Strategy', 'Retargeting']
    },
    {
        id: 'social-media',
        icon: 'bx-share-alt',
        title: 'Social Media Marketing',
        description: 'Build a loyal audience that buys from you. We manage your presence across Instagram, Facebook, LinkedIn, and YouTube.',
        number: '05',
        features: ['Content Creation', 'Growth Strategy', 'Management']
    },
    {
        id: 'video-production',
        icon: 'bx-video',
        title: 'Video Shoot & Production',
        description: 'Professional video content that makes your brand stand out. High-quality brand videos, product shoots, and ad creatives.',
        number: '06',
        features: ['Commercial Shoots', 'Product Videos', 'Brand Films']
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const ServicesSection = () => {
    return (
        <section className="bg-dark py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Agency Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Digital Marketing Services That <span className="gradient-text">Drive Real Results</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        From strategy to execution, we handle every aspect of your brand's online presence. 
                        Our team of specialists delivers measurable growth across all major digital channels.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card p-8 rounded-4xl group relative overflow-hidden h-full flex flex-col"
                        >
                            {/* Top Row: Icon and Number */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <i className={`bx ${service.icon}`}></i>
                                </div>
                                <span className="text-5xl font-bold text-white/5 select-none group-hover:text-primary/10 transition-colors duration-300">
                                    {service.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="mb-8 grow">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Features Pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                                    >
                                        <i className='bx bx-check'></i> {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Redirection Icon */}
                            <div className="flex justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                                    <i className='bx bx-right-arrow-alt text-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500'></i>
                                </div>
                            </div>

                            {/* Link Overlay */}
                            <Link to={`/services/${service.id}`} className="absolute inset-0 z-30" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Services Button */}
                <div className="mt-16 text-center">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all duration-300 group"
                    >
                        <span>View All Services</span>
                        <i className='bx bx-right-arrow-alt text-xl transform group-hover:translate-x-1 transition-transform'></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
