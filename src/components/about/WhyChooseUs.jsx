import { motion } from 'framer-motion'

const whyChooseUsData = [
    {
        id: 'practitioner',
        number: '01',
        icon: 'bx-graduation',
        title: 'Practitioner-Led Learning',
        desc: 'Our instructors aren\'t just teachers; they are active marketers running real-world campaigns every day for global brands.',
        className: 'md:col-span-2 md:row-span-2',
        gradient: 'from-[#00C2E8] to-[#4F46E5]'
    },
    {
        id: 'roi',
        number: '02',
        icon: 'bx-line-chart',
        title: 'ROI-First Approach',
        desc: 'We focus on the metrics that matter most: conversions and revenue growth.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-orange-500 to-red-600'
    },
    {
        id: 'support',
        number: '03',
        icon: 'bx-support',
        title: 'Lifetime Mentorship',
        desc: 'Our relationship with students and clients doesn\'t end with a contract or a course. We are your partners for life.',
        className: 'md:col-span-1 md:row-span-2',
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 'industry',
        number: '04',
        icon: 'bx-briefcase',
        title: 'Industry Connections',
        desc: 'Access to a wide network of placement partners and digital agencies across India.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-blue-600 to-indigo-700'
    },
    {
        id: 'custom',
        number: '05',
        icon: 'bx-customize',
        title: 'Customized Strategies',
        desc: 'Every strategy is built from scratch for your brand, using live data and deep research.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 'excellence',
        number: '06',
        icon: 'bx-medal',
        title: 'Excellence in Execution',
        desc: 'We pride ourselves on attention to detail and high-quality production standards in every single campaign we run.',
        className: 'md:col-span-2 md:row-span-1',
        gradient: 'from-yellow-500 to-orange-600'
    }
]

const WhyChooseUs = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050811]">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
                
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#00C2E8 1px, transparent 1px), linear-gradient(90deg, #00C2E8 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6"
                    >
                        <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Why Partner With Us</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
                    >
                        We Don't Just Teach. <br /> 
                        <span className="gradient-text">We Execute to Perfection.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {whyChooseUsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`
                                group relative p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500
                                border border-white/5 bg-white/[0.02] hover:bg-white/[0.05]
                                ${item.className}
                            `}
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute -inset-px bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Header: Icon and Number */}
                                <div className="flex justify-between items-start mb-10">
                                    <div className={`
                                        w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500
                                        bg-white/5 text-primary group-hover:bg-linear-to-br group-hover:${item.gradient} group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,194,232,0.3)]
                                    `}>
                                        <i className={`bx ${item.icon}`}></i>
                                    </div>
                                    <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                                        {item.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                                
                                {/* Subtle Arrow */}
                                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        Learn More <i className='bx bx-right-arrow-alt text-lg'></i>
                                    </div>
                                </div>
                            </div>

                            {/* Massive Watermark Icon */}
                            <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none transform group-hover:scale-125">
                                <i className={`bx ${item.icon} text-[240px] text-white -rotate-12`}></i>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
