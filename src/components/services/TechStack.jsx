import { useState } from 'react'
import { motion } from 'framer-motion'

const technologies = [
    // Frontend
    { name: 'React', icon: 'bxl-react', category: 'Web & App' },
    { name: 'Next.js', icon: 'bx-code-alt', category: 'Web & App' },
    { name: 'Angular', icon: 'bxl-angular', category: 'Web & App' },
    { name: 'Vue.js', icon: 'bxl-vuejs', category: 'Web & App' },
    { name: 'Redux', icon: 'bxl-redux', category: 'Web & App' },
    { name: 'TypeScript', icon: 'bxl-typescript', category: 'Core Systems' },
    { name: 'Tailwind', icon: 'bxl-tailwind-css', category: 'Visual Design' },
    { name: 'Bootstrap', icon: 'bxl-bootstrap', category: 'Visual Design' },

    // Backend
    { name: 'Node.js', icon: 'bxl-nodejs', category: 'Core Systems' },
    { name: 'Express.js', icon: 'bxl-nodejs', category: 'Core Systems' },
    { name: 'Django', icon: 'bxl-python', category: 'Core Systems' },
    { name: 'Laravel', icon: 'bxl-php', category: 'Core Systems' },
    { name: 'Spring Boot', icon: 'bx-code', category: 'Core Systems' },

    // Databases
    { name: 'MongoDB', icon: 'bxl-mongodb', category: 'Data Storage' },
    { name: 'PostgreSQL', icon: 'bxl-postgresql', category: 'Data Storage' },
    { name: 'MySQL', icon: 'bxl-mysql', category: 'Data Storage' },
    { name: 'Redis', icon: 'bx-data', category: 'Data Storage' },

    // Cloud & DevOps
    { name: 'AWS', icon: 'bxl-aws', category: 'Cloud Power' },
    { name: 'Google Cloud', icon: 'bx-cloud', category: 'Cloud Power' },
    { name: 'Microsoft Azure', icon: 'bx-cloud-lightning', category: 'Cloud Power' },
    { name: 'Docker', icon: 'bxl-docker', category: 'Smooth Operations' },
    { name: 'Kubernetes', icon: 'bx-network-chart', category: 'Smooth Operations' },
    { name: 'CI/CD', icon: 'bx-git-branch', category: 'Smooth Operations' },

    // Tools & Version Control
    { name: 'Git', icon: 'bxl-git', category: 'Smooth Operations' },
    { name: 'GitHub', icon: 'bxl-github', category: 'Smooth Operations' },
    { name: 'Bitbucket', icon: 'bxl-bitbucket', category: 'Smooth Operations' },
    { name: 'Jira', icon: 'bx-task', category: 'Project Management' },

    // AI & Smart Tech
    { name: 'Python', icon: 'bxl-python', category: 'Smart Features' },
    { name: 'TensorFlow', icon: 'bx-brain', category: 'Smart Features' },
    { name: 'OpenAI API', icon: 'bx-bot', category: 'Smart Features' },
    { name: 'GraphQL', icon: 'bxl-graphql', category: 'Smart Features' },

    // Design & UI
    { name: 'Figma', icon: 'bxl-figma', category: 'Visual Design' },
    { name: 'Adobe XD', icon: 'bx-palette', category: 'Visual Design' }
];


const TechStack = () => {
    const [showAll, setShowAll] = useState(false)
    const visibleTechnologies = showAll ? technologies : technologies.slice(0, 10)

    return (
        <section className="py-20 bg-dark border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-[10px]"># OUR TOOLKIT</span>
                    <h2 className="text-4xl font-bold text-white mt-3">Modern Tools for <span className="gradient-text">Speed & Security</span></h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {visibleTechnologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="glass-card rounded-3xl p-8 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl text-gray-500 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,194,232,0.1)]">
                                <i className={`bx ${tech.icon}`}></i>
                            </div>

                            <h3 className="font-bold text-white mb-3 text-center">{tech.name}</h3>

                            <span className="px-3 py-1 rounded-full bg-white/5 text-gray-500 text-[9px] font-bold uppercase tracking-wider group-hover:text-primary transition-all duration-300">
                                {tech.category}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {!showAll && (
                    <div className="mt-12 text-center">
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setShowAll(true)}
                            className="group relative inline-flex px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-bold hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            <span className="mr-2">Explore Full Stack</span>
                            <i className="bx bx-chevron-down text-xl group-hover:translate-y-1 transition-transform duration-300"></i>
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TechStack
