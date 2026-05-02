import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import { coursesData } from '../data/coursesData'
import CTASection from '../components/home/CTASection'
import SEO from '../components/common/SEO'

const CourseDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const course = coursesData[id]
    const [openFaqIndex, setOpenFaqIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!course) {
            navigate('/')
        }
    }, [id, course, navigate])

    if (!course) return null

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }

    return (
        <div className="bg-dark text-white">
            <SEO
                title={course.title}
                description={course.description}
                url={`/courses/${id}`}
            />
            <PageHeader
                title={course.title}
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Academy', link: '/' },
                    { label: course.title }
                ]}
                backgroundImage={course.heroImage}
            />

            {/* Course Overview Section */}
            <section className="py-16 md:py-24 bg-gradient-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <i className='bx bx-book-open text-lg'></i>
                                <span>{course.badge || 'Professional Course'}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {course.tagline}
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {course.description}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-primary text-xs font-bold uppercase mb-1">Duration</div>
                                    <div className="text-lg font-bold">{course.duration}</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-primary text-xs font-bold uppercase mb-1">Mode</div>
                                    <div className="text-lg font-bold">{course.mode}</div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8">
                                <div className="text-sm font-bold uppercase mb-2">Outcome</div>
                                <p className="text-gray-200">{course.outcome}</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-primary transition-all duration-300 shine-hover"
                                >
                                    Enroll Now
                                </Link>
                                <a
                                    href="#features"
                                    className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300"
                                >
                                    Curriculum
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl glass-card h-[500px] group">
                                <img
                                    src={course.heroImage}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Start?</h3>
                                    <p className="text-gray-300 text-sm">Join 5,000+ students already learning with us.</p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid Section */}
            <section id="features" className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">What You'll Learn</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Course <span className="gradient-text">Curriculum</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {course.simpleFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="glass-card p-8 rounded-2xl group overflow-hidden"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                                    <i className={`bx ${feature.icon} text-3xl text-primary group-hover:text-white transition-colors duration-500`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-dark">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Globalytics Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Why This Course Is <span className="gradient-text">Different</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                We don't just teach theory. We build careers using practitioner-led training.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {course.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-start gap-4 p-5 glass rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <i className='bx bx-check text-primary font-bold'></i>
                                    </div>
                                    <p className="text-gray-300">{benefit}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-dark relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Course <span className="gradient-text">FAQs</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {course.faq.map((item, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'glass border-primary/30' : 'bg-white/5'}`}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-lg">{item.question}</span>
                                    <i className={`bx bx-chevron-down text-2xl transition-transform ${openFaqIndex === index ? 'rotate-180 text-primary' : ''}`}></i>
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6 text-gray-400"
                                        >
                                            {item.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    )
}

export default CourseDetail
