import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { coursesData } from '../../data/coursesData'

const CoursesSection = () => {
    const courses = Object.keys(coursesData).map(key => ({
        id: key,
        ...coursesData[key]
    }))

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section id="courses" className="bg-[#0A0F1C] py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-[#00C2E8] font-bold tracking-wider uppercase text-sm mb-3 block">Globalytics Academy</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Build a High-Income <span className="gradient-text">Digital Career</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Learn from practitioners, not just teachers. Our courses are designed to get you job-ready or freelance-ready with real-world campaign training.
                    </p>
                </motion.div>

                {/* Courses Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            variants={itemVariants}
                            className="glass-card group rounded-2xl overflow-hidden flex flex-col h-full"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={course.heroImage} 
                                    alt={course.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0A0F1C] to-transparent opacity-60"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#00C2E8] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                                        {course.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00C2E8] transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="mt-auto space-y-4">
                                    <div className="flex justify-between items-center text-xs text-gray-500 font-medium border-t border-white/5 pt-4">
                                        <div className="flex items-center gap-1">
                                            <i className='bx bx-time-five text-[#00C2E8]'></i>
                                            {course.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <i className='bx bx-laptop text-[#4F46E5]'></i>
                                            {course.mode.split(' ')[0]}
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        to={`/courses/${course.id}`}
                                        className="w-full py-3 bg-white/5 hover:bg-[#00C2E8] text-white font-bold rounded-xl text-sm transition-all duration-300 text-center block"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Dual Persona Split Callout */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="p-8 rounded-3xl bg-linear-to-br from-[#00C2E8]/10 to-transparent border border-white/10 glass shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Are You a Business Owner?</h3>
                        <p className="text-gray-400 mb-6">Scale your revenue with our expert agency services. Let us handle your SEO, Ads, and Content.</p>
                        <Link to="/contact" className="text-[#00C2E8] font-bold flex items-center gap-2 group">
                            Explore Services <i className='bx bx-right-arrow-alt group-hover:translate-x-2 transition-transform'></i>
                        </Link>
                    </div>
                    <div className="p-8 rounded-3xl bg-linear-to-br from-[#4F46E5]/10 to-transparent border border-white/10 glass shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Looking to Build a Career?</h3>
                        <p className="text-gray-400 mb-6">Join our Academy and learn from the pros. Practical training with 100% placement support.</p>
                        <Link to="/contact" className="text-[#4F46E5] font-bold flex items-center gap-2 group">
                            Enroll in a Course <i className='bx bx-right-arrow-alt group-hover:translate-x-2 transition-transform'></i>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CoursesSection
