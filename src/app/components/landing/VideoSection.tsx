import { motion } from 'motion/react';
import { WhatsAppButton } from '../WhatsAppButton';

interface VideoSectionProps {
    autoPlay?: boolean;
}

export const VideoSection = ({ autoPlay = false }: VideoSectionProps) => {
    return (
        <section id="video" className="py-20 px-4 md:px-8 bg-white scroll-mt-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Descubre cómo digitalizar tu negocio
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        En este video te explico, de forma sencilla, cómo funciona la digitalización de un negocio y por qué hoy es una gran oportunidad.
                    </p>

                    {/* Video Container with Glow Effect */}
                    <div className="relative mb-12">
                        {/* Glow Gradient */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl blur-xl opacity-50" />

                        {/* Actual Video Card */}
                        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900/5">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/MGY-pA-sVaU${autoPlay ? '?autoplay=1&mute=0' : ''}`}
                                    title="Descubre cómo digitalizar tu negocio"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <WhatsAppButton className="w-full max-w-md mx-auto text-lg hover:scale-105">
                        Quiero saber si esto le conviene a mi negocio
                    </WhatsAppButton>
                </motion.div>
            </div>
        </section>
    );
};
