import { motion } from 'framer-motion'

const Founder = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0F1C]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-6"
                    >
                        {/* Premium Border Frame */}
                        <div className="absolute inset-0 border border-[#00C2E8]/30 rounded-[3.5rem] -rotate-1"></div>

                        {/* Image Container */}
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-white/5 group">
                            <img
                                src="/BhupendraSir.webp"
                                alt="Founder"
                                className="w-full h-[650px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Refined Smooth Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#0A0F1C] via-transparent to-transparent"></div>

                            {/* Personal Info Overlay */}
                            <div className="absolute bottom-10 left-10 z-20">
                                <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">
                                    Bhupendra Kashyap
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-0.5 bg-[#00C2E8]"></span>
                                    <p className="text-[#00C2E8] font-bold tracking-widest text-xs uppercase">
                                        Founder, Globalytics Digital
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-1 bg-primary"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">A MESSAGE FROM THE FOUNDER</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            Empowering Growth Through <span className="gradient-text">Innovation.</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                "At Globalytics Digital, we believe that education and execution must go hand in hand. 
                                My mission is to bridge the gap between theoretical learning and industry reality. 
                                We don't just provide services; we empower brands to become market leaders."
                            </p>
                            <p>
                                "Whether you are a business owner looking to scale or a student looking to build a career, 
                                we are here to provide the tools, strategies, and mentorship you need to succeed in the digital age."
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-6">
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                    <i className='bx bxl-linkedin text-xl'></i>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                    <i className='bx bxl-instagram text-xl'></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Founder
