
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
    {
        id: 'rent-system',
        name: 'Asset Rent Cycle',
        category: 'Rental Management',
        image: '/Images/Assetrent.webp',
        description: 'An advanced platform for laptop rentals. Create instant quotations, manage assignments, track assets, and streamline sales operations effortlessly.',
        link: '/services/simply-rent'
    },
    {
        id: 'ednue-lms',
        name: 'Ednue',
        category: 'Coaching Platform',
        image: '/Images/Ednue.webp',
        description: 'The complete solution for coaching institutes to go online. Sell your video courses, conduct live classes, and collect fees automatically.',
        link: '/services/lms'
    },
    {
        id: 'socratech-ai',
        name: 'Socratech AI',
        category: 'Mobile Application',
        image: '/Images/socratech.webp',
        description: 'A cutting-edge AI-powered mobile application delivering smart solutions for education and personal growth.',
        link: '/services/mobile-app'
    },
    {
        id: 'waply',
        name: 'Waply Automation',
        category: 'WhatsApp Sales',
        image: '/Images/waply.webp',
        description: 'Stop sending messages manually. Send bulk offers to thousands of customers in one click and reply to leads automatically via Chatbot.',
        link: '/services/waply'
    }
]

const ProductShowcase = () => {
    return (
        <section className="py-10 md:py-24 relative bg-gray-50/50">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-40 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Sticky Content - Sticky only on Desktop */}
                    <div className="w-full lg:w-1/3 lg:sticky relative top-32 self-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="pr-6"
                        >
                            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                                OUR PORTFOLIO
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Projects We Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Built</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                From rental systems to education platforms, we build scalable software businesses.
                            </p>

                            {/* Features List */}
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Scalable Architecture',
                                    'User-Centric Design',
                                    'Seamless Automation',
                                    'Ongoing Support'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">
                                            <i className='bx bx-check'></i>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-red-600 shadow-lg hover:shadow-red-500/30"
                            >
                                Start Your Project
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Sticky Cards */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-12 pb-24">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative lg:sticky top-auto lg:top-[var(--sticky-top)]"
                                style={{
                                    '--sticky-top': `${100 + (index * 40)}px`,
                                    zIndex: index + 1
                                }}
                            >
                                <Link to={product.link} className="group block mb-8 lg:mb-0">
                                    <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col md:flex-row h-auto min-h-[450px] md:min-h-[380px]">

                                        {/* Image Area */}
                                        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-gray-50">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                                decoding="async"
                                                width="600"
                                                height="400"
                                                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide shadow-sm">
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center relative bg-white">
                                            <div className="mb-2 flex justify-end">
                                                <span className="text-gray-100 font-bold text-5xl md:text-6xl select-none">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors z-10 -mt-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 z-10 line-clamp-4">
                                                {product.description}
                                            </p>

                                            <div className="flex items-center text-red-600 font-bold text-sm tracking-wide group/btn pt-6 border-t border-gray-50 mt-auto z-10">
                                                <span>View Project Case Study</span>
                                                <i className='bx bx-right-arrow-alt text-xl ml-2 transform transition-transform group-hover/btn:translate-x-1'></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductShowcase;
