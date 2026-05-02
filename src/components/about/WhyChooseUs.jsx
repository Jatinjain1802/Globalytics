import { motion } from 'framer-motion'

const whyChooseUsData = [
    {
        id: 'practitioner',
        icon: 'bx-graduation',
        title: 'Practitioner-Led Learning',
        desc: 'Our instructors aren\'t just teachers; they are active marketers running real-world campaigns every day.',
        className: 'md:col-span-2 md:row-span-2',
        active: true
    },
    {
        id: 'roi',
        icon: 'bx-line-chart',
        title: 'ROI-First Approach',
        desc: 'We focus on the metrics that matter most: conversions and revenue growth.',
        className: 'md:col-span-1 md:row-span-1',
        active: false
    },
    {
        id: 'support',
        icon: 'bx-support',
        title: 'Lifetime Mentorship',
        desc: 'Our relationship with students and clients doesn\'t end with a contract or a course.',
        className: 'md:col-span-1 md:row-span-2',
        active: false
    },
    {
        id: 'industry',
        icon: 'bx-briefcase',
        title: 'Industry Connections',
        desc: 'Access to a wide network of placement partners and digital agencies.',
        className: 'md:col-span-1 md:row-span-1',
        active: false
    },
    {
        id: 'custom',
        icon: 'bx-customize',
        title: 'Customized Strategies',
        desc: 'No cookie-cutter templates. Every strategy is built from scratch for your brand.',
        className: 'md:col-span-1 md:row-span-1',
        active: false
    },
    {
        id: 'excellence',
        icon: 'bx-medal',
        title: 'Excellence in Execution',
        desc: 'We pride ourselves on attention to detail and high-quality production standards.',
        className: 'md:col-span-2 md:row-span-1',
        active: true
    }
]

const WhyChooseUs = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-dark">
            {/* Subtle Tech Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-3"
                    >
                        Why Partner With Us
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Bridging the Gap Between <br /> <span className="gradient-text">Learning & Execution</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {whyChooseUsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                group relative p-8 rounded-4xl transition-all duration-300
                                border border-white/5 bg-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10
                                ${item.className}
                                ${item.active ? 'bg-white/[0.07]' : 'bg-white/5'}
                            `}
                        >
                            <div className="h-full flex flex-col justify-between relative z-10">
                                {/* Icon */}
                                <div className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300
                                    ${item.active ? 'bg-primary text-white shadow-[0_0_20px_rgba(0,194,232,0.3)]' : 'bg-white/5 text-primary group-hover:bg-primary group-hover:text-white'}
                                `}>
                                    <i className={`bx ${item.icon}`}></i>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-400 font-medium">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Hover Decoration */}
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                                    <i className={`bx ${item.icon} text-8xl text-white -rotate-12 transform translate-x-4 -translate-y-4`}></i>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
