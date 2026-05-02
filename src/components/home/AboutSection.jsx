import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
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
                            className="relative z-10 rounded-4xl overflow-hidden glass-card w-full h-[500px] md:h-[600px]"
                        >
                            <img
                                src="/Images/about/about.webp"
                                alt="Globalytics Team"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"></div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 z-30 hidden md:block"
                        >
                            <div className="glass-card p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-float border-primary/30">
                                <div className="w-14 h-14 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                                    <span className="text-xl font-bold">15+</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg leading-none mb-1">Years Agency Exp.</div>
                                    <div className="text-primary text-xs font-bold uppercase tracking-wider">The Agency That Teaches</div>
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
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Empowering Brands &<br />
                                <span className="gradient-text"> Building Future-Ready Careers.</span>
                            </h2>

                            <div className="border-l-4 border-primary pl-6 mb-8">
                                <p className="text-gray-300 text-lg leading-relaxed italic">
                                    "The best digital marketing education comes from people who are actively doing the work—not just teaching it."
                                </p>
                            </div>

                            <p className="text-gray-400 mb-10 leading-relaxed">
                                Globalytics Digital was founded on a simple idea: real practitioners make the best mentors. 
                                We operate as a high-performance agency for businesses that want results, and a career-building 
                                academy for individuals who want to master the digital industry.
                            </p>

                            {/* Features List */}
                            <div className="space-y-8 mb-12">
                                {[
                                    { icon: 'bx-briefcase', title: 'Agency-Led Training', desc: 'Learn from the same team that runs SEO and Ads for national brands.' },
                                    { icon: 'bx-rocket', title: 'Data-Driven Growth', desc: 'We use real dashboards and live budgets to drive ROI for our clients.' }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        className="flex gap-5"
                                    >
                                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl shrink-0 border border-primary/20">
                                            <i className={`bx ${feature.icon} `}></i>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                            <p className="text-gray-400 leading-relaxed text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-primary transition-all duration-300 shadow-lg"
                            >
                                Our Full Story <i className='bx bx-right-arrow-alt text-xl'></i>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
