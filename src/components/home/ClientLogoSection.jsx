
const row1Clients = [
    { name: 'Chandrasekars Solar', logo: '/Images/Home%20ScrollAnimation/1/Chandrasekars%20solar%20energy_Cropp.png' },
    { name: 'Aramsei', logo: '/Images/Home%20ScrollAnimation/1/aramsei.png' },
    { name: 'Asian Paint', logo: '/Images/Home%20ScrollAnimation/1/asianpaint.png' },
    { name: 'Billing Wale', logo: '/Images/Home%20ScrollAnimation/1/billing%20wale.png' },
    { name: 'Chaabi', logo: '/Images/Home%20ScrollAnimation/1/chaabi.png' },
    { name: 'Ednue', logo: '/Images/Home%20ScrollAnimation/1/ednue-logo.png' },
    { name: 'Edunnx', logo: '/Images/Home%20ScrollAnimation/1/edunnx.png' },
    { name: 'Eesha', logo: '/Images/Home%20ScrollAnimation/1/eesha.png' },
    { name: 'Fit For Tooth', logo: '/Images/Home%20ScrollAnimation/2/Fit_For_Tooth_Logo.png' },
    { name: 'Health Decoded', logo: '/Images/Home%20ScrollAnimation/2/HealthDecodedLogo.png' },
];

const row2Clients = [
    { name: 'Meetcupid', logo: '/Images/Home%20ScrollAnimation/2/Meetcupid.png' },
    { name: 'Meg Sun Organics', logo: '/Images/Home%20ScrollAnimation/2/Meg-_-Sun-Organics.png' },
    { name: 'Joshi Masala', logo: '/Images/Home%20ScrollAnimation/2/joshimasala.png' },
    { name: 'Make Your Toon', logo: '/Images/Home%20ScrollAnimation/2/make%20your%20toon.png' },
    { name: 'MRF', logo: '/Images/Home%20ScrollAnimation/2/mrf.png' },
    { name: 'NMC', logo: '/Images/Home%20ScrollAnimation/2/nmc_logo1.png' },
    { name: 'Socratech', logo: '/Images/Home%20ScrollAnimation/3/Socratech%20logo.png' },
    { name: 'Oilo', logo: '/Images/Home%20ScrollAnimation/3/oilo.png' },
    { name: 'Padma', logo: '/Images/Home%20ScrollAnimation/3/padma.png' },
    { name: 'Paradime', logo: '/Images/Home%20ScrollAnimation/3/paradime.png' },
];

const row3Clients = [
    { name: 'Proodle', logo: '/Images/Home%20ScrollAnimation/3/proodle.png' },
    { name: 'Sai Catering', logo: '/Images/Home%20ScrollAnimation/3/saicatering.png' },
    { name: 'Skilledu', logo: '/Images/Home%20ScrollAnimation/3/skilledu.png' },
    { name: 'TradeGig', logo: '/Images/Home%20ScrollAnimation/4/TradeGig.png' },
    { name: 'Zollabo', logo: '/Images/Home%20ScrollAnimation/4/Zollabo-.png' },
    { name: 'Authentic', logo: '/Images/Home%20ScrollAnimation/4/authentic.png' },
    { name: 'Opulence Forever', logo: '/Images/Home%20ScrollAnimation/4/opulence_forever.png' },
    { name: 'Tata Sky', logo: '/Images/Home%20ScrollAnimation/4/tatasky.png' },
    { name: 'Tofu Trips', logo: '/Images/Home%20ScrollAnimation/4/tofutrips.png' },
    { name: 'VSS', logo: '/Images/Home%20ScrollAnimation/4/vss.png' },
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
                        <div className="flex whitespace-nowrap animate-marquee-row hover:pause-marquee py-4">
                            {row1.map((client, index) => (
                                <div key={index} className="inline-flex items-center justify-center mx-10 md:mx-16 w-32 md:w-48 h-16 md:h-24 transition-all duration-500 hover:scale-125 grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex overflow-hidden group">
                        <div className="flex whitespace-nowrap animate-marquee-row-reverse hover:pause-marquee py-4">
                            {row2.map((client, index) => (
                                <div key={index} className="inline-flex items-center justify-center mx-10 md:mx-16 w-32 md:w-48 h-16 md:h-24 transition-all duration-500 hover:scale-125 grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex overflow-hidden group">
                        <div className="flex whitespace-nowrap animate-marquee-row-slow hover:pause-marquee py-4">
                            {row3.map((client, index) => (
                                <div key={index} className="inline-flex items-center justify-center mx-10 md:mx-16 w-32 md:w-48 h-16 md:h-24 transition-all duration-500 hover:scale-125 grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain"
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
