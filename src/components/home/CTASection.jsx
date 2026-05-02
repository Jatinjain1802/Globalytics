import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-dark">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]" style={{ animationDelay: '2s' }}></div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-white/5 text-primary font-bold tracking-widest uppercase text-xs mb-6 border border-white/10 shadow-xl">
                        Let's Build Something Great
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Ready to <span className="gradient-text">Scale Your Brand?</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        Whether you're looking for expert agency services to grow your business or professional training to build your career, we're here to help you win.
                    </p>

                    {/* Action Buttons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        
                        <a href="tel:+919669023005" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary/10 transition-all border-white/5">
                            <i className='bx bx-phone text-2xl text-primary'></i>
                            <span className="text-sm font-bold">Call Now</span>
                        </a>
                        <a href="https://wa.me/919669023005" target="_blank" rel="noopener noreferrer" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 hover:bg-[#25D366]/10 transition-all border-white/5">
                            <i className='bx bxl-whatsapp text-3xl text-[#25D366]'></i>
                            <span className="font-bold text-sm">WhatsApp Us</span>
                        </a>

                        <Link to="/contact" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary/10 transition-all border-white/5">
                            <i className='bx bx-calendar-check text-3xl text-primary'></i>
                            <span className="font-bold text-sm">Free Audit</span>
                        </Link>

                        <a href="#courses" className="glass-card p-5 rounded-2xl flex flex-col items-center gap-3 hover:bg-secondary/10 transition-all border-white/5">
                            <i className='bx bx-graduation text-3xl text-secondary'></i>
                            <span className="font-bold text-sm">Join Academy</span>
                        </a>

                    </div>

                    <div className="mt-12 text-gray-500 text-xs flex flex-wrap items-center justify-center gap-6">
                        <span className="flex items-center gap-2">
                            <i className='bx bx-check-circle text-[#00C2E8]'></i> Industry Practitioners
                        </span>
                        <span className="flex items-center gap-2">
                            <i className='bx bx-check-circle text-[#00C2E8]'></i> Proven Results
                        </span>
                        <span className="flex items-center gap-2">
                            <i className='bx bx-check-circle text-[#00C2E8]'></i> Lifetime Support
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTASection
