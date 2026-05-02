import { motion } from 'framer-motion'

const ServicesHero = () => {
    return (
        <section className="relative pt-24 pb-10 lg:pt-40 lg:pb-28 overflow-hidden bg-gray-900">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-600/30 text-red-500 font-bold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        Our Expertise
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Transforming Ideas into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Digital Reality</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We provide end-to-end technology solutions to help your business thrive. From conceptualization to deployment, we are your trusted partners in innovation.
                    </p>
                </motion.div>
            </div>

            {/* Curved Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full fill-gray-50">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default ServicesHero
