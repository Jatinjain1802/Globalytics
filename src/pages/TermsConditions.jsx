import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import SEO from '../components/common/SEO'
import { motion } from 'framer-motion'
import CTASection from '../components/home/CTASection'

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-dark text-white">
            <SEO
                title="Terms & Conditions | Globalytics Digital"
                description="Read our Terms and Conditions regarding the use of Globalytics Digital services and website."
                url="/terms"
            />
            <PageHeader
                title="Terms & Conditions"
                breadcrumbItems={[
                    { label: 'Home', link: '/' },
                    { label: 'Terms & Conditions' }
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
                        <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Service Agreement</p>
                        <p className="text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                    <p className="leading-relaxed">
                        Please read these terms and conditions carefully before using Our Service. By using our website or enrolling in our courses, you agree to comply with the following terms.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">1. Definitions</h2>
                        <ul className="list-disc pl-5 space-y-4">
                            <li><strong>Company:</strong> Globalytics Digital.</li>
                            <li><strong>Service:</strong> Our website, agency services, and academy training.</li>
                            <li><strong>You:</strong> The individual or entity accessing our services.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">2. Use of Service</h2>
                        <p>
                            Your access to the Service is conditioned on your acceptance of these Terms. These apply to all visitors, students, and clients who access or use our digital platforms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">3. Intellectual Property</h2>
                        <p>
                            All content, including course materials, website design, and proprietary marketing strategies, are the intellectual property of Globalytics Digital. Unauthorized distribution is prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">4. Limitation of Liability</h2>
                        <p>
                            While we strive for the highest quality in our agency work and training, the Company shall not be liable for indirect or consequential damages arising from the use of our services.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border-white/5">
                        <h2 className="text-xl font-bold text-white mb-4">Legal Inquiries</h2>
                        <p className="text-sm mb-6">For formal inquiries regarding our terms, please contact our legal desk:</p>
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

export default TermsConditions
