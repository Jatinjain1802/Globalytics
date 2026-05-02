import { motion } from 'framer-motion'

const AboutIntro = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-dark">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Visual Core */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-4xl overflow-hidden glass-card w-full h-[550px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Globalytics Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"></div>
                        </motion.div>

                        {/* Rotating Circular Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute -bottom-10 -right-10 z-30 hidden md:flex items-center justify-center w-44 h-44 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                                        <text className="text-[9px] font-bold uppercase tracking-widest fill-primary">
                                            <textPath href="#curve">
                                                • Grow Your Brand • Build Your Career • 
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary w-20 h-20 rounded-full m-auto text-white shadow-[0_0_30px_rgba(0,194,232,0.5)] border-4 border-white/10">
                                    <span className="text-2xl font-black">8+</span>
                                    <span className="text-[8px] font-bold uppercase tracking-tighter">Years</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 text-sm block"># WHO WE ARE</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                                Bridging the Gap <br /> Between 
                                <span className="gradient-text block"> Learning & Execution.</span>
                            </h2>

                            <div className="border-l-4 border-primary pl-6 mb-8">
                                <p className="text-gray-300 text-lg leading-relaxed italic">
                                    "We don't just teach marketing; we live it every day. Our academy is fueled by the real-world success of our agency."
                                </p>
                            </div>

                            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                                At Globalytics Digital, we solve the biggest problem in the digital world: the disconnect 
                                between theoretical knowledge and professional results. We operate as a high-performance 
                                agency for our clients and a practitioner-led academy for our students, ensuring 
                                every strategy we teach is backed by real-world execution.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: 'bx-rocket',
                                        title: 'Result-Oriented Agency',
                                        desc: "We focus on ROI, conversions, and long-term brand equity for our global and regional clients."
                                    },
                                    {
                                        icon: 'bx-graduation',
                                        title: 'Practitioner-Led Academy',
                                        desc: "Learn from industry experts who are actively running million-dollar campaigns every day."
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex gap-5">
                                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-white/5">
                                            <i className={`bx ${feature.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                            <p className="text-gray-400 leading-relaxed text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
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
