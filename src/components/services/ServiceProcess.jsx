import { motion } from 'framer-motion'

const steps = [
    {
        id: '01',
        title: 'Deep Discovery',
        description: 'We dive deep into your business ecosystem to understand your unique challenges, target audience, and long-term goals.',
        icon: 'bx-search-alt'
    },
    {
        id: '02',
        title: 'Strategic Blueprint',
        description: 'We craft a tailored roadmap and design system. Every pixel and interaction is planned for conversion and scale.',
        icon: 'bx-map-alt'
    },
    {
        id: '03',
        title: 'Precision Engineering',
        description: 'Our developers build your solution using modern stacks like React and Node, ensuring top-tier performance and security.',
        icon: 'bx-code-block'
    },
    {
        id: '04',
        title: 'Deploy & Optimize',
        description: 'After rigorous testing, we launch and provide data-driven insights to keep your brand growing in a competitive market.',
        icon: 'bx-rocket'
    }
]

const ServiceProcess = () => {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-40 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-[10px] mb-4"
                    >
                        # HOW WE WORK
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        A Simple Process for <br />
                        <span className="gradient-text">
                            Complex Solutions
                        </span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Success is a journey of precision. We've streamlined our workflow to ensure
                        transparency, efficiency, and market-leading results.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Center Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 overflow-hidden">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full bg-linear-to-b from-primary via-secondary to-primary"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-dark border border-white/10 shadow-[0_0_20px_rgba(0,194,232,0.2)] z-20 flex items-center justify-center">
                                        <i className={`bx ${step.icon} text-primary text-2xl`}></i>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full pl-20 md:pl-0 md:w-[42%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'
                                        }`}>
                                        <div className="group relative glass-card p-8 rounded-4xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">

                                            {/* Top Icon Inside Card */}
                                            <div className="mb-6 flex justify-start">
                                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-primary shadow-[0_0_15px_rgba(0,194,232,0.1)] group-hover:scale-110 transition-transform duration-500">
                                                    <i className={`bx ${step.icon}`}></i>
                                                </div>
                                            </div>

                                            {/* Number Watermark */}
                                            <span className="absolute -bottom-6 right-0 text-[8rem] font-bold text-white/3 group-hover:text-primary/5 transition-colors duration-500 select-none z-0">
                                                {step.id}
                                            </span>

                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Gradient Border Bottom */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceProcess
