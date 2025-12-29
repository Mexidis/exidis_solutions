import { motion } from 'motion/react';
import { WhatsAppButton } from '../WhatsAppButton';
import logo from '../../../images/logo.png';

interface HeroSectionProps {
    onDiscoverClick?: () => void;
}

export const HeroSection = ({ onDiscoverClick }: HeroSectionProps) => {
    const scrollToVideo = () => {
        if (onDiscoverClick) {
            onDiscoverClick();
        }
        const videoSection = document.getElementById('video');
        if (videoSection) {
            videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-8 md:py-16 lg:px-8">
            {/* Header/Branding */}
            <div className="w-full max-w-7xl mx-auto mb-12 md:mb-0">
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Exidis Soluciones Digitales"
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />

                    {/* Branding Text */}
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            Exidis Soluciones Digitales
                        </h1>
                        <p className="text-sm md:text-base text-gray-400">
                            Hacemos crecer a tu negocio en el mundo digital
                        </p>
                    </div>
                </div>
            </div>


            {/* Main Content - Centered */}
            <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Main Headline */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        Haz que tu negocio aparezca en internet y <span className="text-blue-400">genere confianza</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        Ayudamos a negocios <span className="text-green-300">zacatecanos</span> a digitalizarse de forma simple, profesional y efectiva.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
                        <WhatsAppButton className="w-full sm:w-auto text-lg font-semibold px-8">
                            Explorar mi solución digital
                        </WhatsAppButton>

                        <button
                            onClick={scrollToVideo}
                            className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-95 font-medium"
                        >
                            Descubre cómo
                        </button>
                    </div>

                    {/* Trust Line */}
                    <p className="text-sm text-gray-400 pt-4 font-medium">
                        Sin complicaciones técnicas · Pensado para negocios reales
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
