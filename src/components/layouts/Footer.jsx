import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const services = [
        { name: 'SEO Strategy', path: '/services/seo' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Google Ads', path: '/services/google-ads' },
        { name: 'Meta Ads', path: '/services/meta-ads' },
        { name: 'Social Media', path: '/services/social-media' },
        { name: 'Video Production', path: '/services/video-production' },
    ]

    const academy = [
        { name: 'Digital Marketing Course', path: '/courses/complete-digital-marketing' },
        { name: 'Google Ads Mastery', path: '/courses/google-ads-mastery' },
        { name: 'Meta Ads Mastery', path: '/courses/meta-ads-mastery' },
        { name: 'SEO Mastery', path: '/courses/seo-mastery' },
    ]

    return (
        <footer className="bg-[#0A0F1C] text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="Globalytics Digital"
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We Grow Brands & Build Careers. India's trusted digital marketing agency and academy.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'linkedin', 'whatsapp'].map((s, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00C2E8] hover:text-white transition-all">
                                    <i className={`bx bxl-${s} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Agency Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#00C2E8]">Agency</h4>
                        <ul className="space-y-4">
                            {services.map((s, i) => (
                                <li key={i}>
                                    <Link to={s.path} className="text-gray-500 hover:text-white text-sm transition-colors">{s.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academy Courses */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#4F46E5]">Academy</h4>
                        <ul className="space-y-4">
                            {academy.map((a, i) => (
                                <li key={i}>
                                    <Link to={a.path} className="text-gray-500 hover:text-white text-sm transition-colors">{a.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex gap-3">
                                <i className='bx bx-map text-[#00C2E8] text-xl'></i>
                                <span>India Offices: Chennai | Indore | Ujjain</span>
                            </li>
                            <li className="flex gap-3">
                                <i className='bx bx-phone text-[#00C2E8] text-xl'></i>
                                <a href="tel:+918305924454" className="hover:text-white">+91 83059 24454</a>
                            </li>
                            <li className="flex gap-3">
                                <i className='bx bx-envelope text-[#00C2E8] text-xl'></i>
                                <a href="mailto:info@globalyticsdigital.in" className="hover:text-white">info@globalyticsdigital.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} <span className="text-white font-bold">Globalytics Digital</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
