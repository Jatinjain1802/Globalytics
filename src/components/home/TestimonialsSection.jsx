import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const testimonials = [
    {
        name: 'Arpit Sharma',
        role: 'Founder, TechStart',
        content: "Globalytics transformed our digital presence. Their SEO strategy brought us to the first page of Google within months. Highly professional team!"
    },
    {
        name: 'Priya Verma',
        role: 'Marketing Head, RetailPlus',
        content: "The Meta Ads campaign managed by Globalytics saw a 4x return on ad spend. Their data-driven approach is what set them apart from other agencies."
    },
    {
        name: 'Rahul Jain',
        role: 'Student, Academy',
        content: "The Digital Marketing course at Globalytics Academy is top-notch. I learned practical skills that helped me land a job immediately after graduation."
    },
    {
        name: 'Sneha Gupta',
        role: 'Business Owner',
        content: "Their video production team is amazing. The brand film they created for us received thousands of views and significantly boosted our brand recall."
    }
]

const benefits = [
    "Expertise in Regional & Global Markets.",
    "Practitioner-led Agency & Academy.",
    "Data-Driven Growth Strategies.",
    "Lifetime Support & Consulting."
]

const TestimonialsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#0A0F1C]">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C2E8]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4F46E5]/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#00C2E8] font-bold tracking-wider uppercase text-sm mb-3 block">SUCCESS STORIES</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Trust of 500+ <span className="gradient-text">Brands & Students</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pr-10"
                    >
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 leading-relaxed">
                            We don't just provide services; we build long-term partnerships for growth.
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            From helping local businesses go digital to training the next generation of marketing experts, our impact is measured by the success of our clients and students.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#00C2E8]/20 flex items-center justify-center text-[#00C2E8] text-xs shrink-0">
                                        <i className='bx bx-check font-bold'></i>
                                    </div>
                                    <span className="text-gray-300 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Review Card Slider */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation, EffectFade]}
                            spaceBetween={30}
                            slidesPerView={1}
                            effect={'fade'}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            className="w-full pb-12"
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div className="glass-card p-10 md:p-12 rounded-4xl border-white/5 relative">
                                        <div className="flex text-[#00C2E8] text-lg mb-6">
                                            {[...Array(5)].map((_, i) => <i key={i} className='bx bxs-star'></i>)}
                                        </div>
                                        <div className="absolute top-10 right-10 text-6xl text-white/5 font-serif font-bold leading-none">
                                            <i className='bx bxs-quote-right'></i>
                                        </div>
                                        <p className="text-gray-300 text-lg italic leading-loose mb-8 relative z-10">
                                            "{t.content}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#00C2E8] to-[#4F46E5] flex items-center justify-center border-2 border-white/10 shrink-0">
                                                <span className="text-xl font-bold text-white">{t.name.charAt(0)}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                                                <span className="text-sm text-[#00C2E8] font-medium">{t.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
            <style jsx="true">{`
                .swiper-pagination-bullet {
                    background: #00C2E8 !important;
                    opacity: 0.3;
                    width: 8px;
                    height: 8px;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 24px;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                .swiper-pagination {
                    bottom: 0 !important;
                }
            `}</style>
        </section>
    )
}

export default TestimonialsSection
