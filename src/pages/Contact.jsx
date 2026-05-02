import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import SEO from '../components/common/SEO'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setSubmitStatus('success')
            setIsSubmitting(false)
            setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
        }, 1500)
    }

    return (
        <div className="bg-[#0A0F1C] text-white">
            <SEO
                title="Contact Us | Globalytics Digital"
                description="Get in touch with Globalytics Digital for expert digital marketing services and professional academy courses."
                url="/contact"
            />
            <PageHeader
                title="Get In Touch"
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Contact' }
                ]}
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />

            <section className="py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#00C2E8] font-bold tracking-widest uppercase text-sm mb-4 block">Contact Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Talk About Your <span className="gradient-text">Growth.</span></h2>
                            
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-[#00C2E8]/10 rounded-2xl flex items-center justify-center text-2xl text-[#00C2E8] shrink-0">
                                        <i className='bx bx-phone'></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Call Us</h4>
                                        <p className="text-gray-400">+91 96690 23005</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-[#00C2E8]/10 rounded-2xl flex items-center justify-center text-2xl text-[#00C2E8] shrink-0">
                                        <i className='bx bx-envelope'></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Us</h4>
                                        <p className="text-gray-400">info@globalyticsdigital.in</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-[#00C2E8]/10 rounded-2xl flex items-center justify-center text-2xl text-[#00C2E8] shrink-0">
                                        <i className='bx bx-map'></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Office</h4>
                                        <p className="text-gray-400">20, Narayan Pura Square, above Relaxo Footwear, near Teen Batti, Ujjain, MP 456010</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 md:p-10 rounded-4xl border-white/5"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#00C2E8] transition-all"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#00C2E8] transition-all"
                                        required
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#00C2E8] transition-all"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your requirements..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#00C2E8] transition-all resize-none"
                                    required
                                ></textarea>
                                
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-500/10 text-green-500 rounded-xl text-center font-bold">
                                        Message Sent Successfully!
                                    </div>
                                ) }

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#00C2E8] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,194,232,0.3)] hover:scale-[1.02] transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
