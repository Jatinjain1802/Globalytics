
const row1Clients = [
    { name: 'Partner 1', logo: '/Images/Home%20ScrollAnimation/1/WhatsApp_Image_2026-05-02_at_1.42.29_PM-removebg-preview.webp' },
    { name: 'Partner 2', logo: '/Images/Home%20ScrollAnimation/1/WhatsApp_Image_2026-05-02_at_1.44.13_PM-removebg-preview.webp' },
    { name: 'Partner 3', logo: '/Images/Home%20ScrollAnimation/1/WhatsApp_Image_2026-05-02_at_1.50.04_PM-removebg-preview.webp' },
    { name: 'Partner 4', logo: '/Images/Home%20ScrollAnimation/1/WhatsApp_Image_2026-05-02_at_1.50.05_PM-removebg-preview.webp' },
    { name: 'Partner 5', logo: '/Images/Home%20ScrollAnimation/1/WhatsApp_Image_2026-05-02_at_1.50.05_PM__1_-removebg-preview.webp' },
    { name: 'Partner 6', logo: '/Images/Home%20ScrollAnimation/1/WhatsApp_Image_2026-05-02_at_1.50.05_PM__2_-removebg-preview.webp' },
];

const row2Clients = [
    { name: 'Divya Tour', logo: '/Images/Home%20ScrollAnimation/1/divya_tour_____3_-removebg-preview.webp' },
    { name: 'Nature Trip', logo: '/Images/Home%20ScrollAnimation/1/nature_trip_31012026__Instagram_Post__45__-removebg-preview.webp' },
    { name: 'Shanti Lala', logo: '/Images/Home%20ScrollAnimation/1/shnati_lala_munnalal_reel_last_page__3_-removebg-preview.webp' },
    { name: 'Partner 7', logo: '/Images/Home%20ScrollAnimation/2/WhatsApp_Image_2026-05-02_at_1.42.29_PM-removebg-preview.webp' },
    { name: 'Partner 8', logo: '/Images/Home%20ScrollAnimation/2/WhatsApp_Image_2026-05-02_at_1.44.13_PM-removebg-preview.webp' },
    { name: 'Partner 9', logo: '/Images/Home%20ScrollAnimation/2/WhatsApp_Image_2026-05-02_at_1.50.04_PM-removebg-preview.webp' },
];

const row3Clients = [
    { name: 'Partner 10', logo: '/Images/Home%20ScrollAnimation/3/WhatsApp_Image_2026-05-02_at_1.50.05_PM-removebg-preview.webp' },
    { name: 'Partner 11', logo: '/Images/Home%20ScrollAnimation/3/WhatsApp_Image_2026-05-02_at_1.50.05_PM__1_-removebg-preview.webp' },
    { name: 'Partner 12', logo: '/Images/Home%20ScrollAnimation/3/WhatsApp_Image_2026-05-02_at_1.50.05_PM__2_-removebg-preview.webp' },
    { name: 'Partner 13', logo: '/Images/Home%20ScrollAnimation/4/divya_tour_____3_-removebg-preview.webp' },
    { name: 'Partner 14', logo: '/Images/Home%20ScrollAnimation/4/nature_trip_31012026__Instagram_Post__45__-removebg-preview.webp' },
    { name: 'Partner 15', logo: '/Images/Home%20ScrollAnimation/4/shnati_lala_munnalal_reel_last_page__3_-removebg-preview.webp' },
];

const ClientLogoSection = () => {
    // We duplicate the arrays to create a seamless loop
    const row1 = [...row1Clients, ...row1Clients];
    const row2 = [...row2Clients, ...row2Clients];
    const row3 = [...row3Clients, ...row3Clients];

    return (
        <section className="py-20 bg-dark overflow-hidden border-y border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4 block"># OUR PARTNER NETWORK</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Powering Growth for <span className="gradient-text">Leading Brands</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    We've helped established businesses and disruptive startups scale their impact through digital excellence.
                </p>
            </div>

            <div className="relative w-full space-y-8">
                {/* Visual Enhancers: Gradient Overlays for smooth entry/exit */}
                <div className="absolute left-0 top-0 h-full w-32 md:w-80 bg-linear-to-r from-dark via-dark/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-32 md:w-80 bg-linear-to-l from-dark via-dark/80 to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Container */}
                <div className="flex flex-col gap-12">
                    {/* First Row */}
                    <div className="flex overflow-hidden group">
                        <div className="flex whitespace-nowrap animate-marquee-row hover:pause-marquee py-2">
                            {row1.map((client, index) => (
                                <div key={index} className="inline-flex items-center justify-center mx-6 md:mx-10 w-24 md:w-36 h-12 md:h-20 transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                        width="150"
                                        height="80"
                                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex overflow-hidden group">
                        <div className="flex whitespace-nowrap animate-marquee-row-reverse hover:pause-marquee py-2">
                            {row2.map((client, index) => (
                                <div key={index} className="inline-flex items-center justify-center mx-6 md:mx-10 w-24 md:w-36 h-12 md:h-20 transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                        width="150"
                                        height="80"
                                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex overflow-hidden group">
                        <div className="flex whitespace-nowrap animate-marquee-row-slow hover:pause-marquee py-2">
                            {row3.map((client, index) => (
                                <div key={index} className="inline-flex items-center justify-center mx-6 md:mx-10 w-24 md:w-36 h-12 md:h-20 transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                        width="150"
                                        height="80"
                                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <style>
                {`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-row {
                    animation: marquee-scroll 45s linear infinite;
                }
                .animate-marquee-row-reverse {
                    animation: marquee-scroll 55s linear infinite reverse;
                }
                .animate-marquee-row-slow {
                    animation: marquee-scroll 65s linear infinite;
                }
                .pause-marquee:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
        </section>
    );
};


export default ClientLogoSection;
