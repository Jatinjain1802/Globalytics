
const projects = [
    {
        title: 'Enterprise AI Ecosystem',
        category: 'AI & Machine Learning',
        tech: 'Python • TensorFlow • AWS',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Global Cloud Infrastructure',
        category: 'Cloud Computing',
        tech: 'AWS • Kubernetes • Terraform',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Cyber Defense Platform',
        category: 'Cybersecurity',
        tech: 'Node.js • Redis • ELK Stack',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Fintech Payment Rail',
        category: 'Financial Tech',
        tech: 'React • Go • PostgreSQL',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Industrial IoT Dashboard',
        category: 'IoT Solutions',
        tech: 'MQTT • React • Node-RED',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Digital Health Connect',
        category: 'Healthcare Tech',
        tech: 'Next.js • GraphQL • MongoDB',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
]

const PortfolioSection = () => {
    return (
        <section className="py-10 md:py-24 relative overflow-hidden">
            {/* Background Texture for Glassmorphism Context */}
            <div className="absolute inset-0 bg-gray-50 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50/40 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">Our Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Recent Work <span className="text-red-600">Showcase</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 border border-white/30">
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain p-2 bg-white transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay with Glassmorphism */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                                <span className="text-red-400 font-bold text-xs uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.category}</span>
                                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                                    {project.tech}
                                </p>
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-400 hover:bg-red-600 hover:border-red-600 text-white">
                                    <i className='bx bx-right-arrow-alt text-2xl'></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default PortfolioSection
