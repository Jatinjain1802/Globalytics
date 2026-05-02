import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { servicesData } from '../../data/servicesData'

const ServicesList = () => {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-3"
                    >
                        # OUR EXPERTISE
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Solutions That Power <br /> <span className="gradient-text">Modern Businesses</span>
                    </motion.h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                        A comprehensive suite of digital services engineered to solve complex problems and drive measurable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(servicesData).map(([id, service], index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Top Row: Icon and Number */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,194,232,0.1)]">
                                    <i className={`bx ${service.simpleFeatures?.[0]?.icon || 'bx-cube'}`}></i>
                                </div>
                                <span className="text-4xl font-bold text-white/5 select-none group-hover:text-primary/10 transition-colors duration-300">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="mb-8 grow relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {service.description.length > 120 ? service.description.substring(0, 120) + '...' : service.description}
                                </p>
                            </div>

                            {/* Features Pills */}
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
                                {service.simpleFeatures?.slice(0, 3).map((feature, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-wide group-hover:text-primary transition-colors"
                                    >
                                        <i className='bx bx-check text-xs'></i> {feature.title}
                                    </span>
                                ))}
                            </div>

                            {/* Hidden Link for full clickability */}
                            <Link to={`/services/${id}`} className="absolute inset-0 z-10" aria-label={service.title} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesList
