import { motion } from 'framer-motion'

const benefits = [
    {
        title: "Practitioners, Not Just Trainers",
        description: "Every strategy we implement and every lesson we teach comes from active agency experience. We don't rely on theory; we rely on what's working on Google and Meta right now.",
        icon: "bx-user-voice",
        color: "from-[#00C2E8] to-[#0080FF]"
    },
    {
        title: "Focus on Measurable ROI",
        description: "Vanity metrics like likes and followers don't pay bills. We focus on Lead Generation, Sales, and ROAS (Return on Ad Spend) to ensure every rupee you spend drives profit.",
        icon: "bx-line-chart",
        color: "from-[#4F46E5] to-[#7C3AED]"
    },
    {
        title: "Proprietary Tech Stack",
        description: "We don't use slow, generic templates. Our development team builds custom, high-performance web applications using the latest tech like React, Node.js, and Tailwind 4.0.",
        icon: "bx-code-block",
        color: "from-[#00C2E8] to-[#4F46E5]"
    },
    {
        title: "Live Campaign Access",
        description: "Our Academy students don't just watch slides. They get hands-on experience with live ad accounts and real client data, preparing them for the high-pressure world of digital marketing.",
        icon: "bx-broadcast",
        color: "from-[#7C3AED] to-[#DB2777]"
    },
    {
        title: "End-to-End Execution",
        description: "From video shoots and editing to SEO and complex CRM integrations—we are your complete digital growth partner. No need to manage multiple agencies; we handle it all.",
        icon: "bx-layer",
        color: "from-[#00C2E8] to-[#2DD4BF]"
    },
    {
        title: "Global Standards, Local Context",
        description: "We bring world-class digital standards to the Indian market, helping local brands beat both regional competitors and global giants through technical excellence.",
        icon: "bx-world",
        color: "from-[#F59E0B] to-[#EF4444]"
    }
]

const KeyBenefits = () => {
    return (
        <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Why Globalytics Digital?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Bridging the Gap Between <br />
                        <span className="gradient-text">Learning & Execution</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        We aren't just an agency or just an academy—we are a growth ecosystem designed to deliver results for businesses and careers alike.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-10 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Gradient Border Hover Effect */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${benefit.color}`}></div>

                            <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${benefit.color} p-0.5 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <div className="w-full h-full bg-[#0A0F1C] rounded-[14px] flex items-center justify-center text-3xl">
                                    <i className={`bx ${benefit.icon} text-white`}></i>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {benefit.description}
                            </p>
                            
                            {/* Decorative Corner Icon */}
                            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <i className={`bx ${benefit.icon} text-9xl text-white`}></i>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KeyBenefits
