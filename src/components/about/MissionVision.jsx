import { motion } from 'framer-motion'

const MissionVision = () => {
    return (
        <section className="py-20 bg-[#0A0F1C]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-10 rounded-4xl border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300">
                            <i className='bx bx-target-lock text-9xl text-white'></i>
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-[0_0_20px_rgba(0,194,232,0.3)] rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                <i className='bx bx-target-lock'></i>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To empower businesses and individuals through high-performance digital marketing and practical education.
                                We are dedicated to delivering measurable growth for our clients and life-changing skills for our students.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-10 rounded-4xl border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300">
                            <i className='bx bx-bulb text-9xl text-white'></i>
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-[0_0_20px_rgba(79,70,229,0.3)] -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                                <i className='bx bx-bulb'></i>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To become India's most trusted dual-path digital growth partner, setting the benchmark
                                for how agencies can drive business results and how academies can prepare students for the real world.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision
