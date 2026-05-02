import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const products = [
    {
        icon: 'bx-package',
        title: 'Simply Rent',
        category: 'Rental Management',
        link: '/products/simply-rent',
        delay: 0.1
    },
    {
        icon: 'bxl-whatsapp',
        title: 'Waply',
        category: 'WhatsApp Marketing',
        link: '/products/waply',
        delay: 0.2
    },
    {
        icon: 'bx-target-lock',
        title: 'Simple Leads',
        category: 'Lead Generation',
        link: '/products/simple-leads',
        delay: 0.3
    },
    {
        icon: 'bx-book-reader',
        title: 'Simply Learn',
        category: 'LMS Application',
        link: '/products/simply-learn',
        delay: 0.4
    },
    {
        icon: 'bx-id-card',
        title: 'Digital V-Card',
        category: 'Digital Identity',
        link: '/products/digital-vcard',
        delay: 0.5
    },
    {
        icon: 'bx-share-alt',
        title: 'SMM Tool',
        category: 'Social Media',
        link: '/products/smm-tool',
        delay: 0.6
    }
]

const ProductsOverviewSection = () => {
    return (
        <section className="py-10 md:py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                        OUR PRODUCTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Digital Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Business Growth</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore our suite of specialized software designed to automate your operations and boost efficiency.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: product.delay }}
                        >
                            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(220,38,38,0.08)] hover:border-red-100 transition-all duration-300 h-full flex flex-col relative overflow-hidden">

                                {/* Icon & Header - Smoother Layout */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <i className={`bx ${product.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content - Removed redundant category text */}
                                <div className="mb-6 flex-1">
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Automate and grow with our specialized {product.title} solution.
                                    </p>
                                </div>

                                {/* Action Buttons - Compact */}
                                <div className="flex items-center gap-2 mt-auto">
                                    <Link
                                        to={product.link}
                                        className="flex-1 py-2.5 px-3 rounded-lg bg-gray-50 text-gray-700 font-bold text-center text-xs border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                                    >
                                        Learn More
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="flex-1 py-2.5 px-3 rounded-lg bg-red-50 text-red-600 font-bold text-center text-xs border border-red-100 hover:bg-red-600 hover:text-white hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
                                    >
                                        <i className='bx bx-play-circle text-base'></i> Demo
                                    </Link>
                                </div>

                                {/* Hover Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsOverviewSection
