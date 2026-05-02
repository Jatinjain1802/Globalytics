import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import { productsData } from '../data/productsData'
import CTASection from '../components/home/CTASection'
import SEO from '../components/common/SEO'

const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = productsData[id]
    const [openFaqIndex, setOpenFaqIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!product) {
            navigate('/')
        }
    }, [id, product, navigate])

    if (!product) return null

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://geektheory.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://geektheory.in/#products"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": product.title,
                "item": `https://geektheory.in/products/${id}`
            }
        ]
    };

    return (
        <div className="bg-white">
            <SEO
                title={product.title}
                description={product.description}
                url={`/products/${id}`}
                schemaMarkup={breadcrumbSchema}
            />
            <PageHeader
                title={product.title}
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Products', link: '/' },
                    { label: product.title }
                ]}
                backgroundImage="/Images/Breadcrumb.webp"
            />

            {/* Product Overview Section */}
            <section className="py-10 md:py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <i className='bx bx-package text-lg'></i>
                                <span>Software Product</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {product.tagline}
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Pricing Models (if available) */}
                            {product.pricingModels && (
                                <div className="space-y-3 mb-8">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Available Models</h3>
                                    {product.pricingModels.map((model, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                            <i className='bx bx-check-circle text-green-500 text-xl mt-0.5'></i>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{model.name}</h4>
                                                <p className="text-sm text-gray-600">{model.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* CTA Buttons - Modified for better SEO and specific action */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/contact"
                                    className="px-8 py-4 bg-linear-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
                                >
                                    Get {product.title} Free Trial
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            className="relative"
                        >
                            {/* Main Image Container - Optimized for logos and visuals */}
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-linear-to-br from-white to-gray-50 h-[500px] group border border-gray-100">
                                <img
                                    src={product.heroImage}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Bottom Decorative Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <div className="flex items-center gap-4 mb-4">
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Ready to Transform Your Business?</h3>
                                    <p className="text-gray-200 text-sm font-medium">Get started with a free consultation today.</p>
                                </div>

                                {/* Floating Logo Glow Effect */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-linear-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-2xl shadow-2xl z-20">
                                <div className="text-xs font-bold uppercase tracking-wider opacity-90">Trusted By</div>
                                <div className="text-2xl font-bold">500+ Clients</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid Section */}
            <section className="py-10 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">Key Features</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Everything You Need in <span className="text-red-600">One Platform</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {product.simpleFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-linear-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-red-500/30">
                                        <i className={`bx ${feature.icon} text-3xl text-red-600 group-hover:text-white transition-colors duration-500`}></i>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Bottom Line Decoration */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-10 md:py-24 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Benefits That Drive <span className="text-red-600">Real Results</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our solution is designed to deliver measurable value from day one. Here's what you can expect:
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {product.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <i className='bx bx-check text-green-600 font-bold'></i>
                                    </div>
                                    <p className="text-gray-700 font-medium">{benefit}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 md:py-24 bg-white relative overflow-hidden">
                {/* Background Decorative */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                            Got Questions?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="text-red-600">Questions</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Find answers to common questions about our product.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {product.faq.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index
                                    ? 'bg-gradient-to-r from-red-50 to-white shadow-lg border-l-4 border-red-500'
                                    : 'bg-gray-50 hover:bg-gray-100 border-l-4 border-transparent'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${openFaqIndex === index
                                            ? 'bg-red-600 text-white'
                                            : 'bg-white text-gray-600 shadow-sm'
                                            }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="font-bold text-gray-900 text-lg pr-4">{item.question}</span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaqIndex === index
                                            ? 'bg-red-100 text-red-600'
                                            : 'bg-white text-gray-400 shadow-sm'
                                            }`}
                                    >
                                        <i className='bx bx-chevron-down text-2xl'></i>
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pl-20">
                                                <p className="text-gray-600 leading-relaxed text-lg">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Below FAQ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-600 mb-4">Still have questions?</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                            <i className='bx bx-message-dots text-xl'></i>
                            Contact Our Team
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </div>
    )
}

export default ProductDetail
