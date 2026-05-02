import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleBackground from './ParticleBackground'

const WORDS = ['Scale Your Brand', 'Build Your Career', 'Dominate Search', 'Master Digital Marketing']

const CountingNumber = ({ value }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTimestamp = null;
        const end = parseInt(value)
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [value])

    return <span>{count}</span>
}

const HeroSection = () => {
    const [typewriterText, setTypewriterText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % WORDS.length
            const fullWord = WORDS[i]

            setTypewriterText(isDeleting
                ? fullWord.substring(0, typewriterText.length - 1)
                : fullWord.substring(0, typewriterText.length + 1)
            )

            setTypingSpeed(isDeleting ? 75 : 150)

            if (!isDeleting && typewriterText === fullWord) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && typewriterText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [typewriterText, isDeleting, loopNum, typingSpeed])

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1C]">
            <ParticleBackground />

            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00C2E8]/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-[120px]"></div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#00C2E8 1px, transparent 1px), linear-gradient(90deg, #00C2E8 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6">
                            <span className="w-2 h-2 bg-[#00C2E8] rounded-full animate-ping"></span>
                            <span className="text-sm font-medium text-gray-300">India's Leading Agency & Academy</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            <span className="block text-white">We Grow Brands &</span>
                            <span className="gradient-text">Build Careers</span>
                        </h1>

                        <div className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 h-[40px]">
                            {typewriterText}<span className="text-[#00C2E8] animate-pulse">|</span>
                        </div>

                        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Globalytics Digital is your dual-path growth partner. We help businesses scale with expert marketing strategies and train the next generation of digital professionals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <Link to="/contact" className="px-8 py-4 bg-[#00C2E8] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,194,232,0.3)] hover:scale-105 transition-all duration-300 shine-hover text-center">
                                Grow Your Business
                            </Link>
                            <a href="#courses" className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all duration-300 text-center">
                                Explore Courses
                            </a>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { val: 200, suffix: '+', label: 'Clients' },
                                { val: 5, suffix: 'k+', label: 'Students' },
                                { val: 8, suffix: '+', label: 'Years' },
                                { val: 95, suffix: '%', label: 'Placement' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-white">
                                        <CountingNumber value={stat.val} />{stat.suffix}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Core */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Decorative Rings */}
                        <div className="absolute w-[300px] h-[300px] border border-[#00C2E8]/20 rounded-full animate-spin-slow"></div>
                        <div className="absolute w-[400px] h-[400px] border border-[#4F46E5]/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

                        {/* Central Master Illustration */}
                        <div className="relative z-10 w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#00C2E8]/10 backdrop-blur-3xl rounded-[60px] border border-white/10 rotate-6 shadow-2xl animate-pulse"></div>
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[60px] border border-white/10 -rotate-3"></div>
                            
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[50px] overflow-hidden border border-white/20 shadow-2xl"
                            >
                                <img 
                                    src="/Images/brand/hero-main.png" 
                                    alt="Globalytics Master Illustration" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0A0F1C]/60 to-transparent"></div>
                            </motion.div>
                        </div>

                        {/* Floating Labels */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }} 
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-0 right-0 glass-card px-4 py-2 rounded-xl text-xs font-bold border border-[#00C2E8]/30"
                        >
                            #1 SEO Agency
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, 10, 0] }} 
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-10 left-0 glass-card px-4 py-2 rounded-xl text-xs font-bold border border-[#4F46E5]/30"
                        >
                            Practical Training
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-[#00C2E8] rounded-full"
                    ></motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
