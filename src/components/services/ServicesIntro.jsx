import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServicesIntro = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-dark">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="flex items-center gap-3 text-primary font-bold tracking-widest uppercase mb-6 text-sm">
                                <span className="w-8 h-0.5 bg-primary"></span>
                                # WHY PARTNER WITH US
                            </h4>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                We Engineer <br />
                                <span className="gradient-text">
                                    Digital Dominance
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                In today's digital economy, simply being online isn't enough. You need a 
                                performance-driven system that acts as your hardest-working employee. 
                                We combine <strong className="text-white">stunning aesthetics</strong> with 
                                <strong className="text-white">data-driven engineering</strong> to help you lead your industry.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                                {[
                                    { title: 'Result-First Logic', desc: 'Every line of code serves ROI.' },
                                    { title: 'Hardened Security', desc: 'Bank-grade encryption built-in.' },
                                    { title: 'Mobile-First UX', desc: 'Flawless across every device.' },
                                    { title: 'Predictive Strategy', desc: 'Stay ahead of the curve.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(0,194,232,0.1)]">
                                            <i className='bx bx-check-double text-xl'></i>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-lg leading-tight mb-1">{item.title}</h5>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,194,232,0.3)] hover:shadow-[0_0_30px_rgba(0,194,232,0.5)] transition-all"
                                >
                                    Start Your Growth Journey
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className="relative order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-4xl overflow-hidden glass-card border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                    alt="Globalytics Strategy"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Stats Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-white/10 z-20 flex items-center gap-4 max-w-[220px]"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl shadow-[0_0_15px_rgba(0,194,232,0.2)]">
                                    <i className='bx bx-trending-up'></i>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Growth Factor</p>
                                    <p className="text-xl font-bold text-white">4.5x ROI</p>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full -z-10 blur-3xl" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServicesIntro
