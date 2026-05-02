import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
                setIsOpen(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-dark text-white font-sans relative">
            {/* Global Background Decorations for Glassmorphism */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <Header />
            
            <main className="flex-1 w-full relative z-10">
                <Outlet />
            </main>
            
            <Footer />

            {/* Floating Action Buttons */}
            <AnimatePresence>
                {isVisible && (
                    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                        <style>
                            {`
                            @keyframes cyan-wave {
                                0% { transform: scale(1); opacity: 0.8; }
                                100% { transform: scale(1.5); opacity: 0; }
                            }
                            .animate-wave-cyan::before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                border-radius: 50%;
                                background: #00C2E8;
                                z-index: -1;
                                animation: cyan-wave 2s infinite;
                            }
                            `}
                        </style>

                        {/* Sub Buttons (WhatsApp & Call) */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                                    className="flex flex-col gap-4 mb-2"
                                >
                                    {/* WhatsApp Button */}
                                    <motion.a
                                        href="https://wa.me/919669023005?text=Hi%20Globalytics%20Digital"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center group relative"
                                        aria-label="Chat on WhatsApp"
                                    >
                                        <i className='bx bxl-whatsapp text-2xl'></i>
                                        <span className="absolute right-full mr-3 glass text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                                            WhatsApp Concierge
                                        </span>
                                    </motion.a>

                                    {/* Call Button */}
                                    <motion.a
                                        href="tel:+919669023005"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center group relative"
                                        aria-label="Call Us"
                                    >
                                        <i className='bx bx-phone-call text-xl'></i>
                                        <span className="absolute right-full mr-3 glass text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                                            Direct Call
                                        </span>
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Toggle Button */}
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-14 h-14 bg-primary text-white rounded-full shadow-xl shadow-primary/40 flex items-center justify-center relative z-10 ${!isOpen ? 'animate-wave-cyan' : ''}`}
                        >
                            <i className={`bx ${isOpen ? 'bx-x' : 'bx-message-square-dots'} text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MainLayout
