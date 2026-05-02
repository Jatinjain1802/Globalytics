import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import { servicesData } from '../data/servicesData'
import CTASection from '../components/home/CTASection'
import SEO from '../components/common/SEO'

const ServiceDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const service = servicesData[id]
    const [activeTab, setActiveTab] = useState(0)
    const [openFaqIndex, setOpenFaqIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!service) {
            navigate('/services')
        }
    }, [id, service, navigate])

    if (!service) return null

    const isComplex = service.isComplexService

    return (
        <div className="bg-[#0A0F1C] text-white">
            <SEO
                title={`${service.title} - Globalytics Digital`}
                description={service.description}
                url={`/services/${id}`}
            />
            
            <PageHeader
                title={service.title}
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Services', link: '/services' },
                    { label: service.title }
                ]}
                backgroundImage={service.heroImage}
            />

            {/* Intro Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#00C2E8] font-bold tracking-widest uppercase text-sm mb-4 block">Service Overview</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {service.tagline}
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-[#00C2E8] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,194,232,0.3)] hover:scale-105 transition-all">
                                    Request Quote
                                </Link>
                                <a href="https://wa.me/919669023005" className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
                                    <i className='bx bxl-whatsapp text-xl'></i> Talk to Expert
                                </a>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-4xl overflow-hidden glass-card border-white/5">
                                <img src={service.heroImage} alt={service.title} className="w-full aspect-video object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features/Modules Section (The "Original" Design) */}
            <section className="py-20 bg-black/30 relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Everything You <span className="gradient-text">Need</span></h2>
                        <p className="text-gray-400">Comprehensive features designed for your success.</p>
                    </div>

                    {!isComplex && service.simpleFeatures && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left Sidebar - Tabs */}
                            <div className="lg:col-span-4">
                                <div className="glass-card rounded-4xl p-4 border-white/5 sticky top-24">
                                    <div className="flex flex-col gap-2">
                                        {service.simpleFeatures.map((feature, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveTab(index)}
                                                className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${activeTab === index ? 'bg-[#00C2E8] text-white shadow-[0_10px_20px_rgba(0,194,232,0.2)]' : 'hover:bg-white/5 text-gray-400'}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all ${activeTab === index ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                                                        <i className={`bx ${feature.icon}`}></i>
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="font-bold text-sm leading-tight">{feature.title}</div>
                                                        <div className={`text-[10px] mt-0.5 uppercase tracking-wider ${activeTab === index ? 'text-white/70' : 'text-gray-500'}`}>Click for details</div>
                                                    </div>
                                                </div>
                                                <i className={`bx bx-chevron-right text-xl transition-all ${activeTab === index ? 'translate-x-1' : 'opacity-0'}`}></i>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="lg:col-span-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="glass-card rounded-4xl p-8 md:p-12 border-white/5 h-full"
                                    >
                                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00C2E8]/10 rounded-2xl flex items-center justify-center text-4xl text-[#00C2E8] shrink-0 shadow-[0_10px_30px_rgba(0,194,232,0.1)]">
                                                <i className={`bx ${service.simpleFeatures[activeTab].icon}`}></i>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold mb-4">{service.simpleFeatures[activeTab].title}</h3>
                                                <p className="text-gray-400 text-lg leading-relaxed">
                                                    {service.simpleFeatures[activeTab].desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {service.simpleFeatures[activeTab].highlights?.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00C2E8]/30 transition-all">
                                                    <div className="w-8 h-8 rounded-lg bg-[#00C2E8]/10 flex items-center justify-center text-[#00C2E8]">
                                                        <i className={`bx ${highlight.icon || 'bx-check'}`}></i>
                                                    </div>
                                                    <span className="font-medium text-sm text-gray-200">{highlight.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}

                    {isComplex && service.modules && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.modules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 rounded-3xl border-white/5 group hover:border-[#00C2E8]/30"
                                >
                                    <div className="w-14 h-14 bg-[#00C2E8]/10 text-[#00C2E8] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#00C2E8] group-hover:text-white transition-all">
                                        <i className={`bx ${module.icon}`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{module.description}</p>
                                    <ul className="space-y-3">
                                        {module.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                                                <i className='bx bx-check text-[#00C2E8] mt-0.5'></i>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            {service.benefits && (
                <section className="py-20 relative">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Key <span className="gradient-text">Benefits</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {service.benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-[#00C2E8]/10 flex items-center justify-center text-xl text-[#00C2E8] shrink-0">
                                        <i className='bx bx-check-shield'></i>
                                    </div>
                                    <p className="text-gray-300 font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {service.faq && (
                <section className="py-20 bg-black/20">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold">Service <span className="gradient-text">FAQs</span></h2>
                        </div>
                        <div className="space-y-4">
                            {service.faq.map((f, i) => (
                                <div key={i} className="glass-card rounded-2xl overflow-hidden border-white/5">
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                        className="w-full p-6 text-left flex justify-between items-center"
                                    >
                                        <span className="font-bold">{f.question}</span>
                                        <i className={`bx bx-chevron-down text-xl transition-all ${openFaqIndex === i ? 'rotate-180 text-[#00C2E8]' : ''}`}></i>
                                    </button>
                                    <AnimatePresence>
                                        {openFaqIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6 text-gray-400 text-sm"
                                            >
                                                {f.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTASection />
        </div>
    )
}

export default ServiceDetail
