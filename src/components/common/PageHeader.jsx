import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PageHeader = ({ title, breadcrumbItems, backgroundImage }) => {
    return (
        <div className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-dark">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
                style={{
                    backgroundImage: `url(${backgroundImage || '/Images/Breadcrumb.webp'})`
                }}
            ></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-dark/20 via-dark/60 to-dark"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full mx-auto px-6 flex flex-col items-center justify-center pt-12">
                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-center"
                >
                    {title}
                </motion.h1>

                {/* Elegant Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center glass px-6 py-2 rounded-full border-white/10"
                >
                    {breadcrumbItems.map((item, index) => (
                        <div key={index} className="flex items-center">
                            {index > 0 && (
                                <span className="mx-3 text-white/20 font-light">/</span>
                            )}
                            {item.link ? (
                                <Link
                                    to={item.link}
                                    className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">
                                    {item.label}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
    )
}

export default PageHeader
