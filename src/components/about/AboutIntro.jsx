import { motion } from 'framer-motion'

const AboutIntro = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0F1C]">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C2E8]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Premium Visual Core */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,194,232,0.1)] group"
                        >
                            <img
                                src="/Images/about/about.webp"
                                alt="Globalytics Digital Team"
                                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0A0F1C] via-transparent to-transparent opacity-80"></div>
                            
                            {/* Overlay Info Card */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-3xl border-white/10 backdrop-blur-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                                        <i className='bx bx-check-shield'></i>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Verified Results</div>
                                        <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Industry Standard Agency</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Circular Rotating Badge - Floating Effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-10 -right-10 z-30 hidden md:flex items-center justify-center w-52 h-52 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,194,232,0.2)]"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                        <path id="curveAbout" d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" fill="transparent" />
                                        <text className="text-[8.5px] font-black uppercase tracking-[0.22em] fill-primary">
                                            <textPath href="#curveAbout">
                                                • GROW YOUR BRAND • BUILD YOUR CAREER • 
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-primary to-secondary w-24 h-24 rounded-full m-auto text-white shadow-2xl border-4 border-white/10">
                                    <span className="text-3xl font-black leading-none">15+</span>
                                    <span className="text-[10px] font-bold uppercase tracking-tighter opacity-80">Years</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Typography & Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                                <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Heritage & Mission</span>
                            </div>

                            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Bridging the Gap <br /> Between 
                                <span className="gradient-text block mt-2"> Strategy & ROI.</span>
                            </h2>

                            <div className="border-l-4 border-primary pl-8 mb-10 py-2">
                                <p className="text-gray-300 text-xl leading-relaxed italic font-medium">
                                    "We don't just teach marketing; we live it. Our academy is fueled by the real-world success of our high-performance agency."
                                </p>
                            </div>

                            <p className="text-gray-400 mb-12 leading-relaxed text-lg max-w-xl">
                                Globalytics Digital solves the biggest disconnect in the industry: the gap 
                                between theoretical knowledge and professional results. We operate as an 
                                elite agency for global brands and a practitioner-led academy for 
                                the next generation of digital masters.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: 'bx-rocket',
                                        title: 'Elite Agency',
                                        desc: "Multi-million dollar campaigns run by practitioners."
                                    },
                                    {
                                        icon: 'bx-graduation',
                                        title: 'Master Academy',
                                        desc: "Hands-on training with real budgets and live data."
                                    }
                                ].map((feature, index) => (
                                    <motion.div 
                                        key={index} 
                                        whileHover={{ y: -5 }}
                                        className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mb-4 border border-primary/20">
                                            <i className={`bx ${feature.icon}`}></i>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-xs">
                                            {feature.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro
