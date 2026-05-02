import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const faqs = [
    {
        question: "How long does it take to develop a premium website?",
        answer: "Timelines vary based on complexity. A performance-driven business site typically takes 3-5 weeks, while a full-scale ERP or custom web application can take 10-14 weeks."
    },
    {
        question: "Do you provide post-launch maintenance?",
        answer: "Yes, we offer premium maintenance packages that include 24/7 security monitoring, daily backups, and performance optimization to ensure your systems never go down."
    },
    {
        question: "How do you ensure the security of my data?",
        answer: "We use bank-grade encryption, hardened code structures, and private VPS hosting to protect all client data. We also sign NDAs to ensure 100% confidentiality."
    },
    {
        question: "Can you help with brand growth after development?",
        answer: "Absolutely. Our agency team specializes in ROI-focused SEO, Google Ads management, and WhatsApp automation to turn your new platform into a growth engine."
    },
    {
        question: "What makes your Academy training different?",
        answer: "Our Academy is practitioner-led. You learn from the same engineers and marketers who build our agency projects. We focus on real-world implementation, not just theory."
    },
    {
        question: "Do you build custom mobile apps for both iOS and Android?",
        answer: "Yes, we use modern cross-platform frameworks to build high-performance apps that work flawlessly on both Apple and Android devices with a single codebase."
    }
]

const FAQ = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null)

    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary/10 border border-primary/20 text-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                        # KNOWLEDGE HUB
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about our process and solutions.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl overflow-hidden transition-all duration-300 border ${openFaqIndex === index
                                ? 'bg-white/5 border-primary/30 shadow-2xl shadow-primary/10'
                                : 'bg-white/2 border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${openFaqIndex === index
                                        ? 'bg-primary text-white shadow-[0_0_15px_rgba(0,194,232,0.5)]'
                                        : 'bg-white/5 text-gray-500 group-hover:bg-white/10'
                                        }`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className={`font-bold text-lg pr-4 transition-colors ${openFaqIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${openFaqIndex === index
                                    ? 'bg-primary/20 text-primary rotate-180'
                                    : 'bg-white/5 text-gray-500'
                                    }`}>
                                    <i className='bx bx-chevron-down text-2xl'></i>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openFaqIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-8 pl-20">
                                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA Below FAQ */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 mb-6 text-sm">Still have questions? We're here to help.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary hover:border-primary transition-all shadow-lg">
                        <i className='bx bx-message-dots text-xl'></i>
                        Consult with an Expert
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FAQ
