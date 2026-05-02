import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Header = () => {
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isAcademyOpen, setIsAcademyOpen] = useState(false)
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
    const [isMobileAcademyOpen, setIsMobileAcademyOpen] = useState(false)
    const servicesRef = useRef(null)
    const academyRef = useRef(null)

    // Agency Services
    const services = [
        { slug: 'seo', name: 'SEO', desc: 'Search Engine Optimisation', icon: 'bx-search-alt' },
        { slug: 'web-development', name: 'Web Dev', desc: 'Custom Design & Dev', icon: 'bx-code-alt' },
        { slug: 'google-ads', name: 'Google Ads', desc: 'PPC Management', icon: 'bx-bullseye' },
        { slug: 'meta-ads', name: 'Meta Ads', desc: 'Facebook & Instagram', icon: 'bxl-facebook-circle' },
        { slug: 'social-media', name: 'SMM', desc: 'Social Media Marketing', icon: 'bx-share-alt' },
        { slug: 'video-production', name: 'Video', desc: 'Production & Editing', icon: 'bx-video' },
        { slug: 'ecommerce', name: 'E-commerce', desc: 'Online Store Solutions', icon: 'bx-cart-alt' },
        { slug: 'web-applications', name: 'Web Apps', desc: 'Custom CRM & ERP', icon: 'bx-cog' },
        { slug: 'mobile-apps', name: 'Mobile Apps', desc: 'iOS & Android Dev', icon: 'bx-mobile-alt' },
    ];

    // Academy Courses
    const courses = [
        { slug: 'complete-digital-marketing', name: 'Digital Marketing', desc: '4 Months Flagship', icon: 'bx-book-open' },
        { slug: 'google-ads-mastery', name: 'Google Ads', desc: '6 Weeks Mastery', icon: 'bx-target-lock' },
        { slug: 'meta-ads-mastery', name: 'Meta Ads', desc: '6 Weeks Mastery', icon: 'bxl-instagram' },
        { slug: 'seo-mastery', name: 'SEO Mastery', desc: '8 Weeks Course', icon: 'bx-line-chart' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
        setIsAcademyOpen(false)
    }, [location])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setIsServicesOpen(false)
            }
            if (academyRef.current && !academyRef.current.contains(event.target)) {
                setIsAcademyOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const headerClasses = isScrolled
        ? "bg-[#0A0F1C]/80 backdrop-blur-xl py-3 border border-white/5 rounded-2xl mx-2 md:mx-4 mt-2.5"
        : "bg-transparent py-5 border-transparent mt-0"

    const navLinkBase = "relative text-sm font-bold uppercase tracking-widest transition-all duration-300 group"

    const getLinkClasses = (path) => {
        const active = location.pathname === path
        return `${navLinkBase} ${active ? "text-[#00C2E8]" : "text-white hover:text-[#00C2E8]"}`
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 font-sans">
            <header className={`px-6 md:px-12 transition-all duration-700 ease-in-out ${headerClasses}`}>
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center relative z-20 group">
                        <img
                            src="/Images/brand/logo.png"
                            alt="Globalytics Digital"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <Link to="/" className={getLinkClasses('/')}>Home</Link>
                        <Link to="/about" className={getLinkClasses('/about')}>About</Link>

                        {/* Services Dropdown */}
                        <div
                            ref={servicesRef}
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className={`${getLinkClasses('/services')} flex items-center gap-1`}>
                                Services
                                <i className={`bx bx-chevron-down text-lg transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                <div className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-4 w-[750px] grid grid-cols-3 gap-2 shadow-2xl">
                                    {services.map((s) => (
                                        <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00C2E8] group-hover:text-white transition-all">
                                                <i className={`bx ${s.icon} text-xl text-[#00C2E8] group-hover:text-white`}></i>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white group-hover:text-[#00C2E8]">{s.name}</h4>
                                                <p className="text-[10px] text-gray-500 uppercase">{s.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Academy Dropdown */}
                        <div
                            ref={academyRef}
                            className="relative"
                            onMouseEnter={() => setIsAcademyOpen(true)}
                            onMouseLeave={() => setIsAcademyOpen(false)}
                        >
                            <button className={`${getLinkClasses('/academy')} flex items-center gap-1`}>
                                Academy
                                <i className={`bx bx-chevron-down text-lg transition-transform ${isAcademyOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isAcademyOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                <div className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-4 w-[500px] grid grid-cols-2 gap-2 shadow-2xl">
                                    {courses.map((c) => (
                                        <Link key={c.slug} to={`/courses/${c.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
                                                <i className={`bx ${c.icon} text-xl text-[#4F46E5] group-hover:text-white`}></i>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white group-hover:text-[#4F46E5]">{c.name}</h4>
                                                <p className="text-[10px] text-gray-500 uppercase">{c.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
                    </nav>

                    {/* Right Action */}
                    <div className="hidden lg:block">
                        <Link to="/contact" className="px-6 py-2.5 bg-[#00C2E8] text-white rounded-lg text-sm font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,194,232,0.3)]">
                            Free Consultation
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white text-3xl z-20">
                        <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-[#0A0F1C] z-40 lg:hidden transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-10 pt-24 gap-6">
                    <Link to="/" className="text-2xl font-bold text-white">Home</Link>
                    <Link to="/about" className="text-2xl font-bold text-white">About</Link>
                    
                    <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-2xl font-bold text-white flex justify-between items-center">
                        Services <i className={`bx bx-chevron-down ${isMobileServicesOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {isMobileServicesOpen && (
                        <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                            {services.map(s => <Link key={s.slug} to={`/services/${s.slug}`} className="text-gray-400">{s.name}</Link>)}
                        </div>
                    )}

                    <button onClick={() => setIsMobileAcademyOpen(!isMobileAcademyOpen)} className="text-2xl font-bold text-white flex justify-between items-center">
                        Academy <i className={`bx bx-chevron-down ${isMobileAcademyOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {isMobileAcademyOpen && (
                        <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                            {courses.map(c => <Link key={c.slug} to={`/courses/${c.slug}`} className="text-gray-400">{c.name}</Link>)}
                        </div>
                    )}

                    <Link to="/contact" className="text-2xl font-bold text-white">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
