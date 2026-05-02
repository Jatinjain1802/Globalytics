import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Company atmosphere photos from Unsplash
const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', alt: 'Team Collaboration' },
    { id: 2, src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80', alt: 'Office Meeting' },
    { id: 3, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', alt: 'Team Discussion' },
    { id: 4, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80', alt: 'Workspace' },
    { id: 5, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', alt: 'Business Meeting' },
    { id: 6, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', alt: 'Team Brainstorming' },
    { id: 7, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', alt: 'Team Celebration' },
    { id: 8, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Modern Office' },
    { id: 9, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', alt: 'Tech Team' },
    { id: 10, src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', alt: 'Presentation' },
    { id: 11, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80', alt: 'Team Unity' },
    { id: 12, src: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423571?w=600&q=80', alt: 'Developer at Work' },
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-8">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3"
                    >
                        Life at Geek Theory
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        Our <span className="text-red-600">Gallery</span>
                    </motion.h2>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="break-inside-avoid mb-4 rounded-xl shadow-lg overflow-hidden bg-white cursor-pointer relative z-10 inline-block w-full"
                            onClick={() => setSelectedImg(image)}
                        >
                            <div className="overflow-hidden">
                                <img
                                    alt={image.alt}
                                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                    src={image.src}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors z-[1001]"
                            onClick={() => setSelectedImg(null)}
                        >
                            <i className='bx bx-x text-3xl'></i>
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg.src.replace('w=600', 'w=1200')}
                                alt={selectedImg.alt}
                                className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                                <h3 className="text-white text-xl font-bold">{selectedImg.alt}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
