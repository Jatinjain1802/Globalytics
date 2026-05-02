import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import SEO from '../components/common/SEO'
import { motion } from 'framer-motion'
import CTASection from '../components/home/CTASection'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-dark text-white">
            <SEO
                title="Privacy Policy | Globalytics Digital"
                description="Read our Privacy Policy to understand how Globalytics Digital collects, uses, and protects your personal information."
                url="/privacy"
            />
            <PageHeader
                title="Privacy Policy"
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Privacy Policy' }
                ]}
            />

            <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-invert prose-cyan max-w-none text-gray-400 space-y-12"
                >
                    <div className="border-b border-white/10 pb-8">
                        <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Transparency & Trust</p>
                        <p className="text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                    <p className="leading-relaxed">
                        Globalytics Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Globalytics Digital.
                        <br /><br />
                        By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-4">
                            <li><strong>Personal Information:</strong> Name, email address, and phone number when you request a consultation.</li>
                            <li><strong>Usage Data:</strong> Technical data like IP addresses, browser types, and usage patterns.</li>
                            <li><strong>Cookies:</strong> Small files placed on your device to improve site performance and analytics.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the collected information for:</p>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>Providing requested digital marketing and training services.</li>
                            <li>Improving website performance and user experience.</li>
                            <li>Communication regarding project updates or academy courses.</li>
                            <li>Preventing fraudulent activity and ensuring security.</li>
                        </ul>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border-white/5">
                        <h2 className="text-xl font-bold text-white mb-4">Contact Our Privacy Officer</h2>
                        <p className="text-sm mb-6">If you have questions about your data privacy, reach out to us directly:</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <i className='bx bx-envelope text-primary'></i>
                                <a href="mailto:info@globalyticsdigital.in" className="hover:text-primary transition-colors">info@globalyticsdigital.in</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className='bx bx-phone text-primary'></i>
                                <a href="tel:+919669023005" className="hover:text-primary transition-colors">+91 96690 23005</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </section>

            <CTASection />
        </div>
    )
}

export default PrivacyPolicy
